export default function Card({ image, name, resort, ratting, price }) {
  const numericRating = parseFloat(ratting);

  const getRattingColor = (rating) => {
    if (rating >= 4.0) return "green";
    return "red";
  };

  return (
    <div className="card">
      <img src={image} alt={name} width="200px" />
      <h2>{name}</h2>
      <h4>{resort}</h4>
      <h3 style={{ color: getRattingColor(numericRating) }}>{ratting}</h3>
      <p>{price}</p>
    </div>
  );
}
