import type { ReactNode } from 'react'

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type TLayout<T extends Record<string, string> = {}> = {
    children: ReactNode
} & T
