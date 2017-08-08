import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Post from './Post'
import moment from 'moment'


const Subreddit = ({subreddits}) => (
  <div>
    {subreddits.map((post, i) =>
      <Post
        key={i}
        title={post.title}
        created={moment.unix(post.created_utc).format("dddd, MMMM Do YYYY, hA")}
        />
    )}
  </div>
)

Subreddit.propTypes = {
  subreddits: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
