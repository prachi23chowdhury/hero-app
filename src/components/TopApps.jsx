import { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";

const TopApps = () => {
  const [topApps, setTopApps] = useState([]);

  useEffect(() => {
    fetch("/app.json")
      .then(res => res.json())
      .then(data => {
        setTopApps(data.slice(0, 8)); 
      });
  }, []);

  return (
    <div className="mb-10">   {/* পুরো সেকশনের নিচে space */}
      <h2 className="text-xl font-bold mb-4">Top Apps</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {topApps.map(app => (
          <div
            key={app.id}
            className="border p-3 rounded cursor-pointer hover:shadow-md transition"
          >
            <img
              src={app.image}
              className="w-full h-32 object-cover rounded"
              alt={app.title}
            />

            <h3 className="mt-2 font-semibold">{app.title}</h3>

            {/* Downloads */}
            <p className="flex items-center gap-1 text-green-600 font-semibold">
              <FaDownload size={14} /> {app.downloads}M
            </p>

            {/* Rating */}
            <p className="flex items-center gap-1 text-yellow-500 font-semibold">
              <FaStar size={14} /> {app.ratingAvg}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopApps;
