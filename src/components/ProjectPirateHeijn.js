import React from 'react';
import someImage from '../img/ica-presents.jpg';

const ProjectPirateHeijn = () => {
    return (
        <div className="project-contents">
            <p>
            The app, called "Pirate Heijn", works based off Albert Heijn’s (Dutch supermarket) “bonus cards”. These cards give discounts on certain products which switch every week. When you make an account on their website and connect your card, you get personal discounts. With this app the user can see all products that are in people’s personal discounts, and use the bonus card of the other person to get the discount. 
            </p>
            <img src={someImage}/>
            <h3>January 2020</h3>
        </div>
    )
};

export default ProjectPirateHeijn;

