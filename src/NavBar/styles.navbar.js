import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  max-width: 1600px;
  padding: 14px 0;
`;

export const JoinUsLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
`;

export const JoinUs = styled.div`
  background-color: transparent;
  padding: 8px 32px;
  border-radius: 50px;
  border: 2px solid #fff;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  :hover {
    cursor: pointer;
    background-color: #fff;
    ${JoinUsLink} {
      color: #000;
    }
  }
`;

export const LogoContainer = styled.div`
`;

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;

export const LogoText = styled.div`
  font-family: "bebas neue", sans-serif;
  text-transform: uppercase;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 4px;
  color: #fff;
`;
