import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

Album.propTypes = {
  album: PropTypes.object.isRequired,
};

function Album({ album }) {
  return (
    <div className="album">
      <img className="album-img" src={album.photo}></img>
      <p className="album-title">{album.title}</p>
    </div>
  );
}

export default Album;
