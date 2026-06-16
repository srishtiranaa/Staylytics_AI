function Card({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        background: "#fff",
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;