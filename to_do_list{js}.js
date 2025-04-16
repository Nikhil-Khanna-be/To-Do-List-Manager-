let todoList = [];

renderToDoList();

function renderToDoList () {
    let todoListHTML = [];

    for(let i = 0 ; i<todoList.length ; i++){
        const toDoObject = todoList[i];
        // const name = toDoObject.name;
        // const dueDate = toDoObject.dueDate;

        const {name , dueDate} = toDoObject;

        const html = `
                        <div>
                        ${name}
                        </div>
                        <div>
                        ${dueDate}
                        </div>
                        <button class="delete-todo-button" onclick = "
                            todoList.splice(${i},1);
                            renderToDoList();
                        " > Delete </button>
                        `;
        todoListHTML += html;
    }

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

};


function addToDo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');

    const dueDate = dateInputElement.value;

    todoList.push( {
        name : name ,
        dueDate : dueDate
    } );

    inputElement.value = '';

    renderToDoList();

};