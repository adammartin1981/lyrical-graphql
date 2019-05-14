import { SongModel } from '../models/song'
import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from 'graphql'
import { LyricType } from './lyric_type'

export const SongType = new GraphQLObjectType({
  name:  'SongType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    lyrics: {
      type: new GraphQLList(LyricType),
      resolve(parentValue) {
        // @ts-ignore
        return SongModel.findLyrics(parentValue.id);
      }
    }
  })
});
