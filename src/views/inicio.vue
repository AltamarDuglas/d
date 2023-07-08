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