import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import navigate from './Home';

function Contact(){
    return(
        <div>
            <section id="contact">
            <h2>Contact</h2>
            <p>Feel free to reach out to me for any opportunities or inquiries.</p>
            <p>Email: <a href="mailto:zukhriddinsh@gmail.com">zukhriddinsh@gmail.com</a></p>
            <p>+1(437) 214-2297 | LinkedIn: <a href="https://www.linkedin.com/in/zuhriddinsh/" target="_blank">Zuhriddin Sharofiddinov</a></p>
        </section>
        </div>
    );
}



export default Contact;