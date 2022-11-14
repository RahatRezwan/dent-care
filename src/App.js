import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Route/Routes";
import { Toaster } from "react-hot-toast";

const App = () => {
   return (
      <div>
         <RouterProvider router={router} />
         <Toaster />
      </div>
   );
};

export default App;
