import React from 'react';
import img3 from '@/assets/Images/BannerImage/bangladesh-election-banner-background-ballot-box-vector-33411615.jpg'

interface HeroPartProps {
    data: {
        title: string;
    };
}

const SubHeroPart: React.FC<HeroPartProps> = ({ data }) => {
    return (

        <section>
            <div style={{ backgroundImage: `url(${img3.src})` }} className="bg-cover w-full bg-center bg-no-repeat h-[250px] relative">
                <div className='backdrop-blur-sm mx-auto text-white py-2 flex flex-col justify-center items-center bg-black bg-opacity-40 h-full text-center'>
                    <h1 className='col-span-6 text-3xl font-semibold '>{data?.title}</h1>
                </div>
            </div>
        </section>
    );
};

export default SubHeroPart;
