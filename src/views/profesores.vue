<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav></nav>
      
      <article>
            <h1>Alvaro Acosta</h1>
            
            <img src="../assets/profesor.jpg">

            <p>Hola! Soy profesor de Matematicas. Estoy aqui para guiarte en problemas matematicos</p>
        </article>
    
  </template>
  <style>
  *{
      font-family: sans-serif;
  }
  body{
      margin: 0%;
  }
  nav{
      padding-top: 2px;
      margin-top: 0px;
      background-color: #933A39;
      height: 100px;
  }
  a{  display: flex;
      flex-direction: column;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 15px;
      margin-right: 20px;
      text-align: center;
      float: right;
      color: white;
      width: 135px;
      height: 68px;
      border-radius: 40px;
      background: #583939;
      font-size: 18px;
  }
  a:link, a:visited, a:active { text-decoration:none; }
  
  article{
      text-align: center;
      padding: 15px;
      margin: 20px;
      float: left;
      display: flex;
      width: 400px;
      height: 100px;
      flex-direction: column;
      justify-content: center;
      flex-shrink: 0;
      border-radius: 25px;
      border-color: #583939;
      border: solid 1px;
  }
  img{
    text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 20px;
      width: 150px;
      height: 150px;
      text-align: center;
  }</style>
  