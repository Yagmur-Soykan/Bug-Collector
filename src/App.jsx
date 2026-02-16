import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AddBug from "./Pages/AddBug";
import "./App.css";

function App() {
  // 1. MEVCUT BÖCEKLER
  const [bugs, setBugs] = useState(() => {
    const savedBugs = localStorage.getItem("bugHabitat");
    return savedBugs ? JSON.parse(savedBugs) : [];
  });

  // 2. YAKALANAN BÖCEK SAYISI
  const [caughtCount, setCaughtCount] = useState(() => {
    const savedCount = localStorage.getItem("caughtCount");
    return savedCount ? JSON.parse(savedCount) : 0;
  });

  // 3. TOPLAM PUAN
  const [totalScore, setTotalScore] = useState(() => {
    const savedScore = localStorage.getItem("totalScore");
    return savedScore ? JSON.parse(savedScore) : 0;
  });

  // HAFIZAYA KAYDETME (LocalStorage)
  useEffect(() => {
    localStorage.setItem("bugHabitat", JSON.stringify(bugs));
    localStorage.setItem("caughtCount", JSON.stringify(caughtCount));
    localStorage.setItem("totalScore", JSON.stringify(totalScore));
  }, [bugs, caughtCount, totalScore]);

  // BÖCEK EKLEME
  const addBug = (newBug) => {
    setBugs([...bugs, { ...newBug, id: Date.now().toString() }]);
  };

  // BÖCEK YAKALAMA VE PUAN HESAPLAMA
  const deleteBug = (id, severity) => {
    console.log("Gelen şiddet bilgisi:", severity);

    let points = 0;

    if (severity.includes("Büyük") || severity.includes("Kritik")) {
      points = 50;
    } else if (severity.includes("Orta") || severity.includes("Önemli")) {
      points = 25;
    } else {
      points = 10; // Küçük veya belirsizse 10 ver
    }

    console.log("Hesaplanan puan:", points); 

    setBugs(bugs.filter((bug) => bug.id !== id));
    setCaughtCount((prev) => prev + 1);
    setTotalScore((prev) => prev + points);
  };

  const updateBug = (updatedBug) => {
    setBugs(bugs.map((bug) => (bug.id === updatedBug.id ? updatedBug : bug)));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home bugs={bugs} deleteBug={deleteBug} caughtCount={caughtCount} totalScore={totalScore} />}
        />
        <Route path="/add-bug" element={<AddBug addBug={addBug} />} />
        <Route path="/edit-bug/:id" element={<AddBug addBug={addBug} bugs={bugs} updateBug={updateBug} />} />
      </Routes>
    </Router>
  );
}

export default App;
