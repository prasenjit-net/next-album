import React from 'react';
import style from "../../styles/AlbumGrid.module.css";
import ImageItem from "./ImageItem";

const ImageGrid = ({images}) => {
    return (
        <div className={style.albumGrid}>
            {images.map((a, i) => <ImageItem key={i} image={a}/>)}
        </div>
    );
};

export default ImageGrid;
