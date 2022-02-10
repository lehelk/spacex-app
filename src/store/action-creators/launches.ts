import { LaunchesActionTypes } from "../action-types/launches";
import { Dispatch } from 'redux'
import { getLaunchesData, LaunchData } from "../../api/launches"
import { Action } from "../actions"

export const getLaunchesRequest = () : Action => ({
    type: LaunchesActionTypes.GET_LAUNCHES_REQUEST,
})

export const getLaunchesSuccess = (payload: LaunchData[]) : Action => ({
    type: LaunchesActionTypes.GET_LAUNCHES_SUCCESS,
    payload,
})

export const getLaunchesFailure = () : Action => ({
    type: LaunchesActionTypes.GET_LAUNCHES_FAILURE,
})

export const getLaunches = () => async (dispatch: Dispatch<Action>) => {
    dispatch(getLaunchesRequest())
    try {
        const launches = await getLaunchesData()
        dispatch(getLaunchesSuccess(launches))
    } catch (e) {
        dispatch(getLaunchesFailure())
    }
}
