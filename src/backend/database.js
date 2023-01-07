//                                    BİSMİLLAHİRRAHMANİRRAHİM



class Database{
  constructor(_api){
    this.logger = _api.logger;
    this.api = _api;
  }


  /**
   * Api helpers Biiznillah
   */

  hatimSiraBelirle = (no) => {
    return this.api.hatimSiraBelirle();
  }

  extractKey = () => {
    return (this.api.extractKey());
  }

  /**
   * Api functions
   */

  hatimGetir = async () => {
    return (await this.api.hatimGetir());
  }

  hatimBasligiGetir = async (hatimKey) => {
    return (await this.api.hatimBasligiGetir(hatimKey));
  }

  yeniHatim = async (baslik, bitisTarihi, mevcutHatim = false, isRamazan = false, description = "", makeNewHatim = false) => {
    return (await this.api.yeniHatim(baslik, bitisTarihi, mevcutHatim, isRamazan, description, makeNewHatim));
  }

  cuzAl = async (isim, no, subKey, alindi = true, makeNewHatim = false) => {
    return (await this.api.cuzAl(isim, no, subKey, alindi, makeNewHatim ));
  }

  cuzIsimDegistir = async (isim, no, subKey) => {
    return (await this.api.cuzIsimDegistir(isim, no, subKey));
  }


  cuzIptal = async (no, subKey) => {
    await this.api.cuzIptal(no, subKey);
  }

  cuzBitti = async (hatimKey) => {
    await this.api.cuzBitti(hatimKey);
  }

  ziyaretSayisiGetir = async () => {
    return (await this.api.ziyaretSayisiGetir());
  }

  ziyaretSayisiArtir = async () => {
    await this.api.ziyaretSayisiArtir();
  }

  countNumberOfCuzs = (allHatimler) => {
    return this.api.countNumberOfCuzs(allHatimler);
  }

  hatimDegistir = async (baslik, bitisTarihi, description, subKey) => {
    return (await this.api.hatimDegistir(baslik, bitisTarihi, description, subKey));
  }

  deleteHatim = async () => {
    return (await this.api.deleteHatim());
  }

  hatimListener = (callback) => {
    return this.api.hatimListener(callback);
  }
}

export default Database;
