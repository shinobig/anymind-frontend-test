import React, {useContext, useState} from 'react';
import styled from "styled-components";
import GeneralButton from "../../SharedStyles/GeneralButton";
import {IoIosSend} from 'react-icons/io'
import {ChatContextManager} from "../../../context/chatContext";
import {Message} from "../../../interfaces/interfaces";
import {useMutation} from "@apollo/client";
import {POST_MESSAGE} from "../../../graphql/mutations";
import {postMessage} from "../../../utils/postMessage";

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

  const sendMessage = async () => {

    let currentChat = [...chat]

    let newMessage: Message = {
      text: messageToSend,
      userId: selectedUserId,
      datetime: new Date()
    }

    newMessage = await postMessage(newMessage, channel.channelId, createMessage)

    console.log('new message', newMessage)

    currentChat.push(newMessage)
    setChat && setChat(currentChat)
    setMessageToSend('')
  }


  return (
    <TextBoxHolder>
      <Input
        onChange={e => {
          setMessageToSend(e.target.value)
        }}
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
