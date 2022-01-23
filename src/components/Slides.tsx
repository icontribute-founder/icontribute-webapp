import Carousel from "react-material-ui-carousel";
import slide1 from "../assets/images/slide1.svg";
import slide2 from "../assets/images/slide2.svg";
import slide3 from "../assets/images/slide3.svg";

const slides: SlideType[] = [
    {
        name: "slide1",
        source: slide1,
    },
    {
        name: "slide2",
        source: slide2,
    },
    {
        name: "slide3",
        source: slide3,
    },
];

interface SlideType {
    name: string;
    source: string;
}

interface SlideProps {
    slideItem: SlideType;
}

const Slide = ({ slideItem }: SlideProps) => {
    return <img src={slideItem.source} alt={slideItem.name} width="90%" height = "90%" />;
};

const Slides = ({ interval = 5000 }) => {
    return (
        <Carousel interval={interval}>
            {slides.map((item: SlideType, i: number) => (
                <Slide key={i} slideItem={item} />
            ))}
        </Carousel>
    );
};

export default Slides;
