import React from 'react';

const ChangeDate = (title, callback) => {
    return (
        <button className="change-date" onClick={callback}>
            <i className="fas fa-calendar-alt"></i>
            {title}
        </button>
    )

}

export default ChangeDate;