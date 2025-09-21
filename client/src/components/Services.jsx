import ListComponent from "./ListComponent";
import bi_analyst from '../assets/bi_analyst.jpeg';
import ui_uxdesigner from '../assets/ui_uxdesigner.jpeg';
import data_analyst from '../assets/data_analyst.jpeg';




const data = [
    {
        imagePath: bi_analyst,
        title: 'BI Analyst',
        text: "I offer BI analyst services for commercial businesses. It includes assisting in developing dashboards and reports for business and regulatory needs; supporting in automating manual reporting tasks using Excel, SQL and BI tools"
        
    }, 
    {
        imagePath: ui_uxdesigner,
        title: 'UI/UX Designer',
        text: "I design intuitive digital experiences that users love. From wireframes to polished interfaces, I create websites and apps that look great and work seamlessly. Let's turn your ideas into user-friendly designs that drive results."
    },
    {
        imagePath: data_analyst,
        title: 'Data Analyst',
        text: "Turn your data into insights. I analyze, visualize, and report on your business data to help you make informed decisions and drive growth."
    }
];

function Services() {
    return (
        <div className="page-container">
            <h3 className="head">Services</h3>
            <ListComponent items={data} />
        </div>
    );
}

export default Services;