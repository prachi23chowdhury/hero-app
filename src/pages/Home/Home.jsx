import React from 'react';
import Banner from '../../components/Banner';
import TrustedBy from '../../TrustedBy';
import Apps from '../Apps/Apps';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
           <TrustedBy></TrustedBy>
        <Apps></Apps>
        </div>
    );
};

export default Home;