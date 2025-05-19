const ColoursSection = ({ title, subtitle, button, colours }) => {
  return (
    <section data-aos="fade-down" className="py-16 px-4 text-center">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 font-poppins">{title}</h2>
        <p className="text-gray-600 mb-6 font-poppins">{subtitle}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6 mb-8">
          {colours?.map((colour, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div
                className="w-24 mx-4 h-24 rounded shadow-lg"
                style={{ backgroundColor: colour.colourInfo.selectColor }}
              ></div>
              <span className="mt-2 text-sm font-medium text-gray-700 font-poppins">{colour.title}</span>
            </div>
          ))}
        </div>

        {button?.url && (
          <a
            href={button.url}
            target={button.target}
            className="inline-block mt-4 bg-black text-white font-poppins px-6 py-2 rounded"
          >
            {button.title}
          </a>
        )}
      </div>
    </section>
  );
};

export default ColoursSection;
