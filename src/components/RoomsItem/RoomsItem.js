import React, {useState, useEffect, useRef} from 'react';
import { RoomsSection, RoomsWrapper, RoomsSlide, RoomsSlider, RoomsImage, SliderButtons, PrevArrow, NextArrow } from './RoomsItem.elements';

const RoomsItem = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }

        timeout.current = setTimeout(nextSlide, 4000)

        return function () {
            if(timeout.current) {
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }
        
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current)
        }

        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <RoomsSection>
            <RoomsWrapper>
                {slides.map((slide, index) => {
                    return (
                        <RoomsSlide key={index}>
                            {index === current && (
                                <RoomsSlider>
                                    <RoomsImage src={slide.image} alt={slide.alt} />
                                </RoomsSlider>
                            )}
                        </RoomsSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow  onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </RoomsWrapper>
        </RoomsSection>
    )
}

export default RoomsItem;
