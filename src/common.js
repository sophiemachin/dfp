import {styled} from "@mui/material/styles";
import {Container} from "@mui/material";

const styles = {
    paddingTop: '100px',
    minHeight: '100vh',
    maxWidth: "l",
    paddingBottom: '100px',
}

export const StyledDiv = styled(Container, {
    name: "StyledDiv",
    slot: "Wrapper"
})((props) => (styles));


