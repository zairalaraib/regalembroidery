'use client';

import { useState } from 'react';
import { sizeOptionsFor, whatsappUrl, type Product } from '@/app/lib/products';

export function ProductOptions({ product }: { product: Product }) {
  const { label, options } = sizeOptionsFor(product.category);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className="product-options">
      <p className="size-label">{label}</p>
      <div className="size-options" role="group" aria-label={label}>
        {options.map((option) => <button type="button" key={option} className={option === selectedOption ? 'active' : ''} aria-pressed={option === selectedOption} onClick={() => setSelectedOption(option)}>{option}</button>)}
      </div>
      <a className="detail-whatsapp" href={whatsappUrl(product, selectedOption)} target="_blank" rel="noreferrer">Chat on WhatsApp <span>↗</span></a>
    </div>
  );
}
