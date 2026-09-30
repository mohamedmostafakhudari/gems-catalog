import Header from '@/components/Header';
import products from '@/data/products.json';

export default function Home() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl p-4">
        <ul className="list-disc pl-5">
          {products.map((p) => (
            <li key={p.id}>
              {p.name} is {p.price} EGP
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
