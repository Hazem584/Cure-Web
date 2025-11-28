import { useEffect, useState } from "react";
import { fetchDoctorById } from "../services/appointmentsApi";

export const useDoctorProfile = (doctorId) => {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!doctorId) {
      setDoctor(null);
      setError("Please pick a doctor from the doctors page first.");
      setLoading(false);
      return;
    }

    let isMounted = true;
    const controller = new AbortController();

    const loadDoctor = async () => {
      try {
        setLoading(true);
        setError("");
        const doctorData = await fetchDoctorById(doctorId, {
          signal: controller.signal,
        });
        if (isMounted) {
          setDoctor(doctorData);
        }
      } catch (err) {
        if (err.name === "AbortError") return;
        if (isMounted) {
          setError(err.message || "Unable to load doctor details.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadDoctor();
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [doctorId]);

  return { doctor, loading, error };
};

export default useDoctorProfile;
