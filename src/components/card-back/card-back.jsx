import back from "./img/back.png";
import styled from "styled-components";

const CardBack = ({ className, cvc }) => {
  return (
    <div className={className}>
      <img src={back} alt='Card back' />
      <div className='card-cvc'>{cvc}</div>
    </div>
  );
};

export default styled(CardBack)`
  position: relative;
  .card-cvc {
    position: absolute;
    color: black;
    font-size: 1.2rem;
    top: 43%;
    right: 13%;
  }
`;
