'use client';
import React from 'react';
import CategoryIcon from '/public/assets/images/icons/categoryIcon.svg';
import StarbucksIcon from '/public/assets/images/icons/starbucksIcon.svg';
import SearchIcon from '/public/assets/images/icons/searchIcon.svg';
import CartWhiteIcon from '/public/assets/images/icons/cartWhiteIcon.svg';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

function MainHeaderNav() {
  const pathName = usePathname();
  const router = useRouter();
  return (
    <nav
      id="global-nav-bar"
      className="fixed top-0 left-0 z-50 w-full flex justify-between px-4 items-center h-14 bg-starbucks-green"
    >
      <ul className="flex items-center gap-3">
        <li>
          <Link href="/categories" scroll={false}>
            {pathName === '/categories' ? (
              <X stroke="white" onClick={() => router.back()} />
            ) : pathName === '/' ? (
              <CategoryIcon />
            ) : (
              <ArrowLeft stroke="white" onClick={() => router.back()} />
            )}
          </Link>
        </li>
        <li>
          <Link href={'/'}>
            <StarbucksIcon />
          </Link>
        </li>
      </ul>
      <ul className="flex gap-3">
        <li>
          <Link href="/search" scroll={false}>
            <SearchIcon fill="white" />
          </Link>
        </li>
        <li>
          <Link href="/cart" scroll={false}>
            <CartWhiteIcon />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainHeaderNav;
