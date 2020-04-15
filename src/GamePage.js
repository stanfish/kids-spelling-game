import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CharInput from './components/CharInput';
import { randomValue } from './data';
import { shuffle, getImageUrl } from './util';

const initialState = {
    currentIndex: 0,
    currentInput: {},
    correct: false,
};

const getFirstInput = (props) => {
    for (var i=0; i<props.question.length; i++) {
        if (props.question.charAt(i) === '_') {
            return i;
        }
    }
;}

class GamePage extends Component {

    state = {
        ...initialState,
        num: this.props.num,
        hasFocus: document.hasFocus(),
    };

    getNextInput(start) {
        for (let i=start+1; i<this.props.question.length; i++) {
            if (this.props.question.charAt(i) === '_' && !this.isEqual(this.state.currentInput[i], this.props.word.charAt(i))) {
                return i;
            }
        }
        for (let i=0; i<=start; i++) {
            if (this.props.question.charAt(i) === '_' && !this.isEqual(this.state.currentInput[i], this.props.word.charAt(i))) {
                return i;
            }
        }
        return getFirstInput(this.props);
    }

    handleFill = (index) => {
        this.setState({currentIndex: index+1});

    }

    handleFocus = (index) => {
        this.setState({currentIndex: index});
    }


    handleBlur = () => {
        this.setState({currentIndex: null});
    }

    renderInput() {
        const { question } = this.props;
        const wordArr = question.split('');

        return <>
            { wordArr.map((letter,i) => {
                return <CharInput
                    isFocus={this.state.hasFocus && i===this.state.currentIndex}
                    isInput={letter==='_'}
                    onFoucs={this.handleFocus}
                    value={letter==='_' ? this.state.currentInput[i]: letter.toUpperCase()}
                    index={i}
                    isCorrect={letter==='_' && this.isEqual(this.state.currentInput[i], this.props.word.charAt(i))}
                />;
            })}
        </>;
    }

    componentDidMount() {
        window.addEventListener("focus", this.onFocus);
        window.addEventListener("blur", this.onBlur);
        window.addEventListener("keypress", this.onKeyPress);
        this.setState({currentIndex: getFirstInput(this.props)});

    }

    componentWillUnmount() {
        window.removeEventListener("focus", this.onFocus);
        window.removeEventListener("keypress", this.onKeyPress);
    }

    onFocus = () => {
        this.setState({ hasFocus: true });
    }
    onBlur = () => {
        this.setState({ hasFocus: false });
    }

    isEqual = (a, b) => {
        return ( a && b && a.toUpperCase() === b.toUpperCase());
    }

    onKeyPress = (e) => {
        if (e.key === ' ') { return; }

        let newInput = {
            ...this.state.currentInput,
        };
        newInput[this.state.currentIndex] = e.key.toUpperCase();

        if (!this.isEqual(e.key, this.props.word.charAt(this.state.currentIndex))) {
            this.props.onWrongAnswer();
        }

        this.setState({
            currentInput: newInput,
            currentIndex: this.getNextInput(this.state.currentIndex),
        }, () => {
            this.validate();
        });
    }

    renderSuggestion = () => {

        if (!this.state.hasFocus || (!this.state.currentIndex && this.state.currentIndex !== 0)) {
            return null;
        }

        let sugguestionArr = [];
        sugguestionArr.push(this.props.word[this.state.currentIndex].toUpperCase());
        const letter = 'abcdefghijklmnopqrstuvxyz';
        for (let i=0; i<2; i++){
            sugguestionArr.push(randomValue(letter).toUpperCase());
        }
        shuffle(sugguestionArr);

        let Suggestion = [];
        for (let i=0; i<sugguestionArr.length; i++){
            const keyClick = sugguestionArr[i];
            Suggestion.push(
                <button
                    style={{fontSize: '20px'}}
                    onClick={()=> {this.onKeyPress({key: keyClick})}}
                >
                    {keyClick}
                </button>);
        }

        return (
            <div style={{paddingTop: '10px'}}>
                {Suggestion}
            </div>
        );

    }

    validate = () => {
        for (var i=0; i<this.props.question.length; i++) {
            if (this.props.question.charAt(i) === '_' && !this.isEqual(this.state.currentInput[i], this.props.word.charAt(i))) {
                this.setState({correct: false});
                return;
            }
        }

        this.setState({
            correct: true,
            currentIndex: null,
        });
        setTimeout(()=>{
            this.finish();
        }, 1000)
    }

    finish = () => {
        this.setState({
            ...initialState,
        });
        this.props.onFinish();
    }

    static getDerivedStateFromProps(props, state) {
        if (props.num !== state.num) {
            return {
                ...initialState,
                currentIndex: getFirstInput(props),
                num: props.num,
            };
        }
        return null;
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <div style={{textAlign: 'center', position: 'sticky', top: '0', zIndex: '2'}}>
                    <Link to="/">
                        <Button variant="contained" color="primary" size="large" >
                            Back to Menu
                        </Button>
                    </Link>
                </div>
                <h1>Spelling Game</h1>
                <h2>Round {this.state.num + 1}</h2>
                <div style={{paddingTop: '20px', paddingBottom: '20px'}}>
                    <img alt={this.props.question} src={getImageUrl(this.props.url)} height="160"  />
                </div>
                { this.renderInput() }
                { this.renderSuggestion()}
                { this.state.correct ? <div style={{fontSize: '26px', paddingTop: '20px'}}>Correct</div> : null}
            </div>
        );
    }
}

export default GamePage;
