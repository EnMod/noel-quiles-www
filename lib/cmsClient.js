import { GraphQLClient } from "graphql-request"
import { print } from "graphql/language/printer"

let client = new GraphQLClient("https://graphql.datocms.com", {
  headers: {
    Authorization: `Bearer ${process.env.DATO_TOKEN}`
  }
})

const fetchFromCms = (query, variables) => {
  return client.request(print(query), variables)
}

export default fetchFromCms
