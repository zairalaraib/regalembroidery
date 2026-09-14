export type ProductCategory = 'Lehengas' | 'Sharara Sets' | 'Wedding Trousseau' | 'Quran Covers' | 'Embroidered Fabrics';

export type Product = {
  id: number;
  slug: string;
  name: string;
  colour: string;
  category: ProductCategory;
  image: string;
  gallery: string[];
  description: string;
  price: number;
  featuredModel?: boolean;
};

const price = 7000;

export const products: Product[] = [
  { id: 1, slug: 'gulabo-rose-lehenga', name: 'Gulabo Rose Lehenga', colour: 'Rose pink', category: 'Lehengas', image: '/products/collection/rose-zari-model.png', gallery: ['/products/collection/rose-zari-model.png', '/products/rose-pink.jpeg'], description: 'A rose-pink lehenga with intricate gold floral embroidery and a statement fringed dupatta.', price, featuredModel: true },
  { id: 2, slug: 'rani-bagh-lehenga', name: 'Rani Bagh Lehenga', colour: 'Rani red', category: 'Lehengas', image: '/products/rani-red.jpeg', gallery: ['/products/rani-red.jpeg'], description: 'A festive red lehenga set finished with zari floral work.', price },
  { id: 3, slug: 'gulabi-sitara-lehenga', name: 'Gulabi Sitara Lehenga', colour: 'Gulabi pink', category: 'Lehengas', image: '/products/gulabi-pink.jpeg', gallery: ['/products/gulabi-pink.jpeg'], description: 'A soft pink lehenga with gold embroidery for celebratory occasions.', price },
  { id: 4, slug: 'mehroon-zari-sharara', name: 'Mehroon Zari Sharara', colour: 'Deep maroon', category: 'Sharara Sets', image: '/products/mehroon.jpeg', gallery: ['/products/mehroon.jpeg'], description: 'A deep maroon sharara set with a rich embroidered border and dupatta.', price },
  { id: 5, slug: 'genda-phool-lehenga', name: 'Genda Phool Lehenga', colour: 'Coral orange', category: 'Lehengas', image: '/products/coral.jpeg', gallery: ['/products/coral.jpeg'], description: 'A coral-orange lehenga that brings bright festive colour and hand-done detail together.', price },
  { id: 6, slug: 'gulab-noor-lehenga', name: 'Gulab Noor Lehenga', colour: 'Pink & ivory', category: 'Lehengas', image: '/products/gulab-ivory.jpeg', gallery: ['/products/gulab-ivory.jpeg'], description: 'A pink and ivory occasion lehenga with classic floral zari work.', price },
  { id: 7, slug: 'jamuni-jaal-lehenga', name: 'Jamuni Jaal Lehenga', colour: 'Royal plum', category: 'Lehengas', image: '/products/jamuni.jpeg', gallery: ['/products/jamuni.jpeg'], description: 'A royal-plum lehenga with all-over jaal embroidery and a traditional silhouette.', price },
  { id: 8, slug: 'laal-ishq-lehenga', name: 'Laal Ishq Lehenga', colour: 'Bridal red', category: 'Lehengas', image: '/products/laal.jpeg', gallery: ['/products/laal.jpeg'], description: 'A bridal-red lehenga designed for wedding celebrations.', price },
  { id: 9, slug: 'emerald-noor-lehenga', name: 'Emerald Noor Lehenga', colour: 'Emerald green', category: 'Lehengas', image: '/products/collection/emerald-noor-lehenga.jpeg', gallery: ['/products/collection/emerald-noor-lehenga.jpeg'], description: 'An emerald green lehenga with gold embroidery and a fringed dupatta.', price },
  { id: 10, slug: 'rose-meher-lehenga', name: 'Rose Meher Lehenga', colour: 'Dusty rose', category: 'Lehengas', image: '/products/collection/rose-meher-lehenga.jpeg', gallery: ['/products/collection/rose-meher-lehenga.jpeg'], description: 'A dusty-rose occasion lehenga with detailed zari borders.', price },
  { id: 11, slug: 'rangrez-dual-tone-lehenga', name: 'Rangrez Dual-Tone Lehenga', colour: 'Emerald & fuchsia', category: 'Lehengas', image: '/products/collection/rangrez-dual-lehenga.jpeg', gallery: ['/products/collection/rangrez-dual-lehenga.jpeg'], description: 'A bright fuchsia and emerald lehenga set with intricate gold embroidery.', price },
  { id: 12, slug: 'jamuni-gulab-lehenga', name: 'Jamuni Gulab Lehenga', colour: 'Royal purple & pink', category: 'Lehengas', image: '/products/collection/jamuni-gulab-lehenga.jpeg', gallery: ['/products/collection/jamuni-gulab-lehenga.jpeg'], description: 'A royal-purple and pink lehenga made for festive evenings.', price },
  { id: 13, slug: 'surkh-bagh-lehenga', name: 'Surkh Bagh Lehenga', colour: 'Bridal red', category: 'Lehengas', image: '/products/collection/surkh-bagh-lehenga.jpeg', gallery: ['/products/collection/surkh-bagh-lehenga.jpeg', '/products/collection/surkh-floral-karigari.jpeg', '/products/collection/surkh-jaal-fabric.jpeg'], description: 'A bridal-red lehenga with floral embroidery, a heavy border, and matching detail views.', price, featuredModel: true },
  { id: 14, slug: 'mehrun-gulab-lehenga', name: 'Mehrun Gulab Lehenga', colour: 'Maroon & rose', category: 'Lehengas', image: '/products/collection/mehrun-gulab-lehenga.jpeg', gallery: ['/products/collection/mehrun-gulab-lehenga.jpeg'], description: 'A maroon and rose lehenga with rich wedding-ready embroidery.', price },
  { id: 15, slug: 'basanti-gulab-lehenga', name: 'Basanti Gulab Lehenga', colour: 'Marigold & fuchsia', category: 'Lehengas', image: '/products/collection/basanti-gulab-lehenga.jpeg', gallery: ['/products/collection/basanti-gulab-lehenga.jpeg'], description: 'A joyful marigold and fuchsia lehenga with a multicolour embroidered dupatta.', price },
  { id: 16, slug: 'feroza-rani-sharara', name: 'Feroza Rani Sharara', colour: 'Turquoise & rani pink', category: 'Sharara Sets', image: '/products/collection/feroza-rani-sharara.jpeg', gallery: ['/products/collection/feroza-rani-sharara.jpeg', '/products/collection/feroza-karigari-sharara.jpeg'], description: 'A turquoise sharara with rani-pink accents, paired with a detailed embroidered dupatta.', price, featuredModel: true },
  { id: 18, slug: 'mehrun-zar-sharara', name: 'Mehrun Zar Sharara', colour: 'Maroon & antique gold', category: 'Sharara Sets', image: '/products/collection/mehrun-zar-sharara.jpeg', gallery: ['/products/collection/mehrun-zar-sharara.jpeg'], description: 'A maroon sharara set with antique-gold detailing for wedding wear.', price },
  { id: 19, slug: 'mehrun-velvet-wedding-trousseau', name: 'Mehrun Velvet Wedding Trousseau Set', colour: 'Maroon velvet', category: 'Wedding Trousseau', image: '/products/collection/velvet-cushion-set.jpeg', gallery: ['/products/collection/velvet-cushion-set.jpeg', '/products/collection/velvet-border-panel.jpeg', '/products/collection/velvet-bolster-set.jpeg', '/products/collection/velvet-floral-panel.jpeg', '/products/collection/velvet-paisley-work.jpeg', '/products/collection/round-velvet-mat.jpeg'], description: 'Coordinated maroon velvet pieces with zardozi embroidery, including cushions, bolsters, covers, and ceremonial trousseau accents.', price },
  { id: 23, slug: 'velvet-quran-cover-ceremony-set', name: 'Velvet Quran Cover & Ceremony Set', colour: 'Jewel tones & gold', category: 'Quran Covers', image: '/products/collection/velvet-calligraphy-banner.jpeg', gallery: ['/products/collection/velvet-calligraphy-banner.jpeg', '/products/collection/velvet-wall-hanging.jpeg', '/products/collection/calligraphy-ornaments.jpeg'], description: 'Velvet calligraphy and Quran-cover style pieces for religious gifting and wedding ceremonies.', price },
  { id: 24, slug: 'blush-mint-embroidered-fabric', name: 'Blush Mint Embroidered Fabric', colour: 'Blush & mint', category: 'Embroidered Fabrics', image: '/products/collection/blush-mint-border.jpeg', gallery: ['/products/collection/blush-mint-border.jpeg', '/products/collection/blush-mint-jaal.jpeg'], description: 'Blush fabric with a mint-green embroidered border and delicate all-over motifs.', price },
  { id: 27, slug: 'ivory-meena-embroidered-fabric', name: 'Ivory Meena Embroidered Fabric', colour: 'Ivory, green & pink', category: 'Embroidered Fabrics', image: '/products/collection/ivory-meena-border.jpeg', gallery: ['/products/collection/ivory-meena-border.jpeg'], description: 'Ivory embroidered fabric with green and pink meena work along the border.', price },
];

export const productCategories: Array<'All' | ProductCategory> = ['All', 'Lehengas', 'Sharara Sets', 'Wedding Trousseau', 'Quran Covers', 'Embroidered Fabrics'];

export const modelProducts = products.filter((product) => product.featuredModel);

export const productBySlug = (slug: string) => products.find((product) => product.slug === slug);

export const sizeOptionsFor = (category: ProductCategory) => {
  if (category === 'Lehengas' || category === 'Sharara Sets') return { label: 'Choose your size', options: ['XS', 'S', 'M', 'L', 'XL', 'Custom fitting'] };
  if (category === 'Embroidered Fabrics') return { label: 'Choose fabric length', options: ['2.5 metres', '3 metres', '4 metres', 'Custom length'] };
  if (category === 'Quran Covers') return { label: 'Choose cover size', options: ['Standard', 'Large', 'Custom'] };
  return { label: 'Choose set size', options: ['Standard set', 'Grand set', 'Custom'] };
};

export const whatsappUrl = (product: Product, selectedOption?: string) => {
  const optionLine = selectedOption ? ` Selected option: ${selectedOption}.` : '';
  const message = `Hello Regal Embroidery, I am interested in ${product.name} (${product.category}) for ₹${product.price.toLocaleString('en-IN')}.${optionLine} Please share availability and details.`;
  return `https://wa.me/919308074781?text=${encodeURIComponent(message)}`;
};
