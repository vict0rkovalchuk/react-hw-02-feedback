import React from 'react';
import PropTypes from 'prop-types';
import styles from './Section.module.css';

function Section({ title, children }) {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
