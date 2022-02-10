import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import DetailsModal from './DetailsModal'

test('displays the title', () => {
    render(<DetailsModal open={true} title='Modal title' />)
    const titleElement = screen.getByText('Modal title')
    expect(titleElement).toBeInTheDocument()
})

test('displays the description', () => {
    render(<DetailsModal open={true} description='Modal description' />)
    const descriptionElement = screen.getByText('Modal description')
    expect(descriptionElement).toBeInTheDocument()
})

test('open={true} prop displays the modal', () => {
    render(<DetailsModal open={true}  title='Modal title' description='Modal description' />)
    const titleElement = screen.getByText('Modal title')
    expect(titleElement).toBeInTheDocument()
    const descriptionElement = screen.getByText('Modal description')
    expect(descriptionElement).toBeInTheDocument()
})

test('open={false} prop does not displays the modal', () => {
    render(<DetailsModal open={false}  title='Modal title' description='Modal description' />)
    const titleElement = screen.queryByText('Modal title')
    expect(titleElement).not.toBeInTheDocument()
    const descriptionElement = screen.queryByText('Modal description')
    expect(descriptionElement).not.toBeInTheDocument()
})

test('onClose gets triggered when hitting the ESC key', () => {
    const handleClose = jest.fn()
    render(<DetailsModal open={true} onClose={handleClose} title='Modal title' description='Modal description' />)
    const titleElement = screen.getByText('Modal title')

    fireEvent.keyDown(titleElement, {key: 'Escape', code: 'Escape', charCode: 27})

    expect(handleClose).toHaveBeenCalledTimes(1)
})
