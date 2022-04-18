<template>
  <div class="section">
    <div class="section-header">
      <h1>
        <animated-link
        :value="data.name"
        :link_to="headerLink()"
        color="white"/>
      </h1>
    </div>
    <div class="section-content">
      <div v-for="(subsection, i) in data.subsection" :key="i" class="content-row">
        <div class="left-side">
          <h2>
            <animated-link
            :value="subsection.name"
            color="black"
            :link_to="{ name: 'subsection', params: { section: data.slug, subsection: subsection.slug } }"/>
          </h2>
        </div>
        <div class="right-side">
          <div
          v-for="(col, i) in rightSide"
          :class="'row-info '+ 'item' + (i+1)"
          :style="[getSize(col), showRowInfo(col.showSize)].join(';')"
          :key="i">
            <strong>{{ col.header }}</strong>
            <p>{{ subsection['item' + (i+1)] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, inject, defineProps } from 'vue'
import { useRoute } from 'vue-router'
import AnimatedLink from '@/components/custom_elements/AnimatedLink'

const mq = inject('mq')
const props = defineProps(['data', 'tableType'])
const route = useRoute()
const rightSide = ref('')
const extraInfoNoSub = [
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
const extraInfoSub = [
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

const setRighSideValues = () => {
  if (props.tableType === 'subsection') {
    rightSide.value = extraInfoSub
  } else {
    rightSide.value = extraInfoNoSub
  }
}
setRighSideValues()

const showRowInfo = (size) => {
  if (!mq[size]) {
    return 'display: none'
  }
  return ''
}

const getSize = (item) => {
  return 'width: ' + item.size
}

const headerLink = () => {
  if (route.name === 'subsection') {
    return { name: 'subsection', params: { section: props.data.section, subsection: props.data.slug } }
  }

  const defaultRoute = { name: 'section', params: { section: props.data.slug } }
  return defaultRoute
}

</script>

<style>
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
  display: flex;
  align-items: center;
  padding: 10px;
  height: 70px;
  border-bottom: 1px solid #cdebfd;
}
.left-side {
  margin-right: auto;
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
.right-side {
  display: flex;
}
.row-info {
  place-self: center;
}
.row-info * {
  font-size: .8em;
}
.row-info p {
  font-weight: 400;
}
</style>
