import styled from "styled-components";
import { Logo } from "../Logo";
import Facebook from "../icons/Facebook";
import LinkedIn from "../icons/LinkedIn";
import Twitter from "../icons/Twitter";
import Instagram from "../icons/Instagram";
import { Banner } from "../Banner";

export function Footer() {
  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };
  return (
    <Section>
      <Banner />
      <Container>
        <Left>
          <Logo />
          <IconList>
            <a href="#" target="_blank">
              <Facebook />
              <LinkedIn />
              <Twitter />
              <Instagram />
            </a>
          </IconList>
        </Left>
        <MenuItems>
          <Item onClick={() => scrollTo("home")}>Home</Item>
          <Item onClick={() => scrollTo("about")}>Acerca de</Item>
          <Item onClick={() => scrollTo("roadmap")}>Road Map</Item>
          <Item onClick={() => scrollTo("cards")}>Cards</Item>
          <Item onClick={() => scrollTo("team")}>Team</Item>
          <Item onClick={() => scrollTo("preguntas")}>Preguntas</Item>
        </MenuItems>
      </Container>
      <Bottom>
        <span>&copy;{new Date().getFullYear()}</span>
        <span>
          React &#10084;{""}
          <a href="https://www.360sger.com/" target="_blank">
            360sger.com
          </a>
        </span>
      </Bottom>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${(props) => props.theme.fontlg};
  border-bottom: 1px solid ${(props) => props.theme.text};
  @media (max-width: 48em) {
    width: 90%;
    h1 {
      font-size: ${(props) => props.theme.fontxxxl};
    }
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 48em) {
    width: 100%;
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem auto;
  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const MenuItems = styled.ul`
  list-style: none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
  @media (max-width: 48em) {
    display: none;
  }
`;

const Item = styled.li`
  width: fit-content;
  cursor: pointer;
  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${(props) => props.theme.fontlg};
  a {
    text-decoration: underline;
  }
  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;
    font-size: ${(props) => props.theme.fontmd};
    span {
      margin-bottom: 1rem;
    }
  }
`;
