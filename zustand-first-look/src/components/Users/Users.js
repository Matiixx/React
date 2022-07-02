import React, { useEffect, useState } from "react";
import useStore from "../../store/useStore";
import { Link } from "react-router-dom";
import User from "./User";
import HighlightedUser from "./HighlightedUser";
import "./Users.css";

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

  const isHighlighted = (u) => {
    return highlightedUsers.some((filterUser) => filterUser.id === u.id);
  };

  return (
    <div>
      <div className="nav">
        Users
        <p>
          <Link to="/">Go To Home</Link>
        </p>
      </div>

      {loading && "Loading Users"}

      <div className="users-list">
        {users.map((u) => {
          return (
            <User
              key={u.id}
              onClick={() => addToHighlight(u)}
              isHighlighted={isHighlighted(u)}
              name={u.name}
            />
          );
        })}
      </div>

      <h3>Highlighted Users: ({highlightedUsers.length})</h3>
      <div className="users-list">
        {highlightedUsers.map((u) => {
          return (
            <HighlightedUser
              key={u.id}
              onClick={() => deleteFromHighlight(u)}
              name={u.name}
            />
          );
        })}
      </div>
    </div>
  );
}
