import React from 'react';

function BioInputfield(props) {
    const { claslabel, classfield, rows, label, value, onChange, placeholdr } = props;

    return (
        <div>
            <label className={claslabel}>{label}</label>
            <textarea
                value={value}
                onChange={onChange}
                className={classfield}
                placeholder={placeholdr}
                rows={rows} // Adjust the number of rows as needed
                style={{ resize: 'vertical' }} // Enable vertical resizing
            />
        </div>
    );
}

export default BioInputfield;
