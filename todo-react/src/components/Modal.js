import React from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  pointer-events: ${ props => props.isOpened ? 'auto' : 'none' };
`
const StyledModalIn = styled.div`
  width: calc(100% - 50px);
  height: calc(100% - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 10;
  pointer-events: none;
  transition-duration: .2s;
  transition-property: width;
  &.is-opened-sidemenu {
    width: calc(100% - 160px);
  }
`
const StyledModalBg = styled.div`
  width: 100%;
  height: 100%;
  opacity: ${ props => props.isOpened ? 1 : 0 };
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  transition-duration: .2s;
  transition-property: opacity;
`
const StyledModalBody = styled.div`
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
  opacity: ${ props => props.isOpened ? 1 : 0 };
  pointer-events: ${ props => props.isOpened ? 'auto' : 'none' };
  padding: 3px;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  background-color: #f5f5f5;
  transform: scale(${ props => props.isOpened ? 1 : 0.96 });
  transition-duration: .2s;
  transition-delay: ${ props => props.isOpened ? 0.05 : 0 }s;
  transition-property: opacity, transform;
`

class Modal extends React.Component {
  render() {
    return (
      <StyledModal
        isOpened = { this.props.isOpened }
      >
        <StyledModalIn
        >
          <StyledModalBody
            isOpened = { this.props.isOpened }
          >
            { this.props.children }
          </StyledModalBody>
        </StyledModalIn>
        <StyledModalBg
          isOpened = { this.props.isOpened }
          onClick = { this.props.close }
        />
      </StyledModal>
    )
  }
};

export default Modal;
