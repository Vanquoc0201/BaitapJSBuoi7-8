import { getEleId } from "./QuanLyNhanVien/main.js"
class Validation{
    checkEmpty (value, divId, mess){
        if(value === ""){
            getEleId(divId).innerHTML = mess;
            getEleId(divId).style.display = "block"
            return false;
        } 
            getEleId(divId).innerHTML= "";
            getEleId(divId).style.display = "none";
            return true;
    }
    checkSelect(idSelect,divId,mess){
        if(getEleId(idSelect).selectedIndex === 0){
            getEleId(divId).innerHTML = mess;
            getEleId(divId).style.display = "block"
            return false;
        }
        getEleId(divId).innerHTML= "";
        getEleId(divId).style.display = "none";
        return true;
    }
    checkLength(value, divId, mess, min, max) {
        if (value.length < min || value.length > max) {
            getEleId(divId).innerHTML = mess;
            getEleId(divId).style.display = "block";
            return false;
        }
        getEleId(divId).innerHTML = "";
        getEleId(divId).style.display = "none";
        return true;
    }
    checkCharacterString(value,divId,mess){
        const letter = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        if(value.match(letter)){
            getEleId(divId).innerHTML= "";
            getEleId(divId).style.display = "none";
            return true;
        }
         getEleId(divId).innerHTML = mess;
        getEleId(divId).style.display = "block"
        return false;
    }
    checkEmail(value, divId, mess) {
        const email =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(email)) {
            getEleId(divId).innerHTML= "";
            getEleId(divId).style.display = "none";
            return true;
        }
         getEleId(divId).innerHTML = mess;
        getEleId(divId).style.display = "block"
        return false;
    }
    checkPassword(value, divId, mess) {
        const password = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;;
        if (value.match(password)) {
            getEleId(divId).innerHTML= "";
            getEleId(divId).style.display = "none";
            return true;
        }
         getEleId(divId).innerHTML = mess;
        getEleId(divId).style.display = "block"
        return false;
    }
    checkDate(value, divId, mess) {
        const date =  /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
        if (value.match(date)) {
            getEleId(divId).innerHTML= "";
            getEleId(divId).style.display = "none";
            return true;
        }
         getEleId(divId).innerHTML = mess;
        getEleId(divId).style.display = "block"
        return false;
    }
    checkSalaryRange(value, divId, mess, min, max) {
        const salary = Number(value); 
        if (isNaN(salary) || salary < min || salary > max) {
            getEleId(divId).innerHTML = mess;
            getEleId(divId).style.display = "block";
            return false;
        }
        getEleId(divId).innerHTML = "";
        getEleId(divId).style.display = "none";
        return true;
    }
    checkWorkingHour(value, divId, mess, min, max) {
        const workingHour = Number(value); 
        if (isNaN(workingHour) || workingHour < min || workingHour > max) {
            getEleId(divId).innerHTML = mess;
            getEleId(divId).style.display = "block";
            return false;
        }
        getEleId(divId).innerHTML = "";
        getEleId(divId).style.display = "none";
        return true;
    }
}
export default Validation;