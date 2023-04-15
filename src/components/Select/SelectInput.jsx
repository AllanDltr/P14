import {useState} from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

export const SelectInput =  ({id, label, name, data}) => {
    const [selectData, setSelectData] = useState(data[0])

    const handleChange = (e) => {
        setSelectData(e.target.value)
    }

    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel id={id}> {label} </InputLabel>
                <Select
                    labelId="select-label"
                    id={id}
                    name={name}
                    value={selectData}
                    label={label}
                    onChange={handleChange}
                >
                    {data.map((item) => (
                        <MenuItem key={item} value={item}>
                        {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

SelectInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
}