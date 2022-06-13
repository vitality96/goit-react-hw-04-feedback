import { useState } from "react";
import Statictics from "./Statistics/Statistics";
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from "./Section/Section";
import Notification from "./Notification/Notification";


export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onLeaveFeedback = event => {
        const changeItem = event.target.textContent;

        switch (changeItem) {
            case 'good':
                setGood(prevState => prevState + 1)
                break;

            case 'neutral':
                setNeutral(prevState => prevState + 1)
                break;

            case 'bad':
                setBad(prevState => prevState + 1)
                break;
                
            default:
                return;
        };
    };

    const total = good + neutral + bad;

        const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100) || 0;
    };

    const options = { good, neutral, bad };

        return (
            <>
                <Section title="Please leave feedback">
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
                    </div>
                </Section>
                <Section title="Statistics">
                    {total > 0 ? (
                        <Statictics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={countPositiveFeedbackPercentage()}
                    />
                    ) : (
                            <Notification message="There is no feedback"/>
                    )}
                </Section>
            </>
        );
}
