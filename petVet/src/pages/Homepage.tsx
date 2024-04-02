/* eslint-disable no-nonoctal-decimal-escape */
import { Link } from "react-router-dom";
import doctor from "../assets/homepageDoctor.jpg";
import vetDoctor from "../assets/vetHomePage.jpg";
import { BsArrowRight } from "react-icons/bs";
import location from "../assets/location.png";
import appointment from "../assets/appointment.jpg";
import feature from "../assets/featureImg.jpg";
import { FcVideoCall } from "react-icons/fc";
import faq from "../assets/faqCat.jpg";
import About from "./About";
import ServicesList from "../components/medical/Vets/DealsIn/ServicesList";
import DoctorList from "../components/medical/Vets/Doctors/DoctorList";

const Homepage = () => {
  return (
    <>
      {/* hero section */}
      <>
        <section className=" pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex  lg:flex-row-gap-[50px] items-center  justify-between">
              {/* hero content */}
              <div>
                <div className="lg:w-[570px]">
                  <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] ">
                    Ensure Your Pet's Well-being with Expert Veterinary Care
                  </h1>
                  <p className="text__para">
                    Seamlessly schedule your pet's next veterinary appointment
                    and prioritize their health with our intuitive and
                    convenient appointment booking platform
                  </p>
                  <button className="btn">Request an Appointment</button>
                </div>

                {/* hero counter
                  <div className='mt-[30px] lg-:mt-[70px] flex flex-col lg:flw-row lg:items-center gap-5 lg:gap-[30px] '>
                    <div>
                      <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] terxt-headingColor'>30+</h2>
                      <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                    </div>
                  </div> */}
              </div>

              <div className="flex gap-[30px] justify-end">
                <div className="w-[35rem] ">
                  <img src={doctor} alt="" className="rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* hero section ends */}

        <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center">
                Providing the Best Veterinary Services
              </h2>
              <p className="text__para text-center">
                World-class care for your beloved pets
              </p>
            </div>
            <div className="grid grid-cols-3 mt-[30px] gap-5 ">
              {/* find a vet */}
              <div className="flex flex-col items-center py-[30px] px-5">
                <div className="w-[272px]">
                  <img src={vetDoctor} alt="" className="rounded-xl" />
                </div>
                <div className="flex flex-col  items-center">
                  <div>
                    <h2 className="text-center text-[26px] leading-9 text-headingColor font-[700] ">
                      Find a Vet
                    </h2>
                    <p className="text-center mb-4 text-[16px] leading-7 text-textColor font-[400] mt-4 ">
                      Our veterinary system offers unmatched, expert pet
                      healthcare. From routine check-ups to emergency care.
                    </p>
                  </div>
                  <div>
                    <Link to="/doctors">
                      <BsArrowRight className="border border-black rounded-full h-12 w-12 p-2 hover:bg-primaryColor hover:border-none" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* finda location */}
              <div className="flex flex-col items-center py-[30px] px-5 ">
                <div className="w-[24rem]">
                  <img src={location} alt="" className="rounded-xl" />
                </div>
                <div className="flex flex-col  items-center">
                  <div>
                    <h2 className="text-center text-[26px] leading-9 text-headingColor font-[700] ">
                      Find a Location
                    </h2>
                    <p className="text-center mb-4 text-[16px] leading-7 text-textColor font-[400] mt-4 ">
                      Locate our veterinary clinics near you for convenient
                      access to quality pet healthcare.
                    </p>
                  </div>
                  <div>
                    <Link to="/doctors">
                      <BsArrowRight className="border border-black rounded-full h-12 w-12 p-2 hover:bg-primaryColor hover:border-none" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* book appointment */}
              <div className="flex flex-col items-center py-[30px] px-5">
                <div className="w-[24rem]">
                  <img src={appointment} alt="" className="rounded-xl" />
                </div>
                <div className="flex flex-col  items-center">
                  <div>
                    <h2 className="text-center text-[26px] leading-9 text-headingColor font-[700] ">
                      Book Appointment
                    </h2>
                    <p className="text-center mb-4 text-[16px] leading-7 text-textColor font-[400] mt-4 ">
                      Schedule an appointment for your pet's healthcare needs
                      easily and efficiently.
                    </p>
                  </div>
                  <div>
                    <Link to="/doctors">
                      <BsArrowRight className="border border-black rounded-full h-12 w-12 p-2 hover:bg-primaryColor hover:border-none" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* about section */}

        <About/>

        {/* services section */}

        <section>
          <div className="container px-16 mt-40">
            <div className="mx-auto">
              <h2 className="heading text-center">Our Veterinary Services</h2>
              <p className="text__para text-center">
                World-class care for your furry friends. Our veterinary services
                ensure your pet's well-being.
              </p>
            </div>
            <ServicesList />
          </div>
        </section>

        {/*features  */}

        <section className="mt-32">
          <div className="container">
            <div className="flex justify-evenly ">
              {/* heading */}
              <div className="w-1/2">
                <h2 className=" text-[4rem] font-bold leading-5\9 ">
                  Get Virtual Consultation <br />
                  Anytime, Anywhere.
                </h2>
                <p className="text-xl mt-16 leading-9 text-gray-500">
                  Schedule virtual appointments for your pet's healthcare needs,
                  ensuring convenience and accessibility.
                </p>
                <Link to={"/"}>
                  <button className="btn hover:opacity-90 ">
                    <div className="flex items-center">
                      Check It Now!
                      <FcVideoCall className="w-8 h-10 px-1" />
                    </div>
                  </button>
                </Link>
              </div>
              {/* img */}
              <div className="w-[25rem] ">
                <img
                  src={feature}
                  alt=""
                  className="rounded-2xl shadow-md shadow-gray-400 "
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center">Meet Our Veterinary Team</h2>
              <p className="text__para text-center">
                Dedicated veterinarians committed to your pet's health and
                happiness.
              </p>
            </div>
            <DoctorList />
          </div>
        </section>

        {/* FAQ section */}
        <section className="mt-32">
          <div className="container">
            <div className="flex justify-evenly">
              <div className="w-[20rem] ">
                <img
                  src={faq}
                  alt=""
                  className="rounded-2xl shadow-md shadow-gray-400"
                />
              </div>
              <div>
                <h2 className="text-[3rem] font-bold">
                  Frequently Asked Questions
                </h2>
                <div>
                  {/* here we can again make a file of questionsand pass them to a component
                      simple isopen agr true to show nhi toh no show bss */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          {/* here we can create testimonials by using swiper package */}
        </section>
      </>
    </>
  );
};

export default Homepage;
