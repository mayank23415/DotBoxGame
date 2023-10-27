import React, { useEffect, useState } from 'react';
import './Intro.css';

function Intro() {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [])

    return (
        <div className={`introSplash ${visible ? '' : 'fade-out'}`}>
            <p>Lets Play La Pipopipette</p>
        </div>
    )
}

export default Intro;