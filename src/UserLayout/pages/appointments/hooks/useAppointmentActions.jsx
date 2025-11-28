import { useCallback } from "react";
import { createAppointmentRequest } from "../services/appointmentsApi";

export const useAppointmentActions = ({ doctorId, doctor }) => {
  const doctorRecordId = doctor?._id;

  const createAppointment = useCallback(
    async (payload) => {
      if (!doctorId || !doctorRecordId) {
        throw new Error("Please select a doctor before booking.");
      }

      return createAppointmentRequest({
        ...payload,
        doctorId,
      });
    },
    [doctorId, doctorRecordId]
  );

  return { createAppointment };
};

export default useAppointmentActions;
