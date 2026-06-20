import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import Loading from './Loading';

const Root = () => {
    const navigation = useNavigation();

    return (
        <div>
            <div className='container mx-auto'>
                <Navbar></Navbar>
                <ToastContainer />
                {navigation.state === "loading"
                    ? <Loading />
                    : <Outlet />
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;