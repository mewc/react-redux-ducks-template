import * as actions from './actions';
import { handleActions } from 'redux-actions';

export const initState = {
    loading: {}
}

const {
    loadingStart, loadingEnd
} = actions;


export default handleActions({
    [loadingStart]: (state, action) => {
        let l = state.loading;
        l[action.type.split("/")[0]] = true;
        return { ...state, loading: l }
    },
    [loadingEnd]: (state, action) => { //end loading actions
        let l = state.loading;
        if (Object.keys(l).length > 1) {
            delete l[action.type.split("/")[0]];
        } else {
            l = {};
        }
        return { ...state, loading: l }
    }
}, initState)