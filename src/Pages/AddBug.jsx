import { useParams } from "react-router-dom";
import AddBugModal from "../Components/AddBugModal"; 

function AddBug({ addBug, updateBug, bugs }) {
  // 1. URL'deki ID'yi yakalıyoruz (Örn: /edit-bug/123)
  const { id } = useParams();

  // 2. Eğer ID varsa, düzenlenecek böceği bugs listesinden buluyoruz
  const bugToEdit = id ? bugs.find((b) => b.id === id) : null;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white">
      {/* Modal'a gerekli tüm propları geçiyoruz:
          - addBug: Yeni ekleme için
          - updateBug: Güncelleme için
          - editData: Eğer düzenleme modundaysak mevcut böcek bilgileri (null değilse modal düzenleme modunda açılır)
      */}
      <AddBugModal addBug={addBug} updateBug={updateBug} editData={bugToEdit} />
    </div>
  );
}

export default AddBug;
