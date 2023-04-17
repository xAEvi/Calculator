import React from 'react';
import '../stylesheets/Screen.css';

const Screen = ({ input, id }) => (
    <div id={id} className='input'>
        {input}
    </div>
);

export default Screen;