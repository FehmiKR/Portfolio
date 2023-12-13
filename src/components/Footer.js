import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

function Footer() {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
            <Layout className='py-8 flex items-center justify-between'>
                <span> 2023 © All Rights Reserved.</span>
                <div className='flex items-center'>
                    Build With <span className='text-primary text-2xl px-1'>&#9825;</span>by&nbsp;
                    <Link href="/Resume.pdf" className='underline underline-offset-2' target='_blank'>FehmiKRIFA</Link>
                </div>
            </Layout>
        </footer>
    )
}

export default Footer