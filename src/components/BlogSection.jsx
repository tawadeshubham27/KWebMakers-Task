import React from 'react';

const BlogSection = ({ blogTitle, blogSubtitle, blogs }) => {

  return (
    <section data-aos="zoom-in" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold font-poppins">{blogTitle}</h2>
        <p className="text-gray-600 font-poppins">{blogSubtitle}</p>
      </div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {blogs.map((blog, idx) => (
          <div key={idx} className="bg-white rounded shadow hover:shadow-lg transition overflow-hidden">
            <img
              src={blog?.featuredImage?.node?.sourceUrl}
              alt={blog?.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2 font-poppins">{blog.title}</h3>
              <p className="text-sm text-gray-500 font-poppins">{new Date(blog.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
