import { GraphQLClient, gql } from 'graphql-request'
import { dev as isDev } from '$app/environment'

let gqlEndpoint: string | boolean = ''
if (isDev) gqlEndpoint = import.meta.env.VITE_GQL_ENDPOINT_DEV
else gqlEndpoint = import.meta.env.VITE_GQL_ENDPOINT_PROD

type GqlRequest = {
  gqlStr: string
  variables?: { [key: string]: string | number }
}

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

export function mainGqlr(gqlStr: GqlRequest['gqlStr'], variables?: GqlRequest['variables']) {
  const query = gql`
    ${gqlStr}
  `
  return mainClient.request(query, variables)
}

export function blogGqlr(gqlStr: GqlRequest['gqlStr'], variables?: GqlRequest['variables']) {
  const query = gql`
    ${gqlStr}
  `
  return blogClient.request(query, variables)
}
