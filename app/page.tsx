'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { modelProducts, productCategories, products, whatsappUrl } from '@/app/lib/products';

export default function Home() {
  const router = useRouter();
  const [cart, setCart] = useState<number[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [imageIndexes, setImageIndexes] = useState<Record<number, number>>({});
  const visibleProducts = filter === 'All' ? products : products.filter((product) => product.category === filter);
  const cartProducts = useMemo(() => cart.map((id) => products.find((product) => product.id === id)!).filter(Boolean), [cart]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('revealed')), { threshold: .12 });
    document.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const warmImages = window.setTimeout(() => {
      for (const imageSource of new Set(products.map((product) => product.image))) {
        const image = new window.Image();
        image.decoding = 'async';
        image.src = imageSource;
      }
    }, 700);
    return () => window.clearTimeout(warmImages);
  }, []);

  useEffect(() => {
    document.body.style.overflow = cartOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [cartOpen]);

  const addToBag = (id: number) => { setCart((current) => [...current, id]); setCartOpen(true); };
  const orderText = `Hello Regal Embroidery, I would like to enquire about:\n\n${cartProducts.map((product) => `• ${product.name} — ₹${product.price.toLocaleString('en-IN')}`).join('\n')}\n\nPlease share availability, fitting and delivery details.`;
  const checkoutHref = `https://wa.me/919308074781?text=${encodeURIComponent(orderText)}`;

  return (
    <main id="top">
      <div className="announcement">Complimentary shipping across India on orders above ₹5,000</div>
      <nav className="shop-nav shell" aria-label="Main navigation">
        <a className="shop-brand" href="#top"><img className="brand-wordmark" src="/brand/regal-wordmark-mark.png" alt="Regal" /><small>Karigari · Shaadi · Jashn</small></a>
        <div className="shop-links"><a href="#edit">The edit</a><a href="#shop">Collection</a><a href="#story">Our karigari</a></div>
        <button className="bag-button" type="button" aria-label="Open shopping bag" onClick={() => setCartOpen(true)}>Bag <span>{cart.length}</span></button>
      </nav>

      <section className="shop-hero">
        <div className="hero-frame" aria-hidden="true"><span /><i><img src="/brand/regal-monogram-mark.png" alt="" /></i><span /></div>
        <p className="hero-side-note hero-side-left">Indian occasionwear · Est. 2026</p>
        <p className="hero-side-note hero-side-right">Designed with intention · Made with patience</p>
        <div className="hero-message"><p className="eyebrow">An ode to Indian occasionwear</p><h1>Draped in tradition.<br /><em>Made to be remembered.</em></h1><p>Considered silhouettes and intricate hand embroidery for weddings, celebrations and every beautiful moment in between.</p><a className="primary-cta" href="#shop">Discover the collection <span>↓</span></a></div>
        <div className="hero-scroll"><span /> Scroll to discover</div>
      </section>

      <section className="marquee" aria-label="Brand values"><div>Hand embroidered ✦ Made in India ✦ Shaadi ready ✦ Custom fitting available ✦ Hand embroidered ✦ Made in India ✦ Shaadi ready ✦</div></section>

      <section className="shop-intro shell" id="edit" data-reveal><p className="section-label">Nayi collection</p><h2>Made for every<br /><em>main character.</em></h2><p>Statement silhouettes, generous ghera and hand-done zari—pieces that arrive ready to become part of your favourite memories.</p></section>

      <section className="model-edit shell" aria-labelledby="occasion-edit-title" data-reveal>
        <div className="model-edit-heading"><p className="section-label">The occasion edit</p><h2 id="occasion-edit-title">Three ways to make an entrance.</h2></div>
        <div className="model-grid">
          {modelProducts.map((product) => <article className="model-card" key={product.id}><Link href={`/products/${product.slug}`}><img src={product.image} alt={product.name} width="900" height="1200" loading="eager" /><div><p>{product.category} · {product.colour}</p><h3>{product.name}</h3><strong>₹{product.price.toLocaleString('en-IN')}</strong></div></Link><a className="model-whatsapp" href={whatsappUrl(product)} target="_blank" rel="noreferrer">Chat on WhatsApp <span>↗</span></a></article>)}
        </div>
      </section>

      <section className="product-section shell" id="shop">
        <div className="product-toolbar"><p>{visibleProducts.length} handcrafted pieces</p><div>{productCategories.map((item) => <button type="button" key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div></div>
        <div className="product-grid">
          {visibleProducts.map((product, index) => {
            const activeImage = imageIndexes[product.id] ?? 0;
            return <article className="product-card product-card-link" key={product.id} role="link" tabIndex={0} aria-label={`View ${product.name}`} onClick={(event) => { if (!(event.target as HTMLElement).closest('a, button')) router.push(`/products/${product.slug}`); }} onKeyDown={(event) => { if (event.key === 'Enter' && event.target === event.currentTarget) router.push(`/products/${product.slug}`); }}>
              <div className="product-image">
                <Link className="product-image-link" href={`/products/${product.slug}`} aria-label={`View ${product.name}`}><img src={product.gallery[activeImage]} alt={`${product.name}, view ${activeImage + 1} of ${product.gallery.length}`} width="900" height="1200" loading={index < 4 ? 'eager' : 'lazy'} decoding="async" /></Link>
                <span className="piece-number">{String(product.id).padStart(2, '0')}</span>
                {product.gallery.length > 1 && <><button className="gallery-arrow gallery-prev" type="button" aria-label={`Previous photo of ${product.name}`} onClick={() => setImageIndexes((current) => ({ ...current, [product.id]: (activeImage - 1 + product.gallery.length) % product.gallery.length }))}>‹</button><button className="gallery-arrow gallery-next" type="button" aria-label={`Next photo of ${product.name}`} onClick={() => setImageIndexes((current) => ({ ...current, [product.id]: (activeImage + 1) % product.gallery.length }))}>›</button><div className="gallery-dots" aria-label={`${product.gallery.length} product photos`}>{product.gallery.map((_, photoIndex) => <button type="button" key={photoIndex} className={photoIndex === activeImage ? 'active' : ''} aria-label={`Show photo ${photoIndex + 1} of ${product.name}`} onClick={() => setImageIndexes((current) => ({ ...current, [product.id]: photoIndex }))} />)}</div></>}
              </div>
              <div className="product-info"><div><p>{product.category} · {product.colour}</p><h3><Link href={`/products/${product.slug}`}>{product.name}</Link></h3><strong>₹{product.price.toLocaleString('en-IN')}</strong><div className="product-actions"><Link href={`/products/${product.slug}`}>View product</Link><a href={whatsappUrl(product)} target="_blank" rel="noreferrer">WhatsApp</a></div></div><button type="button" aria-label={`Add ${product.name} to bag`} onClick={() => addToBag(product.id)}>+</button></div>
            </article>;
          })}
        </div>
      </section>

      <section className="story-strip" id="story"><div className="story-photo"><img src="/products/coral.jpeg" alt="Coral hand embroidered lehenga" /></div><div className="story-copy"><p className="section-label">Dil se, haath se</p><h2>Karigari that<br />takes its <em>time.</em></h2><p>From the first chalk line to the last hand-finished tassel, every Regal piece celebrates the patience and precision of Indian craft.</p><a href="#shop">Meet the collection <span>→</span></a></div><div className="story-motif" aria-hidden="true"><img src="/brand/regal-monogram-mark.png" alt="" /></div></section>

      <section className="service-row shell"><div><span>01</span><h3>Custom fitting</h3><p>Made to your measurements</p></div><div><span>02</span><h3>India-wide delivery</h3><p>Carefully packed &amp; tracked</p></div><div><span>03</span><h3>Personal styling</h3><p>Talk to us before you order</p></div></section>

      <footer className="shop-footer"><div className="shell footer-top"><div><a className="footer-logo brand-footer" href="#top"><img src="/brand/regal-wordmark-mark.png" alt="Regal" /></a><p>For shaadis, sangeets and all the stories in between.</p></div><div><b>Shop</b><a href="#shop">Collection</a><a href="#shop">Lehengas</a><a href="#shop">Wedding trousseau</a></div><div><b>Help</b><a href="https://wa.me/919308074781" target="_blank" rel="noreferrer">Chat on WhatsApp</a><a href="#story">Our story</a><a href="#shop">Shipping</a></div><div><b>Stay in the loop</b><p>New drops, styling notes and a little shaadi sparkle.</p><a className="email-link" href="https://wa.me/919308074781" target="_blank" rel="noreferrer">+91 93080 74781 ↗</a></div></div><div className="shell footer-bottom"><span>© 2026 Regal Embroidery</span><span>Made with mohabbat in India</span><span>regalembroidery.in</span></div></footer>

      <button className={`cart-backdrop ${cartOpen ? 'open' : ''}`} aria-label="Close shopping bag" onClick={() => setCartOpen(false)} />
      <aside className={`cart-drawer ${cartOpen ? 'open' : ''}`} aria-label="Shopping bag" aria-hidden={!cartOpen}><div className="cart-head"><div><p>Your shopping bag</p><h2>{cart.length ? `${cart.length} ${cart.length === 1 ? 'piece' : 'pieces'}` : 'Abhi khaali hai'}</h2></div><button onClick={() => setCartOpen(false)} aria-label="Close shopping bag">×</button></div><div className="cart-items">{cart.length === 0 ? <div className="empty-cart"><span><img src="/brand/regal-monogram-mark.png" alt="" /></span><p>Your celebration look is waiting.</p><button onClick={() => { setCartOpen(false); document.querySelector('#shop')?.scrollIntoView(); }}>Explore the collection</button></div> : cartProducts.map((product, index) => <div className="cart-item" key={`${product.id}-${index}`}><img src={product.image} alt="" /><div><small>{product.colour}</small><h3>{product.name}</h3><strong>₹{product.price.toLocaleString('en-IN')}</strong><button onClick={() => setCart((current) => current.filter((_, itemIndex) => itemIndex !== index))}>Remove</button></div></div>)}</div>{cart.length > 0 && <div className="cart-summary"><div><span>Subtotal</span><strong>₹{cartProducts.reduce((total, product) => total + product.price, 0).toLocaleString('en-IN')}</strong></div><p>Fitting and delivery details will be confirmed personally.</p><a href={checkoutHref} target="_blank" rel="noreferrer">Chat on WhatsApp <span>↗</span></a></div>}</aside>
    </main>
  );
}
