import React from 'react';
import image from '../rockclimber.png';
import './Home.css';

function Home() {
    return (
        <div className="Home">
            <div className='col-12 rock'>
                <div className="card relative">
                    <img src={image} className="card-img-top" alt="..."></img>
                    <h1 className="overlay">Text Overlay Goes Here</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;
