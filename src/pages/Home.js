import React from 'react'
import Hero from '../components/Hero';
import { FeatureCard, TrailCard, EventCard } from '../components/Card';
import { faMountain, faUsers, faLeaf, faStar } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        backgroundImage="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="Discover Syros on Foot"
        subtitle="Experience the authentic beauty of Syros island through carefully curated hiking trails that reveal hidden gems and breathtaking panoramic views"
        primaryButton={{
          text: "Explore Trails",
          icon: "fas fa-route",
          href: "#our-story" 
        }}
        secondaryButton={{
          text: "Join Events",
          icon: "fas fa-calendar",
          href: "#team"
        }}
      />

      {/* Features Section */}
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <FeatureCard
              icon={faMountain}
              title="Expert Guided Hikes"
              description="Join our certified guides with 15+ years of experience for safe and enriching hiking adventures across Syros' diverse landscapes."
              linkText="Learn More"
              linkHref="/about"
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <FeatureCard
              icon={faUsers}
              title="Vibrant Community"
              description="Connect with like-minded adventurers in our welcoming community of 500+ active members who share a passion for nature."
              linkText="Join Us"
              linkHref="/community"
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <FeatureCard
              icon={faLeaf}
              title="Nature Immersion"
              description="Discover Syros' unique Mediterranean ecosystem, rare endemic plants, and pristine landscapes away from the crowds."
              linkText="Explore"
              linkHref="/nature"
            />
          </div>
        </div>
      </div>

      {/* Featured Trails Section */}
      <div className="container py-5">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Featured Hiking Trails</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '600px' }}>
            Explore our most beloved trails, each offering unique perspectives of Syros' natural beauty and cultural heritage.
          </p>
        </div>

        {/* Trail Cards Row */}
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <TrailCard
              title="Ano Syros Medieval Trail"
              description="Explore the medieval settlement of Ano Syros with panoramic views of the Aegean Sea and discover centuries-old architecture."
              image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center"
              difficulty="Easy"
              distance="3.5 km"
              elevation="200 m"
              rating="4.8"
              duration="2h"
              onExplore={() => console.log('Explore clicked')}
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <TrailCard
              title="Kini to Delfini Coastal Path"
              description="A stunning coastal trail connecting two of Syros' most picturesque beaches with crystal-clear waters and dramatic cliffs."
              image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center"
              difficulty="Moderate"
              distance="3 km"
              elevation="120 m"
              rating="4.9"
              duration="3h"
              onExplore={() => console.log('Explore clicked')}
            />
          </div>

          <div className="col-lg-4 col-md-6">
            <TrailCard
              title="Ermoupoli Heritage Trail"
              description="Discover the architectural and cultural heritage of Syros' neoclassical capital with its elegant mansions and historic squares."
              image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center"
              difficulty="Easy"
              distance="2.5 km"
              elevation="80 m"
              rating="4.7"
              duration="1.5h"
              onExplore={() => console.log('Explore clicked')}
            />
          </div>
        </div>

        {/* View All Trails Button */}
        <div className="text-center mt-5">
          <a href="/routes" className="btn btn-outline-primary btn-lg px-4 py-3">
            <i className="fas fa-map me-2"></i> View All Trails
          </a>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <section className="events-section py-5">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <h2 className="section-title display-5 fw-bold mb-3">Upcoming Adventures</h2>
            <p className="section-subtitle text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Join our community events and discover Syros with fellow hiking enthusiasts
            </p>
          </div>

          {/* Event Cards Row */}
          <div className="row g-4">
            {/* First Event Card */}
            <div className="col-lg-6">
              <EventCard
                title="Full Moon Hike to Agia Pakou"
                description="Experience the magic of Syros under the full moon with this special evening hike to the historic Agia Pakou chapel, featuring stunning night views."
                date="June 24, 2024"
                time="19:30"
                location="Starting point: Ermoupoli Town Square"
                participants="Max 15 participants"
                image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop&crop=center"
                difficulty="Easy"
                onJoin={() => console.log('Join Full Moon Hike')}
              />
            </div>

            {/* Second Event Card */}
            <div className="col-lg-6">
              <EventCard
                title="Family-Friendly Hike & Picnic"
                description="A gentle hike perfect for all ages, followed by a traditional Greek picnic featuring local Syros delicacies and homemade treats."
                date="July 2, 2024"
                time="09:00"
                location="Starting point: Galissas Beach"
                participants="All ages welcome"
                image="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=300&fit=crop&crop=center"
                difficulty="Easy"
                onJoin={() => console.log('Join Family Hike')}
              />
            </div>
          </div>

          {/* View All Events Button */}
          <div className="text-center mt-5">
            <a href="/events" className="btn btn-outline-primary btn-lg px-4 py-3 ">
              <i className="far fa-calendar-plus me-2"></i>View All Events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;