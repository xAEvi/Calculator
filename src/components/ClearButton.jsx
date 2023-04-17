import React from 'react';
import '../stylesheets/ClearButton.css'

const ClearButton = props => (
    <div id={props.id} className='clear-button' onClick={props.handleClear}>
        {props.children}
    </div>
);

export default ClearButton;