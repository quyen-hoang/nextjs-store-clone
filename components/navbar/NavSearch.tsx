"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

function NavSearch() {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const [search, setSearch] = useState(
        searchParams.get("search")?.toString() || ""
    );

    const handleSearch = useDebouncedCallback((value: string) => {
        const params = new URLSearchParams(searchParams);
        console.log(params);
        if (value) {
            params.set("search", value);
        } else {
            params.delete("search");
        }
        replace(`/products?${params.toString()}`);
    }, 500);

    useEffect(() => {
        if (!searchParams.get("search")) {
            setSearch("");
        }
    }, [searchParams.get("search")]);

    return (
        <Input
            type='search'
            placeholder='search product...'
            className='max-w-xs dark:bg-muted '
            onChange={(e) => {
                setSearch(e.target.value);
                handleSearch(e.target.value);
            }}
            value={search}
        />
    );
}
export default NavSearch;
