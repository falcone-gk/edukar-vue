<template>
  <div class="section">
    <div class="section-header">
      <h1>
        <animated-link
        :value="data.name"
        :link_to="{ name: 'section', params: { section: data.slug } }"
        color="white"/>
      </h1>
    </div>
    <div class="section-content">
      <div v-for="(subsection, i) in data.subsection" :key="i" class="content-row">
        <div class="left-side">
          <h2>
            <animated-link
            :value="subsection.name"
            color="black"/>
          </h2>
        </div>
        <div class="right-side">
          <div v-for="(col, i) in right_side" :class="'row-info '+ 'item' + (i+1)" :style="[getSize(col), showRowInfo(col.showSize)].join(';')" :key="i">
            <strong>{{ col.header }}</strong>
            <p>{{ subsection['item' + (i+1)] }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import AnimatedLink from '@/components/custom_elements/AnimatedLink'

export default {
  name: 'ResumeTable',
  inject: ['mq'],
  components: { AnimatedLink },
  props: ['data', 'right_side'],
  methods: {
    showRowInfo (size) {
      if (!this.mq[size]) {
        return 'display: none'
      }
      return ''
    },
    getSize (item) {
      return 'width: ' + item.size
    }
  }
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
