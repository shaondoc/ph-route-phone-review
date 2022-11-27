import { Link } from "react-router-dom";
import Review from "../Review/Review";
import useReviews from "../utility/data";
import "./Home.css";
const Home = () => {
  const [reviews] = useReviews();

  return (
    <div>
      <div className="hero-container">
        <div className="hero-left">
          <h2>Best Iphone Ever</h2>
          <p>
            And pay for your new iPhone over 24 months, interest‑free when you
            choose to check out with Apple Card Monthly Installments.You can
            choose a payment option that works for you, pay less with a
            trade‑in, connect your new iPhone to your carrier, and get set up
            quickly. You can also chat with a Specialist anytime.
          </p>
          <button className="btn-buy">BUY NOW</button>
        </div>
        <div className="hero-right">
          <img src="/img/mobile.png" alt="" />
        </div>
      </div>

      <div className="home-reviws">
        <div className="home-review-title">
          <h5>Iphone Review (3)</h5>
        </div>
        <div className="home-review">
          {reviews.map((review) =>
            review.id < 4 ? (
              <Review key={review.id} review={review}></Review>
            ) : (
              false
            )
          )}
        </div>
        <div className="home-review-all">
          <Link to="/review"> Check All Reviews</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
