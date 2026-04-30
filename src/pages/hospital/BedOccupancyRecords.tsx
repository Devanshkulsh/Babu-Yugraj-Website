import {
  hospitalBedOccupancyByYear,
  hospitalDocumentYears,
} from "../../data/hospitalDocuments";
import HospitalRecordsPage from "./HospitalRecordsPage";

const BedOccupancyRecords = () => {
  return (
    <HospitalRecordsPage
      title="Bed Occupancy"
      years={hospitalDocumentYears}
      recordsByYear={hospitalBedOccupancyByYear}
    />
  );
};

export default BedOccupancyRecords;
