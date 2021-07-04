import React, { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import styles from './App.module.css';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodClick = () => {
    this.setState({ good: this.state.good + 1 });
  };

  neutralClick = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  badClick = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    } else return (this.state.good * 100) / this.countTotalFeedback();
  };

  render() {
    let { good, neutral, bad } = this.state;

    return (
      <div className={styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            goodClick={this.goodClick}
            neutralClick={this.neutralClick}
            badClick={this.badClick}
          ></FeedbackOptions>

          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage().toFixed(
                0
              )}
            ></Statistics>
          ) : (
            <Notification message="No feedback given"></Notification>
          )}
        </Section>
      </div>
    );
  }
}
