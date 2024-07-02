import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import "./listitem.css";

function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const trailer = "https://www.youtube.com/watch?v=g8zxiB5Qhsc=";

  return (
    <div 
      className="listItem"
      style={{ left: isHovered ? index * 225 - 50 + index * 2.5 : 'initial' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src="https://miro.medium.com/v2/resize:fit:1200/1*R-4laTXe2wtJC_cBGUeBSw.jpeg" 
        alt="Movie Thumbnail" 
      />
      {isHovered && (
        <>
          <video src={trailer} autoPlay loop></video>
          <div className="itemInfo">
            <div className="icons">
              <FontAwesomeIcon icon={faPlay} className="icon" />
              <FontAwesomeIcon icon={faPlus} className="icon" />
              <FontAwesomeIcon icon={faThumbsUp} className="icon" />
              <FontAwesomeIcon icon={faThumbsDown} className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 30 mins</span>
              <span className="limit">+16</span>
              <span>1999</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}

export default ListItem;
