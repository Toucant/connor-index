import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../actions/action-types";

export const searchRepositories = (searchTerm: string) => {
    return async (dispatch:Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        });

        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: searchTerm
                }
            });
            const packNames = data.objects.map((result:any) => {
                return result.package.name;
            })
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
                payload: packNames,
            })
        } catch(err: any) {
            dispatch ({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message,
            });
        }
    };
}