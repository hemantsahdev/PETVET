export interface Service {
  title: string;
  name: string;
  desc: string;
}

export const services:Service[] = [
  {
    title: "dog",
    name: "Small Animal Medicine",
    desc: "This department focuses on the medical care of small companion animals, such as dogs, cats, and rabbits",
  },
  {
    title: "cow",

    name: "Large Animal Medicine",
    desc: "Large animal veterinarians primarily care for livestock and farm animals, including cows, horses, pigs, and sheep",
  },
  {
    title: "happy",

    name: "Behavioral Medicine",
    desc: "Veterinarians specializing in behavior work with animals to address behavioral problems and improve their well-being.",
  },
  {
    title: "cancer",

    name: "Cancer Care",
    desc: "Veterinary oncologists specialize in the diagnosis and treatment of cancer in animals.",
  },
  {
    title: "bird",

    name: "Birds & Poultry Medicine",
    desc: "veterinarians specifically focus on the health of birds, including pet birds, poultry, and birds of prey.",
  },
  {
    title: "tooth",

    name: "Dentistry",
    desc: "Veterinary dentists specialize in dental care for animals, including cleanings, extractions, and oral surgery.",
  },
];
