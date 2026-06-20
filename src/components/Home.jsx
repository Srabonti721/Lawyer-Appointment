import React, { useContext, useEffect } from 'react';
import Banner from './Banner';
import Lawyers from '../pages/Lawyers/Lawyers';
import { useLoaderData } from 'react-router';
import BestLawyer from './BestLawyer';
import { TitleContext } from '../context/TitleContext';
const Home = () => {
    const data = useLoaderData();
    const { setTitle } = useContext(TitleContext);
    useEffect(() => {
        setTitle("Law.BD || Home");
    }, [setTitle]);
    return (
        <div>
            <Banner></Banner>
            <Lawyers data={data}></Lawyers>
            <BestLawyer></BestLawyer>
        </div>
    );
};

export default Home;