import React, {useContext} from 'react';
import styled from "styled-components";
import {ChatContextManager} from "../../../context/chatContext";
import GeneralButton from "../../SharedStyles/GeneralButton";
import {AiOutlineArrowUp} from "react-icons/ai";


const ChatHeaderHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #90caf9;
  padding: 1em;
  font-family: 'Montserrat', sans-serif;
`

const ChatHeader = () => {

  const {channel} = useContext(ChatContextManager);
  return (
    <ChatHeaderHolder>
      <h2>
        {channel.channelName}
      </h2>
      <GeneralButton
        width={25}
      >
        Read More&nbsp;<AiOutlineArrowUp/>
      </GeneralButton>
    </ChatHeaderHolder>
  );
};

export default ChatHeader;
