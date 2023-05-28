import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import { SectionLayout } from '../../styles/Layouts'
import ServiceItem from '../ServiceItem/ServiceItem'
import Title from '../Title/Title'
import { code, design, desktop } from '../../utils/Icons'


function Services() {
    const theme = useTheme()
    return (
        <ServicesStyled id='services' theme={theme}>
            <Title name={'Services'} desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'} />
            <div className="services-con">
                <ServiceItem 
                    icon={design} 
                    title={' Responsive Web Design'}
                    bg={theme.colorPurple}
                    shadow={theme.shadowPurple}
                    desc={'I prioritize mobile-first development, ensuring that your web applications are fully responsive and adapt seamlessly to different screen sizes, providing a consistent user experience on desktop, tablet, and mobile devices.'}
                />
                <ServiceItem 
                    icon={desktop}
                    title={'Front End Development'}
                    bg={theme.colorGreenDark}
                    shadow={theme.shadowGreen}
                    desc={' I specialize in building highly interactive and responsive user interfaces using React.js, ensuring a seamless user experience across various devices and browsers.'}
                />
                <ServiceItem 
                    icon={code}
                    title={'Component Development'}
                    shadow={theme.shadowPrimary}
                    bg={theme.colorPrimary}
                    desc={'I have extensive experience in creating reusable and modular components, streamlining development processes and improving code efficiency for faster and more scalable web applications.'}
                />
            </div>
        </ServicesStyled>
    )
}

const ServicesStyled = styled(SectionLayout)`
    background: ${(props) => props.theme.colorBgGrad};
    .services-con{
        margin-top: 3.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 2rem;
    }
`;

export default Services