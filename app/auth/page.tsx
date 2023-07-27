import React from 'react'
import Container from '@/Components/Container';

const auth = () => {
  return (
    <div className='reletive '>
            
        <img src="/cover.webp" 
            alt=""
            className='w-full h-full bg-cover bg-no-repeat hidden md:block'
            />
            <nav className='absolute top-0 '>
                <img src="/logo.png" 
                alt=""
                className='h-20'
                 />
            </nav>

            <div className='flex items-center justify-center' > 
                <div className='bg-[#141414] py-16 px-16 absolute top-[20%] w-[20%] md:w-2/5  lg:w-2/5 lg:max-w-md'>
                   <Container>
                    <h1>Sign in</h1>
                   </Container>
                </div>
            </div>
    </div>
  )
}

export default auth;