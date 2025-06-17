import React from 'react';
import Banner from './Banner';
import Extra from './Extra';
import Section1 from './Section1';
import Section2 from './Section2';
import { useLoaderData } from 'react-router';
import Featured from './Featured';

const Home = () => {
    const featuredData = useLoaderData();
    console.log(featuredData);
    return (
        <div>
            <Banner></Banner>
            
            <div>
  <h1 className='text-3xl text-center mt-10 mb-3 font-bold my-7'>Featured Articles</h1>
  <p className='text-center text-gray-600 text-xl'>Discover our latest insights and trending topics from across science, technology, and innovation. These articles highlight recent contributions from experts and thought leaders, bringing you fresh perspectives on the world's most fascinating ideas.</p>
  <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10 mx-20 mt-10'>
  
  {
              featuredData.map(feature =><Featured key={feature._id} feature={feature}></Featured>)  
            }
</div>
</div><Extra></Extra>
             <Section1></Section1>
            <Section2></Section2>
        </div>
    );
};

export default Home;