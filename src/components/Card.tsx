import "../scss/Card.scss";

interface CardProps {
  component: JSX.Element;
}
export const Card = ({ component }: CardProps) => {
  return (
    <article className="card">
      <div className="card__body">{component}</div>
      <h3 className="card__header">Basic Dropdown</h3>
      <p className="card__description">The classic example of a dropdown</p>
    </article>
  );
};
