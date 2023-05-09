import styled from "styled-components";

const Input = ({
  className,
  label,
  type,
  onChange,
  error,
  placeholder,
  ...props
}) => {
  return (
    <div className={className}>
      <label htmlFor={label}>{label}</label>
      <input
        {...props}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
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
    font-family: "Space Grotesk", sans-serif;
  }

  && input:focus {
    outline: none;
    border: 2px solid var(--color-dark-violet);
  }
`;
