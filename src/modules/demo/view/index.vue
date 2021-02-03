<template>
  <div class="demp-page">demo

    <div>{{ ces }}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("demo", [
      "ces",
    ]),
  },
  mounted() {
    this.getUserInfo().then(() => {
      console.log("getUserInfo --------------- ");
    })
  },
  methods: {
    ...mapActions("demo", [
      "getUserInfo",
    ])
  }
}
</script>