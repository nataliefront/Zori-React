import React from 'react';
import { ServicesItems, ServicesImage, ServicesInfo, ServicesItemTitle, ServicesText } from './ServicesItem.elements';

const ServicesItem = ({ heading, paragraphOne, paragraphTwo, image }) => {
    return (
        <ServicesItems>
            <ServicesImage><img src={image} alt="Services" /></ServicesImage>
            <ServicesInfo>
                <ServicesItemTitle>{heading}</ServicesItemTitle>
                <ServicesText>{paragraphOne}</ServicesText>
                <ServicesText>{paragraphTwo}</ServicesText>
            </ServicesInfo>
        </ServicesItems>
    )
}

export default ServicesItem;
