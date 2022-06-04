import { Favorite, MoreHoriz, PlayCircleFilled } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import "../assets/scss/components-scss/body.scss"
import { useDataLayerValue } from "../ContextAPI/DataLayer"
import Header from "./Header"
import SongRow from "./SongRow";
function Body({ spotify }) {
    const [{ user, playlistData }, dispatch] = useDataLayerValue(); 


    return (
        <div className="body">
            <Header spotify={ spotify } />

            <div className="body__info">
                <img src={playlistData?.images[0]?.url} alt="" />
                <div className="body__info--text">
                    <strong>
                        PLAYLIST
                    </strong>
                    <h2>{ playlistData?.name }</h2>
                    <p>{playlistData?.description}</p>
                    <div className="avatar-tracks">
                        <Avatar src={user?.images[0]?.url} />
                        <h4>{user?.display_name}</h4>
                        <span>
                        {`${playlistData?.tracks.total} Songs`}
                        </span>
                    </div>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__songs--icons">
                    <PlayCircleFilled className="body__shuffle"/>
                    <Favorite fontSize="large"/>
                    <MoreHoriz/>
                </div>
                <div className="body__songs--list">
                    {
                    playlistData?.tracks.items?.map(item => (
                        <SongRow key={item.track.id} track={item.track}/>
                    ))
                }
                </div>

                <footer>
                
            </footer>

            </div>
        </div>
    )
}

export default Body