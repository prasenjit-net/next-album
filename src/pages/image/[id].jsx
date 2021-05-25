import React, {useEffect, useState} from 'react';
import Figure from "react-bootstrap/Figure";

const ImagePage = ({id}) => {

    const [info, setInfo] = useState({});
    useEffect(() => {
        fetch("https://picsum.photos/id/" + id + "/info")
            .then(res => res.json())
            .then((inf => setInfo(inf)));
    }, []);

    return (
        <div>
            <Figure>
                <Figure.Image src={"https://picsum.photos/id/" + info.id + "/" + info.width + "/" + info.height + ""}/>
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
