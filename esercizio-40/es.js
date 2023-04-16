async function recorveyList(){
    let response = await fetch("https://jsonplaceholder.typicode.com/todos");
    let list = await response.json();
    let ul = document.querySelector(".todo-list");

    list.forEach(todo => {
       let li = document.createElement("li")
       li.innerText = todo.title

       ul.appendChild(li)
    });
}
recorveyList()