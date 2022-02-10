import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'

import { LaunchesActionTypes } from '../action-types/launches'
import { getLaunchesRequest, getLaunchesSuccess, getLaunchesFailure, getLaunches } from './launches'

const mockStore = configureMockStore([thunk])

describe ('Action creators', () => {
    test('getLaunchesRequest', () => {
        expect(getLaunchesRequest()).toEqual({type: LaunchesActionTypes.GET_LAUNCHES_REQUEST})
    })

    test('getLaunchesSuccess', () => {
        const payload = [
            {
                details: 'details',
                launch_date_utc: 'date string',
                mission_name: 'name',
            }
        ]
        expect(getLaunchesSuccess(payload)).toEqual({type: LaunchesActionTypes.GET_LAUNCHES_SUCCESS, payload})
    })

    test('getLaunchesFailure', () => {
        expect(getLaunchesFailure()).toEqual({type: LaunchesActionTypes.GET_LAUNCHES_FAILURE})
    })

})

describe('Thunks', () => {
    describe('getLaunches', () => {
        describe('on success', () => {
            let store: any
            beforeEach(() => {
                moxios.install()
                moxios.stubRequest(/.*/, { status: 200, response: ['dummy value'] })
                store = mockStore({})
            })
        
            afterEach(() => {
                moxios.uninstall()
            })
    
            test('Should dispatch GET_LAUNCHES_REQUEST ', async() => {
                await store.dispatch(getLaunches())

                expect(store.getActions()).toContainEqual({type: LaunchesActionTypes.GET_LAUNCHES_REQUEST})
            })

            test('Should dispatch GET_LAUNCHES_SUCCESS with correct payload ', async() => {
                await store.dispatch(getLaunches())

                expect(store.getActions()).toContainEqual({type: LaunchesActionTypes.GET_LAUNCHES_SUCCESS, payload: ['dummy value']})
            })
        })

        describe('on failure', () => {
            let store: any
            beforeEach(() => {
                moxios.install()
                moxios.stubRequest(/.*/, { status: 404, response: [] })
                store = mockStore({})
            })
        
            afterEach(() => {
                moxios.uninstall()
            })
    
            test('Should dispatch GET_LAUNCHES_REQUEST ', async() => {
                await store.dispatch(getLaunches())

                expect(store.getActions()).toContainEqual({type: LaunchesActionTypes.GET_LAUNCHES_REQUEST})
            })

            test('Should dispatch GET_LAUNCHES_FAILURE', async() => {
                await store.dispatch(getLaunches())

                expect(store.getActions()).toContainEqual({type: LaunchesActionTypes.GET_LAUNCHES_FAILURE})
            })
        })
    })
})
