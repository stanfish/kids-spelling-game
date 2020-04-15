import React from 'react';
import MouseParticles from 'react-mouse-particles';

const celebrationStart = (options) => {
    return (
        <>
            <MouseParticles
                g={2.3}
                num={1}
                radius={8}
                life={0.8}
                v={1.2}
                color="random"
                alpha={0.16}
                level={6}
            />
            <div style={{ fontSize: '40px', paddingTop: '100px'}}>Move your mouse</div>
        </>
    );
};

const celebrationEnd = () => {
};

export default {
    celebrationStart,
    celebrationEnd,
};
