import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen bg-brandYellow flex flex-col items-center py-24 px-6">
      {/* عنوان الصفحة */}
      <h2 className="text-4xl font-bold text-red-600 mb-8">
        تواصل معنا 📞
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* معلومات التواصل */}
        <div className="bg-brandOrange shadow-lg rounded-2xl p-6 border-l-4 border-yellow-500 text-2xl">
          <h3 className=" font-semibold text-red-600 mb-4">
            بيانات التواصل
          </h3>
          <p className="mb-2">📍 العنوان: وسط المنصورة - حي الجامعة - الدقهلية</p>
          <p className="mb-2">📱 واتس: <span className="text-green-600">+20 123 456 789</span></p>
          <p className="mb-2">☎️ الخط الساخن: <span className="text-green-600">19777</span></p>
          <p className="mb-4">🕒 مواعيد العمل: يوميًا من 10 ص إلى 12 منتصف الليل</p>

          <div className="overflow-hidden rounded-xl shadow-md">
            <iframe
              title="location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.144699055197!2d31.23571171511352!3d30.044419281883983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c2f1d4c4ef%3A0xf1d2b29a5a9b5cdb!2sTahrir%20Square!5e0!3m2!1sen!2seg!4v1675347294117!5m2!1sen!2seg"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* فورم التعليقات */}
        <div className="bg-brandOrange shadow-lg rounded-2xl p-6 border-l-4 border-red-600">
          <h3 className="text-2xl font-semibold text-brandRed mb-4">
            اترك تعليقك أو رسالتك ✍️
          </h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="الاسم"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="رقم الهاتف"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="اكتب رسالتك..."
              rows="4"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
            >
              إرسال
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
