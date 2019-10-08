<template>
  <div>
    <h1>{{getItem.title}}</h1>
    <p>{{getItem.body}}</p>
    <h3>Коментарии</h3>
    <ul>
      <li v-for="comment in comments" :key="comment.id">
        <span>{{comment.email}}</span>
        <h4>{{comment.name}}</h4>
        <p>{{comment.body}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  import apiItems from '../api/apiItem'
  export default {
    data: function () {
      return {
        comments: null
      }
    },
    created(){
        this.$store.dispatch('getAllItems')
        let todoId = this.$route.params.id
        apiItems.getItemComent(todoId).then((response) => {
          this.comments = response.data

        }).catch((error) => {
          throw error
        })
    },
    computed:{
      getItem(){
        let item =  this.$store.getters.getItem
        let todoId = this.$route.params.id
        let  todo = item.find(function(item) {
          return item.id == todoId ;
        });
        return todo
      },

    }
}

</script>