const ActionButton = ({ label, variant, onClick, width, height }) => {
  const variants = {
    orange: "from-[#ff2d55] to-[#ffb347] text-black",
    cyanPink: "from-cyan-400 via-purple-500 to-pink-500 text-black",
    greenCyan: "from-yellow-300 to-cyan-400 text-black",
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${width}
        ${height}
        bg-gradient-to-r ${variants[variant]}
        flex items-center justify-center
        py-4 px-8
        mb-3
        rounded-lg
        font-serif font-bold text-xl
        uppercase tracking-widest
        transition-all active:scale-95
        hover:brightness-110
        cursor-pointer
        border-none
      `}
    >
      {label}
    </button>
  );
};

export default ActionButton;

/* NOT

" "       - Normal Yazı: Hiç değişmeyen şeyler için kullanılır. Örnek --> className="bg-red-500 p-4"
` ` + ${} - Değişkenli Yazı: ${} ifadesi değişkeni yazıya ekler. Bu olduğu zaman backtick kullanılır. Örnek --> className={`bg-red-500 ${width}`}
style     - CSS Değeri: Eğer verdiği şey Tailwind class değilse (#ff0055, 13px) --> Örnek: style={{ color: "#ff0000", width:"13px" }}

*/
