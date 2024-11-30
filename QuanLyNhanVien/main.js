import EmployeeList from "../employee-list.js";
import Employee from "../employee.js"
import Validation from "../validation.js";
const employeeList = new EmployeeList();
const validation = new Validation();
export const getEleId = (id) =>  document.getElementById(id)
const getInfoEmployee = () => {
    const EmpAccount = getEleId("tknv").value;
    const EmpName = getEleId("name").value;
    const EmpEmail = getEleId("email").value;
    const EmpPassword = getEleId("password").value;
    const EmpWorkingDay = getEleId("datepicker").value;
    const EmpBasicSalary = getEleId("luongCB").value;
    const EmpPosition = getEleId("chucvu").value;
    const EmpWorkingHour = getEleId("gioLam").value;
    // Vaidation
    let isValid = true;
    isValid &=validation.checkEmpty(EmpAccount, "tbTKNV", "Please input Employee Account") && validation.checkLength(EmpAccount,"tbTKNV","Employee Account has 4-6 character","4","6");
    isValid &=validation.checkEmpty(EmpName, "tbTen", "Please input Employee Name")&& validation.checkCharacterString(EmpName,"tbTen","Employee name must be in letters");
    isValid &=validation.checkEmpty(EmpEmail, "tbEmail", "Please input Employee Email")&&validation.checkEmail(EmpEmail,"tbEmail","Email is not in correct format");
    isValid &=validation.checkEmpty(EmpPassword, "tbMatKhau", "Please input Employee Password")&&validation.checkPassword(EmpPassword, "tbMatKhau", "Password 6-10 characters (contain at least 1 number, 1 uppercase letter, 1 special character)");
    isValid &=validation.checkEmpty(EmpWorkingDay, "tbNgay", "Please input Employee Workingday")&&validation.checkDate(EmpWorkingDay, "tbNgay", "Date format mm/dd/yyyy");
    isValid &=validation.checkEmpty(EmpBasicSalary, "tbLuongCB", "Please input Employee Basicsalary")&&validation.checkSalaryRange(EmpBasicSalary, "tbLuongCB", "Basic salary from 1,000,000 to 20,000,000","1000000","20000000");
    isValid &=validation.checkEmpty(EmpWorkingHour, "tbGiolam", "Please input Employee WorkingHour")&&validation.checkWorkingHour(EmpWorkingHour, "tbGiolam", "Number of working hours per month 80 - 200 hours");
    validation.checkSelect("chucvu", "tbChucVu", "Please choose employee position");
    if (!isValid) return null;

    const employee = new Employee(EmpAccount, EmpName, EmpEmail, EmpPassword, EmpWorkingDay, EmpBasicSalary, EmpPosition, EmpWorkingHour);
    employee.rankPosition();
    employee.rankEmployee();
    return employee;
}
const renderEmployeeList = (data) => {
    let content = "";
    
    for(let i=0 ; i<data.length;i++){
        const employee = data[i];
        content += `<tr>
        <td>${employee.account}</td>
        <td>${employee.name}</td>
        <td>${employee.email}</td>
        <td>${employee.workingday}</td>
        <td>${employee.position}</td>
        <td>${employee.totalsalary}</td>
        <td>${employee.employeetype}</td>
        <td><button class="btn btn-primary" data-toggle="modal" data-target="#myModal" onclick="handleEditEmployee('${employee.account}')">Edit</button></td>
         <td><button onclick="handleDeleteEmployee('${employee.account}')">Delete</button></td>
        </tr>
        `
    }
    getEleId("tableDanhSach").innerHTML = content;
}
const setLocalStorage = () => {
    const dataJSON = employeeList.arr;
    const dataString = JSON.stringify(dataJSON)
    localStorage.setItem("EMPLOYEE-LIST", dataString);
};
const getLocalStorage = () => {
    const dataString = localStorage.getItem("EMPLOYEE-LIST");
    if (!dataString) return;
    const dataJSON = JSON.parse(dataString);
    employeeList.arr = dataJSON;
    // Hiển thị lại danh sách
    renderEmployeeList(employeeList.arr);
};
getLocalStorage();
/**
 * Add Employee
 */
getEleId("btnThemNV").onclick = () => {
    const employee = getInfoEmployee();
    if(!employee) return;
    employeeList.addEmployee(employee);
    renderEmployeeList(employeeList.arr);
    setLocalStorage();
}
/**
 * Handle Delete Employee
 */
const handleDeleteEmployee = (account) =>{
   employeeList.removeEmployee(account);
   renderEmployeeList(employeeList.arr);
   // Set localStorage
   setLocalStorage();
};
// Khai báo hàm handleDeleteEmployee là global function => window
window.handleDeleteEmployee = handleDeleteEmployee;
// Handle edit Employee
const handleEditEmployee = (account) => {
    getEleId("header-title").innerHTML = "Edit Employee"
    getEleId("btnThemNV").style.display = "none"
    getEleId("btnCapNhat").style.display = "inline-block"
    const employee = employeeList.editEmployee(account);
    if(employee){
        getEleId("tknv").value = employee.account
        getEleId("tknv").setAttribute("disabled", true);
        getEleId("name").value = employee.name
        getEleId("email").value = employee.email
        getEleId("password").value = employee.password
        getEleId("datepicker").value = employee.workingday
        getEleId("luongCB").value = employee.basicsalary
        const positionMap = {
            "Sếp": "loai1",
            "Trưởng phòng": "loai2",
            "Nhân viên": "loai3"
        };
        getEleId("chucvu").value = positionMap[employee.position] || "";
        getEleId("gioLam").value = employee.workinghour
    }
}
window.handleEditEmployee = handleEditEmployee;
getEleId("btnThem").onclick = () =>{
    getEleId("header-title").innerHTML = "Add Employee"
    getEleId("btnThemNV").style.display = "inline-block"
    getEleId("btnCapNhat").style.display = "none"
    getEleId("form-employee").reset();
    // enable input foodID
    getEleId("tknv").removeAttribute("disabled");
    getEleId("password").removeAttribute("disabled");
    // document.getElementById("btnDong").click();
}
getEleId("btnCapNhat").onclick = function(){
    const employee = getInfoEmployee();
    if(!employee) return;
    employeeList.updateEmployee(employee);
    // Render food list
    renderEmployeeList(employeeList.arr);
    setLocalStorage();
    // document.getElementById("btnDong").click();
}
/**
 * Search employee
 */
getEleId("searchName").addEventListener("keyup", function () {
    const keyword = getEleId("searchName").value;
    const employeesSearch = employeeList.searchEmployee(keyword);
    renderEmployeeList(employeesSearch);
  });