const form=document.getElementById("addForm");
const itemList=document.getElementById("items");
const filter=document.getElementById("filter");

// Form submit event
form.addEventListener("submit",addItem);
// Delete Event
itemList.addEventListener("click",removeItem);
//Search Event
filter.addEventListener("keyup",filterItems);
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


// Remove item
function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are You Sure?")){
            const li=e.target.parentElement;    //bcoj target is btn(child to li)
            itemList.removeChild(li);
        }
    }
}


// Filter Items

function filterItems(e){
     //convert text to lower case
     const text=e.target.value.toLowerCase();
    //  get list of elements
     const items=itemList.getElementsByTagName("li");
    //  convert to Array
    Array.from(items).forEach(function(item){
        const itemName=item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display="block";
        }else{
            item.style.display="none";
        }
    });
}