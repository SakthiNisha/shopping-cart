// CarouselComponent.js
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import banner1 from '../assets/offer1.jpg'; // Add your image paths
import banner2 from '../assets/offer3.jpg';
import banner3 from '../assets/offer4.jpg';

const CarouselComponent = () => {
    const items = [
        {
            name: "Enjoy 50% off your first purchase",
            image: banner1
        },
        {
            name: "Hurry! Limited-time offer – Get 50% off on all items!",
            image: banner2
        },
        {
            name: "Don't miss out! Exclusive 24-hour flash sale – Save 50% now!",
            image: banner3
        }
    ];

    const imageStyle = {
        width: '100%',
        height: '400px', // Set your desired height here
        objectFit: 'cover', // Ensure the image covers the container without distortion
    };

    return (
        <Carousel>
            {items.map((item, index) => (
                <Paper key={index} style={{ padding: '20px', textAlign: 'center' }}>
                    <img src={item.image} alt={item.name} style={imageStyle} />
                    <h2>{item.name}</h2>
                </Paper>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;
