import React from 'react';
import './ColorFilter.css';
function ColorFilter(props) {
    const handleCheck = (e) => {
        props.onCheck(props.color);
    };
    return (
        <div className="color-wrap">
            <input className="check" type="checkbox" onChange={handleCheck} />
            <span>{props.color}</span>
        </div>
    );
}
export default React.memo(ColorFilter);
