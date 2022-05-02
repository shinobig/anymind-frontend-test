import React, {KeyboardEvent, useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import GeneralButton from "../../SharedStyles/GeneralButton";
import {IoIosSend} from 'react-icons/io'
import {ChatContextManager} from "../../../context/chatContext";
import {Message} from "../../../interfaces/interfaces";
import {useMutation} from "@apollo/client";
import {POST_MESSAGE} from "../../../graphql/mutations";
import {postMessage} from "../../../utils/postMessage";
import {getMemoizedInput, memoizeInput} from "../../../utils/memoizeInput";

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
  const {chat, setChat, selectedUserId, channel} = useContext(ChatContextManager);
  const [createMessage] = useMutation(POST_MESSAGE)

  useEffect(() => {
    let lastUserInput = getMemoizedInput()
    if (lastUserInput) {
      setMessageToSend(lastUserInput)
    }
  }, []);


  const sendMessage = async () => {

    let currentChat = [...chat]

    let newMessage: Message = {
      text: messageToSend,
      userId: selectedUserId,
      datetime: new Date()
    }

    newMessage = await postMessage(newMessage, channel.channelId, createMessage)
    currentChat.push(newMessage)
    setChat && setChat(currentChat)
    setMessageToSend('')
    memoizeInput('')
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (!e.shiftKey && e.key === 'Enter' && messageToSend) {
      sendMessage()
    }
  }


  return (
    <TextBoxHolder>
      <Input
        onChange={e => {
          setMessageToSend(e.target.value)
          memoizeInput(e.target.value)
        }}
        onKeyDown={handleKeyDown}
        value={messageToSend}
      />
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
