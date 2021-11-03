import React, { useState, useRef } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e9e9e9;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 70vh;
  text-align: left;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  width: 75%;
  border-radius: 3px;
  box-shadow: 0 5px 10px 0 rgb(138 155 165 / 15%);
  margin-top: 1em;
  @media (min-width: 0px) and (max-width: 449px) {
    height: 84vh;
  }
  li {
    font-size: 1.2rem;
    list-style-type: none;

    ul {
      margin-left: 1em;
    }
  }

  a {
    color: #000;
    text-decoration: none;
    transition: color 0.3s linear;

    &:hover {
      color: #db2220;
    }
  }
`;
const StyledBurger = styled.button`
  margin-right: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? '#0D0C1D' : '#000')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }

  @media (min-width: 449px) {
    position: absolute;
    top: -3.1em;
    right: 2rem;
  }

  @media (min-width: 768px) {
    top: 0em;
  }
`;

const Menu = ({ open }) => (
  <StyledMenu open={open}>
    <ul>
      <li>
        The Firm
        <ul>
          <li>
            <Link href="/administration">
              <a>Administration</a>
            </Link>
          </li>
          <li>
            <Link href="/careers">
              <a>Careers</a>
            </Link>
          </li>
          <li>
            <Link href="/community-involvement">
              <a>Community Involvement</a>
            </Link>
          </li>
          <li>
            <Link href="/diversity-group">
              <a>Diversity Group</a>
            </Link>
          </li>
          <li>
            <Link href="/firm-overview">
              <a>Firm Overview</a>
            </Link>
          </li>
          <li>
            <Link href="/pro-bono">
              <a>Pro Bono</a>
            </Link>
          </li>
          <li>
            <Link href="/women-lead">
              <a>Women Lead</a>
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link href="/attorneys">
          <a>Attorneys</a>
        </Link>
      </li>
      <li>
        <Link href="/practices">
          <a>Practices</a>
        </Link>
      </li>
      <li>
        <Link href="/library">
          <a>Library</a>
        </Link>
      </li>
      <li>
        <Link href="/locations">
          <a>Locations</a>
        </Link>
      </li>
    </ul>
  </StyledMenu>
);

const Burger = ({ open, setOpen }) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
    <span className="sr-only">Mobile Menu</span>
  </StyledBurger>
);

export default function HamburgerMobileMenu() {
  const [open, setOpen] = useState(false);
  const node = useRef();

  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </div>
  );
}
