'use client'

import QuickSearch from "./components/QuickSearch";
import RecommendedTrip from "./components/RecommendedTrip";
import TripSearch from "./components/TripSearch";

export default function Home() {
  return (
    <div >
      <TripSearch/>
      <QuickSearch/>
      <RecommendedTrip/>
    </div>
  );
}
