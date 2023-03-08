const Human = require('./human');

describe('yeni bir karakter oluşturma', ()=> {
    let yeniKisi;

    beforeEach(()=> {
        yeniKisi = new Human('Emre', 43);

    })
    test('[0] tanımlama yapıldı', ()=> {
        expect(Human).toBeDefined()
    })
    test('[1] yeni bir kişi başarılı şekilde oluşturuldu', ()=> {
        expect(yeniKisi).toHaveProperty('isim');
    })
    test('[2] yeni kişi için isim ve yas dönüyor mu', ()=> {
        expect(yeniKisi).toHaveProperty('isim');
        expect(yeniKisi).toHaveProperty('yas');
    })
    test('[3] yeni kişi için isim ve yas dönüyor mu', ()=> {
        expect(yeniKisi).toHaveProperty('isim', 'Emre');
        //expect(yeniKisi).toMatchObject({isim:'Emre', yas:43})
    })
    test('[4] yeni kişi için enerji seviyesini dönüyor mu', ()=> {
        expect(yeniKisi).toMatchObject({isim:'Emre', yas:43, enerji: 100})
    })
})



describe('yeni bir karakter oluşturma versiyon 2', ()=> {
    let yeniKisi_v2;
    beforeEach(()=> {
        yeniKisi_v2 = new Human('Emre', 43, 200);
    })
    test('[5] yeni kişi doğru oluşuyor mu', ()=> {
        expect(yeniKisi_v2).toMatchObject({isim:'Emre', yas:43, enerji: 100, mide:0, kapasite:200})
    })
    test('[6] beslendikçe enerjisi artar', ()=> {
        yeniKisi_v2.beslenme(400);
        expect(yeniKisi_v2.enerji).toBe(200);
    })
    test('[7] beslendikçe enerjisi artmaya devam eder', ()=> {
        yeniKisi_v2.beslenme(400);
        yeniKisi_v2.beslenme(400);
        expect(yeniKisi_v2.enerji).toBe(300);
    })
    test('[8] spor yaptıkça enerjisi azalır', ()=> {
        yeniKisi_v2.spor(45);
        expect(yeniKisi_v2.enerji).toBe(85);
    })
    test('[9] spor yaptıkça enerjisi azalır', ()=> {
        yeniKisi_v2.spor(45);
        yeniKisi_v2.beslenme(400);
        yeniKisi_v2.spor(90);
        expect(yeniKisi_v2.enerji).toBe(155);
    })
})