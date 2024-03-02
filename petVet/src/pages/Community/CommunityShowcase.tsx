import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CommunityShowcase = () => {
  return (
    <>
      <div className="h-screen bg-white">
        <div className="h-1/5 bg-secondaryBg">
          <div className="h-full flex  items-center justify-evenly">
            <Link to={"/community/create-a-community"}>
              <Button
                variant="outlined"
                className="rounded-lg text-2xl px-4 py-4 bg-amber-700"
              >
                Make a community
              </Button>
            </Link>

            <Link to={"/community/ask-a-question"}>
              <Button
                variant="filled"
                className="rounded-lg text-2xl px-4 py-4 bg-btnBlueColor"
              >
                Ask A Question
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommunityShowcase;
