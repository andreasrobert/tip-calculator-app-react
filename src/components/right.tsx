import styled from "styled-components";

const Container = styled.div`
  padding: 5vh;
  height: 40vh;
  width: 35vh;
  border-radius: 15px;
  background-color: hsl(183, 100%, 15%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 735px) {
    height: 27vh;
    margin-top: 2vh;
  }

  @media screen and (max-width: 370px) {
    width: 32vh;
    padding-left: 2vh;
  }
`;

const HeadContainer = styled.div`
  background-color: hsl(183, 100%, 15%);
  height: 18vh;
  width: 35vh;
  margin-top: 0.4vh;
`;

const Bar = styled.div`
  background-color: hsl(183, 100%, 15%);
  height: 5vh;
  width: 35vh;
  display: flex;
  justify-content: space-between;
`;

const Header = styled.p`
  color: hsl(189, 41%, 97%);
  line-height: 0px;
  font-size: 2vh;
  font-weight: 400;
`;

const Details = styled.p`
  line-height: 1px;
  color: hsl(184, 14%, 56%);
  font-size: 1.6vh;
  font-weight: 400;
`;

const Cash = styled.p`
  color: hsl(172, 67%, 45%);
  font-weight: 700;
  font-size: 4.7vh;
  margin-top: -0.7vh;

  &.mini {
    font-size: 4vh;
    margin-top: -0.1vh;
  }

  &.little {
    font-size: 5vh;
    transform: rotate(-20deg);
    margin-top: -1vh;
  }
`;

const Reset = styled.div`
  background-color: hsl(172, 67%, 45%);
  border-radius: 5px;
  height: 7vh;
  width: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsl(183, 100%, 15%);
  font-weight: 700;
  font-size: large;
  cursor: pointer;
  &:active {
    background-color: hsl(173, 61%, 77%);
  }
`;

function Right(props: {
  total: number;
  tipAmount: number;
  setBill: (e: any) => any;
  setTip: (e: any) => any;
  setPeople: (e: any) => any;
}) {
  const handleReset = () => {
    props.setBill(0);
    props.setPeople(1);
    props.setTip(0);
  };

  const size = `${props.total}`.length;
  const sizeAm = `${props.tipAmount}`.length;

  return (
    <>
      <Container>
        <HeadContainer>
          <Bar>
            <div>
              <Header>Tip Amount</Header>
              <Details>/ person</Details>
            </div>

            <Cash
              className={
                sizeAm >= 7 ? (sizeAm >= 9 ? "little" : "mini") : `max`
              }
            >
              {sizeAm >= 9 ? `MAXED!` : `$${props.tipAmount}`}
            </Cash>
          </Bar>

          <Bar></Bar>

          <Bar>
            <div>
              <Header>Total</Header>
              <Details>/ person</Details>
            </div>

            <Cash
              className={size >= 9 ? (size >= 11 ? "little" : "mini") : `max`}
            >
              {size >= 11 ? `MAXED!` : `$${props.total}`}
            </Cash>
          </Bar>
        </HeadContainer>

        <Reset onClick={handleReset}>RESET</Reset>
      </Container>
    </>
  );
}

export default Right;
