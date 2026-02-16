import { IoMdClose } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { GiTargetShot } from "react-icons/gi";

const BugDetailModal = ({ bug, onClose, onDelete, onEdit }) => {
  if (!bug) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-[500px] bg-[#0a0e14] rounded-2xl p-6 border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <span className="text-xl">🔍</span>
            <h2 className="text-cyan-400 text-2xl font-bold tracking-wider">BÖCEK DETAYLARI</h2>
          </div>
          <button onClick={onClose} className="text-pink-500 text-2xl hover:scale-110 transition-transform">
            <IoMdClose />
          </button>
        </div>

        <hr className="border-gray-800 mb-6" />

        <div className="flex justify-center mb-6">
          <div className="text-6xl bg-gray-900/50 p-4 rounded-xl border border-gray-800">
            {bug.severity.includes("Küçük") && "🦋"}
            {bug.severity.includes("Orta") && "🐛"}
            {bug.severity.includes("Büyük") && "🐞"}
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-cyan-500 text-xs font-bold block mb-1">BÖCEK ADI</label>
            <div className="w-full bg-[#0d121a] border-l-4 border-pink-500 p-3 text-gray-300 rounded-r-lg">
              {bug.name}
            </div>
          </div>

          <div>
            <label className="text-cyan-500 text-xs font-bold block mb-1">ŞİDDET SEVİYESİ</label>
            <div className="inline-block px-4 py-1 rounded-full bg-green-500 text-black font-bold text-xs uppercase">
              {bug.severity}
            </div>
          </div>

          <div>
            <label className="text-cyan-500 text-xs font-bold block mb-1">AÇIKLAMA</label>
            <div className="w-full bg-[#0d121a] border-l-4 border-pink-500 p-3 text-gray-300 rounded-r-lg min-h-[80px]">
              {bug.description}
            </div>
          </div>
        </div>

        {/* --- BUTONLAR ALANI --- */}
        <div className="flex gap-4 mt-8">
          {/*DÜZENLE BUTONU*/}
          <button
            onClick={() => onEdit(bug.id)}
            className="flex-1 h-12 bg-gradient-to-r from-yellow-400 to-cyan-400 rounded-xl text-black font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
          >
            <FaEdit /> DÜZENLE
          </button>

          {/* YAKALA BUTONU */}
          <button
            onClick={() => onDelete(bug.id, bug.severity)}
            className="flex-1 h-12 bg-pink-600 rounded-xl text-white font-bold flex items-center justify-center gap-2 hover:bg-pink-500 transition-colors shadow-[0_0_15px_rgba(219,39,119,0.4)]"
          >
            <GiTargetShot className="text-xl" /> YAKALA
          </button>
        </div>
      </div>
    </div>
  );
};

export default BugDetailModal;
