export default function Curso() {
  const handlePago = () => {
    fetch("http://localhost:3000/api/pago", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  return (
    <div>
      <button onClick={handlePago}>Pagar</button>
    </div>
  );
}
