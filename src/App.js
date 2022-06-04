import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./Authentication/spotify";
import Login from "./Components/Login";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player";
import { useDataLayerValue } from "./ContextAPI/DataLayer";
import { ACTIONS } from "./ContextAPI/reducer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ item, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      dispatch({type: ACTIONS.SET_TOKEN, token: _token})
      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {
        dispatch({
          type: ACTIONS.SET_USER,
          user: user
        })
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: ACTIONS.SET_PLAYLIST,
          playlist: playlists
        })
      })

      spotify.getPlaylist("6d3wWAziywGOI0gAkd5CRG").then(response => {
        dispatch({
          type: ACTIONS.SET_PLAYLIST_ITEM,
          playlistData: response
        })
      })

      spotify.getMyCurrentPlaybackState().then((response) => {
          dispatch({
            type: ACTIONS.SET_CURRENTLY_PLAYING,
            playedItem: response
          })

          if(response.is_playing) {
            dispatch({
              type: ACTIONS.SET_PLAYING,
              playing: true
            })
          }
      });
    }

  }, [item])
  
  return (
    <div className="App">
      {
        token ? (
          <Player spotify={ spotify }/>
        ) : (
          <Login/>
        )
      }
    </div>
  );
}

export default App;
