import React, { useState } from "react";
import { Container } from "./styles.gallery";
import Card from "../Card/card";

export default function Gallery() {
  const [openCard, setOpenCard] = useState("");

  const handleClick = (id) => {
    if(id === openCard){
        setOpenCard("");
    } else {
        setOpenCard(id);
    }
    
  };
  return (
    <Container>
      <Card openCard={openCard} parentHandleClick={handleClick} icon="🌲" title="We love trees.">
        That's right, we love trees! Better yet, we{" "}
        <strong>
          <em>need</em>
        </strong>{" "}
        trees. They are the foundation of the food chain.
      </Card>

      <Card openCard={openCard} parentHandleClick={handleClick} icon="🫁" title="Lungs of the earth">
        Trees are the lungs of the earth. They provide us with oxygen, and they
        absorb carbon dioxide.
      </Card>

      <Card openCard={openCard} parentHandleClick={handleClick} icon="🪖" title="Trees Protect">
        Trees protect us from the elements. They provide us with shade, shelter,
        and food.
      </Card>

      <Card openCard={openCard} parentHandleClick={handleClick} icon="🌳" title="60,000 species">
        Do you know many different types of trees are there? There are over
        60,000 species of trees in the world.
      </Card>

      <Card openCard={openCard}parentHandleClick={handleClick} icon="🪚" title="We must protect them">
        Despite the many trees in the world, we are still losing them at an
        alarming rate.
      </Card>

      <Card openCard={openCard} parentHandleClick={handleClick} icon="🏡" title="Trees are homes">
        Trees are home to massive ecosystems. More than 80% of all land animals
        and plants live in forests.
      </Card>

      <Card openCard={openCard} parentHandleClick={handleClick} icon="⛑️" title="Contribute to health">
        Trees contribute to the health of the soil. They help to prevent soil
        erosion and desertification.
      </Card>

      <Card openCard={openCard} parentHandleClick={handleClick} icon="🪴" title="Can you adopt?">
        Can you adopt a tree? You can adopt a tree and help to protect it. You
        can also help to plant more trees.
      </Card>

      <Card openCard={openCard} parentHandleClick={handleClick} icon="🐿️" title="Animals love them!">
        Trees are home to squirrels, birds, and other animals. They provide a
        safe home for them.
      </Card>
    </Container>
  );
}
