<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: $font-family-default;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $color-primary;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: 400;
    color: $color-primary;

    &.router-link-exact-active {
      color: $color-secondary;
    }
  }
}
</style>
