import { Fragment } from 'react';
import windowsIcon from '../../assets/images/windows-icon.png';
import appleIcon from '../../assets/images/apple-icon.png';
import { platformsIntro, platforms } from '../../models/platformsModel';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import './PlatformSection.css';

// Maps each platform id to its icon asset for the download card UI.
const platformIcons = {
  windows: windowsIcon,
  mac: appleIcon,
};

// Renders the platform chooser section with a Windows card and a Mac card side by side.
export default function PlatformSection() {
  return (
    <section id="download" className="platform-section">
      <ScrollReveal as="h2" className="platform-section__heading">
        {platformsIntro.heading}
      </ScrollReveal>
      <div className="platform-section__grid">
        {platforms.map((platform, index) => (
          <Fragment key={platform.id}>
            {/* Adds a slim divider between the Windows and Mac cards. */}
            {index > 0 && <div className="platform-section__divider" aria-hidden="true" />}
            <ScrollReveal className="platform-card" delayMs={index * 120}>
              <div className="platform-card__badge">
                <img src={platformIcons[platform.id]} alt="" aria-hidden="true" />
                <span>{platform.label}</span>
              </div>
              <div className="platform-card__actions">
                <a href={platform.installHref} className="platform-card__button platform-card__button--outline">
                  How to install
                </a>
                <a href={platform.downloadHref} className="platform-card__button platform-card__button--filled">
                  Download
                </a>
              </div>
            </ScrollReveal>
          </Fragment>
        ))}
      </div>
    </section>
  );
}