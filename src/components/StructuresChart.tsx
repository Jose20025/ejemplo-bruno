import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { getStructuresPerCountry } from "../mock/data";
import { useMemo } from "react";

interface Props {
  selectedCountry: string;
  onSelectCountry: (country: string) => void;
}

export const StructuresChart = ({
  selectedCountry,
  onSelectCountry,
}: Props) => {
  const data = useMemo(() => getStructuresPerCountry(), []);

  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <BarChart height={300} data={data}>
        <XAxis dataKey="country" angle={-45} textAnchor="end" height={100} />
        <YAxis />
        <Bar
          dataKey="count"
          fill="#8884d8"
          onClick={(data) => onSelectCountry(data.country)}
        >
          {data.map((entry) => (
            <Cell
              cursor="pointer"
              fill={selectedCountry === entry.country ? "#82ca9d" : "#8884d8"}
              key={`cell-${entry.country}`}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
