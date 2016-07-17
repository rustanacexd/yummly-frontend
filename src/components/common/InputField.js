import React from 'react';

const InputField = ({icon, id, label, value, row, onChange}) => {

    return (
        <div className={`input-field col s12 m${row}`}>
            <i className="material-icons prefix">{icon}</i>
            <input id={id} type="text" className="validate" value={value} onChange={onChange}/>
            <label className="active" htmlFor={id}>{label}</label>
        </div>
    );
};


export default InputField;