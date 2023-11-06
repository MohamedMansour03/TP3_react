import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Taches from './tache';
import './style.css';



export default function Liste(){
const [taches ,settaches]=useState([
{id:uuidv4() ,nom:'Lecture'},
{id:uuidv4() ,nom:'Film'},
{id:uuidv4() ,nom:'game'}

])
const [tache ,settache]=useState("");

const addTodo = (e) => {        
    e.preventDefault(); 
}

const addTache=() => {
    const newTache = {
      id: uuidv4(),
      nom: tache,
    };
    settaches([...taches, newTache]);
    settache('');
  };

  const delTache = (idp) => {
    let ntaches = taches.filter((t) => {
      return t.id !== idp;
    });
    settaches(ntaches);
  };
  const validerTache = (id) => {
    const newArr =taches.map((item) => {
      if (item.id === id) {
        return { ...item, completed: true };
      }
      return item;
    });
    settaches(newArr);
  };


  const editTache = (id, updatedName) => {
    const updatedTaches = taches.map((tache) => {
      if (tache.id === id) {
        return { ...tache, nom: updatedName };
      }
      return tache;
    });

    settaches(updatedTaches);
  };


return(
    <div>
        <h1>To do Liste_App</h1>
        <form onSubmit={e => addTodo(e)} >
            <label>Choses à faire</label>
            <input type="text" value={tache} onChange={(e)=>{settache(e.target.value)}} />
            <input type="button"   onClick={addTache}   value="ajouter"/>

        </form>
        <br/><br/>
        <table>
        <thead>
          <tr>
            <th>Nom de tache</th>
            <th>Supprimer</th>
            <th>Valider</th>
            <th>Modifier</th>
          </tr>
        </thead>
        <tbody>
          {taches.map((element) => (
            <Taches
              key={element.id}
              text={element}
              delF={() => delTache(element.id)}
              toggleTodo={() => validerTache(element.id)}
              editTache={editTache}
            />
          ))}
        </tbody>
      </table>

      
    </div>

)
  
}

/*
methode 2: pour ajouter taches
const addTache=()=>{
    let newtaches=[...taches];
    let newtache={};
    newtache.id=uuidv4();
    newtache.nom=tache;
    newtaches.push(newtache);
    settaches(newtaches);
    settache("");

}

opérateur de spread  :

const objet1 = { a: 1, b: 2 };
const objet2 = { ...objet1, c: 3 };
// Maintenant, objet2 contient { a: 1, b: 2, c: 3 }




*/

