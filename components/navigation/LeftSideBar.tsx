import React from 'react';
import Search from '../search/Search';
import Image from 'next/image';
import NavLinks from './navbar/NavLinks';

export const LeftSideBar = () => {
  return (
    <section className='mt-5 px-4 max-sm:hidden lg:w-[256px]'>
      <div className='flex gap-2 mb-10'>
        <Image src='./icons/logo.svg' alt='Logo' height={20} width={20} />
        <p className='text-xl font-semibold'>DashDark X</p>
      </div>
      {/* <Search /> */}

      <div className='flex flex-1 flex-col gap-6'>
        <NavLinks />
      </div>
    </section>
  );
};
