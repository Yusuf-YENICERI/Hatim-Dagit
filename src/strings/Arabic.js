

let Arabic = {
    Navbar: {
        Logo: "ختم توزيع",
        Links: ["إنشاء ختم", "بشأن", "تغيير اللغة"],
        LinkHelpers: ["/", "hakkimda"],
        Buttons: ["أرسل تقييما"],
        Languages: [{label: "عربي", value: 'ar'}, {label: "الانجليزية", value: 'en'}, {label: "اللغة التركية", value: 'tr'}]

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
        }
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

        },

        Button:{
            Question: "أدخل اسمك للحصول على الجزء:",
            Take: "احصل على الجزء"
        }
    }
}

export default Arabic;