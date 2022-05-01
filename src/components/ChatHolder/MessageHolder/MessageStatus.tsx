import React, {FC} from 'react';
import {AiFillCheckCircle} from 'react-icons/ai'



interface MessageStatusProps {
  dateTime: Date
  isCurrentUser: boolean
}

const MessageStatus: FC<MessageStatusProps> = ({dateTime, isCurrentUser}) => {
  return (
    <div>
      8:55

      {
        isCurrentUser &&
        <AiFillCheckCircle/>
      }
    </div>
  );
};

export default MessageStatus;
