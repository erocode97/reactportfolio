import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext';
import { brief, education } from '../../utils/Icons';
import TimelineItem from '../TimelineItem/TimelineItem';

function Timeline() {
    const theme= useTheme()
    return (
        <TimelineStyled theme={theme}>
            <div className="education-timeline timeline">
                <TimelineItem 
                    duration={'2011 - 2015'}
                    title={'Polatli TOBB Science High School'}
                    desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    icon={education}
                />
                <TimelineItem
                    duration={'2022-2023'}
                    title={'SWPS English Preperation School'}
                    desc={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                    icon={education}
                />
                <TimelineItem
                    duration={'2023-2027'}
                    title={'Polish-Japanese Academy of Information Technology'}
                    desc={''}
                    icon={education}
                />
            </div>
            <div className="jobs-timeline timeline">
                <TimelineItem
                    duration={'2021- ..'}
                    title={'Udemig-Front End Developer'}
                    desc={'Developing user interfaces for web-based products of Udemig using technologies such as HTML, CSS, and JavaScript.'}
                    icon={brief}
                />
                
                
            </div>
        </TimelineStyled>
    )
}

const TimelineStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    gap: 2rem;
    .timeline{
        background-color: ${(props) => props.theme.colorBg5};
        padding: 2rem;
        border-radius: 10px;
    }

    .jobs-timeline{
        .icon{
            left: -10px;
        }
    }
`;

export default Timeline