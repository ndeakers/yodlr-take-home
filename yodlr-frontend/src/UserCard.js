import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./UserCard.css";
import { useState } from "react";


function UserCard({ user, handleActivate }) {

  console.log("user", user)

  async function activateAccount(evt) {
    evt.preventDefault();
    try {
      const response = await handleActivate(user);
    } catch (err) {
      console.log("error");
      return;
    }
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
          <Card.Title>{user.firstName} {user.lastName} id:{user.id}</Card.Title>
          <Card.Text>
            This user's account is {user.state}.
            <br />
            {user.email}
          </Card.Text>
          <Button variant="primary" type="submit" onClick={activateAccount}>Activate Account</Button>
          <Button variant="danger" type="submit">Deactivate Account</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default UserCard;