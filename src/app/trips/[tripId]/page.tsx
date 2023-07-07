import { prisma } from "@/lib/prisma";
import TripHeader from "./components/tripHeader";
import TripReservation from "./components/tripReservation";
import TripDescription from "./components/tripDescription";
import TripHighlights from "./components/tripHighlights";
import TripLocation from "./components/tripLocation";

const getTripDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId,
    },
  });
  return trip;
};

const TripDetails = async ({ params }: { params: { tripId: string } }) => {
  const trip = await getTripDetails(params.tripId);

  if (!trip) return null;

  return (
    <div className="container mx-auto">
      
      <TripHeader trip={trip}/>
      <TripReservation trip={trip}/>
      <TripDescription description={trip.description}/>
      <TripHighlights highlights={trip.highlights}/>
      <TripLocation location={trip.location} locationDescription={trip.locationDescription}/>
    </div>
  );
};

export default TripDetails;
