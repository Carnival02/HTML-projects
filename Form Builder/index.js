
const paragraph=document.getElementById('para');
const text_input=document.getElementById('text');
const checkbox_input=document.getElementById('checkbox');
const radio_input=document.getElementById('radio');
const selectField=document.getElementById("list-select");
const label=document.getElementById('input-label');



document.getElementById('label_butn').addEventListener("click",function(){
    const outputField=document.createElement("div");
    const labelInput=label.value.trim();
    const inputFiled=selectField.value;

    if (!labelInput) {
        alert("Please enter a Label");
        return;
    }
    if (!inputFiled) {
        alert("Please choose a field type");
        return;
    }

    const fieldContainer=document.createElement("div");
    
    const field=document.createElement('label');
    field.textContent=labelInput+": "

    fieldContainer.appendChild(field);
    const inp=document.createElement("input");
    inp.type=inputFiled;

    if (inputFiled === "radio") {
        inp.name = labelInput; 
    }

    if(inputFiled==="checkbox"){
        inp.name=labelInput;
    }
    fieldContainer.appendChild(inp);
    paragraph.appendChild(fieldContainer);

    labelInput.value = "";
    selectField.value = "";

})













