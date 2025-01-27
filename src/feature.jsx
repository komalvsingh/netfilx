import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faBars } from '@fortawesome/free-solid-svg-icons';
import "./feature.css";

function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src="https://images.hdqwalls.com/wallpapers/damsel-2024-movie-c4.jpg" alt="" />
      <div className="info">
        <h1 style={{fontSize:'80px',marginTop:'30px'}}>DAMSEL</h1>
        <span className="desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium hic rem eveniet error possimus, neque ex doloribus.
        </span>
        <div className="buttons">
          <button className="play">
            <FontAwesomeIcon icon={faPlay} />
            <span>Play</span>
          </button>
          <button className="more">
            <FontAwesomeIcon icon={faBars} />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
