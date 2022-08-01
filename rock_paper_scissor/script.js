// function display()
// {
//     let parent = document.querySelector("div");
//     console.log(parent);

//     let para = document.createElement('p');
// console.log(para);
//     para.value = "Hello, World!";
//     parent.appendChild(para);
// }

function addParagraph(elem){
    let input = prompt("enter paragraph you want to add");
    
    let parent = document.querySelector("div");
    let child = document.createElement('p');
    
    child.innerHTML = input;
    parent.appendChild(child);
}