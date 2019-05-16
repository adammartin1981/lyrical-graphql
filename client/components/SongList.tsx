import * as React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { GET_TITLE_AND_ID, GET_TITLE_AND_ID_songs } from './output/GET_TITLE_AND_ID'

const query = gql`
  query GET_TITLE_AND_ID { 
    songs {
      title
      id
    }
  }
`

type BaseGraphQLQueryResponse = {
  loading: boolean
}

type GraphQLQueryResponse<T> = {
  data: T & BaseGraphQLQueryResponse
}

const SongListRaw = (props: GraphQLQueryResponse<GET_TITLE_AND_ID>) => {
  if ( props.data.loading ) return <div>Loading... </div>

  return (
    <ul className='collection'>

      {RenderSongs(props.data.songs)}
    </ul>
  )
}

const RenderSongs = (songs: GET_TITLE_AND_ID_songs[]) => {
  return songs.map(song => {
    return <li className='collection-item' key={song.id}>Song: { song.title }</li>
  })
}

export const SongList = graphql(query)(SongListRaw)