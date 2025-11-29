import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router";
import download from "../../assets/icon-downloads.png"
import star from "../../assets/icon-ratings.png"
import review from "../../assets/icon-review.png"

export default function AppDetails() {
  const { id } = useParams();                          
  const location = useLocation();
  const [app, setApp] = useState(location.state?.app || null);
  const [loading, setLoading] = useState(!app);

  useEffect(() => {
    if (!app) {
      setLoading(true);
      fetch("/app.json")
        .then((res) => res.json())
        .then((data) => {
          const found = data.find((item) => String(item.id) === String(id));
          setApp(found || null);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching app data:", err);
          setLoading(false);
        });
    }
  }, [app, id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!app) return <p className="text-center mt-10 text-red-500">App not found</p>;

  return (
    <div className="w-full p-4 md:p-8 min-h-screen text-gray-800">

      {/* ===================== TOP SECTION ===================== */}
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow mb-6 ">

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10">

          {/* App Icon */}
          <div className="w-40 h-40 md:w-56 md:h-56 bg-blue-100 rounded-2xl flex items-center justify-center text-5xl">
           {app.image}
          </div>

          {/* Right Info */}
          <div className="w-full space-y-2 text-center lg:text-left">
            <h1 className="text-xl md:text-3xl font-bold">{app.title}</h1>

            <p className="text-sm text-gray-500">
              Developed by <span className="font-semibold text-primary-text">{app.companyName}</span>
            </p>

            <hr className="border-gray-300 my-4" />

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-5">

              <div className="text-center">
                <img src={download} className="w-10 mx-auto" />
                <p className="font-bold text-2xl md:text-3xl">{app.downloads}M</p>
                <p className="text-gray-500 text-sm">Downloads</p>
              </div>

              <div className="text-center">
                <img src={star} className="w-10 mx-auto" />
                <p className="font-bold text-2xl md:text-3xl">{app.ratingAvg}</p>
                <p className="text-gray-500 text-sm">Average Rating</p>
              </div>

              <div className="text-center">
                <img src={review} className="w-10 mx-auto" />
                <p className="font-bold text-2xl md:text-3xl">{app.reviews.toLocaleString()}</p>
                <p className="text-gray-500 text-sm">Total Reviews</p>
              </div>

            </div>

            <button className="mt-5 bg-[#00D390] text-white px-6 py-2 rounded-lg hover:bg-green-700 w-full sm:w-auto">
              Install Now ({app.size} MB)
            </button>
          </div>
        </div>
      </div>
     <hr className="border-gray-300 my-4" />
     
      {/* ===================== RATINGS SECTION ===================== */}
      <div className="bg-white p-4 md:p-6  shadow mb-6 ">
        <h2 className="text-lg md:text-xl font-bold mb-4">Ratings</h2>

        {["5 star", "4 star", "3 star", "2 star", "1 star"].map((label, i) => {
          const ratingObj = app.ratings.find(r => r.name === label);
          const percentage = ratingObj ? Math.round((ratingObj.count / app.reviews) * 100) : 0;
          return (
            <div key={i} className="mb-3">
              <p className="text-sm mb-1">{label}</p>
              <div className="w-full bg-gray-200 h-5 ">
                <div
                  className="bg-orange-400 h-5"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
         <hr className="border-gray-300 my-4" />
      {/* ===================== DESCRIPTION ===================== */}
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow ">
        <h2 className="text-lg md:text-xl font-bold mb-3">Description</h2>
        <p className="text-gray-700 mb-3">{app.description}</p>
      </div>

    </div>
  );
}
