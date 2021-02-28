import { Component } from 'react';
import Section from './components/Section/Section';
import StatsMarkup from './components/Statistics/Statistics';
import FeedbackOptions from './components/Buttons/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnButtonClick = event => {
    const key = event.target.id;
    return this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          OnLeaveFeedback={this.handleOnButtonClick}
        />
        <StatsMarkup
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positiveFeedback={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}

export default App;
