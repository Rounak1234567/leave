import React, { useState } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: white;
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

const sharedStyles = css`
  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  width: 40%;
  margin: 20px auto 20px auto;
  text-align:left;
  padding: 0 20px;
  @media screen and (max-width: 480px) {
    width:90%;
  }
`;

const StyledForm = styled.form`
  width: 100%;
  max-width: 700px;
  padding: 40px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  display: inline-block;
  width: 100%;
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;
  ${sharedStyles}
`;

const StyledSelect = styled.select`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledOptiom = styled.option`
  display: block;
  width: 100%;
  ${sharedStyles}
`;

const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;


const StyledError = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;

const initalState = {
  name: '',
  email: '',
  message: '',
  currUnit:'',
  days:'',
};

const Leave = () => {
  const [state, setState] = useState(initalState);
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submitted!');
    console.log(state);

    for (let key in state) {
      if (state[key] === '') {
        setError(`You must provide the ${key}`)
        return
      }
    }
    setError('');
  };

  const handleInput = e => {
    const inputName = e.currentTarget.name;
    console.log(inputName)
    const value = e.currentTarget.value;
    console.log(value)

    setState(prev => ({ ...prev, [inputName]: value }));
  };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <h1>Leave Application</h1>
          <label htmlFor="name">Name</label>
          <StyledInput
            type="text"
            name="name"
            value={state.name}
            onChange={handleInput}
          />
          <label htmlFor="email">Email</label>
          <StyledInput
            type="email"
            name="email"
            value={state.email}
            onChange={handleInput}
          />

          <label htmlFor="message">Reason for leave</label>
          <StyledTextArea
            name="message"
            value={state.message}
            onChange={handleInput}
          />
          
          <label htmlFor='unit'>Select your current Unit</label><br /><br />
          <select name="currUnit" onChange={handleInput}>
            <option value=""></option>
            <option value="u1">Unit 1</option>
            <option value="u2">Unit 2</option>
            <option value="u3">Unit 3</option>
            <option value="u4">Unit 4</option>
            <option value="u5">Unit 5</option>
            <option value="u6">Unit 6</option>
          </select><br /><br />
          <label htmlFor='unit'>Number of days</label><br /><br />
          <select name="days" onChange={handleInput}>
            <option value=""></option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="4+">4+</option>
          </select><br /><br />
          {state.days > 1 ? <><label htmlFor="date" className='lbl'>From</label>
          <StyledInput
            type="date"
            name="from"
            value={state.from}
            onChange={handleInput}
          />
          <label htmlFor="date" className='lbl'>To</label>
          <StyledInput
            type="date"
            name="to"
            value={state.to}
            onChange={handleInput}
          /></>:
          <>
          <label htmlFor="date">Date</label>
          <StyledInput
            type="date"
            name="date"
            value={state.date}
            onChange={handleInput}
          />
          </>
          }
          {error && (
            <StyledError>
              <p>{error}</p>
            </StyledError>
          )}
          <StyledButton type="submit">Submit</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
}

export default Leave;