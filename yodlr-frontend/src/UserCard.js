import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./UserCard.css";
import { useState } from "react";


function UserCard({ user, handleActivate }) {
  const [userData, setUserData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    id: user.id,
    state: user.state
  });
  console.log("userData", userData);
  console.log("user prop", user);

  async function activateAccount(evt) {
    console.log("user before activate", userData);
    evt.preventDefault();
    let activeUser = { ...userData, state: "active" };
    try {
      const response = await handleActivate(activeUser);
    } catch (err) {
      console.log("error");
      return;
    }
    setUserData(activeUser);
    console.log("user after activate", userData);
  }

  // async function deactivateAccount(evt) {
  //   console.log("user before activate", user);
  //   evt.preventDefault();
  //   try {
  //     user.state = "pending";
  //     const response = await handleActivate(user);
  //     setIsActive("pending");
  //     console.log("user after activate", user);
  //   } catch (err) {
  //     console.log("error");
  //   }
  // }
  return (
    <div className="UserCard">
      <Card className="mt-3">
        <Card.Header className="card-header">User Details</Card.Header>
        <Card.Body>
          <Card.Title>{userData.firstName} {userData.lastName} id:{userData.id}</Card.Title>
          <Card.Text>
            This user's account is {userData.state}.
            <br />
            {userData.email}
          </Card.Text>
          <Button variant="primary" type="submit" onClick={activateAccount}>Activate Account</Button>
          <Button variant="danger" type="submit">Deactivate Account</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default UserCard;