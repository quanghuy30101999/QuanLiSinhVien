var listSV = [{
    MSSV: 102,
    Name: 'Huy',
    Email: 'huytran.301099@gmail.com'
}];

function check_MSSV(MSSV){
    for(i=0;i<listSV.length;i++){
        if(listSV[i].MSSV == MSSV)
            return true;
    }
    return false;
}
function myFunction(){
    let MSSV = document.getElementById("MSSV").value
    let Name = document.getElementById("Name").value
    let Email = document.getElementById("Email").value
    if(check_MSSV(parseInt(MSSV)) === false) {
        if (_.isEmpty(MSSV) || _.isEmpty(Name) || _.isEmpty(Email)){
            if(_.isEmpty(MSSV)){
                document.getElementById('MSSV').style.borderColor = "red"
            }
            else{
                document.getElementById('MSSV').style.borderColor = "green"
            } 
            if(_.isEmpty(Name)){
                document.getElementById('Name').style.borderColor = "red"
            }
            if(_.isEmpty(Email)){
                document.getElementById('Email').style.borderColor = "red"
            }
        }
        else{
            listSV.push({
                MSSV: parseInt(MSSV),
                Name: Name,
                Email: Email
            })
        }
    }
    else {
        listSV.map((sv,index) => {
            if(sv.MSSV == parseInt(MSSV))
               sv.Name = Name;
               sv.Email = Email;
        });
        title = document.getElementById('title').innerHTML = 'Thêm sinh viên'
    }
    viewDSSV();
}

function find_SV(ID){
    listSV.map((sv,index) => {
        if(sv.MSSV == parseInt(ID))
           result = sv;
    });
    return result;
}

function update(ID){
    SinhVien = find_SV(ID);
    title = document.getElementById('title').innerHTML = 'Sửa sinh viên'
    document.getElementById("MSSV").value = SinhVien.MSSV;
    document.getElementById("Name").value = SinhVien.Name;
    document.getElementById("Email").value = SinhVien.Email;
}

function deleteSV(ID){
    for( var i = 0; i < listSV.length; i++){ 
        if ( listSV[i].MSSV === parseInt(ID)) {
          listSV.splice(i, 1); 
        }
     }
    viewDSSV();
}

function viewDSSV(){
    let HTML = '';
    listSV.forEach((SV, index) => {
        HTML += `<tr>
                    <th>${SV.MSSV}</th>
                    <th>${SV.Name}</th>
                    <th>${SV.Email}</th>
                    <th>
                        <button type="button" class="btn btn-warning" onclick='update(${SV.MSSV})'>Update</button>
                        <button type="button" class="btn btn-danger" onclick='deleteSV(${SV.MSSV})'>Delete</button>
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