import './Navbar.css'

function Navbar(){
    return (
        <div class="header">
        <div class="logo-title">
        <h1><a href="/">Hackoverflow</a></h1>
        </div>     
        <i id="menu-btn" class="fa-solid fa-bars"></i>
        <nav class="navbar-container">
            <p><a href="/">Home</a></p>
            <p><a href="#events">Events</a></p>
            <p><a href="#gallery">Gallery</a></p>
            <p><a href="#organizers">Organizers</a></p>
            <p id="contact-link"><a href='#contact-us'>Contact Us</a></p>
        </nav>     
    </div>
    );
}

export default Navbar