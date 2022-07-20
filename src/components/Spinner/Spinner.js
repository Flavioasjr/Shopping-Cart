import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './styledSpinner';

export function Spinner({ text }) {
  return (
    <Styled.Spinner>
      <Styled.SpinnerText>{text}</Styled.SpinnerText>
      <Styled.Loader />
    </Styled.Spinner>
  );
}

Spinner.propTypes = {
  text: PropTypes.string.isRequired,
};
