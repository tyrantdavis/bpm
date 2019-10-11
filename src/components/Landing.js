import React from 'react';

const Landing = () => (
  <main className="landing">
    <h1 className="hero-title">Music Your Way!.</h1>

    <article className="selling-points">
      <section className="point">
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </section>
      <section className="point">
        <h2 className="point-title">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </section>
      <section className="point">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </section>
    </article>
  </main>
);

export default Landing;