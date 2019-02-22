import React from 'react';

const Button = (title, callback) => {
    return (
        <button className="button" onClick={callback}>
            {title}
        </button>
    )

}

export default Button;