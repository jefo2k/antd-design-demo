<template>
  <div>
    <div>
      <p>Buttons:</p>
      <a-button type="primary" shape="circle" icon="search" />
      <a-button type="primary" shape="circle">
        A
      </a-button>
      <a-button type="primary" icon="search">
        Search
      </a-button>
      <a-button shape="circle" icon="search" />
      <a-button icon="search">
        Search
      </a-button>
      <a-button shape="circle" icon="search" />
      <a-button icon="search">
        Search
      </a-button>
      <a-button type="dashed" shape="circle" icon="search" />
      <a-button type="dashed" icon="search">
        Search
      </a-button>
      
      <a-button-group>
        <a-button>Cancel</a-button>
        <a-button type="primary">
          OK
        </a-button>
      </a-button-group>
      <a-button-group>
        <a-button disabled>
          L
        </a-button>
        <a-button disabled>
          M
        </a-button>
        <a-button disabled>
          R
        </a-button>
      </a-button-group>
      <a-button-group>
        <a-button type="primary">
          L
        </a-button>
        <a-button>M</a-button>
        <a-button>M</a-button>
        <a-button type="dashed">
          R
        </a-button>
      </a-button-group>

      <a-button type="primary" block>
        Primary
      </a-button>
      <a-button block>
        Default
      </a-button>
      <a-button type="dashed" block>
        Dashed
      </a-button>
      <a-button type="danger" block>
        Danger
      </a-button>
      <a-button type="link" block>
        Link
      </a-button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
