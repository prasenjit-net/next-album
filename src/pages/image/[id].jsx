import React from 'react';
import {Figure} from "react-bootstrap";

const ImagePage = () => {
    return (
        <div>
            <Figure>
                <Figure.Image src="https://picsum.photos/600/400"/>
                <Figure.Caption>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem illum, maxime
                    neque provident quis quisquam quos reiciendis ullam.
                </Figure.Caption>
            </Figure>
        </div>
    );
};

export default ImagePage;

