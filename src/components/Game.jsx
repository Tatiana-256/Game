import React from 'react';
import Dog from "./Dog";
import styles from "./Game.module.css";
import treck from '../utils/dog.mp3'

import Counter from "./Count";


class Game extends React.Component {

    state = {
        numberOfItems: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        score: 0,
        randomIndex: 0
    }

    getRandomImageIndex = () => {
        return Math.floor(Math.random() * 9);
    }


    componentDidMount() {
        setInterval(() => {
            this.setState({
                randomIndex: this.getRandomImageIndex()
            })
        }, 1000)
    }


    incrementScore = () => {
        let increment = this.state.score + 1
        this.setState({score: increment})
        let audio = new Audio(treck)
        audio.currentTime = 0;
        audio.play()
    }


    render() {
        return (
            <div>
                <div className={styles.wrapper}>
                    {this.state.numberOfItems.map((t) => {
                            return <Dog incrementScore={this.incrementScore}
                                        t={t}
                                        numberOfItems={this.numberOfItems}
                                        randomIndex={this.state.randomIndex}/>
                        }
                    )}
                </div>
                <Counter score={this.state.score}/>
            </div>
        );

    }
}

export default Game