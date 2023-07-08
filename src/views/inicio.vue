<!-- eslint-disable vue/multi-word-component-names -->
<template>
 <div id="app">
    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/profesores">Profesores</router-link>
      <router-link to="/clases">Clases</router-link>
    </nav>
    <router-view/>
  </div>
    <div> 
        <article>
            <h1>1. Busca</h1>
            <p>Busca con toda libertad entre varios perfiles y contacta al profesor que más se acerque a tus necesidades (tarifas, preparación, opiniones, el más cercano o en línea).</p>
        </article>
        <article>
            <h1>2. Conecta</h1>
            <p>De manera rápida, nuestros profesores te responderán en unas cuantas horas. Y si no encuentras al profesor indicado, nos encargamos de ayudarte.</p>
            <img src="" alt="">
        </article>
        <article>
            <h1>3. Ponganse de acuerdo</h1>
            <p>De manera rápida, nuestros profesores te responderán en unas cuantas horas. Y si no encuentras al profesor indicado, nos encargamos de ayudarte.</p>
            <img src="" alt="">
        </article>
    </div>
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
    padding: 15px;
    margin: 20px;
    float: left;
    display: flex;
    width: 20%;
    height: 20%;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    border-radius: 25px;
    border-color: #583939;
    border: solid 1px;
}
img{
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px;
    width: 150px;
    height: 150px;
    text-align: center;
}</style>