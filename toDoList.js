  const todoList = []
  renderArray()


  //add btn
  document.querySelector('.js-todo')
  .addEventListener('click', ()=>{
      addTodo()
  })

  //FUNCTION AddTodo
  function addTodo(){
    const inputElement = document.querySelector('.js-name-input')
    const name = inputElement.value
    const dateInputElement = document.querySelector('.js-date-input')
    const dueDate = dateInputElement.value

    todoList.push({
        name,
        dueDate
    })
    inputElement.value = ''
    renderArray()
  }

  function renderArray(){
    let todoListHtml =''
    todoList.forEach((todoObj,index) => {

        const {name, dueDate} = todoObj
        const html = `
        <div>${name}</div>
         <div>${dueDate}</div>
            <button class= "todo-delete-btn 
            del-btn">Delete</button>
        `
        
        todoListHtml += html 
    })
    document.querySelector('.js-todo-list')
        .innerHTML = todoListHtml 

    document.querySelectorAll('.del-btn')
        .forEach((delBtn,index)=>{
           delBtn.addEventListener('click', ()=>{
            todoList.splice(index,1)
            renderArray()
           }) 
        })
    }
 
    


/* forEach practice
[
    'john',
    'peter',
    'faith'
].forEach((value,index)=>{
    value--- it takes the value of the array
    index --- the array position
    console.log(index)
    console.log(value)
})
*/


   