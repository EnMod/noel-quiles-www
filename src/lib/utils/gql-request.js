import { GraphQLClient } from "graphql-request"

let client = new GraphQLClient(process.env.GQL_ENDPOINT, {
  headers: {
    Authorization: `Bearer ${process.env.DATO_RO}`
  }
})

export default function gqlr(query, variables) {
  return client.request(query, variables)
}

