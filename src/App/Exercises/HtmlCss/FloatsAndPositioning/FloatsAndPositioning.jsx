import './styles.css';
import first from '../ImageFiles/1.jpeg';

export const FloatsAndPositioning = () => {
  return (
    <div className="container">
      <img src={first} />
      <p>
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit..." "There is no one who loves pain itself,
        who seeks after it and wants to have it, simply because it is pain..."
      </p>
      <div className="first"></div>
      <div className="second"></div>
      <div className="third"></div>
    </div>
  );
};
