import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  urgencyLine?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  stats?: string;
}

export function PageHero({ title, subtitle, urgencyLine, breadcrumbs, stats }: PageHeroProps) {
  return (
    <section className="bg-primary-600 pt-24 pb-16 md:pt-28 md:pb-20 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500 rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="flex items-center justify-center gap-2 mb-5" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <ChevronRight size={14} className="text-white/40" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-white/60 text-sm hover:text-white/90 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/80 text-sm">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-5 leading-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-4">
            {subtitle}
          </p>
        )}

        {urgencyLine && (
          <p className="text-gold-400 text-sm font-medium">{urgencyLine}</p>
        )}

        {stats && (
          <p className="text-white/60 text-sm mt-4 border-t border-white/10 pt-4">{stats}</p>
        )}
      </div>
    </section>
  );
}
