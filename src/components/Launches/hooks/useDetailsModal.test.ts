import { renderHook, act } from '@testing-library/react-hooks'
import useDetailsModal from './useDetailsModal'

test('The modal should be closed by default', () => {
    const { result } = renderHook(() => useDetailsModal())
    expect(result.current.modalProps.open).toBe(false)
})

test('Verify default props for modal', () => {
    const { result } = renderHook(() => useDetailsModal())
    expect(result.current.modalProps.open).toBe(false)
    expect(result.current.modalProps.title).toBe('')
    expect(result.current.modalProps.description).toBe('')
})

test('openModal sets props for opening the modal with the correct strings', () => {
    const { result } = renderHook(() => useDetailsModal())

    act(() => {
        result.current.openModal('modal title', 'modal description')
    })

    expect(result.current.modalProps.open).toBe(true)
    expect(result.current.modalProps.title).toBe('modal title')
    expect(result.current.modalProps.description).toBe('modal description')
})

test('The modal should close when in calls the onClose callback function', () => {
    const { result } = renderHook(() => useDetailsModal())

    act(() => {
        result.current.openModal('modal title', 'modal description')
    })

    // check that the modal would be open
    expect(result.current.modalProps.open).toBe(true)

    act(() => {
        result.current.modalProps.onClose()
    })

    // check that the modal is closed
    expect(result.current.modalProps.open).toBe(false)
})
