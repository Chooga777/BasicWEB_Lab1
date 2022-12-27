import React from "react";

let flag = true;

function changeColorFirst(){
    let element = document.getElementById("first-el")
    if (flag){
        element.style.color = "green"
        element.style.backgroundColor = "orange"
        flag = false
    }else {
        element.style.color = "orange"
        element.style.backgroundColor = "green"
        flag = true
    }
}

function changeColorSecond() {
    let element2 = document.querySelector(".second-el")
    if (flag){
        element2.style.color = "grey"
        element2.style.backgroundColor = "red"
        flag = false
    }else {
        element2.style.color = "red"
        element2.style.backgroundColor = "grey"
        flag = true
    }
}

class Content extends React.Component {
    render () {
        return (
            <div>
                <p id="first-el" onClick={changeColorFirst}>Місце народження: 15 липня 2002 року, м.
                    Запоріжжя</p>
                <p className="second-el" onClick={changeColorSecond}>Освіта: Ліцей №99, м. Запоріжжя;</p>
                <p className="university" style={{marginLeft: "55px"}}>НТУУ "КПІ", м.Київ</p>
                <p>Хоббі:</p>
                <ul>
                    <li>Спорт</li>
                    <li>Комп'ютерні ігри</li>
                    <li>Читання</li>
                    <li>Настільні ігри</li>
                </ul>
                <p>Улюбленні фільми:</p>
                <ol>
                    <li>"Бійцівскький клуб", 1999</li>
                    <li>"Механік", 2011</li>
                    <li>"Один дома 2", 1992</li>
                    <li>"Месники: Війна нескінченності", 2018</li>
                </ol>
                <p>Запорі́жжя (до 1921 року — Олекса́ндрівськ) — місто в Україні, адміністративний центр Запорізької
                    області. За кількістю населення — шосте місто країни (710 052 станом на 1 січня 2022 року).
                    Розташоване на головній воднотранспортній магістралі України — річці Дніпро, у місці її перетину
                    транспортно-комунікаційними коридорами, що з'єднують південь країни зі столицею України, західними
                    та центральними областями України, Донбас із Криворіжжям.</p>
            </div>
        );
    }
}

export default Content;