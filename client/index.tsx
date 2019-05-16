import * as React from 'react'
import ReactDOM from 'react-dom'

import { ApolloClient } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { SongList } from './components/SongList'

const cache = new InMemoryCache()

const link = new HttpLink({
  uri: 'http://localhost:4000/graphql'
})

const client = new ApolloClient({
  cache,
  link
})

const Root = (
  <div>
    <SongList />
  </div>
)

ReactDOM.render(
  <ApolloProvider client={client} children={Root} />,
  document.querySelector('#root')
)
