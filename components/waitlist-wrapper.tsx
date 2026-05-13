'use client';

import { useEffect, useState } from "react";
import WaitlistForm from "@/components/waitlist";

export default function WaitlistWrapper() {
  const [showWaitlist, setShowWaitlist] = useState(false);

  useEffect(() => {
    const waitlistShown = localStorage.getItem('waitlistShown');
    if (!waitlistShown) {
      setShowWaitlist(true);
    }
  }, []);

  const handleClose = () => {
    localStorage.setItem('waitlistShown', 'true');
    setShowWaitlist(false);
  };

  if (!showWaitlist) return null;

  return (
    <WaitlistForm
      onClose={() => setShowWaitlist(false)}
      onSubmit={() => handleClose()}
    />
  );
}
