import React from 'react';
import Container from '@material-ui/core/Container';
import ButtonAppBar from '../componente/header';
import Pricing from '../componente/pricing';
import Cards from '../componente/cards';
import Footer from '../componente/footer';

export default function Pagina() {
    return (
        <div>
            <ButtonAppBar />
            <Container maxWidth="sm">
                <Pricing />
            </Container>
            <Container maxWidth="md">
                <Cards />
            </Container>
            <Container maxWidth="md">
                <Footer />
            </Container>
        </div>
    )
}