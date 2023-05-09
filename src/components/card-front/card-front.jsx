import front from "./img/front.png";
import logo from "./img/card-logo.svg";
import styled from "styled-components";

const CardFront = ({ className, cardholder, cardNumber, month, year }) => {
  const format = (number) => {
    return number.replace(/\d{4,4}?(?=...)/g, "$& ");
  };

  return (
    <div className={className}>
      <img src={front} alt='' className='card-front' />
      <img src={logo} alt='' className='card-logo' />
      <div className='card-details'>
        <div className='card-number'>{format(cardNumber)}</div>
        <div className='card-bottom'>
          <div className='card-holder'>{cardholder}</div>
          <div className='card-expiry'>
            <div className='card-month'>{month}</div>/
            <div className='card-year'>{year}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(CardFront)`
  position: relative;
  z-index: 1000;
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

  .card-details {
    width: 100%;
    padding: 10%;
    align-items: center;
    position: absolute;
    bottom: 0%;
  }

  .card-number {
    font-size: 2.4rem;
    text-align: justify;
  }

  .card-holder {
    width: 70%;
  }

  .card-expiry {
    width: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .card-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;
