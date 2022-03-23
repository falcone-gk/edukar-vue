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
  name: 'SubsectionView',
  components: { SideBar, ResumeTable },
  props: ['layoutName'],
  data () {
    return {
      data: {}
    }
  },
  mounted () {
    const url = 'api/forum/subsection/' + this.$route.params.subsection
    console.log(url)
    axios
      .get(url)
      .then(response => {
        this.data = response.data
      })
  }
}
</script>
