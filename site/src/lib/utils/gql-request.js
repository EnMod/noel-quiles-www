import { GraphQLClient, gql } from "graphql-request"

let client = new GraphQLClient(import.meta.env.VITE_GQL_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GQL_AUTH}`
  }
})


export default function gqlr(gqlStr, variables) {
  const query = gql`${gqlStr}`
  return client.request(query, variables)
}

