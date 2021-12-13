import React from 'react';
import { ServicesData, ServicesDataTwo, ServicesDataThree } from '../components/ServicesItem/ServicesData';
import ServicesItem from '../components/ServicesItem/ServicesItem';
import { ServicesContainer, ServicesTitle, ServicesWrapper } from './Services.elements';

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesTitle>Відпочинок та розваги</ServicesTitle>
            <ServicesWrapper>
                <ServicesItem {...ServicesData} />
                <ServicesItem {...ServicesDataTwo} />
                <ServicesItem {...ServicesDataThree} />
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services;
