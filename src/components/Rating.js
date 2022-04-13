const Rating = (props) => {
  return (
    <div className="ratings">
      {props.data.map((rating) => {
        return (
          <button
            className={`${rating.on ? 'selected rating' : 'rating'}`}
            type="button"
            key={rating.id}
            onClick={() => props.handler(rating.id)}
          >
            {rating.id}
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
