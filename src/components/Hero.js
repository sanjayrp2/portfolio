import HeroImg from '../assets/hero.png';
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config  = {
        subtitle: 'Im a Full-stack developer and Designer',
        social: {
            Github: 'https://github.com/sanjayrp2',
            linkedin: 'https://www.linkedin.com/in/sanjay-ramesh-925895284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-7xl font-hero-font'>Hello, <br/> I'm <span className='text-black'>R</span> Sanjay 
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <a href={config.social.Github} className='pr-5 hover:text-white'><AiOutlineGithub size={50}/></a>
                <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={50}/></a>
            </div>
       </div>
       <img className='md:w-1/3' src={HeroImg} />
    </section>
}
