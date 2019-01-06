import * as Type from './../constants/Type';

var initial=[
    // {
    //     id:1,
    //     name:'name 1',
    //     status:'0',
    // },
    // {
    //     id:2,
    //     name:'name 2',
    //     status:'1',
    // },
    // {
    //     id:3,
    //     name:'name 3',
    //     status:'1',
    // }
]
// var lcStore = localStorage.getItem('task-list');
// if(lcStore && JSON.parse(lcStore)){
//     initial= JSON.parse(lcStore);
// }
const TableReducer= (state = initial, action)=>{
    var type = action.type;
    switch (type) {

        case Type.FETCH_TASK:
            var {taskList}= action;
            // localStorage.setItem('task-list', JSON.stringify(taskList));
            return [...taskList];
            
        // case Type.ADD_TASK:
        //     var {taskForm} = action;
        //     taskForm.id= state.length +1;
        //     state.push(taskForm);
        //     // localStorage.setItem('task-list', JSON.stringify(state));
        //     return [...state];

        // case Type.EDIT_TASK:
        //     var {id}= action.task;
        //     var index= state.findIndex((item)=>{
        //         return item.id === id;
        //     })
        //     if(index >=0){
        //         state[index]= action.task;
        //     }
        //     // localStorage.setItem('task-list', JSON.stringify(state));
        //     return [...state];
        // case Type.DELETE_TASK:
        //     var index= state.findIndex((item)=>{
        //         return item.id === action.id;
        //     })
        //     if(index >=0){
        //         state.splice(index, 1)
        //     }
        //     // localStorage.setItem('task-list', JSON.stringify(state));
        //     return [...state];
        default:
            return [...state]
    }
}

export default TableReducer;