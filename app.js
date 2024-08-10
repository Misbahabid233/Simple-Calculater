function number(num){
var inputCal = document.getElementById("inputData")
inputCal.value += num;
}
function clearValue(){
    var inputCal = document.getElementById("inputData")
    inputCal.value = ""
    }
function del(){
    var inputCal = document.getElementById("inputData")
    inputCal.value = inputCal.value.slice(0,-1)
}
function result(){
    var inputCal = document.getElementById("inputData")
    inputCal.value = eval(inputCal.value)
}

