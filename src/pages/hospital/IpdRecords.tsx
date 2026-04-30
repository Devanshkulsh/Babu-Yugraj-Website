import {
  hospitalDocumentYears,
  hospitalIpdByYear,
} from "../../data/hospitalDocuments";
import HospitalRecordsPage from "./HospitalRecordsPage";

const IpdRecords = () => {
  return (
    <HospitalRecordsPage
      title="IPD"
      years={hospitalDocumentYears}
      recordsByYear={hospitalIpdByYear}
    />
  );
};

export default IpdRecords;
