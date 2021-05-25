import React from 'react';
import {Card} from "react-bootstrap";
import style from "../../styles/AlbumGrid.module.css";
import Link from "next/link";

const ImageItem = ({image, albumId}) => {
    const imageUrl = "https://picsum.photos/seed/" + albumId + "-" + image.id + "/600/400";
    return (
        <Card className={style.albumCard}>
            <Card.Body>
                <Card.Img variant="top" src={imageUrl}/>
                <Card.Body>
                    <Card.Title className="title">{image.title}</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fugit labore minima non
                        possimus similique.
                    </Card.Text>
                    <Link href={"/image/" + albumId + "-" + image.id} passHref>
                        <Card.Link href="#">Open</Card.Link>
                    </Link>
                </Card.Body>
            </Card.Body>
        </Card>
    );
};

export default ImageItem;
