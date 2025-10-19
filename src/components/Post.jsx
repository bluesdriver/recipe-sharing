import PropTypes from 'prop-types'
import { User } from './User.jsx'

export function Post({ title, contents, imageURL, author: userId }) {
  return (
    <article>
      <h3>{title}</h3>
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
}
