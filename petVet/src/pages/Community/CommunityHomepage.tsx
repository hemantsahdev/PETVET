import { Link } from "react-router-dom";

const CommunityHomepage = () => {
  return (
    <>
      <div className="h-screen bg-secondaryBg">
        <div className="bg-white w-full h-2/3 flex flex-col justify-center items-center gap-10">
          <div>
            <h1 className="text-6xl font-bold text-blueText">
              Welcome to PetVet Community
            </h1>
          </div>
          <div>
            <Link to={"/community-showcase"}>
              <button className="flex items-center justify-center gap-2 px-6 py-2 text-2xl font-semibold bg-btnBlueColor text-white hover:bg-white hover:text-blueText rounded-xl border border-transparent hover:border-black hover:border-2 ">
                Explore
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityHomepage;
