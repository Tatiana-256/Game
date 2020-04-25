import React from 'react';
import emoji from "../utils/emoji.png"
import dog from '../utils/dog.mp3'
import styles from "./Game.module.css"

class Dog extends React.Component {

    incrementScore = () => {
        this.props.incrementScore()
    }

    render() {
        let classForDog = this.props.t === this.props.randomIndex ? styles.show : styles.photo

        return (
            <div className={styles.item}>
                <img src={emoji} alt='emoji' className={classForDog} onClick={this.incrementScore}/>
                <audio src={dog}/>
            </div>
        )
    }
}

export default Dog