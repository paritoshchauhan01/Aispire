import './FeatureBlock.css';

export default function FeatureBlock({ feature }) {
  return (
    <article className="feature-block">
      <div className="feature-block__text">
        <h3 className="feature-block__heading">{feature.heading}</h3>
        {feature.intro && <p className="feature-block__intro">{feature.intro}</p>}
        <ol className="feature-block__list">
          {feature.items.map((item, itemIndex) => (
            <li key={itemIndex}>{item}</li>
          ))}
        </ol>
      </div>
    </article>
  );
}
