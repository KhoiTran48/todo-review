import * as Type from './../constants/Type';
import {TASK_FORM} from './../constants/Form';
var initial=TASK_FORM
var ssForm=sessionStorage.getItem('task-form');
if(ssForm && JSON.parse(ssForm)){
    initial = JSON.parse(ssForm);
}
const FormReducer= (state=initial, action)=>{
    var type= action.type;
    switch (type) {
        case Type.CHANGE_INPUT:
            var {taskForm} = action;
            sessionStorage.setItem('task-form', JSON.stringify(taskForm))
            return {...taskForm}
    
        default:
            return {...state}
    }
}

export default FormReducer;