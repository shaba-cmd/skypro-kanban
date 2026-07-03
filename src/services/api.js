// import axios from "axios"

// const API_URL = 'https://wedev-api.sky.pro/api/user/kanban'

// export async function getTasks({ token }) {
//     try {
//         const data = await axios.get(API_URL, {
//             headers: {
//                 Authorization: 'Bearer ' + token,
//             },
//         })
//         return data.data.tasks
//     } catch(error) {
//         throw new Error(error.message, {cause: error})
//     }
// }

// export async function getTasksId({ token, id }) {
//     try {
//         const data = await axios.get(API_URL + `/${id}`, {
//             headers: {
//                 Authorization: 'Bearer ' + token,
//             },
//         })
//         return data.data.tasks
//     } catch(error) {
//         throw new Error(error.message, {cause: error})
//     }
// }

// export async function postTasks({ token, tasks }) {
//     try {
//         const data = await axios.post(API_URL, tasks, {
//             headers: {
//                 Authorization: 'Bearer ' + token,
//                 'Content-Type': 'text/html',
//             },
//         })
//         return data.data.tasks
//     } catch(error) {
//         throw new Error(error.message, {cause: error})
//     }
// }

// export async function putTasks({ token, id }) {
//     try {
//         const data = await axios.put(API_URL + `/${id}`, {
//             headers: {
//                 Authorization: 'Bearer ' + token,
//                 'Content-Type': 'text/html',
//             },
//         })
//         return data.data.tasks
//     } catch(error) {
//         throw new Error(error.message, {cause: error})
//     }
// }

// export async function deleteTasks({ token, id }) {
//     try {
//         const data = await axios.delete(API_URL + `/${id}`, {
//             headers: {
//                 Authorization: 'Bearer ' + token,
//                 'Content-Type': 'text/html',
//             },
//         })
//         return data.data.tasks
//     } catch(error) {
//         throw new Error(error.message, {cause: error})
//     }
// }