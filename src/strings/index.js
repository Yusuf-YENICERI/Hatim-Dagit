

//                                          BİSMİLLAHİRRAHMANİRRAHİM
//                                              ALLAHU EKBER
//                                              ELHAMDÜLİLLAH

// import map from '../../src/images/map.svg'
// import blog from '../../src/images/blog.svg'
// import message from '../../src/images/message.svg'
import cpp from '../icons/cpp.svg'
import php from '../icons/php.svg'
import ruby from '../icons/ruby.svg'
import csharp from '../icons/csharp.svg'
import js from '../icons/js.svg'
import python from '../icons/python.svg'
import java from '../icons/java.svg'
import c from '../icons/c.svg'
import lamp from '../icons/lamp.svg'
import game from '../icons/game.svg'
import mobile from '../icons/mobile.svg'
import enterprise from '../icons/enterprise.svg'
import website from '../icons/website.svg'
import detectLanguage from '../common';



const english = {

    "-1":{
        soru:'Aşağıdaki Butona Tıklayarak Yeni Bir Hatim Oluşturabilirsiniz',
        cevaplar:[
            {
                src:python,
                exist:true,
                cevap:'Python',
                route:1

            },
        ]
    },

    Python:{
        soru:'',
        cevaplar:[
            {
                src:python,
                exist:true,
                cevap:'Python',
                route:1

            },
        ]
    },
    Java:{
        soru:'',
        cevaplar:[
            {
                src:java,
                exist:true,
                cevap:'Java',
                route:1

            },
        ]
    },
    C:{
        soru:'',
        cevaplar:[
            {
                src:c,
                exist:true,
                cevap:'C',
                route:1

            },
        ]
    },
    Cpp:{
        soru:'',
        cevaplar:[
            {
                src:cpp,
                exist:true,
                cevap:'C++',
                route:1

            },
        ]
    },
    Php:{
        soru:'',
        cevaplar:[
            {
                src:php,
                exist:true,
                cevap:'Php',
                route:1

            },
        ]
    },
    Ruby:{
        soru:'',
        cevaplar:[
            {
                src:ruby,
                exist:true,
                cevap:'Ruby',
                route:1

            },
        ]
    },
    'Objective-C':{
        soru:'',
        cevaplar:[
            {
                src:c,
                exist:true,
                cevap:'Objective-C',
                route:1

            },
        ]
    },
    'C#':{
        soru:'',
        cevaplar:[
            {
                src:csharp,
                exist:true,
                cevap:'C#',
                route:1

            },
        ]
    },
    'Js':{
        soru:'',
        cevaplar:[
            {
                src:js,
                exist: true,
                cevap:'Javascript',
                route:1
            }
        ],

    },
    1:{
        soru:'Why do you want to learn programming?',
        cevaplar:[
            {
                src:'',
                exist:false,
                cevap:'For my kids',
                route:17
            },
            {
                src:'',
                exist:false,
                cevap:'Get a job',
                route:6

            },
            {
                src:'',
                exist:false,
                cevap:'Make money',
                route:12

            },
            {
                src:'',
                exist:false,
                cevap:'Improve myself',
                route:3

            },
            {
                src:'',
                exist:false,
                cevap:'I\'m interested',
                route:3

            },
            {
                src:'',
                exist:false,
                cevap:'For my kids',
                route:17

            },
            {
                src:'',
                exist:false,
                cevap:'Just for fun',
                route: 3
            },
            {
                src:'',
                exist:false,
                cevap:'I don\'t know just pick one',
                route: 'Python'
            },
        ]
    },
    
    3:{
        soru:'Have a brilliant idea/platform idea in mind?',
        cevaplar:[
            {
                src:'',
                exist:false,
                cevap:'Nope, I just want to get started',
                route:4

            },
            {
                src:'',
                exist:false,
                cevap:'Yes',
                route:6

            },
        ]
    },
    4:{
        soru:'I prefer to learn things ..',
        cevaplar:[
            {
                src:'',
                exist:false,
                cevap:'The easy way',
                route:'Python'

            },
            {
                src:'',
                exist:false,
                cevap:'The best way',
                route:'Python'

            },
            {
                src:'',
                exist:false,
                cevap:'The slightly harder way',
                route:5

            },
            {
                src:'',
                exist:false,
                cevap:'The really hard way(but easier to pick up other languages in the future)',
                route:'Cpp'

            },
        ]
    },
    5:{
        soru:'Auto or manual car?',
        cevaplar:[
            {
                src:'',
                exist:false,
                cevap:'Auto',
                route:'Java'

            },
            {
                src:'',
                exist:false,
                cevap:'Manual',
                route:'C'

            },
        ]
    },
    6:{
        soru:'Which platform/field?',
        cevaplar:[
            {
                src:'',
                exist:false,
                cevap:'3D Gaming',
                route:'Cpp'

            },
            {
                src:'',
                exist:false,
                cevap:'Mobile',
                route:7

            },
            {
                src:'',
                exist:false,
                cevap:'Enterprise',
                route:8

            },
            {
                src:'',
                exist:false,
                cevap:'Web',
                route:9

            },
        ]
    },
    7:{
        soru:'Which OS?',
        cevaplar:[
            {
                src:'',
                exist:false,
                cevap:'iOS',
                route:'Objective-C'

            },
            {
                src:'',
                exist:false,
                cevap:'Android',
                route:'Java'

            },
        ]
    },
    8:{
        soru:'What do you think about Microsoft?',
        cevaplar:[
            {
                src:'',
                exist:false,
                cevap:'I am a fan',
                route:'C#'

            },
            {
                src:'',
                exist:false,
                cevap:'Not bad',
                route:'Java'

            },
            {
                src:'',
                exist:false,
                cevap:'Suck',
                route:'Java'

            },
        ]
    },
    9:{
        soru:'Does your web app provides info in real time?',
        cevaplar:[
            {
                src:'',
                exist:false,
                cevap:'Yes',
                route:'Js'

            },
            {
                src:'',
                exist:false,
                cevap:'No',
                route:'Java'

            }
        ]
    },
    10:{
        soru:'Do you want to try something new, with huge potential, but less mature?',
        cevaplar:[
            {
                src:'',
                exist:false,
                cevap:'No',
                route:11

            },
            {
                src:'',
                exist:false,
                cevap:'Not sure',
                route:11

            },
            {
                src:'',
                exist:false,
                cevap:'Yes',
                route:'Js'

            }
        ]
    },
    11:{
        soru:'Which one is your favorite toy?',
        cevaplar:[
            {
                src:'',
                exist:false,
                cevap:'Lego',
                route:'Python'

            },
            {
                src:'',
                exist:false,
                cevap:'play-doh',
                route:'Ruby'

            },
            {
                src:'',
                exist:false,
                cevap:'I\'ve an old & ugly toy, but i love it so much',
                route:'Php'

            }
        ]
    },
    12:{
        soru:'How do you want to make money?',
        cevaplar:[
            {
                src:'',
                exist:false,
                cevap:'Get job',
                route:13

            },
            {
                src:lamp,
                exist:true,
                cevap:'i have a startup idea!',
                route:13

            },
            {
                src:'',
                exist:false,
                cevap:'I\'ve an old & ugly toy, but i love it so much',
                route:'Php'

            }
        ]
    },
    13:{
        soru:'Which platform/field?',
        cevaplar:[
            {
                src:game,
                exist:true,
                cevap:'3D Gaming',
                route:'Cpp'

            },
            {
                src:mobile,
                exist:true,
                cevap:'Mobile',
                route:7

            },
            {
                src:enterprise,
                exist:true,
                cevap:'Enterprise',
                route:8

            },
            {
                src:website,
                exist:true,
                cevap:'Web',
                route:14

            },
            {
                src:'',
                exist:false,
                cevap:'Doesn\'t matter i just want money',
                route:'Java'

            },
            {
                src:'',
                exist:false,
                cevap:'I want to work for big tech companies',
                route:16

            }
        ]
    },
    
    14:{
        soru:'Choose one',
        cevaplar:[
            {
                src:'',
                exist:false,
                cevap:'Front-end(web interface)',
                route:'Js'

            },
            {
                src:'',
                exist:false,
                cevap:'Back-end(system behind a website)',
                route:15

            },
            {
                src:'',
                exist:false,
                cevap:'I\'ve an old & ugly toy, but i love it so much',
                route:'Php'

            }
        ]
    },
    15:{
        soru:'I want to work for ..',
        cevaplar:[
            {
                src:'',
                exist:false,
                cevap:'Startup',
                route:10

            },
            {
                src:'',
                exist:false,
                cevap:'Cooperate',
                route:8

            },
            {
                src:'',
                exist:false,
                cevap:'I\'ve an old & ugly toy, but i love it so much',
                route:'Php'

            }
        ]
    },

    16:{
        soru:'(I advice you to start an enterprise) but here you go',
        cevaplar:[
            {
                src:'',
                exist:false,
                cevap:'Microsoft',
                route:'C#'

            },
            {
                src:'',
                exist:false,
                cevap:'Apple',
                route:'Objective-C'

            },
            {
                src:'',
                exist:false,
                cevap:'Google',
                route:'Python'
            }
        ]
    },

    17:{
        soru:'Start with Scratch and move on to ..',
        cevaplar:[
            {
                src:'',
                exist:false,
                cevap:'Continue',
                route:'Python'

            }
        ]
    },


}

const turkish = {

    "-1":{
        soru:'Butona Tıklayarak Yeni Bir Hatim Oluştur!',
        cevaplar:[
            {
                src:'',
                exist:false,
                cevap:'Hızlı Hatim Oluştur',
                route:1

            },
        ]
    },
    Python:{
        soru:'',
        cevaplar:[
            {
                src: python,
                exist: true,
                cevap:'Python',
                route:1

            },
        ]
    },
    Java:{
        soru:'',
        cevaplar:[
            {
                src:java,
                exist: true,
                cevap:'Java',
                route:1

            },
        ]
    },
    C:{
        soru:'',
        cevaplar:[
            {
                src: c,
                exist: true,
                cevap:'C',
                route:1

            },
        ]
    },
    Cpp:{
        soru:'',
        cevaplar:[
            {
                src: cpp,
                exist: true,
                cevap:'C++',
                route:1

            },
        ]
    },
    Php:{
        soru:'',
        cevaplar:[
            {
                src: php,
                exist: true,
                cevap:'Php',
                route:1

            },
        ]
    },
    Ruby:{
        soru:'',
        cevaplar:[
            {
                src: ruby,
                exist: true,
                cevap:'Ruby',
                route:1

            },
        ]
    },
    'Objective-C':{
        soru:'',
        cevaplar:[
            {
                src: c,
                exist: true,
                cevap:'Objective-C',
                route:1

            },
        ]
    },
    'C#':{
        soru:'',
        cevaplar:[
            {
                src: csharp,
                exist: true,
                cevap:'C#',
                route:1

            },
        ]
    },
    'Js':{
        soru:'',
        cevaplar:[
            {
                src:js,
                exist: true,
                cevap:'Javascript',
                route:1
            }
        ],

    },
    1:{
        soru:'Neden programlama öğrenmek istiyorsunuz?',
        cevaplar:[
            {
                src:'',
                exist: false,
                cevap:'Çocuklarım için',
                route:17
            },
            {
                src:'',
                exist: false,
                cevap:'İş bul',
                route:6

            },
            {
                src:'',
                exist: false,
                cevap:'Para kazan',
                route:12

            },
            {
                src:'',
                exist: false,
                cevap:'Kendimi geliştirmek için',
                route:3

            },
            {
                src:'',
                exist: false,
                cevap:'İlgileniyorum',
                route:3

            },
            {
                src:'',
                exist: false,
                cevap:'Çocuklarım için',
                route:17

            },
            {
                src:'',
                exist: false,
                cevap:'Sadece eğlence için',
                route: 3
            },
            {
                src:'',
                exist: false,
                cevap:'Bilmiyorum sadece birini seç',
                route: 'Python'
            },
        ]
    },
    
    3:{
        soru:'Aklınızda harika bir fikir/platform fikri mi var?',
        cevaplar:[
            {
                src:'',
                exist: false,
                cevap:'Hayır, sadece başlamak istiyorum',
                route:4

            },
            {
                src:'',
                exist: false,
                cevap:'Evet',
                route:6

            },
        ]
    },
    4:{
        soru:'Bir şeyler öğrenmeyi tercih ederim..',
        cevaplar:[
            {
                src:'',
                exist: false,
                cevap:'Kolay yol',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'En iyi yol',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'Biraz daha zor yol',
                route:5

            },
            {
                src:'',
                exist: false,
                cevap:'Gerçekten zor yol(ama gelecekte diğer dilleri öğrenmek daha kolay)',
                route:'Cpp'

            },
        ]
    },
    5:{
        soru:'Otomatik mi yoksa manuel araba mı?',
        cevaplar:[
            {
                src:'',
                exist: false,
                cevap:'Otomatik',
                route:'Java'

            },
            {
                src:'',
                exist: false,
                cevap:'Manuel',
                route:'C'

            },
        ]
    },
    6:{
        soru:'Hangi platform/alan?',
        cevaplar:[
            {
                src:'',
                exist: false,
                cevap:'3D Oyun',
                route:'Cpp'

            },
            {
                src:'',
                exist: false,
                cevap:'Mobil',
                route:7

            },
            {
                src:'',
                exist: false,
                cevap:'Kurumsal',
                route:8

            },
            {
                src:'',
                exist: false,
                cevap:'Web',
                route:9

            },
        ]
    },
    7:{
        soru:'Hangi işletim sistemi?',
        cevaplar:[
            {
                src:'',
                exist: false,
                cevap:'iOS',
                route:'Objective-C'

            },
            {
                src:'',
                exist: false,
                cevap:'Android',
                route:'Java'

            },
        ]
    },
    8:{
        soru:'Microsoft hakkında ne düşünüyorsunuz?',
        cevaplar:[
            {
                src:'',
                exist: false,
                cevap:'Ben hayranıyım',
                route:'C#'

            },
            {
                src:'',
                exist: false,
                cevap:'Fena değil',
                route:'Java'

            },
            {
                src:'',
                exist: false,
                cevap:'Berbat',
                route:'Java'

            },
        ]
    },
    9:{
        soru:'Web uygulamanız gerçek zamanlı bilgi sağlıyor mu?',
        cevaplar:[
            {
                src:'',
                exist: false,
                cevap:'Evet',
                route:'Js'

            },
            {
                src:'',
                exist: false,
                cevap:'Hayır',
                route:'Java'

            }
        ]
    },
    10:{
        soru:'Büyük potansiyele sahip, ancak daha az olgun olan yeni bir şey denemek ister misiniz?',
        cevaplar:[
            {
                src:'',
                exist: false,
                cevap:'Hayır',
                route:11

            },
            {
                src:'',
                exist: false,
                cevap:'Emin değilim',
                route:11

            },
            {
                src:'',
                exist: false,
                cevap:'Evet',
                route:'Js'

            }
        ]
    },
    11:{
        soru:'En sevdiğin oyuncağın hangisi?',
        cevaplar:[
            {
                src:'',
                exist: false,
                cevap:'Lego',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'play-doh',
                route:'Ruby'

            },
            {
                src:'',
                exist: false,
                cevap:'Eski ve çirkin bir oyuncağım var ama onu çok seviyorum',
                route:'Php'

            }
        ]
    },
    12:{
        soru:'Nasıl para kazanmak istiyorsunuz?',
        cevaplar:[
            {
                src:'',
                exist: false,
                cevap:'İş bul',
                route:13

            },
            {
                src:lamp,
                exist: true,
                cevap:'bir başlangıç ​​fikrim var!',
                route:13

            },
            {
                src:'',
                exist: false,
                cevap:'Eski ve çirkin bir oyuncağım var ama onu çok seviyorum',
                route:'Php'

            }
        ]
    },
    13:{
        soru:'Hangi platform/alan?',
        cevaplar:[
            {
                src: game,
                exist: true,
                cevap:'3D Oyun',
                route:'Cpp'

            },
            {
                src: mobile,
                exist: true,
                cevap:'Mobil',
                route:7

            },
            {
                src: enterprise,
                exist: true,
                cevap:'Kurumsal',
                route:8

            },
            {
                src: website,
                exist: true,
                cevap:'Web',
                route:14

            },
            {
                src:'',
                exist: false,
                cevap:'Önemli değil sadece para istiyorum',
                route:'Java'

            },
            {
                src:'',
                exist: false,
                cevap:'Büyük teknoloji şirketlerinde çalışmak istiyorum',
                route:16

            }
        ]
    },
    
    14:{
        soru:'Birini seçin',
        cevaplar:[
            {
                src:'',
                exist: false,
                cevap:'Ön uç(web arayüzü)',
                route:'Js'

            },
            {
                src:'',
                exist: false,
                cevap:'Arka uç (bir web sitesinin arkasındaki sistem)',
                route:15

            },
            {
                src:'',
                exist: false,
                cevap:'Eski ve çirkin bir oyuncağım var ama onu çok seviyorum',
                route:'Php'

            }
        ]
    },
    15:{
        soru:'.. için çalışmak istiyorum.',
        cevaplar:[
            {
                src:'',
                exist: false,
                cevap:'Başlangıç',
                route:10

            },
            {
                src:'',
                exist: false,
                cevap:'İşbirliği yap',
                route:8

            },
            {
                src:'',
                exist: false,
                cevap:'Eski ve çirkin bir oyuncağım var ama onu çok seviyorum',
                route:'Php'

            }
        ]
    },

    16:{
        soru:'(bir girişim kurmanızı tavsiye ederim) ama işte buyrun',
        cevaplar:[
            {
                src:'',
                exist: false,
                cevap:'Microsoft',
                route:'C#'

            },
            {
                src:'',
                exist: false,
                cevap:'Apple',
                route:'Objective-C'

            },
            {
                src:'',
                exist: false,
                cevap:'Google',
                route:'Python'
            }
        ]
    },

    17:{
        soru:'Scratch ile başlayın ve devam edin ..',
        cevaplar:[
            {
                src:'',
                exist: false,
                cevap:'Devam',
                route:'Python'

            }
        ]
    },

    18:{
        soru:'İstediğiniz cüze tıklayın ..',
        cevaplar:[
            {
                src:'',
                exist: false,
                cevap:'1',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'2',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'3',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'4',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'5',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'6',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'7',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'8',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'9',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'10',
                route:'Python'

            },



        ]
    },

    19:{
        soru:'',
        cevaplar:[
            {
                src:'',
                exist: false,
                cevap:'11',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'12',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'13',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'14',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'15',
                kisi:'Ahmet Cakir',
                route:'Python'

            }
            ,{
                src:'',
                exist: false,
                cevap:'16',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'17',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'18',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'19',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'20',
                route:'Python'

            },
        ]
    },


    20:{
        soru:'',
        cevaplar:[
            {
                src:'',
                exist: false,
                cevap:'21',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'22',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'23',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'24',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'25',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'26',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'27',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'28',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'29',
                route:'Python'

            },
            {
                src:'',
                exist: false,
                cevap:'30',
                route:'Python'

            },
        ]
    }


} 

let Language;
if (detectLanguage() == 'en-US')
Language = english;
else
Language = turkish;

export default Language;

export const Turkish = {
    Navbar : {
        Logo : 'Hatim Dağıt',
        Links : ['Hakkında', 'Geliştirici', 'Web Güvenlikçisi', 'Tasarımcı', 'Projeler'],
        LinkHelpers : ['hakkimda', 'gelistirici', 'web', 'tasarimci', 'projeler'],
        Buttons : ['Geribildirim yap'],
        ButtonHelper : ['mesajat']
    },

    HeroSection : {
        H1 : 'Haydi Bismillah!',
        P : 'Yusuf\'un sitesine hoşgeldin.',
        Button : 'Devam et'
    },

    InfoSection : [
        {
            topLine: 'Hakkımda',
            headline: 'Ben kimim?',
            description : 'Elbette ki Allah \'ın bir kulu!',
            buttonLabel : 'Devam et'
        },
        {
            topLine: 'GELİŞTİRİCİ',
            headline: 'Neler yaparım?',
            description : 'Web, mobile ve masaüstü uygulamalar yazarım inşaAllah.',
            buttonLabel : 'Devam et'
        },
        {
            topLine: 'Web GÜVENLİKÇİSİ',
            headline: 'Ney? Güvenlikçi mi?',
            description : 'Daha güvenli ürünler yapmak üzere, Web Güvenliği üzerine çalıştım.',
            buttonLabel : 'Devam et'
        },
        {
            topLine: 'Tasarımcı',
            headline: 'Kullanıcı için yazılım, arayüz demektir!',
            description : 'Çeşitli tasarımları incelemeye çalışırım.',
            buttonLabel : 'Devam et'
        }
    ],

    Services:
    {
        'main' : 'Projeler',
        'others':
                    [
                        {
                            // Icon : blog,
                            H2 : '.NET MVC de Blog',
                            P : 'Kişisel Blog Sitesi'
                        },
                        {
                            // Icon : map,
                            H2 : 'Personel Yönetim Sistemi',
                            P : 'Şirket içerisinde Personellerin yönetimini kolaylaştıran bir websitesi'
                        },
                        {
                            // Icon : message,
                            H2 : 'Programcıların Sohbet Yeri',
                            P : 'Programcıları bir araya getirmek için yapılmış olan bir website'
                        },
                    ],
        'github' : 'Daha fazlası için ..'
    },
    Footer:{
        Title: 'Gidebileceğiniz Yerler',
        rights: 'Tüm hakları saklıdır.',
        websiteRights: 'Bu çalışmada tamamıyla sağda verilen linkten faydalanılmıştır.',
        madeBy: 'Yusuf Yeniçeri tarafından yapılmıştır.'
    }
}

export const English = {
    Navbar : {
        Logo : 'Choose Your Programming Language',
        Links : ['About', 'Developer', 'Web Security Guard', 'Designer', 'Projects'],
        LinkHelpers : ['hakkimda', 'gelistirici', 'web', 'tasarimci', 'projeler'],
        Buttons : ['Send Feedback'],
        ButtonHelper : ['mesajat']
    },

    HeroSection : {
        H1 : 'Hi! I am Yusuf',
        P : 'Welcome to my website.',
        Button : 'Continue'
    },

    InfoSection : [
        {
            topLine: 'About me',
            headline: 'Who am I?',
            description : 'Of course a servant of Allah!',
            buttonLabel : 'Continue'
        },
        {
            topLine: 'Developer',
            headline: 'What do I do?',
            description : 'I write web, mobile and desktop applications, insha\'Allah.',
            buttonLabel : 'Continue'
        },
        {
            topLine: 'Web Security Guard',
            headline: 'What? The Web Security Guard?',
            description : 'I worked on Web Security to make safer products.',
            buttonLabel : 'Continue'
        },
        {
            topLine: 'Designer',
            headline: 'For the user, software means interface!',
            description : 'I try to examine various designs.',
            buttonLabel : 'Continue'
        }
    ],

    Services:
    {
        'main' : 'Projects',
        'others':
                    [
                        {
                            // Icon : blog,
                            H2 : 'Blog in .NET MVC',
                            P : 'Personel Blog Site'
                        },
                        {
                            // Icon : map,
                            H2 : 'Personnel Management System',
                            P : 'A website that facilitates the management of the personnel within the company'
                        },
                        {
                            // Icon : message,
                            H2 : 'Chatting Place of Programmers',
                            P : 'It is a website to unite all programmers'
                        },
                    ],
        'github' : 'For more ..'
    },
    Footer:{
        Title: 'Go To',
        rights: 'All rights reserved.',
        websiteRights: 'This work is fully inspired from',
        madeBy: 'Made by Yusuf Yeniçeri'
    }
}

export const dataFormat = {
    1:{
        soru:'İstediğiniz cüze tıklayın ..',
        cevaplar:[
            {
                cevap:'1',
                isim:'',
                alindi: false,

            },
            {
                cevap:'2',
                isim:'',
                alindi: false,

            },
            {
                cevap:'3',
                isim:'',
                alindi: false,

            },
            {
                cevap:'4',
                isim:'',
                alindi: false,

            },
            {
                cevap:'5',
                isim:'',
                alindi: false,

            },
            {
                cevap:'6',
                isim:'',
                alindi: false,

            },
            {
                cevap:'7',
                isim:'',
                alindi: false,

            },
            {
                cevap:'8',
                isim:'',
                alindi: false,

            },
            {
                cevap:'9',
                isim:'',
                alindi: false,

            },
            {
                cevap:'10',
                isim:'',
                alindi: false,

            },



        ]
    },

    2:{
        soru:'',
        cevaplar:[
            {
                cevap:'11',
                isim:'',
                alindi: false,

            },
            {
                cevap:'12',
                isim:'',
                alindi: false,

            },
            {
                cevap:'13',
                isim:'',
                alindi: false,

            },
            {
                cevap:'14',
                isim:'',
                alindi: false,

            },
            {
                cevap:'15',
                kisi:'Ahmet Cakir',
                isim:'',
                alindi: false,

            }
            ,{
                cevap:'16',
                isim:'',
                alindi: false,

            },
            {
                cevap:'17',
                isim:'',
                alindi: false,

            },
            {
                cevap:'18',
                isim:'',
                alindi: false,

            },
            {
                cevap:'19',
                isim:'',
                alindi: false,

            },
            {
                cevap:'20',
                isim:'',
                alindi: false,

            },
        ]
    },


    3:{
        soru:'',
        cevaplar:[
            {
                cevap:'21',
                isim:'',
                alindi: false,

            },
            {
                cevap:'22',
                isim:'',
                alindi: false,

            },
            {
                cevap:'23',
                isim:'',
                alindi: false,

            },
            {
                cevap:'24',
                isim:'',
                alindi: false,

            },
            {
                cevap:'25',
                isim:'',
                alindi: false,

            },
            {
                cevap:'26',
                isim:'',
                alindi: false,

            },
            {
                cevap:'27',
                isim:'',
                alindi: false,

            },
            {
                cevap:'28',
                isim:'',
                alindi: false,

            },
            {
                cevap:'29',
                isim:'',
                alindi: false,

            },
            {
                cevap:'30',
                isim:'',
                alindi: false,

            },
        ]
    },
    bitti: false,
    baslik: ''

}