import React, { createContext, useContext, useState } from "react";
import ResumeModal from "../components/ResumeModal";

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  return (
    <ResumeContext.Provider value={{ isResumeOpen, openResume, closeResume }}>
      {children}
      <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
    </ResumeContext.Provider>
  );
};

export const useResume = () => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error("useResume must be used within a ResumeProvider");
  }
  return context;
};
