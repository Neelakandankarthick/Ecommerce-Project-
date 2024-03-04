import websiteImg1 from '../assets/ecommerce-websites.jpg';
import websiteImg2 from '../assets/food-ecommerce.jpg';
import websiteImg3 from '../assets/website-blog.jpg';
export default function Projects() {
    const config={

        Projects:[
            {
                image:websiteImg1,
                description:'A Ecommerce Website.Built With React.',
                link:'https://github.com/Neelakandankarthick/Ecommerce-Project-'
            },
            {
                image:websiteImg2,
                description:'Food Ecommerce website like swiggy,built with Angular',
                link:'https://github.com/Neelakandankarthick/Ecommerce-Project-'
            },
            {
                image:websiteImg3,
                description:'Basic Blog Website .Built with next js and MongoDB',
                link:'https://github.com/Neelakandankarthick/Ecommerce-Project-'
            }
        ]
    }
    return <section id='Projects' className="flex flex-col justify-center px-5 py-20 text-white bg-primary">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className='text-4xl text-white border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
                <p>These are Some of My best i have bulit these with Reat MERN and vanilla CSS ,check out</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col gap-5 px-10 md:flex-row '>
                {config.Projects.map((Projects)=>(
                    <a href={Projects.link}>
                <div className='relative'>
                <img className='h-[200px] w-[500px]' src={Projects.image} />
                <div className='project-desc'>
                    <p className='px-5 py-5 text-center'>{Projects.description}</p>
                
                <div className='flex justify-center'>
                    <a className="btn" target='_blank' href={Projects.link}>View Project</a>
                </div>
                </div>
                </div>
                </a>
                ))}
                
               </div>
        </div>
    </section>
}