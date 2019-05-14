import { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql'
import { SongType } from './song_type'
import { LyricType } from './lyric_type'
import { SongModel } from '../models/song'
import { LyricModel } from '../models/lyric'

export const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    songs: {
      type: new GraphQLList(SongType),
      resolve() {
        return SongModel.find({});
      }
    },
    song: {
      type: SongType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return SongModel.findById(id);
      }
    },
    lyric: {
      type: LyricType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return LyricModel.findById(id);
      }
    }
  })
})
