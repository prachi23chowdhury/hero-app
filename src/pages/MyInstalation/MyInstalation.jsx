import React, { useEffect, useState } from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import Swal from "sweetalert2";

const MyInstallation = () => {
  const [apps, setApps] = useState([]); // installed app objects
  const [loading, setLoading] = useState(true);

  // Load app.json once and then filter by installed IDs from localStorage
  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        const res = await fetch("/app.json");
        const allApps = await res.json();

        const installedIds =
          JSON.parse(localStorage.getItem("installedApps")) || [];

        // normalize to strings for safe comparison
        const idsSet = new Set(installedIds.map((i) => String(i)));

        const installedApps = allApps.filter((a) =>
          idsSet.has(String(a.id))
        );

        if (mounted) {
          setApps(installedApps);
        }
      } catch (err) {
        console.error("Error loading apps:", err);
        if (mounted) setApps([]);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();

    // keep list in sync if other tab changes localStorage
    const onStorage = (e) => {
      if (e.key === "installedApps") {
        const installedIds = JSON.parse(e.newValue || "[]");
        // re-filter using last fetched data is tricky; simplest is reload page of app.json
        // but we'll re-run load:
        load();
      }
    };
    window.addEventListener("storage", onStorage);

    return () => {
      mounted = false;
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  const uninstall = (id) => {
    // remove id from installedApps (which is an array of ids in localStorage)
    const installedIds = JSON.parse(localStorage.getItem("installedApps")) || [];
    const updatedIds = installedIds.filter((i) => String(i) !== String(id));
    localStorage.setItem("installedApps", JSON.stringify(updatedIds));

    // remove the app object from state so UI updates immediately
    setApps((prev) => prev.filter((a) => String(a.id) !== String(id)));

    // user feedback
    Swal.fire({
      icon: "success",
      title: "Uninstalled",
      text: "App has been removed from your installations.",
      timer: 1200,
      showConfirmButton: false,
    });
  };

  return (
      <div>
        <div>
          <h2 className="text-3xl font-bold text-center m-4">Your Installed Apps</h2>
          <p className="text-center text-gray-500">Explore All Trending Apps on the Market developed by us</p>

        </div>
         <div className="p-4 max-w-4xl mx-auto ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{apps.length} Apps Found</h2>
        <button className="text-sm flex items-center gap-1 border px-3 py-1 rounded">
          Sort By Size ▼
        </button>
      </div>

      <div className="space-y-4">
        {apps.length === 0 ? (
          <div className="p-4 bg-yellow-50 border rounded text-gray-700">
            No installed apps found.
          </div>
        ) : (
          apps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between p-4 bg-white rounded-lg shadow-2xl" 
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0 overflow-hidden">
                  <img src={app.image} alt={app.title} className="w-full h-full object-cover" />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">
                    {app.title ?? "Untitled App"}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-gray-600 mt-1">
                    <span className="flex items-center gap-1 text-green-600">
                      <FaDownload /> {app.downloads ?? "-"}
                    </span>
                    <span className="flex items-center gap-1 text-orange-500">
                      <FaStar /> {app.ratingAvg ?? app.rating ?? "-"}
                    </span>
                    <span>{app.size ?? "-"}MB</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => uninstall(app.id)}
                className="bg-[#00D390] text-white px-4 py-1 rounded"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </div>
      </div>
  );
};

export default MyInstallation;
