export const FAKE_API_URL = 'https://jsonplaceholder.typicode.com/posts/'
export const setResponse = (data) => {
    return {
        type: 'ADD_TODO_ASYNC',
        payload: data
    }
}

export const fetchFake = () =>
    fetch(FAKE_API_URL)
        .then((response) =>
            response.json())
        .catch((error) =>
            new Error(error))
