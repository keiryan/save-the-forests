import React, { useState } from "react";
import "./App.css";
import {
  Container,
  LandingPage,
  LandingPageText,
  MoreAboutUs,
  ScrollUp,
  SVG,
  ScrollDownContainer,
  ScrollDown,
  ScrollDownText,
  Footer,
  SocialMediaIconContainer,
  SocialMediaIcon,
} from "./styles.app.js";
import NavBar from "./NavBar/navbar.js";
import Card from "./Card/card.js";

export default function App() {
  const [visible, setVisible] = useState({ visible: false });

  // function to toggle visibility of scroll up button
  const toggleVisible = (e) => {
    const scrolled = e.currentTarget.scrollTop;
    // console.log(e, e.currentTarget.scrollTop);
    if (scrolled > 300) {
      setVisible({ visible: true });
    } else if (scrolled <= 300) {
      setVisible({ visible: false });
    }
  };

  return (
    <Container onScroll={toggleVisible}>
      <NavBar></NavBar>
      <LandingPage id="top">
        <LandingPageText> We belive in saving the forests.</LandingPageText>

        <ScrollDownContainer>
          <ScrollDownText>Scroll Down to learn more</ScrollDownText>

          <ScrollDown href="#about">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 0 24 24"
              width="48px"
              fill="#fff"
            >
              <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
            </svg>
          </ScrollDown>
        </ScrollDownContainer>
      </LandingPage>
      <MoreAboutUs id="about">
        <Card icon="🌲" title="We love trees.">
          That's right, we love trees! Better yet, we{" "}
          <strong>
            <em>need</em>
          </strong>{" "}
          trees. They are the foundation of the food chain.
        </Card>

        <Card icon="🫁" title="Lungs of the earth">
          Trees are the lungs of the earth. They provide us with oxygen, and
          they absorb carbon dioxide.
        </Card>

        <Card icon="🪖" title="Trees Protect">
          Trees protect us from the elements. They provide us with shade,
          shelter, and food.
        </Card>

        <Card icon="🌳" title="60,000 species">
          Do you know many different types of trees are there? There are over
          60,000 species of trees in the world.
        </Card>

        <Card icon="🪚" title="We must protect them">
          Despite the many trees in the world, we are still losing them at an
          alarming rate.
        </Card>

        <Card icon="🏡" title="Trees are homes">
          Trees are home to massive ecosystems. More than 80% of all land
          animals and plants live in forests.
        </Card>

        <Card icon="⛑️" title="Contribute to health">
          Trees contribute to the health of the soil. They help to prevent soil
          erosion and desertification.
        </Card>

        <Card icon="🪴" title="Can you adopt?">
          Can you adopt a tree? You can adopt a tree and help to protect it. You
          can also help to plant more trees.
        </Card>
      </MoreAboutUs>
      <ScrollUp visible={visible} href="#top">
        <SVG
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="36px"
          fill="#fff"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
        </SVG>
      </ScrollUp>
      <Footer>
        <SocialMediaIconContainer>
          <SocialMediaIcon
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
          </SocialMediaIcon>
        </SocialMediaIconContainer>
        <SocialMediaIconContainer>
          <SocialMediaIcon
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </SocialMediaIcon>
        </SocialMediaIconContainer>

        <SocialMediaIconContainer>
          <SocialMediaIcon
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </SocialMediaIcon>
        </SocialMediaIconContainer>

        <SocialMediaIconContainer>
          <SocialMediaIcon
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </SocialMediaIcon>
        </SocialMediaIconContainer>
      </Footer>
    </Container>
  );
}
