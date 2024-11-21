
let array = [];
function PushNumber(){
    const n = document.getElementById("txtNumber").value*1;
    array.push(n)
    console.log(array);
    

}
/**
 * Bài tập 1
 */
function PositiveTotal(){
    let result = 0;
   for(let i=0;i<=array.length;i++){
    if(array[i]>0){
    result += array[i];
    }
   }
   const total = `Tổng các số nguyên dương có trong mảng là: ${result}`;
    document.getElementById("inform1").innerHTML = total;
}
/**
 * Bài tập 2
 */
function CountPositiveNumber(){
    let count = 0;
   for(let i=0;i<=array.length;i++){
    if(array[i]>0){
    count ++;
    }
   }
   const total = `Số nguyên dương có trong mảng là: ${count}`;
    document.getElementById("inform2").innerHTML = total;
}
/**
 * Bài tập 3
 */
function SearchMinNumber(){
    let index = 0;
    let min = array[index];
    for( let i =1; i<array.length;i++){
     const score = array[i];
     if(score< min){
         min= score;
         index = i;
     }
    }
   const total = `Số nhỏ nhất trong mảng là: ${min}`;
    document.getElementById("inform3").innerHTML = total;
}
/**
 * Bài tập 4
 */
function SearchPositiveMinNumber(){
    let index = 0;
    let min = Infinity;
    if(min>0){
        let min= array[index]
    }
        for( let i =1; i<array.length;i++){
            const score = array[i];
            if(score< min && score>0 ){
                min= score;
                index = i;
            }
        }
   const total = `Số dương nhỏ nhất trong mảng là: ${min}`;
    document.getElementById("inform4").innerHTML = total;
}
/**
 * Bài tập 5
 */
function SearchEvenNumber(){
    let lastEven = 0;
    for (let i = array.length - 1; i >= 0; i--) { 
        if (array[i] % 2 === 0) { 
            lastEven = array[i];
            break; 
        }
    }
   const total = `Số chẵn cuối cùng trong mảng là: ${lastEven}`;
    document.getElementById("inform5").innerHTML = total;
}
/**
 * Bài tập 6
 */
function ChangePlace(){
    for( let i=0;i<array.length-1;i++){
        for( let j=i + 1; j<array.length;j++ ){
            if(array[i]!==array[j]){
                const temp = array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
   const total = `Vị trí sau khi đổi chỗ là: ${array}`;
    document.getElementById("inform6").innerHTML = total;
}
/**
 * Bài tập 7
 */
function Sort(){
    for( let i=0;i<array.length-1;i++){
        for( let j=i + 1; j<array.length;j++ ){
            if(array[i]>array[j]){
                const temp = array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
   const total = `Sắp xếp theo thứ tự tăng dần: ${array}`;
    document.getElementById("inform7").innerHTML = total;
}
/**
 * Bài tập 8
 */
function SearchPrimeNumber(){
    let PrimeNumber = 0;
    function isPrime(num) {
        if (num < 2) return false; 
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false; 
        }
        return true;
    }
    for (let i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
            PrimeNumber = array[i];
            break; 
        }
    }
    const total = `Số nguyên tố đầu tiên trong mảng là: ${PrimeNumber}`;
    document.getElementById("inform8").innerHTML = total;
}
/**
 * Bài tập 9
 */
function countIntegers(){
    let count =0;
    for(let i=0;i<array.length;i++){
        if(array[i] ===Math.floor(array[i])){
            count ++;
        }
    }
    
   const total = `Có ${count} số nguyên`;
    document.getElementById("inform9").innerHTML = total;
}
/**
 * Bài tập 10
 */
function compareNumber(){
    let positiveCount =0;
    let negativeCount=0;
    for(let i=0;i<array.length;i++){
        if(array[i]>0){
            positiveCount++;
        } else if(array[i]<0){
            negativeCount++;
        }
    }
    if(positiveCount>negativeCount){
        const total = `Số dương nhiều hơn`;
    document.getElementById("inform10").innerHTML = total;
    } else if( negativeCount>positiveCount){
        const total = `Số âm nhiều hơn`;
    document.getElementById("inform10").innerHTML = total;
    } else {
        const total = `Số dương và số âm bằng nhau `;
    document.getElementById("inform10").innerHTML = total;
    }
   
}
    







