import React, { useState } from 'react';
import './FormComponent.css';

const FormComponent = () => {
    const [valueGiven, setValueGiven] = useState("");
    const [inputValue, setInputValue] = useState("");

    function onSubmitClicked(){
        setValueGiven(inputValue);
    };

    function onDeleteClicked(){
        setValueGiven("");
    };

    function valueStored(event){
        setInputValue(event.target.value);
    };

  return (
    <>
    <div className='comp'>
      <input type='text' onChange={valueStored} id='input-id'/>
      <button onClick={onSubmitClicked} className='form-comp'>Submit</button>
      <button onClick={onDeleteClicked} className='form-comp'>delete</button>
      <button className='form-comp'>fetch</button>
    </div>
      <div className='comp'>{valueGiven}</div>
    </>
  );
};

export default FormComponent;
