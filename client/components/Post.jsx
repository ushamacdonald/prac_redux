import React from 'react'
import PropTypes from 'prop-types'

const Post = ({title, created }) => (

  <div>{title} {created}}</div>
)
Post.propTypes = {
  title: PropTypes.string.isRequired
}

export default Post
