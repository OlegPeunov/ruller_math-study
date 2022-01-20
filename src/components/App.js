import React from 'react';
import Question from './Question'
import Ruler from './Ruler'

function App() {
  const [firstDigit, setFirstDigit] = React.useState(Math.floor(Math.random() * (10 - 6)) + 6);
  const [secondDigit, setSecondDigit] = React.useState(Math.floor(Math.random() * ((15 - firstDigit) - (11 - firstDigit))) + (11 - firstDigit));

  const [secondBlock, setSecondBlock] = React.useState(false);
  


  function renderValueNum3(e){
    setSecondBlock(true)
  }


  return (
    <div className="app">
      <Question firstNum={firstDigit} secondNum={secondDigit} isSecondBlockOk={secondBlock}/>
      <Ruler firstNum={firstDigit} secondNum={secondDigit} onAddNum={renderValueNum3}/>
    </div>
  );
}

export default App;
