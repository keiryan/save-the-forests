import { Card, CardTitle, CardText, CardIcon } from "./styles.card";

export default function CardComponent({ title, children, icon }) {
  return (
    <Card>
      <CardIcon>{icon}</CardIcon>
      <CardTitle>{title}</CardTitle>
      <CardText>{children}</CardText>
    </Card>
  );
}
