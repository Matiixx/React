import React, { useEffect, useState } from "react";
import useStore from "../../store/useStore";

export default function Users() {
  const [loading, setLoading] = useState(true);

  const users = useStore((state) => state.users);
  const fetchUsers = useStore((state) => state.fetchUsers);

  const addToHighlight = useStore((state) => state.addToHighlight);

  useEffect(() => {
    fetchUsers();
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {loading && "Loading Users"}

      {users.map((u) => {
        return (
          <div key={u.id} onClick={addToHighlight}>
            {u.name}
          </div>
        );
      })}
    </div>
  );
}
