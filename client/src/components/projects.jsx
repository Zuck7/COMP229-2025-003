import ListComponent from "./ListComponent";

// const data = [
//     {
//         imagePath: bi_analyst,
//         title: 'BI Analyst',
//         text: "I offer BI analyst services for commercial businesses. It includes assisting in developing dashboards and reports for business and regulatory needs; supporting in automating manual reporting tasks using Excel, SQL and BI tools"
        
//     }, 
//     {
//         imagePath: ui_uxdesigner,
//         title: 'UI/UX Designer',
//         text: "I design intuitive digital experiences that users love. From wireframes to polished interfaces, I create websites and apps that look great and work seamlessly. Let's turn your ideas into user-friendly designs that drive results."
//     },
// ]


function Projects(){
    return(
        <div>
            <h3>Projects</h3>
            <ListComponent items={data}/>
        </div>
    )
};

export default Projects;