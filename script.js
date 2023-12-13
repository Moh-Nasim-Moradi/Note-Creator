const noteContainer=document.querySelector('.notes-container');
const createNoteBtn=document.getElementById('create-note');


createNoteBtn.addEventListener('click',()=>{
let noteDiv=document.createElement("div");
noteDiv.classList.add("noteDiv");
let inputBox=document.createElement("p");
inputBox.className="input-box";
inputBox.setAttribute("contentEditable","true");
let img=document.createElement("img");
img.classList.add('deleteImg');
img.src="images/delete.png";
let Image=document.createElement("img");
Image.classList.add("saveImg");
Image.src="images/save.gif";
noteDiv.appendChild(inputBox);
noteDiv.appendChild(img);
noteDiv.appendChild(Image);
noteContainer.appendChild(noteDiv);
})
noteContainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains('deleteImg')){
        e.target.parentElement.remove();
        alert("Are you sure you want to delete?")
    }
    
})

noteContainer.addEventListener('click',(e)=>{
    if(e.target.classList.contains('saveImg')){ 
        alert("your text has been saved!")
    }
})