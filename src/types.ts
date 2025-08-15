export type Extension = {
    id: string,
    name: string,
    description: string,
    icon: string,
    active: boolean
}

export type Filter = "all" | "active" | "inactive"