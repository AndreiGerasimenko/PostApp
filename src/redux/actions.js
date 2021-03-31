import { 
    SET_LOADING, 
    SET_POSTS,
    SET_CHOSEN_POST,
    ADD_COMMENT,
    DELETE_POST
} from './action.types'
import { showNotification } from '../showNotification'

export const setLoading = (bool) => {
    return {
        type: SET_LOADING,
        payload: bool
    }
}

export const setPosts = (posts) => {
    return {
        type: SET_POSTS,
        payload: posts
    }
}

export const setChosenPost = (post) => {
    return {
        type: SET_CHOSEN_POST,
        payload: post
    }
}

export const pushComment = (comment) => {
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}

export const fetchPosts = () => {
    return async dispatch => {
        dispatch(setLoading(true))
        try {
            const response = await fetch(
                'https://bloggy-api.herokuapp.com/posts',
                { 
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json'
                    } 
                }
            )

            const data = await response.json()
    
            if (!response.ok) {
              throw new Error('Something went wrong')
            }
    
            dispatch(setLoading(false))
    
            dispatch(setPosts(data))
          } catch (e) {
            dispatch(setLoading(false))

            showNotification({
                type: 'error',
                message: 'An error has occured',
                description: e.message
            })

          }
    }
}

export const fetchPostById = (id) => {
    return async dispatch => {
        dispatch(setLoading(true));
        try {
            const response = await fetch(
                `https://bloggy-api.herokuapp.com/posts/${id}?_embed=comments`,
                { 
                    method: 'GET', 
                    headers: {
                        'Content-Type': 'application/json'
                    } 
                }
            )

            const data = await response.json();
    
            if (!response.ok) {
              throw new Error('Something went wrong')
            }
    
            dispatch(setLoading(false))
    
            dispatch(setChosenPost(data))
          } catch (e) {
            dispatch(setLoading(false))

            showNotification({
                type: 'error',
                message: 'An error has occured',
                description: e.message
            })
          }

    }
}

export const addComment = (postId, comment) => {
    return async dispatch => {
        try {
            const response = await fetch(
                `https://bloggy-api.herokuapp.com/comments`,
                { 
                    method: 'POST',
                    body: JSON.stringify({ postId, body: comment }),
                    headers: {
                        'Content-Type': 'application/json'
                    } 
                }
            )

            const data = await response.json();
    
            if (!response.ok) {
              throw new Error('Something went wrong')
            }
    
            dispatch(pushComment(data))

          } catch (e) {
              console.log('Error', e)

            showNotification({
                type: 'error',
                message: 'An error has occured',
                description: e.message
            })
          }

    }
}

export const deletePost = (id) => {
    return async dispatch => {
        try {
            const response = await fetch(
                `https://bloggy-api.herokuapp.com/posts/${id}`,
                { 
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    } 
                }
            )

            await response.json()
    
            if (!response.ok) {
              throw new Error('Something went wrong')
            }
    
            dispatch({
                type: DELETE_POST,
                payload: id
            })

          } catch (e) {
              console.log('Error', e)

            showNotification({
                type: 'error',
                message: 'The Post hasn`t been deleted',
                description: 'Try again later'
            })
          }

    }
}