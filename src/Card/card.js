import { Card, CardTitle, CardText, CardIcon } from "./styles.card";

export default function CardComponent({
  title,
  children,
  icon,
  passedToggle,
  parentHandleClick,
  openCard,
}) {
  const handleClick = (e) => {
    parentHandleClick(e.target.id);
  };

  return (
    <Card
      id={icon}
      passedToggle={passedToggle}
      onClick={handleClick}
      openCard={openCard}
    >
      <CardIcon>{icon}</CardIcon>
      <CardTitle>{title}</CardTitle>
      <CardText>{children}</CardText>
    </Card>
  );
}
