<template>
  <main>
    <ResumeTable
    :data="data"/>
  </main>
  <SideBar/>
</template>

<script>

import axios from 'axios'
import SideBar from '@/components/Sidebar'
import ResumeTable from '@/components/custom_elements/ResumeTable'

export default {
  name: 'SectionView',
  components: { SideBar, ResumeTable },
  props: ['layoutName'],
  data () {
    return {
      data: {}
    }
  },
  mounted () {
    const url = 'api/forum/sections/' + this.$route.params.section
    axios
      .get(url)
      .then(response => {
        this.data = response.data
      })
  }
}
</script>
