import {gql} from "@apollo/client";

export const FETCH_LATEST_MESSAGES = gql`
query MessagesFetchLatest($channelIdSearch: String!){
    fetchLatestMessages(channelId: $channelIdSearch){
      text
      userId
      messageId
      datetime
    }
  }
`

export const FETCH_MORE_MESSAGES = gql`
query MessagesFetchMore($channelIdSearch: String!, $oldestAvailableMessage: String!){
  fetchMoreMessages(channelId: $channelIdSearch, messageId: $oldestAvailableMessage, old: true){
    text,
    userId,
    messageId,
    datetime
  }
}
`
