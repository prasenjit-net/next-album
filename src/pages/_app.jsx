import {DefaultSeo} from "next-seo";

import SEO from '../../seo.config';
import NavBar from "../components/NavBar";

import "../styles/global.scss";
import Container from "react-bootstrap/Container";

function AlbumApp({Component, pageProps}) {
    return (
        <Container>
            <DefaultSeo {...SEO} />
            <NavBar/>
            <Component {...pageProps} />
        </Container>
    )
}

export default AlbumApp
