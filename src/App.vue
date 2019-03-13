<template>
  <div id="app">
    <div id="nav">
      <RouterLink to="/">
        Home
      </RouterLink> |
      <RouterLink to="/about">
        About
      </RouterLink>
    </div>
    <RouterView />
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
