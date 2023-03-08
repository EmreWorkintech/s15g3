const expectedValue = 5;
/* 
 1- boş klasör oluşturduk mkdir s15g3
 2- klasörün içine girdik  cd s15g3
 3- package.json dosyası oluşturk npm init -y
 4- jest'i dev dependency olarak yükledik npm i -D jest
 5- yardımcı bir kütüphane yükledik npm i -D @types/jest
 6- jest configurasyonunu yaptık. npx jest --init
 7- package.json dosyamızda test script oluşturduk  "test": "jest --verbose --watchAll"
 8- test klasörü oluşturabiliriz   __tests__ içindeki tüm .js dosyaları test olarak çalıştırır
 9- test dosyası oluşturduk. basic.test.js
 10- testleri yazmaya başladık
    a- önce basic test yazdık
    b- sonra unit test yazdık (Sum ve foo)
 11- TDD (test drive Development) ve BDD(behavior Drive Development) yaklaşımı ile testler yazdık.
    a- bunun için önce kaynak dosyalarımızı oluşturduk.(human/human.spec.js ve human.js)
    b- testlerimizi yazdık.
*/
function sum(a,b){
    return a+b
}

async function foo() {
    return 'bar'
}

test('health', ()=>{
    expect(true).toBe(true)
})

describe('Basic testler', ()=> {
    describe('basics', ()=> {
        test('[1] toplama kontrolü', ()=> {
            expect(5).toBe(expectedValue)
            expect(5).toBe(3+2)
            expect(5).not.toBe(7)
            expect(5).toBeDefined()
            expect(5).toBeGreaterThan(2)
        })
        test('[2] objects', ()=> {
            const object1 = {a:1}
            const object2 = {a:1}
            const object3 = object2
            expect(object1).toBe(object1)
            expect(object1).toEqual(object2)
            expect(object2).toBe(object3)
        })
    })
    describe('unit tests', ()=> {
        test('[3] sum fonksiyonu doğru değer dönüyor mu', ()=> {
            const expectedValue = 10;
            const actualValue = sum(7,3)
            expect(actualValue).toBe(expectedValue);
        })
        test.skip('[4] foo bar dönüyor mu', async ()=> {
            const expectedValue = 'bar';
            const actualValue = await foo();
            expect(actualValue).toBe(expectedValue);
            expect(actualValue).toHaveLength(3);
            expect(actualValue).toMatch(/ba/);
        })
        test.todo('yeni testler buraya')
    })
})