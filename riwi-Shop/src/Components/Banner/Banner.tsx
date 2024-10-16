import React from 'react';
import bannerImage from '../../assets/media/Assets 2 (package)/fondosPages/RIWI.ESPACIOS_0088.jpg';

const Banner: React.FC = () => {
    return (
        <div className="banner">
            <div className="image-container">
                <img src={bannerImage} alt="Banner Image" />
            </div>
        </div>
    );
};

export default Banner;
