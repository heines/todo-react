import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLOR from './_const/COLOR';

const Link = styled.button`
  margin-left: 0.5em;
  font-size: 1.5em;
  cursor: pointer;
  border-radius: 0.15em;
  text-decoration: none;
  border: none;
  outline: none;
  color: ${COLOR.TEXT};
  padding: 0.2em 0.45em;
  border: 1px solid ${COLOR.BASE};
  box-sizing: border-box;
  &:disabled {
    color: ${COLOR.TEXT2};
    background: ${COLOR.KEY};
    border: none;
  }
`;

const StyledLink = ({ active, children, onClick }) => (
  <Link
    onClick={onClick}
    disabled={active}
  >
    {children}
  </Link>
);

StyledLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default StyledLink;
