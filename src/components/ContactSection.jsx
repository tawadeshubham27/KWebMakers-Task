import React from 'react';

const ContactSection = ({ content }) => {
  return (
    <section
      data-aos="fade-right"
      className="bg-cover bg-center py-20 text-white"
      style={{
        backgroundImage: `url(${content.homeJoinBackgroundImage?.node?.sourceUrl})`,
      }}
    >
      <div className="bg-black bg-opacity-60 p-8 max-w-4xl mx-auto text-center rounded-lg">
        <h2 className="text-3xl font-bold mb-4 font-poppins">{content.homeJoinTitle}</h2>
        <p className="mb-6 font-poppins">{content.homeJoinSubtitle}</p>
        <p className="mb-6 font-poppins" dangerouslySetInnerHTML={{ __html: content.homeJoinDescription }} />
        {content.homeJoinButton?.url && (
          <a
            href={content.homeJoinButton.url}
            target={content.homeJoinButton.target}
            className="bg-white text-blue-700 font-medium font-poppins px-6 py-2 rounded hover:bg-gray-200"
          >
            {content.homeJoinButton.title}
          </a>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
