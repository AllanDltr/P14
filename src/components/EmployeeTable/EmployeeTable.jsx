import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { columns } from "../../datas/datas";

export function Table() {
  const data = useSelector((state) => state.employeeDatas);
  console.log(data)

  return (
    <div className="container">
      <div className="fade">
        <DataGrid fullWidth
          style={{
            height:400,
          }}
          rows={data.employeeList}
          columns={columns}
        />
      </div>
      <Link to="/"> Get Back Home → </Link>
    </div>
  )
}