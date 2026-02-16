import { IoMdAddCircleOutline } from "react-icons/io";
import { FiEdit3 } from "react-icons/fi";
import { GiBoxTrap } from "react-icons/gi";
import { FaMedal } from "react-icons/fa";
import { ImBug } from "react-icons/im";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import StatCard from "../Components/StatCard";
import ActionButton from "../Components/ActionButton";
import InfoCard from "../Components/InfoCard";
import BugDetailModal from "../Components/BugDetailModal";

// --- ANA SAYFA BÖLÜMÜ ---
function Home({ bugs, deleteBug, caughtCount, totalScore }) {
  // Seçili böceği tutan state
  const [selectedBug, setSelectedBug] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="homePageLayout">
      {/* --- SAYFA BAŞLIĞI --- */}
      <div className="headerTitle flex justify-center mb-3">
        <h1
          className="
            font-bungee
            text-[70px]
            text-transparent
            bg-clip-text
            bg-gradient-to-r
            from-cyan-400
            via-pink-500
            to-orange-500
            inline-block
            drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]
            tracking-tighter
            mb-2
          "
        >
          BUG COLLECTOR
        </h1>
      </div>

      {/* --- İSTATİSTİK KARTLARI --- */}
      <div className="statsCardsWrapper flex justify-center gap-5 p-0 mb-7">
        <StatCard title="TOPLAM BÖCEK" value={bugs.length + caughtCount} numberColor="#ff0000ff" />
        <StatCard title="AKTİF BÖCEK" value={bugs.length} numberColor="#F61093" />
        <StatCard title="YAKALANAN" value={caughtCount} numberColor="#0EFF4E" />
        <StatCard title="TOPLAM PUAN" value={totalScore} numberColor="#ff890bff" />
      </div>

      {/* --- ANA İÇERİK BÖLÜMÜ --- */}
      <div className="contentArea flex flex-row justify-center gap-5">
        {/* --- HABITAT ALANI --- */}
        <div
          className="
            habitatArea
            relative
            min-w-[1033px]
            h-[415px]
            bg-[#0d1117]
            border-2
            border-cyan-500
            rounded-2xl
            shadow-[0_0_15px_rgba(6,182,212,0.3)]
            overflow-hidden
          "
        >
          {/* Başlık */}
          <h2 className="absolute top-0 left-0 w-full text-center text-cyan-400 text-[25px] p-4 font-serif font-bold z-10 bg-[#0d1117]/50 backdrop-blur-sm">
            BÖCEK HABİTATI
          </h2>

          {/* BÖCEKLERİN RASTGELE LİSTELENDİĞİ ALAN */}
          <div className="relative w-full h-full mt-10">
            {bugs.map((bug, index) => {
              const randomTop = (index * 157) % 75 + 5; // %5 ile %80 arası yükseklik
              const randomLeft = (index * 397) % 85 + 5; // %5 ile %90 arası genişlik
              const randomDuration = 4 + (index % 4); // Her böcek farklı hızda (4sn - 8sn)
              const randomDelay = (index * 0.4) % 2;

              return (
                <div
                  key={bug.id}
                  onClick={() => setSelectedBug(bug)}
                  className="bug-animation absolute cursor-pointer text-5xl hover:scale-125 transition-transform duration-300 flex flex-col items-center"
                  style={{
                    top: `${randomTop}%`,
                    left: `${randomLeft}%`,
                    animationDuration: `${randomDuration}s`, // Daha hareketli/hızlı
                    animationDelay: `${randomDelay}s`,
                  }}
                >
                  {bug.severity.includes("Küçük") && <span>🦋</span>}
                  {bug.severity.includes("Orta") && <span>🐛</span>}
                  {bug.severity.includes("Büyük") && <span>🐞</span>}

                  <p className="text-[10px] text-cyan-300/50 text-center mt-1 font-sans uppercase font-bold bg-black/40 px-2 rounded-md">
                    {bug.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- DETAY POPUP (MODAL) --- */}
        {selectedBug && (
          <BugDetailModal
            bug={selectedBug}
            onClose={() => setSelectedBug(null)}
            onDelete={(id, severity) => {
              deleteBug(id, severity);
              setSelectedBug(null);
            }}
            onEdit={(id) => {
              navigate(`/edit-bug/${id}`);
              setSelectedBug(null);
            }}
          />
        )}

        {/* --- SIDEBAR: EKLEME & BİLGİ KARTLARI --- */}
        <div className="sidePanel">
          <ActionButton
            label="YENİ BÖCEK EKLE"
            variant="orange"
            width="w-[410px]"
            height="h-[40px]"
            onClick={() => navigate("/add-bug")}
          />

          <InfoCard
            icon={<ImBug className="text-gray-400" />}
            title="Böcekler Sahnede"
            description="Hareketli böceklere tıklayarak detayları gör"
          />

          <InfoCard
            icon={<IoMdAddCircleOutline className="text-green-400" />}
            title="Yeni Böcek Ekle"
            description="Yeni böcek ekleyerek sahneyi doldur"
          />

          <InfoCard icon={<FiEdit3 className="text-purple-500" />} title="Düzenle" description="Böcek detaylarını güncelle" />

          <InfoCard
            icon={<GiBoxTrap className="text-red-500" />}
            title="Yakala"
            description="Çözülen böcekleri sahneden kaldır, puan kazan!"
          />

          <InfoCard
            icon={<FaMedal className="text-yellow-300" />}
            title="Puan Sistemi"
            description="Küçük: 10 - Orta: 25 - Büyük: 50"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
