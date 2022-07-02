import React, { useEffect, useState } from "react";
import useStore from "../../store/useStore";
import { Link } from "react-router-dom";

export default function Users() {
  const [loading, setLoading] = useState(true);

  const users = useStore((state) => state.users);
  const fetchUsers = useStore((state) => state.fetchUsers);

  const highlightedUsers = useStore((state) => state.highlightedUsers);
  const deleteFromHighlight = useStore((state) => state.deleteFromHighlight);
  const addToHighlight = useStore((state) => state.addToHighlight);

  useEffect(() => {
    fetchUsers();
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div className="nav">
        Users
        <p>
          <Link to="/">Go To Home</Link>
        </p>
      </div>

      {loading && "Loading Users"}

      {users.map((u) => {
        return (
          <div
            key={u.id}
            style={{ cursor: "pointer" }}
            onClick={() => addToHighlight(u)}
          >
            {u.name}
          </div>
        );
      })}

      <h3>Highlighted Users: ({highlightedUsers.length})</h3>
      {highlightedUsers.map((u) => {
        return (
          <div
            key={u.id}
            style={{ cursor: "pointer" }}
            onClick={() => deleteFromHighlight(u)}
          >
            <b>{u.name}</b>
          </div>
        );
      })}
    </div>
  );
}
