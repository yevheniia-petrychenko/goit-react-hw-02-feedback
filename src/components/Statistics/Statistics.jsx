import React from 'react';
import Notification from './Notification';
import PropTypes from 'prop-types';
import './statistics.css';

const StatsMarkup = ({ good, neutral, bad, total, positiveFeedback }) => (
  <div className="statsMarkup">
    <h2 className="statsTitle">Statistics</h2>
    {total === 0 ? (
      <Notification message="Feedback wasn't given" />
    ) : (
      <>
        <p className="statsItem">Good: {good}</p>
        <p className="statsItem">Neutral: {neutral}</p>
        <p className="statsItem">Bad: {bad}</p>
        <p className="statsItem">Total: {total}</p>
        <p className="statsItem">Positive feedback: {positiveFeedback}%</p>
      </>
    )}
  </div>
);

StatsMarkup.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default StatsMarkup;
