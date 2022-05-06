import React, { Component, Fragment } from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoItem} from './TodoItem';
import {TodoList} from './TodoList';
import {CreateTodoButton} from './CreateTodoButton';
import {LeftMenu} from './LeftMenu';
// import logo from '../img/logo.svg';
import '../css/material-dashboard.min.css';
import '../css/nucleo-icons.css';

import axios from "axios";

const todos = [
  {text: 'Cortar Cebolla', completed:false},
  {text: 'Tomar curso de react', completed:false},
  {text: 'Realizar proyecto', completed:false},
];


function handleSubmit(event) {
  const text = document.querySelector("#char-input").value;

  axios
    .get(`http://localhost:8000/char_count?text=${text}`)
    .then(({ data }) => {
      document.querySelector(
        "#char-count"
      ).textContent = `${data.count} characters!`;
    })
    .catch(err => console.log(err));
}

function App(props) {

    return (
      <Fragment>
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />

        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <script async defer src="https://buttons.github.io/buttons.js"></script>
        <script src="./assets/js/material-dashboard.min.js?v=3.0.2"></script>
          <LeftMenu/>
         {/* <TodoCounter/> */}
         
     
        {/* <TodoSearch/>  */}
        {/* <input placeholder="Cebolla"/>
        <TodoList>
          {todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text}/> 
          ))}
        </TodoList>  
        <CreateTodoButton />   */}

{/* 
        <div>
          <div>
            <label htmlFor="char-input">How many characters does</label>
            <input id="char-input" type="text" />
            <button onClick={handleSubmit}>have?</button>
          </div>

          <div>
            <h3 id="char-count"></h3>
          </div>
        </div> */}
      </Fragment>



    );
}

export default App;

