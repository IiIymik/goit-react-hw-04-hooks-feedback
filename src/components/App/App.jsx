import {useState} from 'react';
import PropTypes from 'prop-types';
import Notification from '../Notification/Notification';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import { Container } from './App.styled.js';

// Need add to Statistics total={},and positivePercentage={positiveFeed} and do some Hooks 

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [visible, setVisible] = useState(false);
    const feedbackBtnEl = Object.keys({ good, neutral, bad });

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
            default: console.log("not worked");
        }
       setVisible(true)
    }

    return (
        <Container>
                <FeedbackOptions onLeaveFeedback={incrementStatistics} options={feedbackBtnEl} />
                {!visible && <Notification message="No feedback given"/> }
                { visible && <Statistics good={good} neutral={neutral} bad={bad}  />}
            </Container>
    )
}

export default App






//     countTotalFeedback = () => {
//         const { good, neutral, bad} = this.state;
//         return good + bad + neutral;
//     }
//     countPositiveFeedbackPercentage = (totalSum) => {
//         const { good } = this.state;
//         return Math.round(good / totalSum * 100);
//     }
//   render() {
//         const { good, neutral, bad, visible} = this.state;
//         const totalSum = this.countTotalFeedback();
//         const positiveFeed = this.countPositiveFeedbackPercentage(totalSum);
    
//         return (
//             <div></div>
//         )
//   }
// }
