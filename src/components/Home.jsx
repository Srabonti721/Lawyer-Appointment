import React from 'react';
import Banner from './Banner';
import Lawyers from '../pages/Lawyers/Lawyers';
import { useLoaderData } from 'react-router';
import BestLawyer from './BestLawyer';

const Home = () => {
        const data = useLoaderData();
    // console.log(data);
    return (
        <div>

            <Banner></Banner>
            <Lawyers data={data}></Lawyers>
            <BestLawyer></BestLawyer>
        </div>
    );
};

export default Home;