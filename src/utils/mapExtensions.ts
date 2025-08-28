import type { Extension, RawExtension } from "../types";

const slugify = (s: string) =>
    s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

const toPublic = (p: string) => p.replace(/^\.\//, "/");

export function mapExtensions(raw: RawExtension[]): Extension[] {
    return raw.map((r, i) => ({
        id: slugify(r.name) || `ext-${i + 1}`,
        name: r.name,
        description: r.description ?? "",
        icon: toPublic(r.logo),
        active: !!r.isActive
    }));
}
