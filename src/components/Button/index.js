import * as React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ButtonContainer = styled.button`
  background-color: var(--c-dark-pink);
  border-radius: var(--c-dark-pink);

  color: var(--c-white);

  padding: 12px 45px 5px 45px;
`

const AnchorContainer = styled.a`
  ${ButtonContainer}

  cursor: pointer;
  text-decoration: none;
`

export default function Button(props) {
  const { children, href, target, type } = props

  if (href) {
    return (
      <AnchorContainer href={href} target={target}>
        {children}
      </AnchorContainer>
    )
  }

  return <ButtonContainer type={type}>{children}</ButtonContainer>
}

Button.defaultProps = {
  target: "_blank",
  type: "button",
}

Button.propTypes = {
  children: PropTypes.element,
  href: PropTypes.string,
  target: PropTypes.oneOf(["_blank", "_self", "_parent", "_top"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
}
