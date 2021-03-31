import { 
    SET_LOADING, 
    SET_POSTS,
    SET_CHOSEN_POST,
    ADD_COMMENT,
    DELETE_POST
} from './action.types'

const initialState = {
    posts: [],
    loading: false,
    chosenPost: null
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOADING: 
            return { ...state, loading: action.payload }
        case SET_POSTS: 
            const copyPosts = JSON.parse(JSON.stringify(action.payload))
            return { ...state, posts: copyPosts }
        case SET_CHOSEN_POST:
            return { ...state, chosenPost: action.payload }
        case ADD_COMMENT: 
            const { postId } = action.payload
            const copyChosenPost = JSON.parse(JSON.stringify(state.chosenPost))
            if(copyChosenPost.id !== postId) return state
            copyChosenPost.comments.push(action.payload)
            return { ...state, chosenPost: copyChosenPost }
        case DELETE_POST:
            const id = action.payload
            const filteredPosts = state.posts.filter(item => item.id !== id)
            return {...state, posts: filteredPosts }
        default: return state
    }
}