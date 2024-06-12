var ul=document.getElementById("list-container")
var input=document. getElementById("input")

function add(){
    if(input.value===''){
        alert("You must write something!")
    }
    else{
    var listitem=document.createElement("li")
    

    listitem.innerHTML=input.value+"<button onclick='deleteitem(event)'>Delete</button>"
    ul.append(listitem)
    }
}
function deleteitem(event){
    event.target.parentElement.remove()
}