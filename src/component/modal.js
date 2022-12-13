import {Modal } from 'antd';
import React, { useState, render } from "react";
const ModalCustom = (props)=>{
    React.useEffect(() => {
        props.childFunc.current = openPopup
    }, [])
    const [showSuccess, setSuccess] = useState(true);
const [isModalOpen, setIsModalOpen] = useState(false);
    const personData = props.userData;
    const textArea = props.textValue;
    const handleCancel = () => {
        setIsModalOpen(false);
        
    };
    const openPopup = (success)=>{
        setSuccess(success)
        setIsModalOpen(true);
    }
           return showSuccess ?  <Modal open={isModalOpen} onOk={handleCancel} onCancel={handleCancel}>
                       <h3>Your meeting is schedule with following Data.</h3>
                       <p>Name: {personData.name}</p>
                       <p>Email: {personData.email}</p>
                       <p>Extra Info:{textArea} </p>
                   </Modal>
                   : <Modal open = { isModalOpen } onOk = { handleCancel } onCancel = { handleCancel }><h3> Please fill all required fields.</h3>
        </Modal >
          }
export default ModalCustom;