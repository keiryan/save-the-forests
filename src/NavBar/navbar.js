import {
  Container,
  NavContainer,
  JoinUs,
  JoinUsLink,
  LogoContainer,
  LogoText,
  LogoLink,
} from "./styles.navbar.js";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40px"
      height="40px"
      x="0"
      y="0"
      enableBackground="new 0 0 551.391 551.391"
      version="1.1"
      viewBox="0 0 551.391 551.391"
      xmlSpace="preserve"
      fill="#fff"
    >
      <path d="M413.695 0s-45.366 44.014-94.43 61.759c-363.333 131.419-210.1 387.518-205.101 388.362 0 0 20.374-35.48 47.896-55.717C336.704 266.015 372.2 118.233 372.2 118.233s-39.19 177.829-194.562 288.479c-34.316 24.426-57.552 84.568-67.388 144.679 0 0 24.325-9.828 34.785-12.49 4.079-26.618 12.607-52.106 27.025-74.875C389.211 489.88 460.332 314.903 469.623 253.89 491.552 109.79 413.695 0 413.695 0z"></path>
    </svg>
  );
}

export default function NavBar() {
  return (
    <Container>
      <NavContainer>
        {/* <h1 style={{ color: "white" }}>NavBar</h1> */}
        <LogoContainer>
          <LogoLink href='#'>
            <Icon />
            <LogoText>Eco</LogoText>
          </LogoLink>
        </LogoContainer>
        <JoinUs>
          <JoinUsLink href="#">Join Us</JoinUsLink>
        </JoinUs>
      </NavContainer>
    </Container>
  );
}
