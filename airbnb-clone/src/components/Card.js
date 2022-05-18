import React from "react";
import star from "../images/star.png"

export default function Card(props) {
    return (
        <section className="card-section">
            <img src={props.img} className="card-image" />
            <div className="card-details" >
                <img src={star} className="card-star" />
                <span>{props.rating}</span>
                <span>{props.reviewCount + ' •'}</span>
                <span>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p> <span className="bold">From ${props.price}</span> / person</p>
        </section>
    )
}