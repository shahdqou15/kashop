import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
.use(detector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: {
                    "Home": "Home",
                    "Login": "Login",
                    "Sign up": "Sign up",
                    "Cart": "Cart",
                    "Logout": "Logout",
                    "Shop": "Shop",
                    "Products": "Products",
                    "Categories": "Categories",
                    "Contact": "Contact",
                    "Add To Cart": "Add To Cart",
                    "Product": "Product",
                    "Price": "Price",
                    "Quantity": "Quantity",
                    "Subtotal": "Subtotal",
                    "Action": "Action",
                    "Shipping": "Shipping",
                    "total": "total",
                    "Cart Total": "Cart Total",
                    "Return to shop": "Return to shop",
                    "Apply Coupon": "Apply Coupon",
                    "Procees to checkout": "Procees to checkout",
                    "Payment Method":"Payment Method",
                    "Pay Now":"Pay Now"
                }
            },
            ar: {
                translation: {
                    "Home": "الرئيسية",
                    "Login": "تسجيل دخول",
                    "Sign up": "انشاء حساب",
                    "Cart": "السلة",
                    "About":"حول",
                    "Logout": "تسجيل خروج",
                    "Shop": "تسوق",
                    "Products": "المنتجات",
                    "Categories": "التصنيفات",
                    "Contact": "تواصل",
                    "Add To Cart": "اضف الي السلة",
                    "Product": "المنتج",
                    "Price": "السعر",
                    "Quantity": "الكمية",
                    "Subtotal": "المجموع الجزئي",
                    "Action": "الحدث",
                    "Shipping": "الشحن",
                    "total": "المجموع الكلي",
                    "Cart Total": "مجموع السلة",
                    "Return to shop": "العودة الى التسوق",
                    "Apply Coupon": "اضف القسيمة",
                    "Procees to checkout": "المتابعة الى الدفع",
                    "Payment Method":"طريقة الدفع",
                    "Pay Now":"ادفع الان"
                }
            }
        },
        fallbackLng: "en",

    });
    export default i18n;