import { whatsNewIntro, features } from '../../models/featuresModel';
import FeatureBlock from '../FeatureBlock/FeatureBlock';
import './WhatsNewSection.css';

export default function WhatsNewSection() {
  return (
    <section id="whats-new" className="whats-new">
      <h2 className="whats-new__heading">{whatsNewIntro.heading}</h2>
      <p className="whats-new__subheading">{whatsNewIntro.subheading}</p>
      <div className="whats-new__grid">
        {features.map((feature, index) => (
          <FeatureBlock key={feature.id} feature={feature} index={index} />
        ))}
      </div>
    </section>
  );
}
