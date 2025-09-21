
function Home(){
    return(
        <main>
        <section id="about">
            <h2>Welcome to My Portfolio</h2>
            <p className="description">Practical student of AI - Software Engineering Advanced Diploma, with experience in building full-stack projects, user-oriented design, 
            database management and object-oriented programming; Demonstrated analytical skills used for unit testing, debugging and troubleshooting; Multilingual in English, Russian, German and Uzbek; 
            worked as a marketing associate in a software company, where implemented strong marketing and communication to attract 500+ active product users</p>
        </section>

        <section id="techskills">
            <h2>Technical Skills</h2>   
                <ul>
                    <p className="skills"><strong>Programming:</strong> JavaScript, C#, Oracle SQL, Java, HTML/CSS, Python</p>
                    <p className="skills"><strong>Frameworks & Libraries:</strong> React (Vita), Express, Node, .Net, Pandas, Matplotlib, MongoDB</p>
                    <p className="skills"><strong>Operating Systems:</strong> MacOS, Linux, Windows</p>
                    <p className="skills"><strong>Development Tools:</strong> GitHub, Visual Studio Code, Visual Studio, Eclipse, Anaconda Navigator</p>
                    <p className="skills"><strong>Cloud Computing:</strong> AWS, Microsoft Azure</p>
                    <p className="skills"><strong>Unit Testing:</strong> MSTest, unittest, Jest</p>
                    <p className="skills"><strong>Other Tools:</strong>	Slack, Jira, Trello, MS Office, Figma, Google (Analytics, Trends, Ads)</p>
                </ul>
        </section>

        <section id="education">
            <h2>Education</h2>
            <ul>
                <h3>AI - Software Engineering Technology (Co-op) Advanced Diploma </h3>
                <h3>Centennial College, Toronto, ON </h3>
                <h3>September 2024 - Present</h3>
                <p><strong>Courses: Java Programming | AI Systems Design | Web Development (JS, HTML, CSS) | Software Requirements | Database Concepts (SQL) | Introduction to AI | C# Programming.</strong></p>
            </ul>
        </section>

        <section id="contact">
            <h2>Contact</h2>
            <p>Feel free to reach out to me for any opportunities or inquiries.</p>
            <p>Email: <a href="mailto:zukhriddinsh@gmail.com">zukhriddinsh@gmail.com</a></p>
            <p>+1(437) 214-2297 | LinkedIn: <a href="https://www.linkedin.com/in/zuhriddinsh/" target="_blank">Zuhriddin Sharofiddinov</a></p>
        </section>
    </main>
    );
}

export default Home;