
function Layout(){
    return(
       <>
       <h1>My Portfolio</h1>
       <nav className="navbar">
        <img src="{image-logo}" alt="logo" className="logo"/>
        <link to="/" >Home</link>
        <link to="/about" >About</link>
        <link to="/projects" >Projects</link>
        <link to="/Services" >Services</link>
       </nav>
       </>
    )
}

export default Layout;