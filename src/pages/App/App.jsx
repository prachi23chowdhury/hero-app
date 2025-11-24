import React, { useState, useEffect } from "react";

const AppList = () => {
  const [appsData, setAppsData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch JSON data
  useEffect(() => {
    fetch("/app.json") // make sure app.json is in public folder
      .then((res) => res.json())
      .then((data) => {
        setAppsData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching apps:", err);
        setLoading(false);
      });
  }, []);

  // Filter apps by title (case-insensitive)
  const filteredApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-5">
      {/* Title Section */}
      <div className="text-center mb-5">
        <h1 className="text-3xl font-bold">Our Apps</h1>
        <p className="text-gray-500">Discover the best apps for your needs</p>
      </div>

      {/* Search & Total */}
      <div className="flex justify-between items-center mb-5">
        <span>Total Apps: {filteredApps.length}</span>
        <input
          type="text"
          placeholder="Search apps..."
          className="border px-3 py-1 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* App Section */}
      {filteredApps.length === 0 ? (
        <p className="text-center text-red-500">No App Found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="border rounded p-3 cursor-pointer hover:shadow-lg"
              onClick={() => alert(`Go to details of ${app.title}`)}
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <h2 className="font-semibold">{app.title}</h2>
              <p>Downloads: {app.downloads.toLocaleString()}</p>
              <p>Rating: {app.ratingAvg}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AppList;
