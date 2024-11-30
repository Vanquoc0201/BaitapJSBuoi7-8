class EmployeeList{
    constructor(){
        this.arr = []
    }
    addEmployee(employee){
        this.arr.push(employee);
    }
    calcTotalSalaryEmployee(){}
    filterEmployee(){}
    findEmployee(account) {
        let index = -1; // Phần tử không có trong mảng
        for (let i = 0; i < this.arr.length; i++) {
          const employee = this.arr[i];
          if (employee.account === account) {
            index = i;
            break;
          }
        }
        return index;
      }
    removeEmployee(account){
        const index = this.filterEmployee(account);
        if (index !== -1) {
            this.arr.splice(index, 1);
          }
    }
    editEmployee(account){
    const index = this.findEmployee(account);
    if (index !== -1) {
      return this.arr[index];
    }
    return null;
    }
    updateEmployee(employee){
        const index = this.findEmployee(employee.account);
        if (index !== -1) {
          this.arr[index] = employee;
        }
    }
    searchEmployee(keyword){
      let result = [];
      for(let i=0;i<this.arr.length;i++){
        const employee = this.arr[i]
        const keywordLowerCase = keyword.toLowerCase();
        const employeeTypeLowerCase = employee.employeetype.toLowerCase();
        if(employeeTypeLowerCase.indexOf(keywordLowerCase) !==-1 ){
          result.push(employee);
        }
      }
      return result;
    }
}
export default EmployeeList;