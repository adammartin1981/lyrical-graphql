declare var global: any

import * as express from 'express'
import * as expressGraphQL from 'express-graphql'
import * as mongoose from 'mongoose'
import * as bodyParser from 'body-parser'
import * as schema from './schema/schema'

import * as webpackMiddleware from 'webpack-dev-middleware'
import * as webpack from 'webpack'
import * as webpackConfig from '../webpack.config'

export const app = express();

const MONGO_URI = ''
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

// @ts-ignore
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, { useMongoClient: true })
mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.use(webpackMiddleware(webpack(webpackConfig)));

