import { prisma } from "@/lib/prisma";
import TripHeader from "./components/tripHeader";
import TripReservation from "./components/tripReservation";

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

      {/* RESERVA */}

      <TripReservation trip={trip}/>
    </div>
  );
};

export default TripDetails;
