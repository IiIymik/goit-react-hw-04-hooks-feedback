import React from 'react';

import { Button, Container } from './FeedbackOptions.styled.js';
import Section from '../Section/Section.jsx';

function FeedbackOptions({ options , onLeaveFeedback}) {
    return <Section title="Please leave feedback">
        <Container>
            {options.map((nameBtn, index) => (
                <Button key={index} name={nameBtn} type='button' onClick={onLeaveFeedback}>{nameBtn}</Button>
            ))}
        </Container>
    </Section>
}

export default FeedbackOptions

