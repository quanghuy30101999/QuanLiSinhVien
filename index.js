var listSV = [];
function myFunction(){
    let MSSV = document.getElementById("MSSV").value
    let Name = document.getElementById("Name").value
    let Email = document.getElementById("Email").value
    listSV.push({
        ID: listSV.length + 1,
        MSSV: MSSV,
        Name: Name,
        Email: Email
    })
    viewDSSV();
}

function update(ID){
    console.log(ID);
}

function deleteSV(ID){
    console.log(ID);
}

function viewDSSV(){
    let HTML = '';
    listSV.forEach((SV, index) => {
        HTML += `<tr>
                    <th>${SV.MSSV}</th>
                    <th>${SV.Name}</th>
                    <th>${SV.Email}</th>
                    <th>
                        <button type="button" class="btn btn-warning" onclick='update(${SV.ID})'>Update</button>
                        <button type="button" class="btn btn-danger" onclick='deleteSV(${SV.ID})'>Delete</button>
                    </th>
                </tr>`
    })
    document.getElementById('tableSV').innerHTML = HTML;
    document.getElementById("MSSV").value = ''
    document.getElementById("Name").value = ''
    document.getElementById("Email").value = ''
}

window.onload = function(){
    viewDSSV();
}