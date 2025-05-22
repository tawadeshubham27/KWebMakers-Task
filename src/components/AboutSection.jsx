
import React from "react";

const AboutSection = ({ content }) => {
    return (    
        <section className="bg-gray-100 ">
            <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-8 items-center">
                <div  data-aos="fade-right" className="flex-1 space-y-4 me-4">
                    <h2 className="text-3xl font-bold font-poppins">{content.homeAboutTitle}</h2>
                    <h3 className="text-xl text-gray-600 font-poppins">{content.homeAboutSubtitle}</h3>
                    <div dangerouslySetInnerHTML={{ __html: content.homeAboutDescription }} className="text-gray-700 font-poppins" />
                    <a href={content.homeAboutButton.url} className="inline-block mt-4 bg-black text-white font-poppins px-6 py-2 rounded">
                        {content.homeAboutButton.title}
                    </a>
                </div>
                <div data-aos="fade-left" className="flex-1">
                    <a href={content.homeAboutVideoUrl} target="_blank" rel="noopener noreferrer">
                        <img
                            src={content.homeAboutVideoImage.node.sourceUrl}
                            alt="Video Preview"
                           className="transform transition-transform duration-500 hover:scale-105 group-hover:brightness-105 cursor-pointer rounded"
                        />
                    </a>
                </div>
            </div>
        </section>
    )
};

export default AboutSection;
