let students = JSON.parse(localStorage.getItem("student")) || [];
let flag = false;

function click1(e) {
  e.preventDefault();
  if (
    document.getElementById("name").value &&
    document.getElementById("email").value &&
    document.getElementById("phone").value &&
    document.getElementById("address").value
  ) {
    let nameElement = document.getElementById("name").value;
    let emailElement = document.getElementById("email").value;
    let phoneElement = document.getElementById("phone").value;
    let addressElement = document.getElementById("address").value;
    let checkBox = document.getElementsByName("gender");
    let genderValue = "";
    for (let i = 0; i < checkBox.length; i++) {
      if (checkBox[i].checked == true){
        console.log(checkBox[i].value);
        genderValue = checkBox[i].value;
      }
    }
    let obj = {
      idUser: Math.floor(Math.random() * 100000),
      name: nameElement,
      email: emailElement,
      address: addressElement,
      phone: phoneElement,
      gender: genderValue,
    };
    if (flag != -1) {
      for (let i = 0; i < students.length; i++) {
        if (students[i].id == flag) {
          students.splice(i, 1, { ...obj, id: flag });
          localStorage.setItem("student", JSON.stringify(students));
          document.getElementById("btn").innerText = "Luu lai";
          flag = -1;
          render();
          break;
          return;
        }
      }
      return;
    }
    students.push(obj);
    localStorage.setItem("student", JSON.stringify(students));
    render();
  }
}

function render() {
  let text = "";
  for (let i = 0; i < students.length; i++) {
    text += `
        <tr>
            <td>${i + 1}</td>
            <td>${students[i].name}</td>
            <td>${students[i].email}</td>
            <td>${students[i].phone}</td>
            <td>${students[i].gender}</td>
            <td>${students[i].address}</td>
            <td>
            <div>
            <a href="#" onclick="editUser()">edit</a> 
                |
                <a href="#" onclick="deleteUser()">delete</a>
            </div>
            </td>
        </tr>
        `;
  }
  document.getElementById("tbody").innerHTML = text;
}
render();

function deleteUser(idUser) {
  let confirmDelete = confirm("Co muon xoa khong");
  if (!confirmDelete) {
    return;
  }
  for (let i = 0; i < students.length; i++) {
    if (students[i].id == idUser) {
      students.splice(i, 1);
      render();
      localStorage.setItem("student", JSON.stringify(students));
      break;
    }
  }
}
render();

function editUser(idUser) {
  document.getElementById("btn").innerText = "Cap nhat";
  if ((flag = idUser)) {
    localStorage.setItem("student", JSON.stringify(students));
  }
}
// for (let i = 0; i < students.length; i++) {
//   if (students[i].id == idUser) {
//     document.getElementById("name").value = ${students[i].name};
//     document.getElementById("email").value =${students[i].email};
//     document.getElementById("phone").value =${students[i].phone};
//     document.getElementById("addres").value = ${students[i].address};
//     document.getElementById("gender").value =${students[i].gender};
//   }
// }
// }

function search1() {
  let nameSearch = document.getElementById("search");
  for (let i = 0; i < students.length; i++) {
    if (nameSearch.value == students[i].name) {
      alert("Co trong danh sach");
    } else {
      alert("khong co trong danh sach");
    }
    render();
    break;
  }
}
function sortName() {
  for (let i = 0; i < students.length; i++) {}
}
