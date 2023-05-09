import Button from "./components/button/button";
import CardBack from "./components/card-back/card-back";
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
    switch (name) {
      case "cardNumber":
        setCardDetails((prev) => ({
          ...prev,
          [name]: value.slice(0, 16),
        }));
        break;
      case "month":
        setCardDetails((prev) => ({
          ...prev,
          [name]: value.replace(/\D/g, "").slice(0, 2),
        }));
        break;
      case "year":
        setCardDetails((prev) => ({
          ...prev,
          [name]: value.replace(/\D/g, "").slice(0, 2),
        }));
        break;
      case "cvc":
        setCardDetails((prev) => ({
          ...prev,
          [name]: value.replace(/\D/g, "").slice(0, 3),
        }));
        break;
      default:
        setCardDetails((prev) => ({ ...prev, [name]: value }));
        break;
    }
  };

  return (
    <div className={`App ${className}`}>
      <div className='card-preview'>
        <div className='card-group'>
          <CardFront
            cardNumber={cardNumber}
            cardholder={cardholder}
            month={month}
            year={year}
          />
          <CardBack cvc={cvc} />
        </div>
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
            value={cardNumber.split(0, 16)}
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
  display: flex;
  flex-direction: row;
  height: 100vh;
  align-items: center;
  justify-items: center;

  && > .card-preview {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40vw;
    height: 100vh;
    background: linear-gradient(45deg, hsl(249, 99%, 64%), hsl(278, 94%, 30%));

    .card-group {
      position: relative;
    }
  }

  && > .card-details {
    width: 60vw;
    padding: 0 14%;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
