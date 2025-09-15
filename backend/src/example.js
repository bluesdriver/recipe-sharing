import { initDatabase } from './db/init.js'

import { Post } from './db/models/post.js'

import dotenv from 'dotenv'
dotenv.config()

await initDatabase()

const post = new Post({
  title: 'Hello second post!',
  author: 'John Doe',
  contents: 'New content!!!!',
  tags: ['mongoose', 'frontend'],
})

await post.save()

const posts = await Post.find()
console.log(posts)
