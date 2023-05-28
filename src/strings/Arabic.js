

let Arabic = {

    rtl: true,

    Navbar: {
        Logo: "ختم توزيع",
        Links: ["إنشاء ختم", "بشأن", "تغيير اللغة", "مخططاتي"],
        LinkHelpers: ["/", "hakkimda", "/cizelgelerim"],
        Buttons: ["أرسل تقييما"],
        Languages: [{label: "عربي", value: 'ar'}, {label: "الانجليزية", value: 'en'}, {label: "اللغة التركية", value: 'tr'}],
        Pwa: 'تنزيله',
        Menu: 'خيارات'

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
        Feedback: "أرسل رسالة",
    },

    AlertDialog: {
        Text: "(user-agent انظر) من خلال الإبلاغ عن الخطأ ، والمتصفح الذي تستخدمه ، وإصدار المتصفح ، ومعلومات النظام ، وما إلى ذلك. سيرسل المعلومات إلى النظام. هل تقبل؟",
        Yes: 'نعم',
        No: 'لا'
    },

    AutomaticKhatm: 'توقفوا عن صنع الختم',

    "/" : {
        Question: "إنشاء ختم جديد بالنقر فوق الزر!",
        MyInfos: "خاتس صنعتها و مخططاتي",
        Button: {
            NewTag: "الجديد",
            BetaTag: "بيتا",
            MyInfos: {
                Charts: "مخططاتي"
            },
            Main: "إنشاء ختم جديد",
            YearBased: "جديد سنوي خاتم",
            Ramazan: "جعل تناوب رمضان الخطمي",
            Aylar3: "إجعل 3 شهور خاتم",
            EvradEzkar:"توزيع فيرد الذكر",
            Header: {
                Text: "إنشاء ختم",
                InputSpan: ["عنوان", "الوصف" ,"تاريخ إنهاء خاتم", "عدد الختم", "اصنع خاتمًا جديدًا تلقائيًا عند انتهاء خاتم", "تاريخ البدء", "عدد الأيام لإنهاء خطم معًا", "العدد الإجمالي لختم سينتهي", "استدارة الختم"],
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
        ExistingKhatms:'ختم شيدت',
        BottomNavigation: {
            NewKhatm: "خاتم جديد",
            KhatmInfos: "معلوماتي خاتم"
        }

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
            Feedback: "الإبلاغ عن خطأ"
        },

        CuzlerHatimCard: {
            deleteHatim: "حذف خاتم",
            changeHatim: "يتغير",
            takenParts: "الأجزاء المأخوذة",
            leftParts: "الأجزاء المتبقية",
            yourParts: "الأجزاء التي أخذتها",
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
                Title2: 'أدخل اسمك أدناه لأخذ الجزء',
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
        },

        CuzItem: {
            ChartButton: 'إظهار الرسوم مخططاتي'
        },
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
    },

    "/ucaylarhergun1cuz":{
    }
}

export default Arabic;