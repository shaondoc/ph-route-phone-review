import Review from "../Review/Review";
import useReviews from "../utility/data";
import "./Reviews.css";
const Reviews = () => {
  const [reviews] = useReviews();
  return (
    <div className="reviews-container">
      {reviews.map((review) =>
        review.id < 100 ? (
          <Review key={review.id} review={review}></Review>
        ) : (
          false
        )
      )}
    </div>
  );
};

export default Reviews;
