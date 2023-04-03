(function() {


    function createAppTitle(title){
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }


    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите дело'
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn','btn-primary');
        button.textContent = 'Добавить дело'
        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        input.addEventListener('input', function(){
            if(input.value !== "") {
                button.disabled = false
            } else {
                button.disabled = true
            }
        })

    return{
        form,
        input,
        button
    }}
function CreateTodoLIst() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list
}

function createTodoItem(name) {
    let item = document.createElement('li');
    let buttonGroup = document.createElement('div');
    let doneButtton = document.createElement('button');
    let deleteButton = document.createElement('button');
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = name
    

    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButtton.classList.add('btn', 'btn-success');
    doneButtton.textContent = 'Завершить';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

    buttonGroup.append(doneButtton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);


    return{
        item,
        deleteButton,
        doneButtton,
    }
}

function createTodoApp(container, title = 'Список дел') {

    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = CreateTodoLIst();

    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    todoItemForm.form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (!todoItemForm.input.value){
            return;
        }

        let todoItem = createTodoItem(todoItemForm.input.value);

        todoItem.doneButtton.addEventListener('click', function() {
                todoItem.item.classList.toggle('list-group-item-success'); 
        })

        todoItem.deleteButton.addEventListener('click', function(){
            if(confirm('Вы уверены, что хотите безвозвратно удалить запись?'))
                todoItem.item.remove()
                todoItem.deleteButton.remove();
        })

        todoList.append(todoItem.item);
        todoList.append(todoItem.deleteButton)

        todoItemForm.input.value = '';
    })
}

window.createTodoApp = createTodoApp;


}) ();