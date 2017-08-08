import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from '../actions'

let LoadSubreddit = ({dispatch}) => (
  <div>
    <input id="subredditInput" type="text" name="subreddit" />
    <button
      onClick={() => dispatch(fetchPosts(document.getElementById('subredditInput').value))}
      >Fetch Posts</button>
  </div>

)

export default connect()(LoadSubreddit)
