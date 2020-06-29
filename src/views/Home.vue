<template>
  <div class="home">
    <div class="card-container">
      <div class="card">
        <div class="front">
          <div class="eng">English</div>
        </div>
        <div class="back">
          <div class="heb">עברית</div>
        </div>
      </div>
    </div>
    <button class="btn" onclick="{}">Draw Card</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  }
};
</script>
<style scoped>
.card-container {
  cursor: pointer;
  height: 360px;
  width: 360px;
  perspective: 900px;
  position: relative;
  margin: auto;
  transition: ease-in;
}

.card {
  height: 360px;
  width: 360px;
  position: absolute;
  border: 1px solid #300;
  transform-style: preserve-3d;
  transition: all 0.4s ease-in-out;
}

.card:hover {
  transform: rotateY(180deg);
  transition: all 0.4s ease-in-out;
}

.card .front {
  height: 360px;
  width: 360px;
  backface-visibility: hidden;
  position: absolute;
  overflow: hidden;
  text-align: center;
  background-color: rgba(255, 248, 248, 1);
}

.card .back {
  height: 360px;
  width: 360px;
  text-align: center;
  transform: rotateY(180deg);
}

.eng {
  color: #333;
  font-size: 2.3em;
  padding-top: 40%;
}

.heb {
  color: #333;
  font-size: 4.3em;
  padding-top: 20%;
}
.btn {
  margin-top: 20px;
}
</style>
