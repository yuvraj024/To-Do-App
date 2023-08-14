// console.dir(document)
let itemList=document.querySelector("#items");
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);

//  console.log(itemList.children);
// itemList.children[1].style.backgroundColor="yellow";
// console.log(itemList.firstElementChild);

// console.log(itemList.nextSibling); //text node we dont recommend it 
// console.log(itemList.nextElementSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.textContent="hello"

//  const newdiv=document.createElement("div");
//  newdiv.className="hello"
//  newdiv.id="hello1"
//  newdiv.setAttribute("title","hello div")
//  const newDivText=document.createTextNode("Hello world");
//  newdiv.appendChild(newDivText);
//  const container=document.querySelector("header .container");
//  const h1=document.querySelector("header h1");
//  container.insertBefore(newdiv,h1)
// container.appendChild(newdiv)

//  console.log(newdiv);
// _________________________________________________________
// EVENTS
// const button=document.getElementById("button").addEventListener("click",buttonClick);
// button.addEventListener("click",buttonClick);
// function buttonClick(e){
    // document.getElementById("header-title").textContent="Changed";
    // document.querySelector("#main").style.backgroundColor="#f4f4f4"
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.className);
    // console.log(e.type);
    // console.log(e.clientX);    window /browser se
    // console.log(e.offsetX);   actual element se 
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
// }
const button=document.getElementById("button");

// button.addEventListener("click",runEvent);
// button.addEventListener("dblclick",runEvent);
// button.addEventListener("mousedown",runEvent);
// button.addEventListener("mousedown",runEvent);
const box=document.getElementById("box");
// box.addEventListener("mouseenter",runEvent)
// box.addEventListener("mouseleave ",runEvent)
// box.addEventListener("mouseover ",runEvent)    //actual content pr 
// box.addEventListener("mousemove",runEvent);
const itemInput=document.querySelector("input[type='text']");
const form=document.querySelector("form");
const select=document.querySelector("select");
// itemInput.addEventListener('keydown',runEvent);
// itemInput.addEventListener('keyup',runEvent);
// itemInput.addEventListener('keypress',runEvent);
// itemInput.addEventListener('input',runEvent);
// select.addEventListener("change",runEvent
// )
form.addEventListener("submit",runEvent)
function runEvent(e){
    e.preventDefault();
    console.log("Event TYPE:"+e.type);
    
    // console.log(e.target.value);
    // document.getElementById("output").innerHTML="<h3>"+e.target.value+"</h3>";
    // document.body.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)";
}
 
