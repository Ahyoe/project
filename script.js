var selectedRow = null

function onFormSubmit(){
        var formData = readFormData();
        if (selectedRow ==null)
        insertNewRecord(formData);
        else
        updateRecord(formData);
        resetForm();
}

function readFormData(){
    var formData = {};
    formData["fullname"] = document.getElementById("fullname").value;
    formData["phone"] = document.getElementById("phone").value;
    formData["nrc"] = document.getElementById("nrc").value;
    formData["bookingdate"] = document.getElementById("bookingdate").value;
    formData["rooms"] = document.getElementById("rooms").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("customerlist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.phone;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.nrc;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.bookingdate;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.rooms;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = '<a onClick="onUpdate(this)">Update</a> <a onClick="onDelete(this)">Delete</a>';
}
function resetForm(){
    document.getElementById("fullname").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("nrc").value = "";
    document.getElementById("bookingdate").value = "";
    document.getElementById("rooms").value = "";
    var selectedRow = null;
}

function onUpdate(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[1].innerHTML;
    document.getElementById("nrc").value = selectedRow.cells[2].innerHTML;
    document.getElementById("bookingdate").value = selectedRow.cells[3].innerHTML;
    document.getElementById("rooms").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.fullname;
    selectedRow.cells[1].innerHTML=formData.phone;
    selectedRow.cells[2].innerHTML=formData.nrc;
    selectedRow.cells[3].innerHTML=formData.bookingdate;
    selectedRow.cells[4].innerHTML=formData.rooms;
}
function onDelete(td){
     if(confirm('Are you sure to delete this record?')){
         row=td.parentElement.parentElement;
         document.getElementById("customerlist").deleteRow(row.rowIndex);
         resetForm();
     }
}

