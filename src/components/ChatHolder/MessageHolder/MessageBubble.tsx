import React, {FC} from 'react';
import styled from "styled-components";


const MessageBubbleHolder = styled.div<{ isCurrentUser: boolean }>`
  max-width: 70%;
  border-radius: 10px;
  background: #FFFFFF;
  padding: .5em 1em;
  font-size: 18px;
  position: relative;
  font-family: 'Open Sans', sans-serif;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  ${({isCurrentUser}) => isCurrentUser ? 'margin-left: ' : 'margin-right: '} 1em;

  &:before {
    content: "";
    position: absolute;
    border-left: 10px solid ${({isCurrentUser}) => isCurrentUser ? '#FFFFFF' : 'transparent'};
    border-right: 10px solid ${({isCurrentUser}) => isCurrentUser ? 'transparent' : '#FFFFFF'};
    border-top: 10px solid #FFFFFF;
    border-bottom: 10px solid transparent;
    ${({isCurrentUser}) => isCurrentUser ? 'right: ' : 'left: '} -11px;
    top: 0;
  }
`

interface MessageBubbleProps {
  text: string,
  isCurrentUser: boolean
}

const MessageBubble: FC<MessageBubbleProps> = ({text, isCurrentUser}) => {

  return (
    <MessageBubbleHolder
      isCurrentUser={isCurrentUser}
    >
      <p>{text}</p>
    </MessageBubbleHolder>

  );
};

export default MessageBubble;
