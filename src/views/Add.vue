<template>
  <div>
    <form @submit.prevent="saveCard">
      <div>
        <div class="card">
          <div class="front card-container">
            <textarea
              class="eng-input"
              type="text"
              placeholder="English"
              v-model="eng"
              required
            />
            <p v-if="engError">
              <b>{{ engError }}</b>
            </p>
          </div>
          <div class="back card-container">
            <textarea
              class="heb-input"
              type="text"
              placeholder="Hebrew"
              v-model="heb"
              required
            />
            <p v-if="hebError">
              <b>{{ hebError }}</b>
            </p>
          </div>
        </div>
      </div>
      <div>
        <b-button variant="outline-dark" size="sm" class="button" type="submit"
          >Submit</b-button
        >
      </div>
      <div>
        <b-button
          variant="outline-dark"
          size="sm"
          class="button"
          v-bind:to="{ name: 'home' }"
          tag="button"
          >Back</b-button
        >
      </div>
    </form>
  </div>
</template>

<script>
import db from "../main";
export default {
  data() {
    return {
      eng: "",
      heb: "",
      engError: "",
      hebError: "",
    };
  },
  methods: {
    saveCard() {
      const newCard = {
        eng: this.eng,
        heb: this.heb,
      };
      db.collection("darkgreen")
        .add(newCard)
        .then(() => {
          confirm("card added");
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
    },
    validateEng(value) {
      if (value.length == 0) {
        this.engError = "Enter an English word";
      } else if (value.length > 70) {
        this.engError = "must be less than 70 characters";
      } else {
        this.engError = "";
      }
    },
    validateHeb(value) {
      if (value.length == 0) {
        this.hebError = "Enter an Hebrew word";
      } else if (value.length > 70) {
        this.hebError = "must be less than 70 characters";
      } else {
        this.hebError = "";
      }
    },
  },
  watch: {
    eng(value) {
      this.eng = value;
      this.validateEng(value);
    },
    heb(value) {
      this.heb = value;
      this.validateHeb(value);
    },
  },
};
</script>

<style scoped>
.card-container {
  cursor: pointer;
  height: 240px;
  width: 360px;
  perspective: 900px;
  position: relative;
  margin: auto;
}

.card .front {
  height: 240px;
  width: 320px;
  overflow: hidden;
  text-align: center;
  border: 1px solid #300;
  background-color: rgba(255, 248, 248, 1);
}

.card .back {
  margin-top: 10px;
  height: 240px;
  width: 320px;
  overflow: hidden;
  text-align: center;
  border: 1px solid #300;
}
.eng-input {
  color: #333;
  font-size: 32px;
  padding: 16px;
  padding-top: 10%;
  padding-bottom: 10%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  outline: none;
  margin-top: 10%;
  border: none;
  background-color: rgba(255, 248, 248, 1);
  width: 300px;
}
.heb-input {
  color: #333;
  font-size: 32px;
  padding: 16px;
  padding-top: 10%;
  padding-bottom: 10%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  outline: none;
  margin-top: 10%;
  border: none;
  background-color: white;
  width: 300px;
}
.button {
  margin-top: 20px;
}
</style>
