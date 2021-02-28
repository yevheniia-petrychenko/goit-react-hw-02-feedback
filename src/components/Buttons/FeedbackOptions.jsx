import React from 'react';
import PropTypes from 'prop-types';
import './buttons.css';

const FeedbackOptions = ({ options, OnLeaveFeedback }) => (
  <ul className="buttonList">
    {options.map(option => {
      return (
        <li className="buttonListItem" key={option}>
          <button
            className="feedbackBtn"
            type="button"
            id={option}
            onClick={OnLeaveFeedback}
          >
            {option}
          </button>
        </li>
      );
    })}
  </ul>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
