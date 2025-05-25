let todobutton = document.getElementById('add');
let todoContainer = document.getElementById('todo');
let inputfield = document.getElementById('Field');

todobutton.addEventListener('click', function() {
    var paragraph = document.createElement('p');
    paragraph.innerText = inputfield.value; 
    todoContainer.appendChild(paragraph);
    inputfield.value = "";
    paragraph.addEventListener('click',function()
{
    paragraph.style.textDecoration = "line-through";
})
    paragraph.addEventListener('dblclick',function()
{
    todoContainer.removeChild(paragraph);
})
})