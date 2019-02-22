import React from 'react';

const Button = (title, callback) => {
    return (
        <button key={1} className="button" onClick={callback}>
            {title}
        </button>
    )

}

export default Button;