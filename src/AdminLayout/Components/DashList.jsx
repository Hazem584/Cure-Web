import React, { useEffect } from "react";
import DashCards from "./DashCards";
import Loading from "./../../components/Loading/Loading";
const DashList = ({ doctors, refetch, loading }) => {
  return (
    <div className="flex justify-center dark:bg-dark-darkBg">
      <div className="flex flex-col gap-6 w-10/12">
        {loading ? (
          <Loading />
        ) : (
          (doctors || []).map((doctor) => (
            <DashCards doctor={doctor} key={doctor._id} refetch={refetch} />
          ))
        )}
      </div>
    </div>
  );
};

export default DashList;
