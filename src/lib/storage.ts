import type { Extension } from "../types.ts"

const KEY = 'extensions-state-v1'

export function loadExtensions(defaults: Extension[]): Extension[] {
    const raw = localStorage.getItem(KEY)
    if (!raw) return defaults

    try {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) {
            return parsed as Extension[]
        }
        return defaults
    } catch {
        return defaults
    }
}