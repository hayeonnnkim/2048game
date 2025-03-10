/** @jsxImportSource @emotion/react */
import styled from './style';
import PropTypes from 'prop-types';

const Title = ({ value }) => {
  return <div css={styled.title(value ?? 0)}>{value ?? ''}</div>;
};

Title.propTypes = {
  value: PropTypes.number,
};

export default Title;
