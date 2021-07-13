import React from 'react';
import { List,Item} from './Statistics.styled.js'
import Section from '../Section/Section.jsx';


function Statistics(props) {
    const { good, neutral, bad, total, positivePercentage } = props;
    return <Section title="Statistics">
        <List>
                    <Item>Good: {good}</Item>
                    <Item>Neutral: {neutral}</Item>
                    <Item>Bad: {bad}</Item>
                    <Item >Total: {total}</Item>
                    <Item >Positive feedback: {positivePercentage}%</Item>
        </List>
    </Section>
}

export default Statistics

