import { Schema, model } from 'mongoose'
import { LyricModel } from './lyric'

const SongSchema = new Schema({
  title: { type: String },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  lyrics: [{
    type: Schema.Types.ObjectId,
    ref: 'lyric'
  }]
}, {
  usePushEach: true
});

SongSchema.statics.addLyric = function(id, content) {
  return this.findById(id)
    .then(song => {
      const lyric = new LyricModel({ content, song })
      song.lyrics.push(lyric.id)
      return Promise.all([lyric.save(), song.save()])
        .then(([lyric, song]) => song);
    });
}

SongSchema.statics.findLyrics = function(id) {
  return this.findById(id)
    .populate('lyrics')
    .then(song => song.lyrics);
}

export const SongModel = model('song', SongSchema);
