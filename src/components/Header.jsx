import siteConfig from '@/config/siteConfig';
import { buildGeneralLink } from '@/lib/whatsapp';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div>
          <h1 className="text-lg font-bold leading-tight text-gray-900 sm:text-xl">
            {siteConfig.storeName}
          </h1>
          <p className="text-xs text-gray-500 sm:text-sm">
            {siteConfig.tagline}
          </p>
        </div>

        <a
          href={buildGeneralLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          {siteConfig.ctaLabel}
        </a>
      </div>
    </header>
  );
}
