import { GraphQLClient, gql } from 'graphql-request'
import { dev as isDev } from '$app/env'

let gqlEndpoint: string | boolean = ''
if (isDev) gqlEndpoint = import.meta.env.VITE_GQL_ENDPOINT_DEV
else gqlEndpoint = import.meta.env.VITE_GQL_ENDPOINT_PROD

const mainClient = new GraphQLClient(String(gqlEndpoint), {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GQL_AUTH_MAIN}`
  }
})

const blogClient = new GraphQLClient(String(gqlEndpoint), {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_GQL_AUTH_BLOG}`
  }
})

export function mainGqlr(gqlStr: string, variables?: string[]) {
  const query = gql`
    ${gqlStr}
  `
  return mainClient.request(query, variables)
}

export function blogGqlr(gqlStr: string, variables?: string[]) {
  const query = gql`
    ${gqlStr}
  `
  return blogClient.request(query, variables)
}
