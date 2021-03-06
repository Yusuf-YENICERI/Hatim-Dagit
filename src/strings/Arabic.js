

let Arabic = {

    rtl: true,

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
        aciz_kul:  "Yusuf Yeniçeri التي أدلى بها",
        ziyaret: ["تمت زيارة هذا الموقع "," مرات."],
        version: " الإصدار الحالي هو",
        GoToMainPage: "انتقل إلى الصفحة الرئيسية",
        Feedback: "أرسل رسالة"
    },

    "/" : {
        Question: "إنشاء ختم جديد بالنقر فوق الزر!",
        Button: {
            Main: "إنشاء ختم جديد",
            Ramazan: "جعل تناوب رمضان الخطمي",
            Header: {
                Text: "إنشاء ختم",
                InputSpan: ["عنوان", "الوصف" ,"تاريخ إنهاء خاتم"],
                Input: ["الرجاء إدخال عنوان"],
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
        ExistingKhatms:'ختم شيدت'

    },

    "/cuz":{
        KhatmFinishDate: [".","صلاة هذا الختم ستقام في"],
        NewSubKhatm: ".أضف ختم إلى هذه الصفحة",

        Before: {
            Question: "انقر فوق الجزء المطلوب ..",
            Wait: "ارجوك انتظر!",
            Error: "حدث خطأ ، تحديث الصفحة!",
            Deleted: "هذا الختم تم حذفه من قبل صاحبه!",
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
        },

        AlertDialog:{
            Title: "تم أخذ جزء بالفعل! يرجى أخذ جزء آخر",
            Button: "موافق.",

        },

        CuzlerHatimCard: {
            deleteHatim: "حذف خاتم",
            changeHatim: "يتغير",
            takenParts: "الأجزاء المأخوذة",
            leftParts: "الأجزاء المتبقية",
            dua: ["ستتم الصلاة اليوم", "", "تم الصلاة", "ستتم الصلاة اليوم",  ,"","ستتم الصلاة اليوم", ""],
            Modal:{
                Title:'تغيير معلومات خاتم',
                Header:'عنوان خاتم',
                Description:'وصف خاتم',
                Date:'تاريخ صلاة حاتم',
                Button:'حسنا'
            },

            Notification:{
                Title: 'المعلومات قيد التحديث',
                Description: 'يرجى الانتظار حتى يتم تحديث المعلومات'
            },
           
            PartModal:{
                Title: 'تغيير معلومات الجزء',
                Name: 'اسم من تولى الجزء',
                ChangeNameButton: 'تغيير الإسم',
                CancelPart: 'إلغاء الجزء',
            }
        },

        AddKhatmAlert:{
            Question: 'هل أنت متأكد أنك تريد إضافة خاتم جديد؟',
            YesButton:'نعم',
            NoButton:'لا'
        },

        DeleteKhatmAlert:{
            Question: 'هل أنت متأكد أنك تريد حذف هذا خاتم؟',
            YesButton: 'نعم',
            NoButton: 'لا'
        }
    },

    "/ramazan":{
        KhatmFinishDate: [".","صلاة هذا الختم ستقام في"],
        NewSubKhatm: ".أضف ختم إلى هذه الصفحة",

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