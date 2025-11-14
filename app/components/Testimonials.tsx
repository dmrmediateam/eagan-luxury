export default function Testimonials() {
  const testimonials = [
    {
      name: "Alyssa Michelle",
      location: "New Jersey",
      rating: 5,
      date: "01/06",
      text: "Cheryl is the most caring, professional, and hard working realtor there is! She will always go above and beyond for her clients and makes you feel like family. I had the pleasure of working with her through the buying process and selling process and could not imagine doing it without her. Highly recommend her!!",
    },
    {
      name: "John & Sarah Martinez",
      location: "Hackettstown, NJ",
      rating: 5,
      date: "12/15",
      text: "Working with Cheryl was an absolute pleasure. Her knowledge of the local market and attention to detail helped us find our dream home. She guided us through every step and made the process smooth and stress-free.",
    },
    {
      name: "Robert Johnson",
      location: "Chester, NJ",
      rating: 5,
      date: "11/22",
      text: "Cheryl's professionalism and dedication are unmatched. She sold our home in record time and at a price that exceeded our expectations. We couldn't be happier with the service we received!",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted voices from our distinguished clientele who experienced our
            exceptional service firsthand.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-emerald-50 rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow duration-300 border-2 border-emerald-100"
            >
              {/* Client Photo Placeholder */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Date */}
              <p className="text-sm text-emerald-600 font-semibold mb-4">
                {testimonial.date}
              </p>

              {/* Quote */}
              <p className="text-gray-700 italic leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

