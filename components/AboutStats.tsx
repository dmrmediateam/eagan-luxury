const AboutStats = () => {
  return (
    <section className="section-padding bg-gray-light">
      <div className="container-max">
        {/* About Section */}
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="scroll-animate text-3xl sm:text-4xl font-serif font-light text-black mb-4 heading-underline pb-4">
            About Cheryl Towey Services
          </h2>
          <p className="scroll-animate text-base text-gray-dark leading-relaxed mt-8">
            Dedicated real estate professional with a passion for helping families find their perfect home in New Jersey's most desirable communities.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto mb-12">
          <div className="scroll-animate text-center">
            <div className="text-4xl font-serif font-light text-secondary mb-3">
              10+
            </div>
            <div className="text-xs uppercase tracking-widest text-black font-light">
              YEARS OF EXPERIENCE
            </div>
          </div>
          <div className="scroll-animate text-center">
            <div className="text-4xl font-serif font-light text-secondary mb-3">
              {/* TODO: Add actual stat */}
              250+
            </div>
            <div className="text-xs uppercase tracking-widest text-black font-light">
              HAPPY FAMILIES SERVED
            </div>
          </div>
          <div className="scroll-animate text-center">
            <div className="text-4xl font-serif font-light text-secondary mb-3">
              {/* TODO: Add actual stat */}
              100%
            </div>
            <div className="text-xs uppercase tracking-widest text-black font-light">
              CLIENT SATISFACTION
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="scroll-animate text-center">
            <a 
            href="#team" 
            className="text-black hover:text-gold transition-colors duration-200 border-b-2 border-gold pb-1 text-base"
          >
            Learn More About Cheryl Towey
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutStats;

