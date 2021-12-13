import React from 'react';
import { ContactsContainer, ContactsTitle, ContactsWrapper, ContactsInfo, ContactsInfoItem, MapMarkerAlt, ContactsAddress, Phone, ContactsPhone, ContactsText } from './Contacts.elements';

const Contacts = () => {
    return (
        <ContactsContainer>
            <ContactsTitle>Контакти</ContactsTitle>
            <ContactsWrapper>
                <ContactsInfo>
                    <ContactsInfoItem>
                        <MapMarkerAlt />
                        <ContactsAddress href="https://goo.gl/maps/UxekinCL5GBKcNDP7" target="_blank">Львівська область, смт Східниця, вул. Незалежності, 117
                        </ContactsAddress>
                    </ContactsInfoItem>
                    <ContactsInfoItem>
                        <Phone />
                        <ContactsPhone href="tel:+380679041814">+38 (067) 904 18 14
                        </ContactsPhone>
                    </ContactsInfoItem>
                </ContactsInfo>
                <ContactsText>
                Приїжджайте до нас за порцією здоров'я, натхнення та веселощів. Унікальне місце розташування курорту, прекрасні ландшафти, м’який клімат, чисте повітря, насичене ефірними смолами ялини, сосни і гірського різнотрав’я, створюють чудові передумови до відмінного відпочинку в Східниці в будь-який час року. 
                </ContactsText>
            </ContactsWrapper>
        </ContactsContainer>
    )
}

export default Contacts;
