'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { toast } from "sonner";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleSearch() {
    router.push('?search=' + search)
    if(search) toast("searching for " + search)
  }

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="relative w-full max-w-md">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Search"
            defaultValue={searchParams.get('search') || ''}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch()
              }
            }}
          />
          <Button
            variant="outline"
            onClick={handleSearch}
          > Search
          </Button>
        </div>
      </div>
    </div>
  );
}