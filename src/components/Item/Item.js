import './Item.css';
import pic1 from './img/free-icon-blouse-6649473.png';
import pic2 from './img/free-icon-cotton-polo-shirt-88814.png';
import pic3 from './img/free-icon-jersey-blazer-88766.png';
import pic4 from './img/free-icon-protective-wear-3872808.png';
import pic5 from './img/free-icon-shirt-2149641.png';
import pic6 from './img/free-icon-suit-2636277.png';
import pic7 from './img/free-icon-tshirt-863684.png';
import pic8 from './img/free-icon-woman-clothes-4041120.png';
import pic9 from './img/free-icon-woman-clothes-4273296.png';
import React from 'react';

function Item(props) {
    const picsArr = [
        pic1,
        pic2,
        pic3,
        pic4,
        pic5,
        pic6,
        pic6,
        pic7,
        pic8,
        pic9,
    ];
    return (
        <div className="item-wrapper">
            <img
                src={picsArr[Math.round(Math.random() * (picsArr.length - 1))]}
                className="item-pic"
                alt="logo"
            />
            <div>
                <h1>{props.name}</h1>
            </div>
            <div>
                <small className="desc">{props.desc}</small>
            </div>

            <div>Color: {props.color}</div>
            <div>Rating: {props.rating}</div>
            <div className="price">{props.price}$</div>
        </div>
    );
}
export default React.memo(Item);
