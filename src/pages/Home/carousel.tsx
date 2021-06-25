import ImgSlide1 from "assets/img/img-01.png";
import ImgSlide2 from "assets/img/img-02.png";
import { Button, Carousel } from 'react-bootstrap';

const CarouselFade = () => {
    return (
        <Carousel fade prevLabel="" nextLabel="" className=" carousel-dark mt-0 my-0">
            <Carousel.Item className="justify-content-center">
                <img
                className="d-block w-100"
                src={ImgSlide1}
                alt="First slide"
                />
                <Carousel.Caption className="d-none d-md-block text-danger">
                    <h3>First slide label</h3>
                    <p>Mantenha seus compromissos a salvo</p>
                    <Button href="/eventos/create">Registar evento</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={ImgSlide2}
                alt="Second slide"
                />

                <Carousel.Caption className="d-none d-md-block float-end text-primary">
                    <h3>Lorem Ipsum</h3>
                    <p>Gira seus eventos da maneira mais fácil.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFade;