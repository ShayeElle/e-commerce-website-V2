import React from 'react';
import '../styles/no-page.css';


function NoPage() {
    return (
        <>
        <section className='fof-container'>
            <h1>404</h1>
            <img src="/static/sad_chopper.jpg" alt='Sad Chopper' />
            <p> Sorry! Page not found, try not to get lost! </p>
        </section>
        
        </>
    )
}

export default NoPage;