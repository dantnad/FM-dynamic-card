import Button from "./components/button/button";
import Expinput from "./components/input/expinput";
import Form from "./components/form/form";
import Input from "./components/input/input";
import styled from "styled-components";

function App({ className }) {
  return (
    <div className={`App ${className}`}>
      <div className='card-preview'></div>
      <div>
        <Form>
          <Input
            type='text'
            full
            label="Cardholder's name"
            placeholder='E.g. Jane Appleseed'
          />
          <Input
            type='number'
            full
            label='Card number'
            placeholder='E.g. 0000 0000 0000 0000'
          />
          <Expinput label='Expiry date (MM/YY)' />
          <Input type='number' label='CVC' placeholder='000' />
          <Button>Confirm</Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
