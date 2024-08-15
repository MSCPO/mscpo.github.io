<template>
    <button @click="playSound">
      点击我
    </button>
</template>
  
<script>
export default {
    methods: {
      playSound() {
        const audio = new Audio('click_stereo.ogg');
        audio.play();
      }
    }
}
</script>