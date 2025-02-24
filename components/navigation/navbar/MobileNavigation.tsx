import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './NavLinks';

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src='/icons/hamburger.svg'
          alt='Hamburger Menu'
          width={36}
          height={36}
          className=' sm:hidden'
        />
      </SheetTrigger>
      <SheetContent side='left' className='bg-dark-100'>
        <SheetHeader>
          <SheetTitle className='hidden'>Navigation</SheetTitle>
          <SheetClose asChild>
            <Link href='/' className='flex gap-2 mb-5'>
              <Image src='./icons/logo.svg' alt='Logo' height={20} width={20} />
              <p className='text-xl font-semibold'>DashDark X</p>
            </Link>
          </SheetClose>

          <div className='no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto'>
            <SheetClose asChild>
              <section className='flex h-full flex-col gap-6 pt-16'>
                <NavLinks isMobileNav />
              </section>
            </SheetClose>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
