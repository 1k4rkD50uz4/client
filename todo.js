import axios from 'axios';

async function getTodos() {
    let request = await axios.get("https://jsonplaceholder.typicode.com/todos");
    return request;
}
getTodos()
    .then(data => console.log(data))
    .then(() =>
        console.log('done')
    );