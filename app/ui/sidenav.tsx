import NavLinks from '@/app/ui/nav-links';
import Link from 'next/link';

export default function SideNav() {
  return (
    <div className='flex h-full flex-col px-3 py-4 md:px-2'>
      <Link
        className='mb-2 flex h-20 items-end justify-start rounded-md p-4 md:h-40'
        href='/'
        style={{
          background: 'center / contain url("./images/logo.png") no-repeat',
        }}
      ></Link>
      <div className='flex flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 md:justify-normal'>
        <NavLinks />
      </div>
    </div>
  );
}
