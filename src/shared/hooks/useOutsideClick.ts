import { useCallback, useEffect, useRef } from 'react'

interface useOutsideClickArgs {
    onClose: () => void
    handler: boolean
}

export const useOutsideClick = <T extends HTMLElement>(
    args: useOutsideClickArgs,
) => {
    const { onClose, handler } = args
    const nodeRef = useRef<T | null>(null)

    const handleClick = useCallback(
        (e: MouseEvent) => {
            if (!(e.target as HTMLElement).contains(nodeRef.current)) {
                onClose()
            }
        },
        [onClose],
    )

    useEffect(() => {
        if (!handler) return

        document.addEventListener('click', handleClick)
        return () => document.removeEventListener('click', handleClick)
    }, [handleClick, handler])

    return { nodeRef }
}
