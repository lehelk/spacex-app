import { LaunchData } from "../../api/launches"
import { LaunchesActionTypes } from "../action-types/launches"
import { Action } from "../actions"

type LaunchesStore = {
    loading: boolean,
    error: boolean,
    data: LaunchData[],
}

export const initialState : LaunchesStore = {
    loading: false,
    error: false,
    data: [],
};

const reducer = (state: LaunchesStore = initialState, action: Action) => {
    switch (action.type) {
        case LaunchesActionTypes.GET_LAUNCHES_REQUEST:
            return {
                loading: true,
                error: false,
                data: [],
            };
        case LaunchesActionTypes.GET_LAUNCHES_SUCCESS:
            return {
                loading: false,
                error: false,
                data: action.payload,
            };
        case LaunchesActionTypes.GET_LAUNCHES_FAILURE:
            return {
                loading: false,
                error: true,
                data: [],
            };
        default:
            return state
    }
}

export default reducer
