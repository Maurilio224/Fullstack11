const form = document.querySelector("form");
form.addEventListener("submit",(evt) => submit(evt))

async function submit(event) {
    event.preventDefault();

    let post = {
        title: document.getElementById("todo-title").value,
        completed: document.getElementById("todo-completed").checked
    } 
    
    let request = new Request("https://jsonplaceholder.typicode.com/posts",
    { 
        method:"POST",
        body:JSON.stringify(post)
    }
    );

    let response = await fetch(request)
    console.log(response.status)
}
//let button = document.getElementById("submit-todo");
//button.addEventListener("click", submit);