import React from "react";

export default function Card(props) {
  const cardStyle = {
    width: '100%',
    // border: '2px solid green',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '10px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.3)',
  };

  const firstStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const imageStyle = {
    height: '30px',
    width: '30px',
    borderRadius: '50%',
  };

  const secondStyle = {
    fontWeight: 'bold',
    marginTop: '10px',
  };

  const thirdStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
    color: '#888',
    fontSize: '12px',
  };

  return (
    <div style={cardStyle}>
      <div style={firstStyle}>
        <span>{props.id}</span>
        <img
          src="https://media.licdn.com/dms/image/D4D35AQHssxSJWj1qbQ/profile-framedphoto-shrink_400_400/0/1681098636893?e=1692532800&v=beta&t=wJGTK3zGBLhWIRcOJAl7Poucq1S_k0zsNnzAakeMfiY"
          alt="Profile"
          style={imageStyle}
        />
      </div>
      <div style={secondStyle}>
        <p>{props.title}</p>
      </div>
      <div style={thirdStyle}>
        <span>...</span>
        <span>{props.tag[0]}</span>
      </div>
    </div>
  );
}
