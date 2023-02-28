/* 
  Implement a button which makes a get request to https://reqres.in/ to get a list of users and display them.
  100% free reign to accomplish this goal however you wish, within the context of react.

  apiMethods.js file has already been stubbed out for you. Feel free to use it or not.

  ****Make any changes to this boilerplate that you want to.*****
  ****The included code is only provided as a convienence.****

  Bonus 1:  Add a button for each user to make a delete request to delete that user. 
          Update the displayed users excluding the deleted user.

  Bonus 2: Make a filter box to filter the displayed users by name.
*/
import { useDeferredValue, useMemo, useState } from "react";
import { getUsers, deleteUser } from "./apiMethods";

import "./index.css";

type User = {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
};

export default function App() {
  const [data, setData] = useState({ data: [], page: 1, total_pages: 1 });

  const [filter, setFilter] = useState("");
  const currentPage = data.page;
  const deferredFilter = useDeferredValue(filter);

  const filteredUsers = useMemo(
    () =>
      data?.data
        ? data.data.filter((u: User) =>
            u.first_name.toLowerCase().includes(deferredFilter.toLowerCase())
          )
        : [],
    [deferredFilter, data]
  );

  const handleGetUsersClick = (page: number) => {
    if (page <= 0 || page > data.total_pages) return;
    getUsers(page).then((data) => {
      setData(data);
    });
  };

  const handleDeleteClick = (id: number) => {
    deleteUser(id).then((res) => {
      if (res)
        setData((prev) => ({
          ...prev,
          data: prev.data.filter((el: User) => el.id !== id),
        }));
    });
  };

  return (
    <div className="">
      <button onClick={() => handleGetUsersClick(currentPage)}>
        Get Users
      </button>
      <h2>Users from API:</h2>
      <input
        type="text"
        className="my-2 border p-2"
        placeholder="Aa"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div>
        {filteredUsers.map((el: User) => (
          <div
            key={el.id}
            className="flex flex-row justify-between gap-2 rounded border p-1 px-4"
          >
            <span>
              {el.first_name} {el.last_name}
            </span>
            <span
              className="cursor-pointer text-red-500"
              onClick={() => handleDeleteClick(el.id)}
            >
              X
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-between py-2">
        <button onClick={() => handleGetUsersClick(currentPage - 1)}>
          Prev
        </button>
        <button onClick={() => handleGetUsersClick(currentPage + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
