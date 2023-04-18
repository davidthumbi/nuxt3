<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae placeat
      iste repudiandae consectetur! In veritatis aliquid laborum exercitationem
      temporibus saepe?
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae placeat
      iste repudiandae consectetur! In veritatis aliquid laborum exercitationem
      temporibus saepe?
    </p>
    <!-- <div>{{ data.message }}</div> -->
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  // const { data } = await useFetch('/api/ninja?name=mario', {
  //   method: 'POST',
  //   body: { age: 20}
  // })

  // fetch with api request
  // const { data } = await useFetch('/api/ninja')
  const { data } = await useFetch('/api/currency/USD')
</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>
