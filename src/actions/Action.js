import * as Type from './../constants/Type';
import {callAPI} from './../utilities/axios';

export const FETCH_TASK_REQUEST=()=>{
    return (dispatch)=>{
        return callAPI('GET', 'task-list', null).then(res=>{
            if(res.status ===200){
                dispatch(FETCH_TASK(res.data))
            }else if(res ===null){
                console.error('Failure to connect to server');
            }
        })
    }
}

export const ADD_TASK_REQUEST=(taskForm)=>{
    delete taskForm.id;
    delete taskForm.isDisplay;
    return (dispatch)=>{
        return callAPI('POST', 'task-list', taskForm).then(res=>{
            if(res.status ===201){
                dispatch(FETCH_TASK_REQUEST())
            }else{
                console.error('Failure to connect to server');
            }
        })
    }
}

export const EDIT_TASK_REQUEST=(task)=>{
    delete task.isDisplay;
    return (dispatch)=>{
        return callAPI('PUT', `task-list/${task.id}`, task).then(res=>{
            if(res.status ===200){
                dispatch(FETCH_TASK_REQUEST())
            }else{
                console.error('Failure to connect to server');
            }
        })
    }
}

export const DELETE_TASK_REQUEST=(id)=>{
    return (dispatch)=>{
        return callAPI('DELETE', `task-list/${id}`, null).then(res=>{
            if(res.status ===200){
                dispatch(FETCH_TASK_REQUEST())
            }else{
                console.error('Failure to connect to server');
            }
        })
    }
}

export const FETCH_TASK=(taskList)=>{
    return {
        type: Type.FETCH_TASK,
        taskList
    }
}

// export const ADD_TASK= (taskForm)=>{
//     return {
//         type: Type.ADD_TASK,
//         taskForm
//     }
// }

// export const EDIT_TASK= (task)=>{
//     return {
//         type: Type.EDIT_TASK,
//         task
//     }
// }

// export const DELETE_TASK= (id)=>{
//     return {
//         type: Type.DELETE_TASK,
//         id,
//     }
// }

export const CHANGE_INPUT= (taskForm)=>{
    return {
        type: Type.CHANGE_INPUT,
        taskForm
    }
}