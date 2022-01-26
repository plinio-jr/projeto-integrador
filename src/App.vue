<template>
<section> 
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" integrity="sha384-EvBWSlnoFgZlXJvpzS+MAUEjvN7+gcCwH+qh7GRFOGgZO0PuwOFro7qPOJnLfe7l" crossorigin="anonymous">
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    
    <div class="menu">
      <ul id="menu-h">
      <router-link to="/login">Login |</router-link>
    <router-link to="/nova-noticia"> Cadastrar noticia</router-link>
    <router-link to="/sobre"> Sobre</router-link>
    <router-link to="/home"> Home</router-link>
       
    </ul>
    
    <br>
<comp-cabecalho/>
<br>
<router-view></router-view>
    </div>

<comp-rodape/>

</section>
</template>

<script>
import CompCabecalho from './components/CompCabecalho.vue'
import CompRodape from './components/CompRodape.vue'


export default {
  components: { CompCabecalho, 
  CompRodape },
  name: 'App',
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }
#menu{background-color: MediumSpringGreen;
  list-style:none ;
  padding: 0;
  display: inline-block;

}
#menu-h{
  background-color: MediumSpringGreen;
  list-style:none ;
  padding: 0;
}
#menu-h li {
  display: inline;
}
#menu-h li a{
  display: inline;
  color: black;
  text-decoration: none;
  padding: 20px;
  display: inline-block;
}
#menu-h li a:hover {
  background-color: red;
}

</style>
