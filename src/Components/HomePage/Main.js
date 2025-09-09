import React from "react";
import bgImage from "../../assets/images/خلفية1.png";
import { useNavigate } from "react-router-dom";
const Main = () => {

    const navigate =useNavigate()
    const gomanu = () => {
        navigate("/manu")
    }
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* overlay علشان نغمق الخلفية */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* المحتوى */}
      <div className="relative z-9 flex h-full flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-5xl text-brandYellow font-extrabold drop-shadow-lg">
          كشري التحرير
        </h1>
        <p className="mt-4 text-2xl max-w-2xl">
          الطعم المصري الأصيل جرب أشهى أطباق الكشري بالمكونات الطازة والخلطات السرية
        </p>
              <button className="mt-6 rounded-2xl bg-red-600 px-6 py-3 text-lg font-semibold shadow-lg transition hover:bg-red-700"
              onClick={gomanu}>
          شوف المنيو
        </button>
      </div>
    </div>
  );
};

export default Main;
