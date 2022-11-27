import { GraphQLClient, gql } from 'graphql-request'
import { dev as isDev } from '$app/environment'

let gqlEndpoint: string | boolean = ''
if (isDev) gqlEndpoint = import.meta.env.VITE_GQL_ENDPOINT_DEV
else gqlEndpoint = import.meta.env.VITE_GQL_ENDPOINT_PROD

type GqlRequest = {
  gqlStr: string
  config: {
    variables?: { [key: string]: string | number }
    type?: 'main' | 'blog'
  }
}

export default function gqlr(gqlStr: GqlRequest['gqlStr'], config?: GqlRequest['config']) {
  let authToken: string = import.meta.env.VITE_GQL_AUTH_MAIN

  switch (config.type) {
    case 'blog':
      authToken = import.meta.env.VITE_GQL_AUTH_BLOG
    default:
      break
  }

  const client = new GraphQLClient(String(gqlEndpoint), {
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })

  const query = gql`
    ${gqlStr}
  `
  return client.request(query, config.variables || null)
}
