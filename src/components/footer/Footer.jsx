import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { FooterContainer, IconsContainer, RRSS, TextFooter } from './FooterStyled'

const Footer = () => {
    const [icons, setIcons] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:3004/icons`).then((result) => {
        const listIcons = result.data;
        setIcons(listIcons);
      });
    }, []);
    const isLoaded = icons.length > 0;
    return (
        <>
            <FooterContainer>                
                    <IconsContainer>
                        Ingresa a nuestras redes sociales como Facebook, Twitter e Instagram
                    {icons.map((icon) => (
                        <RRSS key={icon.name} className={icon.class}></RRSS>
                    ))}
                        Contáctanos al 555-555
                    </IconsContainer>                
            </FooterContainer>
        </>
    )
}

export default Footer
