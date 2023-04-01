

//                                          BİSMİLLAHİRRAHMANİRRAHİM
//                                              ALLAHU EKBER
//                                              ELHAMDÜLİLLAH

// import map from '../../src/images/map.svg'
// import blog from '../../src/images/blog.svg'
// import message from '../../src/images/message.svg'
import detectLanguage from '../common';
import Arabic from './Arabic';
import Turkish from './Turkish';
import english from './english';

export type LanguageType = {
    Navbar: {
        Logo: string,
        Links: string[],
        LinkHelpers: string[],
        Buttons: string[],
        Languages: {[key:string]:string}[],
        Pwa: string,
        Menu: string,


    },

    Pwa: {
        Alert: string,
        Popup: string[]
    },

    Footer: {
        aciz_kul: string,
        ziyaret: string[],
        version: string,
        GoToMainPage: string,
        Feedback: string,

    },

    AlertDialog: {
        Text: string,
        Yes: string,
        No: string
    },

    AutomaticKhatm: string,

    "/" : {
        Question: string,
        MyInfos?: string,
        Button: {
            NewTag: string,
            MyInfos?: {
                Charts: string
            },
            Main: string,
            Ramazan: string,
            Aylar3?: string,
            EvradEzkar:string,
            Header: {
                Text: string,
                Text3MonthProgram?: string,
                InputSpan: string[],
                Input: string[],
                Button: string
            },
            Final: {
                Before: {
                    Header: string,
                    Link: string,
                    LinkReady: string,
                    Copy: string,
                    Button: string
                },

                After: {
                    Header: string,
                    Link: string,
                    Copy: string,
                    Button: string
                }
            }
        },
        ExistingKhatms:string,
        BottomNavigation: {
            NewKhatm: string,
            KhatmInfos: string
        }

    },

    "/cuz":any,

    "/ramazan":any,

    "/ucaylarhergun1cuz":any,
}


let Language: LanguageType;
switch (detectLanguage()) {
    case "ar":
    case "ar-iq":
    case "ar-sa":
    case "ar-ly":
    case "ar-eg":
    case "ar-gulf":
        Language = Arabic;
        break;

    case "tr":
    case "tr-TR":
        Language = Turkish;
        break;

    
    case "en":
    case "en-US":
        Language = english;
        break;
    
    default:
        Language = Turkish;
        break;
}

export default Language;

