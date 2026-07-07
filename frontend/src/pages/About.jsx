import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const highlights = [
    {
      title: 'Curated Products',
      text: 'We handpick quality items that blend style, durability, and everyday usefulness.'
    },
    {
      title: 'Fast & Reliable',
      text: 'Enjoy smooth checkout, secure payments, and quick delivery for a stress-free experience.'
    },
    {
      title: 'Customer First',
      text: 'Our support team is here to help with every step, from shopping to delivery and returns.'
    }
  ];

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <p style={styles.eyebrow}>About ShopNest</p>
          <h1 style={styles.title}>Your go-to destination for modern essentials.</h1>
          <p style={styles.description}>
            ShopNest is a premium e-commerce experience built for shoppers who value quality,
            convenience, and thoughtful design. We bring together the best products in one place,
            with a smooth shopping journey from browse to checkout.
          </p>
          <div style={styles.actions}>
            <Link to="/shop" className="btn">Explore Products</Link>
            
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.cardGrid}>
          {highlights.map((item) => (
            <div key={item.title} style={styles.card}>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <div style={styles.storyBox}>
          <h2 style={styles.storyTitle}>Why shoppers love ShopNest</h2>
          <p style={styles.storyText}>
            We believe shopping should feel inspiring, effortless, and trustworthy. That is why
            we focus on a polished experience, transparent service, and products that genuinely
            improve everyday life.
          </p>
          <div style={styles.statsRow}>
            <div style={styles.statBox}><strong>10k+</strong><span>happy customers</span></div>
            <div style={styles.statBox}><strong>4.9/5</strong><span>average rating</span></div>
            <div style={styles.statBox}><strong>24/7</strong><span>support access</span></div>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  hero: {
    background: 'linear-gradient(135deg, rgba(249,115,22,0.18), rgba(255,255,255,0.04))',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '24px',
    padding: '48px 32px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.22)'
  },
  heroContent: {
    maxWidth: '760px'
  },
  eyebrow: {
    color: '#fb923c',
    fontSize: '0.9rem',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    fontWeight: 700,
    marginBottom: '12px'
  },
  title: {
    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
    marginBottom: '16px',
    color: '#fff'
  },
  description: {
    color: '#d4d4d8',
    fontSize: '1.05rem',
    lineHeight: 1.7,
    marginBottom: '24px'
  },
  actions: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
    alignItems: 'center'
  },
  secondaryLink: {
    color: '#fbbf24',
    fontWeight: 600
  },
  section: {
    marginTop: '8px'
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '18px'
  },
  card: {
    background: '#18181b',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '18px',
    padding: '24px',
    minHeight: '160px'
  },
  cardTitle: {
    color: '#fff',
    marginBottom: '10px',
    fontSize: '1.1rem'
  },
  cardText: {
    color: '#a1a1aa',
    lineHeight: 1.6
  },
  storyBox: {
    background: '#111827',
    borderRadius: '22px',
    padding: '32px',
    border: '1px solid rgba(255,255,255,0.08)'
  },
  storyTitle: {
    color: '#fff',
    marginBottom: '12px'
  },
  storyText: {
    color: '#d4d4d8',
    lineHeight: 1.7,
    marginBottom: '24px'
  },
  statsRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '14px'
  },
  statBox: {
    background: 'rgba(255,255,255,0.04)',
    borderRadius: '14px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    color: '#f5f5f5'
  }
};

export default About;