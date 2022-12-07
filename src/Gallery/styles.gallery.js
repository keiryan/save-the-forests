import styled from "styled-components";
import { Base } from "../styles.app";

export const Container = styled(Base)`
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  @media (min-width: 1000px) {
    align-content: flex-start;
    padding: 20px 100px;
  }
`;
