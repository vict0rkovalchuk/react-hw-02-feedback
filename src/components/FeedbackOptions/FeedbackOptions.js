import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

function FeedbackOptions({ goodClick, neutralClick, badClick }) {
  return (
    <div className={styles.buttons}>
      <button type="button" onClick={goodClick}>
        good
      </button>
      <button type="button" onClick={neutralClick}>
        neutral
      </button>
      <button type="button" onClick={badClick}>
        bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  goodClick: PropTypes.func.isRequired,
  neutralClick: PropTypes.func.isRequired,
  badClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
