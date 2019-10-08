import apiItems from '../../api/apiItem'
export default{

    state: {
        items: []
    },
    getters: {
        getItem(state){

            return state.items
        }
    },
    mutations: {
        setItems(state, items){
            state.items = items
        },
        deleteItem(state, id){
          state.items = state.items.filter(function(item) {
            return item.id !== id ;
          });
        }
    },
    actions: {
      getAllItems({commit}){
      
        return apiItems.setItems().then((response) => {
            commit('setItems', response.data)
        
            return response.data
        }).catch((error) => {
            throw error
        })
      }
    }
}