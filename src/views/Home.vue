<template>
  <div class="home">
    <div class="card-container">
      <div class="card">
        <div class="front">
          <div class="eng">{{this.currentCard.eng}}</div>
        </div>
        <div class="back">
          <div class="heb">{{this.currentCard.heb}}</div>
        </div>
      </div>
    </div>
    <div>
      <button class="btn" @click="getRandomCard">Next Card</button>
    </div>
    <div>
      <router-link
        class="btn"
        v-if="typeof this.currentCard.id !== 'undefined'"
        v-bind:to="{name: 'update', params : {card_id: this.currentCard.id}}"
        tag="button"
      >Update Card</router-link>
    </div>
  </div>
</template>

<script>
import db from "../main";
export default {
  name: "Home",
  data() {
    return {
      cards: [],
      currentCard: {}
    };
  },
  created() {
    db.collection("darkgreen")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          const data = {
            id: doc.id,
            eng: doc.data().eng,
            heb: doc.data().heb
          };
          this.cards.push(data);

          this.getRandomCard();
        });
      });
  },
  methods: {
    getRandomCard() {
      const cards = this.cards;
      this.currentCard = cards[Math.floor(Math.random() * cards.length)];
      console.log(this.currentCard.id);
    }
  }
};
</script>
<style scoped>
.card-container {
  cursor: pointer;
  height: 260px;
  width: 360px;
  perspective: 900px;
  position: relative;
  margin: auto;
  transition: ease-in;
}

.card {
  height: 260px;
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
  height: 260px;
  width: 360px;
  backface-visibility: hidden;
  position: absolute;
  overflow: hidden;
  text-align: center;
  background-color: rgba(255, 248, 248, 1);
}

.card .back {
  height: 260px;
  width: 360px;
  text-align: center;
  transform: rotateY(180deg);
}

.eng {
  color: #333;
  font-size: 32px;
  padding: 16px;
  padding-top: 10%;
}

.heb {
  color: #333;
  font-size: 38px;
  padding: 16px;
  padding-top: 10%;
}
.btn {
  margin-top: 20px;
}
</style>
