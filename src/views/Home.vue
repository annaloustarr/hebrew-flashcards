<template>
  <div class="home" @click="none">
    <div class="card-container">
      <div class="card" @click="none">
        <div class="front">
          <div class="eng">{{ this.currentCard.eng }}</div>
        </div>
        <div class="back">
          <div class="heb">{{ this.currentCard.heb }}</div>
        </div>
      </div>
    </div>
    <div>
      <b-button
        variant="outline-dark"
        size="sm"
        class="button"
        @click="getRandomCard"
        >Next Card</b-button
      >
    </div>
    <div>
      <b-button
        variant="outline-dark"
        size="sm"
        class="button"
        v-if="typeof this.currentCard.id !== 'undefined'"
        v-bind:to="{ name: 'update', params: { card_id: this.currentCard.id } }"
        tag="button"
        >Update Card</b-button
      >
      <div>
        <b-form-select
          v-model="selected"
          :options="options"
          size="sm"
          class="mt-3 width"
        ></b-form-select>
      </div>
      <div class="mt-3">
        current card set: <strong>{{ selected }}</strong>
      </div>
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
      currentCard: {},
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "Dark Green", text: "Dark Green" },
        { value: "Nesbo", text: "Nesbo" },
      ],
    };
  },
  created() {
    db.collection("darkgreen")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = {
            id: doc.id,
            eng: doc.data().eng,
            heb: doc.data().heb,
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
      // console.log(this.currentCard.id);
    },
    none() {},
  },
};
</script>
<style scoped>
.card-container {
  cursor: pointer;
  height: 240px;
  width: 320px;
  -webkit-perspective: 900px;
  perspective: 900px;
  position: relative;
  margin: auto;
  -webkit-transition: ease-in;
  transition: ease-in;
}

.card {
  cursor: pointer;
  margin: 2px;
  height: 240px;
  width: 320px;
  position: absolute;
  border: 1px solid #300;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  border-radius: 0;
  box-sizing: unset;
}

.card:hover {
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.card .front {
  height: 240px;
  width: 320px;
  backface-visibility: hidden;
  position: absolute;
  overflow: hidden;
  text-align: center;
  background-color: rgba(255, 248, 248, 1);
  backface-visibility: hidden;
}

.card .back {
  height: 240px;
  width: 320px;
  text-align: center;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  backface-visibility: hidden;
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
.button {
  margin-top: 20px;
  border-radius: 2px;
}
.width {
  width: 200px;
  border: 1px solid #495057;
}
*:hover,
*:focus,
*:active {
  outline: none;
  box-shadow: none !important;
  -webkit-appearance: none;
}
</style>
