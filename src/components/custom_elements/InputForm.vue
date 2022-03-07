<template>
  <div class="form-group">
    <input v-model="value" class="form-control" :type="type" :placeholder="label">
    <label class="label-control">{{ label }}</label>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  name: 'InputForm',
  props: ['label', 'type']
}
</script>

<style>
.form-group {
  position: relative;
  height: fit-content;
  margin: 1em;
}
.label-control {
  position: absolute;
  top: -17px;
  left: -1.2px;
  z-index: 1;
  font-size: 10px;
  transition: all .3s;
}
.form-control {
  position: absolute;
  width: 100%;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  padding-bottom: 5px;
  z-index: 2;
  background-color: transparent;
  font-size: 10px;
}
.form-control::placeholder {
  color: transparent;
}
.form-control:placeholder-shown~.label-control {
  top: 1px;
}
.form-control:focus~.label-control {
  top: -17px;
}
</style>
