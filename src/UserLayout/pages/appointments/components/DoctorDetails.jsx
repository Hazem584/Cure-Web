import React, { useMemo, useState } from "react";
import { FaUserFriends, FaStar } from "react-icons/fa";
import { PiMedalFill } from "react-icons/pi";
import { TiMessages } from "react-icons/ti";
import DoctorDetailsSkeleton from "./DoctorDetailsSkeleton";

const DEFAULT_BIO =
  "No biography has been provided for this doctor yet. Please check back later for more information.";

const DoctorDetails = ({ doctor, loading, error }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    name = "Doctor profile",
    specialty = "Specialty not provided",
    image,
    experience,
    consultationPrice,
    rating,
    bio,
    location,
    languages,
  } = doctor || {};

  const stats = useMemo(() => {
    const patientsValue =
      doctor?.patients ??
      (rating?.count ? `${Math.max(rating.count * 20, 50)}+` : "N/A");

    return [
      {
        label: "patients",
        value: patientsValue,
        icon: FaUserFriends,
      },
      {
        label: "experience",
        value: experience ? `${experience}+ yrs` : "N/A",
        icon: PiMedalFill,
      },
      {
        label: "rating",
        value:
          typeof rating?.average === "number"
            ? rating.average.toFixed(1)
            : "N/A",
        icon: FaStar,
      },
      {
        label: "reviews",
        value: rating?.count ?? "N/A",
        icon: TiMessages,
      },
    ];
  }, [doctor, experience, rating]);

  const truncatedBio =
    !bio || bio.length <= 220 || isExpanded
      ? bio || DEFAULT_BIO
      : `${bio.slice(0, 220)}...`;

  const locationLine =
    location?.address || location?.city || "Location not provided yet.";

  const extraLocationInfo = location?.city && location?.address
    ? `${location.city}`
    : "";

  if (loading) {
    return <DoctorDetailsSkeleton />;
  }

  return (
    <aside className="w-full space-y-6 lg:w-80 xl:w-[540px] max-[300px]:space-y-5">
      <section className="space-y-6 rounded-3xl bg-[#F5F6F7] dark:bg-dark-darkBg p-6 shadow-sm max-[300px]:p-4">
        {error && (
          <p className="text-center text-sm text-red-500" role="alert">
            {error}
          </p>
        )}
        {!error && !doctor && (
          <p className="text-center text-sm text-slate-500 dark:text-dark-textSecondary">
            Choose a doctor from the doctors page to see their profile here.
          </p>
        )}
        {!error && doctor && (
          <>
        <div className="flex flex-col items-center text-center">
          <div className="relative -mt-1 flex h-28 w-28 items-center justify-center rounded-full bg-slate-100 p-1 shadow-sm">
            <img
              src={image || "/doctor.png"}
              alt={`Photo of ${name}`}
              className="h-full w-full rounded-full object-cover dark:border-2 dark:border-dark-borderDark"
            />
          </div>
          <div className="mt-4 space-y-1">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-dark-textOnDark">
              {name}
            </h3>
            <p className="text-sm font-medium text-slate-500 dark:text-dark-textOnDark">
              {specialty}
            </p>
          </div>
        </div>

        <div className="flex justify-between text-center text-sm text-slate-500 max-[300px]:grid max-[300px]:grid-cols-2 max-[300px]:gap-x-3 max-[300px]:gap-y-4 max-[300px]:justify-items-center">
          {stats.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="flex-1 space-y-2 rounded-2xl dark:text-dark-textOnDark  max-[300px]:flex-none max-[300px]:w-full max-[300px]:space-y-1"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white  text-black  max-[300px]:h-10 max-[300px]:w-10">
                <Icon size={28} />
              </span>
              <p className="text-lg font-semibold text-slate-900 dark:text-dark-textSecondary max-[300px]:text-base">
                {value}
              </p>
              <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-dark-textSecondary max-[300px]:text-[10px]">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-3 rounded-2xl border border-slate-100 dark:border-dark-borderDark bg-slate-50/80 p-5 text-left max-[300px]:p-4 max-[300px]:space-y-2">
          <h4 className="text-sm font-semibold text-slate-600 dark:text-dark-textOnDark max-[300px]:text-xs">
            About me
          </h4>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-dark-textSecondary max-[300px]:text-xs max-[300px]:leading-5">
            {truncatedBio}
          </p>
          {!isExpanded && bio && bio.length > 220 && (
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="text-sm font-semibold text-blue-500 transition hover:text-blue-600 max-[300px]:text-xs"
            >
              Read more
            </button>
          )}
          {Array.isArray(languages) && languages.length > 0 && (
            <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-dark-textSecondary">
              Languages:{" "}
              <span className="text-slate-700 dark:text-dark-textOnDark lowercase">
                {languages.join(", ")}
              </span>
            </p>
          )}
        </div>
        <section className="space-y-4 max-[300px]:space-y-3 max-[300px]:text-sm">
          <div>
            <h4 className="text-lg font-semibold text-slate-900 dark:text-dark-textOnDark max-[300px]:text-base">
              Location
            </h4>
            <p className="mt-1 text-sm text-slate-500 dark:text-dark-textSecondary max-[300px]:text-xs">
              {locationLine}
            </p>
            {extraLocationInfo && (
              <p className="text-xs text-slate-400 dark:text-dark-textSecondary">
                {extraLocationInfo}
              </p>
            )}
            {consultationPrice && (
              <p className="mt-2 text-sm font-semibold text-slate-700 dark:text-dark-textOnDark">
                Consultation price: EGP {consultationPrice}
              </p>
            )}
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/GoogleMapTA (1) 1.png"
              alt="Clinic location map"
              className="h-48 w-full object-cover max-[300px]:h-40"
            />
          </div>
        </section>
          </>
        )}
      </section>
    </aside>
  );
};

export default DoctorDetails;
