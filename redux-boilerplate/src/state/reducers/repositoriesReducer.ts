import { ActionType, Action } from "../actions/action-types";

interface repositoriesState {
    loading: boolean,
    error: string | null,
    data: string[]
}
export interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}

export interface SearchRepositoriesSuccessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
    payload: string[];
}

export interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string
}
const initialState = {
    loading: false,
    error: null,
    data: []
}
const reducer = (state: repositoriesState = initialState,
    action: Action): repositoriesState => {
        if( action.type === 'search_repositories_success'){
            
        }
        switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return {loading: true, error: null, data: []};
        case ActionType.SEARCH_REPOSITORIES_SUCCESS:
            return {loading: false, error: null, data: action.payload};
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return {loading: false, error: action.payload, data: []};
        default: 
            return state;
    }
};

export default reducer;