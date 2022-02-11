



let Turkish = {
    Navbar: {
        Logo: "Hatim Dağıt",
        Links: ["Hatim Oluştur", "Hakkında", "Dil Değiştir",],
        LinkHelpers: ["/", "hakkimda"],
        Buttons: ["Geribildirim Yap"],
        Languages: [{label: "Arapça", value: 'ar'}, {label: "İngilizce", value: 'en'}, {label: "Türkçe", value: 'tr'}],
        Pwa: "Telefona İndir"
    },

    Pwa: {
        Alert: 'Lütfen Chrome tarayıcısını kullanarak telefonunuza indirin. Safari bu özelliği desteklemiyor!',
        Popup: [
            'Bu uygulamayı telefonunuza indirmek için önce tarayıcınızda bulunan',
            'ikonuna tıklayın. Daha sonra açılan menüden',
            'Ana Ekrana Ekle',
            'seçeneğini seçin.',
            'Uygulama telefonunuza inecektir inşaAllah.'
        ]
    },

    Footer: {
        aciz_kul: "Yusuf Yeniçeri tarafından yapılmıştır.",
        ziyaret: ["Bu site ", " defa ziyaret edildi"]
    },
    

    "/" : {
        Question: "Butona Tıklayarak Yeni Bir Hatim Oluştur!",
        Button: {
            Main: "Hızlı Hatim Oluştur",
            Header: {
                Text: "Yeni Hatim Oluştur",
                InputSpan: ["Başlık", "Hatim Duası Tarihi"],
                Input: ["Lütfen Hatim başlığı yazın .."],
                Button: "Devam Et"
            },
            Final: {
                Before: {
                    Header: "Yeni Hatim Oluşturuluyor",
                    Link: "Hatmi Dağıtmak için Linkiniz:",
                    LinkReady: "Link hazırlanıyor",
                    Copy: "Linki Kopyala",
                    Button: "Lütfen bekleyiniz .."
                },

                After: {
                    Header: "Yeni Hatim Oluşturuldu!",
                    Link: "Hatmi Dağıtmak için Linkiniz:",
                    Copy: "Link Kopyalandı",
                    Button: "Devam Et"
                }
            }
        },
        MevcutHatimler:'Oluşturulmuş Hatimler',
    },

    "/cuz":{

        KhatmFinishDate: ["Bu Hatmin Duası","tarihinde yapılacak."],
        NewSubKhatm: "Bu sayfaya Yeni Hatim ekle",

        Before: {
            Question: "İstediğiniz cüze tıklayın ..",
            Wait: "Lütfen Bekleyiniz ..",
            Error: "Bir Hata Oluştu, Sayfayı Güncelleyin!"
        },

        After: {
            Copy: {
                Before: "Linki Kopyala",
                After: "Link Kopyalandı"
            },
            Share:'Hatmi Paylaş',

        },

        Button:{
            Question: "Cüzü almak için isminizi girin:",
            Take: "Cüzü Al",
            TakeCancel: "İptal Et"
        },

        ShareBox:{
            Title: 'Paylaşmak için uygulama seçin:',
            Sms: 'Sms ile Paylaş',
            Whatsapp: 'Whatsapp ile Paylaş',
        }

    }



    
}

export default Turkish;