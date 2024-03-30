import d1 from "../d1.png";
import d2 from "../d2.png";
import d3 from "../d3.png";

export interface Doctor{
  id:string;
  name:string;
  speciality:string;
  avgRating:number;
  totalRating:number;
  photo:string;
  totalPatients:number;
  hospital:string
}


export const doctors:Doctor[] = [
  {
    id: "01",
    name: "Dr. Alfaz Ahmed",
    speciality: "Surgeon",
    avgRating: 4.8,
    totalRating: 272,
    photo: d1,
    totalPatients: 1500,
    hospital: "PAU, Ludhiana.",
  },
  {
    id: "02",
    name: "Dr. Saleh Mahmud",
    speciality: "Behavioral",
    avgRating: 4.8,
    totalRating: 272,
    photo: d2,
    totalPatients: 1500,
    hospital: "DMC, Ludhiana.",
  },
  {
    id: "03",
    name: "Dr. Farid Uddin",
    speciality: "Dermatologist",
    avgRating: 4.8,
    totalRating: 272,
    photo: d3,
    totalPatients: 1500,
    hospital: "CMC, Ludhiana.",
  },
];
