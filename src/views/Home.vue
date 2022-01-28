<template>
<AppHeader/>
  <div v-for="item in dataList" v-bind:key = "item.message" class="card">
    <div class="card-header">Featured</div>
    <div class="card-body">
      <h5 class="card-title">{{item.header}}</h5>
      <p class="card-text">
        With supporting text below as a natural lead-in to additional content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>


</template>

<script>
import  AppHeader from '@/components/Shared/AppHeader.vue'
import axios from 'axios'
import {ref} from 'vue'

export default {
  components: {
    AppHeader
  },
  setup() {
    const dataList = ref(null)
    axios
      .get("data.json")
      .then((response) => {
        dataList.value = response.data;
      })
      .catch((e) => {
        console.log(e);
      });

        return {
       
       dataList 
    }
  },
 
  
};
</script>


<style>
.card {
  margin: 0 auto;
  float: none; 
  margin-bottom: 10px; 
  max-width: 80%;
}
</style>