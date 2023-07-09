import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// export const toggleCompleted = (taskId) => {
//     return {
//         type: "tasks/toggleCompleted",
//         payload: taskId,
//     }
// }
export const toggleCompleted = createAction("tasks/toggleCompleted");


// export const deleteTask = taskId => {
//     return {
//         type: "tasks/deleteTask",
//         payload: taskId
//     };
// };

export const deleteTask = createAction("tasks/deleteTask", (taskId) => {
    return {
        payload: taskId
    }
})

// export const addTask = (text) => {
//     return {
//         type: "tasks/addTask",
//         payload: {
//             id: nanoid(),
//             text,
//             completed: false,
//         }
//     }
// }
export const addTask = createAction("tasks/addTask", (text) => {
    return {
        payload: {
            id: nanoid(),
            text,
            completed: false,
        }
    }
})

// export const setStatusFilter = value => {
//     return {
//         type: "filters/setStatusFilter",
//         payload: value,
//     };
// };
export const setStatusFilter = createAction("filters/setStatusFilter");


