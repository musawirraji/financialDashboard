import { LeftSideBar } from "@/components/navigation/LeftSideBar";
import MobileNavigation from "@/components/navigation/navbar/MobileNavigation";
import Search from "@/components/search/Search";

import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex">
      <LeftSideBar />
      <section className="flex-1 flex flex-col min-h-screen px-4">
        <div className="flex justify-between mt-4">
          <Search
            placeholder="Search for..."
            otherClasses="max-w-[300px]"
            route="/"
          />
          <MobileNavigation />
        </div>
        {children}
      </section>
    </main>
  );
};

export default RootLayout;
