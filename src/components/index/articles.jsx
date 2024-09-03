import React, {useState} from 'react';
import data from '../data/data.json';

const Articles = () => {
    const [articles, setArticles] = useState(data.blog);
    return (
        <>
            {
                articles.map((item, index) => (
                    <article id='arcicle' key={index} className="min-w-[600px] max-sm:min-w-[370px]  max-sm:pr-4 gap-10  px-4 z-20">
                        <a className=" border border-blue-800 h-[250px] max-sm:h-[200px] max-sm:flex-col flex bg-[#103d6a] max-sm:gap-10 hover:bg-[#f1f7fe] hover:text-blue-800 relative text-blue-100 p-6 rounded-md overflow-hidden">
                            <section className="flex flex-col  justify-between  z-20">
                                <h2 className="text-xl font-semibold">{item.title}</h2>
                                <p className="mt-2 font-light max-sm:w-full w-3/4 text-sm text-justify">{item.description}</p>
                            </section>
                            <section  className="max-sm:hidden max-sm:top-[-90px] absolute border-4 z-20 left-[300px] bottom-0 top-[-50px] right-0 border-blue-300 h-[400px] w-[400px] rounded-full "></section>
                            <div className=" absolute w-full top-0 left-0 h-full opacity-80 z-10">
                                <img
                                    className="absolute rotate-90 max-sm:top-[-100px] top-[-50px] left-[50px] h-[400px]"
                                    src="./image/pattern.png"
                                    alt="Pattern 1"
                                />
                                <img
                                    className="absolute rotate-90 h-[400px] top-[-50px] left-[450px]"
                                    src="./image/pattern.png"
                                    alt="Pattern 2"
                                />
                            </div>
                            <div className="max-sm:hidden w-[260px] flex justify-center z-20 ">
                                <svg  viewBox="0 0 630 667" fill="none" className="h-auto" xmlns="http://www.w3.org/2000/svg"><path d="M33.5746 60.5261L78.1441 560.442C79.7567 578.529 92.4112 593.723 109.909 598.581L303.013 652.191C310.639 654.308 318.697 654.309 326.324 652.195L520.03 598.493C537.533 593.64 550.194 578.445 551.809 560.354L596.422 60.5305C598.698 35.0223 578.604 13.0544 552.994 13.0544H77.0023C51.3944 13.0544 31.3005 35.0194 33.5746 60.5261Z" fill="#1572B6" stroke="white" stroke-width="25.2"></path><path d="M315.005 595.164L494.944 545.276L537.277 71.0341H315.005V595.164Z" fill="#33A9DC"></path><path d="M315.005 272.127H405.085L411.306 202.419H315.005V134.344H485.705L484.071 152.609L467.337 340.202H315.005V272.127Z" fill="white"></path><path d="M315.409 448.921L315.108 449.009L239.297 428.539L234.449 374.246H166.123L175.657 481.135L315.098 519.835L315.409 519.747V448.921Z" fill="#EBEBEB"></path><path d="M399.297 337.322L391.097 428.485L315.172 448.98V519.806L454.727 481.13L455.751 469.627L467.593 337.322H399.297Z" fill="white"></path><path d="M315.236 134.344V202.419H150.806L149.443 187.121L146.342 152.609L144.713 134.344H315.236ZM315.005 272.137V340.211H240.148L238.785 324.914L235.679 290.402L234.055 272.137H315.005Z" fill="#EBEBEB"></path></svg>
                            </div>
                        </a>
                    </article>
                ))
            }    
        </>
    );
};

export default Articles;