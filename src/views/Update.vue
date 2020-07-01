<template>
  <div>
    <div>
      <div class="card">
        <div class="front card-container">
          <!-- <div class="eng">{{this.eng}}</div> -->
          <form>
            <textarea class="eng-input" type="text" placeholder="English" v-model="eng" required />
          </form>
          <button class="btn" @click="updateEng">Edit</button>
        </div>
        <div class="back card-container">
          <form>
            <textarea class="heb-input" type="text" placeholder="Hebrew" v-model="heb" required />
          </form>
          <button class="btn" @click="updateHeb">Edit</button>
        </div>
      </div>
    </div>
    <div>
      <button class="btn" @click="deleteCard">Delete</button>
    </div>
    <div>
      <router-link class="btn" v-bind:to="{name: 'home'}" tag="button">Back</router-link>
    </div>
  </div>
</template>

<script>
import db from "../main";
import firebase from "firebase/app";
export default {
  data() {
    return {
      id: "",
      eng: "",
      heb: ""
    };
  },
  created() {
    db.collection("darkgreen")
      .where(
        firebase.firestore.FieldPath.documentId(),
        "==",
        this.$route.params.card_id
      )
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.id = doc.id;
          this.eng = doc.data().eng;
          this.heb = doc.data().heb;
        });
      });
  },
  methods: {
    deleteCard() {
      if (confirm("Are you sure?")) {
        db.collection("darkgreen")
          .where(
            firebase.firestore.FieldPath.documentId(),
            "==",
            this.$route.params.card_id
          )
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              if (confirm("card deleted")) {
                this.$router.push({ path: "/" });
              }
            });
          });
      }
    },
    updateEng() {
      if (confirm("Are you sure?")) {
        db.collection("darkgreen")
          .where(
            firebase.firestore.FieldPath.documentId(),
            "==",
            this.$route.params.card_id
          )
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.update({ eng: this.eng });
              if (confirm("card updated")) {
                this.$router.push({ path: "/" });
              }
            });
          });
      }
    },
    updateHeb() {
      if (confirm("Are you sure?")) {
        db.collection("darkgreen")
          .where(
            firebase.firestore.FieldPath.documentId(),
            "==",
            this.$route.params.card_id
          )
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.update({ heb: this.heb });
              if (confirm("card updated")) {
                this.$router.push({ path: "/" });
              }
            });
          });
      }
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
}

.card .front {
  height: 260px;
  width: 360px;
  overflow: hidden;
  text-align: center;
  border: 1px solid #300;
  background-color: rgba(255, 248, 248, 1);
}

.card .back {
  margin-top: 10px;
  height: 260px;
  width: 360px;
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
}
.btn {
  margin-top: 20px;
}
</style>
