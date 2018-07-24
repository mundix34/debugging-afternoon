import axios from 'axios';

export default function productsController(){
const getAllProducts = function() {
    return axios.get("https://practiceapi.devmountain.com/products/")
    .then(response => response.data);
}
}
// export default getAllProducts