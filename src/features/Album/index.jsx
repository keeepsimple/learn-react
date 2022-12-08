import React from "react";
import PropTypes from "prop-types";
import AlbumList from "./components/AlbumList";

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      title: "Today's V-Pop Hits",
      photo:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/d/e/a/6dea5b235071475eebd37456901338ac.jpg",
    },
    {
      id: 2,
      title: "Christmas Hits",
      photo:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/4/f/2/74f2f999c840e818ca7041558addf6b3.jpg",
    },
    {
      id: 3,
      title: "V-Pop Rising",
      photo:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/d/f/c/8/dfc8e48606edc3378bb55ee439f77614.jpg",
    },
  ];
  return (
    <div>
      <h1>You may like...</h1>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;
