"use client";

import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";

interface TripReservation {
  trip: Trip;
}

const TripReservation = ({ trip }: TripReservation) => {
  return (
    <div>
      <div className="flex flex-col px-5">
        <div className="flex gap-4 ">
          <DatePicker placeholderText="Data de inicio" className="w-full" onChange={() => {}} />
          <DatePicker placeholderText="Data final" className="w-full" onChange={() => {}} />
        </div>

        <Input
          placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
          className="mt-4"
        />

        <div className="flex justify-between mt-2">
          <p className="font-medium text-sm text-primaryDarker">Total: </p>
          <p className="font-medium text-sm text-primaryDarker">R$ 2500 </p>
        </div>
        <Button className="mt-3">Reservar agora</Button>
      </div>
    </div>
  );
};

export default TripReservation;
