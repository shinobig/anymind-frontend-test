import React, {FC, useContext} from 'react';
import {ChannelId, ChannelNames, ChannelProperties} from "../../interfaces/interfaces";
import {ChatContextManager} from "../../context/chatContext";
import GeneralButton from "../SharedStyles/GeneralButton";

const ChannelButton: FC<ChannelProperties> = ({channelName, channelId}) => {
  const {channel, setChannel} = useContext(ChatContextManager);

  const changeChannelId = () => {
    if (setChannel && channel.channelId !== channelId) {
      setChannel({channelId: channelId, channelName: channelName})
    }
  }

  return (
    <GeneralButton
      selected={channel.channelId === channelId}
      onClick={changeChannelId}
    >
      {channelName}
    </GeneralButton>
  );
};

export default ChannelButton;
