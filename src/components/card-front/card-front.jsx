import front from "./img/front.png";
import logo from "./img/card-logo.svg";
import styled from "styled-components";

const CardFront = ({ className, cardholder, cardNumber, month, year }) => {
  const format = (number) => {
    return number
      .toString()
      .substr(0, 16)
      .replace(/\d{4,4}?(?=...)/g, "$& ");
  };

  return (
    <div className={className}>
      <img src={front} alt='' className='card-front' />
      <img src={logo} alt='' className='card-logo' />
      <div className='card-details'>
        <div className='card-number'>{format(cardNumber)}</div>
        <div className='card-holder'>{cardholder}</div>
        <div className='card-expiry'>
          <div className='card-month'>{month}</div>/
          <div className='card-year'>{year}</div>
        </div>
      </div>
    </div>
  );
};

export default styled(CardFront)`
  position: relative;
  color: white;
  background-position: center top;
  background-size: 100% auto;
  background-repeat: no-repeat;
  height: fit-content;

  .card-logo {
    position: absolute;
    top: 10%;
    left: 10%;
  }

  && > .card-details {
    display: grid;
    grid-template-columns: 3fr 1fr;
    justify-content: end;
    align-items: center;
    position: absolute;
    padding: 10%;
    bottom: 0%;

    .card-number {
      font-size: 2.2rem;
      grid-column: span 4;
    }

    .card-bottom {
      display: flex;
      gap: 60%;
      justify-content: space-between;
    }

    .card-expiry {
      display: flex;
      justify-content: space-between;
    }
  }
`;
