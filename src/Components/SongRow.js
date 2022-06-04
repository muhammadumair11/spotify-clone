import "../assets/scss/components-scss/songrow.scss";

function SongRow({ track , playSong }) {
  return (
    <div onClick={playSong} className="songrow">
      <img className="songrow__album" src={track.album.images[0]?.url} alt="" />
      <div className="songrow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow