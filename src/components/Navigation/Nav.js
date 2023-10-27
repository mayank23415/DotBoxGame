import React from 'react';
import './Nav.css';
import appIcon from './images/app-icon.png'

function Nav() {
    let navitems = ['Match History', 'About', 'New Game']
    return (
        <div className='navigation-dash'>
            <div className='nav-list'>
                <div className='application-icon'>
                    <img src={appIcon} alt="" height='30px' width='30px'/>
                </div>
                <div className='nav-item-list'>
                    {
                        navitems.map((item, index) => {
                            return (<div key={index} className='nav-items'>
                                <a href="#">{item}</a>
                            </div>);
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Nav;