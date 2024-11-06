import { configureStore } from "@reduxjs/toolkit";
import metricsReducer from "./features/Metrics";
import developmentActivityReducer from "./features/DevelopmentActivity";
import doughnutdataReducer from "./features/Doughnut";
import piechartdataReducer from "./features/PieChart";
const store = configureStore({
  reducer: {
    metrics: metricsReducer,
    developmentactivities: developmentActivityReducer,
    doughnutdata: doughnutdataReducer,
    piechatdata: piechartdataReducer,
  },
});

export default store;
