import { SearchRepositoriesAction, SearchRepositoriesSuccessAction, SearchRepositoriesErrorAction } from "../reducers/repositoriesReducer";
export enum ActionType {
    SEARCH_REPOSITORIES = 'search_repositories',
    SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
    SEARCH_REPOSITORIES_ERROR = 'search_repositories_error'
}


export type Action = SearchRepositoriesAction |
    SearchRepositoriesSuccessAction |
    SearchRepositoriesErrorAction;
