/** @jsxImportSource @emotion/react */
import styled from './style';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
  return (
    <button css={styled.button} onClick={onClick}>
      New Game
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
