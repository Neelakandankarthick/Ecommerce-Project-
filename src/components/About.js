import AboutImg from '../assets/about.png';
export default function About(){
    const config={
        line1:'Hii, My Name is Neelakandan. I am a Full Stack Web Developer. i built beautiful Websites with React.js And Tailwind CSS +Boot Strap',
        line2:'l am Proficent in Frontend Skills Likes React js,Redux,Redux Toll Kit ,Axios,Tailwind CSS,saSS,CSS3 and many Morde.',
        line3:'in backemd i know Node.js,Express.js,MongoDB, and Mongoose'
    }
    return<section id='About' className='flex flex-col px-5 md:flex-row bg-secondary'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg}/>

        </div>
        <div className='flex justify-center md:w-1/2 '>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl text-white border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>{config.line1}</p>
            <p className='pb-5'>{config.line2}</p>
            <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}