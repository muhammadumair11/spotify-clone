import "../assets/scss/components-scss/player.scss";
import Body from "./Body";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar spotify={spotify}/>
                <Body spotify={spotify}/>
            </div>
            <div className="player__footer">
                <Footer spotify={spotify}/>
            </div>

        </div>
    )
}

export default Player