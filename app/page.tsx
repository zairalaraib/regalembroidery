'use client';

import { useEffect, useMemo, useState } from 'react';

const products = [
  { id: 1, name: 'Gulabo Rose Lehenga', colour: 'Rose pink', image: '/products/rose-pink.jpeg', category: 'Lehengas' },
  { id: 2, name: 'Rani Bagh Lehenga', colour: 'Rani red', image: '/products/rani-red.jpeg', category: 'Lehengas' },
  { id: 3, name: 'Gulabi Sitara Lehenga', colour: 'Gulabi pink', image: '/products/gulabi-pink.jpeg', category: 'Lehengas' },
  { id: 4, name: 'Mehroon Zari Sharara', colour: 'Deep maroon', image: '/products/mehroon.jpeg', category: 'Sharara' },
  { id: 5, name: 'Genda Phool Lehenga', colour: 'Coral orange', image: '/products/coral.jpeg', category: 'Lehengas' },
  { id: 6, name: 'Gulab Noor Lehenga', colour: 'Pink & ivory', image: '/products/gulab-ivory.jpeg', category: 'Lehengas' },
  { id: 7, name: 'Jamuni Jaal Lehenga', colour: 'Royal plum', image: '/products/jamuni.jpeg', category: 'Lehengas' },
  { id: 8, name: 'Laal Ishq Lehenga', colour: 'Bridal red', image: '/products/laal.jpeg', category: 'Lehengas' },
];

export default function Home() {
  const [cart, setCart] = useState<number[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const visibleProducts = filter === 'All' ? products : products.filter((product) => product.category === filter);
  const cartProducts = useMemo(() => cart.map((id) => products.find((product) => product.id === id)!), [cart]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('revealed')), { threshold: .12 });
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
    const onScroll = () => document.documentElement.style.setProperty('--scroll-y', `${Math.min(window.scrollY, 620)}px`);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [cartOpen]);

  const addToCart = (id: number) => {
    setCart((current) => [...current, id]);
    setCartOpen(true);
  };

  const checkoutHref = `mailto:hello@regalembroidery.in?subject=${encodeURIComponent('Regal Embroidery order enquiry')}&body=${encodeURIComponent(`Hello, I would like to order:\n\n${cartProducts.map((product) => `• ${product.name} — ₹7,000`).join('\n')}\n\nTotal: ₹${(cart.length * 7000).toLocaleString('en-IN')}\n\nPlease share fitting and delivery details.`)}`;

  return (
    <main id="top">
      <div className="announcement">Complimentary shipping across India on orders above ₹5,000</div>
      <nav className="shop-nav shell" aria-label="Main navigation">
        <a className="shop-brand" href="#top"><span>र</span><b>Regal Embroidery</b><small>Karigari · Shaadi · Jashn</small></a>
        <div className="shop-links"><a href="#new">New arrivals</a><a href="#shop">Lehengas</a><a href="#story">Our karigari</a></div>
        <button className="bag-button" type="button" aria-label="Open shopping bag" onClick={() => setCartOpen(true)}>Bag <span>{cart.length}</span></button>
      </nav>

      <section className="shop-hero">
        <div className="hero-sun" aria-hidden="true">✦</div>
        <div className="hero-words"><span>शादी</span><span>जश्न</span><span>इश्क़</span></div>
        <div className="hero-product hero-product-left"><img src="/products/jamuni.jpeg" alt="Royal plum embroidered lehenga" /></div>
        <div className="hero-product hero-product-main"><img src="/products/laal.jpeg" alt="Bridal red embroidered lehenga" /></div>
        <div className="hero-product hero-product-right"><img src="/products/gulabi-pink.jpeg" alt="Pink embroidered lehenga" /></div>
        <div className="hero-message">
          <p className="eyebrow">Regal Shaadi Edit · 2026</p>
          <h1>Har jashn,<br/><em>thoda aur regal.</em></h1>
          <p>Hand-embroidered lehengas made for the music, colour and beautiful chaos of an Indian celebration.</p>
          <a className="primary-cta" href="#shop">Shop the collection <span>↓</span></a>
        </div>
        <div className="hero-scroll"><span></span> Scroll to discover</div>
      </section>

      <section className="marquee" aria-label="Brand values"><div>Hand embroidered ✦ Made in India ✦ Shaadi ready ✦ Custom fitting available ✦ Hand embroidered ✦ Made in India ✦ Shaadi ready ✦</div></section>

      <section className="shop-intro shell" id="new" data-reveal>
        <p className="section-label">Nayi collection</p>
        <h2>Made for every<br/><em>main character.</em></h2>
        <p>Statement silhouettes, generous ghera and hand-done zari—pieces that arrive ready to become part of your favourite memories.</p>
      </section>

      <section className="product-section shell" id="shop">
        <div className="product-toolbar"><p>{visibleProducts.length} heirloom pieces</p><div>{['All','Lehengas','Sharara'].map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
        <div className="product-grid">
          {visibleProducts.map((product, index) => (
            <article className="product-card" key={product.id} data-reveal style={{'--delay': `${(index % 4) * 70}ms`} as React.CSSProperties}>
              <a className="product-image" href="#shop" aria-label={`View ${product.name}`}><img src={product.image} alt={product.name}/><span className="piece-number">0{product.id}</span><span className="quick-view">View details</span></a>
              <div className="product-info"><div><p>{product.colour}</p><h3>{product.name}</h3><strong>₹7,000</strong></div><button type="button" aria-label={`Add ${product.name} to bag`} onClick={() => addToCart(product.id)}>+</button></div>
            </article>
          ))}
        </div>
      </section>

      <section className="story-strip" id="story"><div className="story-photo"><img src="/products/coral.jpeg" alt="Coral hand embroidered lehenga"/></div><div className="story-copy"><p className="section-label">Dil se, haath se</p><h2>Karigari that<br/>takes its <em>time.</em></h2><p>From the first chalk line to the last hand-finished tassel, every Regal piece celebrates the patience and precision of Indian craft.</p><a href="#shop">Meet the collection <span>→</span></a></div><div className="story-motif" aria-hidden="true">र</div></section>

      <section className="service-row shell"><div><span>01</span><h3>Custom fitting</h3><p>Made to your measurements</p></div><div><span>02</span><h3>India-wide delivery</h3><p>Carefully packed & tracked</p></div><div><span>03</span><h3>Personal styling</h3><p>Talk to us before you order</p></div></section>

      <footer className="shop-footer"><div className="shell footer-top"><div><a className="footer-logo" href="#top">Regal Embroidery</a><p>For shaadis, sangeets and all the stories in between.</p></div><div><b>Shop</b><a href="#shop">New arrivals</a><a href="#shop">Lehengas</a><a href="#shop">Wedding edit</a></div><div><b>Help</b><a href="mailto:hello@regalembroidery.in">Contact us</a><a href="#story">Our story</a><a href="#shop">Shipping</a></div><div><b>Stay in the loop</b><p>New drops, styling notes and a little shaadi sparkle.</p><a className="email-link" href="mailto:hello@regalembroidery.in">hello@regalembroidery.in ↗</a></div></div><div className="shell footer-bottom"><span>© 2026 Regal Embroidery</span><span>Made with mohabbat in India</span><span>regalembroidery.in</span></div></footer>

      <button className={`cart-backdrop ${cartOpen ? 'open' : ''}`} aria-label="Close shopping bag" onClick={() => setCartOpen(false)} />
      <aside className={`cart-drawer ${cartOpen ? 'open' : ''}`} aria-label="Shopping bag" aria-hidden={!cartOpen}>
        <div className="cart-head"><div><p>Your shopping bag</p><h2>{cart.length ? `${cart.length} ${cart.length === 1 ? 'piece' : 'pieces'}` : 'Abhi khaali hai'}</h2></div><button onClick={() => setCartOpen(false)} aria-label="Close shopping bag">×</button></div>
        <div className="cart-items">
          {cart.length === 0 ? <div className="empty-cart"><span>र</span><p>Your celebration look is waiting.</p><button onClick={() => { setCartOpen(false); document.querySelector('#shop')?.scrollIntoView(); }}>Explore the collection</button></div> : cartProducts.map((product, index) => <div className="cart-item" key={`${product.id}-${index}`}><img src={product.image} alt=""/><div><small>{product.colour}</small><h3>{product.name}</h3><strong>₹7,000</strong><button onClick={() => setCart((current) => current.filter((_, itemIndex) => itemIndex !== index))}>Remove</button></div></div>)}
        </div>
        {cart.length > 0 && <div className="cart-summary"><div><span>Subtotal</span><strong>₹{(cart.length * 7000).toLocaleString('en-IN')}</strong></div><p>Fitting and delivery details will be confirmed personally.</p><a href={checkoutHref}>Send order enquiry <span>↗</span></a></div>}
      </aside>
    </main>
  );
}
