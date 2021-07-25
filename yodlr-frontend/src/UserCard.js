import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./UserCard.css";


function UserCard({ user }) {
  console.log("email", user.email);
  return (
    <div className="UserCard">
      <Card className="mt-3">
        <Card.Header className="card-header">User Details</Card.Header>
        <Card.Body>
          <Card.Title>{user.firstName} {user.lastName} id:{user.id}</Card.Title>
          <Card.Text>
            This user's account is {user.state}.
            {user.email}
          </Card.Text>
          <Button variant="primary">Activate Account</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default UserCard;