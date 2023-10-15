import React, { Suspense } from "react";
const HomeSlider = React.lazy(() => import("../../components/homeSlider"));
const ItemSection = React.lazy(() => import("../../components/itemSection"));
const SearchBar = React.lazy(() => import("../../components/searchBar"));
const Footer = React.lazy(() => import("../../components/footer"));
const NavBar = React.lazy(() => import("../../components/navbar"));
export default function AirLap() {
  return (
    <div className="w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar />
        <HomeSlider />
        <SearchBar />
        <Footer />
      </Suspense>
    </div>
  );
}
