import Axios from "axios";

const axiosClient = Axios.create({
    baseURL : `${import.meta.env.VITE_BACKEND_URL}/api`,
    withCredentials: true,
    // headers: {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    // },
    headers : {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
    }
});

// axiosClient.interceptors.response.use(response => {
//     return response;
// }, error => {
//     if (error.response && error.response.status === 401) {
//         // localStorage.removeItem('user')
//         localStorage.removeItem('notification');
//         window.location.reload();
//         return error;
//     }
//     throw error;
// })

export default axiosClient;