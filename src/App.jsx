import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Query from "./Query";

function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <div>
        {/* <Lodash></Lodash> */}
        {/* <Practice></Practice> */}
        {/* <SpringSec /> */}
        {/* <Form /> */}
        <Query />
      </div>
    </QueryClientProvider>
  );
}

export default App;
