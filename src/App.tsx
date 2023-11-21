import { useEffect } from "react";
import { useLocalStorage } from "./hooks/useStorage/useStorage";
import { routes } from "./routes/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

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
      <Router>
        <Routes>
          {routes.map((route: any) => {
            return <Route path={route.path} element={route.element} />
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
