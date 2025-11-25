import React, { useEffect, useMemo, useState } from "react";
import NavBar from "../../../components/header/NavBar";
import Footer from "../../../components//footer/Footer";
import Cards from "./components/Cards";
import FilterOptions from "./components/FilterOptions";
import NextPageButton from "./components/NextPageButton";
import DoctorTypes from "./components/DoctorTypes";
import Top from "./components/Top";
import DoctorsLoading from "./components/DoctorsLoading";

const getApiBaseUrl = () => {
  const base =
    import.meta.env.VITE_API_BASE_URL ||
    "https://cure-back.vercel.app/api/v1/";
  return base.endsWith("/") ? base : `${base}/`;
};

const API_URL = `${getApiBaseUrl()}doctors`;

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchDoctors = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(API_URL, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to load doctors, please try again later.");
        }

        const payload = await response.json();

        const normalizedDoctors =
          Array.isArray(payload) && payload.length
            ? payload
            : Array.isArray(payload?.data?.doctors)
            ? payload.data.doctors
            : Array.isArray(payload?.data)
            ? payload.data
            : Array.isArray(payload?.doctors)
            ? payload.doctors
            : [];

        if (isMounted) {
          setDoctors(normalizedDoctors);
        }
      } catch (err) {
        if (err.name === "AbortError") return;
        if (isMounted) {
          setError(err.message || "Something went wrong, please try again.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchDoctors();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  const hasDoctors = useMemo(() => doctors && doctors.length > 0, [doctors]);

  const toggleFilter = () => setIsFilterOpen((prev) => !prev);
  return (
    <div className=" dark:bg-dark-darkBg ">
      <NavBar />
      <div className=" mr-10 ml-10  ">
        <Top onToggleFilter={toggleFilter} />
        <div className="flex flex-row [@media(max-width:1400px)]:flex-col mt-10  ">
          {isFilterOpen && <FilterOptions />}

          <div className="w-full flex-col gap-5 ml-5  sm:flex-row  ">
            <h1 className="text-2xl  dark:text-white mb-5">
              Choose Specialties
            </h1>
            <DoctorTypes />
            {loading && !error && <DoctorsLoading />}
            {error && (
              <p className="text-red-500 dark:text-red-300" role="alert">
                {error}
              </p>
            )}
            {!loading && !error && hasDoctors && <Cards doctors={doctors} />}
            {!loading && !error && !hasDoctors && (
              <p className="text-gray-500 dark:text-gray-300">
                No doctors are available right now.
              </p>
            )}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <NextPageButton />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Doctors;
