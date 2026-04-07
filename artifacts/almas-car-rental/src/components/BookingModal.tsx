import { useState } from "react";
import { X, Calendar, User, MapPin, FileText, CheckCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/9647735256513";
const TODAY = new Date().toISOString().split("T")[0];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  carName?: string;
}

export default function BookingModal({ isOpen, onClose, carName }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    startDate: "",
    endDate: "",
    location: "",
    purpose: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `مرحباً، أرغب بحجز سيارة.\n` +
      `السيارة: ${carName || "غير محدد"}\n` +
      `اسم الزبون: ${form.name}\n` +
      `تاريخ البداية: ${form.startDate}\n` +
      `تاريخ الانتهاء: ${form.endDate}\n` +
      `موقع الاستخدام: ${form.location}\n` +
      `الغرض من الاستخدام: ${form.purpose}`
    );
    window.open(`${WHATSAPP_URL}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setForm({ name: "", startDate: "", endDate: "", location: "", purpose: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" data-testid="booking-modal">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-card border border-card-border rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div>
            <h2 className="text-lg font-bold text-foreground">حجز السيارة</h2>
            {carName && <p className="text-sm text-muted-foreground mt-0.5">{carName}</p>}
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            data-testid="button-close-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8 gap-4" data-testid="booking-success">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <CheckCircle className="w-9 h-9 text-gray-800" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">تم إرسال طلبك!</h3>
                <p className="text-sm text-muted-foreground">
                  سيتواصل معك فريقنا عبر الواتساب لتأكيد الحجز
                </p>
              </div>
              <button
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-black hover:bg-gray-800 text-white font-bold transition-all"
                data-testid="button-close-success"
              >
                حسناً
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" data-testid="form-booking">
              {/* الاسم */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">
                  الاسم الكامل
                </label>
                <div className="relative">
                  <User className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    placeholder="أدخل اسمك الكامل"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-background border border-input rounded-xl pr-9 pl-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    data-testid="input-name"
                  />
                </div>
              </div>

              {/* التواريخ */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">
                    تاريخ البداية
                  </label>
                  <div className="relative">
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="date"
                      required
                      min={TODAY}
                      value={form.startDate}
                      onChange={(e) => setForm({ ...form, startDate: e.target.value, endDate: "" })}
                      className="w-full bg-background border border-input rounded-xl pr-9 pl-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                      data-testid="input-start-date"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-1.5 block">
                    تاريخ الانتهاء
                  </label>
                  <div className="relative">
                    <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="date"
                      required
                      min={form.startDate || TODAY}
                      value={form.endDate}
                      onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                      className="w-full bg-background border border-input rounded-xl pr-9 pl-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                      data-testid="input-end-date"
                    />
                  </div>
                </div>
              </div>

              {/* موقع الاستخدام */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">
                  موقع الاستخدام
                </label>
                <div className="relative">
                  <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  <select
                    required
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="w-full bg-background border border-input rounded-xl pr-9 pl-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black appearance-none"
                    data-testid="select-location"
                  >
                    <option value="">اختر المحافظة</option>
                    <option value="بغداد">بغداد</option>
                    <option value="البصرة">البصرة</option>
                    <option value="نينوى (الموصل)">نينوى (الموصل)</option>
                    <option value="أربيل">أربيل</option>
                    <option value="السليمانية">السليمانية</option>
                    <option value="دهوك">دهوك</option>
                    <option value="كركوك">كركوك</option>
                    <option value="الأنبار">الأنبار</option>
                    <option value="ديالى">ديالى</option>
                    <option value="صلاح الدين">صلاح الدين</option>
                    <option value="بابل">بابل</option>
                    <option value="كربلاء">كربلاء</option>
                    <option value="النجف">النجف</option>
                    <option value="القادسية">القادسية</option>
                    <option value="المثنى">المثنى</option>
                    <option value="ذي قار">ذي قار</option>
                    <option value="ميسان">ميسان</option>
                    <option value="واسط">واسط</option>
                  </select>
                </div>
              </div>

              {/* الغرض من الاستخدام */}
              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">
                  الغرض من الاستخدام
                </label>
                <div className="relative">
                  <FileText className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    placeholder="اكتب غرض استخدام السيارة..."
                    value={form.purpose}
                    onChange={(e) => setForm({ ...form, purpose: e.target.value })}
                    className="w-full bg-background border border-input rounded-xl pr-9 pl-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                    data-testid="input-purpose"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm transition-all duration-200 shadow hover:shadow-md mt-2"
                data-testid="button-submit-booking"
              >
                تأكيد الحجز ومعرفة الأسعار عبر واتساب
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
