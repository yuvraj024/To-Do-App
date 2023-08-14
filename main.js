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

    // Create the delete button element
    const deleteBtn=document.createElement("button");
    deleteBtn.className="btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode("X"));
    
    //  append the button to li and li to main ul
    li.appendChild(deleteBtn);
    itemList.appendChild(li);
}