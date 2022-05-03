import React, {FC, MouseEventHandler} from 'react';
import {AiFillCheckCircle} from 'react-icons/ai'
import {MdError} from "react-icons/md";
import {getHourAndMinutes} from "../../../utils/timeUtils";
import styled from "styled-components";


interface MessageStatusProps {
  dateTime: Date
  isCurrentUser: boolean
  error?: boolean
  resendMessage?: Function
}

const MessageStatusHolder = styled.div`
  text-align: right;
  color: #2196f3;
`

const ResendButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #2196f3;
`


const MessageStatus: FC<MessageStatusProps> = ({
                                                 dateTime,
                                                 isCurrentUser,
                                                 error,
                                                 resendMessage
                                               }) => {
  const hour = getHourAndMinutes(dateTime)


  return (
    <MessageStatusHolder>
      {hour}
      <br/>
      {
        isCurrentUser &&
        <>
          {
            error ?
              <>Error&nbsp;<MdError color='#e53935'/></> :
              <>Sent&nbsp;<AiFillCheckCircle color='#43a047'/></>
          }
        </>
      }
      <br/>
      {
        error && resendMessage &&
        <ResendButton
          id='resend-button'
          onClick={resendMessage as MouseEventHandler}
        >
          Resend
        </ResendButton>
      }

    </MessageStatusHolder>
  );
};

export default MessageStatus;
