import { LaunchData } from "../../api/launches"
import { LaunchesActionTypes } from "../action-types/launches"

interface GetLaunchesRequestAction {
    type: LaunchesActionTypes.GET_LAUNCHES_REQUEST,
}
interface GetLaunchesSuccessAction {
    type: LaunchesActionTypes.GET_LAUNCHES_SUCCESS,
    payload: LaunchData[],
}
interface GetLaunchesFailureAction {
    type: LaunchesActionTypes.GET_LAUNCHES_FAILURE,
}

interface DummyActionForTests {
    type: 'DummyActionForTests',
}

export type Action = GetLaunchesRequestAction | GetLaunchesSuccessAction | GetLaunchesFailureAction | DummyActionForTests
