<template>
  <HeaderMobile v-if="mq.smMinus" />
  <header v-if="mq.mdPlus">
    <nav>
      <div class="logo">
        <img src="@/assets/edukar_logo.jpg" alt="logo">
      </div>
      <div class="search-bar">
        <form class="search-form animated-form">
          <font-awesome-icon icon="search" />
          <input type="search" class="search-input" placeholder="Buscar...">
        </form>
      </div>
      <div class="links-list">
        <ul class="nav-list">
          <li class="nav-list-item">
            <AnimatedLink
            value="Blog"
            color="white"
            extra_class="nav-list-item-link"/>
          </li>
          <li class="nav-list-item">
            <AnimatedLink
            value="Forum"
            color="white"
            link_to="/"
            extra_class="nav-list-item-link"/>
          </li>
          <li class="nav-list-item">
            <AnimatedLink
            value="Login"
            color="white"
            link_to="/login"
            extra_class="nav-list-item-link"/>
          </li>
          <li class="nav-list-item">
            <AnimatedLink
            value="Registrarse"
            color="white"
            link_to="/register"
            extra_class="nav-list-item-link"/>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import HeaderMobile from '@/components/HeaderMobile'
import AnimatedLink from '@/components/custom_elements/AnimatedLink'

export default {
  name: 'HeaderNav',
  inject: ['mq'],
  components: { HeaderMobile, AnimatedLink }
}
</script>

<style>
.animated-form {
  transition: all .4s ease-in-out;
}
.animated-form:hover {
  flex-grow: .75;
}
.nav-list {
  list-style-type: none;
  padding: 0;
}
.nav-list-item {
  display: inline-block;
  margin: 0 1em;
}
</style>
