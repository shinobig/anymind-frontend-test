import React, {useState} from 'react';
import styled from "styled-components";
import GeneralButton from "../../SharedStyles/GeneralButton";
import {IoIosSend} from 'react-icons/io'

const TextBoxHolder = styled.div`
  background-color: #90caf9;
  grid-row: 3;
  display: grid;
  grid-template-columns: auto 200px;
  column-gap: 10px;
  padding: .5em;
`

const Input = styled.textarea`
  grid-column: 1;
  border-radius: 5px;
  border: none;
  display: block;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
`


const TextBox = () => {

  const [messageToSend, setMessageToSend] = useState('');

  const sendMessage = () => {
    console.log(messageToSend)
  }


  return (
    <TextBoxHolder>
      <Input onChange={e => {
        setMessageToSend(e.target.value)
      }}/>
      <GeneralButton
        height={100}
        margin={'0'}
        fontSize={20}
        onClick={sendMessage}
        disabled={!messageToSend}
      >
        Send Message&nbsp;
        <IoIosSend/>
      </GeneralButton>
    </TextBoxHolder>
  );
};

export default TextBox;
