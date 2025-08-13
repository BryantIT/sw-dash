import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import errorImg from '../../../public/assets/images/error/error-img-3.png'

const page = () => {
  return (
    <>
      {/* -- error area start -- */}
      <div className='container-xxl'>
        <div className='error-wrapper'>
          <div className='error-thumb'>
            <Image
              src={errorImg}
              priority
              style={{ width: '100%', height: 'auto' }}
              alt='image'
            />
          </div>
          <div className='error-content'>
            <h2>Hold up!</h2>
            <p>
              The page you are trying to reach is currently unavailable. It may
              have been moved, no longer exists or you may have mistyped the
              URL.
            </p>
            <div className='error-btn'>
              <Link href='/' className='btn btn-primary rounded-pill xxl'>
                Return Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* -- error area end -- */}
    </>
  )
}

export default page
