import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../store/action-creators/launches';
import { State } from '../../../store/reducers'

const useLoadLaunches = () => {
    const dispatch = useDispatch()
    const { getLaunches } = bindActionCreators(actionCreators, dispatch)
    const launches = useSelector((state: State) => state.launches)
    useEffect(() => {
        getLaunches()
    }, [])
    return launches
}

export default useLoadLaunches
