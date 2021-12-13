import React from 'react';
import RoomsItem from '../components/RoomsItem/RoomsItem';
import { RoomsData } from '../components/RoomsItem/RoomsData';
import { RoomsContainer, RoomsTitle, RoomsInfoWrapper, RoomsInfo, RoomsInfoItem, Hamburger, Laptop, Parking, Tv, Bed, AirFreshener, RoomsText  } from './Rooms.elements';

const Rooms = () => {
    return (
        <RoomsContainer>
            <RoomsTitle>Номери</RoomsTitle>
            <RoomsItem slides={RoomsData} />
            <RoomsInfoWrapper>
                <RoomsInfo>
                    <RoomsInfoItem>
                        <Hamburger />
                        Сніданок
                    </RoomsInfoItem>
                    <RoomsInfoItem>
                        <Laptop />
                        Wi-fi free
                    </RoomsInfoItem>
                    <RoomsInfoItem>
                        <Parking />
                        Стоянка
                    </RoomsInfoItem>
                    <RoomsInfoItem>
                        <Tv />
                        TV LCD
                    </RoomsInfoItem>
                    <RoomsInfoItem>
                        <Bed />
                        Велике ліжко
                    </RoomsInfoItem>
                    <RoomsInfoItem>
                        <AirFreshener />
                        Косметика
                    </RoomsInfoItem>
                </RoomsInfo>
                <RoomsText>Автентичний карпатський стиль номерів, що Вас дійсно здивує! А ще неймовірний гірський краєвид з вікон, балконів та тераси. Обирайте комфортний номер в Східниці, який вам до смаку.</RoomsText>
                <RoomsText>Вартість номерів від 1200 грн.</RoomsText>
            </RoomsInfoWrapper>
        </RoomsContainer>
    )
}

export default Rooms;
