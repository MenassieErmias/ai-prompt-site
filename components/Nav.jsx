'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href={'/'}>
        <Image
          src='/assets/images/logo.svg'
          width={30}
          height={30}
          alt="Promptopia logo"
          className="object-contain"
        />
        <p className="logo_text">
          Promptopia
        </p>
      </Link>
    </nav>
  )
}

export default Nav