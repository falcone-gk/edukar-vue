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
    <ResumeTable v-for="(table, i) in no_sub_data" :key="'no_sub_' + i"
    :data="table"/>

    <ResumeTable v-for="(table, i) in with_sub_data" :key="'with_sub_' + i"
    tableType="subsection"
    :data="table"/>
  </main>
  <SideBar />
</template>

<script>

import axios from 'axios'
import SideBar from '@/components/Sidebar'
import ResumeTable from '@/components/custom_elements/ResumeTable'

export default {
  data () {
    return {
      no_sub_data: {},
      with_sub_data: {}
    }
  },
  name: 'ForumView',
  components: { ResumeTable, SideBar },
  props: ['layoutName'],
  mounted () {
    axios
      .get('api/forum/sections/')
      .then(response => {
        this.no_sub_data = response.data.no_sub
        this.with_sub_data = response.data.with_sub
      })
  }
}
</script>

<style>
main {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.welcome {
  background-color: white;
  padding: .5em;
  border-radius: 5px;
}
</style>
