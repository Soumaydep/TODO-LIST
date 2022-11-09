const todoInput=document.querySelector(".todo-input");
const addBtn=document.querySelector(".add-btn");
const delBtn=document.querySelector(".del-btn");
const todoList=document.querySelector(".todo-list");
const todoinput=document.querySelector(".todo-input");
const span=document.querySelector(".todo-items span");
const todobox=document.querySelector(".todo-box");


todobox.addEventListener("click",function(e)
{
    if(e.target.classList.contains("add-btn")){
    var newText=todoInput.value;
    if(!newText.length){
        alert('Please enter a todo task')
    }
    else{
    todoList.innerHTML+=  ` <li class="todo-items">
                        <span class="spntext">${newText}</span>
                              <div class=" btns">
                                 <button class="done-btn">Done</button>
                                 <button class="del-btn">Delete</button>
                        </div>
                        </li>`
    console.log(todoList);
    todoinput.value="";
    }
}
});


todoList.addEventListener("click",function(e){
    // console.log(e.target);
    // console.log("you clicked del btn");
    if(e.target.classList.contains("del-btn"))
    {
        // console.log(e.target.parentNode);
        targetli=e.target.parentNode.parentNode;
        console.log(targetli);
        targetli.remove();
    }
})

todoList.addEventListener("click",function(e){
    // console.log(e.target.textContent);
    if(e.target.classList.contains("done-btn")){
    const spntxt=e.target.parentNode.parentNode.firstElementChild;
    console.log(spntxt);
    spntxt.style.textDecoration="line-through";
    }
})


