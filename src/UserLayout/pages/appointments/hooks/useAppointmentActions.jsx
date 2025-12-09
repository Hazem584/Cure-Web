import { useCallback } from "react";
import { createAppointmentRequest } from "../services/appointmentsApi";

export const useAppointmentActions = ({ doctorId }) => {
  const createAppointment = useCallback(
    async (payload) => {
      if (!doctorId) {
        throw new Error("Please select a doctor before booking.");
      }

      return createAppointmentRequest({
        ...payload,
        doctorId,
      });
    },
    [doctorId]
  );

  return { createAppointment };
};

export default useAppointmentActions;
