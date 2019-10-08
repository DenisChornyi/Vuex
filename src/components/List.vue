<template>
  <div>
    <ul>
      <li v-for="item in getItem" :key="item.id">
        <router-link :to="'/todo/'+item.id ">
          <h3>{{item.title}}</h3>
        </router-link>
        <button @click="removeTodo(item.id)">&times;</button>
      </li>
    
    </ul>
  </div>
</template>

<script>
  import apiItems from '../api/apiItem'
  export default {
    data: function () {
      return {
        todo: null
      }
    },
    created(){
      this.$store.dispatch('getAllItems')
    },


  methods: {
    removeTodo(id){
      apiItems.deleteItems(id).then((response) => {
        this.$store.commit('deleteItem' , id)
        return response
      }).catch((error) => {
        throw error
      })
    }
  },
  computed:{
    getItem(){
      return this.$store.getters.getItem
    },
  }
  
}
</script>
<style>
  li{
    position: relative;
    width: 90%;
    height: auto;
    padding: 10px;
    background: #cecece;
    border-radius: 5px;
    list-style: none;
    margin: 5px 0;
  }
  li:hover{
    opacity: 0.7;
  }
  button{
    position: absolute;
    right: 10px;
    top: calc(50% - 12px);
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: red;
    color: white;
    border: none;
    font-size: 20px;
    display: flex;
    align-content: center;
    justify-content: center;
  }
</style>