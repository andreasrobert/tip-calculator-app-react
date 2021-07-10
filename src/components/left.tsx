import React, { useEffect } from 'react';
import styled from 'styled-components';
import dollarImg from '../images/icon-dollar.svg';
import personImg from '../images/icon-person.svg'

const Dollar = styled.div`
width: 1.7vh;
height: 3vh;
background-image: url(${dollarImg});
background-repeat: no-repeat;
background-size: contain;
position: absolute;
margin-top: 2.7vh;
margin-left: 2vh;
`;

const Person = styled.div`
width: 2vh;
height: 3vh;
background-image: url(${personImg});
background-repeat: no-repeat;
background-size: contain;
position: absolute;
margin-top: 2.9vh;
margin-left: 2vh;
`;


const Container = styled.div`
height: 50vh;
width: 45vh;
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-between;

@media screen and (max-width: 735px){
    width: 40vh;
}


`;

const Input= styled.input`
margin-bottom: 2vh;
margin-top: 1.5vh;
padding-right: 2vh;
border-radius: 0.7vh;
width: 38vh;
height: 5vh;
background-color: hsl(189, 41%, 97%);
border:none !important;
color:hsl(183, 100%, 15%);
font-weight: 700;
font-size: 3vh;
font-family: 'Space Mono', monospace;
text-align: end;
&:active{
    outline-color: hsl(172, 67%, 45%);
}
&:focus{
    outline-color: hsl(172, 67%, 45%);
}

&::placeholder{
    color:hsl(183, 100%, 15%);

}

&:focus::placeholder{
    color: transparent;
} 

`;

const NumberContainer = styled.div`
margin-top: 2vh;
width: 41vh;
height: 14vh;
background-color: white;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`;

const NumberInput = styled.div`
display: flex;
justify-content: center;
align-items: center;
border-radius: 0.7vh;
width: 12.59vh;
height: 5.5vh;
background-color: hsl(183, 100%, 15%);
font-size: 2.5vh;
cursor: pointer;
color:hsl(189, 41%, 97%) ;

&.me{
    background-color: hsl(172, 67%, 45%);
    color:hsl(183, 100%, 15%);
}

&:active{
    background-color:hsl(173, 61%, 77%);
    color:hsl(183, 100%, 15%);
    font-weight: 700;
}



`;

const CustomInput = styled.input`
margin-right: 1px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 0.7vh;
width: 11.8vh;
height: 5.2vh;
background-color: hsl(189, 41%, 97%);
border:none !important;
font-size: 2.5vh;
cursor: pointer;
text-align: center;
font-family: 'Space Mono', monospace;
font-weight: 700;
color:hsl(183, 100%, 15%);

&::placeholder{
    color:hsl(184, 14%, 56%);

}

&:focus::placeholder{
    color: transparent;
} 

&:focus{
    outline-color: hsl(172, 67%, 45%);
}
`;


function Left(props:{billing:number, setBill:(e:any)=>any, tip:number, setTip:(e:any)=>any, people:number, setPeople:(e:any)=>any, setTot:(e:any)=>any, setAmount:(e:any)=>any}) {


    useEffect(()=>{
        if(props.people<=0){
            props.setPeople(1)
        }

        let tip = Number(props.tip)/100
        let bills = Number(props.billing)
      
        let totalTip= (bills*tip)/Number(props.people)
        let total = (bills+(bills*tip))/Number(props.people)
        

        totalTip = Math.round(totalTip*100)/100;
        total = Math.round(total*100)/100;

        props.setAmount(totalTip)
        props.setTot(total)
        

    },[props.billing,props.people,props.tip,props])

    const selectAllText = (e:any) => {
        e.target.select();
      };


      let tips = Number(props.tip)

    return (
      <>
        <Container>
            <div>
                <br />
                Bill <br />
                <Dollar></Dollar>
                <Input value={props.billing}  onChange={(e) => props.setBill(e.currentTarget.value)}></Input>
            </div>
            <div>
                Select Tip %
                <NumberContainer>
                <NumberInput onClick={()=>props.setTip(5)} className={tips === 5 ? "me":"notMe"}>5%</NumberInput>
                <NumberInput onClick={()=>props.setTip(10)} className={tips === 10 ? "me":"notMe"}>10%</NumberInput>
                <NumberInput onClick={()=>props.setTip(15)} className={tips === 15 ? "me":"notMe"}>15%</NumberInput>
                <NumberInput onClick={()=>props.setTip(25)} className={tips === 25 ? "me":"notMe"}>25%</NumberInput>
                <NumberInput onClick={()=>props.setTip(50)} className={tips === 50 ? "me":"notMe"}>50%</NumberInput>
                <CustomInput placeholder="Custom" value={(tips <=0 ||tips === 5||tips === 10||tips === 15||tips === 25 ||tips=== 50)?"":props.tip} onChange={(e) => props.setTip(e.currentTarget.value)}></CustomInput>
                
                
                </NumberContainer>
                
                
            </div>
            <div>
                Number of People <br />
                <Person></Person>
                <Input placeholder="1" value={props.people <=0 ?"":props.people} onChange={(e) => props.setPeople(e.currentTarget.value)} onClick={selectAllText}></Input>
            </div>
            



        </Container>
  
  
      </>
    );
  }
  
  export default Left;
  