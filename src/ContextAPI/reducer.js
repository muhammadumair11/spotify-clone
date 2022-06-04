export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    playlistData:null,
    // token: "BQDkqa0nuDTkU77jLQAyJ9L-FyHb--L6pLb4AjRv0iIbauaOSdkv6nrqbe33xNkAp-G7-L6qEuM7Kjq6xqUaG5SRaSCn84c3skgsR-BrvQKUg7Q76EmiuPtIwHRW4DEhuT1mKbupoAi7nruJsuNC1c8SQT6IOye5RpAN_mquuQUOPFgh"
}

export const ACTIONS = {
    SET_USER: "SET_USER",
    SET_TOKEN: "SET_TOKEN",
    SET_PLAYLIST: "SET_PLAYLIST",
    SET_PLAYLIST_ITEM: "SET_PLAYLIST_ITEM",
    SET_CURRENTLY_PLAYING: "SET_CURRENTLY_PLAYING",
    SET_PLAYING: "SET_PLAYING"

}

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_USER:
            return {
                ...state,
                user: action.user
            } 
        case ACTIONS.SET_TOKEN: 
            return {
                ...state,
                token: action.token
            }
        case ACTIONS.SET_PLAYLIST:
            return {
                ...state,
                playlist: action.playlist
            }
        case ACTIONS.SET_PLAYLIST_ITEM: 
            return {
                ...state,
                playlistData: action.playlistData
            }
        case ACTIONS.SET_CURRENTLY_PLAYING: 
            return {
                ...state,
                item: action.playedItem
            }
        case ACTIONS.SET_PLAYING: 
            return {
                ...state,
                playing: action.playing
            }
    
        default:
            return state;
    }
}

export default reducer;