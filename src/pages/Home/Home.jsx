import React from 'react';
import Banner from '../../components/Banner';
import TrustedBy from '../../TrustedBy';
import Apps from '../Apps/Apps';
import TopApps from '../../components/TopApps';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
           <TrustedBy></TrustedBy>
        <TopApps></TopApps>
        </div>
    );
};

export default Home;