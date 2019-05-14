import {LyricModel} from '../models/lyric'
import { SongType } from './song_type'
import {GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} from 'graphql'

export const LyricType = new GraphQLObjectType({
  name:  'LyricType',
  fields: () => ({
    id: { type: GraphQLID },
    likes: { type: GraphQLInt },
    content: { type: GraphQLString },
    song: {
      type: SongType,
      resolve(parentValue) {
        return LyricModel.findById(parentValue).populate('song')
          .then(lyric => {
            console.log(lyric)
            return lyric.song
          });
      }
    }
  })
});

