import React, {useRef} from 'react';
import rulerPath from '../images/ruler.png'


function Ruler(props) {

  const [inputColorOne, setInputColorOne] = React.useState(false);
  const [inputColorTwo, setInputColorTwo] = React.useState(false);

  const [correctVal1, setCorrectVal1] = React.useState(false);
  const [correctVal2, setCorrectVal2] = React.useState(false);

  const [isFirstAnswerOk, setIsFirstAnswerOk] = React.useState(false);
  const [isSecondAnswerOk, setIsSecondAnswerOk] = React.useState(false);
  
  const inputTwoRef = useRef(null)
  

  function handleNameChange1(e){
    if(e.target.value != props.firstNum){
      setInputColorOne(true)

    }else{
      setInputColorOne(false)
      setIsFirstAnswerOk(true)
      setCorrectVal1(e.target.value)
      
      setTimeout(() => {
        inputTwoRef.current.focus()
      }, 700); 
    }
  }

  function handleNameChange2(e){
    if(e.target.value != props.secondNum ){
      setInputColorTwo(true)
      
    }else{
      setInputColorTwo(false)
      setIsSecondAnswerOk(true)
      setCorrectVal2(e.target.value)
      props.onAddNum(isSecondAnswerOk)
      
    }
  }
  
  
  

  const inputOneClass = `${ isFirstAnswerOk? 'ruler__input ruler__input_type_hidden' : `ruler__input ${inputColorOne? 'ruler__input_type_wrong' : ''}`}`                  
  const inputTwoClass = `${ isSecondAnswerOk? 'ruler__input ruler__input_type_hidden' : `ruler__input ${inputColorTwo? 'ruler__input_type_wrong' : ''}`}`             

  const secondblockShow = `ruler__arrow_container ${isFirstAnswerOk? 'ruler__arrow_container_type_show' : ''}`


  
  return (
    <section className="ruler">
      <div className="ruler__arrows-wrap">
        <div className="ruler__arrow_container ruler__arrow_container_type_show" >
          <div className="ruler__arrow-block">
            <p className='ruler__numHolder'>{correctVal1}</p>
            <input  className={inputOneClass} type="text" id="input1" autoFocus maxLength="1" onChange={handleNameChange1}/>
            <div className="ruler__arrow" style={{height: `${14*props.firstNum}rem`, width: `${38.6*props.firstNum}rem`}}></div>
          </div>
          <div className="ruler__arrow-point-container">
            <div className="ruler__arrow-point"></div>
          </div>
        </div>
        <div className={secondblockShow}>
          <div className="ruler__arrow-block">
            <p className='ruler__numHolder'>{correctVal2}</p>
            <input className={inputTwoClass} ref={inputTwoRef} type="text" id="input2" maxLength="1" onChange={handleNameChange2}/>
            <div className="ruler__arrow" style={{height: `${14*props.secondNum}rem`, width: `${38.3*props.secondNum}rem`}}></div>
          </div>
          <div className="ruler__arrow-point-container">
            <div className="ruler__arrow-point"></div>
          </div>
        </div>
      </div>         
      <img className="ruler__img" src={rulerPath} alt="линейка" />
    </section>
  );
}

export default Ruler;
