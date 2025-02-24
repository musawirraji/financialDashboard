"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

interface Props {
  placeholder: string;
  otherClasses?: string;
  route: string;
}

const Search = ({ placeholder, otherClasses, route }: Props) => {
  const pathname = usePathname();

  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [searchQuery, setSearchQuery] = useState(query);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });
        router.push(newUrl, { scroll: false });
      } else {
        if (pathname === route) {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router, route, searchParams, pathname]);
  return (
    <div
      className={` bg-dark-200 border border-gray-600 flex min-h-[40px] grow items-center rounded-xl  px-2 ${otherClasses}`}
    >
      <Image src="/icons/search.svg" alt="search" width={24} height={24} />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        className="no-focus border-none placeholder:text-primary-200 shadow-none outline-none"
      />
    </div>
  );
};

export default Search;
