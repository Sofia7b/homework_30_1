import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPerson } from "../features/swapi/swapiSlice";

export default function SwapiSearch() {
  const [id, setId] = useState("1");
  const dispatch = useDispatch();
  const { person, status, error } = useSelector((s) => s.swapi);

  const onGet = () => {
    const n = parseInt(id, 10);
    if (!Number.isFinite(n) || n <= 0) return;
    dispatch(fetchPerson(n));
  };

  return (
    <div className="card">
      <h2 className="title">SWAPI People</h2>
      <div className="row">
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="id (1..)"
        />
        <button onClick={onGet}>Get info</button>
      </div>

      {status === "loading" && <p>Loading…</p>}
      {error && <p className="error">Error: {error}</p>}
      {person && (
        <pre className="json">{JSON.stringify(person, null, 2)}</pre>
      )}
    </div>
  );
}
