import PropTypes from 'prop-types'
import { User } from './User.jsx'
import { useAuth } from '../contexts/AuthContext.jsx'
import { likePost } from '../../backend/src/services/posts.js'

export function Post({ title, contents, imageURL, author: userId, likes }) {
  const [token] = useAuth()
  return (
    <article>
      <h3>{title}</h3>
      <div>{likes} likes</div>
      <button
        onClick={function handleClick() {
          if (!token) alert('Please log in to like recipes.')
          else {
            likePost(userId)
            alert('Liked!')
          }
        }}
      >
        Like this recipe
      </button>
      <div>{contents}</div>
      <img src={imageURL} alt='Click here' width='300' height='300' />
      {userId && (
        <em>
          <br />
          Posted by <User id={userId} />
        </em>
      )}
    </article>
  )
}
Post.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string,
  imageURL: PropTypes.string,
  author: PropTypes.string,
  likes: PropTypes.number,
}
