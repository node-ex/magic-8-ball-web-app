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

<style lang="postcss">
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: blue;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: 400;
    color: blue;

    &.router-link-exact-active {
      color: blue;
    }
  }
}
</style>
