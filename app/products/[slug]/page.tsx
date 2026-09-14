import Link from 'next/link';
import { notFound } from 'next/navigation';
import { productBySlug, products, whatsappUrl } from '@/app/lib/products';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productBySlug(slug);
  if (!product) notFound();

  return (
    <main className="product-page">
      <nav className="detail-nav shell" aria-label="Product navigation">
        <Link className="detail-brand" href="/"><span>र</span> Regal Embroidery</Link>
        <Link href="/#shop">← Back to collection</Link>
      </nav>
      <section className="product-detail shell">
        <div className="detail-gallery">
          {product.gallery.map((image, index) => <img key={image} src={image} alt={`${product.name}, view ${index + 1}`} width="960" height="1280" loading={index === 0 ? 'eager' : 'lazy'} />)}
        </div>
        <aside className="detail-copy">
          <p className="section-label">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="detail-colour">{product.colour}</p>
          <p className="detail-description">{product.description}</p>
          <strong className="detail-price">₹{product.price.toLocaleString('en-IN')}</strong>
          <p className="dummy-price-note">Sample price — final details will be confirmed personally.</p>
          <a className="detail-whatsapp" href={whatsappUrl(product)} target="_blank" rel="noreferrer">Chat on WhatsApp <span>↗</span></a>
          <dl className="detail-notes"><div><dt>Fitting</dt><dd>Custom fitting available for outfit pieces.</dd></div><div><dt>Delivery</dt><dd>India-wide delivery with personal order support.</dd></div></dl>
        </aside>
      </section>
    </main>
  );
}
