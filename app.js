var main=document.getElementById('main')
function add(){
    if(inp.value==0){
        alert("Enter Something")
    }else{
        console.log(inp)
        var li=document.createElement('li')
        var litext=document.createTextNode(inp.value)
        li.appendChild(litext)
        // li.setAttribute("onclick","add")
main.appendChild(li)

    var editbtn=document.createElement('BUTTON')
    var editbtntext=document.createTextNode('edit')
    editbtn.appendChild(editbtntext)
    editbtn.setAttribute("onclick","edit(this)")
    li.appendChild(editbtn)
    main.appendChild(li)
   
    inp.value=""

    var delbtn=document.createElement('BUTTON')
    var delbtntext=document.createTextNode('del')
    delbtn.appendChild(delbtntext)
    delbtn.setAttribute("onclick","del(this)")
    li.appendChild(delbtn)
    main.appendChild(li)

    }
}
function edit(element){
    var newvalue=prompt("Enter WhatEver U Want")
   console.log(element.parentNode.firstChild.nodeValue)

   element.parentNode.firstChild.nodeValue=newvalue
}
function del(element){
    element.parentNode.remove()
}
function deleteall(){
    main.innerHTML=""
}