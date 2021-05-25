import React, {useEffect, useState} from 'react';
import {NextSeo} from 'next-seo';
import ImageGrid from "../../components/album/ImageGrid";

const AlbumPage = (props) => {
    const albumTitle = "Album " + props.album.title;
    const [images, setImages] = useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos?albumId=" + props.album.id)
            .then(res=> res.json())
            .then(ims => {
                setImages(ims);
            })
    }, []);
    return (
        <>
            <NextSeo title={albumTitle}/>
            <div>
                <h1>{albumTitle}</h1>
                <ImageGrid images={images}/>
            </div>
        </>
    );
};

export default AlbumPage;

export const getStaticProps = async ({params}) => {
    const urlPath = "https://jsonplaceholder.typicode.com/albums/" + params.id;
    const resp = await fetch(urlPath);
    const album = await resp.json();
    album.thumbnail = "https://picsum.photos/seed/" + params.id + "/300/200";
    return {
        props: {album, images: []},
    }
}

export const getStaticPaths = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/albums");
    const albums = await resp.json();
    const paths = albums.map(a => {
        return {params: {id: a.id.toString()}}
    })
    return {
        paths,
        fallback: true
    }
}
