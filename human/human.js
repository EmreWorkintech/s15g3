function Human (isim,yas,kapasite) {
    this.isim=isim;
    this.yas=yas;
    this.enerji = 100;
    this.mide=0;
    this.kapasite=kapasite;
    this.beslenme=(kalori)=> {
        this.enerji += kalori/4;
    }
    this.spor=(dakika)=> {
        this.enerji -= dakika/3;
    }
}

module.exports = Human