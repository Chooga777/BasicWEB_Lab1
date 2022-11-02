let flagFullName = false
let flagVariant = false
let flagStudyGroup = false
let flagPhone = false
let flagIdCard = false


function FormFullName (){
    const inputFullName = document.getElementById("full name")
    const methodOfCheck = /\w+\s+[A-Z]\.+[A-Z]\./
    const correctFullName = methodOfCheck.test(inputFullName.value)
    const exception = document.getElementById("exceptionFullName")
    if (correctFullName){
        inputFullName.style.border = "solid green"
        exception.style.display = "none"
        flagFullName = true
    }else {
        inputFullName.style.border = "solid red"
        exception.innerText = "Enter the name in the correct format: \"Ivanov І.І.\""
        exception.style.display = "block"
        flagFullName = false
    }
}

function FormVariant (){
    const inputVariant = document.getElementById("variant")
    const methodOfCheck = /^[0-9]{1,2}[:.,-]?$/
    const correctVariant = methodOfCheck.test(inputVariant.value)
    const exception = document.getElementById("exceptionVariant")
    if (correctVariant){
        inputVariant.style.border = "solid green"
        exception.style.display = "none"
        flagVariant = true
    }else {
        inputVariant.style.border = "solid red"
        exception.innerText = "Variant should be number in range (1 - 99)"
        exception.style.display = "block"
        flagVariant = false
    }
}

function FormStudyGroup (){
    const inputStudyGroup = document.getElementById("study group")
    const methodOfCheck = /[A-Z][A-Z]+[-]+[0-9][0-9]/
    const correctStudyGroup = methodOfCheck.test(inputStudyGroup.value)
    const exception = document.getElementById("exceptionStudyGroup")
    if (correctStudyGroup){
        inputStudyGroup.style.border = "solid green"
        exception.style.display = "none"
        flagStudyGroup = true
    }else {
        inputStudyGroup.style.border = "solid red"
        exception.innerText = "Enter the name of the group in the correct format: \"IO-01\""
        exception.style.display = "block"
        flagStudyGroup = false
    }
}

function FormPhone (){
    const inputPhone = document.getElementById("phone")
    const methodOfCheck = /((\(\d{3}\) ?)|(\d{3}-))?[-]\d{3}-\d{2}-\d{2}/
    const correctPhone = methodOfCheck.test(inputPhone.value)
    const exception = document.getElementById("exceptionPhone")
    if (correctPhone){
        inputPhone.style.border = "solid green"
        exception.style.display = "none"
        flagPhone = true
    }else {
        inputPhone.style.border = "solid red"
        exception.innerText = "Enter the phone number in the correct format: \"(380)-999-99-99\""
        exception.style.display = "block"
        flagPhone = false
    }
}

function FormIdCard (){
    const inputIdCard = document.getElementById("idCard")
    const methodOfCheck = /[A-Z][A-Z]+[ ]+[№]+[0-9]{6}[:.,-]?/
    const correctIdCard = methodOfCheck.test(inputIdCard.value)
    const exception = document.getElementById("exceptionIdCard")
    if (correctIdCard){
        inputIdCard.style.border = "solid green"
        exception.style.display = "none"
        flagIdCard = true
    }else {
        inputIdCard.style.border = "solid red"
        exception.innerText = "Enter the id card in the correct format: \"SV №111111\""
        exception.style.display = "block"
        flagIdCard = false
    }
}

function ShowResult (field, text, flag){
    if (flag){
        field.innerHTML = text
        field.style.display = "block"
        field.style.color = "green"
    }else {
        field.innerHTML = "Incorrectly filled form data"
        field.style.display = "block"
        field.style.color = "red"
    }
}

function SubmitForm (data){
    const resultFullName = document.getElementById("resultFullName")
    const resultVariant = document.getElementById("resultVariant")
    const resultStudyGroup = document.getElementById("resultStudyGroup")
    const resultPhone = document.getElementById("resultPhone")
    const resultIdCard = document.getElementById("resultIdCard")
    ShowResult(resultFullName, data.fullName.value, flagFullName)
    ShowResult(resultVariant, data.variant.value, flagVariant)
    ShowResult(resultStudyGroup, data.studyGroup.value, flagStudyGroup)
    ShowResult(resultPhone, data.phone.value, flagPhone)
    ShowResult(resultIdCard, data.idCard.value, flagIdCard)
}

const cell = document.getElementById("firstCell")
const row = document.getElementById("firstRow")
const color = document.getElementById("selectedColor")

cell.addEventListener("mouseover", function (){
    cell.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16)
})

cell.addEventListener("click", function (){
    cell.style.backgroundColor = color.value
})

cell.addEventListener("dblclick", function (){
    row.style.backgroundColor = color.value
})
