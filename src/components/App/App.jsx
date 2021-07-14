import {useState} from 'react';
import Notification from '../Notification/Notification';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import { Container } from './App.styled.js';


const initialValue = 0;

export default function App() {
    const [good, setGood] = useState(initialValue);
    const [neutral, setNeutral] = useState(initialValue);
    const [bad, setBad] = useState(initialValue); 
    const [visible, setVisible] = useState(false);
    const feedbackBtnEl = Object.keys({ good, neutral, bad });
    const totalSum = good + neutral + bad;
    const positiveFeed = Math.round(good / totalSum * 100)

    const incrementStatistics = (e) => {
        const { name } = e.target;
        switch (name) {
            case 'good':
                setGood(state => state + 1)
                break;
            case 'neutral':
                setNeutral(state => state + 1)
                break;
            case 'bad':
                setBad(state => state + 1)
                break;
            default: console.log("Need to reload");
        }
        setVisible(true)
    }

    return (
        <Container>
            <FeedbackOptions onLeaveFeedback={incrementStatistics} options={feedbackBtnEl} />
            {!visible && <Notification message="No feedback given"/> }
            {visible && <Statistics good={good} neutral={neutral} bad={bad} total={totalSum} positivePercentage={positiveFeed}/>}
        </Container>
    )
}




