import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Left from "./components/left";
import Right from "./components/right";
import logoImg from "./images/logo.svg";

const Logo = styled.div`
  position: absolute;
  width: 10vh;
  height: 30vh;
  background-image: url(${logoImg});
  background-repeat: no-repeat;
  background-size: contain;
  top: 50%;
  left: 50%;
  margin-top: -42vh;
  margin-left: -5.3vh;
  @media screen and (max-width: 735px) {
    margin-top: -44vh;
  }
`;

const Container = styled.div`
  padding: 3.5vh;
  height: 50vh;
  width: 90vh;
  border-radius: 20px;
  background-color: white;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 735px) {
    margin: 0 auto;
    margin-top: 29vh;
    flex-direction: column;

    width: 100%;
    align-items: center;
    height: 100%;
  }

  @media screen and (max-width: 400px) {
    width: 38vh;
  }
`;

function App() {
  const [billing, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(1);

  const [total, settot] = useState(0);
  const [tipAmount, setAmount] = useState(0);

  return (
    <>
      <Logo></Logo>
      <Container>
        <Left
          billing={billing}
          setBill={setBill}
          tip={tip}
          setTip={setTip}
          people={people}
          setPeople={setPeople}
          setTot={settot}
          setAmount={setAmount}
        ></Left>
        <Right
          total={total}
          tipAmount={tipAmount}
          setBill={setBill}
          setTip={setTip}
          setPeople={setPeople}
        ></Right>
      </Container>
    </>
  );
}

export default App;
