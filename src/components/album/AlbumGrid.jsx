import React from 'react';
import style from "../../styles/AlbumGrid.module.css";
import AlbumItem from "./AlbumItem";

const AlbumGrid = ({albums}) => {
    return (
        <div className={style.albumGrid}>
            {albums.map((a, i) => <AlbumItem key={i} album={a}/>)}
        </div>
    );
};

export default AlbumGrid;
