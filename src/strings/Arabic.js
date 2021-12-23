

let Arabic = {
    Navbar: {
        Logo: "ختم توزيع",
        Links: ["إنشاء ختم", "بشأن", "تغيير اللغة"],
        LinkHelpers: ["/", "hakkimda"],
        Buttons: ["أرسل تقييما"],
        Languages: [{label: "عربي", value: 'ar'}, {label: "الانجليزية", value: 'en'}, {label: "اللغة التركية", value: 'tr'}],
        Pwa: 'تنزيله',
    },

    Pwa: {
        Alert: 'الرجاء استخدام متصفح Chrome لتنزيل هذا ، Safari لا يدعم هذه الميزة حتى الآن!',
        Popup: [
            'لتحميل هذا التطبيق الرجاء الضغط',
            'ثم اختر .الزر المتاح في متصفحك',
            'إضافة إلى الشاشة الرئيسية',
            '.زر من القائمة مفتوحة',
            '. سيتم تثبيت التطبيق إن شاء الله'
        ]
    },

    Footer: {
        aciz_kul:  "Yusuf Yeniçeri التي أدلى بها"
    },

    "/" : {
        Question: "إنشاء ختم جديد بالنقر فوق الزر!",
        Button: {
            Main: "إنشاء ختم جديد",
            Header: {
                Text: "تحديد عنوان ختم:",
                Button: "استمر"
            },
            Final: {
                Before: {
                    Header: "ارجوك انتظر!",
                    Link: "رابطك لنشر الختم:",
                    LinkReady: "الرابط يستعد",
                    Copy: "انسخ الرابط",
                    Button: "ارجوك انتظر!"
                },

                After: {
                    Header: "تم إنشاء جديد ختم!",
                    Link: "رابطك لنشر الختم:",
                    Copy: "تم نسخ الرابط",
                    Button: "استمر"
                }
            }
        },
        MevcutHatimler:'ختم شيدت'

    },

    "/cuz":{
        Before: {
            Question: "انقر فوق الجزء المطلوب ..",
            Wait: "ارجوك انتظر!",
            Error: "حدث خطأ ، تحديث الصفحة!"
        },

        After: {
            Copy: {
                Before: "انسخ الرابط",
                After: "تم نسخ الرابط!"
            },
            Share:'شارك ختم',


        },

        Button:{
            Question: "أدخل اسمك للحصول على الجزء:",
            Take: "احصل على الجزء"
        },
        ShareBox:{
            Title: 'حدد تطبيقًا لمشاركته:',
            Sms: 'شارك مع الرسائل القصيرة',
            Whatsapp: 'Whatsapp شارك مع',
        }
    }
}

export default Arabic;