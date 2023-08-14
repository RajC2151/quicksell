import React from "react";

export default function Card(props) {
  const cardStyle = {
    width: '100%',
    // border: '2px solid green',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '20px',
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
          src="https://media.licdn.com/dms/image/D4D03AQHiFu1I0wyu-w/profile-displayphoto-shrink_400_400/0/1664994478210?e=1697673600&v=beta&t=uIWiLmqsK5sBOXK5NyyDVbPpUlsCru82FgYvCQmyCcs"
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
