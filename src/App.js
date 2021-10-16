import React from 'react';
import Hello from './component/Hello';
import Wrapper from './component/Wrapper';

function App() {
  return (
  <Wrapper >
    <Hello name="react" color="red" isSpecial={true}/>
    <Hello color="pink"/>
  </Wrapper>
    
  );
}

export default App;