

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
import Arabic from './Arabic';
import Turkish from './Turkish';
import english from './english';




let Language;
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

