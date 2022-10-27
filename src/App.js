import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Public/PublicRoutes";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-right" reverseOrder={true} />
    </div>
  );
}

export default App;
