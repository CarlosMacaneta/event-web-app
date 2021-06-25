import Footer from "components/Footer";
import FixedTopNavbar from "components/Navbar";
import { Col, Container, Row } from "react-bootstrap";
import CarouselFade from "./carousel";
import ImgCard1 from "assets/img/card-layout/item-02.png";
import ImgCard2 from "assets/img/card-layout/item-01.png";
import ImgCard3 from "assets/img/card-layout/item-03.png";

const Home = () => {
    return(
        <>
            <FixedTopNavbar />
            <CarouselFade />
            <Container className="mt-2">
                <Row>
                    <Col md={12} className="text-center">
                        <h4 className="display-4">Lorem Ipsum</h4>
                        <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo ducimus quae voluptatibus, placeat repudiandae nemo pariatur quos autem maiores nisi odio? Consequuntur ipsam, ratione placeat amet iusto sed possimus maiores. Vero, illo mollitia. Repellendus, voluptatum labore fuga nemo quod asperiores animi nihil praesentium recusandae est ab eum repellat, debitis, laboriosam minima id.</p>
                    </Col>
                </Row>
                <Row className="justify-content-sm-center mt-3 mb-3">
                    <Col sm={6} md={4}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={ImgCard1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione tenetur exercitationem vel earum voluptatibus soluta necessitatibus? Dicta pariatur laboriosam sit quae, ea vitae quia consequatur consequuntur aliquam vel eveniet exercitationem.</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={ImgCard2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, autem nemo? Incidunt expedita quasi nesciunt doloribus sapiente voluptates unde voluptatum illo itaque assumenda quos rerum harum beatae velit, cum atque!</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} md={4}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={ImgCard3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit error nihil et nesciunt voluptates porro ipsam veniam nulla pariatur iusto expedita quas totam dicta facere molestiae ipsa sed, corrupti maxime?</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>            
            <Footer />
        </>
    );
}

export default Home;