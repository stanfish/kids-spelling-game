import React from 'react';

export const LifeBar = props => {
    const { life } = props;

    function renderLifeBox() {
        let lifeBox = [];
        for (var i=0; i<life; i++){
            lifeBox.push(
                <span style={{
                    width: '50px',
                    height: '20px',
                    background: 'green',
                    display: 'inline-block',
                    border: '2px yellow solid',
                }}></span>
            );
        }
        return lifeBox;
    }

    return (
        <>
            { renderLifeBox() }
        </>
    );
}
