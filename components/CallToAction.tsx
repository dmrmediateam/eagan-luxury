import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* TODO: Replace with actual background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/mr2.webp)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="relative z-10 container-max text-center text-white">
            <h2 className="scroll-animate text-3xl sm:text-4xl lg:text-5xl font-serif font-light mb-8 text-white">
              Ready to Find Your Dream Home?
            </h2>
            <p className="scroll-animate text-base sm:text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
              Let Cheryl Towey guide you through New Jersey's premier real estate market with expertise, dedication, and personalized service
            </p>

        {/* Stats */}
        <div className="scroll-animate grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          <div>
            {/* TODO: Add actual stat */}
            <div className="text-4xl font-serif font-light mb-2 text-secondary">250+</div>
            <div className="text-xs uppercase tracking-widest text-white">Homes Sold</div>
          </div>
          <div>
            {/* TODO: Add actual stat */}
            <div className="text-4xl font-serif font-light mb-2 text-secondary">10+</div>
            <div className="text-xs uppercase tracking-widest text-white">Years Experience</div>
          </div>
          <div>
            {/* TODO: Add actual stat */}
            <div className="text-4xl font-serif font-light mb-2 text-secondary">5.0</div>
            <div className="text-xs uppercase tracking-widest text-white">Client Rating</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="scroll-animate flex flex-col sm:flex-row gap-6 justify-center">
          <Link href="/listings" className="btn-primary">
            View Listings
          </Link>
          <Link 
            href="/contact" 
            className="btn-outline border-white text-white hover:bg-white hover:text-black"
          >
            Contact Cheryl
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

