'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Avatar } from '../components/avatar'
import calarityLogo from '../public/assets/Clarity-Logo.svg'
import styles from '../styles/components/SiteHeader.module.css'

export const SiteHeader = () => {
  return (
    <header className={`${styles.siteHeader} content-padding`}>
      <h1>
        <Link href='/'>
          <Image src={calarityLogo} alt='Clarity Logo' style={{ height: '46px', width: 'auto', maxWidth: '100%' }} />
        </Link>
      </h1>

      <div className='search w-[50vw] max-w-full relative flex flex-row items-center'>
        <input type='search' placeholder='Type to search...' className='!bg-white transition border focus:shadow-md' />
        <div className='absolute right-2 -mt-0.5 pointer-events-none'>
          <kbd className='opacity-60 mr-1'>ctrl</kbd>
          <kbd className='opacity-60'>k</kbd>
        </div>
      </div>

      <div>
        <button type='button' className={styles.userButton}>
          <Avatar />
          James Nisbet
        </button>
      </div>
    </header>
  )
}
