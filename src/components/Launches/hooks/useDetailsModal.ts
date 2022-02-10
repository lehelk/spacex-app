import React, { useCallback, useState } from 'react'

const useDetailsModal = () => {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const handleClose = useCallback(() => setOpen(false), [])

    const openModal = useCallback((title: string, description: string) => {
        setTitle(title)
        setDescription(description)
        setOpen(true)
    }, [])

    return {
        modalProps: {
            open,
            onClose: handleClose,
            title,
            description,
        },
        openModal,
    }
}

export default useDetailsModal
