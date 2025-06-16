import React from 'react';
import Hero from '../components/Hero';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faHeart, faShield } from '@fortawesome/free-solid-svg-icons';
import { FeatureCard, PersonCard } from '../components/Card';
import { faUsers, faLeaf, } from '@fortawesome/free-solid-svg-icons';

const About = () => {


  return (
    <div>
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center"
        title="About Syros Hiking Trails"
        subtitle="Discover the passion behind our mission to showcase the natural beauty and cultural heritage of Syros through unforgettable hiking experiences"
        primaryButton={{
          text: "Our Journey",
          icon: "fas fa-book-open",
          href: "#our-story"
        }}
        secondaryButton={{
          text: "Meet the Team",
          icon: "fas fa-users",
          href: "#team"
        }}
      />

      {/* Our Story Section */}
      <section id="our-story" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title display-5 fw-bold mb-3">The Story Behind Our Passion</h2>
            <p className="section-subtitle text-muted mx-auto" style={{ maxWidth: '600px' }}>
              From humble beginnings to becoming Syros' premier hiking community
            </p>
          </div>

          <div className="row align-items-center g-5">
            {/* Text Content */}
            <div className="col-lg-6">
              <div className="story-content">

                <div className="story-highlight mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="story-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                      <FontAwesomeIcon icon={faSeedling} />
                    </div>
                    <div>
                      <h4 className="fw-bold mb-1">2018 - The Beginning</h4>
                      <p className="text-muted mb-0">Founded by passionate local hikers</p>
                    </div>
                  </div>
                  <p className="mb-4">
                    What started as informal weekend hikes among friends has grown into a comprehensive platform that connects adventurers with the hidden gems of Syros.
                    We believe that every trail tells a story, and every step reveals a new perspective of this beautiful Cycladic island.
                  </p>
                </div>

                {/* Story Highlight - Mission */}
                <div className="story-highlight mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="story-icon bg-success text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
                      <FontAwesomeIcon icon={faHeart} />
                    </div>
                    <div>
                      <h4 className="fw-bold mb-1">Our Mission</h4>
                      <p className="text-muted mb-0">Sustainable tourism & community support</p>
                    </div>
                  </div>
                  <p className="mb-0">
                    Our mission is to promote sustainable tourism while preserving the natural environment and supporting local communities.
                    Through our carefully curated trails and guided experiences, we aim to create lasting memories while fostering a deeper appreciation for Syros' natural and cultural treasures.
                  </p>
                </div>
              </div>
            </div>

            {/* Image + Stats */}
            <div className="col-lg-6">
              <div className="story-image-container position-relative">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center"
                  alt="Syros Landscape"
                  className="img-fluid rounded-4 shadow-lg"
                />

                {/* Stats Box */}
                <div className="story-stats position-absolute bottom-0 start-0 m-4 bg-white rounded-3 p-3 shadow">
                  <div className="d-flex align-items-center">
                    <div className="text-center me-3">
                      <div className="fw-bold text-primary fs-4">
                        {new Date().getFullYear() - 2005}+
                      </div>
                      <div className="small text-muted">Years</div>
                    </div>
                    <div className="text-center me-3">
                      <div className="fw-bold text-primary fs-4">20+</div>
                      <div className="small text-muted">Trails</div>
                    </div>
                    <div className="text-center">
                      <div className="fw-bold text-primary fs-4">200+</div>
                      <div className="small text-muted">Hikers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title display-5 fw-bold mb-3">What Drives Us Forward</h2>
          <p className="section-subtitle text-muted mx-auto" style={{ maxWidth: '600px' }}>
            The principles that guide everything we do and shape our approach to sustainable hiking tourism
          </p>
        </div>

        {/* Feature Cards */}
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <FeatureCard
              icon={faLeaf}
              title="Environmental Stewardship"
              description="We are committed to preserving Syros' natural beauty for future generations through responsible hiking practices and environmental education."
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <FeatureCard
              icon={faUsers}
              title="Community Connection"
              description="We foster meaningful connections between visitors and local communities, supporting local businesses and cultural traditions."
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <FeatureCard
              icon={faShield}
              title="Safety First"
              description="Your safety is our top priority. All our trails are carefully maintained and our guides are certified in wilderness first aid."
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <section id="team" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title display-5 fw-bold mb-3">Our Expert Team</h2>
            <p className="section-subtitle text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Meet the passionate individuals who make every hiking experience unforgettable.
            </p>
          </div>

          <div className="row g-4">
            {/* Team Member 1 */}
            <div className="col-lg-4 col-md-6">
  <PersonCard
    name="Nikos Papadopoulos"
    role="Founder & Lead Guide"
    bio="Born and raised in Syros, Nikos has been exploring the island's trails for over 20 years..."
    imageUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    socialLinks={{
      facebook: "#",
      instagram: "#",
      linkedin: "#"
    }}
  />
</div>

            {/* Team Member 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Maria Kontou"
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <PersonCard
                    name="Maria Kontou"
                    role="Senior Naturalist"
                    bio="Maria brings the island’s rich biodiversity to life with her insightful commentary."
                    socialLinks={{
                      facebook: "#",
                      instagram: "#"
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Dimitris Antoniou"
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <PersonCard
                    name="Dimitris Antoniou"
                    role="Adventure Photographer"
                    bio="Dimitris captures the beauty of Syros from unique perspectives and shares it with the world."
                    socialLinks={{
                      instagram: "#",
                      linkedin: "#"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div >
  );
};

export default About;