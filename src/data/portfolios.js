import uuid from "react-uuid"
import { eye, git } from "../utils/Icons"
import snippet from '../img/portImages/responsive.png'
import js from '../img/portImages/js.png'
import tabs from '../img/portImages/gamedevelopment.png'
import figma from '../img/portImages/webdevelopment.png'

export const portfolios = [
    {
        id: uuid(),
        category: "Responsive Web Design",
        title: "Gaming Website",
        image: snippet,
        link1: "https://github.com/erocode97/gamingwebsite",
        link2: "https://647354241619083a12f2eae2--venerable-cheesecake-21be97.netlify.app/",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Game Development",
        title: "Sudoku Game",
        image: tabs,
        link1: "https://github.com/erocode97/sudokugame",
        link2: "https://remarkable-macaron-4ce912.netlify.app/",
        icon1: git,
        icon2: eye,
    },
    {
        id: uuid(),
        category: "Web Development",
        title: "Estate Agent Website",
        image: figma,
        link1: "https://github.com/erocode97/Estate-Agent-Website",
        link2: "https://647356bd565044379bbef52d--monumental-pika-bce9ae.netlify.app/",
        icon1: git,
        icon2: eye,
    },
   
]