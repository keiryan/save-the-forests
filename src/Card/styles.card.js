import styled from "styled-components";
import { Base } from "../styles.app";

export const CardText = styled.p`
  text-align: center;
  line-height: 1.5;
`;

export const Card = styled(Base)`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  color: #171d11;
  border-radius: 10px;
  padding: 20px;
  max-width: ${(props) => (props.id === props.openCard ? "100%" : "300px")};
  flex: ${(props) => (props.id === props.openCard ? "0 0 40%" : "1 0 20%")};
  height: 300px;
  transition: all 0.3s ease-in-out;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 1200px) {
    flex: ${(props) => (props.id === props.openCard ? "0 0 100%" : "1 0 50%")};
  }
`;

export const CardIcon = styled.div`
  font-size: 80px;
`;

export const CardTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;
`;
