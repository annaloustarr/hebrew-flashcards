<template>
  <div>
    Update flashcards here
    {{this.eng}}
    {{this.heb}}
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
          console.log(doc.id);
          console.log("params", this.$route.params.card_id);
          this.id = doc.id;
          this.eng = doc.data().eng;
          this.heb = doc.data().heb;
        });
        console.log("can I see", this.eng, this.heb);
      });
  }
  //   beforeRouteEnter(to, from, next) {
  //     db.collection("darkgreen")
  //       .where("doc.id", "==", to.params.card_id)
  //       .get()
  //       .then(querySnapshot => {
  //         querySnapshot.forEach(doc => {
  //           next(vm => {
  //             vm.eng = doc.data.eng;
  //             vm.heb = doc.data.heb;
  //           });
  //         });
  //       });
  //   },
  //   watch: {
  //     $route: "fetchData"
  //   },
  //   methods: {
  //     fetchData() {
  //       db.collection("darkgreen")
  //         .where("doc.id", "==", this.$route.params.card_id)
  //         .get()
  //         .then(querySnapshot => {
  //           querySnapshot.forEach(doc => {
  //             this.eng = doc.data().eng;
  //             this.heb = doc.data().heb;
  //           });
  //         });
  //     }
  //   }
};
</script>

<style scoped>
</style>