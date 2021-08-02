import * as React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import Icon from "../Icon"

const ButtonContainer = styled.button`
  background-color: var(--c-dark-pink);
  color: var(--c-white);

  border-radius: 10px;
  padding-left: 15px;
  padding-right: 15px;

  height: 40px;
  min-width: 170px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.5s;
  transform: scale(1);

  :hover {
    opacity: 0.8;
    transform: scale(1.05);
  }

  ${props =>
    props.alt === "true" &&
    css`
      background-color: var(--c-light-pink);
      box-shadow: 0px 3px 3px var(--c-pink);
      border-radius: 5px;

      padding-left: 10px;
      padding-right: 16x;
      justify-content: flex-start;

      height: 30px;
    `}

  ${props =>
    props.height !== undefined &&
    css`
      height: ${props.height};
    `}

    ${props =>
    props.width !== undefined &&
    css`
      width: ${props.width};
    `}
`

const AnchorContainer = styled.a`
  ${ButtonContainer}

  cursor: pointer;
  text-decoration: none;
`

const LeftIconContainer = styled.div`
  margin-right: 16px;
  display: flex;
`

const RightIconContainer = styled.div`
  margin-left: 16px;
  display: flex;
`

function ButtonContent(props) {
  const { leftIcon, rightIcon, children } = props

  return (
    <>
      {leftIcon !== undefined && (
        <LeftIconContainer>
          <Icon name={leftIcon} />
        </LeftIconContainer>
      )}
      {children}
      {rightIcon !== undefined && (
        <RightIconContainer>
          <Icon name={rightIcon} />
        </RightIconContainer>
      )}
    </>
  )
}

export default function Button(props) {
  const { href, target, type, alt, ...otherProps } = props

  if (href) {
    return (
      <AnchorContainer
        href={href}
        target={target}
        alt={alt.toString()}
        {...otherProps}
      >
        <ButtonContent {...props} />
      </AnchorContainer>
    )
  }

  return (
    <ButtonContainer type={type} alt={alt.toString()} {...otherProps}>
      <ButtonContent {...props} />
    </ButtonContainer>
  )
}

Button.defaultProps = {
  target: "_blank",
  type: "button",
  alt: false,
}

Button.propTypes = {
  children: PropTypes.element,
  height: PropTypes.string,
  width: PropTypes.string,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  alt: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
}
