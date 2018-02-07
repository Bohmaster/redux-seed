export class TodoService {
    constructor() {
        this.API_URL = 'https://jsonplaceholder.typicode.com/posts/'
    }

    setResponse = (data) => {
        return {
            type: 'ADD_TODO_ASYNC',
            payload: data
        }
    }

    fetchFake = () => {
        return fetch(this.API_URL)
            .then((response) => {
                return response.json()
            })
            .catch((error) => {
               console.log(error) 
               return error
            })
    }

}

export default TodoService

