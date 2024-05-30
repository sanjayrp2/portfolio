import websiteImg1 from '../assets/KEC-IIC.png';
import websiteImg2 from '../assets/figma.png';
import websiteImg3 from '../assets/sine.png';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Ecommerce Website. Built with MERN Stack.',
                link: 'https://github.com/sanjayrp2/KEC-IIC.git'
            },
            {
                image: websiteImg2,
                description: 'UI/UX project Spotify-App using Figma.',
                link: 'https://www.figma.com/design/EpDPHQRfiY8jzKR14AZz3n/Untitled?t=bruAr0Vl9gDH2qWQ-1'
            },
            {
                image: websiteImg3,
                description: 'Sign language translator Using Deep Learning.',
                link: 'https://github.com/sanjayrp2/Sign-language-translator.git'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React, MERN ,CSS and in UI/UX and Deep Learning . Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}