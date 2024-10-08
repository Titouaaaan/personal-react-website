import './NavigationBar.css';

function NavigationBar() {
    return (
        <div className='topnav'>
            <a class="active" href="#/">Home</a>
            <a href="#/projects">Projects</a>
            <a href="#/contact">Contact</a>
            <a href="#/resume">Resume</a>
        </div>
    );
}

export default NavigationBar;