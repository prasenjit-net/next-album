import React from 'react';
import {NextSeo} from "next-seo";
import AlbumGrid from "../components/album/AlbumGrid";

const Index = ({albums}) => {
    return (
        <>
            <NextSeo title="Home"/>
            <div>
                <h1 className="title main-title">My Next Album</h1>
                <AlbumGrid albums={albums}/>
            </div>
        </>
    );
};

export default Index;

export const getStaticProps = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/albums");
    const js = await resp.json();
    const albums = js.map((a, i) => {
        return {...a, thumbnail: "https://picsum.photos/seed/" + i + "/300/200"}
    })
    return {
        props: {
            albums
        }
    }
}
