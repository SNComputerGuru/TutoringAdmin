var get_inquiries = document.getElementById("get-inquiries");
var requestsTable = document.getElementById("requestsTable");
const URL = "https://lamp.ms.wits.ac.za/home/s2690851/Tutoring/admin.php";


get_inquiries.addEventListener("click", function() {
    fetch(URL, {
        method: "GET"
    })
    .then(response => response.json())
    .then(data => updateInquiries(data))
    .catch(error => console.log('Error:', error));
});


function updateInquiries(data){
    requestsTable.innerHTML = '';
    
    for(let i = 0; i < data.length; ++i){
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");
        var td3 = document.createElement("td");
        var td4 = document.createElement("td");

        td1.innerHTML = data[i].Name;
        td2.innerHTML = data[i].Email;
        td3.innerHTML = data[i].Message;
        td4.innerHTML = data[i].Date;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        requestsTable.appendChild(tr);
    }
}

// var tr = document.createElement("tr");
//        var td1 = document.createElement("td");
//        var td2 = document.createElement("td");
//        var td3 = document.createElement("td");
//        var td4 = document.createElement("td");
//        td1.innerHTML = data[0].Name;
//        td2.innerHTML = data[0].Email;
//        td3.innerHTML = data[0].Message;
//        td4.innerHTML = data[0].Date;
//        tr.appendChild(td1);
//        tr.appendChild(td2);
//        tr.appendChild(td3);
//        tr.appendChild(td4);
//        requestsTable.appendChild(tr);