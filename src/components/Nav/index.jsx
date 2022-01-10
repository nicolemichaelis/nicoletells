import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  padding: var(--padding-default);

  & a {
    color: black;
    text-decoration: none;
  }

  & > a {
    line-height: 1;
    font-family: "Fraunces", "FrauncesVariable", serif;
  }

  & > div > a {
    margin-right: 20px;
  }

  & > div > a:hover {
    font-weight: 700;
  }

  & > div > a.active {
    font-weight: 700;
  }
`

const Nav = () => {

  return (
    <StyledNav>
      <Link to="/">Nicole<br/>Alexandra<br/>Michaelis</Link>
      <div>
        <Link to="/about" activeClassName="active">About</Link>
        <Link to="/portfolio" activeClassName="active">Portfolio</Link>
      </div>
    </StyledNav>
  )
}

export default Nav
