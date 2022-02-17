import Carousel from "react-material-ui-carousel";
import SlideOne from "./Svgs/SlideOne";
import SlideTwo from "./Svgs/SlideTwo";
import SlideThree from "./Svgs/SlideThree";


const slides: SlideType[] = [
    {
        name: "slide1",
        source: <SlideOne/>,
    },
    {
        name: "slide2",
        source: <SlideTwo/>,
    },
    {
        name: "slide3",
        source: <SlideThree/>,
    },
];

interface SlideType {
    name: string;
    source: any;
}

interface SlideProps {
    slideItem: SlideType;
}

const Slide = ({ slideItem }: SlideProps) => {
    return slideItem.source
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
