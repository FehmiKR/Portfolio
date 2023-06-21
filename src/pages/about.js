import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import profilePic from "../../public/images/profile/MyProfile2.png"


export default function About() {
    return (
        <>
            <Head>
                <title> Fehmi Krifa | About Page </title>
                <meta name='description' content='any' />
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text="Unleash Purpose Ignite Passion!" className='!text-6xl mb-16' />
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/80'>Biography</h2>
                            <p className='font-medium'>
                                I am Fehmi KRIFA, a motivated and enthusiastic second-year student pursuing
                                a Bachelor's degree in Computer Science. With a solid foundation in programming
                                languages such as C, C++, C#, Java and Python, as well as a good understanding of web development,
                                I possess a strong academic knowledge in these areas.
                            </p>
                            <p className='my-4 font-medium'>
                                Additionally, I have gained valuable experience in software conception, allowing me to effectively analyze
                                requirements and design software solutions. Committed to continuous learning and staying up-to-date with emerging
                                technologies, I am eager to apply my skills and contribute to real-world projects in the field of computer science.
                            </p>
                            <p className='my-4 font-medium'>
                                Whether I'm working on a website, mobile app, orother digital product, I bring my commitment to user-centered thinking 
                                to every project I work on.<br /> I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>
                        </div>
                        <div className='col-span-3 left-52 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] bg-dark rounded-[2rem]' />
                            <Image src={profilePic} alt="Fehmi" className='w-full h-auto rounded-2xl' />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}