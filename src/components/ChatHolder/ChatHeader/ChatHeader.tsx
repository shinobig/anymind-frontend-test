import React, {useContext} from 'react';
import styled from "styled-components";
import {ChatContextManager} from "../../../context/chatContext";
import GeneralButton from "../../SharedStyles/GeneralButton";
import {AiOutlineArrowUp} from "react-icons/ai";
//import {fetchMore, useFetchMore} from "../../../Hooks/Hooks";
import {useLazyQuery} from "@apollo/client";
import {FETCH_MORE_MESSAGES} from "../../../graphql/queries";
import {useFetchMore} from "../../../Hooks/Hooks";


const ChatHeaderHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #90caf9;
  padding: 1em;
  font-family: 'Montserrat', sans-serif;
`

const ChatHeader = () => {

  const {channel, chat} = useContext(ChatContextManager);

  const [fetchMore, response] = useFetchMore()

  const readMoreMessages = () => {
    console.log(chat[0].messageId)
    if (chat.length === 10 && chat[0].messageId) {

      fetchMore({
        variables: {
          channelIdSearch: channel.channelId,
          oldestAvailableMessage: chat[0].messageId
        }
      }).then(
        data =>
          console.log(data)
      )
      console.log(response)
    }

  }


  return (
    <ChatHeaderHolder>
      <h2>
        {channel.channelName}
      </h2>
      <GeneralButton
        onClick={readMoreMessages}
        width={25}
      >
        Read More&nbsp;<AiOutlineArrowUp/>
      </GeneralButton>
    </ChatHeaderHolder>
  );
};

export default ChatHeader;
