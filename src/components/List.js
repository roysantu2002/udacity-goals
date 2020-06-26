import React from 'react'

export default function List(props) {
  return (
    <ul>
      <li>LIST</li>
      {props.items.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => props.remove(item)}>X</button>
        </li>
      ))}
    </ul>
  );
}
