<template>
  <div class="form-container">
    <form>
      <textarea type="text" placeholder="English" v-model="eng" required />
      <textarea type="text" placeholder="Hebrew" v-model="heb" required />
    </form>
    <button class="btn" @click="saveCard">Submit</button>
  </div>
</template>

<script>
import db from "../main";
export default {
  data() {
    return {
      eng: "",
      heb: ""
    };
  },
  methods: {
    saveCard() {
      console.log(this.eng, this.heb);
      const newCard = {
        eng: this.eng,
        heb: this.heb
      };
      db.collection("darkgreen")
        .add(newCard)
        .then(() => {
          console.log("submitted");
          this.$router.push("/");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style scoped>
</style>