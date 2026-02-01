import React from 'react'
import RadialBarCharts from '../common/RadialBarChart'
import Image from 'next/image'
import al from '@/assets/Images/partyLogo/AwamiLeagueLogo.webp'
import bnp from '@/assets/Images/partyLogo/BNPLogo.webp'
import japa from '@/assets/Images/partyLogo/JatioyoPartyLogo.webp'
import other from '@/assets/Images/partyLogo/bullet_point_png.webp'
import { cn } from '@/assets/lib/cn'
import Counter from '@/components/common/Counter';


const TeamInfoWithChart = () => {

  const resultData = [
    {
      title: "আ. লীগ জোট",
      number: 120,
      textColor: "alDark",
      color: "alLight",
      logo: al
    },
    {
      title: "বিএনপি জোট",
      number: 130,
      textColor: "bnpDark",
      color: "bnpLight",
      logo: bnp
    },
    {
      title: "জাতীয় পার্টি",
      number: 30,
      textColor: "japaDark",
      color: "japaLight",
      logo: japa
    },
    {
      title: "অন্যান্য",
      number: 20,
      textColor: "otherDark",
      color: "otherLight",
      logo: other
    },
  ]

  return (
    <section>
      <div className='container mx-auto'>
        <div className='bg-white rounded-2xl -translate-y-10 lg:-translate-y-14'>

          <div className='lg:px-6 py-4 px-4 text-xl font-bold flex gap-2 items-center'>
            <div className="flex justify-center items-center blinking-dot">
            </div>
            <div className='text-gray-800'>সর্বশেষ বেসরকারি ফলাফল</div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-12 lg:px-6 px-4 pb-4 lg:pb-6 gap-4 lg:gap-6'>
            <div className={cn('col-span-6 border rounded pt-8 bg-PurpleLight border-PurpleDark',
            )}>
              <RadialBarCharts />
            </div>
            <div className='col-span-6 border-gray-400'>
              <div className='grid grid-cols-2 gap-4 lg:gap-6'>
                {resultData.map((data, i) => (
                  <div key={i}
                    className={
                      cn(
                        ' flex flex-col justify-center items-center rounded text-center border px-2 py-3 gap-1',
                        {
                          'border-alBorder text-alDark bg-alLight': data.title === 'আ. লীগ জোট',
                          'border-bnpBorder text-bnpDark bg-bnpLight': data.title === 'বিএনপি জোট',
                          'border-japaBorder text-japaDark bg-japaLight': data.title === 'জাতীয় পার্টি',
                          'border-otherBorder text-otherDark bg-otherLight': data.title === 'অন্যান্য',
                        }
                      )
                    }>
                    <Image className={cn('lg:w-12 lg:h-12 w-10 h-10 p-2 border-2 rounded-full bg-white shadow-lg',
                      {
                        'border-alBorder': data.title === 'আ. লীগ জোট',
                        'border-bnpBorder': data.title === 'বিএনপি জোট',
                        'border-japaBorder': data.title === 'জাতীয় পার্টি',
                        'border-otherBorder': data.title === 'অন্যান্য',
                      }
                    )} src={data.logo} alt='' />
                    <div className='lg:text-base text-xs mt-2'>{data?.title}</div>
                    <div className='text-center text-sm lg:text-xl flex gap-2'>প্রাপ্ত আসন: <Counter targetNumber={Number(data.number)} /></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default TeamInfoWithChart
