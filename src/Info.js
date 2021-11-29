import "./styles.css";

export default function Info({ data }) {
  return (
    <div className="response">
      {data?.slips?.[0]?.advice ?? "I don't have any advice for this"}{" "}
    </div>
  );
}
