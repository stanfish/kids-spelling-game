import React, { Component } from 'react';
import { round, random } from 'lodash';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

import GamePage from './GamePage';
import { getRandomData } from './data';
import { LifeBar } from './LifeBar';
import { numOfCelebration, celebrationStart, celebrationEnd } from './components/celebration';


const LevelUpNum = 30;
const CelebrationRate = 10;
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...getRandomData(),
            num: 0,
            life: 5,
            wrongMsg: '',
            gameOver: false,
            celebrating: false,
            Celebration: null,
        };
    }

    handleFinish = () => {
        let waitTime = 0;
        let willCelebrate = false;
        if (false && this.state.num % CelebrationRate === 9) {
            willCelebrate = true;
            waitTime = 1000 * (random(5) + 5);
        }

        let celebrationIndex = random(numOfCelebration-1);
        if (willCelebrate) { this.celebrationStart(celebrationIndex); }
        setTimeout(() => {
            if (willCelebrate) { this.celebrationEnd(celebrationIndex); }
            this.setState({
                ...getRandomData({differiculty: round(this.state.num/LevelUpNum)+1}),
                num: this.state.num + 1,
            });
        }, waitTime);
    }

    celebrationStart = (index) => {
        this.setState({
            celebrating: true,
            Celebration: celebrationStart(index),
        });
    }

    celebrationEnd = (index) => {
        this.setState({
            celebrating: false,
            Celebration: null,
        });
        celebrationEnd(index);
    }

    handleWrongAnswer = () => {
        this.setState({
            life: this.state.life - 1,
            wrongMsg: 'Wrong!!',
        });
        setTimeout(()=>{
            this.setState({wrongMsg: ''});
        },1000);

        if (this.state.life < 0) {
            this.setState({
                gameOver: true,
            });
        }
    }

    handleStart = () => {
        this.setState({
            ...getRandomData(),
            num: 0,
            life: 5,
            wrongMsg: '',
            gameOver: false,
        });
    }

    render() {

        const { celebrating, word, question, num, url } = this.state;

        if ( !word || !question){
            return null;
        }

        if (celebrating){
            return this.state.Celebration;
        }

        return (
            this.state.gameOver
            ?
                <div style={{paddingTop: '90px', textAlign: 'center'}}>
                    <div style={{fontSize: '100px', lineHeight: '100px'}}>
                        Game Over !! Your score is {num} !!
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div style={{fontSize: '30px'}}>
                        <button onClick={this.handleStart}> Play Again </button>
                    </div>

                    <div style={{paddingTop: '50px', textAlign: 'center'}}>
                        <Link to="/">
                            <Button variant="contained" color="primary" size="large" >
                                Back to Menu
                            </Button>
                        </Link>
                    </div>

                </div>
            :
                <div className='app-wrapper' style={{textAlign: 'center'}}>
                    <GamePage
                        num={num}
                        word={word}
                        url={url}
                        question={question}
                        onFinish={this.handleFinish}
                        onWrongAnswer={this.handleWrongAnswer}
                    />
                    <div style={{paddingTop:'20px', height: '50px'}}>
                        <span style={{fontSize:'40px', color: 'red'}}>
                            { this.state.wrongMsg }
                        </span>
                    </div>
                    <div style={{paddingTop:'20px'}}>
                        <LifeBar life={this.state.life} />
                    </div>
                </div>
        );

    }
}

export default HomePage;
