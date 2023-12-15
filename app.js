const form = document.querySelector('#todoform');
let newTodo;
let newDiv;
let doneButton;
let removeButton;
let todoInput = document.querySelector('input[name="TodoDesc"]');
form.addEventListener('submit', function(e){
  e.preventDefault();
  console.log("Submit !! ", todoInput.value);
  newTodo = document.createElement('li');
  newDiv = document.createElement('div');
  newDiv.textContent = todoInput.value;
  newTodo.append(newDiv);
  doneButton = document.createElement('button');
  doneButton.textContent = "Mark Done";
  removeButton = document.createElement('button');
  removeButton.textContent = "Remove Todo";

  doneButton.addEventListener("click", handleDone);


  newTodo.append(doneButton);
  newTodo.append(removeButton);
  document.querySelector('ul').append(newTodo);
})

function handleDone(event) {
  console.log("Made it to handleDone func: ", event.target.parentElement);
  let parentEl = event.target.parentElement;
  let divEl = parentEl.children[0];
  //divEl.classList.add('strikethrough');
  console.log(divEl.textContent);
  //divEl.textContent = "<s>"+divEl.textContent+"</s>";
  divEl.style.textDecoration = "line-through";


}