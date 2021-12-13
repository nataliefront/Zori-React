import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; 
import { FooterContainer, FooterLogo, FooterAddress, FooterNumber, FooterText, SocialIcons, SocialIconLink, WebsiteRights } from './Footer.elements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogo to="/">Зоряний Двір</FooterLogo>
            <FooterAddress href="https://goo.gl/maps/UxekinCL5GBKcNDP7" target="_blank">Львівська область, смт Східниця, вул. Незалежності, 117</FooterAddress>
            <FooterNumber href="tel:+380679041814">+38 (067) 904 18 14</FooterNumber>
            <FooterText>Слідкуйте за нами в соціальних мережах та отримуйте інформацію про найсвіжіші новини
            </FooterText>
            <SocialIcons>
                <SocialIconLink href="https://www.facebook.com/zorianyi.dvir.sadyba/" target="_blank" aria-label="Facebook">
                    <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="https://www.instagram.com/zorianiidvir/" target="_blank" aria-label="Instagram">
                    <FaInstagram />
                </SocialIconLink>
            </SocialIcons>
            <WebsiteRights>Зоряний Двір @2021 All Rights Reserved.</WebsiteRights>
        </FooterContainer>
    )
}

export default Footer;
