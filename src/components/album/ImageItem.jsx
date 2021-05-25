import React from 'react';
import {Card} from "react-bootstrap";
import style from "../../styles/AlbumGrid.module.css";

const ImageItem = ({image}) => {
    const imageUrl = "https://picsum.photos/seed/" + image.id + "/600/400"
    return (
        <Card className={style.albumCard}>
            <Card.Body>
                <Card.Img variant="top" src={imageUrl}/>
                <Card.Body>
                    <Card.Title>{image.title}</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fugit labore minima non
                        possimus similique.
                    </Card.Text>
                </Card.Body>
            </Card.Body>
        </Card>
    );
};

export default ImageItem;
