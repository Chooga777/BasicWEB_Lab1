import React from "react";

function GoodsCard(props) {
    return (
        <div style={{margin: "40px", fontFamily: "Arial"}}>
            <img className="item-image" src={props.img} alt={props.name}/>
            <h3>{props.name}</h3>
            <p><i>{props.price}</i></p>
        </div>
    );
}

export default GoodsCard;