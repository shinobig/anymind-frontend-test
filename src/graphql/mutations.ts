import {gql} from "@apollo/client";

export const POST_MESSAGE = gql`
  mutation MessagePost($channelId: String!, $text: String!, $userId: String!){
    postMessage(channelId: $channelId, text: $text, userId: $userId){
      userId,
      text,
      messageId
    }
  }
`
