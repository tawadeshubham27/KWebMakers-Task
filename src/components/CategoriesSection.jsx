import React from 'react';

const CategoriesSection = ({ content }) => {
    const categories = content.categories || [];

    return (
        <section data-aos="fade-up" className="py-16 px-4">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold font-poppins">{content.homeCategoryTitle}</h2>
                <p className="text-gray-600 font-poppins">{content.homeCategorySubtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
                {categories.map((cat, idx) => (
                    <a
                        key={idx}
                        href={cat.link}
                        className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
                    >
                        <img src={cat.image?.node?.sourceUrl} alt={cat.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold font-poppins">{cat.title}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default CategoriesSection;
