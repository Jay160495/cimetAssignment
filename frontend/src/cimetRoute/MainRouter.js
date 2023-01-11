import React from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/system/Box";
import PostIndex from "../component/service";
import RouteHandle from "./routehandle";


const MainRouter = () => {

    return (
    <Box>
        <Routes>
          <Route
            exact
            path="/"
            element={<RouteHandle component={PostIndex}/>}
          />
        </Routes>
    </Box>
  );
};

export default MainRouter;
