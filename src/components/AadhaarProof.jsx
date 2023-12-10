import React from "react";
import { useAnonAadhaar, AnonAadhaarProof, LogInWithAnonAadhaar } from "anon-aadhaar-react";

const AadhaarProof = () => {
  const [anonAadhaar] = useAnonAadhaar();

  return (
    <div>
      <LogInWithAnonAadhaar />
      <p>{anonAadhaar?.status}</p>
      {anonAadhaar?.status === "logged-in" && (
        <>
          <p>✅ Proof is valid</p>
          <AnonAadhaarProof code={JSON.stringify(anonAadhaar.pcd, null, 2)} />
        </>
      )}
    </div>
  );
};

export default AadhaarProof;
