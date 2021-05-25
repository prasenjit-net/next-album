import React from 'react';
import Link from "next/link";
import {Card} from "react-bootstrap";
import style from "../../styles/AlbumGrid.module.css";

const AlbumItem = ({album}) => {
    return (
        <Card className={style.albumCard}>
            <Card.Body>
                <Card.Img variant="top" src={album.thumbnail}/>
                <Card.Body>
                    <Card.Title>{album.title}</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, numquam!
                    </Card.Text>
                    <Link href={"/album/" + album.id} passHref>
                        <Card.Link href="#">Open</Card.Link>
                    </Link>
                </Card.Body>
            </Card.Body>
        </Card>
    );
};

export default AlbumItem;
