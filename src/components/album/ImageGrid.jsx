import React from 'react';
import style from "../../styles/AlbumGrid.module.css";
import ImageItem from "./ImageItem";

const ImageGrid = ({images, albumId}) => {
    return (
        <div className={style.albumGrid}>
            {images.map((a, i) => <ImageItem key={i} image={a} albumId={albumId}/>)}
        </div>
    );
};

export default ImageGrid;
