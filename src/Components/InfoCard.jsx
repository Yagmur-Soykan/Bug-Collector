const InfoCard = ({ icon, title, description }) => {
  return (
    <div
      className="
        info-card
        flex
        flex-row
        gap-5
        p-3
        mb-3
        w-[410px]
        h-[62.5px]
        bg-[#1a1d21]
        border-l-8
        border-pink-500
        rounded-r-lg
        shadow-md
      "
    >
      {/* İkon Alanı */}
      <div className="icon-area text-2xl mt-1.5">{icon}</div>

      {/* Metin Alanı */}
      <div className="text-area flex flex-col text-left">
        <h4 className="font-serif text-white font-bold text-[15px] uppercase tracking-tight">{title}</h4>
        <p className="font-serif text-gray-400 text-[15px] leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
