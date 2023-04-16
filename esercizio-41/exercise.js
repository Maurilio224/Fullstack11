async function recoveryTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/4')
    const todo = await response.json()

    let title = document.createElement("h2");
    title.innerText = todo.title;

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type","checkbox");
    //checkbox.type = "checkbox"
    checkbox.checked = todo.completed;

    let divContainer = document.getElementById("container");

    divContainer.appendChild(title);
    divContainer.appendChild(checkbox);
}
recoveryTodo()

