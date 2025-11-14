export default function MarketInsights() {
  const insights = [
    {
      category: "Market Report",
      title:
        "Morris County NJ Homes: Complete Guide to Towns & Schools",
      description:
        "Morris County NJ homes average $696K with top schools, 35-min NYC commutes. Guide covers Morristown, Madison, Chatham, property taxes, and buying strategies.",
    },
    {
      category: "Investment Guide",
      title:
        "Townhouses vs Condos vs Single-Family Homes NJ: Analysis",
      description:
        "Compare NJ townhouses ($365K), condos ($362K), and single-family homes ($434K). HOA fees, appreciation rates, maintenance costs, and lifestyle factors analyzed.",
    },
    {
      category: "Market Report",
      title: "New Construction Homes Under $400K in New Jersey",
      description:
        "Find new homes under $400K in NJ: D.R. Horton, Ryan Homes, Lennar developments in Camden, Atlantic, Burlington counties. Builder incentives save $10-30K.",
    },
    {
      category: "Market Report",
      title:
        "The Complete New Jersey Real Estate Market Guide 2025",
      description:
        "The Complete New Jersey Real Estate Market Guide 2025: Counties, Trends, and Buyer Strategies",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Market Insights & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Informed perspectives and essential resources for navigating New
            Jersey&apos;s luxury real estate landscape in Cheryl&apos;s service areas.
          </p>
        </div>

        {/* 
          TODO: iHomeFinder Integration - Blog/Market Reports
          
          Consider integrating iHomeFinder's Market Reports feature or custom blog
          
          Integration Options:
          1. iHomeFinder Market Statistics widget
          2. Custom blog integration with MLS data
          3. Community pages with local market data
          
          Features to Include:
          - Average home prices by area
          - Days on market statistics
          - Price trends and charts
          - School district information
          - Neighborhood guides
        */}

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Insight Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>

              {/* Insight Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-semibold rounded-full mb-3">
                  {insight.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {insight.title}
                </h3>
                <p className="text-gray-600 mb-4">{insight.description}</p>
                <a
                  href="#"
                  className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center group"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg"
          >
            View All Insights
          </a>
        </div>
      </div>
    </section>
  );
}

