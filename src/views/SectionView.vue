<template>
  <main>
    <ResumeTable
    :data="data"
    :right_side="extra_info"/>
  </main>
  <SideBar/>
</template>

<script>

import SideBar from '@/components/Sidebar'
import ResumeTable from '@/components/custom_elements/ResumeTable'

export default {
  name: 'SectionView',
  components: { SideBar, ResumeTable },
  data () {
    return {
      data: {
        name: 'Cursos',
        slug: 'cursos',
        subsection: [
          {
            name: 'EXAMEN EXTRAORDINARIO UNSA 2022',
            item1: 0,
            item2: 1,
            item3: '09-03-2022'
          },
          {
            name: 'EXAMEN EXTRAORDINARIO UNSA 2022',
            item1: 0,
            item2: 1,
            item3: '09-03-2022'
          },
          {
            name: 'EXAMEN EXTRAORDINARIO UNSA 2022',
            item1: 0,
            item2: 1,
            item3: '09-03-2022'
          }
        ]
      },
      extra_info: [
        {
          header: 'Comentarios',
          size: '100px',
          showSize: 'lgPlus'
        },
        {
          header: 'Likes',
          size: '60px',
          showSize: 'lgPlus'
        },
        {
          header: 'Último comentario',
          size: '130px',
          showSize: 'smPlus'
        }
      ]
    }
  }
}
</script>
