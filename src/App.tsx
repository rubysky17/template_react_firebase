import { useEffect } from "react";
import { useLocalStorage } from "./hooks/useStorage/useStorage";
import { routes } from "./routes/routes";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(routes);

function App() {
  const [language, setLanguage] = useLocalStorage("language");

  useEffect(() => {
    // ! Kiểm tra first load page là ngon ngữ gì
    // * undefined => mặc định 'vi'
    if (typeof language === "undefined" || !language) {
      setLanguage("vi");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
