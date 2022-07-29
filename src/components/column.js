import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "Patient",
    accessor: "patient_name",
  },
  {
    Header: "Treating Therapist",
    accessor: "doctor_name",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Date",
    accessor: "date",
  },
  {
    Header: "Country",
    accessor: "country",
  },
];
