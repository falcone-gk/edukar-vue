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
    <resume-table
    :data="data"
    :right_side="extra_info"/>
  </main>
  <SideBar />
</template>

<script>

import SideBar from '@/components/Sidebar'
import ResumeTable from '@/components/custom_elements/ResumeTable'

export default {
  data () {
    return {
      // Example data
      data: {
        id: 1,
        name: 'Cursos',
        slug: 'cursos',
        subsection: [
          {
            name: 'Razonamiento Matemático',
            item1: 'Ayuda con este ejercicio',
            item2: 'falcone',
            item3: '18-02-2022'
          },
          {
            name: 'Aritmética',
            item1: 'Ayuda con este ejercicio',
            item2: 'falcone',
            item3: '18-02-2022'
          }
        ]
      },
      extra_info: [
        {
          header: 'Últimpo post',
          size: '190px',
          showSize: 'smPlus'
        },
        {
          header: 'Autor',
          size: '90px',
          showSize: 'smPlus'
        },
        {
          header: 'Publicado',
          size: '90px',
          showSize: 'lgPlus'
        }
      ]
    }
  },
  name: 'ForumView',
  components: { ResumeTable, SideBar }
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
