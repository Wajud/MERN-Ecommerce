import { Outlet } from "react-router-dom";
import ShoppingHeadar from "./header";

function ShoppingLayout() {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* Common Header */}
      <ShoppingHeadar />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
    </div>
  );
}
