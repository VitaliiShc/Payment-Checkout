import styles from './Features.module.css';

export default function Features() {
  return (
    <section>
      <h2 className="visually-hidden">Features</h2>
      <div>
        <h3>Best for Health</h3>
        <p>Good for your health and quality guaranteed</p>
      </div>

      <div>
        <h3>Safe and quality</h3>
        <p>The best quality with the best traditional ingredients</p>
      </div>

      <div>
        <h3>Online Support</h3>
        <p>Online complaint service for 24 hours without stopping</p>
      </div>
    </section>
  );
}
