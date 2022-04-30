import {createContext} from "react";
import {ChatContext, UserId} from "../interfaces/interfaces";

const initialState: ChatContext = {
  userId: UserId.SAM,
  channelId: "1"
}

export const ChatContextManager = createContext<ChatContext>(initialState)
