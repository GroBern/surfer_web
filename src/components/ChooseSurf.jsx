import React from 'react';
import { Award, Users, Home, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PillarCard = ({ icon: Icon, title, description }) => (
  <article className="flex flex-col items-center text-center p-6" aria-label={title}>
    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} aria-hidden="true" />
    </div>
    <h3 className="text-neutral-800 font-semibold text-sm mb-3 leading-tight">
      {title}
    </h3>
    <p className="text-neutral-600 text-sm leading-relaxed max-w-xs">
      {description}
    </p>
  </article>
);

export default function ChooseSurfCamp() {
  const { t } = useTranslation();

  const heading = t('chooseSurfCamp1.heading');
  const subheading = t('chooseSurfCamp1.subheading');
  const pillars = t('chooseSurfCamp1.pillars', { returnObjects: true });
  const aria = t('chooseSurfCamp1.aria', { returnObjects: true });

  // Keep icons fixed by order
  const icons = [Award, Users, Home, Globe];

  return (
    <section className="bg-gray-50 py-16" aria-label={aria?.section}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-2">
            {heading}
          </h2>
          <p className="text-neutral-600 text-lg">{subheading}</p>
        </div>

        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars?.map((p, idx) => {
            const Icon = icons[idx] || Award;
            return (
              <li
                key={idx}
                role="listitem"
                className="transform transition-transform duration-300 hover:scale-105"
              >
                <PillarCard icon={Icon} title={p.title} description={p.description} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
