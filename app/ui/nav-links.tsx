'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaMosque } from 'react-icons/fa';
import {
  HiHome,
  HiMiniInformationCircle,
  HiOutlineNewspaper,
} from 'react-icons/hi2';
import { MdContactMail } from 'react-icons/md';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Accueil', href: '/', icon: HiHome },
  { name: 'À propos', href: '/about', icon: HiMiniInformationCircle },
  {
    name: 'Actualités',
    href: '/news',
    icon: HiOutlineNewspaper,
  },
  {
    name: 'Horaires de prières',
    href: '/prayer',
    icon: FaMosque,
  },
  { name: 'Contact', href: '/contact', icon: MdContactMail },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-12 grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-lg font-medium hover:bg-button hover:text-primary hover:scale-110 transition-transform duration-500 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-light text-primary': pathname === link.href,
              }
            )}
          >
            <LinkIcon className='w-6' />
            <p className='hidden md:block'>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
