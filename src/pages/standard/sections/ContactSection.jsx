import { ITEMS } from '@pages/socials/data/socialsData';
import SectionHeader from '../components/SectionHeader';

/**
 * Contact / socials section. Renders one card per channel (GitHub, LinkedIn,
 * Email) pulled from the shared socials data module. Mailto: links skip
 * `target="_blank"` so they open the user's default mail client in-place.
 */
export default function ContactSection() {
  return (
    <section id="contact" className="std-section std-contact">
      <SectionHeader
        index="07"
        title="CONTACT"
        progress={`${ITEMS.length} CHANNELS`}
      />
      <div className="std-contact-list">
        {ITEMS.map((item) => {
          const isMailto = item.href.startsWith('mailto:');
          return (
            <a
              key={item.id}
              className="std-contact-card"
              href={item.href}
              target={isMailto ? undefined : '_blank'}
              rel={isMailto ? undefined : 'noopener noreferrer'}
            >
              <div className="std-contact-icon" aria-hidden="true">{item.icon}</div>
              <div className="std-contact-body">
                <div className="std-contact-label">{item.label}</div>
                <div className="std-contact-value">
                  {item.displays?.[0] ?? item.href}
                </div>
              </div>
              <div className="std-contact-action">OPEN</div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
