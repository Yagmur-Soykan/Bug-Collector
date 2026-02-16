import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import ActionButton from "./ActionButton";
import { useNavigate } from "react-router-dom";

const AddBugModal = ({ addBug, updateBug, editData }) => {
  const navigate = useNavigate();

  // State'leri editData varsa ondan gelen verilerle, yoksa boş başlatıyoruz
  const [bugName, setBugName] = useState(editData ? editData.name : "");
  const [description, setDescription] = useState(editData ? editData.description : "");
  const [severitySelected, setSeveritySelected] = useState(
    editData ? editData.severity : "Küçük - Önemsiz Hata"
  );
  const [severityOpen, setSeverityOpen] = useState(false);

  // Eğer sayfa açıkken editData değişirse state'leri güncelle
  useEffect(() => {
    if (editData) {
      setBugName(editData.name);
      setDescription(editData.description);
      setSeveritySelected(editData.severity);
    }
  }, [editData]);

  const handleSave = () => {
    if (bugName === "" || description === "") {
      alert("Lütfen tüm alanları doldur!");
      return;
    }

    const bugObject = {
      name: bugName,
      description: description,
      severity: severitySelected,
      // Eğer düzenleme modundaysak eski ID'yi koru, yoksa App.jsx zaten Date.now verecek
      ...(editData && { id: editData.id }),
    };

    if (editData) {
      // DÜZENLEME MODU
      updateBug(bugObject);
    } else {
      // EKLEME MODU
      addBug(bugObject);
    }

    navigate("/");
  };

  const severityOptions = [
    { label: "Küçük - Önemsiz Hata", icon: "🦋 " },
    { label: "Orta - Önemli Hata", icon: "🐛 " },
    { label: "Büyük - Kritik Hata", icon: "🐞 " }
  ];

  return (
    <div className="flex items-center justify-center bg-gray-950 p-4 min-h-screen">
      <div className="relative w-[900px] h-[660px] bg-[#0a0e14] rounded-2xl p-8 border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-3">
            <span className="text-yellow-400 text-3xl">⚡</span>
            <h2 className="text-cyan-400 text-4xl font-bold tracking-widest italic uppercase">
              {editData ? "BÖCEĞİ DÜZENLE" : "YENİ BÖCEK EKLE"}
            </h2>
          </div>

          <button
            className="text-pink-500 text-3xl hover:text-pink-300 transition-colors"
            onClick={() => navigate("/")}
          >
            <IoMdClose />
          </button>
        </div>

        <hr className="border-gray-800 mb-4" />

        <form onSubmit={(e) => e.preventDefault()}>
          <div className="pb-1">
            <label className="text-yellow-500 text-xl font-bold tracking-wider">BÖCEK ADI</label>
            <input
              type="text"
              placeholder="Örn: Login Hatası"
              value={bugName}
              onChange={(e) => setBugName(e.target.value)}
              className="w-full h-[65px] bg-[#0d121a] border border-cyan-900 rounded-lg py-3 px-4 mt-4 mb-4 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-all"
            />
          </div>

          <div className="pb-1">
            <label className="block text-yellow-500 text-xl font-bold tracking-wider">ŞİDDET SEVİYESİ</label>
            <div className="relative w-full mt-4 mb-4">
              <div
                className="w-full h-[65px] bg-[#0d121a] border border-cyan-900 rounded-lg py-3 px-4 flex items-center justify-between cursor-pointer"
                onClick={() => setSeverityOpen(!severityOpen)}
              >
                <span className="flex items-center gap-2 text-lg text-gray-300">
                  {severityOptions.find((o) => o.label === severitySelected)?.icon}
                  {severitySelected}
                </span>
                <span className="text-cyan-500">▼</span>
              </div>

              {severityOpen && (
                <div className="absolute mt-1 w-full bg-[#0d121a] border border-cyan-900 rounded-lg shadow-lg z-10">
                  {severityOptions.map((option, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-cyan-800 cursor-pointer text-gray-300 flex items-center gap-2"
                      onClick={() => {
                        setSeveritySelected(option.label);
                        setSeverityOpen(false);
                      }}
                    >
                      <span className="text-xl">{option.icon}</span>
                      <span>{option.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="mb-2">
            <label className="block text-yellow-500 text-xl font-bold tracking-wider">AÇIKLAMA</label>
            <textarea
              rows="4"
              placeholder="Hatayı detaylı açıkla..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full h-[170px] mt-4 bg-[#0d121a] border border-cyan-900 rounded-lg py-3 px-4 text-gray-300 placeholder-gray-600 focus:outline-none focus:border-cyan-400 transition-all resize-none"
            ></textarea>
          </div>
        </form>

        <div className="flex justify-center">
          <ActionButton
            label={editData ? "DEĞİŞİKLİKLERİ KAYDET" : "YENİ BÖCEK EKLE"}
            variant={editData ? "orange" : "greenCyan"} 
            width="w-[400px]"
            height="h-[62px]"
            onClick={handleSave}
          />
        </div>
      </div>
    </div>
  );
};

export default AddBugModal;
