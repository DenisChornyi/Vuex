
export default{
    setItems(){
        return axios.get('https://jsonplaceholder.typicode.com/posts')
    },
    deleteItems(id){
      return axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
    },
    getItemComent(id){
      return axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + id)
    }
}