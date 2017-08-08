import {RECEIVE_POSTS} from '../actions'

function subreddits (state = [], action) {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts

    default:
      return state
      console.log("error");
  }
}

export default subreddits
