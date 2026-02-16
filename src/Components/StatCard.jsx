const StatCard = ({ title, value, numberColor }) => {
  return (
    <div
      className="
        stat-card
        rounded-xl
        px-0 py-3
        flex flex-col items-center gap-0
        min-w-[350px] min-h-[30px]
        shadow bg-[#1A1C1A]
        border border-transparent
        transition-all duration-300
        hover:scale-[1.02]
        hover:border-cyan-400
        hover:shadow-[0_0_20px_rgba(34,211,238,0.4),inset_0_0_10px_rgba(34,211,238,0.2)]
      "
    >
      {/* Başlık */}
      <h3
        className="
          text-[20px]
          font-serif
          tracking-widest
          uppercase
          text-[#C5C6C5]
        "
      >
        {title}
      </h3>

      {/* İstatistik Değeri */}
      <span
        className="
          font-serif
          text-[25px]
          font-extrabold
        "
        style={{ color: numberColor }}
      >
        {value}
      </span>
    </div>
  );
};

export default StatCard;
