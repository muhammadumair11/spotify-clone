import "../assets/scss/components-scss/footer.scss";

import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import { PauseCircleOutline, PlaylistPlay, VolumeDown } from "@mui/icons-material";
import { Slider, Stack } from "@mui/material";
import { useDataLayerValue } from "../ContextAPI/DataLayer";
import { ACTIONS } from "../ContextAPI/reducer";


function Footer({spotify}) {
    const [{item, playing}, dispatch] = useDataLayerValue();

    
    function pauseTrack() {
        spotify.pause().then(response => {
            // dispatch({
            //     type: ACTIONS.SET_PLAYING,
            //     playing: false
            // })
    
            console.log(response);
        })
    }
    // function playTrack() {
    //     spotify.play().then(response => {
    //         dispatch({
    //             type: ACTIONS.SET_PLAYING,
    //             playing: true
    //         })
    
    //         console.log(response);
    //     })
    // }

    return (
        <div className='footer'>
            <div className="footer__left">
                <img className="footer__left--albumlogo" src={item?.item?.album?.images[0].url} alt="" />
                <div className="footer__left--songinfo">
                    <h4>
                        {item?.item?.name}
                    </h4>
                    <p>
                        {
                            item?.item?.artists.map((artist) => artist.name).join(", ")
                        }
                    </p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__center--green"/>
                <SkipPreviousIcon className="footer__center--icon" />
                {
                    playing ? (
                        <PauseCircleOutline  fontSize="large" className="footer__center--icon"/>
                    ) : (
                        <PlayCircleOutlineIcon onClick={() => pauseTrack} fontSize="large" className="footer__center--icon"/>
                    )
                }
                <SkipNextIcon className="footer__center--icon"/>
                <RepeatIcon className="footer__center--green"/>
            </div>
            <div className="footer__right">
                {/* <Grid container spacing={2}>
                    <Grid item>
                    </Grid>
                    <Grid item>
                    <VolumeDown/>
                    </Grid>
                    <Grid item lg>
                    <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>  */}

                <div className="empty-div"></div>
                <div className="volume-slider">
                    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <PlaylistPlay/>
                        <VolumeDown />
                        <Slider color="success" aria-label="Volume"/>
                    </Stack>
                </div>

            </div>
        </div>
    )
}

export default Footer