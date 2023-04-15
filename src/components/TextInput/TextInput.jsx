import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

export function TextInput({id, label, minlength, maxlength, name}) {
    return (
        <Box>
            <FormControl fullWidth>
                <TextField
                inputProps={{
                    minLength: minlength,
                    maxLength: maxlength,
                }}
                id={id}
                label={label}
                name={name}
                type="text"
                />
            </FormControl>
        </Box>
    )
}

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    minlength: PropTypes.number.isRequired,
    maxlength: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}