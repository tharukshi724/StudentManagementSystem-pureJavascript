var selectedRow = null;
function onFormSubmit(){

    var formData=readData();
    if(selectedRow==null){
       insertNewRecord(formData);
    }
    else{
        updateForm(formData);
    }
    resetForm();
    
}

function readData(){

    var formData ={};
    formData["fullname"] = document.getElementById("fullname").value;
    formData["address"] = document.getElementById("address").value;
    formData["age"] = document.getElementById("age").value;
    return formData;

}

function insertNewRecord(data){

    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.fullname;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.address;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.age;
    cell3=newRow.insertCell(3);
    cell3.innerHTML=`<a href="#" onClick="onEdit(this)">Edit</a>
                    <a href="#" onClick="onDelete(this)">Delete</a>`;
}

function resetForm(){

    document.getElementById("fullname").value="";
    document.getElementById("address").value="";
    document.getElementById("age").value="";
    selectedRow = null;
}

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("fullname").value=selectedRow.cells[0].innerHTML;
    document.getElementById("address").value=selectedRow.cells[1].innerHTML;
    document.getElementById("age").value=selectedRow.cells[2].innerHTML;
}

function updateForm(formData){
selectedRow.cells[0].innerHTML=formData.fullname;
selectedRow.cells[1].innerHTML=formData.address;
selectedRow.cells[2].innerHTML=formData.age;


}

function onDelete(td){
    if(confirm("are you want to delete?")){
        row = td.parentElement.parentElement
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
  
}