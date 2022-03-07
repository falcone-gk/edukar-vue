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
/**These styles affects when there is no placeholder (there is text in input) */
.label-control {
  position: absolute;
  top: -17px;
  left: -1.2px;
  z-index: 1;
  font-size: 12px;
  color: rgb(196, 200, 209);
  transition: all .3s;
}
.form-control {
  position: absolute;
  width: 100%;
  border: none;
  border-bottom: 1px solid rgb(196, 200, 209);
  outline: none;
  padding-bottom: 5px;
  z-index: 2;
  color: white;
  background-color: transparent;
  font-size: 12px;
}
.form-control::placeholder {
  color: transparent;
}
.form-control:placeholder-shown~.label-control {
  top: 1px;
  color: rgb(196, 200, 209);
  font-size: 14px;
}
.form-control:focus {
  border-bottom: 1px solid var(--input-color);
}
.form-control:focus~.label-control {
  top: -17px;
  color: var(--input-color);
  font-size: 12px;
}
</style>
