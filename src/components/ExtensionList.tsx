import React, { useMemo } from "react";
import type { Extension, Filter } from "../types";
import ExtensionsItem from "./ExtensionItem";

type Props = {
    items: Extension[];
    filter: Filter;
    onToggle: (id: string, next: boolean) => void;
    onRemove: (id: string) => void;
};

export function ExtensionsList({ items, filter, onToggle, onRemove }: Props) {
    const visible = useMemo(() => {
        if (filter === "all") return items;
        if (filter === "active") return items.filter(i => i.active);
        return items.filter(i => !i.active);
    }, [items, filter]);

    if (!visible.length) {
        return <div className="border border-dashed rounded-xl p-8 text-center">No items for this filter</div>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {visible.map(ext => (
                <ExtensionsItem
                    key={ext.id}
                    ext={ext}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            ))}
        </div>
    );
}
