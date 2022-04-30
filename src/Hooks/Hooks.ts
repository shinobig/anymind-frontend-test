import {useMutation, useQuery} from "@apollo/client";
import {FETCH_LATEST_MESSAGES} from "../graphql/queries";

const useLatestMessage = () => {
  const response = useQuery(FETCH_LATEST_MESSAGES);
  return response
}
