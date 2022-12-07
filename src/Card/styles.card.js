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
  flex: 1;
  background-color: #fff;
  color: #171d11;
  border-radius: 10px;
  padding: 20px;
  min-width: 250px;
  max-width: 300px;
  height: 300px;
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