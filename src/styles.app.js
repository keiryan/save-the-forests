import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const Base = styled.div`
  display: flex;
`;

export const Section = styled(Base)`
  min-width: 100%;
  min-height: 100%;
  padding: 20px;
`;

export const Container = styled(Base)`
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  position: relative;
  font-family: "sf pro display", sans-serif;
  overflow: auto;
  scroll-behavior: smooth;
`;

export const LandingPage = styled(Section)`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  background: url("https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const LandingPageText = styled.div`
  font-size: 64px;
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const MoreAboutUs = styled(Section)`
  min-height: fit-content;
  background-color: #171d11;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  @media (min-width: 1000px) {
    align-content: flex-start;
    padding: 20px 100px;
  }
`;



export const SVG = styled.svg`
  fill: #fff;
  width: 36px;
  transition: all 0.3s ease-in-out;
`;

export const ScrollUp = styled.a`
  display: ${({ visible }) => (visible.visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 32px;
  color: #fff;
  background-color: #3a5332;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    width: 60px;
    height: 60px;
    ${SVG} {
      width: 40px;
    }
  }
`;

export const ScrollDownContainer = styled(Base)`
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 4px;
  font-size: 20px;
  font-weight: bold;
  @media (max-width: 768px) {
    bottom: 100px;
  }
`;

export const ScrollDownText = styled.div``;

export const ScrollDown = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 50px;
  margin-top: 20px;
  animation-name: ${bounce};
  animation-duration: 2s;
  animation-iteration-count: infinite;
  :hover {
    cursor: pointer;
    /* background-color: rgba(0, 0, 0, 0.3); */
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 12px;
  background-color: #050707;
  color: #fff;
  gap: 20px;
`;

export const SocialMediaIcon = styled.svg`
  fill: #fff;
`;

export const SocialMediaIconContainer = styled.div`
  width: fit-content;
  transition: all 0.1s ease-in-out;
  :hover {
    cursor: pointer;
    transform: translateY(-5px);
  }
`;
