import Button from "./components/button/button";
import CardFront from "./components/card-front/card-front.jsx";
import Expinput from "./components/input/expinput";
import Form from "./components/form/form";
import Input from "./components/input/input";
import styled from "styled-components";
import { useState } from "react";

function App({ className }) {
  const [{ cardholder, cardNumber, month, year, cvc }, setCardDetails] =
    useState({ cardholder: "", cardNumber: "", month: "", year: "", cvc: "" });
  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={`App ${className}`}>
      <div className='card-preview'>
        <CardFront
          cardNumber={cardNumber}
          cardholder={cardholder}
          month={month}
          year={year}
        />
      </div>
      <div className='card-details'>
        <Form>
          <Input
            type='text'
            onChange={handleCardChange}
            full
            name='cardholder'
            value={cardholder}
            label="Cardholder's name"
            placeholder='E.g. Jane Appleseed'
          />
          <Input
            type='number'
            onChange={handleCardChange}
            name='cardNumber'
            value={cardNumber}
            full
            label='Card number'
            placeholder='E.g. 0000 0000 0000 0000'
          />
          <Expinput
            label='Expiry date (MM/YY)'
            onChange={handleCardChange}
            month={month}
            year={year}
          />
          <Input
            type='number'
            onChange={handleCardChange}
            label='cvc'
            name='cvc'
            value={cvc}
            placeholder='000'
          />
          <Button>Confirm</Button>
        </Form>
      </div>
    </div>
  );
}

export default styled(App)`
  display: grid;
  height: 100vh;
  grid-gap: 2rem;
  align-items: center;
  justify-items: center;

  && > .card-preview {
    position: relative;
    display: flex;
    justify-content: end;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, hsl(249, 99%, 64%), hsl(278, 94%, 30%));
  }

  && > .card-details {
    padding: 20%;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
