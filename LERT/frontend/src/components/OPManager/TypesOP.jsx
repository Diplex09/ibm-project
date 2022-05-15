import { TypesFields } from "../Fields/TypesFields";
import Paper from "@mui/material/Paper";

export const TypesOP = () => {
    return (
        <>
            <Paper
                sx={{
                    background: "white",
                    marginBottom: "2rem",
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                }}
            >
                <TypesFields />
            </Paper>
        </>
    );
};

export default TypesOP;
