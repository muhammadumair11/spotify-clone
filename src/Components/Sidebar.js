import "../assets/scss/components-scss/sidebar.scss"
import SidebarOptions from "./SidebarOptions"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from "../ContextAPI/DataLayer";
import { ACTIONS } from "../ContextAPI/reducer";

function Sidebar({spotify}) {
    const [{ playlist }, dispatch] = useDataLayerValue();

    

    function changePlaylist(params) {
        spotify.getPlaylist(params).then(response => {
            dispatch({
                type:ACTIONS.SET_PLAYLIST_ITEM,
                playlistData: response
            })

            console.log(response);
        })
    }

    return (
        <div className="sidebar">
            <img  className="sidebar__logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="" />
            <SidebarOptions Icon={HomeIcon} title={"Home"}/>
            <SidebarOptions Icon={SearchIcon} title={"Search"}/>
            <SidebarOptions Icon={LibraryMusicIcon} title={"Your Library"}/>

            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            
            {
                playlist?.items?.map(playlist => (
                    <SidebarOptions onClickPlaylist={() => changePlaylist(playlist.id)} key={playlist.id} title={playlist.name}/>
                ))
            }

            <footer>
                
            </footer>

        </div>
    )
}

export default Sidebar