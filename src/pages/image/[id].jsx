import React from 'react';
import Figure from "react-bootstrap/Figure";

const ImagePage = ({id}) => {
    return (
        <div>
            <Figure>
                <Figure.Image src={"https://picsum.photos/seed/" + id + "/600/400"}/>
                <Figure.Caption>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolorem illum, maxime
                    neque provident quis quisquam quos reiciendis ullam.
                </Figure.Caption>
            </Figure>
        </div>
    );
};

export default ImagePage;

export const getStaticProps = async ({params}) => {
    return {
        props: params,
    }
}

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking"
    }
}
