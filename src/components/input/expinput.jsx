import styled from "styled-components";

const Input = ({ className, label, type, onChange, error }) => {
  return (
    <div className={className}>
      <label for={label}>{label}</label>
      <div className='input-group'>
        <input
          placeholder='MM'
          type={type}
          min={1}
          max={12}
          name='month'
          onChange={onChange}
        />
        <input
          placeholder='YY'
          type={type}
          min={0}
          max={99}
          name='year'
          onChange={onChange}
        />
      </div>
      {error && <span>{error}</span>}
    </div>
  );
};

export default styled(Input)`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  ${(props) => props.full && "grid-column: span 2;"}

  && label {
    color: var(--color-dark-violet);
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  && input {
    padding: 1rem;
    font-weight: 500;
    width: 50%;
    font-family: "Space Grotesk", sans-serif;
  }

  && input:focus {
    outline: none;
    border: 2px solid var(--color-dark-violet);
  }

  && .input-group {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
`;
