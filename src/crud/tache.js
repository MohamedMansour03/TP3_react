
import React from 'react';

export default function Taches({ text, delF, toggleTodo, editTache }) {
  const textStyle = {
    textDecoration: text.completed ? 'line-through' : 'none',
  };
  
  const modifierTache = () => {
    const updatedName = prompt("Entrez le nouveau nom de la tâche :", text.nom);
    if (updatedName !== null) {
      editTache(text.id, updatedName);
    }
  };

  return (
    <tr>
      <td><span style={textStyle}>{text.nom}</span></td>
      <td><button  className="custom-button" onClick={delF}><i className="fas fa-trash"  style={{ color: 'red' ,fontSize: '18px'}} ></i></button></td>
      <td><button className="custom-button" onClick={toggleTodo}><i className="fas fa-check" style={{ color: '#2bc48a',fontSize: '18px' }} ></i></button></td>
      <td><button  className="custom-button" onClick={modifierTache}><i className="fas fa-edit"  style={{ color: '#ffcb61', fontSize: '18px' }} ></i></button></td>
    </tr>
  );
}

