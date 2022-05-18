import React from "react";
import GridInfo  from "./GridInfo"
// import GridForm from "./GridForm"
import { Grid } from "@material-ui/core";

export default function Login() {

	return (
		<Grid container style={{ padding: "40px", flexGrow: 1, height: "100%" }}>
			<GridInfo />
			{/* <GridForm /> */}
		</Grid>
	);
}