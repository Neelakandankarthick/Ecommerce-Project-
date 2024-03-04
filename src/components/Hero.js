import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter,AiOutlineFacebook,AiOutlineLinkedin } from "react-icons/ai";
export default function Hero(){
    const config={
        subtitle:'Im a Full-Stack Developer',
        social:{
            twitter:'https://twitter.com/home',
            Facebook:'https://www.facebook.com/profile.php?id=61556630803635',
            linkedin:'https://www.linkedin.com/in/neelakandan-karthik-a7a08a25a/'

        }
    }
    return <section className='flex flex-col justify-center px-5 py-32 md:flex-row bg-primary'>
        <div className='flex flex-col md:w-1/2'>
    <h1 className='text-6xl text-white font-hero-font'> Hi,<br/>Im <span className='text-black'> NeelaKandan</span> Karthick
    <p className='text-2xl'>{config.subtitle}</p>
   </h1>
   <div className='flex py-5'>
    <a href={config.social.twitter}className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
    <a href={config.social.Facebook}className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
    <a href={config.social.linkedin}className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
   </div>
   </div>
   <img className='md:w-1/3' src={HeroImg}/>
    </section>
}
