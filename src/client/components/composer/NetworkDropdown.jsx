import React, { useState, useRef, useEffect } from 'react'
// import { Link } from 'react-router-dom';

export default function NetworkDropdown({ onProtocolSelect, network }) {
  const [dropdownIsActive, setDropdownIsActive] = useState();
  const dropdownEl = useRef();

  useEffect(() => { 
    const closeDropdown = (event) => {
      if (!dropdownEl.current.contains(event.target)) {
        setDropdownIsActive(false);
      }
    }
    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, []);

  let networkTitle = '';
  switch (network) {
    case 'rest' : networkTitle = 'REST'; break;
    case 'graphQL' : networkTitle = 'GRAPHQL'; break;
    case 'grpc' : networkTitle = 'gRPC'; break;
    case 'ws' : networkTitle = 'WEB SOCKETS'; break;
  }

  return (
    <div ref={dropdownEl} className={`dropdown full-width is-fullwidth ${dropdownIsActive ? 'is-active' : ''}`}>
        
      <div className="dropdown-trigger full-width is-fullwidth">
        <div 
        className="button protocol-select-button is-fullwidth columns is-gapless" 
        aria-haspopup="true" 
        aria-controls="dropdown-menu"
        onClick={() => setDropdownIsActive(!dropdownIsActive)}
        >
          <span className="column">{networkTitle}</span>
          <span className="column">
            <i className="fas fa-caret-down" aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="dropdown-menu">
        <div className="dropdown-content">
          <a  
            onClick={() => {
              setDropdownIsActive(false);
              onProtocolSelect("rest"); 
            }} 
            className="dropdown-item" 
          >REST</a>
          <a
            onClick={() => {
              setDropdownIsActive(false);
              onProtocolSelect("graphQL"); 
            }} 
            className="dropdown-item" 
          >GRAPHQL</a>
          <a  
            onClick={() => {
              setDropdownIsActive(false);
              onProtocolSelect("grpc");
            }} 
            className="dropdown-item" 
          >gRPC</a>
          <a  
            onClick={() => {
              setDropdownIsActive(false);
              onProtocolSelect("ws"); 
            }} 
            className="dropdown-item" 
          >WEB SOCKETS</a>
        </div>
      </div>

    </div>
  )
}