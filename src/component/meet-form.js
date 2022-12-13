import { Button, Input } from 'antd';
import React, { useState, useRef } from "react";
import ModalCustom from './modal'
const { TextArea } = Input;
const Meetform = ()=>{
const formRef = useRef();
const [formInputs, setInput] = useState({name: '', email:''});
    const childFunc = React.useRef(null);
    const [textarea, setTextarea] = useState(
        ""
    );
    const handleChangeTextarea = (event) => {
        setTextarea(event.target.value)
    }
    const scheduleMeet = (event) =>{
    event.preventDefault();
        if (formInputs.name == '' || formInputs.email == ''){
            childFunc.current(false);
        } else if (formInputs.name && formInputs.email){
            childFunc.current(true);
        }
        console.log(formInputs, textarea);
  }
  const handleChange= (event)=>{
      const name = event.target.name;
      const value = event.target.value;
      setInput(values => ({ ...values, [name]: value }))
  }
return (
    <div className='form'>
        <h4>Enter Details</h4>
        <form ref={formRef}>
            <label>Name*</label>
            <Input name='name' onChange={handleChange} value={formInputs.name} placeholder="" />
            <label>Email*</label>
            <Input name='email' onChange={handleChange} placeholder="" value={formInputs.email} />
            <label>Please share anything that will help prepare for our meeting</label>
            <TextArea rows={4} maxLength={6} value={textarea} onChange={handleChangeTextarea} />
            <Button type='primary' onClick={scheduleMeet}>Schedule Event</Button>
            <ModalCustom form={formRef} childFunc={childFunc} userData={formInputs} textValue={textarea}></ModalCustom>
        </form>
    </div>
)
}

export default Meetform