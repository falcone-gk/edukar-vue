<template>
  <main>
    <div class="section">
      <div class="section-header">
        <h1>Bienvenido!</h1>
      </div>
      <div class="welcome">
        <p>
          Este es el foro EDUKAR, donde podrán compartir y ayudar a otros estudiantes con ejercicios, dudas,
          consultas y resoluciones sobre problemas matemáticos y de ciencias.
        </p>
        <br>
        <strong>Regístrate y se parte de esta comunidad estudiantil!!!</strong>
      </div>
    </div>
    <div class="section">
      <div class="section-header">
        <h1>
          <AnimatedLink
          value="Nombre de Sección"
          color="white"/>
        </h1>
      </div>
      <div class="section-content">
        <div class="content-row" :class="mq" :style="getGridStyle">
          <div class="left-side">
            <h2>
              <AnimatedLink
              value="Razonamiento Matemático"
              color="black"/>
            </h2>
          </div>
          <div class="row-info item1">
            <strong>Último post</strong>
            <p>ayuda en este problema</p>
          </div>
          <div v-if="mq.smPlus" class="row-info item2">
            <strong>Autor</strong>
            <p>falcone</p>
          </div>
          <div v-if="mq.lgPlus" class="row-info item3">
            <strong>Publicado</strong>
            <p>28-02-2022</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <SideBar />
</template>

<script>

import SideBar from '@/components/Sidebar'
import AnimatedLink from '@/components/custom_elements/AnimatedLink'

export default {
  name: 'ForumView',
  inject: ['mq'],
  components: { AnimatedLink, SideBar },
  computed: {
    getGridStyle () {
      if (this.mq.lgPlus) {
        return { '--grid-template-col': 'auto 190px 90px 125px' }
      } else if (this.mq.smPlus) {
        return { '--grid-template-col': 'auto 190px 90px' }
      } else {
        return { '--grid-template-col': 'auto 190px' }
      }
    }
  }
}
</script>

<style>
main {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.section {
  box-shadow: var(--box-shadow);
  border-radius: 5px;
}
.section-header {
  padding: 0 .8em;
  background-color: #117999;
  border-radius: 5px;
}
.section-header h1 {
  flex-grow: 1;
  color: white;
  font-size: 1.5em;
  line-height: 70px;
}
.content-row {
  display: grid;
  padding: 5px;
  border-bottom: 1px solid #cdebfd;
  grid-template-columns: var(--grid-template-col);
  grid-template-rows: 3em;
}
.left-side {
  align-self: center;
}
.left-side h2 {
  display: flex;
  align-items: center;
  font-size: 1em;
}
.left-side h2::before {
  content: "\f086";
  font-family: "Font Awesome 5 Free";
  font-size: 1.5em;
  margin-right: .8em;
}
.row-info {
  place-self: center;
}
.row-info * {
  font-size: .8em;
}
.item1 {
  grid-column: 2 / 3;
}
.item2 {
  grid-column: 3 / 4;
}
.item3 {
  grid-column: 4 / 5;
}
.welcome {
  background-color: white;
  padding: .5em;
  border-radius: 5px;
}
</style>
