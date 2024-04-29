import axios from "axios";
import React, { useEffect, useState } from "react";
import DoctorCard from "../../../components/medical/Vets/Vets/VetCard";

const AllVets = () => {
  const [allVets, setAllVets] = useState([]);
  const [error, setError] = useState(null);

  const getAllVets = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3000/veterinarian/getAllVets`
      );
      console.log("made casll to backend");
      console.log(data.veterinarians);
      setAllVets(data.veterinarians);
    } catch (error) {
      console.error("Error fetching all vets:", error);
      setError("Error fetching veterinarians. Please try again later.");
    }
  };

  useEffect(() => {
    getAllVets();
  }, []);

  return (
    <main className="h-full w-full px-24">
      <header>
        <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-900 via-orange-500 to-blue-900 bg-clip-text text-transparent h-36 flex flex-row justify-center items-center">
          All Available Veterinarians
        </h2>
      </header>
      <section className="flex flex-col gap-16">
        <div
          style={{ height: "22rem" }}
          className="flex flex-col justify-center items-start "
        >
          <div className=" h-1/6  w-full flex flex col justify-start  items-center">
            <h1 className="text-2xl font-semibold"> Small Animal Medicine :</h1>
          </div>

          <div className="h-5/6 flex flex-row  w-full items-center justify-start gap-8 px-8">
            {error ? (
              <div>{error}</div>
            ) : allVets.length > 0 ? (
              allVets.map(
                (vet) =>
                  vet.speciality === "small-animal-medicine" && (
                    <div className="w-64 h-52" key={vet._id}>
                      <DoctorCard vet={vet} />
                    </div>
                  )
              )
            ) : (
              <div>No vets available under this category</div>
            )}
          </div>
        </div>

        <div
          style={{ height: "22rem" }}
          className="flex flex-col justify-center items-start "
        >
          <div className=" h-1/6  w-full flex flex col justify-start  items-center">
            <h1 className="text-2xl font-semibold"> Large Animal Medicine :</h1>
          </div>

          <div className="h-5/6 flex flex-row  w-full items-center justify-start gap-8 px-8">
          {error ? (
              <div>{error}</div>
            ) : allVets.length > 0 ? (
              allVets.map(
                (vet) =>
                  vet.speciality === "large-animal-medicine" && (
                    <div className="w-64 h-52" key={vet._id}>
                      <DoctorCard vet={vet} />
                    </div>
                  )
              )
            ) : (
              <div>No vets available under this category</div>
            )}
          </div>
        </div>

        <div
          style={{ height: "22rem" }}
          className="flex flex-col justify-center items-start "
        >
          <div className=" h-1/6  w-full flex flex col justify-start  items-center">
            <h1 className="text-2xl font-semibold"> Dentistry :</h1>
          </div>

          <div className="h-5/6 flex flex-row  w-full items-center justify-start gap-8 px-8">
            {error ? (
              <div>{error}</div>
            ) : allVets.length > 0 ? (
              allVets.map(
                (vet) =>
                  vet.speciality === "Dentistry" && (
                    <div className="w-64 h-52" key={vet._id}>
                      <DoctorCard vet={vet} />
                    </div>
                  )
              )
            ) : (
              <div>No vets available under this category</div>
            )}
          </div>
        </div>

        <div
          style={{ height: "22rem" }}
          className="flex flex-col justify-center items-start "
        >
          <div className=" h-1/6  w-full flex flex col justify-start  items-center">
            <h1 className="text-2xl font-semibold"> Behavioral Medicine :</h1>
          </div>

          <div className="h-5/6 flex flex-row  w-full items-center justify-start gap-8 px-8">
          {error ? (
              <div>{error}</div>
            ) : allVets.length > 0 ? (
              allVets.map(
                (vet) =>
                  vet.speciality === "behavioral-medicine" && (
                    <div className="w-64 h-52" key={vet._id}>
                      <DoctorCard vet={vet} />
                    </div>
                  )
              )
            ) : (
              <div>No vets available under this category</div>
            )}
          </div>
        </div>

        <div
          style={{ height: "22rem" }}
          className="flex flex-col justify-center items-start "
        >
          <div className=" h-1/6  w-full flex flex col justify-start  items-center">
            <h1 className="text-2xl font-semibold"> Cancer Care :</h1>
          </div>

          <div className="h-5/6 flex flex-row  w-full items-center justify-start gap-8 px-8">
          {error ? (
              <div>{error}</div>
            ) : allVets.length > 0 ? (
              allVets.map(
                (vet) =>
                  vet.speciality === "cancer-care" && (
                    <div className="w-64 h-52" key={vet._id}>
                      <DoctorCard vet={vet} />
                    </div>
                  )
              )
            ) : (
              <div>No vets available under this category</div>
            )}
          </div>
        </div>

        <div
          style={{ height: "22rem" }}
          className="flex flex-col justify-center items-start "
        >
          <div className=" h-1/6  w-full flex flex col justify-start  items-center">
            <h1 className="text-2xl font-semibold">
              {" "}
              Birds & Poultry Medicine :
            </h1>
          </div>

          <div className="h-5/6 flex flex-row  w-full items-center justify-start gap-8 px-8">
          {error ? (
              <div>{error}</div>
            ) : allVets.length > 0 ? (
              allVets.map(
                (vet) =>
                  vet.speciality === "birds-poultry-medicine" && (
                    <div className="w-64 h-52" key={vet._id}>
                      <DoctorCard vet={vet} />
                    </div>
                  )
              )
            ) : (
              <div>No vets available under this category</div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AllVets;
