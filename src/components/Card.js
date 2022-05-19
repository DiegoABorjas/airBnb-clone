import React from "react";

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }


    return (
        <section className="card-section">
            {badgeText && <div className="card-badge" >{badgeText}</div>}
            <img src={`../images/${props.coverImg}`} className="card-image" alt="" />
            <div className="card-details" >
                <img src="../images/star.png" className="card-star" alt="" />
                <span>{props.stats.rating}</span>
                <span>({props.stats.reviewCount}) • </span>
                <span>{props.location}</span>
            </div>
            <p className="card-title" >{props.title}</p>
            <p className="card-price" ><span className="bold">From ${props.price}</span> / person</p>
        </section>
    )
}