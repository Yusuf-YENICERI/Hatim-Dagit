



let Turkish = {
    Navbar: {
        Logo: "Hatim Dağıt",
        Links: ["Hatim Oluştur", "Hakkında", "Dil Değiştir",],
        LinkHelpers: ["/", "hakkimda"],
        Buttons: ["Geribildirim Yap"],
        Languages: [{label: "Arapça", value: 'ar'}, {label: "İngilizce", value: 'en'}, {label: "Türkçe", value: 'tr'}],
    },

    Footer: {
        aciz_kul: "Yusuf Yeniçeri tarafından yapılmıştır."
    },
    

    "/" : {
        Question: "Butona Tıklayarak Yeni Bir Hatim Oluştur!",
        Button: {
            Main: "Hızlı Hatim Oluştur",
            Header: {
                Text: "Hatim için bir başlık belirleyin:",
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
        MevcutHatimler:'Oluşturulmuş Hatimler'
    },

    "/cuz":{
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