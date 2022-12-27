import React from "react"

function addImg() {
    let element = document.getElementById("img")
    element.innerHTML += "<img id='addedIMG' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/%D0%9D%D1%96%D1%87%D0%BD%D0%B8%D0%B9_%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82.jpg/800px-%D0%9D%D1%96%D1%87%D0%BD%D0%B8%D0%B9_%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82.jpg' alt='Картинка відсутня' style='width: 800px; height: 500px;'>"
}

function increaseImg(){
    let element = document.getElementById("addedIMG")
    let width = element.clientWidth
    console.log(width)
    let height = element.clientHeight
    element.style.width = (width + 20) + "px"
    element.style.height = (height + 20) + "px"
}

function reduceImg  (){
    let element = document.getElementById("addedIMG")
    let width = element.clientWidth
    let height = element.clientHeight
    element.style.width = (width - 20) + "px"
    element.style.height = (height - 20) + "px"
}

function deleteImg(){
    let element = document.getElementById("img")
    element.innerHTML = ""
}

function Image() {
    return (
        <div>
            <a href="https://zp.gov.ua/uk"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/%D0%9D%D1%96%D1%87%D0%BD%D0%B8%D0%B9_%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82.jpg/800px-%D0%9D%D1%96%D1%87%D0%BD%D0%B8%D0%B9_%D0%BF%D1%80%D0%BE%D1%81%D0%BF%D0%B5%D0%BA%D1%82.jpg" alt="Картинка відсутня" width="800px" height="500px" /></a>
            <div id="img"></div>
            <p>
                <button onClick={addImg}>Додати</button>
                <button onClick={increaseImg}>Збільшити</button>
                <button onClick={reduceImg}>Зменшити</button>
                <button onClick={deleteImg}>Видалити</button>
            </p>
        </div>
    );
}

export default Image;