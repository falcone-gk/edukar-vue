<template>
  <main>
    <div class="section">
      <div class="section-header">
        <h1>
          <AnimatedLink
          value="Nombre de Sección"
          color="white"/>
        </h1>
      </div>
      <div class="section-content">
        <div class="content-row">
          <div class="left-side">
            <h2>
              <AnimatedLink
              value="Razonamiento Matemático"
              color="black"/>
            </h2>
          </div>
          <div class="row-info item1">
            <strong>Último post</strong>
            <p>Ayuda con ...</p>
          </div>
          <div class="row-info item2">
            <strong>Autor</strong>
            <p>falcone</p>
          </div>
          <div class="row-info item3">
            <strong>Publicado</strong>
            <p>28-02-2022</p>
          </div>
        </div>
        <div class="content-row">
          <div class="left-side">
            <h2>
              <AnimatedLink
              value="Razonamiento Matemático"
              color="black"/>
            </h2>
          </div>
          <div class="row-info item1">
            <strong>Último post</strong>
            <p>Ayuda con ...</p>
          </div>
          <div class="row-info item2">
            <strong>Autor</strong>
            <p>falcone</p>
          </div>
          <div class="row-info item3">
            <strong>Publicado</strong>
            <p>28-02-2022</p>
          </div>
        </div>
        <div class="content-row">
          <div class="left-side">
            <h2>
              <AnimatedLink
              value="Razonamiento Matemático"
              color="black"/>
            </h2>
          </div>
          <div class="row-info item1">
            <strong>Último post</strong>
            <p>Ayuda con ...</p>
          </div>
          <div class="row-info item2">
            <strong>Autor</strong>
            <p>falcone</p>
          </div>
          <div class="row-info item3">
            <strong>Publicado</strong>
            <p>28-02-2022</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <aside>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum voluptas praesentium debitis est! Dignissimos impedit culpa dolor corporis. Facere ullam nesciunt dolores accusantium magnam excepturi? Commodi error et eius iure, nihil delectus nulla labore consequuntur velit natus earum laboriosam aperiam exercitationem ex reiciendis. Doloribus saepe fugiat ut quisquam adipisci ex.</p>
  </aside>
</template>

<script>

import AnimatedLink from '@/components/custom_elements/AnimatedLink'

export default {
  name: 'ForumView',
  components: { AnimatedLink }
}
</script>

<style>
main {
  flex: 3 1 0;
}
.section-header {
  padding: 0 .8em;
  background-color: #117999;
}
.section-header h1 {
  flex-grow: 1;
  color: white;
  font-size: 1.5em;
  font-weight: 500;
  line-height: 70px;
}
.content-row {
  display: grid;
  padding: 5px;
  border-bottom: 1px solid #cdebfd;
  grid-template-columns: auto 190px 90px 125px;
  grid-template-rows: 3em;
  grid-template-areas:
    "subsection head-item1 head-item2 head-item3"
    "subsection value-item1 value-item2 value-item3"
}
.left-side {
  align-self: center;
}
.left-side h2 {
  display: flex;
  align-items: center;
  font-weight: 500;
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
  grid-area: head-item1;
}
.item2 {
  grid-area: head-item2;
}
.item3 {
  grid-area: head-item3;
}
aside {
  background-color: rgb(24, 202, 113);
  flex: 1 1 0;
}
</style>
