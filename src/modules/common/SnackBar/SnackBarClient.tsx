"use client";
import { useToggle } from "@/store/useToggle";
import SnackBar from "./SnackBar";

const SnackbarClient = () => {
  const snackbarToggle = useToggle((state) => state.snackbarToggle);
  const handleSnackbarToggle = useToggle((state) => state.handleSnackbarToggle);

  return (
    <SnackBar
      snackbarToggle={snackbarToggle}
      handleClose={handleSnackbarToggle}
    />
  );
};

export default SnackbarClient;
