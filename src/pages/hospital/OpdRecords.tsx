import {
  hospitalDocumentYears,
  hospitalOpdByYear,
} from "../../data/hospitalDocuments";
import HospitalRecordsPage from "./HospitalRecordsPage";

const OpdRecords = () => {
  return (
    <HospitalRecordsPage
      title="OPD"
      years={hospitalDocumentYears}
      recordsByYear={hospitalOpdByYear}
    />
  );
};

export default OpdRecords;
