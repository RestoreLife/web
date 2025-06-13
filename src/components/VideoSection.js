import React from 'react';

export default function VideoSection() {
  return (
    <section id="video" className="relative w-full h-screen overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/KRgbmOz0FQk?autoplay=0&mute=1&controls=0&loop=1&playlist=KRgbmOz0FQk"
        title="Restore life video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </section>
  );
}