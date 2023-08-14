const form=document.getElementById("addForm");
const itemList=document.getElementById("items");

// Form submit event
form.addEventListener("submit",addItem);

// Add item
function addItem(e){
    e.preventDefault();

    // get input value
    const newItem=document.getElementById("item").value;


    // create new li element
    const li=document.createElement("li");
    li.className="list-group-item";
    // add text node with input value
    li.appendChild(document.createTextNode(newItem)); 
    itemList.appendChild(li);
}