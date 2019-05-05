import React, { useState } from 'react';
import styled from 'styled-components'
import Toggle from './Toggle'

const App = () => {

  // useState
  // declare const as an array: const [] 
  // array contains input value itself and the set value: const [value, setValue]
  // const is equal to useState function: const [value, setValue] = useState();
  // useState() accepts initialState as param: useState(initialState);
  // hence: const [value, setValue] = useState(initialState);

  const [name, setName] = useState('');

  return (
    <div>
      <Wrapper>
        <header>
          <h1>react hooks</h1>
        </header>
        <main>


          <Toggle />
          <form onSubmit = { e => {
            e.preventDefault();
            formSubmit(name, setName);
          }}>
            <input 
              type="text" 
              onChange={ e => setName(e.target.value)} 
              value={name} 
            />
            <button>Submit</button>
          </form>
        
        
        </main>
        <footer></footer>
      </Wrapper>
    </div>
  );
}

const formSubmit = (value, setValue) => {
  console.log('email sent to' + '' + value);
  setValue('')
}

const Wrapper = styled.div `
  padding: 0 20px;
`

export default App;
