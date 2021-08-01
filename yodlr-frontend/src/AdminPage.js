import React from "react";
import { useEffect, useState } from "react";
import YodlrApi from "./Api";
import UserCard from "./UserCard";
/**
 * props: none
 * state: users--> list of users for site
 *        loading---> loading spinner when fetching users
 * Routes ---> AdminPage ---> UserCard
 */
function AdminPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchAllUsers() {
    async function fetchUsers() {
      try {
        const userResult = await YodlrApi.getAllUsers();
        console.log("userResult", userResult);
        setUsers(userResult);
      } catch (err) {
        console.error(err); // handle error later
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  // update users here:
  async function handleActivate(userData) {
    let usersCopy = [...users];
    let toUpdate = usersCopy.filter((val) => val.id === userData.id);
    toUpdate[0].state = "active";
    try {
      await YodlrApi.activateUser(toUpdate[0]);
    } catch (err) {
      return { success: false, errors: err }
    }
    setUsers(usersCopy);
  }


  if (isLoading) {
    return (
      <h2>Loading....</h2>
    )
  }
  console.log("users before render", users);
  return (
    <div>
      {users.map((user) => <UserCard handleActivate={handleActivate} user={user} key={user.id} />)}
    </div>
  )
}

export default AdminPage;