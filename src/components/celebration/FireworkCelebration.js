import React from 'react';
import { newFireWorkOnClick } from '../../firework';

const celebrationStart = (options) => {
    document.body.style.backgroundColor = '#001126';
    document.addEventListener("click", newFireWorkOnClick);
    return <div style={{ fontSize: '40px', color: 'white', paddingTop: '80px'}}>Firework</div>;
};

const celebrationEnd = () => {
    document.body.style.backgroundColor = '#FFFFFF';
    document.removeEventListener("click", newFireWorkOnClick);
};

export default {
    celebrationStart,
    celebrationEnd,
};
