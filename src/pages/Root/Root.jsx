import React from 'react';
import Navbar from '../../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer';
import Loading from '../../components/LoadingSpinner/Loading';

const Root = () => {
  const navigation = useNavigation();

  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />

      
      {navigation.state === "loading" && <Loading />}

      <div className="flex-grow">
        <Outlet />
      </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;