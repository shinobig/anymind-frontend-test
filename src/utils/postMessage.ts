import {ChannelId, Message} from "../interfaces/interfaces";

export const postMessage = async (newMessage: Message, channelId: ChannelId, createMessage: any) => {
  try {
    const {data} = await createMessage({
      variables: {
        userId: newMessage.userId,
        channelId: channelId,
        text: newMessage.text
      }
    })
    console.log('todo bien')
    newMessage.messageId = data.postMessage.messageId;
  } catch (e) {

    console.log('error')
    newMessage.error = true
  }
  return newMessage
}
