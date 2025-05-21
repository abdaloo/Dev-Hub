import ProfileCard from "../components/ProfileCard";

const About = () => {
  return (
    <main className="bg-[#E1EEBC] py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#2D3748] mb-6">
            Welcome to DevHub
          </h1>
          <p className="text-lg text-[#4A5568]">
            Connecting developers to the leading software houses in Peshawar.
            Explore opportunities, grow your network, and advance your career.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#2D3748] mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-[#4A5568]">
            DevHub is dedicated to bridging the gap between talented developers
            and leading software houses in Peshawar. We aim to provide a
            platform that fosters career growth, networking, and collaboration
            in the tech industry.
          </p>
        </section>

        {/* Key Features */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-semibold text-[#2D3748] text-center mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 text-[#38B2AC] mr-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <div>
                <h3 className="text-2xl font-semibold text-[#2D3748]">
                  Explore Software Houses
                </h3>
                <p className="text-lg text-[#4A5568]">
                  Search and discover verified software companies in Peshawar
                  with up-to-date contact details.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 text-[#38B2AC] mr-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <div>
                <h3 className="text-2xl font-semibold text-[#2D3748]">
                  Career Opportunities
                </h3>
                <p className="text-lg text-[#4A5568]">
                  Browse job listings from the best software houses and take the
                  next step in your career.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 text-[#38B2AC] mr-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <div>
                <h3 className="text-2xl font-semibold text-[#2D3748]">
                  Community Engagement
                </h3>
                <p className="text-lg text-[#4A5568]">
                  Engage with a community of tech enthusiasts, developers, and
                  recruiters to expand your network.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8 text-[#38B2AC] mr-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <div>
                <h3 className="text-2xl font-semibold text-[#2D3748]">
                  Verified Listings
                </h3>
                <p className="text-lg text-[#4A5568]">
                  All software houses listed are verified, ensuring accurate and
                  reliable information for your benefit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Team Section */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-[#2D3748] mb-6">
            Meet the Team
          </h2>
          <p className="text-lg text-[#4A5568] mb-6">
            DevHub was created by a passionate team of developers and
            entrepreneurs who believe in the power of community-driven growth.
            We strive to make Peshawar’s tech ecosystem more accessible and
            connected.
          </p>
          <ProfileCard />
        </section>

        {/* Future Plans Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-[#2D3748] mb-6">
            Our Future Plans
          </h2>
          <p className="text-lg text-[#4A5568]">
            We plan to expand DevHub to more cities and continue enhancing our
            platform with new features like job boards, networking tools, and
            more resources for developers to grow in their careers.
          </p>
        </section>

        {/* Contact Information */}
        <section className="text-center mt-12">
          <h2 className="text-3xl font-semibold text-[#2D3748] mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-[#4A5568]">
            Have questions or business inquiries? Reach out to us at{" "}
            <a
              href="mailto:abdalhussain5790@gmail.com"
              className="text-[#38B2AC]"
            >
              abdalhussain5790@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
};

export default About;
