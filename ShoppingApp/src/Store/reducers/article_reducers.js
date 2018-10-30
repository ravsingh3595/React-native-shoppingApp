export default function (state={}, action){

    switch(action.type){
        case 'GET_ARTICLES':
            return {...state,article:action.payload}
        default:
            return state;
    }
}