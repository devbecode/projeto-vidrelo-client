import { ReactNode } from "react";
import { Pagination, Navigation, A11y } from "swiper";
import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";

//Styles Swiper
import './Slider.scss'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

interface SliderProps {
    settings: SwiperProps,
    children: ReactNode,
}


export default function Slider({ settings, children }: SliderProps) {
    return (
        <Swiper modules={[Navigation, Pagination, A11y]} {...settings}>
            {children}
        </Swiper>
    )
}