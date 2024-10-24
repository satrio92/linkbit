<template>
  <div id="home" class="w-full h-screen bg-black">
    <h1 class="text-2xl text-center text-white font-poppins font-bold">This is Home Page</h1>
    <router-link to="/location" class="text-white text-center">Location</router-link>
  </div>
</template>

<script>

  export default {
    name: "Home",
    components: {

    }
  }

</script>