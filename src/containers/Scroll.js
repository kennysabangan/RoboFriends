import React from "react";

const Scroll = ({ children }) => {
  return (
    <div style={{ overflowY: 'scroll', border: '1px solid black', height: '40rem' }}>
      { children }
    </div>
  )
}

export default Scroll;