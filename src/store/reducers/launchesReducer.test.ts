import { LaunchesActionTypes } from '../action-types/launches'
import reducer, { initialState } from './launchesReducer'

test('should return initialState by default', () => {
    expect(reducer(undefined, { type: 'DummyActionForTests' })).toBe(initialState)
})

test('should leave state untouched when action type is unrelated to the reducer', () => {
    const prevState = {
        loading: true,
        error: true,
        data: [
            {
                details: 'details',
                launch_date_utc: 'date string',
                mission_name: 'name',
            }
        ],
    }

    expect(reducer(prevState, { type: 'DummyActionForTests' })).toBe(prevState)
})

test('GET_LAUNCHES_REQUEST', () => {
    const prevState = {
        loading: false,
        error: false,
        data: [
            {
                details: 'details',
                launch_date_utc: 'date string',
                mission_name: 'name',
            }
        ],
    }

    const newState = {
        loading: true,
        error: false,
        data: [],
    }

    expect(reducer(prevState, { type: LaunchesActionTypes.GET_LAUNCHES_REQUEST })).toEqual(newState)
})

test('GET_LAUNCHES_FAILURE', () => {
    const prevState = {
        loading: false,
        error: false,
        data: [
            {
                details: 'details',
                launch_date_utc: 'date string',
                mission_name: 'name',
            }
        ],
    }

    const newState = {
        loading: false,
        error: true,
        data: [],
    }

    expect(reducer(prevState, { type: LaunchesActionTypes.GET_LAUNCHES_FAILURE })).toEqual(newState)
})

test('GET_LAUNCHES_SUCCESS', () => {
    const prevState = {
        loading: true,
        error: false,
        data: [
            {
                details: 'details 1',
                launch_date_utc: 'date string 1',
                mission_name: 'name 1',
            }
        ],
    }

    const payload = [
        {
            details: 'details 2',
            launch_date_utc: 'date string 2',
            mission_name: 'name 2',
        },
        {
            details: 'details 3',
            launch_date_utc: 'date string 3',
            mission_name: 'name 3',
        },
    ]

    const newState = {
        loading: false,
        error: false,
        data: payload,
    }

    expect(reducer(prevState, { type: LaunchesActionTypes.GET_LAUNCHES_SUCCESS, payload })).toEqual(newState)
})
