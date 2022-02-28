<template>
  <header>
    <nav>
      <div class="logo">
        <img src="@/assets/logo.png" alt="logo">
      </div>
      <div class="search-bar">
        <form class="search-form">
          <input type="search" class="search-input">
        </form>
      </div>
      <div class="links-list">
        <ul>
          <li>Blog</li>
          <li>Forum</li>
          <li>Login</li>
          <li>Registrarse</li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderNav'
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  background-color: #45526E;
  padding: .4em 4em;
  gap: 2em;
}
.logo img {
  height: 50px;
  width: 50px;
}
.search-bar {
  flex: .5 0 150px;
}
.search-form {
  position: relative;
  width: 350px;
  height: 40px;
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  background: #fff;
  transition: all .8s ease;
}
.search-form:hover {
  width: 100%;
}
.search-input {
  position: absolute;
  top: 10px;
  left: 38px;
  font-size: 14px;
  background: none;
  color: #5a6674;
  width: calc(100% - 50px);
  height: 20px;
  border: none;
  appearance: none;
  outline: none;
  transition: all .8s ease;
}
.links-list {
  margin-left: auto;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 1em;
  color: white;
}
</style>
