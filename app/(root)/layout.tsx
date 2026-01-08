import {ReactNode}from 'react'
import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';

const RootLayout = async ({children}: {children: ReactNode}) => {

  const isUserAuthenticated = await isAuthenticated();

  if(!isUserAuthenticated) redirect('/sign-in');



  return (
    <div  className='root-layout'       >
        <nav>
            <a href="/" className='flex items-center gap-2'>
            
                <img src="/logo.svg" alt="logo" width={38} height={32}/>
                <h2 className='text-primary-200'>PrepWise</h2>
            </a>    
        </nav>

        {children}
      
    </div>
  )
}

export default RootLayout
