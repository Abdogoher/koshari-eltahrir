import React from 'react'

const AboutContent = () => {
  return (
    <div className="flex items-center justify-center bg-brandYellow pb-8">
      <div className="w-5/6 rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-brandRed mb-4 text-center">
          عن كشري التحرير
        </h2>
        <p className="text-gray-800 leading-relaxed text-lg">
          بدأ "كشري التحرير" في أوائل التسعينات كواحد من أشهر مطاعم الكشري في وسط
          القاهرة. تميز بمذاقه الفريد الذي جمع بين الوصفة المصرية الأصيلة ولمسة
          عصرية. سر نجاحه كان استخدام مكونات طازة وخلطة دقة مميزة أحبها الزبائن.
          مع مرور السنين، أصبح علامة مميزة للكشري في مصر ووجهة أساسية لعشاق الأكلات
          الشعبية. واليوم، يواصل "كشري التحرير" الحفاظ على مكانته كأحد رموز المطبخ
          المصري.
        </p>
      </div>
    </div>
  )
}

export default AboutContent
