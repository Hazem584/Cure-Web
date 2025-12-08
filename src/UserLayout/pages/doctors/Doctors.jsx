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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [availability, setAvailability] = useState([]);
  const [gender, setGender] = useState("");
  const [consultationTypes, setConsultationTypes] = useState([]);
  const [sortOption, setSortOption] = useState("");

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

  const dayKeys = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const todayKey = dayKeys[new Date().getDay()];
  const tomorrowKey = dayKeys[new Date(Date.now() + 24 * 60 * 60 * 1000).getDay()];

  const availabilityMap = {
    today: todayKey,
    tomorrow: tomorrowKey,
  };

  const isDoctorAvailableOn = (doctor, dayKey) => {
    const info = doctor?.workingHours?.[dayKey];
    if (!info) return false;
    if (info.available === false) return false;
    return Boolean(info.available || info.start || info.end);
  };

  const normalizeConsultationTypes = (doctor) => {
    const rawTypes =
      doctor?.consultationType ||
      doctor?.consultationTypes ||
      doctor?.consultation_type;

    const collected = Array.isArray(rawTypes)
      ? rawTypes
      : rawTypes
      ? [rawTypes]
      : [];

    if (doctor?.inClinic || doctor?.in_clinic) {
      collected.push("in-clinic");
    }
    if (doctor?.homeVisit || doctor?.home_visit) {
      collected.push("home visit");
    }

    return collected
      .filter(Boolean)
      .map((type) => type.toString().toLowerCase().trim());
  };

  const sortDoctors = (list) => {
    const sorted = [...list];
    switch (sortOption) {
      case "recommended":
        return sorted.sort(
          (a, b) =>
            (b?.rating?.average || 0) - (a?.rating?.average || 0)
        );
      case "priceLowHigh":
        return sorted.sort(
          (a, b) => (a?.consultationPrice || 0) - (b?.consultationPrice || 0)
        );
      case "priceHighLow":
        return sorted.sort(
          (a, b) => (b?.consultationPrice || 0) - (a?.consultationPrice || 0)
        );
      default:
        return sorted;
    }
  };

  const filteredDoctors = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return sortDoctors(
      doctors.filter((doctor) => {
        if (
          selectedSpecialty !== "All" &&
          doctor?.specialty?.toLowerCase() !==
            selectedSpecialty.toLowerCase()
        ) {
          return false;
        }

        if (term) {
          const searchable = `${doctor?.name || ""} ${doctor?.specialty || ""} ${
            doctor?.location?.city || ""
          } ${doctor?.location?.address || ""}`.toLowerCase();
          if (!searchable.includes(term)) {
            return false;
          }
        }

        if (availability.length) {
          const requestedDays = availability
            .map((key) => availabilityMap[key])
            .filter(Boolean);

          const matchesDay = requestedDays.some((day) =>
            isDoctorAvailableOn(doctor, day)
          );

          if (!matchesDay) {
            return false;
          }
        }

        if (gender) {
          const doctorGender = doctor?.gender?.toString().toLowerCase();
          if (!doctorGender || doctorGender !== gender.toLowerCase()) {
            return false;
          }
        }

        if (consultationTypes.length) {
          const doctorTypes = normalizeConsultationTypes(doctor);
          const matchesType = consultationTypes.some((type) =>
            doctorTypes.includes(type)
          );
          if (!matchesType) {
            return false;
          }
        }

        return true;
      })
    );
  }, [
    availability,
    consultationTypes,
    doctors,
    gender,
    searchTerm,
    selectedSpecialty,
    sortOption,
  ]);
  const hasFilteredDoctors = useMemo(
    () => filteredDoctors && filteredDoctors.length > 0,
    [filteredDoctors]
  );

  const toggleFilter = () => setIsFilterOpen((prev) => !prev);
  return (
    <div className=" dark:bg-dark-darkBg ">
      <NavBar />
      <div className=" mr-10 ml-10  ">
        <Top
          onToggleFilter={toggleFilter}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <div className="flex flex-row [@media(max-width:1400px)]:flex-col mt-10  ">
          {isFilterOpen && (
            <FilterOptions
              availability={availability}
              onAvailabilityChange={setAvailability}
              gender={gender}
              onGenderChange={setGender}
              consultationTypes={consultationTypes}
              onConsultationTypeChange={setConsultationTypes}
              sortOption={sortOption}
              onSortChange={setSortOption}
            />
          )}

          <div className="w-full flex-col gap-5 ml-5  sm:flex-row  ">
            <h1 className="text-2xl  dark:text-white mb-5">
              Choose Specialties
            </h1>
            <DoctorTypes
              selected={selectedSpecialty}
              onSelect={setSelectedSpecialty}
            />
            {loading && !error && <DoctorsLoading />}
            {error && (
              <p className="text-red-500 dark:text-red-300" role="alert">
                {error}
              </p>
            )}
            {!loading && !error && hasDoctors && hasFilteredDoctors && (
              <Cards doctors={filteredDoctors} />
            )}
            {!loading && !error && hasDoctors && !hasFilteredDoctors && (
              <p className="text-gray-500 dark:text-gray-300">
                No doctors match your filters. Try adjusting your search.
              </p>
            )}
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
