class Employee {
    constructor(
      _account,
      _name,
      _email,
      _password,
      _workingday,
      _basicsalary,
      _position,
      _workinghour,
      _totalsalary,
      _employeetype,
    ) {
      this.account = _account;
      this.name = _name;
      this.email = _email;
      this.password = _password;
      this.workingday = _workingday;
      this.basicsalary = _basicsalary;
      this.position = _position;
      this.workinghour = _workinghour;
      this.totalsalary = _totalsalary;
      this.employeetype = _employeetype;
      this.salary = 0;
    }
    rankPosition(){
        switch(this.position){
            case "loai1":
                this.position = "Sếp"
                this.totalsalary = this.basicsalary *3;
                break;
            case "loai2":
                this.position = "Trưởng phòng"
                this.totalsalary = this.basicsalary*2;
                break;
            case "loai3":
                this.position = "Nhân viên"
                this.totalsalary = this.basicsalary*1;
                break;
            default:
                this.totalsalary = 0;
        }
    }
    rankEmployee() {
        if (this.position === "Sếp" || this.position === "Trưởng phòng") {
            this.employeetype = ""; 
        } else if (this.workinghour >= 192) {
            this.employeetype = "Xuất sắc";
        } else if (this.workinghour >= 176) {
            this.employeetype = "Giỏi";
        } else if (this.workinghour >= 160) {
            this.employeetype = "Khá";
        } else {
            this.employeetype = "Trung bình";
        }
    }
  }
  export default Employee;