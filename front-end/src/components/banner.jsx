import React from 'react';
import PropTypes from 'prop-types';

export default function Banner({ namePage }) {
  return (
    <section className="container-banner">
      <h2>{ namePage }</h2>
    </section>
  );
}

Banner.propTypes = {
  namePage: PropTypes.string.isRequired,
};
