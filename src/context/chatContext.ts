import {createContext} from "react";
import {ChannelNames, ChatContext, UserId} from "../interfaces/interfaces";

const initialState: ChatContext = {
  selectedUserId: UserId.SAM,
  channel: {
    channelId: '1',
    channelName: ChannelNames.GENERAL
  },
  chat: []
}

export const ChatContextManager = createContext<ChatContext>(initialState)
