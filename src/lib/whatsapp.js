const PHONE = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

function buildLink(message) {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export function buildOrderLink(product) {
  return buildLink(
    `Hello, I am interested in ordering: ${product.name} (Price: ${product.price} EGP)`
  );
}

export function buildGeneralLink() {
  return buildLink('Hello, I saw your catalog and have a question.');
}
