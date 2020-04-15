import React, { Component } from 'react';

const styles = {
    default: {
        padding: 0,
        margin: '0 2px',
        border: '1px solid',
        background: 'transparent',
        width: '50px',
        height: '50px',
        fontSize: '40px',
        outline: 'none',

    },
    focus: {
        animation: 'blinking .4s infinite',
    },
    plain: {
        border: 0,
    },
    correct: {
        background: '#90ee90',
    },
};

class CharInput extends Component {

    onFocus = () => {
        if (this.props.isInput) {
            this.props.onFoucs(this.props.index);
        }
    }

    render() {
        const { isFocus, isCorrect, isInput, value } = this.props;
        return (
            <button
                onClick={ this.onFocus }
                style={ Object.assign(
                        {},
                        styles.default,
                        isCorrect ? styles.correct : {},
                        isFocus ? styles.focus : {},
                        isInput ? {} : styles.plain,
                    )
                }
            >
                {value === undefined || value==='' ? '_' : value}
            </button>
        );
    }
}

export default CharInput;
