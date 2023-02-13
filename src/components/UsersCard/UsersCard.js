import React, { useState, useEffect } from "react";
import './UsersCard.css'

function UsersCard() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/persons")
      .then(response => response.json())
      .then(data => setPeople(data));
  }, []);

  return (
    <div className="row">
      {people.map((person) => (
        <div className="col-3">
          <div className="card-wrapper">
            <div Class="user_details">
              <h2 className="person-name">{person.name}</h2>
              <p className="person-position">{person.position}</p>
              <p className="person-email_id">{person.email_id}</p>
              <div className="card-bg"></div>
            </div>
            <div className="card_count">
              <div className="count">
                <div className="projects">
                  <h3>{person.projects}</h3> 
                  <p>Projects</p> 
                </div>
                <div className="followers">
                  <h3>{person.followers}</h3>
                  <p>Followers</p>
                </div>
                <div className="following">
                  <h3>{person.following}</h3>
                  <p>Following</p>
                </div>
              </div>
              <div Class="btn-wrapper">Follow</div>
            </div>
          </div>
        </div>         
      ))}
    </div>   
  );
}

export default UsersCard;
