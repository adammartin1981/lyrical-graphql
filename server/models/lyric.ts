import { Schema, model } from 'mongoose'

type Lyric = Document & {
  likes: number
}

const LyricSchema = new Schema({
  song: {
    type: Schema.Types.ObjectId,
    ref: 'song'
  },
  likes: { type: Number, default: 0 },
  content: { type: String }
});

// @ts-ignore
export const LyricModel = model<Lyric>('lyric', LyricSchema);

LyricSchema.statics.like = function(id) {
  return LyricModel.findById(id)
    .then(lyric => {
      ++lyric.likes;
      return lyric.save();
    })
}


