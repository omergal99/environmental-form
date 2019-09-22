import React from 'react';

function Nav() {

  return (
    <div className="header">
      <div className="top-search">Header</div>
      <div className="nav-bar">Nav</div>
    </div>
  );
}

export default React.memo(Nav)