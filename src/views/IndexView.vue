<template>
  <div>
      <a-row>
          <a-col :span="6" :offset="14">
              <HomeView/>
          </a-col>
      </a-row>
  </div>
</template>

<script>
// import LoginView from "@/components/login/LoginView.vue";
import HomeView from "@/views/HomeView.vue";
export default {
    name: "IndexView",
    components:{
        // LoginView
        HomeView
    }
}
</script>

<style scoped>

</style>
