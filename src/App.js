import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components'
import Toggle from './Toggle'
import { useTitleInput } from './hooks/useTitleInput';

const App = () => {

  // useState
  // declare const as an array: const [] 
  // array contains input value itself and the set value: const [value, setValue]
  // const is equal to useState function: const [value, setValue] = useState();
  // useState() accepts initialState as param: useState(initialState);
  // hence: const [value, setValue] = useState(initialState);

  //useEffect
  const [name, setName] = useTitleInput('');
  //useRef
  const ref = useRef();

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
          }}>
            <input 
              type="text" 
              onChange={ e => setName(e.target.value)} 
              value={name} 
            />
            <button>Submit</button>
          </form>

          <aside class="aside" ref={ref}>
            <button onClick={() => ref.current.classList.add('new-class')}>add class</button>
          </aside>
        
        </main>
        <footer></footer>
      </Wrapper>
    </div>
  );
}


const Wrapper = styled.div `
  padding: 0 20px;
`

export default App;
