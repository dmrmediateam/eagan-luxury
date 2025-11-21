import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Testimonials | Eagan Luxury Real Estate',
  description: 'Read what our clients say about working with Eagan Luxury Real Estate. Testimonials from satisfied buyers and sellers of luxury waterfront and sky residences in St. Petersburg.',
};

// Testimonials data
const testimonials = [
  {
    quote: 'My wife and I have purchased and sold 5 properties with Debi and Bill and have in all cases had buyers within hours of the listing going live. She plants seeds and waters them like no other I know.',
    author: 'Burt Driver • 4961 Bacopa Ln Penthouse #801',
    community: 'Bacopa Bay',
  },
  {
    quote: 'Debi sets the standard for a 5-star realtor. From the first introduction to the day our home closed, she was engaging, creative, confident, reassuring and always available. Debi is a true professional in an industry where it is critical to have a top-notch expert and partner to reach the finish line. Bravo Debi!',
    author: 'The Hamachers • 4991 Bacopa Ln #703',
    community: 'Bacopa Bay',
  },
  {
    quote: 'We can\'t say enough good things about Deborah Eagan and how she helped us sell our Bacopa condo. She is experienced, very knowledgeable about Bacopa, helped us stage it for sale, was quick to respond to customer interest and maximized our value by carefully planning how the sales process unfolded from beginning to end. She was our Realtor for the purchase of our next home... helping us transition from one to the other.',
    author: 'Bill & Sue Loving • 4991 Bacopa Ln #501',
    community: 'Bacopa Bay',
  },
  {
    quote: 'Debi was amazing and went above and beyond, completely exceeding expectations. Debi\'s knowledge and expertise in the market and local area was invaluable. I would be thrilled to work with her again in the future.',
    author: 'Estela Wells • 4961 Bacopa Ln #503',
    community: 'Bacopa Bay',
  },
  {
    quote: 'We recently sold an estate condo with Debi Eagan. She could not have been more helpful with getting the property cleaned, staged and ready for sell. She was extremely responsive throughout the process which was important since we do not live in Florida. I would highly recommend Deborah Eagan for your real estate needs.',
    author: 'Laurie Fine • 4780 Dolphin Cay Ln S #107',
    community: 'Dolphin Cay',
  },
  {
    quote: 'We had an outstanding experience working with Debi to sell our condo. From start to finish, she was professional, knowledgeable, and incredibly responsive, guiding us through every step of the process with ease. We couldn\'t be more grateful for her hands on hard work and dedication in making the entire experience smooth and successful.',
    author: 'Armand LeLeonnec • 4830 Osprey Dr S #501',
    community: 'Dolphin Cay',
  },
  {
    quote: 'Debi Eagan is a true professional. She has in-depth insight in the market and guided us thru the selling process. She provided extraordinary guidance and assistance in moving the transaction forward, and freely offered her time in answering our questions. Debi goes beyond the norm to be helpful and is the best agent that we have ever had the pleasure to work with. We recommend her without hesitation. Thank you, Debi, for your exceptional expertise and counsel.',
    author: 'Susan Paglia Rogers • 4750 Dolphin Cay Ln #604',
    community: 'Dolphin Cay',
  },
  {
    quote: 'From business to personal real estate, I have engaged agents on both sides of the table from men to women and young to mature. The saying goes that you need a shark for an agent, to get the best deal. This is true. And... if you\'re looking for a shark: intuitive, focused and seemingly effortless, then Debi has you covered and you can stop reading. If you want the inside scoop on the best kept secret in residential real estate in St. Petersburg, keep reading. Debi is timely, responsive and she listens. Debi is resourceful, creative and industrious. Debi is patient, professional and empathetic. Debi\'s interest is not in the deal, at the expense of the human. Her interest is in helping the human and getting you over the finish line with your best deal. If you\'re blessed enough to have been Debi\'s client, you know the experience is something entirely different. Her knowledge and service are a package deal wrapped in lace...something you just don\'t see these days. Debi treats her clients like her friend.',
    author: 'Jane Shin • 4625 Dolphin Cay Ln',
    community: 'Dolphin Cay',
  },
  {
    quote: 'We had an outstanding experience working with Debbie our realtor to sell our three-bedroom St. Petersburg condo. From start to finish, she was professional, knowledgeable, and incredibly responsive, guiding us through every step of the process with ease. Her expertise in pricing, staging, and marketing our property led to a quick sale at a great price. We couldn\'t be more grateful for her hands on hard work and dedication in making the entire experience smooth and successful.',
    author: 'Armand LeLeonnec • 4730 Osprey Dr S #501',
    community: 'Dolphin Cay',
  },
  {
    quote: 'We initially found Debi via her website that focused exclusively on PYCC. From our initial contact over a year ago to our post-closing follow-up, Debi is the consummate professional. Her knowledge of the community, property values and trends, and overall real estate acumen is second to none! Debi\'s calm and professional demeanor allowed for a thorough (though not tedious) property search and a successful purchase offer negotiation and closing. Thanks to Debi, we are delighted with our new home and the PYCC neighborhood and are looking forward to spending more time in Gulfport.',
    author: 'Jay and Paula Murphy • Pasadena Yacht and Country Club',
    community: 'Pasadena Yacht & Country Club',
  },
  {
    quote: 'Deborah Eagan represented the seller when we bought our home in 2021. At that time, her level of professionalism, knowledge and understanding of the market dynamics were attributes that were etched into our memory. Hence and nearly 4 years later when we decided to list our home for sale, there was only one person who we sincerely believed could bring that same level of passion, deep knowledge of our home, and awareness of community benefits and that was Debi. And we were not disappointed! In less than 10 days and with multiple offers in hand, our home sold! Debi took the time to fully understand the special attributes of the home and then used precision marketing techniques that helped to increase a high level of interest. I would not hesitate one iota to work with her again on any transaction. She is indeed one of those rare champions for unmatched customer service.',
    author: 'Danato J. Tramuto • Pasadena Yacht and Country Club',
    community: 'Pasadena Yacht & Country Club',
  },
];

export default function TestimonialsPage() {
  return (
    <main className="page-transition">
      {/* Hero Section */}
      <section className="section-shell">
        <div className="page-shell max-w-4xl">
          <p className="eyebrow">Testimonials</p>
          <div className="rule" />
          <h1 className="text-4xl md:text-[3.5rem] leading-tight mt-6 font-light">
            Client Testimonials
          </h1>
          <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-2xl">
            Read what our clients have to say about their experience working with Eagan Luxury Real Estate. 
            We're honored to have helped so many families find their perfect waterfront and sky residences.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-shell">
        <div className="page-shell max-w-6xl">
          {testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="tile">
                  <blockquote className="h-full flex flex-col">
                    <p className="text-base leading-relaxed text-ink-soft mb-6 flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <footer className="mt-auto">
                      <p className="text-xs uppercase tracking-[0.3em] text-graphite mb-1">
                        {testimonial.author}
                      </p>
                      {testimonial.community && (
                        <p className="text-xs text-graphite">
                          {testimonial.community}
                        </p>
                      )}
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          ) : (
            <div className="tile-muted max-w-2xl mx-auto text-center">
              <p className="eyebrow">Coming Soon</p>
              <div className="rule" />
              <p className="text-base mt-4 text-ink-soft">
                Testimonials are being compiled. Check back soon to read what our clients have to say.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-shell bg-ink/5">
        <div className="page-shell max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="tile">
              <p className="eyebrow">Work With Us</p>
              <div className="rule" />
              <h2 className="text-2xl font-light mb-6 mt-6">
                Experience the Difference
              </h2>
              <p className="text-base leading-relaxed text-ink-soft mb-8">
                Join our satisfied clients who have found their perfect luxury residence with Eagan Luxury Real Estate.
              </p>
              <Link href="/contact" className="btn-primary">
                Get Started
              </Link>
            </div>
            <div className="tile-muted">
              <p className="eyebrow">Contact</p>
              <div className="rule" />
              <div className="space-y-4 mt-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-graphite mb-2">Phone</p>
                  <a 
                    href="tel:7276371019" 
                    className="text-lg font-light text-ink hover:text-accent transition-colors"
                  >
                    727.637.1019
                  </a>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-graphite mb-2">Email</p>
                  <a 
                    href="mailto:info@eaganluxury.com" 
                    className="text-base font-light text-ink hover:text-accent transition-colors break-all"
                  >
                    info@eaganluxury.com
                  </a>
                </div>
                <div className="pt-4">
                  <Link href="/about" className="btn-outline">
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

