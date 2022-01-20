import React, {useRef} from 'react';

function Question(props){
  
  
  const [inputColorThree, setInputColorThree] = React.useState(false);
  const [correctVal3, setCorrectVal3] = React.useState(false);
  const inputThreeRef = useRef(null)

  if(props.isSecondBlockOk){
    setTimeout(() => {
      inputThreeRef.current.focus()
    }, 700); 
  }


  function handleNameChange3(e){
    if(e.target.value != (props.secondNum + props.firstNum) && e.target.value.length==2){
      setInputColorThree(true)
      
    }else{
      setInputColorThree(false)
      if(e.target.value == props.secondNum + props.firstNum){
        setCorrectVal3(e.target.value)

        setTimeout(() => {
          window.location.reload()
        }, 1200);
      }

      
      
    }
  }



  const quetionMark =   `question__sign ${props.isSecondBlockOk? 'question__sign_type_hidden' : ''}`
  const inputThreeClass = `${ (props.isSecondBlockOk && !correctVal3) ? `ruler__input ruler__input_type_2digits ${inputColorThree? 'ruler__input_type_wrong': ''}` : 'ruler__input_type_hidden'}`

  return (
    <section className="question">
      <div className="question__content">
        
        <p className="question__sign">{props.firstNum}</p>
        <p className="question__sign">+</p>
        <p className="question__sign">{props.secondNum}</p>
        <p className="question__sign">=</p>
        <p className={quetionMark}>?</p>
        <input className={inputThreeClass} ref={inputThreeRef} type="text" id="input3" maxLength="2" onChange={handleNameChange3}/>
        <p className='question__sign'>{correctVal3}</p>


      </div>
    </section>
  );
}

export default Question;
  