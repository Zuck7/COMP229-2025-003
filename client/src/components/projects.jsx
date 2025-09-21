import ListComponent from "./ListComponent";
import pokedex from '../assets/pokedex.jpeg';

const data = [
    {
        imagePath: pokedex,
        title: 'Pokedex Project',
        text: "Pokedex Application - an application where users can search for Pokemon by name or ID, view their details in a styled card, open a modal to view more information, and add up to 6 Pokemon to a favourites list stored in localStoraage. It uses PokeAPI to fetch Pokemon data."
        
    }, 
    // {
    //     imagePath: ui_uxdesigner,
    //     title: 'UI/UX Designer',
    //     text: "I design intuitive digital experiences that users love. From wireframes to polished interfaces, I create websites and apps that look great and work seamlessly. Let's turn your ideas into user-friendly designs that drive results."
    // },
]

function Projects() {
    return (
        <div className="projects">
            <h3>Projects</h3>
            <ListComponent items={data} />
        </div>
    );
}

export default Projects;