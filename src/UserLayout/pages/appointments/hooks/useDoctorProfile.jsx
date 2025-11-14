import { useEffect, useState } from "react";
import { fetchDoctorById } from "../services/appointmentsApi";

export const useDoctorProfile = (doctorId) => {
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!doctorId) {
      setDoctor(null);
      setError("Please pick a doctor from the doctors page first.");
      return;
    }

    const controller = new AbortController();

    const loadDoctor = async () => {
      try {
        setLoading(true);
        setError("");
        const doctorData = await fetchDoctorById(doctorId, {
          signal: controller.signal,
        });
        setDoctor(doctorData);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Unable to load doctor details.");
        }
      } finally {
        setLoading(false);
      }
    };

    loadDoctor();
    return () => controller.abort();
  }, [doctorId]);

  return { doctor, loading, error };
};

export default useDoctorProfile;
