import React from 'react';

export default function FriendCard(props) {
  const styleObj = {
    display: 'inline-block',
    align: 'center',
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    padding: '5px',
    margin: '10px',
    border: '.2rem solid black',
    width: '300px',
    height: '200px',
  };
  return (
    <div style={styleObj} id={props.key}>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h2>Email: {props.email}</h2>
    </div>
  );
}
