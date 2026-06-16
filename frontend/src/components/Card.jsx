function Card({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
}

export default Card;