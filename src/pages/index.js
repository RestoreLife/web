import React from 'react';
import Layout from '../components/Layout';
import VideoSection from '../components/VideoSection';
import MissionSection from '../components/MissionSection';
import AboutSection from '../components/AboutSection';
import SupportSection from '../components/SupportSection';

export default function HomePage() {
  return (
    <Layout>
      <VideoSection />
      <MissionSection />
      <AboutSection />
      <SupportSection />
    </Layout>
  );
}