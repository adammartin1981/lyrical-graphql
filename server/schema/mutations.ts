import { SongModel } from '../models/song'
import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql'
import { SongType } from './song_type'
import { LyricType } from './lyric_type'
import { LyricModel } from '../models/lyric'

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addSong: {
      type: SongType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return (new SongModel({ title })).save()
      }
    },
    addLyricToSong: {
      type: SongType,
      args: {
        content: { type: GraphQLString },
        songId: { type: GraphQLID }
      },
      resolve(parentValue, { content, songId }) {
        // @ts-ignore
        return SongModel.addLyric(songId, content);
      }
    },
    likeLyric: {
      type: LyricType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return LyricModel.like(id);
      }
    },
    deleteSong: {
      type: SongType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return SongModel.remove({ _id: id });
      }
    }
  }
});

