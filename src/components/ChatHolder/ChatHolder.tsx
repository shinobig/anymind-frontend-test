import React from 'react';
import styled from "styled-components";
import ChatWindow from "./ChatWindow/ChatWindow";
import ChatHeader from "./ChatHeader/ChatHeader";
import TextBox from "./TextBox/Textbox";

const ChatHolderContainer = styled.section`
  grid-column: 4/-1;
  grid-row: 2/-1;
  row-gap: 10px;
  display: grid;
  grid-template-rows: 70px 1fr 100px;
  height: 80vh;
  background-color: #e3f2fd;
`

const ChatHolder = () => (
  <ChatHolderContainer>
    <ChatHeader/>
    <ChatWindow/>
    <TextBox/>
  </ChatHolderContainer>
);

export default ChatHolder;
