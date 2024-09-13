import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledAsideNavBarContainer = styled.nav`
  height: 100%;
  width: 18.75em;

  background-color: #2bcb9a;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:nth-of-type(1) {
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: 1.875em;
      text-align: center;

      padding-top: 30px;
      padding-bottom: 50px;
    }
  }

  * {
    color: white;
  }

  div:nth-of-type(2) {
    width: 100%;
    padding-bottom: 20px;

    a {
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const StyledLinkComponent = styled(Link)`
  outline: none;
  text-decoration: none;

  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.25em;
  padding: 1.3125em 1.25em;

  font-size: 1.125em;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05625em;

  transition: background-color 0.2s linear;

  &.selected,
  &:hover,
  &:focus {
    background-color: #ffffff33;
    font-weight: 900;
  }
`;
