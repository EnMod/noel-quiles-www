import { GraphQLClient, gql } from "graphql-request"
import {dev} from '$app/env'
const gqlEndpoint = dev ? import.meta.env.VITE_GQL_ENDPOINT_DEV : import.meta.env.VITE_GQL_ENDPOINT_PROD

let client = new GraphQLClient(gqlEndpoint, {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GQL_AUTH}`
  }
})

export default function gqlr(gqlStr, variables) {
  const query = gql`${gqlStr}`
  return client.request(query, variables)
}

