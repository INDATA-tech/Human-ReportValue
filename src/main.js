import { Client, Databases } from 'node-appwrite';

// This is your Appwrite function
// It's executed each time we get a request
export default async ({ req, res, log, error }) => {

    fetch('files/dosya.txt')
    .then(response => response.text())
    .then(data => {
      const satirlar = data.split('\n'); // Satırları ayır
      console.log(satirlar[0]); // İlk satırı yazdır
      // Burada istediğiniz satırı `satirlar[index]` ile alabilirsiniz
    })
    .catch(error => console.error('Dosya okunamadı:', error));

    function getAllGates(jsonData) {
        let gates = [];

        // Personality kısmındaki gate değerlerini diziye ekle
        Object.values(jsonData.Personality).forEach(item => {
            gates.push(String(item.Gate));
        });

        // Design kısmındaki gate değerlerini diziye ekle
        Object.values(jsonData.Design).forEach(item => {
            gates.push(String(item.Gate));
        });

        return gates;
    }
    function siralaValueUzunlugunaGore(gates) {
        // 1. Adım: value değerlerini bir diziye al
        const valueSiralama = gates.map(gate => gate.value.length);

        // 2. Adım: valueSiralama dizisini sırala
        valueSiralama.sort((a, b) => a - b);

        // 3. Adım: Sıralanmış dizine göre orijinal veriyi sıralayalım
        const siraliGates = gates.sort((a, b) => {
            const aIndex = valueSiralama.indexOf(a.value.length);
            const bIndex = valueSiralama.indexOf(b.value.length);
            return bIndex - aIndex;
        });

        log(siraliGates);
        // 4. Adım: Sıralanmış veriyi döndür
        return siraliGates;
    }
    // Why not try the Appwrite SDK?
    //
    const client = new Client().setEndpoint("https://appwrite.anahtarsensin.com/v1")
        .setProject(process.env.APPWRITE_FUNCTION_PROJECT_ID)
        .setKey(process.env.APPWRITE_API_KEY)
    var database = new Databases(client);
    //log(req.body);
    var answers = await database.getDocument("65dc57b1e8322b0426ae", "65e97978db53e3998c12", String(req.body));
    var processedData = JSON.parse(answers.ProcessedData);
    var rawData = JSON.parse(answers.RawData);

    var api = processedData.api;
    var usergates = getAllGates(api);

    //log(api)
    var hollandData = processedData.holland;
    //log(hollandData);
    var big5Data = processedData.big5;
    //log(big5Data);
    hollandData.sort((a, b) => b.value - a.value);
    big5Data.sort((a, b) => b.value - a.value);
    var type = [
        { name: "Manifesting Generator", value: `İş dünyasında ve kariyerinde kendine has ve benzersiz bir enerjin var. İşleri halletmede, bir şeyler inşa etmede ve büyütmede harikasın. Enerjini yapmayı sevdiğin işlere kullandıktan sonra başını yastığa koyduğunda bir bebek gibi uyuyabilirsin. \n\nHayatta ve işte tatmininin anahtarı sadece çok çalışmak değil, enerjini nasıl etkili ve verimli kullandığın. Yaptığın iş refahın ve esenliğin için çok önemli. İçinde harekete geçmene ve bir şeyler yaratmana yardımcı olan güçlü bir enerji kaynağın var. \n\nBirçoğumuz bir şeyleri başlatmamız gerektiğine inandırılarak büyüdük, senin dikkatli olman gereken konu başlamak ya da başlatmak zorunda olmadığını bilmek. Gücün, içgüdülerine dayanarak hayata cevap vermekte ve doğru ipuçlarını beklemekte yatıyor. \n\nİçgüdülerine ne kadar güvenir ve doğru anı beklersen, hayatın o kadar tatmin edici ve keyifli hale gelir. Kendini bir mıknatıs gibi düşünebilirsin, enerjinin fırsatları doğal olarak sana çektiğini gözlemleyebilirsin. \n\nGelecek için endişelenmene gerek yok; eforsuz ve doğal olan yolun, şu anda hayatın sunduklarına cevap verdiğinde kendini gösterecektir. Enerjin, hayatın sana getirdiklerine cevap vermek aracılığıyla taahhüt ettiğin şeyde ustalaşmana yardımcı olmak için burada. Doğru yolda olduğunun işareti, işlerin doğal olarak yerine oturmaya başlaması ve içinde bir tatmin hissidir. \n\nÇok büyük bir enerjin olduğu için seni gerçekten ilgilendirmeyen veya seni tatmin etmeyen şeylere evet dememeye ve bağlanmamaya dikkat etmelisin. Gücün, en başından itibaren hangi işe ya da kişiye bağlanacağını bilmekte yatar. İç pusulan içgüdülerin aracılığıyla seninle iletişim kurar. Hayatı doğru yaşamak için stratejin hayatın sana getirmesini beklemek ve gelene cevap vermektir. Bu tepkilere uyum sağladığında, gerçek potansiyelini ortaya çıkartacak kararları verebilirsin. \n\nİş yaşamın boyunca engellerle karşılaşabilirsin. İş yaşamında bir çalışan olduğunu ve bir köle olmadığını unutma. Önce içgüdülerini dinle ve başkalarının ne yapman gerektiğini dikte etmesine izin verme. Sen monoton bir rutin için yaratılmadın. Tek yapman gereken hayatın sana getirdiklerine yanıt vermek ve böylece senin için doğru ve tatmin dolu olacak kariyer yolun kendini gösterecek. Üretmeye, inşa etmeye devam et ve inanılmaz enerjine her zaman güven. \n\nHayat tatmini için benimseyeceğin slogan: Yaptığın işi sev ve sevdiğin işi yap!`, images: ["https://appwrite.indata.com.tr/v1/storage/buckets/images/files/generatork/view?project=65dc554eb069bed83c59", "https://appwrite.indata.com.tr/v1/storage/buckets/images/files/generatore/view?project=65dc554eb069bed83c59"] },
        { name: "Generator", value: `İş dünyasında ve kariyerinde kendine has ve benzersiz bir enerjin var. İşleri halletmede, bir şeyler inşa etmede ve büyütmede harikasın. Enerjini yapmayı sevdiğin işlere kullandıktan sonra başını yastığa koyduğunda bir bebek gibi uyuyabilirsin. \n\nHayatta ve işte tatmininin anahtarı sadece çok çalışmak değil, enerjini nasıl etkili ve verimli kullandığın. Yaptığın iş refahın ve esenliğin için çok önemli. İçinde harekete geçmene ve bir şeyler yaratmana yardımcı olan güçlü bir enerji kaynağın var. \n\nBirçoğumuz bir şeyleri başlatmamız gerektiğine inandırılarak büyüdük, senin dikkatli olman gereken konu başlamak ya da başlatmak zorunda olmadığını bilmek. Gücün, içgüdülerine dayanarak hayata cevap vermekte ve doğru ipuçlarını beklemekte yatıyor. \n\nİçgüdülerine ne kadar güvenir ve doğru anı beklersen, hayatın o kadar tatmin edici ve keyifli hale gelir. Kendini bir mıknatıs gibi düşünebilirsin, enerjinin fırsatları doğal olarak sana çektiğini gözlemleyebilirsin. \n\nGelecek için endişelenmene gerek yok; eforsuz ve doğal olan yolun, şu anda hayatın sunduklarına cevap verdiğinde kendini gösterecektir. Enerjin, hayatın sana getirdiklerine cevap vermek aracılığıyla taahhüt ettiğin şeyde ustalaşmana yardımcı olmak için burada. Doğru yolda olduğunun işareti, işlerin doğal olarak yerine oturmaya başlaması ve içinde bir tatmin hissidir. \n\nÇok büyük bir enerjin olduğu için seni gerçekten ilgilendirmeyen veya seni tatmin etmeyen şeylere evet dememeye ve bağlanmamaya dikkat etmelisin. Gücün, en başından itibaren hangi işe ya da kişiye bağlanacağını bilmekte yatar. İç pusulan içgüdülerin aracılığıyla seninle iletişim kurar. Hayatı doğru yaşamak için stratejin hayatın sana getirmesini beklemek ve gelene cevap vermektir. Bu tepkilere uyum sağladığında, gerçek potansiyelini ortaya çıkartacak kararları verebilirsin. \n\nİş yaşamın boyunca engellerle karşılaşabilirsin. İş yaşamında bir çalışan olduğunu ve bir köle olmadığını unutma. Önce içgüdülerini dinle ve başkalarının ne yapman gerektiğini dikte etmesine izin verme. Sen monoton bir rutin için yaratılmadın. Tek yapman gereken hayatın sana getirdiklerine yanıt vermek ve böylece senin için doğru ve tatmin dolu olacak kariyer yolun kendini gösterecek. Üretmeye, inşa etmeye devam et ve inanılmaz enerjine her zaman güven. \n\nHayat tatmini için benimseyeceğin slogan: Yaptığın işi sev ve sevdiğin işi yap!`, images: ["https://appwrite.indata.com.tr/v1/storage/buckets/images/files/generatork/view?project=65dc554eb069bed83c59", "https://appwrite.indata.com.tr/v1/storage/buckets/images/files/generatore/view?project=65dc554eb069bed83c59"] },
        { name: "Projector", value: `Kariyer ve liderlik dünyasındaki yolculuğun benzersiz. Çevrendekiler yeteneklerini fark ettiğinde, bireyleri, grupları ve sistemleri organize etmeyi ve yönetmeyi içeren rollerde gerçekten parlarsın. Uyumlu bir sonuç için tüm unsurları yöneten bir orkestranın şefi gibisin. \n\nKariyerinde yetenekli bir organizatör, yönetici, ağ oluşturucu veya arabulucu olma potansiyeline sahipsin. Rolün, enerji kaynaklarını en verimli şekilde kullanmak için diğerlerine rehberlik etmek etrafında döner. Enerjiyi verimli bir şekilde anlama ve yönetme konusunda mükemmelsin ve bu beceri sende doğal olarak var. \n\nDoğuştan gelen yeteneklerinden biri, başkalarındaki potansiyeli tanımak. Bu, yetenekleri tespit edebileceğin ve onları doğru görevler ve projelerle eşleştirebileceğin için seni modern dünya için ideal bir lider ve rehber yapar. Enerji dinamiklerine dikkat etmen çok önemli. Çevrendekilerin enerjilerinden beslenir ve bu enerjiyi katlayarak büyütebilirsin. Enerjin iyi yönetilmezse, ileriki yaşlarda tükenmişliğe ve bitkinliğe yol açabilir. Durmayı bilmek ve dinlenmek sağlığını korumak için çok önemli. \n\nTanınmayı ve doğru davetleri beklemek, başarının anahtarıdır.  Enerjini ve bilgeliğini en anlamlı ve etkili şekilde yönlendirmeni sağlar. Yalnızca yolunla gerçekten rezonansa giren davetleri kabul etme konusunda seçici ol. Bu süreçte sana rehberlik etmesi için sezgilerine güven. \n\nİnsanları ve fırsatları doğal olarak sana çeken benzersiz bir varlığın var. Auran açıklık ve odaklanmayı yansıtır. Her seferinde bir kişiye odaklanma yeteneğin, son derece kişisel ve anlamlı etkileşimler yaratır. \n\nBecerilerin, yeteneklerin ve dünyayı benzersiz algılama şeklinle tanındığında ve doğru davetleri aldığında, gerçek potansiyelini gerçekleştirme yolundasın demektir. Senin için başarı, zekanı ve bilgeliğini gerçekten takdir eden ve kabul eden doğru insanları ve fırsatları seçmekle ilgili. Çevrendekiler için bilge ve zeki bir rehber olabilirsin.`, images: ["https://appwrite.indata.com.tr/v1/storage/buckets/images/files/projector/view?project=65dc554eb069bed83c59", "https://appwrite.indata.com.tr/v1/storage/buckets/images/files/projector/view?project=65dc554eb069bed83c59"] },
        { name: "Reflector", value: `Doğru ortamda, insanların, toplulukların ve işletmelerin objektif bir değerlendirmesini sağlayan bir kişi olarak parlayabilirsin. Bakış açın tamamen benzersiz ve ilerlemeyi veya dikkat edilmesi gereken alanları doğru bir şekilde değerlendirerek düşünmene ve genel bir bakış açısı kazanmana olanak tanır. \n\nBaşkalarını kabul etme, doğru gitmeyen şeyleri vurgulayarak onları işbirliğine, barışa ve eşitliğe doğru yönlendirme konusunda olağanüstü bir yeteneğe sahipsin. Bir işletmenin, topluluğun veya bir grubun merkezinde olduğunda, özgürce hareket ettiğinde ve işlerin bir bütün olarak nasıl yürüdüğünü yansıtmak için buradasın. \n\nÇevrendekilere çeşitliliği kucaklamanın önemini öğreterek özellikle etkili olabilirsin. \n\nVarlığın sessizlik, nezaket ve müdahaleci olmama ile tanımlanabilir. Çevreyi bir bütün olarak yansıtırsın ve diğerleri kim olduğunu tam olarak anlamakta zorlanabilir. Objektif bir bakış açısı sunarak etrafındaki her şeyi ve herkesi yansıtmak yeteneklerin arasında. \n\nKarar verirken acele etmemelisin. Önemli konularda önce bekle, düşünün ve güvendiğin kişiler ile konuyu konuş. Başkalarıyla etkileşim kurarken, yanlış ortamda olmak veya herkese uymaya çalışmak gibi tuzakların farkında ol. Başkalarına aşırı bağımlı olmaktan veya görünmez hissetmekten kaçın, gerçek benliğinden ödün verme. \n\nBir şeyleri başlatma, hayata geçirme veya olmaya zorlama dürtüsüne diren, çünkü bu başkalarında dirence neden olabilir ve hayal kırıklığına yol açabilir. Başkalarının korkularına, duygularına, stresine ve kaygılarına kapılmaktan kaçın. Etrafındakilerle sağlıklı bir mesafeyi her zaman koru ve acele etmekten veya karar vermek için baskı altında kalmaktan kaçın. Dünyaya benzersiz bir bakış açısı getirmede hayati bir rol oynamak için buradasın.`, images: ["https://appwrite.indata.com.tr/v1/storage/buckets/images/files/reflector/view?project=65dc554eb069bed83c59", "https://appwrite.indata.com.tr/v1/storage/buckets/images/files/reflector/view?project=65dc554eb069bed83c59"] },
        { name: "Manifestor", value: `Benzersiz ve güçlü bir yeteneğe sahipsin - Çevrendeki bir çok kişiden farklı olarak, bir şeyleri başlatmak  için doğuştan gelen bir beceriye sahipsin. Rolün çok önemli, çünkü ilk adımı atmazsan, işler olması gerektiği gibi gelişmez. Kendi kendine yetebilirsin, bağımsız çalışmak ve hareket etmek için buradasın, yaptıklarınla başkalarını etkilersin. \n\nİlişkiler ve işler alanında da, başlatıcı rolünü oynarsın – ilk hamleyi yapan kişi sen olmalısın. Kendini sık sık geleceğe bakarken, başkalarının vizyonunu yakalamasını beklerken bulabilirsin. Çevrendekiler senin enerjini kapalı ve dışarı doğru kuvvetlice iten bir güç gibi algılayabilir. \n\nSenin için başarılı etkileşimlerin anahtarı, bir şeyler yapmak ve başlatmak için tasarlanmış biri olduğunu kabul etmekte yatar. Bununla birlikte, bu güç, başkalarını savunmaya geçirerek bilinçli veya bilinçsiz kontrol edilme korkusuyla birlikte gelir. Bunun üstesinden gelmek için, harekete geçmeden önce bilgilendirme sanatını öğrenmen çok önemlidir. \n\nHarekete geçmeden önce çevrendekileri bilgilendirdiğinde açık, verimli ve barışçıl bir iletişimin önünü açmış olursun. Bilgilendirmek sana doğal gelmese de, ustalaşmaya değer bir uygulamadır. \n\nBaşlatma gücün ile bilgilendirme sanatı arasındaki dengeyi anlamak ve uygulamak iş yaşamındaki başarının ve içsel huzurunun kaynağı olacaktır.`, images: ["https://appwrite.indata.com.tr/v1/storage/buckets/images/files/manifestor/view?project=65dc554eb069bed83c59", "https://appwrite.indata.com.tr/v1/storage/buckets/images/files/manifestor/view?project=65dc554eb069bed83c59"] }
    ]
    var definition = [
        {
            name: "herkes", title: "", value: `Bilgiyi öğrenmemizin, işlememizin ve bütünleştirmemiz herkes için farklıdır. Her stilin kendine özgü bir avantajı vardır.\nTarzını bildiğinizde ve kullandığında:\n- Öğrenme potansiyelini en üst düzeye çıkarabilir\n- Bilgiyi kendi hızınızda bütünleştirebilir\n- Doğal sürecinin benzersiz faydalarından yararlanabilirsin.\n- Bu aynı zamanda başkalarının öğrenme stillerine saygı duymanızı sağlar.\n\nTarzını bilmediğinde veya kullanmadığında:\n- Kendininkini fark etmeden başkalarının tarzlarının avantajlarını gördüğün için kendinizi çoğu zaman yetersiz hissedebilir veya senden daha hızlı veya daha yavaş çalışanlardan dolayı hayal kırıklığına uğrayabilirsin.`,
        },
        {
            name: "No Definition", title: "Objectif Çalışma Stili", value: `Bilgiyi özümseme tarzın, Objektifdir. Bilgiyi yargılayıcı olmayan bir şekilde içeri alma ve iç görülerini objektif olarak paylaşma konusunda dikkate değer bir yetenek gösterirsin. Yaklaşımın, herhangi bir günde çevrenin kalitesini örneklemeyi, yansıtmayı ve değerlendirmeyi içerir ve bir topluluğun, grubun ve hatta daha geniş bir çevrenin fiziksel, psişik veya duygusal sağlığını nesnel olarak algılamana olanak tanır.\n\nUyumlanma yeteneğin yakın çevrenin ötesine uzanır, çevrendekiler ve tüm evrenden  bilgi toplamanı sağlar. Keskin bir algı, insanlığın içindeki adaletsizlikleri yansıtan özgünlüğü ayırt etmeni sağlar.\n\nAçık fikirliliğin, nesnel olarak değerlendirirken her şeyin senden geçmesine izin veren tanımlayıcı bir özelliktir. Bu perspektif genişliği seni, insan deneyiminin ve genel olarak dünyanın çeşitli boyutlarını kapsayan içgörüler sağlayabilen değerli bir gözlemci olarak konumlandırır.`
        },
        {
            name: "Single Definition", title: "Tekil - Bireysel Çalışma Stili", value: `Bilgileri Bağımsız olarak öğrenirsin.  Çalışma tarzın özerklik için uyarlanmıştır, görevleri tek başına yerine getirirken ve bilgileri bağımsız olarak işlerken başarılı olursun. İçinde, tutarlı ve güvenilir bir bilgi işleme yöntemi tarafından yönlendirilen doğal bir bütünlük duygusu bulunur. Tekil bir odağı sürdürme yeteneğin dikkat çekicidir ve iş yaşamında çok işine yarar.\n\nBilgiyi hızlı ve yetkin bir şekilde sindiren bağımsız bir birim olarak çalışırsın. Bununla birlikte, yavaşlamak ve bilgilerin daha bilinçli bir şekilde işlenmesine izin vermek için biraz zaman ayırman, ilerleme hızının değerini anlaman çok önemlidir. İşbirlikçi çabalarında, anlamak için ek zamana ihtiyaç duyabilecek diğerlerine sabır göstermen faydalı olacaktır. Hızlı anlama yeteneğin ile diğerlerinin düşünceli temposu arasındaki bu dengeyi benimsemek, profesyonel ortamındaki kolektif anlayışı geliştirebilir.`
        },
        {
            name: "Split Definition", title: "İş Birlikçi Çalışma Stili", value: `Bilgileri İşbirlikçi yaklaşımın ile anlar ve öğrenirsin. Profesyonel tasarımın, başkalarıyla birlikte çalışmaya, işbirliği yoluyla tatmin ve bütünlük duygusu bulmaya yöneliktir. Çevrendekilerin varlığı, iş dinamiklerinin ayrılmaz bir parçasıdır ve bütünlük hissine katkıda bulunur. Bazen, bir eksiklik varmış gibi hissedebilir ve algıladığın eksiklikleri telafi etmeye çalışabilirsin. Bununla birlikte, işbirlikçi doğan ile doğal olarak tamamlayıcı becerilere ve güçlü yönlere sahip diğer kişileri kendine çektiğini anlaman önemlidir.\n\nBilgiyi almak, işlemek ve sindirmek senin açından biraz daha fazla zaman gerektirebilir ve bu süreç boyunca kendine karşı sabırlı olman çok önemlidir. Kararlar ve bilgi işleme, yalnızlık içinde yapıldığında rahatsız edici olabilir, ancak zamana ve sabra izin vermek bir bütünlük duygusu getirebilir. Kalabalık ortamlar senin için değerli arenalar haline gelir, yeni bakış açıları sunar ve anlama sürecine yardımcı olur.\n\nÖğrenme stilinin avantajını benimseyerek, tam olarak kavramanız biraz uzun sürebilir, ancak bir kez kavradığında, anlayışın gerçekten derindir. Bunun nedeni, bilgilere çeşitli açılardan yaklaşman ve profesyonel içgörülerini zenginleştiren kapsamlı ve derin bir anlayışla sonuçlanmasıdır.`
        },
        {
            name: "Triple Split Definition", title: "Sentezleyen Çalışma Stili", value: `Bilgiyi öğrenmede, farklı kaynaklardan ve bireylerden gelen içgörüleri birleştirmek için benzersiz bir yetenek sergileyerek Sentezlersin. Profesyonelliğin gün boyunca çeşitli insanlarla hareket edebileceğin, işbirliği yapabileceğin ve etkileşimde bulunabileceğin ortamlarda gelişir. Bu dinamik angajmana bir sağlık duygusu eşlik eder ve her gün aynı kişi ve yerle sınırlı kalmak sana iyi gelmeyebilir.\n\nProfesyonel tavrını tanımlayan karakteristik bir dürtü, hırs ve atılganlık vardır. Bununla birlikte, sabırsızlığa ve erken harekete geçmeye yönelik potansiyel bir eğilimin olabilir.  Sabır geliştirmen, karar vermeden veya harekete geçmeden önce bilgileri kapsamlı bir şekilde sentezlemek için gereken zamanı ayrıman çok önemlidir.\n\nİlgi çekici bir yönün, oyunda üç farklı role sahip olma duygusudur. Bu çok yönlü özellik, karmaşık durumlarda gezinme ve zorluklara çeşitli açılardan yaklaşma yeteneğine katkıda bulunur. Bu sentezleri benimsemek, yenilikçi çözümlere ve eldeki bilgilerin kapsamlı bir şekilde anlaşılmasına imkan sağlar.`
        },
        {
            name: "Quadruple Split Definition", title: "Öznel Çalışma Stili", value: `Bilgileri özümseme stilin, bilgileri sabit ve kişiselleştirilmiş bir şekilde işlemek için güçlü bir eğilim gösterir ve Özneldir. Yaklaşımın, kendi  derin deneyimlerinden gelir ve farklı ve öznel bir bakış açısına katkıda bulunur. Bu sabit yapı, daha az esnek görünmene neden olabilir ve çevrendekilerin senin tercih ettiğin bilgi işleme yöntemine uyum sağlamasını gerektirebilir.\n\nBiraz kapalı olma, seçici olarak belirli kişilerin yakın çevrene girmesine izin verme eğilimin olabilir. Küçük grup ortamları sende rahatsızlık uyandırabilir.\n\nOptimal anlama ve öğrenme sürecin zaman ve belli bir hız gerektirdiğinden, hızlı karar verme dürtüsüne direnmen çok önemlidir. Başkalarının beklentilerini karşılamak için zorlanmak zihinsel, fiziksel ve duygusal sağlığını olumsuz etkileyebilir. Bunun yerine, bilgiyi özümserken, bu yaklaşımın genel sağlığın ve etkinliğin için önemini kabul ederek kendi hızınıza ve zamanlaman öncelik ver.`
        }

    ]
    var profile = [
        {
            name: "1 / 3", value1: `Alanında ustalık geliştirirsin ve kendini ayrıntıları derinlemesine anlayan bir otorite olmaya adarsın. Kararlılığın seni sürekli olarak cevaplar aramaya, deneme yanılma ile öğrenmeye yönlendirir. Hayat senin için hem gerçek hem de mecazi olarak zorluklarla karşılaştığın, esnek bir ruhla uyum sağladığın ve geliştiğin dinamik bir etkileşim. Esnekliğin, seçtiğin yolun karmaşıklıklarında gezinmedeki başarına katkıda bulunur.`,
            value2: `Sağlam bir temel kurulması senin için önemli ve böyle bir zeminde durmadığında bir güvensizlik duygusu hissedebilirsin. Alçakgönüllülük ve yaratıcılık, konunda uzmanlık ve yeniliğin dengeli bir karışımını yaratarak yaklaşımını pekiştirirsin. Kararlı bir kâşif olarak rolünde, adaptasyon ve deneyim yoluyla öğrenme konusunda başarılı olursun. Genellikle düşe kalka yaşanan deneme yanılma süreci, neyin işe yarayıp neyin yaramadığını keşfetmen için değerli bir araç haline gelir. Başarısızlık karşısındaki dayanıklılığın ve kararlılığın, devrim niteliğinde değişiklikler ve yenilikçi çözümler getirme yeteneğine katkıda bulundukları için övgüye değerdir. Öncü ruhun alanının ön saflarında kalmanı sağlayacaktır. Kararlı bir kâşif olarak yolculuğun, sürekli bir bilgi arayışı, zorluklar karşısında dayanıklılık ve alanında olumlu ve dönüştürücü değişiklikler ortaya çıkarma ile pekişir.`,
            image: "https://appwrite.indata.com.tr/v1/storage/buckets/images/files/1-3/view?project=65dc554eb069bed83c59"
        },
        {
            name: "1 / 4", value1: `Birincil önceliğin ilgi alanlarının temellerini derinlemesine anlamak ve kendini bu alanlarda bir uzman ve otorite olmak için hazırlamaktır. Uzmanlığının temelini oluşturacak bilgileri sağlamak için araştırma yapmak seni keyiflendirir.`,
            value2: `Yaratıcı eğilimin, bulgularını başkalarıyla yenilikçi yollarla paylaşmaya seni motive eder.Dostluk ve yakın ilişkiler kurmak için yaratıldın, hayatta ve tüm iş yaşamında fırsatların bu ağlar aracılığıyla sana gelecektir. Bilgeliği dışsallaştırma ve başkalarını etkileme yeteneğin seni çeşitli sosyal ve profesyonel çevrelerde değerli bir varlık haline getirir. Bununla birlikte, ağlar ve bağlantı kurmak sana neşe getirirken, yaratıcılığınla baş başa kalmak ta sana iyi gelir.Başkaları aracılığıyla gelen fırsatlara açık kalmak iş hayatında çok önemli olacak.Dışa dönük doğana rağmen, periyodik olarak yalnız kalmak sana iyi gelir, zira bağlı olduğun insanlardan ve ağlardan sıkılıp daralabilirsin. Etkileyici ve ağ oluşturucu olarak rolün, hem profesyonel hem de kişisel alanlarında kalıcı bir etki yaratarak başkalarıyla bağlantı kurma, etkileşimde bulunma ve başkalarını olumlu yönde etkileme yeteneğine sahip olduğun için insan kaynakları alanında çok önemlidir.`,
            image: "https://appwrite.indata.com.tr/v1/storage/buckets/images/files/1-4/view?project=65dc554eb069bed83c59"
        },
        {
            name: "2 / 4", value1: `Doğal ve doğuştan gelen yeteneklere sahip bir birey olarak benzersiz özelliklerin ön planda. Yaşam amacın, yeteneklerinin başkaları tarafından tanınması ve kabul edilmesine karmaşık bir şekilde bağlı. Dünyaya vermeye geldiğin hediyelerinin ortaya çıkması dış doğrulama ve teşvik yoluyla olur, bu da çevrendekilerin bakış açılarına açık olmayı önemli hale getirir.`,
            value2: `Doğal yeteneklerin göz önüne alındığında, sana kolay gelen işlere ve görevlere odaklanman önemlidir. Bir iş sana zorlayıcı geliyorsa, doğuştan gelen güçlü yönlerinle uyumlu olmayabilir. Yeteneklerinin değerini görmüyor olabilirsin, bu yüzden başkalarının onları fark etmesi önemlidir.Enerjinin doğru kullanımı iyi olman için önemli. Yanlış yönlendirilmiş enerji yorgunluğa, tükenmişliğe ve bitkinliğe neden olabilir. Kendin için yalnız kalma ihtiyacın ve başkalarıyla bağlantı kurma yeteneğin de dahil olmak üzere, hayatındaki denge senin için önemlidir. Doğal ve etkili bir networker olarak, derin bağlantılar kurmak için tasarlandın ve ilişkiler hayatında büyük önem taşıyor. Yalnız zamanını sosyal etkileşimlerle dengelemek, tatmin edici ve sürdürülebilir bir yaşam tarzına katkıda bulunacaktır.Derin ve anlamlı bağlantılarda başarılı olurken, yabancılarla çalışmak senin için en iyi seçim olmayabilir. İnsanlarla bağlantı kurma ve tanışman, bu konudaki doğal yeteneğin ve yerleşik ağların aracılığıyla kolaylaş olur. Bu ağları beslemek sana kişisel ve profesyonel gelişim için gerekli fırsatları ve bağlantıları sağlayacaktır.Doğal yeteneklerini kucaklayarak ve yalnızlık ile sosyal etkileşim arasındaki uyumu bularak, başarılı ve tatmin edici bir kariyer ve yaşam yolunu açarsın.`,
            image: "https://appwrite.indata.com.tr/v1/storage/buckets/images/files/2-4/view?project=65dc554eb069bed83c59"
        },
        {
            name: "2 / 5", value1: `Doğal bir münzevi olman ve problem çözücülüğün ayırt edici niteliklerin. Yalnızlıkta teselli bulur ve gelişirsin, pratikliğe ve sessiz, uyumlu bir yaşama değer verirsin. Doğal utangaçlığına rağmen, Diğerleri, yardım sunma yeteneğine çekilir. Hayatın pratik yönlerini anlayarak ve başkalarıyla etkileşimlerini yöneterek bu dinamikte gezinmen önemlidir.`,
            value2: `Yaklaşımın, insanları kendine çekmeyi, ihtiyaçlarını pratik çözümlerle ele almayı ve ardından stratejik olarak geri çekilmeyi içerir. Bu gelgit, itibarını ve enerji seviyeni korumak için gereklidir. Çözümler sunduktan sonra geri çekilmek, enerjinin, doğal yeteneklerinin ve itibarının oluşması için sana zaman kazandırır ve ihtiyaç duyulduğunda pratik ve bazen değişik çözümler sunmaya hazır olmanı sağlar. Çevrendekiler sana güven duyuyorlarsa, küçük veya büyük kriz zamanlarında rehberliğini aradıklarında onlara etkili bir şekilde yardım edebilirsin. En güçlü etkin, pratik dehan başkalarının sana yansıttığı projeksiyonlarla aynı hizaya geldiğinde ortaya çıkar. Yeteneklerin tam olarak ortaya çıktıkça, işlerinde ifade edilebilir ve kalıcı bir etki yaratır. Kariyer yolculuğun özünde hassas bir yalnızlık, pratik problem çözme ve başkalarıyla stratejik etkileşim dengesini içerir. Doğal eğilimlerini benimseyerek ve yansıtma ve geri çekilme dinamiklerinde gezinerek, yeteneklerinin parlamasının ve pratik çözümlerinin anlamlı bir etki kaynağı olmasının yolunu açarsın.`,
            image: "https://appwrite.indata.com.tr/v1/storage/buckets/images/files/2-5/view?project=65dc554eb069bed83c59"
        },
        {
            name: "3 / 5", value1: `Neyin işe yarayıp neyin yaramadığını anlamak için kararlı ve dinamik bir yaklaşıma, sorumluluk alma ve yenilikçi ve pratik çözümler sunma kabiliyetine sahipsin. Etrafındakiler, özellikle kriz zamanlarında, rehberliğini, liderliğini ve durumu düzeltme veya kurtarma yeteneğine başvurmak için doğal olarak sana yönelir.`,
            value2: `Koşullara uyum sağlayabilmen, dayanıklılığın ve değişime açık doğan seni fiziksel dünyada deneme yanılma yoluyla gelişen esnek bir öğrenci yapar. Karşına çıkan zorluklar öğrenme sürecinin ayrılmaz bir parçasıdır. Başarıya ulaşsın ya da ulaşmasın, her deneyim, yeni içgörüler ve bilgelik kazanman için birer fırsat olarak sana hizmet eder.Hayattaki şeyler hızla sana gelirken, sen de hızla onlara doğru ilerlersin.  Dünyayla dinamik ilişkin ve bu deneyimler yoluyla biriken bu bilgelik, dönüştürücü gücünün kaynağı olur. Sadece gelişmen için seni güçlendirmekle kalmaz, aynı zamanda seni hem kendinde hem de başkalarında olumlu bir değişim yaratabilecek etkili bir güç olarak konumlandırır.Kariyer yolculuğun sürekli bir öğrenme, uyarlama ve deneyimleri bilgeliğe dönüştürme süreciyle karakterize olur. Yoluna çıkan zorlukları ve fırsatları kucaklayarak, yalnızca kendi yolunu şekillendirme gücünü kullanmakla kalmaz, aynı zamanda çevrenizdekilerin dönüşümüne de katkıda bulunursun. Denemek istediğin şeyleri denemekten asla vazgeçme.`,
            image: "https://appwrite.indata.com.tr/v1/storage/buckets/images/files/3-5/view?project=65dc554eb069bed83c59"
        },
        {
            name: "3 / 6", value1: `Değişimi yönlendirmek için buradasın, neyin işe yarayıp neyin yaramadığını anlamak sana göre. Keşif sürecinin dönüştürücü potansiyelini ifade etmek, bilgeliğin çeşitli olgunlaşma aşamalarında benzersiz bir şekilde geliştiğini ve nihayetinde otantik bireysel benzersizlik olarak ortaya çıktığını çevrendekilere gösterebilirsin.`,
            value2: `Güven senin için önemlidir ve bir mükemmellik arayışı içinde de olabilirsin. Bu yüksek standartlarını karşılayamayan ilişkilerde, işlerde ve kariyerlerde stres yaratabilecek bir unsur olabilir ve senin için önem taşır. Özgüven ve ustalık geliştirmenin anahtarı, hayatı uygulamalı bir şekilde kucaklamak ve dibine kadar dalmakta yatar. Deneyimlere aktif olarak katılarak güven, mükemmellik ve kararsızlığın karmaşıklıklarında gezinebilir, kişisel gelişimi teşvik edebilir ve hem profesyonel hem de kişisel alanlarında olumlu değişime katkıda bulunabilirsin. Özellikle genç yaşlarda deneyimlediklerinden elde ettiğin bilgeliği yaşamının ileriki dönemlerinde çevrendekiler ile paylaşabilir, onlara bir rol model olabilirsin.`,
            image: "https://appwrite.indata.com.tr/v1/storage/buckets/images/files/3-6/view?project=65dc554eb069bed83c59"
        },
        {
            name: "4 / 1", value1: `Kendini gerçekleştirme yolculuğun, sağlam bir alt yapı oluşturmayı ve daha sonra bilgi ağını etkilemek için otorite konumuna geçmeyi içeren bir süreçtir. Sosyal ve samimi bir yaklaşıma sahip olman, içtenlikle başkalarıyla etkileşimde bulunman ve merakını araştırma ve uzmanlıkla dönüştürerek otorite ve yetkinlik kazanman anlamına gelir.`,
            value2: `Otorite pozisyonunda olduğunda, uzmanlık alanında etkili bir şekilde liderlik yapabilirsin. Bilgiyi başkalarına aktarma konusundaki doğal yeteneğin, öğrendiklerini paylaşmayı istemene neden olur. Hayatındaki hareket, sabit bir rotada ilerleyen bir tren gibi belirgin bir yöne sahiptir. Bu, bazı belirsizlikleri beraberinde getirirken, aynı zamanda kimliğine bağlı kalmanın önemini vurgular. Kendi rotanı koruman ve yolculuğunun tadını çıkarman sana bağlıdır. Senin etrafındakilere uyum sağlaman zor olabileceğinden, çevrendekilerden bu esnekliği bekleyebilirsin. Kendi özelliklerini saygıyla karşılayarak bilgiyi etkileme ve iletişim kurma yeteneğini geliştirmek, çevrende kalıcı bir etki bırakmana ve tatmin edici bir hayat yaşamana olanak tanır.`,
            image: "https://appwrite.indata.com.tr/v1/storage/buckets/images/files/4-1/view?project=65dc554eb069bed83c59"
        },
        {
            name: "4 / 6", value1: `Etki alanını genişletmek için sosyal yeteneklerini ve kişisel ağlarını bilinçli olarak kullanabilirsin ve bireysel ve etkili bir yaşam için rol modelsin. Engelsiz bir bakış açısını korumak için çevrendekilerden biraz ayrı kalarak, başkalarının düşünme biçimlerini değiştirebilecek yeni bir bakış açısına katkıda bulunmak için uygun anı objektif ve sabırla beklersin.`,
            value2: `İstikrar ve sağlam bir temel için özlem duyarken, gerçeği arayan deneyimsel yolculuğunu kucaklayarak kendi gelişimine katkıda bulunursun. Herkes için en iyisini arzulayan cömert ruhun her zaman parlar, ancak güvenin kırıldığında hassas kalbin kolayca yaralanabilir.Senin için ilişkiler büyük önem taşır ve yaşam kaliten ağlarının kalitesiyle doğrudan bağlantılıdır. Bu bağlantıları aktif olarak beslemek yalnızca kişisel yaşamını geliştirmekle kalmayacak, aynı zamanda etkinin derinliğine ve genişliğine de katkıda bulunacaktır. Bireyselliğin ve başkalarıyla olan bağlantın arasındaki hassas dengede gezinme yeteneğin, otantik bir şekilde yaşamak için etkili bir model olarak potansiyelini ortaya çıkarmanın anahtarıdır.`,
            image: "https://appwrite.indata.com.tr/v1/storage/buckets/images/files/4-6/view?project=65dc554eb069bed83c59"
        },
        {
            name: "5 / 1", value1: `Liderlik, rehberlik ve problem çözme oldukça başarılı olabilirsin. Doğal olarak dikkat çekersin ve insanlar kriz zamanlarında pratik çözümler için içgüdüsel olarak sana gelirler. Doğal bir işleri yoluna koyucu olarak rolün, problem çözme becerileri çevrendekilere sunman ile uyumludur ve seni çeşitli senaryolarda paha biçilmez bir kişi haline getirir.`,
            value2: `Keskin gözlem becerileri ve disiplinli sabrın, hazırlıklı olma ve doğru zamanlamaya olan bağlılığının altını çizerek, kapsamlı çalışma ve araştırma yoluyla güvenli bir bilgi temeli oluşturur. Bu sağlam temel, uzmanlığının üzerine inşa edildiği temel haline gelir ve parçası olduğu ekip ya da topluluğu etkilemene ve gerektiğinde yeniden şekillendirmene olanak tanır. Başkalarının beklentileriyle ilgili dikkatli olmalısın, çevrendekilerin san a yüklediği birtakım projeksiyonların yeteneklerinle uyumlu olup olmadığını ayırt etmen oldukça önemlidir. Doğru fırsatlara "evet" demek, itibarını artırır ve genellikle olağan dışı ve pratik çözümlerinizle önemli bir fark yaratmanı sağlar. Pratik pazarlama becerilerine sahip biri olarak, yeni kavramları evrenselleştirme, çözümler sunma ve bir kurtarıcı olarak görülme konusunda yetkinsin. Herhangi bir konuya dahil olma, gerekli düzeltmeleri yapma ve işler yoluna girince konudan ayrılma yeteneği, doğal liderlik tarzını yansıtır. İlgini çeken alanlarda uzmanlığını geliştirirken, iç gözlemlerin, araştırman ve sağlam bir temel kurmaya olan bağlılığın, alçakgönüllülüğünü ve yaratıcılığını da vurgular. Empati gücün ve çalışma ve araştırmaya olan bağlılığın, olumlu bir değişim yaratma yeteneğini daha da geliştirir. Genel olarak, kariyer yolun güvenlik, hayatta kalma içgüdüleri ve benzersiz pratik çözümler sunma yeteneğin ile anlamlı bir etki yaratma niyetin arasında dikkatli bir denge ile işaretlenmiş bir yoldur.`,
            image: "https://appwrite.indata.com.tr/v1/storage/buckets/images/files/5-1/view?project=65dc554eb069bed83c59"
        },
        {
            name: "5 / 2", value1: `Liderlik, rehberlik ve problem çözme oldukça başarılı olabilirsin. Benzersiz niteliklerin ve sıradanlığın ötesinde devrim niteliğinde bir şeye doğru içsel çağrıyı bekleyen derin ve bilinçsiz bir dehan var.`,
            value2: `Çevrendekilerin sorunlarına yardım edip onlara pratik çözümler sağlayabilirsin. Dikkatli olman gereken bir konu, çevrendekilerin beklentileri karşılamak zorunda olmadığındır. Onların düşündüğü kadar iyi olmak, ya da olmanı istedikleri kalıba girmek zorunda değilsin.  İhtiyaç duyulduğunda çevrendekilere pratik çözümlerin ile yardımcı olup sonra çekilmek yapabileceğin en iyi şeydir. Bunun yanı sıra nereden geldiğini bilmediğin bazı doğal yeteneklerin var ve bunları kolaylıkla kullanabilirsin. Başkalarının beklentilerine bire bir uymaman, gerçek yeteneklerin hakkında belirsizliğe yol açarak kendini izole etmene ve hediyelerini saklamana neden olabilir. Sevdiğin şeylere yaptığında ve dış müdahale olmadan keşfetmene izin verildiğinde hediyelerini ortaya koyman çok kolay olur.Hem iş hem de kişisel ilişkilerde sağlığını ve esenliği korumak için, kendini gerektiğinde başkalarının talep ve beklentilerinden uzaklaştırman ve yalnız zaman geçirmen çok önemlidir. Bu yalnızlık, benzersiz ve devrimci katkın için gereken enerjiyi yeniden şarj etmene ve korumanı sağlar.`,
            image: "https://appwrite.indata.com.tr/v1/storage/buckets/images/files/5-2/view?project=65dc554eb069bed83c59"
        },
        {
            name: "6 / 2", value1: `Çevrendekilere bağımlı olmadan kendine has bir şekilde yaşayarak diğerlerine örnek olmak, çevrendekilere benzersiz mükemmelliklerini tanımaları ve kabul etmeleri için rehberlik etmek için buradasın.`,
            value2: `Hayatın dramalarından uzak durma konusundaki yeteneğin, seni dağın tepesindeki bir bilgeye benzer şekilde objektif bir gözlemci olarak konumlandırır. Bu bakış açısı sana hayata kuşbakışı bakma kabiliyeti kazandırarak büyük resmi görmeni ve yaşının ötesinde bir bilgeliğe sahip olmanı da sağlar. Doğal olarak yeteneklisin ve birçok şeyi nereden bildiğini bilmeden çok iyi yapabilirsin.  Doğal yetenekleri olan ve bilge bir kişi olarak görülürsün ve çevrendekiler içgüdüsel olarak sana güvenir ve tavsiyelerin onlar için önemli bir ağırlık taşır. Özgünlüğü somutlaştırarak ve bağımsız bakış açından edindiğin bilgeliği aktararak, çevrendekilerin refahına ve gelişimine katkıda bulunabilirsin. Başkalarının sana duyduğu güven, hem kendin hem de içgörülerinden yararlanacak kadar şanslı olanlar için uyumlu bir yaşamı teşvik eden bir rehberlik ve bilgelik kaynağıdır ve bu dünyada ve iş yaşamındaki benzersiz rolünün bir kanıtıdır.`,
            image: "https://appwrite.indata.com.tr/v1/storage/buckets/images/files/6-2/view?project=65dc554eb069bed83c59"
        },
        {
            name: "6 / 3", value1: `İş yaşamındaki ve hayattaki rolün öncü bir figür, başkalarının takip etiği bir rol model olarak öne çıkıyor. Neyin işe yarayıp neyin yaramadığını anlama konusundaki doğuştan gelen kararlılığın, keşif sürecinin dönüştürücü gücünü ifade etmek için burada olduğunun altını çiziyor.`,
            value2: `Bu süreç, bakış açının olgunlaşmasının çeşitli aşamalarında bilgeliğinin gelişmesine yol açıyor ve benzersizliğinin bireysel ifadesiyle sonuçlanıyor. Güven, senin için merkezi bir tema ve zaman zaman yüksek standartların ilişkilerini, içinde bulunduğun ekibi ve kariyerini zorlayan bir mükemmellik arayışıyla iç içe geçebilir. Çevrendekiler ile aranda güven tesis edildiğinde, kendini ideal bir iş veya yaşam vizyonunla uyumlu bir yerde bulursun. Alışılmışın ötesinde, hayatın beklentilerinden uzaklaştığında ara sıra geri çekilmene neden olan bir asalet duygusu yayarsın. Çeşitli deneyimlere girme ve taahhütte bulunmadan gözlemleme arasındaki etkileşim hem işinde hem de yaşamında bir git gel dinamiği yaratabilir. Hayatı uygulamalı bir şekilde kucaklamak, özgüven ve ustalık geliştirmenin temel unsurudur. Deneyimlerle aktif olarak ilgilenmek, güven, mükemmellik ve kararsızlığın karmaşıklıklarında gezinmene, kişisel gelişimi teşvik etmene ve hem profesyonel hem de kişisel alanlarda olumlu değişim için öncü bir rol model olarak konumlandırmana olanak tanır.`,
            image: "https://appwrite.indata.com.tr/v1/storage/buckets/images/files/6-3/view?project=65dc554eb069bed83c59"
        }
    ]
    var strategyevery = { name: "herkes", value: `Aldığın kararlar yolunu şekillendirmede kilit rol oynar, sadece profesyonel gidişatını değil, güvenini, iç huzurunu ve genel başarını da etkiler. Karar Alma Stratejini iş yaşamın boyunca sana yön ve güven sunan bir pusula gibi düşünebilirsin.` }
    var strategy = [
        {
            name: "To Respond", value: [
                { name: "Emotional - Solar Plexus", value: `Karşılık Ver ve Netlikle Karar Al\nİş yaşamında doğru kararları alabilmen ve rahatlıkla ilerleyebilmen için Karar Alma stratejin 3 adımdan oluşuyor:\n\n1. Adım: Hayatın sana bir şeyler getirmesine izin ver \n- Bir mıknatıs gibisin, konsantre olduğun şeyler yaşamında belirir. \n- Fırsatların doğal olarak yoluna çıkmasını izle\n- Bir şeyleri başlatmak için acele etme\n\n2. Adım: İçgüdülerini Takip Et\n- Hayat sana bir şeyler getirdiğinde, içinde (tam olarak alt karnında) kuvvetli bir his senin için doğru olup olmadığını  söyler. \n- Enerjini çoğaltan, seni heyecanlandıran şeyler senin için doğru şeyler. \n\n3. Adım: Duygusal Netlik Bekle\n- Duygusal olarak çok aşağıda ya da yukarıda olduğun zaman karar alma. \n- Sabret ve bir netlik bekle. \n- Seçiminde sakin ve kesin bir güven durumuna ulaştığında kendin için doğru kararı alabilirsin. ` },
                { name: "Emotional", value: `Karşılık Ver ve Netlikle Karar Al\nİş yaşamında doğru kararları alabilmen ve rahatlıkla ilerleyebilmen için Karar Alma stratejin 3 adımdan oluşuyor:\n\n1. Adım: Hayatın sana bir şeyler getirmesine izin ver \n- Bir mıknatıs gibisin, konsantre olduğun şeyler yaşamında belirir. \n- Fırsatların doğal olarak yoluna çıkmasını izle\n- Bir şeyleri başlatmak için acele etme\n\n2. Adım: İçgüdülerini Takip Et\n- Hayat sana bir şeyler getirdiğinde, içinde (tam olarak alt karnında) kuvvetli bir his senin için doğru olup olmadığını  söyler. \n- Enerjini çoğaltan, seni heyecanlandıran şeyler senin için doğru şeyler. \n\n3. Adım: Duygusal Netlik Bekle\n- Duygusal olarak çok aşağıda ya da yukarıda olduğun zaman karar alma. \n- Sabret ve bir netlik bekle. \n- Seçiminde sakin ve kesin bir güven durumuna ulaştığında kendin için doğru kararı alabilirsin. ` },
                { name: "Sacral", value: `Karşılık Vermek için Bekle ve İçgüdülerini Takip Et\nİş yaşamında doğru kararları alabilmen ve rahatlıkla ilerleyebilmen için Karar Alma stratejin 2 adımdan oluşuyor:\n\n1. Adım: Hayatın sana bir şeyler getirmesine izin ver \n- Bir mıknatıs gibisin\n- Konsantre olduğun şeyler yaşamında belirir. \n- Fırsatların doğal olarak yoluna çıkmasını izle, bir şeyleri başlatmak için acele etme.\n\n2. Adım: İçgüdülerini Takip Et\n- Hayat sana bir şeyler getirdiğinde, içinde (tam olarak alt karnında) kuvvetli bir his senin için doğru olup olmadığını  söyler. \n- Enerjini çoğaltan, seni heyecanlandıran şeyler senin için doğru şeyler. ` },
            ]
        },
        {
            name: "Wait for the Invitation", value: [
                { name: "Emotional - Solar Plexus", value: `Tanınma ve Davet Al, Netlik ile Karar Al\nBir Rehber olarak, bir orkestranın şefi gibisin. Başarılı bir sonuç için organizasyon ve yönlendirme senin yeteneklerinden. Karar Alma Stratejinin 2 adımı var:\n\n1. Adım: Tanınma veya Davet Bekle\n- İş yaşamında tanınma ve davet aldığın alanlarda ilerlemelisin.\n- Tanınma ve davet alana kadar bekle ve enerjini ve bilgeliğini en anlamlı ve etkili şekilde yönlendireceğin şeylerde ilerle. \n- Senin için başarı, zekanı ve bilgeliğini kabul ve takdir eden doğru insanları ve fırsatları seçmekle ilgili. \n\n2. Adım: Duygusal Netlik Bekle\n- Duygusal olarak çok aşağıda ya da yukarıda olduğun zaman karar alma. \n- Anahtar sabretmek ve netlik beklemektir. \n- Biraz bekle ve konuyla ilgili hissiyatının aynı olup olmadığına bak. \n- Seçiminde sakin ve kesin bir güven durumuna ulaştığında kendin için doğru kararı alabilirsin.` },
                { name: "Emotional", value: `Tanınma ve Davet Al, Netlik ile Karar Al\nBir Rehber olarak, bir orkestranın şefi gibisin. Başarılı bir sonuç için organizasyon ve yönlendirme senin yeteneklerinden. Karar Alma Stratejinin 2 adımı var:\n\n1. Adım: Tanınma veya Davet Bekle\n- İş yaşamında tanınma ve davet aldığın alanlarda ilerlemelisin.\n- Tanınma ve davet alana kadar bekle ve enerjini ve bilgeliğini en anlamlı ve etkili şekilde yönlendireceğin şeylerde ilerle. \n- Senin için başarı, zekanı ve bilgeliğini kabul ve takdir eden doğru insanları ve fırsatları seçmekle ilgili. \n\n2. Adım: Duygusal Netlik Bekle\n- Duygusal olarak çok aşağıda ya da yukarıda olduğun zaman karar alma. \n- Anahtar sabretmek ve netlik beklemektir. \n- Biraz bekle ve konuyla ilgili hissiyatının aynı olup olmadığına bak. \n- Seçiminde sakin ve kesin bir güven durumuna ulaştığında kendin için doğru kararı alabilirsin.` },
                { name: "Splenic", value: `Tanınma ve Davet Al, İçgüdülerini Takip Et\nBir Rehber olarak, bir orkestranın şefi gibisin. Başarılı bir sonuç için organizasyon ve yönlendirme senin yeteneklerinden. Karar Alma Stratejinin 2 adımı var:\n\n1. Adım: Tanınma veya Davet Bekle\n- İş yaşamında tanınma ve davet aldığın alanlarda ilerlemelisin. \n- Tanınma ve davet alana kadar bekle ve bilgeliğini en anlamlı ve etkili şekilde yönlendireceğin şeylerde ilerle. \n- Senin için başarı, zekanı ve bilgeliğini takdir ve kabul eden doğru insanları ve fırsatları seçmekle ilgili. \n\n2. Adım: İçgüdülerin Takip Et\n- İçgüdülerin anlık olarak o anda senin için bir şeyin doğru olup olmadığını belirlemede sana rehberlik eder. \n- Vücudunun sana söylediklerinin farkında ol.\n- Hislerini dikkate alarak doğru zamanda doğru kararları alabilirsin.` },
                { name: "Ego Projected", value: `Tanınma ve Davet Al, İradeli Kararlılığını Takip Et\nBir Rehber olarak, bir orkestranın şefi gibisin. Başarılı bir sonuç için organizasyon ve yönlendirme senin yeteneklerinden. Karar Alma Stratejinin 2 adımı var:\n\n1. Adım: Tanınma veya Davet Bekle\n- İş yaşamında tanınma ve davet aldığın alanlarda ilerlemelisin. \n- Tanınma ve davet alana kadar bekle ve bilgeliğini en anlamlı ve etkili şekilde yönlendireceğin şeylerde ilerle. \n- Senin için başarı, zekanı ve bilgeliğini takdir ve kabul eden doğru insanları ve fırsatları seçmekle ilgili. \n\n2. Adım: İradeli Kararlılığını Takip Et\n- İradeli kararlılığın senin için bir şeyin doğru olup olmadığını belirlemede sana rehberlik eder. \n- Karar verirken, kişisel çıkarlarına dikkat et ve "Ben ne istiyorum?" diye sor. \n- Kalbindeki iraden bu konuda ilerleyip ilerlememen gerektiğini sana bildirir.` },
                { name: "Self Projected", value: `Tanınma ve Davet Al, Söylediklerini Dinle\nBir Rehber olarak, bir orkestranın şefi gibisin. Başarılı bir sonuç için organizasyon ve yönlendirme senin yeteneklerinden. Karar Alma Stratejinin 2 adımı var:\n\n1. Adım:  Tanınma veya Davet Bekle\n- İş yaşamında tanınma ve davet aldığın alanlarda ilerlemelisin. \n- Tanınma ve davet alana kadar bekle ve bilgeliğini en anlamlı ve etkili şekilde yönlendireceğin şeylerde ilerle. \n- Senin için başarı, zekanı ve bilgeliğini takdir ve kabul eden doğru insanları ve fırsatları seçmekle ilgili. \n\n2. Adım: Söylediklerini Dinle\n- Ağzından çıkanlara kulak ver. \n- Güvendiğin birkaç kişi ile karar alacağın konuyu konuş - onların fikirlerini almak için değil, senin bu konuda ne söylediğini dinlemek için. \n- Bu karar senin için doğru mu, mutluluk getirecek mi? Kendini ifade etmene izin veriyor mu?\n- Ağzından çıkanları zihinsel olarak değerlendirme ve yargılama, ne diyorsan doğrun odur.` },
                { name: "Mental", value: `Tanınma ve Davet Al, Söylediklerini Dinle\nBir Rehber olarak, karar alma becerini geliştirmek, sabırla tanınmayı, davet edilmeyi ve aktif olarak kendi sesine uyum sağlamayı içerir. Bu strateji iki temel adımdan oluşur:\n\n1. Adım: Tanınma veya Davet Bekle\n- İş yaşamında tanınma ve davet aldığın alanlarda ilerlemelisin. \n- Tanınma ve davet alana kadar bekle ve bilgeliğini en anlamlı ve etkili şekilde yönlendireceğin şeylerde ilerle. \n- Senin için başarı, zekanı ve bilgeliğini kabul ve takdir eden doğru insanları ve fırsatları seçmekle ilgili.\n\n2. Adım: Söylediklerini Dinle\n- Söylediklerini aktif olarak dinle. \n- Güvendiğin birden fazla kişi ile karar alacağın konuyu konuş- onların fikirlerini almak için değil, senin bu konuda ne söylediğini dinlemek için. \n- Bu karar senin için doğru mu, mutluluk getirecek mi? Kendini ifade etmene izin veriyor mu?\n- Her konuşmanda bakış açındaki değişimleri ve konuyu nasıl tartıştığını gözlemle. Tutarlı olan bölümler karar almanda sana doğru yolu gösterecektir.` },

            ]
        },
        {
            name: "To Inform", value: [
                { name: "Emotional - Solar Plexus", value: `Gör, Netlik Bekle ve Bilgi Ver\nİşleri başlatma ve harekete geçirme konusunda benzersiz bir yeteneğe sahipsin. Karar Alma Stratejin 2 adımdan oluşuyor.\n\n1. Adım: Gör ve Netlik bekle\n- Harekete geçmek için neyin yapılması, başlaması gerektiğini gör ve hisset.\n- Eylemi başlatmadan önce duygusal netliği bekle.\n- Duygusal olarak çok aşağıda ya da yukarıda olduğun zaman karar alma.\n- Biraz bekle ve konuyla ilgili hissiyatının aynı olup olmadığına bak.\n- Sakin ve kesin bir güven durumuna ulaştığında kendin için doğru kararı alabilirsin.\n\n2. Adım: Harekete Geçmeden Önce Bilgilendir.\n- Harekete geçmeden önce etkilenecek kişileri bilgilendir.\n- Kararlarının başkalarını savunma veya koruma moduna sokabileceğini bil. Bilgilendirmek önünü ve iletişimi açar.` },
                { name: "Emotional", value: `Gör, Netlik Bekle ve Bilgi Ver\nİşleri başlatma ve harekete geçirme konusunda benzersiz bir yeteneğe sahipsin. Karar Alma Stratejin 2 adımdan oluşuyor.\n\n1. Adım: Gör ve Netlik bekle\n- Harekete geçmek için neyin yapılması, başlaması gerektiğini gör ve hisset.\n- Eylemi başlatmadan önce duygusal netliği bekle.\n- Duygusal olarak çok aşağıda ya da yukarıda olduğun zaman karar alma.\n- Biraz bekle ve konuyla ilgili hissiyatının aynı olup olmadığına bak.\n- Sakin ve kesin bir güven durumuna ulaştığında kendin için doğru kararı alabilirsin.\n\n2. Adım: Harekete Geçmeden Önce Bilgilendir.\n- Harekete geçmeden önce etkilenecek kişileri bilgilendir.\n- Kararlarının başkalarını savunma veya koruma moduna sokabileceğini bil. Bilgilendirmek önünü ve iletişimi açar.` },
                { name: "Splenic", value: `Gör, İç güdülerine Kulak ver ve Bilgi Ver\nİşleri başlatma ve harekete geçirme konusunda benzersiz bir yeteneğe sahipsin. Karar Alma Stratejin 2 adımdan oluşuyor.\n\n1. Adım: Gör ve İçgüdülerine Kulak Ver\n- Harekete geçmek için neyin yapılması, başlaması gerektiğini gör ve hisset. \n- Eylemi başlatırken içgüdülerin anlık olarak sana doğru yolda olup olmadığını bildirir. Anda kalman ve çok kısık gelen bu sinyallere kulak vermen önemli.\n\n2. Adım: Harekete Geçmeden Önce Bilgilendir\n- Harekete geçmeden önce etkilenecek kişileri bilgilendir.\n- Kararlarının başkalarını savunma veya koruma moduna sokabileceğini bil.  Bu şekilde savunmaları kırar, açık, üretken ve barışçıl iletişime giden yolu açarsın.` },
                { name: "Ego Manifested", value: `Gör, İradeni Dinle ve Bilgi Ver\nİşleri başlatma ve harekete geçirme konusunda benzersiz bir yeteneğe sahipsin. Karar Alma Stratejin 2 adımdan oluşuyor.\n\n1. Adım: Gör ve İradene Kulak Ver\n- Harekete geçmek için neyin yapılması, başlaması gerektiğini gör ve hisset. \n- İradeli kararlılığın senin için bir şeyin doğru olup olmadığını belirlemede sana rehberlik eder. \n- Karar verirken, kişisel çıkarlarına dikkat et ve "Ben ne istiyorum?" diye sor. İraden bu konuda ilerleyip ilerlememen gerektiğini sana bildirir.\n\n2. Adım: Harekete Geçmeden Önce Bilgilendir\n- Harekete geçmeden önce etkilenecek kişileri bilgilendir.\n- Kararlarının başkalarını savunma veya koruma moduna sokabileceğini bil.  Bu şekilde savunmaları kırar, açık, üretken ve barışçıl iletişime giden yolu açarsın.` },
            ]
        },
        {
            name: "Wait a Lunar Cycle", value: [

                { name: "Lunar", value: `Senin için önemli konularda en doğru kararları almak, yansıtmak, değerlendirmek ve tartışmak için yaklaşık bir ay beklemelisin. Karar Alma Stratejin 2 adımdan oluşuyor:\n\n1. Adım: Yansıtmak, Değerlendirmek ve Tartışmak için Yaklaşık Bir Ay Geçir\n- Bu süre boyunca çevrene çok dikkat et, kendini iyi hissettiren, sana pozitif gelen insanlarla çevrili olmak senin için önemli. \n- Bu bir ay boyunca konu hakkındaki hissiyatını takip et. \n\n2. Adım: Güvendiğin kişilerle konuyu konuş\n- Güvendiğin kişiler ile - onların fikirlerini almak için değil - kendi düşüncelerini ifade etmen için konuş. \n- Zaman içinde konuştuğunu dinlemek, içsel gerçeğini bulmanda yardımcı olur. \n- Bu bekleme ve tartışma sürecinde bir kararın senin için doğru olup olmadığını gösteren derin bir içsel hissiyat geliştirirsin. Bu şekilde kendin için en doğru kararları alabilirsin.` },
            ]
        }
    ]
    var gates = [
        { name: "15", title: "Güvenilirlik", value: `Parçası olduğun ekibi uyumlu ve güvenilir bir ekip halinde bir araya getirme yeteneğin var.  Sen ekipteyken kişiler daha güvenilir ve stabil olur.` },
        {
            name: "5", title: "Kültür", value: `İçinde bulunduğun ekibin, iç kurallarını belirleme yeteneğin var. Bu ekipte nasıl giyinilir, toplantılar nasıl yapılır, birbirine nasıl davranılır gibi ekibin iç yaşamını belirleme yeteneğidir.  Ekibin "Buralarda işleri böyle yapıyoruz!" algısını sen sağlayaiblirsin.
    `},
        { name: "14", title: "Kapasite", value: `İçinde bulunduğun ekip ya da işletmenin gelişmesine yardımcı olan kaynakları üretme yeteneğidir.  Kaynaklar = para, insanlar ve/veya ihtiyaç duyulan malzemeler.  Bu, herhangi bir işi hızlı bir şekilde başlatan şeydir, sen bu konuda yeteneklisin.` },
        {
            name: "2", title: "Vizyon", value: `İçinde bulunduğun ekibin ya da işletmenin yönünü belirleme yeteneğin var.  Ayrıca, edinilen karın en iyi yönlendirilmesinin yolunu gösterebilirsin.  Ekip için "ilerlediğimiz yön bu" algısını oluşturabilirsin.
    `},
        { name: "46", title: "Koordinasyon", value: `İçinde bulunduğun ekibin uyumlu işleyen bir ekip olmasını sağlama yeteneğin var. Grubun kişiliğinin geliştiği yer de burasıdır.` },
        { name: "29", title: "Bağlılık (Dedikasyon)", value: `İçinde bulunduğun ekibin bir hedefe bağlı kalmasına ve ona ulaşmasına yardımcı olma yeteneğin var.   Ekipte şu hissi yaratırsın: Hepimiz aynı fikirdeyiz ve birlikte çalışmaya kararlıyız.` },
        { name: "7", title: "Planlama", value: `İçinde bulunduğun ekipte, planlama, Ar-Ge ve doğru işi yapan doğru insanlara sahip olma yoluyla geleceğe başarılı bir şekilde ilerleme yeteneğin var.  İlerledikçe ne olması gerektiğini belirlemek senin işin.` },
        { name: "31", title: "Uygulama", value: `Herkesin rollerini doldurduğundan ve gerekli işi yaptığından emin olarak planı eyleme geçirme yeteneğin var.  Bu, organize olma ve her şeyi takip edip yönetebilme yeteneğidir.` },
        { name: "1", title: "Satış", value: `Ekibin ürettiği ürün veya hizmetleri müşteriler ile buluşturma konusunda yetkinsin.` },
        { name: "8", title: "Halkla İlişkiler", value: `Gerekli dikkati çekme yeteneğine sahipsin.  İçinde bulunduğun ekibin, ürün ve hizmetlerin fark edilmesini sağlayabilirsin.` },
        { name: "13", title: "Sayısal Takip", value: `Bu, yapılan işin ne kadar karlı olduğunu bilme yeteneğidir.  Ekibin işini sürdürmesi için doğru sayıları ve ayrıntıları takip edebilirsin.` },
        { name: "33", title: "Gözetim", value: `Bu, tüm operasyonu denetleme ve her şeyin sorunsuz çalıştığından emin olma yeteneğidir. Müşterileri ve çalışanları denetleyen gözler ve kulaklar sen olabilirsin` }]
    var channels = [
        { name: "59-6", title: "Etkileşim", value: `İş yaşamındaki kimseler ile hızlı ve kolay bir şekilde bağlantı kurabilirsin. Kurduğun sıcak bağlar ile yapılan işlerde yaratıcılığın önünü açarsın. Yaratıcılık ve ilişki gerektiren işlerde başarılı olabilirsin.` },
        {
            name: "45-21", title: "Yönetim", value: `Bir şeyleri yönetmek için buradasın. İradenin gücü ile para ve kaynakların maddi dünyasında ustalaşabilirsin. Başarılı olmak için bağımsız ve kontrolde olmalısın, aynı zamanda başkalarını da başarılı olmak için ne yapmaları gerektiği konusunda eğitebilirsin. Başarın, liderlik etmen için sana güvenen ekibin tam desteğine ve iş birliğine sahip olmakta yatar.`,
        }, {
            name: "9-52", title: "Konsantrasyon", value: `Odaklanmak için lazer benzeri bir yeteneğin var. Ayrıntılara odaklandığında, seni yerinde tutmaya yardımcı olan sessiz, stresli olmayan bir baskı yaşarsın. Kendini adadığın her şeyin ayrıntılarını sürekli  değerlendirirsin. Parçası olduğun ekibin de bir konuya odaklanmasına yardımcı olabilirsin.`,
        }, {
            name: "60-3", title: "Inovasyon", value: `Yenilik ve inovasyon gücü, seni ve çevrendekileri değişim ve yeni bir şeyler yaratma potansiyeli ile güçlendirir. Bu değişim seviyesini kucaklamak için körü körüne kendine inanç gereklidir, çünkü aniden gerçekleşebilir ve kuantum sıçraması gibi hissedilir. İçgüdülerine güven. Yaşam için sloganın "değişim, olması gerektiği zaman mutlaka olur".`,
        }, {
            name: "2-14", title: "Yön", value: `Mevcut kaynakların doğru dağıtımı yoluyla çevrendekilerin yönünü ve gelişimini güçlendirme potansiyelin var. Sevdiğin bir şeyi yaparak uzun saatler boyunca yaratıcı çalışmayı sürdürecek potansiyele ve enerjiye sahipsin. Yaptığın işi sevdiğinde, büyük bir zenginlik ve güç üretme potansiyeline sahipsin. Oluşturduğun veya erişimin olan kaynaklar sadece kendi kullanımı için değil, çevrendekileri güçlendirmek için de kullanabilirsin.`,
        }, {
            name: "20-34", title: "Karizma", value: `Bir şeye, kişiye, fikre veya bir plana olumlu yanıt verdikten sonra harekete geçtiğinde mükemmel şekilde çalışan ve gerçekleştirme kapasitesi olan bir güçle donatıldın. İş yaşamında çok işine yarayacak bu kişisel güç, bağımsız olman için seni desteklemek, inançlarına göre hareket etmek, zafer kazanmak ve kendin olarak hayatta devam etmek için sadece senin kullanımına açık bir gerçekleştirme gücüdür.`,
        }, {
            name: "57-20", title: "Anın Gücü", value: `Hayat seni kendi refahını güçlendirmek ve anda gerçeğini ve sezgisel içgörülerini dile getirmek için sezgisel farkındalığını kullanmaya teşvik eder. Bu, iç sansür olmadan "ayaklarının üzerinde düşünme ve konuşma" yeteneğidir. Spontane kelimelerinin ve içgüdülerinin, düşünmene gerek kalmadan bir durumun özüne hızlı bir şekilde ulaştığını sık sık göreceksin.`,
        }, {
            name: "39-55", title: "Kışkırtma", value: `Çevrendekilerin inançlarını körükleyebilirsin. Tutkudan melankoliye, mutluluktan üzüntüye sürekli değişen duyguların ile en derin yaratıcılık seviyelerine erişebilirsin. Ruh halini ve şu anda hissettiğin her şeyi kucaklamayı öğrendiğinde, etrafındakileri etkileme ve değiştirme gücüne de sahip olursun. Tutkun, kendini iyi hissettiğin zamanlarda çavrendekiler ve iş arkadaşlarının gerçek doğasını ve ruhunu ortaya çıkartabilir.`,
        }, {
            name: "61-24", title: "Yaratıcı Süreç", value: `İlham, içsel gerçeklik ve bireysel bilgelik ile dolu zihinsel kapasiten kendini ve çevrendekileri yüreklendirir. Bireysel olarak yaratıcı zihinsel bilme sürecinin deneyimi senin için oldukça spontane olabilir. Bazen sanki başka bir yerden bir şey duyuyormuşsun ve ilham alıyormuşsun gibi hissedersin, bu da hayatı tamamen yeni bir şekilde görme potansiyelini sunar. Zihnin bu yeni farkındalıklarla başkalarına ilham vermek için tasarlanmıştır ve bu iş yaşamında oldukça işine yarayacak bir güçtür.`,
        }, {
            name: "43-23", title: "Verimlilik", value: `İşleri daha verimli hale getirmek için özümsenebilecek ve benzersiz bir içgörü olarak ifade edilebilecek spontane bir atılım potansiyeline sahipsin. Zihnin sadece bildiklerini kucaklamak için değil, bilinmeyenleri keşfetmek için burada. İçgörülerin zaman zaman ışık yılı ilerideymiş gibi gelebilir. Davet almadan değerli fikirlerini etrafındakiler ile paylaşma. Tanındığında ve benzersiz içgörünü paylaşmaya davet edildiğinde, dehan doğal olarak ortaya çıkar.`,
        }, {
            name: "51-25", title: "Rekabetçilik", value: `İlk olmaya ve yeni bir şeyler başlatmayı seversin. Rekabetçi olmak doğanda var ve başkalarında rekabet gücü uyandırabilir ve güçlendirebilirsin. Her rekabetçi atılım, başkalarını güçlendirmek için kendi ruhunun derinliğine dair neşe ve yeni bir farkındalık getirir.`,
        }, {
            name: "10-34", title: "İnancın Gücü", value: `Ne kadar olağandışı olursa olsun kendi inançlarını takip etmek ve müdahaleye rağmen bağımsız ve kendin gibi davranmak için buradasın. Kendin olarak yaşayarak, başkalarını da kendi inançlarıyla temasa geçmeleri için güçlendirebilirsin.`,
        }, {
            name: "34-57", title: "Güç", value: `İstediklerini hayata geçirmek için inanılmaz bir güce sahipsin. Bu kişisel gücü, bağımsız olmak, kendini desteklemek ve eşsiz inançlarına göre hareket etmek içim kullanabilirsin. Açık ve hızlı bir şekilde tepki verebilmek için, sürekli olarak beden bilince bağlı olmalısın. Yaşamsal olarak canlı olmanın ve an be an yaşamanın ne anlama geldiğinin ilham verici bir örneği olabilirsin.`,
        }, {
            name: "10-57", title: "Mükemmelleştirilmiş Form", value: `Bu yaratıcı bir güçtür. Derin sezgisel dürtülerin, kendini ve hayatını tamamen sevmek, güvenmek ve kucaklamak için geleceğin korkularını serbest bırakmak için davranışlarına rehberlik eder. "Tek ayak üzerinde hızlı düşünme" yeteneğine sahipsin. Yaratıcılığın, hayatta kalmanın garanti altına alınacağı ve yarının korkusundan korunma sağlayan ortamlar yaratma/tasarlama şeklinde ortaya çıkar. `,
        }, {
            name: "20-10", title: "Yüksek İlkeler", value: `Şu anda, kim olduğunun gerçeğini ifade etme potansiyeline sahipsin. Tanındığında ve davet edildiğinde, çevrendekilere yüksek gerçeklerine başarılı bir şekilde uyum sağlamaları için rehberlik edebilecek daha yüksek ilkeli davranışların savunucusu olmak için buradasın.  Bireysellik yoluyla liderlik potansiyeline sahipsin.`,
        }, {
            name: "28-38", title: "Azim", value: `Kendini ve çevrendekileri, işin ve yaşamın doğal bir parçası olan mücadelelerde anlam ve amaç bulmaları için yüreklendirip güçlendirebilirsin. En zor ihtimallere karşı bile kendi yolunda gitmek için inatçı ve kararlı olman sağlıklı. Anlamlı olduğunu düşündüğün bir amaç için savaşmak senin için değerli. Çevrendekileri daha derin bir kariyer ve yaşam amacı sürdürmeye teşvik ederek onları güçlendirebilirsin.`,
        }, {
            name: "12-22", title: "Sosyallik", value: `Açıklığınla, ifadeni ayarlamana ve sosyal ortama veya duruma göre doğru kelimeleri veya duyguyu kullanmana izin veren özelliklere sahipsin. Sosyallik seviyen, ruh haline bağlı olabilir. Keskin bir zamanlama duygusu ve hedef kitlenin ne kadar açık olduğunun farkındalığı ile - insanların dikkatini çekmek için sıcaklığını ve sosyal becerilerini ne zaman kullanacağını bilirsin, böylece sözlerin çevrendekilerin hayatlarında değişim için bir katalizör olabilir.`,
        }, {
            name: "33-13", title: "Tanık Olan Lider", value: `Dinleme, duyduğun bilgileri ve sırları saklama ve ders alınabilecek anıları toplama yeteneğine sahipsin. Yüzeyin altında olanın kendisini daha derin bir gerçek şeklinde ortaya çıkarmasını sabırla beklerken, tanık olduğun deneyimler üzerine düşünüp bunları yansıtabilirsin. Doğal bir kayıt tutucu olarak, etrafındakilerin hikayelerini toparlayabilirsin.
    `,
        }, {
            name: "30-41", title: "Hayal Kurma", value: `Odaklanmış enerjini, 'olabileceklere' dair sayısız senaryoyu hayal etmek için kullanma yeteneğine sahipsin. Yeni deneyimler kazanmak için sonsuz bir özlemle, hayallerin ve arzuların, yerine getirilebilecek veya getirilemeyecek beklentiler yaratabilir. Yeni deneyimler isteğin, net kararlar vermek için yeterli zaman ayırmak için sabır ve öz kontrol geliştirerek en iyi şekilde dengelenir. Güçlü hayal gücü ile yenilikçi fikirler üretebilir, kalıpların dışında düşünebilir ve zorluklara yeni çözümler önerebilirsin. Bu yaratıcılık, problem çözmede ve ekip içinde bir inovasyon kültürünü teşvik etmede paha biçilmez olabilir.`,
        }, {
            name: "56-11", title: "Merak", value: `Sürekli olarak zihinsel uyarılara açık ve çevrendeki dünyayı görmenin yeni yollarını keşfetmeye heveslisin. Belirli bir şey bulmak için yola çıkmazsın, bunun yerine çevrendekiler ile "Ne keşfettiğime bakın" paylaşımını yapmayı tercih edersin. Yaratıcılığın ve sunum tarzın, hayatı deneyimleyen bir insan olmanın ne anlama geldiğine dair felsefi düşüncelerine dayanan fikirleri ve hikayeleri bir araya getirdiğinde büyülü bir hale gelir. Soyut fikirleri almak ve onlardan bir izleyici kitlesine öğretebilecek veya eğlendirebilecek bir hikaye oluşturmak için kıskanılacak bir yeteneğin var. Davet aldığında bu harika hikayeleri çevrendekiler ile paylaş.`,
        }, {
            name: "27-50", title: "Sorumluluk", value: `Diğerleri doğal olarak onları desteklemen ve gelişimleri için beslemen için sana bakar. Çevrendekilerin doğal olarak güvendiği birisin. Çok fazla sorumluluk üstlenmeye yatkın olabilirsin. Bir işletmenin veya ekibin değerlerini ve kurallarını oluşturma ve savunmayı istersin. Çevrendekilerin bakımına katılma konusunda destek olabilir, başkalarını da destekleyebilirsin. Sorumluluğu üstlenecek enerjiye sahip olup olmadığını yalnızca içgüdüsel tepkin aracılığıyla anlayabilirsin. Yapman gerektiğini düşündüğün için ek sorunluluklar almamaya dikkat et.
    `,
        }, {
            name: "54-32", title: "Tutku", value: `Gerçekten neyin dönüştürülebileceğini ortaya çıkartmaya dair tutarlı bir çaban ve içgüdülerinle beslenen bir motivasyonun var. Hayattaki konumunu daha iyi hale getirmek için çabalarının tanınması ihtiyacıyla ilerlersin ve çevrendekilere hizmet edersin. Sadakat ve özverili çalışmaların, iş yaşamında ilerleme ile ödüllendirilir. Potansiyelini gerçekleştirebileceğin, hedeflerine ulaşabileceğin, finansal olarak başarılı olabileceğin ve çevrendekilerin potansiyellerine ulaşmalarına yardımcı olmak için benzersiz yeteneklerini kullanabileceğin bir kariyerde ilerlemek için içgüdülerine güven.`,
        }, {
            name: "49-19", title: "Kaynaklar", value: `Yiyecek, barınak, bölge, koruma, idealler ve değerler dahil olmak üzere çevrendekilerin ihtiyaçlarına duyarlı olma yeteneğine sahipsin. Ekibinin, şirketinin veya müşterilerinin istikrarı ve refahı için nelerin sağlanması gerektiğini bilirsin. Çevrendekileri onlara hizmet etmeyen ve çıkarlarına uygun olmayan şeyleri reddetmeye teşvik edebilirsin. Pratikliği ve adaleti her zaman dengeleyebilen biri olarak tanınabilirsin. İşlerin akışında kendi konumuna karşı hassasiyet gösterirsin. İhtiyaç duyulmayı istemek ve istenmeye ihtiyaç duymak mutluluğun için önemlidir. Bulunduğun iş ortamının fiziksel ve duygusal olarak sağlıklı olmasını sağlayabilirsin. Hem pratik hem duygusal ihtiyaçlar da dahil olmak üzere çevrendekilerin ihtiyaçlarına duyarlı olma yeteneği, şefkatli ve empatik bir yaklaşıma katkıda bulunur. Bu, ekip içinde ve müşterilerle olumlu ilişkileri teşvik edebilir.`,
        }, {
            name: "37-40", title: "Topluluk", value: `Arkadaşlıklar ve topluluklar yaratabilme armağanına sahipsin. Bireylerin, herkesin onurlu bir yere ve saygın bir işleve sahip olduğu bir topluluğun parçası olmaları için köprüler oluşturabilirsin. Topluluğun parçası bireylerin aldıkları karşısında vermeleri gerekliliğini anlayan ve anlatansın. "Sen bunu yapacaksın, biz de senin için şunu yapacağız. Üzerinde el sıkışalım ve anlaşalım" şeklinde anlaşmalar sana göre. İnandığın, parçası olmaktan hoşlandığın ve sana inanan bir topluluğu var etmek ve sürdürmek için çalışmaya hazırsın. Herkesi bir arada tutan kişi sen olabilirsin. İçinde bulunduğun ekibin işbirliğini, iletişimini ve genel etkinliğini artırabilirsin.`,
        }, {
            name: "53-42", title: "Döngülerin Gücü", value: `Hayatın farklı başlangıçları, ortaları ve sonları olan döngüler halinde çalışır. İşlerin olgunlaşması, büyümesi ve gelişmesi zaman alır. Sonunda aşağı doğru seyreder ve sona ererler - bu da yeni bir döngünün başlamasına vesile olur ve yeni bir şeyi başlatır. Bir deneyime girerek ve tamamlayarak, tamamlanan döngüden öğrendiğin değerli dersleri ve bilgeliği yansıtabilir ve paylaşabilirsin. Tamamlanan döngüler üzerinde düşünme yeteneği, sürekli iyileştirmeye katkı sağlayabileceğini gösterir. Geçmiş deneyimlerden elde ettiğin içgörülerin devam eden gelişime katkıda bulunduğu bir öğrenme ortamını teşvik ederek ekip içinde bir düşünme kültürünü teşvik edebilirsin.`,
        }, {
            name: "46-29", title: "Keşif", value: `Yeni farkındalıklar için potansiyelin ve tamamlanana kadar bir deneyimde kalma azmin var. Kararlılık ve azim sende doğal olarak bulunan yetenekler. Doğru zamanda doğru yerde sağlayan bir gücün var. Keşif sürecinden elde edebileceğin memnuniyet ve paylaşabileceğin bilgelik için her deneyime beklenti olmadan gir ve yaşa. Sonunda elde ettiğin nihai çıktı bu deneyim ile mümkün olacaktır. Yeni fikirler üretme, keşif sürecine bağlı kalma ve sezgisel içgörülerden yararlanma becerin, içinde bulunduğun ekibin yenilik yapma, uyum sağlama ve iş ortamındaki fırsatları yakalama becerisini önemli ölçüde artırabilir.`,
        }, {
            name: "35-36", title: "Deneyimci", value: `İşleri ilerleme yönünde ilerletmek için her şeyi denemeye isteklisin. İşinde ve yaşamında yeni ve daha iyi bir şey vaat eden kolektif deneyimlerden bilgelik aramaya ve toplamaya yönlendirilirsin. Yeni bir deneyim beklentilerini karşılayamazsa hayal kırıklığına uğramak yerine, her deneyimi kendi iyiliği için yaşamayı kucaklamak, kabul etmek ve teslim olmak sana iyi gelir. Potansiyel yaşam başarın, birçok şeyi tatmış, dokunmuş ve hissetmiş birisi olarak, çevrendekilerin kullanımına sunabileceğin bilgeliği edinmiş olmaktır. Böylece çevrendekilere ilham olabilirsin. Senin topladığın ve paylaştığın deneyimler sayesinde içinde bulunduğun ekip her şeyi sıfırdan kurgulamadan, bu deneyimlerden öğrenerek kolayca ilerleme kaydedebilir.`,
        }, {
            name: "47-64", title: "Süreçsel Deneyimleme", value: `Yeni bir bakış açısı kazanmak için geçmişi gözden geçirmek ve anlamlandırmak için zihinsel kapasiteni sürekli kullanırsın. Olasılıklarla oynamayı asla bırakmayan çok aktif bir zihnin var.  Keşif sürecinde sabırlı ol, geçmişi değerlendirerek zamanla diğerleri ile paylaşmak için yeni bir bakış açısıyla yeni bir anlayış yaratma kapasitesine sahipsin. Hissettiğin geçmişi anlamlandırma baskısı, stratejik düşünmene yardımcı olabilir. Bulunduğun iş yeri ya da ekipte, karar verme ve gelecekteki eylemleri tasarlamak için geçmiş verilerden ve deneyimlerden yararlanarak stratejik planlamaya katkıda bulunabilirsin.`,
        }, {
            name: "5-15", title: "Paternler ve Ritim", value: `Akışın ve ritminle uyumlu olduğunda, yaptığın her şey zahmetsiz ve doğal hissettirir. Sana hizmet eden sabit kalıplar veya rutinler sana iyi gelir. Ayrıca, çevrendekileri tüm farklılıkları ile kabul etme ve kucaklama yeteneğine de sahipsin, ki bu yeni iş dünyasında çok önemli bir yetenektir. Tamamen kişisel içsel ritmin tarafından belirlenen kendi zamanlama ve akış duygunla ilerlemek sana ve içinde bulunduğun ekibe iyi gelir. Sabit kalıplara veya rutinlere bağlı kalma yeteneği, iş yaşamında tutarlı ve güvenilir bir iş çıktısı ile sonuçlanabilir.`,
        }, {
            name: "8-1", title: "İlham", value: `Herkesin deneyimlemesi için tanıtılabilecek ve sergilenebilecek bir biçimde farklı bir bakış açısını yaratıcı bir şekilde ifade etme yeteneğine sahipsin. Kendini ifade eden, yaratıcı bir birey olmanın ne anlama geldiğini modellemek ve başkalarının dikkatini çekmek için tasarlandın. Kalabalığın arasından sıyrılmak cesaret ister ve bu sende var. Böylece başkalarına eşit derecede cesur olmaları için ilham verirsin. Bu yeteneğin ile iyi bir lider olabilir, yaratıcı konularda ileri gidebilirsin.`,
        }, {
            name: "31-7", title: "Liderlik", value: `Çevrendekileri geleceğe güvenli bir şekilde götürme potansiyeline sahipsin. Bu, kesin olarak takip edilebilecek test edilmiş ve yerleşik kalıplara dayanan mantıklı bir liderlik türüdür. Liderlik etmek için önce güven kazanmalısın. Mevcut kalıpları kavrayan, eğilimleri anlayan ve insanların ihtiyaçlarıyla temas halinde olan biri olarak tanınmalısın. Sesin çevrendekilerde bir etki yaratır, ancak liderlik etmek için çoğunluk tarafından davet edilmen gerekir. Ayrıca nüfuz ederek perdenin arkasından da liderlik etme yeteneğine de sahipsin.`,
        }, {
            name: "18-58", title: "Yargılama", value: `Herhangi bir kalıbı yargılamak, meydan okumak, düzeltmek ve mükemmelleştirmek için doyumsuz bir dürtüye sahipsin. Sadece en iyi cevaplara sahip olduğunu kanıtlamayı amaçlayan mantığın için hiçbir zorluk çok büyük değil. Hataları görüp düzeltebilirsin. Düzeltmelerini isteyenler, cevaplarına hazırlıklı ve açık olan kişilerdir.`,
        }, {
            name: "48-16", title: "Yetenek", value: `Bir soruna potansiyel bir çözüm bulmak veya mükemmelleştirilmesi gereken bir şeyi düzeltmek ve iyileştirmek için derinliğe ve becerilere sahipsin. İçsel bir beceriyi mükemmelleştirmek için sezgisel derinliği tekrarlayan deneyler ve pratikle birleştirebilirsin. Yeteneğini başarılı bir şekilde geliştirmenin anahtarı, yapmayı sevdiğin bir şeyle tamamen özdeşleşmektir - ustalığa ulaşmak için büyük bir özveri gösterebilirsin. Derinliğini ustalığa ulaşmak veya bir becerinin mükemmelleştirilmesi için kullanarak, becerilerini bir yeteneğe dönüştürebilirsin.`,
        }, {
            name: "63-4", title: "Mantıksal Süreç", value: `Bir soru sorabilir, tanınabilir paternleri bulabilir, mevcut verileri hesaba katabilir ve gelecek hakkında iyi bir tahminde bulunabilirsin. Şüphe, mantıksal süreç için kesinlikle gereklidir, çünkü mantık formülasyonunda kusursuz olsa da ve yine de yanlış olabilir!  Tutarlı olup olmadıklarını görmek için kalıpları sürekli filtreleyen çok aktif bir zihnin var. Bir model tutarsız olduğu anda, baskı yoğunlaşır ve sonunda cevap gerektiren bir soru haline gelir. Mantıksal sürecini en iyi şekilde çevrendekilere fayda sağlamak için kullanabilirsin.`,
        }, {
            name: "17-62", title: "Organizasyon", value: `Devam eden bir iç süreçte, zaten kanıtlanmış ayrıntılara dayanan bilgileri zihinsel olarak yönetme yeteneğine sahipsin. Zihnin sürekli olarak ayrıntıları kendi zihinsel dosyalama sisteminde düzenlemekle meşgul ve her zaman başkalarının ne düşündüğüne veya söylediğine bakarak büyük resmi düzenler. İş gruplarını, etkinlikleri ve projeleri mantıklı bir şekilde organize etmek için çok aranan bir gücün var. `,
        }, {
            name: "26-44", title: "Girişim", value: `Hedeflediğin kişilere, bir şeyi ikna edici bir şekilde anlatma ve kabul ettirme ya da satma yeteneğine sahipsin. Başkalarını içgüdüsel olarak değerlendirmek ve onları "ihtiyaç duydukları" ürünler, işler ve hatta ideolojilerle eşleştirmek için bir yeteneğin var. İçgüdülerine güven - bir şey doğru 'kokmuyorsa', ondan uzaklaş.`
        }]
    var holland = [
        {
            name: "Araştırıcı", nameBig: "ARAŞTIRICI", value: {
                description: `Harekete geçmek yerine düşünmeyi ve gözlemlemeyi seçmek\nİkna etmek yerine bilgiyi düzenlemeyi ve anlamayı seçmek\nİnsanlarla çalışmak yerine verilerle çalışmak`,
                feature: `Entelektüel, analitik düşünce yapısına sahip, rasyonel, eleştirel, titiz, sabırlı, yöntemci, bağımsız, popüler olmaktan hoşlanmayan`,
                value: 0
            },
        },
        {
            name: "Sosyal", nameBig: "SOSYAL", value: {
                description: `Diğer insanlarla yakın ilişkiler kurmak için daha fazla çekilirler.\nEntellektüel veya fiziksel olmak istemeye daha az eğilimlidirler.\nÖğretme veya yardım durumlarında, ihtiyaçlarını karşılıyor gibi görünen insanlarla çalışmayı severler`,
                feature: `Yardımsever, sorumluluk sahibi, sosyal işbirliğine yatkın, empatik, arkadaş canlısı, içten, sabırlı, nazik, anlayışlı`,
                value: 0
            }
        },
        {
            name: "Gerçekçi", nameBig: "GERÇEKÇİ", value: {
                description: `Nesnelerle çalışmayı seven, “iddialı ve rekabetçi” dirler.\nMotor koordinasyon, beceri ve güç gerektiren faaliyetlere odaklanırlar.\nKonuşmak ya da oturup düşünmek yerine bir problem üzerinde çalışmayı tercih eder.\nSoyut olandan ziyade somuta odaklanırlar.\nEstetikten ziyade bilimsel ve mekanik olanı seçerler.`,
                feature: `Sabırlı ve hoşgörülü, pratik, maddeci, eril, antisosyal, uyumlu, içten, doğal, sabırlı, iç görüleri ve başarma güdüleri fazla`,
                value: 0
            }
        },
        {
            name: "Girişimci", nameBig: "GİRİŞİMCİ", value: {
                description: `İnsanlar ve veriler ile çalışmayı severler.\nOnlar iyi konuşmacılardır ve bu beceriyi başkalarına liderlik etmek veya ikna etmek için kullanırlar.\nAyrıca "güce, paraya ve statüye" değer vererek yüksek güçlü durumlara çekilirler`,
                feature: `Dışa dönük, enerjik, kendine güvenli, atılgan, fevri, ikna yeteneği yüksek, sabırsız, meraklı, maceracı, iyimser, sosyal, konuşkan`,
                value: 0
            }
        },
        {
            name: "Artistik Sanatsal", nameBig: "ARTİSTİK SANATSAL", value: {
                description: `Estetik faaliyetler yaparlar\nTutkulu, bağımsız, sistematik olmayan aktiviteleri severler\nSanatsal etkinlik ve ürünler yaratmayı tercih ederler\nBağımsız, yaratıcı çalışmalar içindedirler`,
                feature: `Heyecan ve coşkuları dengesiz, hayalci, fevri, karmaşık, sezgileri güçlü, bağımsız, duygusal, uyumlu olmayan, duyarlı ve etkileyici`,
                value: 0
            }
        },
        {
            name: "Geleneksel", nameBig: "GELENEKSEL", value: {
                description: `Sistemli kurallara bağlı aktiviteler\nNesnelerle ilgili sistematik çalışmalar\nKayıt tutma, hesaplama, kontrol işlemleri, veri`,
                feature: `Dikkatli, titiz, itaatkar, tutarlı, esnek olmayan, düzenli, sabırlı, vicdanlı, özdenetimli, hayal gücünden yoksun, dengeli`,
                value: 0
            }
        }
    ]
    var big5 = [
        {
            name: "Deneyime Açıklık", nameBig: "DENEYİME AÇIKLIK", value: {
                karakter: `Deneyime açıklık, kişinin yeni fikirleri ve deneyimleri ne kadar istekli bir şekilde kabul ettigini yansıtır.`,
                arti: `Deneyime açıklık, yaratıcılığı, esnekliği ve yeni fikirleri benimseme yeteneğini yansıtır. Bu özellik, sanat ve inovasyon alanlarında başarı getirebilir.`,
                eksi: `Deneyime aşırı açık olmak, bazen odak kaybına veya sabit bir kariyer hedefine sahip olmama sorunlarına neden olabilir.`,
                value: 0,
            }
        },
        {
            name: "Uyumluluk", nameBig: "UYUMLULUK", value: {
                karakter: `Uyumluluk, kişinin diğer insanlarla nasıl etkileşimde bulunduğunu, empati yeteneğini ve işbirliği yapma istegini yansıtır.`,
                arti: `Uyumluluk, işbirliği, empati ve iletişim becerilerini yansıtır. iş yerinde diğer insanlarla iyi geçinme yeteneği için avantaj saglayabilir.`,
                eksi: `Aşırı uyumlu olmak, sınırların belirsizleşmesine ve iş yerinde zor kararlar almada güçlük yaşanmasına neden olabilir.`,
                value: 0
            }
        },
        {
            name: "Öz Disiplin", nameBig: "ÖZ DİSİPLİN", value: {
                karakter: `Öz Disiplinli olma, kişinin disiplini, organizasyon yeteneği ve hedeflerine nasıl sadık kaldığını yansıtır.`,
                arti: `Öz Disiplinli olma, disiplini, organizasyon becerilerini ve sorumluluk hissini yansıtır. Bu, zaman yönetimi ve verimlilik açısından avantaj sağlayabilir.`,
                eksi: `Aşırı öz disiplinli olmak, esneklik eksikliğine yol açabilir ve iş yerinde aşırı mükemmeliyetçiliğe neden olabilir.`,
                value: 0
            }
        },
        {
            name: "Dışa Dönüklük", nameBig: "DIŞA DÖNÜKLÜK", value: {
                karakter: `Dışa Dönükler, sosyal ilişkileri geliştirmeye ve yeni arkadaşlar edinmeye açık olabilirler. Kişinin sosyal çevresiyle daha fazla etkileşimde bulunma eğilimini yansıtabilir.`,
                arti: `Sosyal etkileşimlere yatkınlık, liderlik pozisyonlarına uygunluk ve ekip çalışması yeteneği gibi dışa dönüklük özellikleri, iş yerinde iş birligi ve iletişim becerilerini geliştirebilir.`,
                eksi: `İş yerinde fazla dışa dönük olmak, odak kaybına neden olabilir ve bazen kişinin kendi görevlerine odaklanmasını zorlaştırabilir.`,
                value: 0
            }
        },
        {
            name: "Duygusal Dayanıklılık", nameBig: "DUYGUSAL DAYANIKLILIK", value: {
                karakter: `Duygusal kararlılık, kişinin stresle nasıl başa çıktığını, duygusal dengeyi koruma yeteneğini ve özsaygısını yansıtabilir.`,
                arti: `Duygusal istikrar, stresle başa çıkma yeteneği ve iş yerinde olumsuz durumları tolere etme yeteneğini yansıtır. Bu, kriz anlarında sakin kalma ve etkili kararlar alabilme yeteneğini artırabilir.`,
                eksi: `Aşırı Duygusal istikrar, stresli işlerde veya kriz durumlarında zorluk yaratabilir ve ilişkileri etkileyebilir.`,
                value: 0
            }
        }
    ]
    var careerSelectionKey = {
        1: [
            { name: "15", value: [2, 1, 4, 4, 3, 4, 5, 3, 4] },
            { name: "5", value: [2, 4, 3, 2, 1, 2, 5, 2, 2] },
            { name: "14", value: [3, 2, 4, 3, 3, 3, 3, 5, 3] },
            { name: "2", value: [2, 3, 4, 3, 2, 3, 3, 5, 3] },
            { name: "46", value: [2, 1, 4, 4, 4, 4, 5, 4, 4] },
            { name: "29", value: [2, 1, 4, 4, 3, 4, 4, 5, 4] },
            { name: "7", value: [3, 1, 4, 3, 4, 3, 5, 4, 3] },
            { name: "31", value: [2, 1, 4, 3, 3, 4, 5, 3, 3] },
            { name: "1", value: [1, 5, 4, 3, 3, 5, 3, 5, 2] },
            { name: "8", value: [1, 3, 4, 4, 2, 5, 3, 5, 2] },
            { name: "13", value: [3, 1, 3, 2, 3, 2, 5, 4, 2] },
            { name: "33", value: [3, 1, 5, 4, 4, 4, 5, 4, 4] },
            { name: "60-3", value: [5, 5, 4, 3, 3, 4, 3, 5, 3] },
            { name: "14-2", value: [5, 5, 4, 3, 3, 4, 3, 5, 3] },
            { name: "34-20", value: [5, 5, 4, 3, 3, 4, 3, 5, 3] },
            { name: "57-20", value: [3, 5, 3, 4, 3, 4, 3, 4, 3] },
            { name: "39-55", value: [4, 4, 4, 4, 4, 4, 3, 4, 3] },
            { name: "61-24", value: [4, 5, 4, 4, 4, 4, 4, 5, 4] },
            { name: "43-23", value: [4, 4, 4, 3, 4, 4, 4, 4, 4] },
            { name: "51-25", value: [4, 4, 4, 4, 4, 4, 3, 4, 3] },
            { name: "34-10", value: [4, 3, 4, 4, 4, 4, 3, 4, 3] },
            { name: "34-57", value: [3, 3, 5, 3, 3, 4, 4, 5, 3] },
            { name: "57-10", value: [3, 3, 4, 3, 4, 4, 3, 3, 4] },
            { name: "10-20", value: [3, 3, 5, 5, 3, 3, 4, 3, 5] },
            { name: "38-28", value: [3, 4, 4, 5, 4, 4, 4, 5, 4] },
            { name: "22-12", value: [3, 3, 4, 5, 3, 5, 4, 3, 5] },
            { name: "13-33", value: [4, 3, 4, 5, 3, 4, 4, 3, 5] },
            { name: "41-30", value: [3, 5, 4, 5, 3, 5, 4, 5, 5] },
            { name: "11-56", value: [5, 4, 4, 4, 5, 5, 4, 5, 5] },
            { name: "59-6", value: [3, 4, 5, 5, 3, 5, 5, 4, 5] },
            { name: "27-50", value: [3, 4, 5, 5, 3, 4, 5, 4, 5] },
            { name: "45-21", value: [3, 3, 5, 5, 3, 4, 5, 5, 4] },
            { name: "32-54", value: [4, 4, 5, 5, 4, 5, 5, 5, 4] },
            { name: "19-49", value: [4, 4, 4, 5, 5, 5, 5, 5, 4] },
            { name: "37-40", value: [4, 4, 5, 5, 4, 5, 5, 5, 5] },
            { name: "53-42", value: [3, 4, 4, 4, 3, 4, 4, 4, 4] },
            { name: "29-46", value: [4, 4, 4, 5, 4, 4, 4, 5, 4] },
            { name: "36-35", value: [3, 4, 4, 4, 3, 4, 4, 4, 4] },
            { name: "64-47", value: [4, 4, 4, 4, 4, 4, 4, 4, 4] },
            { name: "5-15", value: [5, 5, 4, 5, 4, 5, 4, 4, 5] },
            { name: "1-8", value: [2, 5, 4, 5, 3, 5, 3, 5, 5] },
            { name: "52-9", value: [5, 5, 5, 4, 5, 4, 5, 5, 5] },
            { name: "7-31", value: [3, 4, 5, 5, 3, 5, 5, 5, 5] },
            { name: "58-18", value: [5, 5, 5, 5, 5, 5, 5, 5, 5] },
            { name: "48-16", value: [4, 5, 4, 4, 4, 5, 4, 4, 5] },
            { name: "63-4", value: [5, 3, 5, 5, 5, 4, 5, 4, 5] },
            { name: "17-62", value: [5, 3, 5, 5, 5, 4, 5, 4, 5] },
            { name: "26-44", value: [4, 3, 4, 5, 4, 5, 4, 4, 5] }
        ],
        2: [//big5
            { name: "Dışa Dönüklük", value: [2, 4, 3, 1, 3, 5, 3, 5, 4] },
            { name: "Uyumluluk", value: [4, 3, 5, 5, 2, 4, 5, 3, 5] },
            { name: "Öz Disiplin", value: [5, 2, 4, 2, 5, 2, 4, 2, 2] },
            { name: "Duygusal Dayanıklılık", value: [1, 1, 2, 4, 1, 1, 1, 1, 3] },
            { name: "Deneyime Açıklık", value: [3, 5, 1, 3, 4, 3, 2, 4, 1] }
        ],
        3: [//holland
            { name: "Araştırıcı", value: [5, 2, 3, 3, 4, 3, 3, 5, 4] },
            { name: "Artistik Sanatsal", value: [1, 5, 2, 2, 1, 1, 2, 2, 4] },
            { name: "Sosyal", value: [1, 4, 4, 5, 2, 5, 3, 3, 5] },
            { name: "Girişimci", value: [2, 4, 5, 2, 3, 4, 4, 4, 2] },
            { name: "Geleneksel", value: [5, 1, 1, 3, 3, 2, 4, 3, 2] },
            { name: "Gerçekçi", value: [4, 2, 3, 3, 5, 3, 2, 1, 1] }
        ]
    };

    var careerSelectionResult = [
        { name: "1", value: [0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { name: "2", value: [0, 0, 0, 0, 0, 0, 0, 0, 0] },
        { name: "3", value: [0, 0, 0, 0, 0, 0, 0, 0, 0] }
    ];
    careerSelectionKey[1].forEach(x => {
        var isok = usergates.find(y => x.name == y)
        if (isok != undefined) {
            for (let index = 0; index < 9; index++) {
                careerSelectionResult[0].value[index] += x.value[index]
            }
        }

        var isok2 = api.DefinedChannels.find(y => x.name == y)
        if (isok2 != undefined) {
            for (let index = 0; index < 9; index++) {
                careerSelectionResult[0].value[index] += x.value[index]
            }
        }

    })

    var usageGate = [];
    gates.forEach(x => {
        var isok = usergates.find(y => x.name == y);
        if (isok !== undefined) {
            usageGate.push(x);
        }
    });
    channels.forEach(x => {
        var isok = api.DefinedChannels.find(y => x.name == y);
        if (isok !== undefined) {
            usageGate.push(x);
        }
    });
    var bigdataPercent = [];
    var hollanddataPercent = [];
    big5Data.forEach(x => {
        var deger = Math.round(((x.value * 2) / 100) * 5);
        var percent = { name: x.name, value: x.value * 2 };
        bigdataPercent.push(percent);
        var list = careerSelectionKey[2].find(y => y.name == x.name).value;
        for (let index = 0; index < 9; index++) {
            careerSelectionResult[1].value[index] += list[index] * deger;
        }
    });
    hollandData.forEach(x => {
        var deger = Math.round((((x.value * 100) / 15) / 100) * 5);
        var percent = { name: x.name, value: Math.round((x.value * 100) / 15) };
        hollanddataPercent.push(percent);
        var list = careerSelectionKey[3].find(y => y.name == x.name).value;
        for (let index = 0; index < 9; index++) {
            careerSelectionResult[2].value[index] += list[index] * deger;
        }

    });
var careerSelectionLastResult = [{ id: 0, name: "Analitik", value: 0 }, { id: 1, name: "Yaratıcı ve Sanatsal", value: 0 }, { id: 2, name: "Liderlik ve Yönetim", value: 0 }, { id: 3, name: "Sosyal", value: 0 }, { id: 4, name: "Teknik ve Mühendislik", value: 0 }, { id: 5, name: "Satış ve İlişkisel", value: 0 }, { id: 6, name: "Organizasyonel", value: 0 }, { id: 7, name: "Girişimci", value: 0 }, { id: 8, name: "Öğretici ve Mentor", value: 0 }];
    for (let index = 0; index < 9; index++) {
        careerSelectionLastResult[index].value += Math.round((careerSelectionResult[0].value[index] * 40) / 100);
        careerSelectionLastResult[index].value += Math.round((careerSelectionResult[1].value[index] * 30) / 100);
        careerSelectionLastResult[index].value += Math.round((careerSelectionResult[2].value[index] * 30) / 100);
    }
    careerSelectionLastResult.sort((a, b) => b.value - a.value);
    log(careerSelectionLastResult);
    log(hollanddataPercent);
    log(bigdataPercent);
    var careerSelectionData = [
        { id: "1", name: "Yaratıcı ve Sanatsal Kariyerler", value: "Estetik ve yaratıcılık gerektiren kariyerleri tercih edebilirsin. Tasarım, bir şeyleri sıfırsan ortaya çıkarma, müzik, resim ve yazma gibi çeşitli alanlarda kendini ifade edebileceğin meslekler ya da alanlarda başarıyla ilerleyebilirsin." },
        { id: "2", name: "Liderlik ve Yönetim Kariyerleri", value: "Liderlik becerileri gerektiren ve iş yönetimini içeren kariyerleri tercih edebilirsin. İnsanları yönlendirme, organizasyon yönetimi veya proje liderliği gibi alanlar başarılı olabileceğin alanlar." },
        { id: "3", name: "Yardım ve Sosyal Kariyerler", value: "Sosyal etkileşim ve kişilere yardım etmeyi içeren meslekler seni cezbedebilir. Sağlık hizmetleri, sosyal hizmetler, kar amacı gütmeyen kuruluşlar gibi alanlarda topluma katkı sağlayabileceğin kariyer seçenekleri seni mutlu edebilir." },
        { id: "4", name: "Teknik ve Mühendislik Kariyerleri", value: "Analitik düşünce ve teknik becerileri gerektiren mühendislik ve teknik alanlarda kariyer tercih edebilirsin. Bilgisayar, elektrik mühendisliği veya yazılım geliştirme gibi teknoloji odaklı kariyerlerde mutlu olabilirsin." },
        { id: "5", name: "Satış ve İlişki Kurma Kariyerleri", value: "Satis becerileri ve iliski yönetimi içeren kariyerleri tercih edebilirsin. Pazarlama, satis, müsteri iliskileri veya is gelistirme gibi alanlar basarili olabilegin kariyer seçenekleri arasindadir." },
        { id: "6", name: "Organizasyonel ve İdari Kariyerler", value: "Düzenleme ve yönetim becerilerini gerektiren organizasyonel ve idari görevleri tercih edebilirsin.  İnsan kaynakları, ofis yönetimi veya proje koordinasyonu gibi alanlarda kariyer yapabilirsin." },
        { id: "7", name: "Yenilikçi ve Girişimci Kariyerler", value: "Yenilikçi düşünce ve girişimcilikle ilgili alanları tercih edebilirsin. Girişimcilik, kendi işinei kurmak, start-up'lar veya ürün geliştirme gibi alanlardaki kariyer seçenekleri sana uygun." },
        { id: "8", name: "Öğretim ve Mentorluk Kariyerleri", value: "Öğretim ve rehberlik becerilerini kullanabileceğin alanları tercih edebilirsin. Eğitim, öğretim veya koçluk, mentorluk gibi alanlarda kariyer seçeneklerini değerlendirebilirsin.  " },
        { id: "0", name: "Analitik ve Veri Odaklı Kariyerler", value: "Analitik düşünce ve veri analizi becerilerini kullanabileceğin meslkeleri tercih edebilirsin. Veri bilimi, analitik pazarlama veya iş zekası gibi alanlarda sayısal verilerle çalışarak çözüm odaklı kariyer seçenekleri arasından seçim yapabilirsin." }
    ]
    var careerSelectionData2 = [
        {
            id: "1", name: "Yaratıcı ve Sanatsal Kariyerler",
            geleneksel: `Grafik Tasarımcı\nİçerik Yazarı\nFotoğrafçı\nIllustrator\nMüzisyen\nYönetmen\nSanat Yönetmeni\nAnimatör\nReklam Sanat Yönetmeni\nİç Mimar\nModa Tasarımcısı\nWeb Tasarımcısı\nVideo Düzenleyici\nSes Mühendisi\nKreatif Direktör`,
            futurist: `Sanal Gerçeklik Tasarımcısı\nArtırılmış Gerçeklik Sanatçısı\nNFT Sanatçısı\nXR Deneyim Tasarımcısı (Genişletilmiş Gerçeklik)\nYapay Zeka Tarafından Oluşturulan Sanat Geliştiricisi\nHolografik Sanatçı\nSosyal Medya İçerik Üreticisi\nBiyo-Sanatçı (Biyoteknoloji Sanatı)\nSanal Moda Tasarımcısı\n3D Baskı Sanatçısı\nYapay Zeka ile Geliştirilmiş Müzik Bestecisi\nOyun Anlatı Tasarımcısı\nYapay Zeka Tarafından Oluşturulan Hikaye Anlatıcısı\nMetaverse Mimarı\nYapay Zeka Destekli Film Yapımcısı`
        },

        {
            id: "2", name: "Liderlik ve Yönetim Kariyerleri",
            geleneksel: `Proje Yöneticisi\nİnsan Kaynakları Müdürü\nPazarlama Müdürü\nFinans Müdürü\nOperasyon Müdürü\nTedarik Zinciri Yöneticisi\nGenel Müdür\nSatış Müdürü\nÜretim Müdürü\nİcra Direktörü\nKalite Güvence Müdürü\nBilgi İşlem Müdürü\nAğırlama Müdürü\nPerakende Mağaza Müdürü\nEtkinlik Planlayıcısı`,
            futurist: `Sürdürülebilirlik Direktörü\nDijital Dönüşüm Yöneticisi\nUzaktan Çalışma Koordinatörü\nYapay Zeka Strateji Direktörü\nBlockchain Proje Yöneticisi\nBaş İnovasyon Sorumlusu\nESG (Çevresel, Sosyal ve Yönetişim) Yöneticisi\nVeri Yönetişimi Sorumlusu\nSiber Güvenlik Yöneticisi\nAI Etik Görevlisi\nYapay Zeka Benimseme Stratejisti\nSanal Ekip Lideri\nKriz Yönetimi Koordinatörü\nTedarik Zinciri Dayanıklılık Yöneticisi\nUzay Turizmi Operasyon Direktörü`
        },

        {
            id: "3", name: "Yardım ve Sosyal Kariyerler",
            geleneksel: `Sosyal Hizmet Uzmanı\nDanışman/Psikolog\nHemşire\nÖğretmen\nEvlilik ve Aile Terapisti\nMadde Bağımlılığı Danışmanı\nKlinik Psikolog\nOkul Danışmanı\nRehabilitasyon Danışmanı\nKâr Amacı Gütmeyen Program Yöneticisi\nGeriatrik Bakım Müdürü\nÇocuk Esirgeme Kurumu Çalışanı\nRuh Sağlığı Teknisyeni\nDarülaceze Çalışanı\nToplum Sağlığı Çalışanı`,
            futurist: `Telesağlık Uzmanı\nYapay Zeka Terapisti\nSanal Gerçeklik Terapisti\nTeletıp Koordinatörü\nRuh Sağlığı Yapay Zeka Koçu\nGerontolog (yaşlı bakımında uzmanlaşmış)\nDijital Sağlık Koçu\nTopluluk Dayanıklılık Görevlisi\nYapay Zeka Destekli Özel İhtiyaç Eğitimcisi\nAfet Müdahale Koordinatörü\nYapay Zeka ile Geliştirilmiş Yaşlı Refakatçi\nRobotik Rehabilitasyon Terapisti\nUzaktan Ruh Sağlığı Danışmanı\nKriz İletişimi Müdürü\nÇevre Adaleti Savunucusu`
        },

        {
            id: "4", name: "Teknik ve Mühendislik Kariyerleri",
            geleneksel: `Yazılım Mühendisi\nMakina Mühendisi\nElektrik Mühendisi\nİnşaat Mühendisi\nHavacılık ve Uzay Mühendisi\nBiyomedikal Mühendisi\nÇevre Mühendisi\nKimya Mühendisi\nVeri Bilimcisi\nAğ Yöneticisi\nSistem Mühendisi\nKalite Kontrol Mühendisi\nEndüstri Mühendisi\nProses Mühendisi\nTelekomünikasyon Mühendisi`,
            futurist: `Kuantum Bilişim Mühendisi\nYapay Zeka (AI) Etik Uzmanı\nRobotik Proses Otomasyon Mühendisi\n3D Baskı Mühendisi\nUzay Araştırmaları Mühendisi\nYenilenebilir Enerji Mühendisi\nOtonom Araç Mühendisi\nArtırılmış Gerçeklik Mühendisi\nBlockchain Geliştiricisi\nSiber Güvenlik Analisti\nSağlık Mühendisi için Yapay Zeka\nNanoteknoloji Mühendisi\nBiyoinformatik Bilimcisi\nSu Kaynakları Mühendisi (Sürdürülebilir Altyapı)\nUzaktan Drone Teknisyeni`
        },

        {
            id: "5", name: "Satış ve İlişki Kurma Kariyerleri",
            geleneksel: `Satış Temsilcisi\nMuhasebe Müdürü (Account manager)\nİş Geliştirme Müdürü\nEmlakçı\nPazarlama Koordinatörü\nMüşteri İlişkileri Yöneticisi\nReklam Satış Temsilcisi\nMarka Elçisi\nKilit Müşteri Yöneticisi\nİç Satış Temsilcisi\nHalkla İlişkiler Uzmanı\nSatış Operasyonları Analisti\nPerakende Mağaza Müdürü\nEtkinlik Planlayıcısı\nAğırlama Müdürü`,
            futurist: `Dijital Satış Stratejisti\nYapay Zeka Satış Uzmanı\nSanal Gerçeklik Satış Müdürü\nSürdürülebilirlik Satış Danışmanı\nChatbot Satış Temsilcisi\nMüşteri Deneyimi Direktörü\nVeriye Dayalı Satış Analisti\nE-ticaret Müdürü\nSosyal Ticaret Uzmanı\nYapay Zeka Destekli Kişisel Alışverişçi\nInfluencer Pazarlama Müdürü\nBlockchain Satış Danışmanı\nArtırılmış Gerçeklik Satış Uzmanı\nUzaktan Satış Koçu\nMüşteri Deneyimi Yapay Zeka Tasarımcısı`
        },

        {
            id: "6", name: "Organizasyonel ve İdari Kariyerler",
            geleneksel: `Yönetici Asistanı\nOfis Müdürü\nYönetici Asistanı\nProje Koordinatörü\nEtkinlik Planlayıcısı\nOfis Yöneticisi\nKayıt Yöneticisi\nİnsan Kaynakları Koordinatörü\nVeri Giriş Uzmanı\nHukuk Sekreteri\nTesis Müdürü\nSatınalma Uzmanı\nSeyahat Koordinatörü\nMüşteri Hizmetleri Sorumlusu\nFaturalandırma Uzmanı`,
            futurist: `Sanal Asistan\nAI Ofis Müdürü\nİşyeri Refahı Koordinatörü\nBlok Zinciri Yöneticisi\nDijital Etkinlik Yöneticisi\nSürdürülebilirlik Yöneticisi\nSiber Güvenlik Yöneticisi\nVeri Yönetişimi Uzmanı\nUzak Ekip Koordinatörü\nYapay Zeka Destekli İK Koordinatörü\nRobotik Süreç Otomasyonu Yöneticisi\nAkıllı Ofis Danışmanı\nUzay Turizmi Operasyon Koordinatörü\nUzak Etkinlik Planlayıcısı\nNFT Sanat Galerisi Yöneticisi`
        },

        {
            id: "7", name: "Yenilikçi ve Girişimci Kariyerler",
            geleneksel: `Girişimci/Startup Kurucusu\nGirişim Kapitalisti\nÜrün Müdürü\nİş Geliştirme Uzmanı\nİnovasyon Danışmanı\nGrowth Hacker\nFranchise Sahibi\nTasarım Odaklı Düşünme Kolaylaştırıcısı\nİnovasyon Koçu\nSosyal Girişimci\nPatent Analisti\nBaş İnovasyon Sorumlusu\nSürdürülebilirlik Danışmanı\nBiyolojik korsan\nESG (Çevresel, Sosyal ve Yönetişim) Uzmanı`,
            futurist: `Blockchain Girişimcisi\nAI Startup Kurucusu\nUzay Turizmi Girişimcisi\nSürdürülebilir Ürün Yenilikçisi\nDijital Sağlık Yenilikçisi\nDrone Hizmetleri Girişimcisi\nNFT Startup Kurucusu\nSanal Gerçeklik Arcade Sahibi\nUzay Madenciliği Girişimcisi\nArtırılmış Gerçeklik Turizm Operatörü\nYeşil Teknoloji Yenilikçisi\nSosyal Etki Girişimcisi için Yapay Zeka\nKuantum Bilişim Girişimcisi\nKişisel Markalaşma Koçu\nMetaverse Deneyim Tasarımcısı`
        },

        {
            id: "8", name: "Öğretim ve Mentorluk Kariyerleri",
            geleneksel: `Öğretmen/Eğitimci\nProfesör\nOkul Müdürü\nMüfredat Geliştirici\nÖğretim Tasarımcısı\nEğitim Danışmanı\nÇevrimiçi Eğitmen\nÖzel Eğitim Öğretmeni\nESL Öğretmeni\nOkul Danışmanı\nKütüphaneci\nMentor/Koç\nKariyer Danışmanı\nEğitim Teknoloğu\nGençlik Mentoru`,
            futurist: `Virtual Reality Education Specialist\nAI Education Coach\nEdTech Developer\nOnline Learning Experience Designer\nAugmented Reality Instructor\nLifelong Learning Facilitator\nYouth Mentor in Virtual Worlds\nAI Mentorship Coordinator\nRemote Education Specialist\nDigital Wellness Educator\nMetaverse Learning Experience Designer\nBlockchain Education Specialist\nGaming and Esports Mentor\nCybersecurity Education Specialist\nAI-Powered Language Instructor`
        },

        {
            id: "0", name: "Analitik ve Veri Odaklı Kariyerler",
            geleneksel: `Veri Analisti\nFinansal Analist\nPazar Araştırması Analisti\nİstatistikçi\nYöneylem Araştırması Analisti\nAktüerya\nKantitatif Analist\nRisk Analisti\nİş Zekası Analisti\nTedarik Zinciri Analisti\nKredi Analisti\nFiyatlandırma Analisti\nKalite Güvence Analisti\nSağlık Veri Analisti\nUyumluluk Analisti`,
            futurist: `Veri Bilimcisi\nMakine Öğrenimi Mühendisi\nYapay Zeka (AI) Etikçisi\nVeri Gizliliği Görevlisi\nBlockchain Veri Analisti\nBaş Veri Sorumlusu\nTahmine Dayalı Analitik Modelleyici\nArtırılmış Analitik Uzmanı\nSiber Güvenlik Veri Analisti\nKuantum Veri Analisti\nSağlık Bilişiminde Veri Bilimcisi\nVeriye Dayalı Pazarlama Uzmanı\nSürdürülebilirlik Veri Analisti\nİnsan Kaynakları Analisti için Yapay Zeka\nIoT (Nesnelerin İnterneti) Veri Analisti`,
        }
    ]
    var sortedUsageGate = siralaValueUzunlugunaGore(usageGate);

    // Çalışma ve Öğrenme Stilin
    var age_12_25_title = "12-25 Yaş"
    var age_12_25 = "Sosyal hayatta ve okul ortamında nasıl çalıştığını ve öğrendiğini anlamak, hem daha iyi iletişim kurmak hem de birlikte iş yapmak için çok önemli. Sınıf ortamlarında veya grup çalışmalarında, herkesin farklı bir çalışma ve öğrenme tarzı olabilir. Bu farkları görmek ve kabul etmek, grup çalışmalarında daha iyi sonuçlar almanı ve sınıf içindeki uyumu artırmanı sağlar. \n Kendi çalışma ve öğrenme stilini keşfederek, ihtiyaçlarını ve tercihlerini arkadaşlarına daha net bir şekilde anlatabilirsin.Aynı şekilde, arkadaşlarının nasıl öğrendiğini ve birlikte nasıl çalıştığını anlamak, onlarla daha iyi uyum sağlamana ve grup projelerinde daha başarılı olmanı sağlar.Bu yaklaşım, ekip içinde daha fazla anlayış ve iş birliği oluşturur, herkese kendini ifade etme fırsatı tanır. \n Başarılı bir grup çalışması, genellikle farklı düşünme ve öğrenme biçimlerini bir araya getirme becerisine bağlıdır.Herkesin farklı çalışma tarzını kabul edip buna göre hareket etmek, daha yaratıcı çözümler bulmanıza ve birlikte belirlediğiniz hedeflere daha kolay ulaşmanıza yardımcı olur.Her bireyin farklı öğrenme yaklaşımını takdir ederek, okul hayatında daha üretken ve uyumlu bir çalışma ortamı oluşturabilirsin. \n Her çalışma ve öğrenme tarzının kendine has güçlü yanları vardır.Kendi tarzını tanıyıp bunu kabul etmek, hem derslerinde daha verimli olmanı sağlar hem de arkadaşlarının farklı bakış açılarını anlamanı kolaylaştırır.Bu, sınıf ve grup projelerinde uyumlu bir ortam oluşturmak için oldukça önemlidir."
    var age_25_plus_title = "25+ Yaş"
    var age_25_plus = "Sosyal hayatta ve iş dünyasında çalışma ve öğrenme stillerini anlamak, etkili iletişim ve iş birliği için çok önemli. Her ortamda, farklı çalışma ve öğrenme tarzlarına sahip bireyler ortak hedefler doğrultusunda bir araya gelir. Bu farklılıkları görebilmek ve takdir etmek, ekip çalışmasını, verimliliği ve genel başarıyı artırabilir. \n Kendi çalışma ve öğrenme tarzını anlayarak, tercihlerini ve ihtiyaçlarını arkadaşlarına daha net bir şekilde ifade edebilirsin.Aynı şekilde, iş arkadaşlarının uyum sağlama biçimlerini anlamak da, onlarla iletişimini ve iş birliği çabalarını onların ihtiyaçlarına uygun hale getirmeni sağlar.Bu yaklaşım, daha iyi bir anlayış ve katılım sağlarken, ekip içinde kapsayıcılığı ve saygıyı da güçlendirir. \n Ekip çalışmasında başarı, genellikle farklılıkları birleştirme ve çeşitliliğin getirdiği güçlü yönlerden faydalanma yeteneğine bağlıdır.Farklı çalışma ve öğrenme biçimlerini kucaklayıp onlara uyum sağlamak, daha zengin tartışmalar, yenilikçi çözümler ve nihayetinde ortak hedeflere ulaşmada daha büyük başarılar getirebilir.Her bireyin kendine özgü öğrenme yaklaşımını değer vererek, iş yerinde iş birliği, yaratıcılık ve sürekli gelişim kültürünü geliştirebilirsin. \n Her çalışma ve öğrenme biçimi, kendine has güçlü yanlar sunar.Kendi tarzını fark edip bunu benimsemek, hem kendi potansiyelini en üst düzeyde kullanmanı sağlar, hem de iş arkadaşlarının farklı düşünme yaklaşımlarını takdir etmeni ve değer vermeni kolaylaştırır.Bu, uyumlu ve verimli bir çalışma ortamı yaratmak için kritik öneme sahiptir."

    var objective_title = "Objektif"
    var objective = "Senin Objektif çalışma ve öğrenme tarzın, bilgiyi önyargısız bir şekilde alma yeteneğine sahip olmanı sağlar ve bu da bulgularını gerçekten tarafsız bir şekilde paylaşmanı mümkün kılar. Bilgiye yaklaşımın, çevreyi örnekleme, karşılaştığın şeyleri yansıtma ve algıladıklarını net ve tarafsız bir bakış açısıyla değerlendirme üzerine kuruludur. Çevrendeki ortamın genel sağlığını, ister ofisinin fiziksel alanı ister ekibinin duygusal durumu olsun, sezme yeteneğin çok değerlidir. İnce ipuçlarını doğal olarak yakalayarak, bir durumun iyi mi yoksa altında çözülmesi gereken sorunlar mı barındırdığını objektif bir şekilde algılayabilirsin. Samimiyete olan keskin duyarlılığın sayesinde, çevrendeki insanların ne zaman kendilerine sadık olduğunu ya da olmadığını sezebilirsin. Bu yetenek, iş dünyasında kime güvenebileceğini anlamana ve kimlerin kendini açması için cesaretlendirilmesi gerektiğini belirlemene yardımcı olur. Açık yaklaşımın, adeta bir ayna gibi, insanlara ve gruplara, eylemlerinin ve tercihlerinin gerçekliğini yansıtmanı sağlar, özellikle de zarar verici ya da adaletsiz durumlarla karşılaştıklarında. Bu, seni güçlü bir değişim temsilcisi yapar, çünkü etrafındakilerin daha net görmelerine ve herkesin yararına olacak ayarlamalar yapmalarına yardımcı olabilirsin. Değerlendirici olarak, Objektif çalışma ve öğrenme ile her şeyi kişisel filtrelerden geçirmeden, anlamak ve değerlendirmek amacıyla işlersin. Bu geniş ve açık yaklaşım, her şeyden etkilenmek anlamına gelmez; aksine, bilgilerin senden geçmesine izin verir ve böylece diğerlerinin kaçırabileceği bir netlik sağlar. İş Dünyasında Objektif Çalışma ve Öğrenme Tarzınla Çalışmak Profesyonel alanda, objektif değerlendirme yeteneğin sayesinde tarafsız içgörüler ve rehberlik sunabilirsin. İster yeni bir projenin uygulanabilirliğini değerlendiriyor, ister potansiyel bir ortaklığın havasını ölçüyor ol, değerlendirmelerin net ve bulandırılmamış gözlemlere dayanır. İş dünyasında, işletmelerin misyonlarına sadık kalmalarına ve sağlıklı, samimi bir şekilde faaliyet göstermelerine yardımcı olmak için önemli bir rol oynarsın. Objektif çalışma ve öğrenme tarzını kullanarak iş dünyasında çok gerekli bir perspektif sunar, kararların mevcut bilgilerin doğru ve adil bir değerlendirmesine dayalı olarak verilmesini sağlarsın."
    var indivudal_title = "Bağımsız"
    var individual = "Bağımsız çalışma ve öğrenme tarzın sayesinde bilgileri işleme ve kendi başına çalışma konusunda benzersiz bir yeteneğe sahipsin. Profesyonel duruşun, dışarıdan onay almadan da kendini güvende hissetmeni sağlayan doğal bir tamlık duygusuyla karakterizedir. Bu odaklanma, bilgiyi hızlıca sindirip uyum sağlamana olanak tanır ve hızla değişen iş dünyasında sana bir avantaj kazandırır. Bu hızlı düşünme tarzın, özellikle zamanın kritik olduğu ortamlarda seni değerli bir hale getirir. \n Bağımsız ve tutarlı bir şekilde bilgi işleyebildiğin için genellikle hızlı hareket edebilirsin. Hızlı işlem yeteneğin büyük bir güç olsa da, sabırlı olmayı unutmaman gerekir. İş dünyası ve sosyal hayat genellikle kolektif bir ritimde ilerler ve senin de bu ritme uyum sağlaman gerekebilir. Biraz yavaşlamak, diğerlerinin senin hızına yetişmesini sağlar ve içgörülerine dayalı olarak harekete geçtiğinde, zamanlamanın hem bireysel hem de organizasyonel olarak doğru olmasına yardımcı olur. \n İş birliği ve Takdir \n Bilgiyi işlemekte başkalarına ihtiyaç duymasan da, iş birliği çalışmalarının derinliğini artırabilir. Diğerlerine, kendi bakış açılarını sunmaları için zaman tanımak önemlidir. Çoğu zaman, çalışma arkadaşların meseleleri birçok farklı açıdan incelemek ve daha fazla düşünmek isteyebilirler. Onların bu süreçlerine katılman, hem kendi içgörülerini zenginleştirecek hem de iş birliği ve liderlik çalışmalarını güçlendirecektir. \n Doğal, bağımsız çalışma ve öğrenme tarzını onurlandırırken, ekibindeki farklı yaklaşımlara da saygı göstererek, hem kendinden emin hem de empati dolu bir lider olarak iş dünyasında başarıya katkı sağlayabilirsin. Bu da hem kişisel olarak tatmin edici hem de geniş çapta etkili sonuçlar yaratır."
    var collaborative_titie = "İş Birlikçi"
    var collaborative = "Senin İşbirlikçi çalışma ve öğrenme tarzın sayesinde, başkalarıyla bir aradayken en parlak halini sergiliyorsun. Diğer insanlarla çalışırken, ortaya çıkan enerji ve fikirler seni canlandırıyor, doğal enerjin iş birliği içinde güçleniyor. Sadece düşünceleri paylaşmıyorsun; başka biriyle çalışmak ya da grup ortamında olmak, en iyi yanlarını ortaya çıkarmana yardımcı oluyor. Takım çalışması senin için adeta bir 'güç artışı' gibi, kendi yeteneklerini ve fikirlerini yükseltiyor. Bu yüzden, başkalarıyla çalışmakta gerçekten başarılısın çünkü herkes bir araya geldiğinde, bilgiyi anlama ve işleme yeteneğin hızla gelişiyor. \n Yalnız çalışırken bazen işleri tamamlayamama hissine kapılabilirsin. Bu bir eksiklik değil, tam potansiyelinin iş birliği yoluyla ortaya çıktığının bir göstergesi. Başkalarının varlığı, senin bilgi işleme gücünü tamamlıyor ve bilgiyi uyumlaştırma yeteneğini harekete geçiriyor. \n İş dünyasında, ortaklıklar kurmak senin için özellikle faydalı olabilir. Bu bir bağımlılık değil, diğer insanlarla yaratıcı bir alanı paylaşmanın getirdiği canlı bir değişimdir. İçgörülerinin derinliği, doğal olarak senin yeteneklerini tamamlayan becerilere ve güçlü yönlere sahip insanları kendine çektiğin için genişler. \n Senin tarzın, bilgiyi sindirip tam anlamıyla işlemeye daha fazla zaman ayırmanı gerektirebilir.Bu, konuları derinlemesine keşfetmeni ve bir sorun ya da fırsatın farklı yönlerini değerlendirmeni sağlar.İşte bu yaklaşımın büyük avantajı: Bir şeyi tam olarak anladığında, onu her açıdan incelediğin için bu sadece anlamış olmak değil, adeta içini dışını bilmek anlamına gelir.Bu derin anlayış, iş dünyasında senin için bir süper güçtür.Bir karar ya da projeye ilerlemeye hazır olduğunda, sağlam bir temel ve ayrıntılı bir kavrayışla hareket ediyorsun. \n Karar verirken içgüdüsel olarak hemen sonuca ulaşmak isteyebilirsin.Bunun yerine, doğal ritmini kucakla ve karar verme sürecinin başkalarının varlığıyla gelişmesine izin ver.Doğru kişilerle birlikte olduğunda, açık fikirlerin aktığı bir ortamda, bütünlük ve kesinlik duyguların ortaya çıkacak ve seni doğru sonuca yönlendirecek. \n Canlı bir ortamda olmak — hareketli bir ofis, işbirlikçi bir atölye ya da halka açık bir toplantı yeri fark etmez — senin uyum sürecin için bir katalizör görevi görür.Bu ortamların enerjisi, bilgi işleme yeteneğini artırır ve zihinsel keskinliğini yükseltir. \n İşbirlikçi alanların enerjisini ve başkalarıyla çalışma eğilimini kullanarak iş dünyasında başarıya ulaşabilirsin."
    var synthesizing_title = "Sentezleyen"
    var synthesizing = "Senin sentezleyici çalışma ve öğrenme tarzın, farklı bilgi kaynaklarını bir araya getirip anlamlandırma konusunda benzersiz bir yetenek sağlıyor. En iyi performansı, özgürce hareket edip çeşitli insanlarla etkileşime girebildiğinde gösterirsin. Farklı perspektiflerden bilgi toplamak ve bu bilgileri bir yapboz gibi birleştirmek senin doğal yeteneğin. \n Değişim ve çeşitlilikten beslenirsin.Gün içinde farklı ortamlarda, çeşitli insanlarla etkileşim kurduğunda kendini daha enerjik ve sağlıklı hissedersin.Aynı ortamda veya aynı grupla sınırlı kalmak seni kısıtlanmış hissettirebilir, bu yüzden seni meşgul eden ve zihinsel olarak uyarıcı çeşitli iş deneyimlerini aramalısın. \n Doğal eğilimin hızla hareket etmek ve kararlarını anlık olarak vermek olabilir, çünkü bu senin hırsın ve itici gücünle bağlantılıdır.Ancak, asıl gücün, elindeki bilgileri sentezleyebilme yeteneğinden gelir ve bu da sabır gerektirir.Farklı girdileri tam anlamıyla bütünleştirip anlamadan harekete geçmeden önce kendine zaman tanıdığında, daha dengeli ve etkili sonuçlar elde edersin. \n Çoğu zaman sanki aynı anda üç rolü birden üstleniyormuş gibi hissedebilirsin, her biri kendi istekleri ve bakış açılarıyla.Bu bir bölünme değil, üç güçlü yönün bir araya gelmesiyle oluşan bir bütünlüktür.Bu üç yönü bir arada kullanmayı başardığında, durumlara, zorluklara ve çözümlere üç boyutlu bir bakış açısıyla yaklaşabilirsin. \n İş birliği, farklı bakış açılarını sentezlemek için faydalı olsa da, yalnız çalışmakta da oldukça iyisin.Kendi başına işleri halledebilme yeteneğin, farklı ortamlarda esnek bir şekilde çalışma özgürlüğü sağlar—ister hareketli bir ofiste ister sessiz bir özel alanda.Unutma, sentezleyici çalışma ve öğrenme tarzın, kendi kendine yetebilme ve farklı kaynaklardan gelen içgörüleri birleştirebilme yeteneğinin güçlü bir birleşimidir.Bu da seni iş dünyasında dinamik ve çok yönlü bir değer haline getirir."
    var subjective_title = "Öznel"
    var subjective = "Senin Öznel Çalışma ve Öğrenme tarzın, bilgiyi işleme konusunda oldukça özel ve sabit bir yaklaşıma sahip olmanı sağlar. Bu, tamamen kişisel deneyimlerine dayanan, derinlemesine ve öznel bir yöntemdir. Diğerleri sana daha az esnek görünebilir, ancak bu, bilgiyi kendine özgü bir şekilde özümseme sürecinden kaynaklanıyor. Bilgileri doğal olarak kendi bakış açınla yorumlayarak, çevrendeki dünyayı benzersiz bir biçimde anlamlandırıyorsun. \n Yaklaşımın seçici gibi görünebilir ve bu, sınırların önemini ve derin bağlantıların değerini bildiğin içindir. Doğal olarak belirli insanlara yakınlık duyarak, güvenilir ve samimi bir çevre oluşturma eğilimindesin. Bu, bazen 'taraf tutuyormuşsun' gibi görünebilir ama aslında, gerçek ve derin ilişkiler kurma ihtiyacının bir yansımasıdır. \n Küçük gruplarda sık sık uyum sağlamanı gerektiren durumlar sana zor gelebilir, çünkü en iyi işlerini, farklı insanlarla ve farklı ortamlarda etkileşim kurma özgürlüğüne sahip olduğunda ortaya koyarsın. Bu çeşitlilik ihtiyacı, nicelikten çok nitelik arayışından kaynaklanıyor; seni zenginleştiren farklı bakış açıları, öznel analizini derinleştiriyor. \n Hızlı kararlar vermek sana göre değildir çünkü bilgiyi kendi ritmine uygun şekilde işlemen için zamana ihtiyacın var. Bu zaman, yeni bilgileri mevcut bilgi birikimine tam anlamıyla dahil etmene olanak tanır, böylece verdiğin kararlar kişisel anlayışına dayalı sağlam temellere oturur. \n Kendi hızında hareket etmek senin için çok önemli. Başkalarının beklentilerine veya zaman çizelgelerine uymaya zorlanmak, zihinsel, fiziksel ve duygusal sağlığını olumsuz etkileyebilir. Kendi ritmini benimsemek, sürecine sadık kalmanı ve işte de, hayatta da etkili ve tatmin edici sonuçlar elde etmeni sağlar. \n İş dünyasında, Öznel çalışma ve öğrenme tarzın büyük bir avantajdır. Derinlemesine düşünülmüş ve yenilikçi çözümler ortaya koymana yardımcı olur. Kişisel işleme tarzına sadık kalarak, her profesyonel ortamda tartışmalara ve projelere önemli bir değer katabilir ve daha çeşitli, zengin bir bakış açısına katkıda bulunabilirsin."


    // İş Yaşamında Rolün
    var age_12_25_title = "12-25 Yaş"
    var age_12_25 = "Herkes hayatında özel bir rol oynar ve senin Rolün hem kişisel hayatında hem de okul hayatında oynadığın benzersiz karakter gibidir. Başkalarıyla nasıl etkileşim kurduğunu, sorunları nasıl çözdüğünü ve yeteneklerini nasıl paylaştığını gösterir. Bir aktörün karakterine bürünmesine yardımcı olan bir kostüm giymesi gibi, senin Rolün de güçlü yanlarını ve gerçekten iyi olduğun şeyleri göstermen için giydiğin “kıyafet” gibidir. \n Rolünü anlayarak, doğal yeteneklerinin nerede olduğunu ve bunları daha başarılı ve mutlu hissetmek için nasıl kullanabileceğini bulabilirsin. Ayrıca, başkalarıyla nasıl çalıştığını, onların seni nasıl gördüğünü ve en büyük farkı nerede yaratabileceğini anlamana yardımcı olur. Rolünü bildiğinde ve ona sadık kaldığında, kendine daha güvenli hissedersin, sanki üzerine tam oturan mükemmel bir kostüm giymiş gibi!"
    var age_25_plus_title = "25+ Yaş"
    var age_25_plus = "Rolün dünyayla nasıl etkileşim kurduğunu, nasıl katkıda bulunduğunu ve nasıl göründüğünü temsil eder. Bir aktörün karakterine bürünmesine yardımcı olan bir kostüm giymesi gibi, Rolünü de hayatındaki amacını yerine getirmek için giydiğin “kıyafet” gibi düşünebilirsin. Güçlü yanlarının ve olası zorlukların altını çizer ve rolünü anlayarak en iyi versiyonunu ortaya koyabilirsin. Rolünle uyum içinde olduğunda, doğal olarak sana en uygun fırsatlara adım atabilir, başarı ve tatmini deneyimleyebilirsin. \n İş dünyasında Rolünü anlamak yapman gereken işe uyum sağlamana da yardımcı olur. Doğal güçlü yönlerinin nerede olduğunu ve başarı fırsatlarının nereden geleceğini gösterir. Başkalarıyla nasıl etkileşim kurabileceğin, onların seni nasıl algıladığı ve en değerli katkılarını nerede sunabileceğin konusunda netlik kazanabilirsin. Rolünle uyum içinde olduğunda, üzerindeki tam oturmuş bir elbise giymiş gibi hissedersin—kendini rahat, güçlü ve amacını gerçekleştirebilir halde bulursun. Rolünle uyumlu bir yaşam sürmediğinde, üzerindeki kostümün sana uymadığını hissedersin. Ya çok sıkı ya da çok bol gelir ve olmadığın biri gibi davranmaya çalışarak enerji harcayabilirsin. Bu, işinde hayal kırıklığı, kaçırılmış fırsatlar veya kariyerinde ve iş hayatında uyumsuzluk hissi olarak ortaya çıkabilir. \n Rolün, profesyonel hayatında bir pusula görevi görebilir. İnsanlarla iş dünyasında doğal olarak nasıl etkileşim kurduğunu, kariyer fırsatlarının nereden geleceğini ve güçlü yönlerini nasıl kullanarak ilerleyeceğini, lider veya alanında uzman biri haline geleceğini anlamana yardımcı olur. \n Rolün, hayat amacını nasıl yerine getirdiğinin de önemli bir parçasıdır. Onunla uyum içinde yaşadığında, tatmin, başarı, huzur ve bazen de sürprizlerle karşılaşırsın. Seni doğal ve doyurucu iş ve yaşam seçimlerine yönlendirir. Kişisel ya da profesyonel hayatında, Rolünü anlamak ve benimsemek, kendi gücüne adım atmana, otantik bir şekilde etkileşim kurmana ve potansiyelini gerçekleştirmeni sağlar."

    var is_y_r_s2_0 = "Otorite/Öncü" //burası sanırım basılmayacak
    var is_y_r_s2_1 = 'Keşfeden Uzman'
    var is_y_r_s2_1_1 = "Hayatın, seni ilgilendiren konularda derinlemesine keşifler yaparak ve deneyimlerden sürekli öğrenerek ilerlediğin bir yolculuk. Deneme yanılma yöntemiyle neyin işe yarayıp yaramadığını keşfederek doğal bir şekilde uzmanlık geliştirirsin. Bu pratik yaklaşım, seni seçtiğin alanda otorite olma yolunda nitelikli kılar. İster kariyerine yeni başlıyor ol, ister halihazırda köklü bir işe sahip ol, ayrıntıları anlamaya, sağlam bir temel oluşturmaya ve gerçek dünyadaki deneyimlerle ustalık kazanmaya yönelik bir arzu seni yönlendirir."
    var is_y_r_s2_2 = "İş Hayatında Güçlü Yönlerin"
    var is_y_r_s2_2_1 = "En büyük gücün, çözüm bulana kadar araştırma ve deneme yeteneğinde yatar. Herhangi bir işte, sorunlara merakla ve kararlılıkla yaklaşır, her zaman daha derinlere inmeye ve en iyi yolu keşfetmeye istekli olursun. Zorlukların üstesinden gelme ve hatalardan öğrenme yeteneğin seni farklı kılar, başkalarının tavsiye ve içgörü almak için başvurduğu biri yapar. Zamanla, alanında derin bir anlayış geliştirirsin ve bu da seni yaşın veya deneyim seviyen ne olursa olsun bir otorite yapar."
    var is_y_r_s2_3 = "Otorite / Öncü Olmak"
    var is_y_r_s2_3_1 = "İlgini gerçekten çeken konularda uzmanlık geliştirerek bir otorite olabilirsin. Bu pratik öğrenimlerin ile ustalaşmak ve bilgini başkalarıyla paylaşmakla ilgilidir. İnsanlar, derin anlayışın ve çözümler bulma yeteneğinden dolayı sana başvurur. İster bir ekiple çalış ister kendi projelerini yürüt ister daha büyük bir organizasyona katkıda bulun, gücün, başkalarının güvenebileceği sağlam, deneyime dayalı içgörüler sunmada yatar."
    var is_y_r_s3_1 = "Fırsatlar ve Zorluklar"
    var is_y_r_s3_1_1 = "Fırsatların, zorluklarla doğrudan yüzleşme isteğinden doğabilir. Yeni fikirleri veya süreçleri keşfetme, test etme ve geliştirme fırsatın olduğu durumlarda gelişir, ilerlersin. Henüz sağlam bir temel oluşturmadığında kendini güvensiz hissettiğin zamanlar olabilir. Bu hissiyat kendini geliştirme sürecinin bir parçasıdır—rolün, bu temeli deneyimlerinle inşa etmektir. Zamanla, bu zorluklar uzmanlık yolundaki basamak taşların haline gelecektir."
    var is_y_r_s3_2 = "Hayat Amacını Gerçekleştirmek"
    var is_y_r_s3_2_1 = "Rolün, deneyimlerini kullanarak güçlü yönlerinle uyumlu bir hayat ve kariyer inşa etmekle ilgilidir. Yolculuğun boyunca karşılaştığın iniş ve çıkışlar sayesinde, alanında ustalık kazanmaya devam edeceksin. Öğrendiklerini paylaşarak ve anlayışına sıkı sıkıya tutunarak, başkalarına değerli içgörüler sunarak hayat amacını doğal olarak yerine getireceksin. İster kariyerine yeni başlıyor ol, ister yolunda çok ilerlemiş ol, rolünü benimsemek daha fazla özgüven, tatmin ve başarıya ulaşmanı sağlayacaktır."

    var is_y_r_s2_0 = "Otorite/Etkileyici" //burası sanırım basılmayacak
    var is_y_r_s2_1 = "Bilge Bağlanıcı"
    var is_y_r_s2_1_1 = "Kendini alanında bir uzman olarak kanıtlama ihtiyacı ve bilgilerini, içgörülerini başkalarıyla paylaşma arzusu seni yönlendirir. Doğal olarak meraklısın ve ilgi duyduğun herhangi bir konunun temellerini araştırmayı ve anlamayı seversin. Sağlam bir temel oluşturduktan sonra, öğrendiklerini paylaşarak başkalarını etkilemekten ve yönlendirmekten keyif alırsın. Yolculuğun hem konunda ustalaşmayı hem de fikirlerini yaymak ve etkilemek için doğal ağ kurma yeteneğini kullanmayı içerir."
    var is_y_r_s2_2 = "İş Hayatında ve Kariyerde Güçlü Yönlerin"
    var is_y_r_s2_2_1 = "Gücün, konuları derinlemesine araştırma ve ardından bulgularını başkalarıyla bağlantı kurabilecek şekilde iletişim kurma yeteneğinde yatar. İş dünyasında, ilişkiler kurmakta ve uzmanlığından faydalanabilecek insanlarla ağ oluşturmakta başarılısın. Fikirlerini meslektaşlarınla paylaşmak, bir projeye katkıda bulunmak ya da bir ekibi yönlendirmek olsun, doğal etki yaratma yeteneğin seni önemli bir oyuncu yapar. Kişisel bilginle sosyal bağlantılarını birleştirme yeteneğin, seni hem otorite hem de iş dünyasında güvenilen bir kaynak olarak öne çıkarır."
    var is_y_r_s2_3 = "Otorite ve Etkileyici Olma"
    var is_y_r_s2_3_1 = "Otorite olmak, doğal ilerlemenle birlikte gelir ve gücün aynı zamanda başkalarını etkileme yeteneğinde de yatar. İnsanlar, uzmanlığına ve samimi, yaklaşılabilir doğana çekilir. Güçlü ağlar kurma eğilimindesin ve fırsatlar genellikle bu bağlantılar aracılığıyla sana gelir. İster kendi başına çalış ister bir ekibin parçası ol, başarın, derin bilginle başkaları üzerinde etkili olma ve yakın çevrenle bağlantı kurma yeteneğinden gelir. Güçlü bir temel ile sosyal etkinizi birleştirerek, çevreni şekillendirme ve kendin için fırsatlar yaratma potansiyeline sahipsin."
    var is_y_r_s3_1 = "Fırsatlar ve Zorluklar"
    var is_y_r_s3_1_1 = "Fırsatların hem sağlam bilgin hem de bağlantıların sayesinde gelir. Bir konuyu derinlemesine öğrenip ardından bu bilgiyi başkalarıyla paylaşabileceğin durumlarda gelişirsin. Fikir sunmak, meslektaşlarına mentorluk etmek veya bir projeyi yönetmek olsun, başkalarıyla iletişim kurma ve bağlantı sağlama yeteneğin seni farklı kılar. Doğal arkadaş canlılığını yalnız kalma ihtiyacıyla dengelemek önemlidir. Bazen insanlar yorgunluğu veya sürekli 'aktif' olma baskısı seni zorlayabilir, bu yüzden kendine zaman ayırmayı ve enerjini yenilemeyi unutma."
    var is_y_r_s3_2 = "Hayat Amacını Gerçekleştirmek"
    var is_y_r_s3_2_1 = "Rolün, alanında ustalaşmak ve ardından bu bilgiyi başkalarının yararına olacak şekilde paylaşmakla ilgilidir. Hayat amacını, bir başvuru kaynağı haline gelerek ve ağlarını fikirler ve çözümler yaymak için kullanarak gerçekleştirirsin. Rolünle uyum içinde olduğunda, kariyerinin ve hayatının doğal olarak başkalarını etkileme fırsatlarını sana sunduğunu fark edeceksin. İster kariyerine yeni başlıyor ol, ister halihazırda yerleşmiş ol, rolünün hem otorite hem de etkileyici taraflarını benimsemek, tatmin edici ve etkili bir kariyere yol açacaktır."

    var is_y_r_s2_0 = "Doğal/Etkileyici" //burası sanırım basılmayacak
    var is_y_r_s2_1 = "Yetenekli Bağ Kurucu"
    var is_y_r_s2_1_1 = "Doğuştan gelen yeteneklere sahipsin ve bu yetenekler senin için çabasız gibi görünse bile başkaları onları kolayca fark eder. Bu yetenekler o kadar doğal gelir ki bazen onları göz ardı edebilirsin, ancak başkaları uzmanlığını paylaşman için sık sık sana başvurur. Rolün, doğal yeteneklerini benimsemek ve başkalarıyla anlamlı bağlantılar kurmak arasında bir denge bulmakla ilgilidir. İlgi alanlarına odaklanmak için yalnız kalmayı seviyorsun, ancak etkilerin yakın çevrenle etkileşim kurduğunda artar."
    var is_y_r_s2_2 = "İş Hayatında ve Kariyerde Güçlü Yönlerin"
    var is_y_r_s2_2_1 = "Derin, kişisel bağlantılar kurma yeteneğin, kariyer ve iş fırsatlarını doğal olarak sana çeker. Öne çıkmak için çok çalışmana gerek kalmaz; sana kolay ve doğal gelen şeylere sadık kaldığında başarılı olursun. Bu da seni ister bağımsız çalış ister bir ekibin parçası ol, değerli kılar. Hem yalnız çalışmalarda hem de sosyal ortamlarda rahatça hareket edebilir ve iş dünyasında oluşturduğun güven ve getirdiğin yetenekler sayesinde başarı elde edersin."
    var is_y_r_s2_3 = "Doğal / Etkileyici Olmak"
    var is_y_r_s2_3_1 = "Liderlik ya da etki peşinde koşmana gerek yok—bu, başkalarının seni takdir etmesiyle sana gelir. Çaba gerektirmeyen şeylere odaklanarak, doğal yeteneklerinin parlamasına izin verirsin. İnsanlar sıcaklığına ve samimiyetine çekilir ve etkilerin ilişkilerin aracılığıyla doğal olarak büyür. Başarı, fırsatların ağların aracılığıyla sana akmasına izin verdiğinde ve doğal güçlü yönlerinle uyumlu rolleri üstlendiğinde gelir."
    var is_y_r_s3_1 = "Fırsatlar ve Zorluklar"
    var is_y_r_s3_1_1 = "En büyük fırsatların, başkalarının yeteneklerini fark edip bunları paylaşman için seni davet etmesiyle ortaya çıkar. Yeteneklerinin yeterli olduğuna güvenmeli ve zorlayıcı rolleri üstlenmekten kaçınmalısın. Bazen başkalarıyla derin bağlantıların, insanlardan yorulmana neden olabilir ya da her zaman ulaşılabilir olma baskısı hissedebilirsin. Yalnızlık ile sosyal etkileşim arasındaki dengeyi koruman, enerjini yüksek tutmak ve uzun vadeli başarıyı sağlamak için çok önemlidir."
    var is_y_r_S3_2 = "Hayat Amacını Gerçekleştirmek"
    var is_y_r_S3_2_1 = "Rolün, yeteneklerini otantik ve sana uygun bir şekilde paylaşmakla ilgilidir. Doğal yeteneklerinle uyumlu fırsatlara kendini davet ettirerek, kendini zorlamadan tatmin edici bir kariyer veya iş hayatı yaratabilirsin. Doğal yeteneklerine güven ve başkalarının değerinin farkına varmasına izin ver. Bu yaklaşım hem etkili hem de tatmin edici bir kariyer ve yaşam yoluna seni götürecektir."

    var is_y_r_s2_0 = "Doğal/Haberci" //burası sanırım basılmayacak
    var is_y_r_s2_1 = "Yetenekli Çözüm Yaratıcı"
    var is_y_r_s2_1_1 = "Derin, doğal yeteneklere sahipsin ve bu yetenekler genellikle senin farkına varmadığın ama başkaları tarafından büyük değer verilen yeteneklerdir. Yeteneklerin, özellikle pratik çözümlere ihtiyaç duyulduğunda, başkalarının yardımına başvurduğu anlarda kendini gösterir. Sessiz ve bağımsız çalışmayı tercih etsen de içgörülerinin büyük bir etki yaratabileceği durumlara sıkça çekilirsin. Rolün, yalnız kalma arzun ile başkalarına değerli çözümler sunma ve iletişim kurma yeteneğin arasında bir denge kurmayı gerektirir. "
    var is_y_r_s2_2 = "İş Hayatında ve Kariyerde Güçlü Yönlerin"
    var is_y_r_s2_2_1 = "Gücün, ihtiyaç duyulduğunda yenilikçi ve pratik çözümler sunabilme yeteneğinde yatar. Takdir edilmeyi aramana gerek yoktur—etkin, başkalarının yeteneklerini fark edip onları paylaşman için sana başvurduğunda büyür. Problem çözmede başarılısın ve genellikle “düzeltici” olarak görülürsün; gerekli içgörüleri sunar ve sonra sessiz, düşünceli çalışma alanına geri dönersin. Bu yetenek, pratik ve zamanında çözümlerin kritik olduğu iş ortamlarında seni vazgeçilmez kılar."
    var is_y_r_s2_3 = "Doğal / Haberci Olmak"
    var is_y_r_s2_3_1 = "Rolün, başkalarının seni fark etmesiyle doğal olarak ortaya çıkar. Dikkat çekmek ya da görüşlerini başkalarına dayatmaya çalışan biri değilsin. Bunun yerine, başkaları senin derin ve pratik tavsiyeler sunma yeteneğini fark ettiğinde etkin artar. Sana ihtiyaç duyulduğunda, devreye girer, etkili çözümler sunar ve sonra doğal ritmine geri dönersin. Başarı, sürecine güvenip başkalarının en çok ihtiyaç duyduğu anda uzmanlığını aramalarına izin verdiğinde gelir."
    var is_y_r_s3_1 = "Fırsatlar ve Zorluklar"
    var is_y_r_s3_1_1 = "Fırsatların genellikle insanların, sorunlarını çözmelerine yardımcı olabileceğine inandıkları zaman beklentilerini sana yansıttıkları anlarda ortaya çıkar. Bu yansıtma hem bir fırsat hem de bir zorluk olabilir, çünkü bazen bunlar seni bunaltıcı veya zorlayıcı hissettirebilir. Görevin, hangi fırsatların gerçek yeteneklerinle uyumlu olduğunu ve hangilerinin enerjini tüketebileceğini ayırt etmektir. Yalnız kalma ihtiyacın ile başkalarına çözüm sunma eğilimin arasında denge kurmak, başarıyı sürdürülebilir kılmanın anahtarıdır."
    var is_y_r_s3_2 = "Hayat Amacını Gerçekleştirmek"
    var is_y_r_s3_2_1 = "Rolün, yeteneklerinin doğru insanlar tarafından doğru zamanda fark edileceğine güvenmekle ilgilidir. Hayat amacını, en çok ihtiyaç duyulduğunda pratik çözümler sunarak ve katkıda bulunduktan sonra kendine geri çekilme alanı tanıyarak gerçekleştirirsin. Takdirin akışına güvenip doğru hissettiren fırsatlarla uyum sağlayarak ve ne zaman geri çekileceğini bilerek kariyerinde ve kişisel hayatında tatmin bulacaksın. Başarı, doğal yeteneklerini zorlamadan kabul ettiğinde gelir."

    var is_y_r_s2_0 = "Öncü/Haberci" //burası sanırım basılmayacak
    var is_y_r_s2_1 = "Keşfeden Çözümcü"
    var is_y_r_s2_1_1 = "Değişimin doğal bir temsilcisisin. Neyin işe yarayıp yaramadığını kişisel deneyimlerle keşfetmeye yönelirsin ve genellikle deneme yanılma yoluyla öğrenirsin. Bu pratik yaklaşım, başkalarının fark edemediği pratik çözümleri bulmana olanak tanır. Dayanıklısın, uyum sağlarsın ve hayatın karşına çıkardığı zorluklardan öğrenebilirsin. Bir kez neyin işe yaradığını keşfettiğinde, bu içgörüleri başkalarıyla paylaşırsın, bu da seni ihtiyaç anlarında değerli bir kaynak haline getirir. "
    var is_y_r_s2_2 = "İş Hayatında ve Kariyerde Güçlü Yönlerin"
    var is_y_r_s2_2_1 = "Gücün, süreçleri deneme ve geliştirme yeteneğinde yatar, ta ki neyin işe yaradığını bulana kadar. Yenilik ve pratik çözümlerin gerektiği durumlarda başarılı olursun ve risk almaktan ya da hata yapmaktan korkmazsın. İş dünyasında, insanlar sık sık, özellikle başkaları bir çözüm bulmakta zorlandığında, senin sorunları çözme yeteneğine güvenir. Dayanıklılığın ve cevap bulma konusundaki kararlılığın seni diğerlerinden ayırır ve bulgularını başkalarına iletme yeteneğin, seni herhangi bir ekip veya organizasyonda kilit bir katılımcı yapar."
    var is_y_r_s2_3 = "Öncü / Haberci Olmak"
    var is_y_r_s2_3_1 = "Rolün, yeni çözümler bulmanın yanı sıra, bunları başkalarıyla paylaşmayı da içerir. Farklı fikirleri test etmeye, uyarlamaya ve deney yapmaya doğal bir eğilimin vardır ve bir kez işe yarayan bir şey bulduğunda, bunu yaymaya hevesli olursun. Etkin, tanınma arzusundan değil, sunduğun pratik çözümlerden gelir. Yeni bakış açıları masaya getirip bilgilerin ve deneyimlerinle başkalarına yardımcı olabildiğinde gelişirsin."
    var is_y_r_s3_1 = "Fırsatlar ve Zorluklar"
    var is_y_r_s3_1_1 = "Fırsatlar genellikle zorluklar veya krizler şeklinde gelebilir. Bir şeylerin neden yanlış gittiğini anlamaya ve bunları nasıl düzelteceğini bulmaya çalışırken en iyi performansını sergilersin, süreçte ellerini kirletmekten çekinmezsin. Ancak, sürekli deneme ve öğrenme arzun, kendine dinlenme zamanı vermezsen tükenmişliğe yol açabilir. Keşif ihtiyacın ile kendine özen gösterme ihtiyacın arasındaki dengeyi korumak, enerjini ve odaklanmanı sürdürmek için çok önemlidir."
    var is_y_r_s3_2 = "Hayat Amacını Gerçekleştirmek"
    var is_y_r_s3_2_1 = "Rolün, deneyimlerini kullanarak pratik çözümler bulmak ve ardından bu içgörüleri başkalarıyla paylaşmaktır. Hayat amacını, zorlukları kucaklayarak, onlardan öğrenerek ve başkalarına bilgeliğinle yardımcı olarak yerine getirirsin. İster iş hayatında ister kişisel yaşamında olsun, belirsizlik zamanlarında başkalarının başvurduğu birisin. Çözümler bulma ve bunları etkili bir şekilde paylaşma yeteneğine güvenerek, tatmin edici ve etkili bir kariyer yaratacaksın. Başarı, güçlü yönlerine yaslandığında ve doğal problem çözme yeteneklerinin parlamasına izin verdiğinde gelir."

    var is_y_r_s2_0 = "Öncü/Lider" //burası sanırım basılmayacak
    var is_y_r_s2_1 = "Keşifçi Rol Model"
    var is_y_r_s2_1_1 = "Hayatın, deneyimlerinden sürekli öğrenip geliştiğin bir dizi aşama boyunca ilerler. Hayatının başlarında deneme yanılma yöntemiyle öğrenir, neyin işe yarayıp neyin yaramadığını bizzat yaşayarak keşfedersin. Bu deneyimler, seni pratik bir problem çözücü yaparak derin içgörüler kazanmana yardımcı olur. Olgunlaştıkça, aktif bir katılımcı olmaktan daha bağımsız bir gözlemci ve lider olmaya geçersin. Bu benzersiz yolculuğun, başkalarına rehberlik ederken onlara gerçek dünya deneyimlerinden kazandığın bilgileri sunmanı sağlar."
    var is_y_r_s2_2 = "İş Hayatında ve Kariyerde Güçlü Yönlerin"
    var is_y_r_s2_2_1 = "Gücün, deneyimlerden öğrenme ve uyum sağlama yeteneğinde yatar. İş dünyasında, zorluklarla yüzleşmek ve yenilikçi çözümler bulmakta mükemmelsin. Kariyerinin ilk yıllarında, daha çok deneme ve hatalardan öğrenmeye odaklanabilirsin, ancak zamanla, başkalarının rehberlik ve liderlik için başvurduğu biri haline gelirsin. Kendi deneyimlerinden kaynaklanan bilgelik, stratejik düşünme ve problem çözmenin gerektiği her organizasyonda seni değerli bir kaynak yapar."
    var is_y_r_s2_3 = "Öncü / Lider Olmak"
    var is_y_r_s2_3_1 = "Rolün, önce deneme yanılma yöntemiyle öğrenme ve ardından bir liderlik pozisyonuna geçme sürecini içerir. Olgunlaştıkça, uygulamalı bir rolden gözlemleyici, analiz eden ve başkalarına mentorluk yapan bir role doğal olarak geçersin. Liderliği zorlamana gerek yoktur—başkaları senin büyük resmi görme yeteneğini fark ettikçe ve seni rehber olarak kabul ettikçe kendiliğinden ortaya çıkar. Liderlik tarzın, deneyime ve neyin işe yaradığını derinlemesine anlama üzerine kuruludur."
    var is_y_r_s3_1 = "Fırsatlar ve Zorluklar"
    var is_y_r_s3_1_1 = "Fırsatlar, hayatın erken dönemlerinde zorluklarla yüzleşme ve bunlardan öğrenme yeteneğinden gelir. Deneme yapma, sorun çözme ve büyüme fırsatlarının olduğu ortamlarda gelişirsin. Liderlik odaklı bir aşamaya geçtikçe, insanlar doğal olarak tavsiyen için sana başvurur, seni güvenilir bir rehber olarak görür."
    var is_y_r_s3_2 = "Hayat Amacını Gerçekleştirmek"
    var is_y_r_s3_2_1 = "Rolün, deneyimlerinden öğrenmek ve bu bilgiyi başkalarına rehberlik etmek için kullanmakla ilgilidir. Hem kişisel gelişiminde hem de profesyonel yolculuğunda hayatın sana sunduğu dersleri kucaklayarak hayat amacını yerine getirirsin. Hayatın farklı aşamalarından geçerken, uyum sağlama ve gelişme yeteneğin seni etkili bir lider yapar. İster aktif olarak sorunları çöz, ister stratejik tavsiyeler sun, katkıların başkalarına kendi yollarını bulmalarında yardımcı olur. Başarı, sürecine güvenip liderliğinin doğal olarak ortaya çıkmasına izin verdiğinde gelir."




    // İletişim 
    //12-25
    var ai_iletisim_ve_etkilesim_0 = 'İLETİŞİM VE ETKİLEŞİM TARZIN'
    var ai_iletisim_ve_etkilesim_1 = 'Kariyerinde ve işinde başarılı olmak için, başkalarıyla etkileşim kurma sanatını öğrenmen çok önemli. Çevrendeki insanları nasıl etkilediğini anlamak ve kişiler arası dinamikleri yönetmeyi öğrenmek, başarını büyük ölçüde etkileyebilir. Etkileşim ve İletişim Dinamiğininin farkına vardığında, başkalarıyla kolayca iletişim kurma yeteneği kazanır, dirençleri ortadan kaldırır ve daha akıcı bir iletişim ortamı yaratabilirsin. '
    var ai_iletisim_ve_etkilesim_2 = 'ENERJİK'
    var ai_iletisim_ve_etkilesim_3 = 'Etkili iletişimin merkezinde, sessiz bir iletişimci olarak hareket eden, başkalarını ve fırsatları sana çeken sözsüz varlığın var. Açık ve saran varlığın bir mıknatıs gibi davranır, doğal olarak insanları kendine çeker ve verimli etkileşimlerin yolunu açar. '
    var ai_iletisim_ve_etkilesim_4 = 'Başkalarıyla Başarılı Etkileşimlerin Anahtarı... '
    var ai_iletisim_ve_etkilesim_5 = 'Etkileşimde bulunmadan önce yanıt vermek için bekle:'
    var ai_iletisim_ve_etkilesim_6 = 'Etkileşimleri başlatmaktan kaçınarak ve bunun yerine yanıt vermeyi bekleyerek iletişim kanallarını açar ve direnci ortadan kaldırabilirsin. Farkındalığını açmak, fırsatları ortaya çıktıkça gözlemlemek ve başkalarıyla etkileşime girmeden önce sezgilerini dinlemek için pratik yapabilirsin. '
    var ai_iletisim_ve_etkilesim_7 = 'Doğru Hissettiren Şeylere Yanıt Ver: '
    var ai_iletisim_ve_etkilesim_8 = 'İç güdülerine güven ve seninle rezonansa giren şeylere olanak tanıyan durumlara yanıt vermeye çalış. Seni neyin heyecanlandırdığına ve değerlerinle uyumlu olduğuna dikkat et, gerçek coşkunun etkileşimlerine rehberlik etmesine izin ver. '
    var ai_iletisim_ve_etkilesim_9 = 'Başlatma - yalnızca önce yanıt verdikten sonra etkileşime geç:'
    var ai_iletisim_ve_etkilesim_10 = 'Etkileşim başlatmak yerine, kişisel tercihlerin ve hedeflerinle uyumlu davetlere ve fırsatlara yanıt vermeye odaklan. Etkileşimlerin organik olarak ortaya çıkmasına izin vererek, karşılıklı anlayış ve saygıya dayanan özgün bağlantılar oluştururabilirsin. '
    var ai_iletisim_ve_etkilesim_11= 'İş yerinde etkili iletişim ve katılım '
    var ai_iletisim_ve_etkilesim_12 = 'Doğal Manyetizmandan Yararlan: İnsanları varlığınla içine çekme konusundaki doğuştan gelen yeteneğin büyük bir varlık. İşyerinde, sürekli olarak ulaşılabilir olarak bu manyetizmanın senin için çalışmasına izin ver. İş arkadaşların doğal olarak sana yönelecek, projelerde girdilerini ve desteğini arayacak ve girişimleri ileriye taşıyan enerjiyi sağlama yeteneğini kabul edeceklerdir. '
    var ai_iletisim_ve_etkilesim_13 = 'Niyetle Yanıt Ver: Harekete geçmek cazip gelse de, gücünün yanıt olarak yattığını unutma. Aktif dinleme pratiği yapabilir ve seni gerçekten heyecanlandıran ve değerlerinle uyumlu projelerle meşgul olabilirsin. Başlatmak yerine yanıt verdiğinde, çabalarının daha etkili olduğu ve temel katkılar olarak kabul edildiği bir dinamik yaratma olasılığın çok daha fazla. '
    var ai_iletisim_ve_etkilesim_14 = 'Net Sınırlar Oluştur: Görevleri üstlenme kapasiten ve istekliliğin konusunda net ol. Bu, aşırı taahhütte bulunmamanı sağlar ve enerjini en üretken olabileceğin görevlere yönlendirmene olanak tanır. Kapasiten dahilinde çalıştığında, işteki memnuniyetin artar ve bu doğal olarak senin mutluluğunu ve başarını etkiler. '
    var ai_iletisim_ve_etkilesim_15 = 'Katılımda Coşku Göster: Katılmayı seçtiğinde, bunu belirgin bir coşkuyla göster. Enerjin bulaşıcıdır ve ekibine ilham verebilir ve onları motive edebilir. İş için gerçek heyecanının etkileşimlerine rehberlik etmesine izin ver, bunun ekip dinamiklerin içinde daha da önemli hale geldiğinizi göreceksiniz. '
    var ai_iletisim_ve_etkilesim_16 = 'Kendini Değerlendirme'
    var ai_iletisim_ve_etkilesim_17 = 'Enerjik'
    var ai_iletisim_ve_etkilesim_18 = 'Etkileşimlerde bulunmadan önce yanıt vermek için bekliyor musun? Sezgilerini dinleyip, doğru zamanın gelmesini nasıl fark edebilirsin? '
    var ai_iletisim_ve_etkilesim_19 = 'Seni gerçekten heyecanlandıran şeylere yanıt veriyor musun? İçgüdülerine güvenip, sadece seninle uyumlu olan fırsatları seçmek için neler yapabilirsin? '
    var ai_iletisim_ve_etkilesim_20 = 'Etkileşim başlatmadan önce gerçekten yanıt verdiğinden emin oluyor musun? Bu yaklaşımı iş ve sosyal hayatında nasıl daha fazla uygulayabilirsin? '
    var ai_iletisim_ve_etkilesim_21 = 'İnsanların doğal olarak sana yöneldiğini fark ediyor musun? Doğal manyetizman sayesinde iş yerinde daha verimli etkileşimler yaratmak için hangi yolları izleyebilirsin? '
    var ai_iletisim_ve_etkilesim_22 = 'İş yerinde doğru projelere yanıt verip, enerjini doğru yerlere yönlendirdiğinden emin misin? Seni en çok tatmin eden işleri bulmak için hangi stratejileri uygulayabilirsin? '
    var ai_iletisim_ve_etkilesim_23 = 'Rehber'
    var ai_iletisim_ve_etkilesim_24 = 'Senin için etkili iletişimin merkezinde, ince ama güçlü bir güç olan sözsüz varlığın var. Başkalarını doğal olarak sana çeken açık, odaklanmış ve emici bir varlığın var. Bu manyetik kalite, dikkat talep etmek zorunda kalmadan başkaları tarafından tanınmak üzere tasarlandığın anlamına gelir. '
    var ai_iletisim_ve_etkilesim_25 = 'Başkalarıyla Başarılı Etkileşimlerin Anahtarı... '
    var ai_iletisim_ve_etkilesim_26 = 'Katılmadan Önce Tanınma ve Davet Bekle: Tanınma konusunda başarılı olursun. Katılmadan önce, becerilerin, yeteneklerin ve rehberlik etme ve liderlik etme kapasiten için fark edildiğinden ve kabul edildiğinden emin ol. Bu, etkileşimlerinin özgün ve tanınmış bir temele dayanmasını sağlar. '
    var ai_iletisim_ve_etkilesim_27 = 'Tanınma ve Davet: Çevrene uyum sağla ve yoluna çıkan fırsatlara açık ol. Aldığın tanınma ve davetle bir rezonans hissettiğinde bu fırsatların doğru olduğunu bileceksin. Birisi büyük resmi görme yeteneklerini tanıyacak ve seni rehber niteliklerinle uyumlu bir role, projeye veya ortaklığa davet edecektir. '
    var ai_iletisim_ve_etkilesim_28 = 'Tanındığında ve Davet Edildiğinde Etkileşim Kur: Katkıların tanınma ve ardından bir davet yoluyla istendiğinde, bu, etkileşim kurman için ipucudur. İç görülerine ve rehberliğine değer veren birinin takdiri, beklediğin sinyaldir. Bu sadece karar verme stratejininin ilk kısmı değil, aynı zamanda önündeki fırsatın doğru olmasını sağlamanın anahtarıdır. '
    var ai_iletisim_ve_etkilesim_29 = 'Sabırlı Yanını Güçlendir: Yönlendirme ve organize etme konusunda istekli olsan da, devreye girmek için sabırlı olman önemlidir. Dikkatle dinlemeyi alışkanlık haline getirmen  ve fikirlerini yalnızca davet edildiğini hissettiğinde paylaşman önemli—bu bir baş selamı, meraklı bir bakış, konuşmada bir duraklama ya da doğrudan görüşünü paylaşman için yapılan bir davet olabilir. Genellikle bu tür anlarda, diğerlerinden gelen onayla devreye girmen gerektiğini anlarsın. '
    var ai_iletisim_ve_etkilesim_30 = 'Davetlerde Ayırt Etme Gücüyle Gezin: Projelere liderlik etme, yeni roller üstlenme veya ekiplere katılma davetleri ortaya çıktığında, onlara ayırt edici bir şekilde yaklaşman lazım. Uzmanlığın ve içsel bilgeliğinle gerçekten rezonansa girenleri kabul etmeli ve uymayanları red etmelisin. Enerjinim çabaları yerine getirmeye yatırıldığından emin olun. '
    var ai_iletisim_ve_etkilesim_31 = 'Bire Bir Etkileşimlerden Yararlan: Rehberler bire bir ortamlarda parlar. İlişkileri derinleştirmek ve iş arkadaşlarının ihtiyaçlarını anlamak için bireysel etkileşimleri kullanman daha doğru olur. Bu bağlantılar sayesinde, sana rehberlik etmek için doğru zamanı işaret eden tanınma ve davetleri sık sık bulacaksın. '
    var ai_iletisim_ve_etkilesim_32 = 'Tanınmaya Açık Olduğunuzu Göster: Katkıda bulunma fırsatlarını memnuniyetle karşıladığını incelikle bil. Bu, projelere ilgi göstererek veya ulaşılabilir olarak yapılabilir. Açık tavrın, danışman rolünün en etkili olabileceği iş birliklerine davet edilmeye hazır ve istekli olduğunu başkalarına gösterecektir. '
    var ai_iletisim_ve_etkilesim_33 = 'Kendini Değerlendirme'
    var ai_iletisim_ve_etkilesim_34 = 'Tanınma ve davet beklerken ne kadar sabırlı olabiliyorsun? '
    var ai_iletisim_ve_etkilesim_35 = 'Hangi durumlarda aceleyle harekete geçmek yerine, doğru fırsatların sana gelmesini bekleyebilirsin? '
    var ai_iletisim_ve_etkilesim_36 = 'Sana sunulan davetler ve tanınma fırsatlarıyla ne kadar uyum içindesin?'
    var ai_iletisim_ve_etkilesim_37 = 'Bu fırsatların gerçekten seni en iyi yansıttığını nasıl fark edebilirsin? '
    var ai_iletisim_ve_etkilesim_38 = 'Fikirlerini paylaşmadan önce davet edildiğini hissettiğinden emin oluyor musun?'
    var ai_iletisim_ve_etkilesim_39 = 'İlişkilerinde bu ince işaretleri nasıl daha iyi gözlemleyebilirsin? '
    var ai_iletisim_ve_etkilesim_40 = 'Bire bir ilişkilerde nasıl parladığını fark ediyor musun? '
    var ai_iletisim_ve_etkilesim_41 = 'İş arkadaşlarınla daha derin bağlantılar kurmak için hangi yolları izleyebilirsin? '
    var ai_iletisim_ve_etkilesim_42 = 'Projelerde veya rollerde tanınmaya açık olduğunu başkalarına nasıl hissettiriyorsun?'
    var ai_iletisim_ve_etkilesim_43 = 'Ulaşılabilir ve açık tavrını iş yerinde daha etkili bir şekilde nasıl gösterebilirsin? '
    var ai_iletisim_ve_etkilesim_44 = 'Başlatıcı '
    var ai_iletisim_ve_etkilesim_45 = 'Senin varlığın kapalı ve koruyucu, bir kalkan ve mızrak gibi işlev görüyor. İçsel bir güce sahip olup, dışa doğru bir itişle harekete geçiyor ve başkalarını doğrudan etkiliyorsun. Enerjin bazen baskın olarak yanlış anlaşılabilir, ancak bu sadece senin doğal olarak proaktif ve kararlı olma halindir. '
    var ai_iletisim_ve_etkilesim_46 = 'Başkalarıyla Başarılı Etkileşimlerin Anahtarı... '
    var ai_iletisim_ve_etkilesim_47 = 'Bilgilendirme ve Harekete Geçme: İçsel başlatma gücünü başkalarının ihtiyaçları ve sınırlarıyla uyumlu hale getirmek için, harekete geçmeden önce bilgilendirmek çok önemlidir. Bu uygulama sadece direnci azaltmakla kalmaz, aynı zamanda vizyonunu etkili bir şekilde tezahür ettirmek için ihtiyaç duyduğun özgürlüğün yolunu açar. '
    var ai_iletisim_ve_etkilesim_48 = 'Başlatıcı Varlığını Yönet: Başlatıcı enerjinin bazen başkalarını savunmaya geçirebileceğini anlamalısın. İş birliği içinde bir ortam yaratmak için, çevrendekilere niyetlerin ve eylemlerin hakkında önceden bilgi vermeyi öğren. Bu açıklık, insanların motivasyonlarını daha iyi anlamalarına yardımcı olacak ve yanlış anlaşılmaların önüne geçecektir. '
    var ai_iletisim_ve_etkilesim_49 = 'Eşsiz Rolünü Kucakla: Başka hiçbir türün yapamayacağı şekilde "Dışarı Çık ve Gerçekleşmesini Sağla" için benzersiz bir şekilde tasarlandın. Bunu benimse ve başlatma kapasitenin, farkındalıkla ve karar verme stratejinizle uzun süre kullanıldığında en büyük gücün olduğunu unutma. '
    var ai_iletisim_ve_etkilesim_50 = 'İş yerinde etkili iletişim ve katılım '
    var ai_iletisim_ve_etkilesim_51 = 'Bilgilendirmeyi Bir Alışkanlık Olarak Geliştir: İş yerinde, ekibini ve üstlerini planların ve eylemlerin hakkında bilgilendirme alışkanlığını uygulamayı unutma. Bu şeffaflık güven yaratır ve başkalarının girişimlerini daha etkili bir şekilde desteklemesine olanak tanır. '
    var ai_iletisim_ve_etkilesim_52 = 'Başlatma Gücünü Akıllıca Kullan: Başlatma gücünün değişim ve ilerleme için bir katalizör olduğunu kabul et. Projelere liderlik etmek ve harekete geçmek için bu yeteneği kullan, ancak her zaman ekibinin girdilerini ve katkılarını dikkate alan dikkatli bir yaklaşımla. '
    var ai_iletisim_ve_etkilesim_53 = 'Kontrol Edilme Korkusunun Üstesinden Gelmeye Çalış: Bir özerklik ortamı yaratarak altta yatan kontrol edilme korkunu gidermeye çalış. Hareket etme özgürlüğüne sahip olduğunda ve diğerleri bilgilendirildiğinde, direncin azaldığını ve üretkenliğin arttığını göreceksin. '
    var ai_iletisim_ve_etkilesim_54 = 'Direnci İşbirliğine Dönüştür: Direnç fark ettiğinde, bunu bilgilendirme sürecini iyileştirmek için bir fırsat olarak kullanmaya çalış. Açık iletişim, muhalefeti işbirliğine dönüştürebilir, vizyonunu ve yönünün gelişebileceği bir işyerini teşvik edebilir. '
    var ai_iletisim_ve_etkilesim_55 = 'Pratik Yap, Pratik Yap, Pratik Yap: Bilgilendirme sana doğal olarak gelmez, bu yüzden kendini bu beceride ustalaşmaya adaman lazım. Sürtünme olmadan liderlik etme yeteneğinin kilidini açacak ve çevrendekilerin desteği ve iş birliği ile hedeflerini ortaya koyacak olan kilit noktadır. '
    var ai_iletisim_ve_etkilesim_56 = 'Kendini Değerlendirme '
    var ai_iletisim_ve_etkilesim_57 = 'Harekete geçmeden önce çevrendekileri bilgilendiriyor musun? '
    var ai_iletisim_ve_etkilesim_58 = 'Bu bilgilendirme süreci, iş yerinde ve sosyal çevrende direnci azaltmak için nasıl etkili olabilir? '
    var ai_iletisim_ve_etkilesim_59 = 'Başlatıcı enerjinin başkalarını nasıl etkilediğini fark ediyor musun? '
    var ai_iletisim_ve_etkilesim_60 = 'Proaktif yapını daha işbirlikçi bir ortam yaratmak için nasıl kullanabilirsin? '
    var ai_iletisim_ve_etkilesim_61 = 'Kontrol edilme korkunu yenmek için hangi adımları atıyorsun?'
    var ai_iletisim_ve_etkilesim_62 = 'Özerkliğini koruyarak direnci nasıl işbirliğine dönüştürebilirsin? '
    var ai_iletisim_ve_etkilesim_63 = 'Bilgilendirmeyi bir alışkanlık haline getirip, ekip arkadaşlarınla güven oluşturmaya nasıl katkıda bulunabilirsin? '
    var ai_iletisim_ve_etkilesim_64 = 'Bu yaklaşım projelerini ileriye taşımada ne kadar etkili olabilir? '
    var ai_iletisim_ve_etkilesim_65 = 'Başlatıcı gücünü dikkatli bir şekilde kullanarak, ekip arkadaşlarının katkılarını nasıl daha fazla dikkate alabilirsin?'
    var ai_iletisim_ve_etkilesim_66 = 'Bu sayede iş yerinde daha etkili bir lider olabilir misin? '
    var ai_iletisim_ve_etkilesim_67 = 'Yansıtıcı '
    var ai_iletisim_ve_etkilesim_68 = 'Dirençli, ancak çevreyi emmeden örnekleme ve yansıtma yeteneğine sahip bir varlığın var. Sözsüz varlığın sessiz, nazik ve müdahaleci değildir, çevreye ve içindeki insanlara bir ayna görevi görür. '
    var ai_iletisim_ve_etkilesim_69 = 'Başkalarıyla Başarılı Etkileşimlerin Anahtarı... '
    var ai_iletisim_ve_etkilesim_70 = 'Ne Kadar Eşsiz Olduğunu Fark Etmek ve Etkileşime Girmeden Önce Beklemek, Yansıtmak ve Tartışmak: Benzersizliğin, seni olağanüstü derecede nadir ve değerli kılan çevreyi yansıtmak ve örneklemektir. Nüfusun sadece %1ini temsil ettiğini ve dünyayı diğerlerinden farklı gördüğünü kabul etmen gerekiyor. Benzersizliğini kucaklayarak, başkalarıyla güç ve bilgelik dolu bir yerden etkileşime girebilirsin. '
    var ai_iletisim_ve_etkilesim_71 = 'Yansıtıcı Doğanı Anla: Etrafındakileri yansıtma ve büyütme yeteneğin, çevrenin sağlığını objektif olarak gözlemlemene ve değerlendirmene olanak tanır. Etkileşime girmeden önce bekleyip düşündüğünde, direnci ortadan kaldırır ve iç görülerinin alınması ve değerlendirilmesi için alan açarsın. '
    var ai_iletisim_ve_etkilesim_72 = 'Yansıtıcı İç görülerinden Yararlan: Bir Değerlendirici olarak, sana stratejik bir bakış açısı sağlayan kalıpları ve döngüleri gözlemleme konusunda doğuştan gelen bir yeteneğe sahipsin. Çeşitli durumlar üzerinde düşünmek ve düşünceli tartışmalara katılmak için gereken zamanı ayır. İyi düşünülmüş iç görülerinin ekibine ve projelerine katkılarını bilgilendirmesine izin ver. '
    var ai_iletisim_ve_etkilesim_73 = 'İş yerinde etkili iletişim ve katılım  '
    var ai_iletisim_ve_etkilesim_74 = 'İletişimde Sabır ve Derinlik Geliştir: İş yerinde, çevrendeki etkileşimler ve dinamikler üzerinde düşünmek için zaman ayır. Dikkatli değerlendirmen ve benzersiz bakış açın, ekibine ve projelerine fayda sağlayabilecek derin iç görülere yol açabilir. '
    var ai_iletisim_ve_etkilesim_75 = 'İç görülerin İçin Alan Yarat: Başkalarının kendilerini rahatça açabilecekleri bir alan yaratmak için nazik varlığını kullan. Gösterişsiz doğan dürüst diyaloğu teşvik eder, görüşleri örneklemene ve tartışmaların özünü geri yansıtmana olanak tanır, bu da ekibi netlik ve fikir birliğine yönlendirebilir. '
    var ai_iletisim_ve_etkilesim_76 = 'Harekete Geçmeden Önce Bekle, Düşün ve Tartış: Önemli kararlar vermeden önce düşünceli tartışmalara katılmayı alışkanlık haline getirmen gerekir. Düşüncelerin hemen ortaya çıkmaz ve en iyi katkıların, resmin tamamını işlemek ve anlamak için zamanın olduğunda gelir. '
    var ai_iletisim_ve_etkilesim_77 = 'Doğuştan Gelen Bilgeliğinden Yararlan: İç görülerinin ve içsel bilgeliğinin işteki katkılarına rehberlik etmesine izin ver. Bu derin anlayış yerinden konuştuğunuzda, sözlerin ağırlık taşır ve genellikle ekibinin ve kuruluşun için dönüştürücü sonuçlara yol açabilir. '
    var ai_iletisim_ve_etkilesim_78 = 'Kendini Değerlendirme '
    var ai_iletisim_ve_etkilesim_79 = 'Etrafındaki insanları ve ortamları objektif bir şekilde yansıttığını fark ediyor musun?'
    var ai_iletisim_ve_etkilesim_80 = 'Bu yansıtma gücünü iş yerinde veya sosyal çevrende nasıl daha etkili kullanabilirsin? '
    var ai_iletisim_ve_etkilesim_81 = 'Etkileşime girmeden önce bekleyip düşünmek sana nasıl bir içgörü sağlıyor? '
    var ai_iletisim_ve_etkilesim_82 = 'Bu bekleme sürecini hangi durumlarda daha iyi uygulayabilirsin? '
    var ai_iletisim_ve_etkilesim_83 = 'Nazik ve sessiz varlığın, başkalarının kendilerini rahatça ifade etmelerine nasıl yardımcı oluyor?'
    var ai_iletisim_ve_etkilesim_84 = 'Bu özelliğini ekip çalışmalarında daha fazla nasıl kullanabilirsin? '
    var ai_iletisim_ve_etkilesim_85 = 'Yansıtıcı içgörülerini başkalarıyla paylaşmadan önce değerlendirme yapmak için yeterince zaman ayırıyor musun?'
    var ai_iletisim_ve_etkilesim_86 = 'Stratejik bakış açını daha derinleştirmek için ne tür tartışmalar sana faydalı olabilir? '
    var ai_iletisim_ve_etkilesim_87 = 'Çevrenin sağlığını gözlemleme yeteneğin, ekip arkadaşlarına ve projelerine nasıl katkıda bulunuyor?'
    var ai_iletisim_ve_etkilesim_88 = 'Bu içsel bilgeliği iş yerinde daha etkili bir şekilde nasıl ortaya koyabilirsin? '





    //25+



    // AI
    // 12-25
    var ai_12_25_0 = 'Neden AI Yetkinlikleri Önemlidir?';
    var ai_12_25_1 = 'Geleceğin İş Gücü: AI teknolojileri, iş dünyasının her alanına nüfuz etmeye başladı. Sizin yaş grubundaki bireyler, kariyerlerine başlarken ya da üniversite seçimleri yaparken, yapay zeka ve dijital beceriler geleceğin iş fırsatlarını belirleyecek. AI çağında yetişen gençler, bu teknolojilere hakim olduklarında iş dünyasında daha avantajlı hale gelirler.';
    var ai_12_25_2 = 'Problem Çözme ve Yaratıcılık: AI yetkinlikleri, bireylerin karmaşık problemleri çözme ve yeni teknolojilerle yaratıcı çözümler üretme yeteneklerini artırır. Teknolojiye hakim olan gençler, sorunlara farklı açılardan yaklaşabilir ve inovatif düşünme yeteneklerini geliştirir.';
    var ai_12_25_3 = 'Gelişen Sektörler: Sağlık, finans, eğitim, tarım gibi birçok sektörde AI uygulamaları hızla gelişiyor. Bu yaş grubu, yapay zeka bilgisi ve veri analizi gibi yetkinliklerle bu büyüyen sektörlerde iş bulma şansını artırır. Aynı zamanda, kendi girişimcilik fikirlerini bu alanlara entegre ederek fırsat yaratabilirler.';
    var ai_12_25_4 = 'Uyum ve Esneklik: Yapay zeka ve dijitalleşme dünyası sürekli değişiyor. Bu yaş grubundaki bireylerin esneklik ve adaptasyon yetenekleri geliştiğinde, değişen teknolojilere hızla uyum sağlayabilirler. Böylece, AI çağındaki yenilikler karşısında geri kalmazlar.';
    var ai_12_25_5 = "Bu yetkinlikler, AI çağında başarılı olmak ve teknolojiyi verimli bir şekilde kullanabilmek için senin kariyer gelişiminde büyük rol oynar. Hem teknik hem de sosyal becerilerin dengelenmesi, seni geleceğin iş dünyasında rekabetçi bir hale getirecektir. Bu yetkinliklerin geliştirilmesi, senin sadece teknolojiye uyum sağlamanı değil, aynı zamanda kariyerinde de fark yaratmanı sağlar.Yapay zeka çağında, teknik beceriler ve sosyal beceriler dengelenerek kariyer yolculuğuna büyük bir katkıda sağlayabilirsin."

    var ai_12_25_s3_1_1 = "Dijital Okuryazarlık";
    var ai_12_25_s3_1_2 = "Temel Bilgisayar ve Teknoloji Becerileri: Bilgisayar kullanımını, yazılım ve donanım bilgilerini kapsar. Gençler teknolojiyi etkili ve verimli bir şekilde kullanabilmelidir. ";


    // 25+
    var ai_25_0 = "Neden AI Yetkinlikleri Önemlidir?";
    var ai_25_1 = "İş Dünyasında Rekabet Avantajı: AI teknolojileri artık iş dünyasının her alanına nüfuz etti. 25+ yaş grubundaki bireyler, kariyerlerinde yükselmek veya yeni iş fırsatlarını değerlendirmek istiyorsa yapay zeka ve dijital becerilere hakim olmaları kritik hale gelmiştir. AI'yı etkin kullanabilen profesyoneller, iş süreçlerini optimize edebilir ve karar alma mekanizmalarını güçlendirerek rekabet avantajı kazanırlar.";
    var ai_25_2 = "Karmaşık Problem Çözme ve İnovasyon: AI yetkinlikleri, bireylerin iş yerindeki karmaşık problemleri çözme ve yaratıcı çözümler üretme becerilerini artırır.Yapay zeka teknolojilerine hakim olan profesyoneller, iş süreçlerine yenilikçi yaklaşımlar getirerek organizasyonlarına stratejik katkılarda bulunabilirler.Bu yetkinlikler, iş dünyasında inovasyonun kapılarını açar.";
    var ai_25_3 = "Sektörel Dönüşüm ve Yeni Fırsatlar: Sağlık, finans, eğitim ve sanayi gibi birçok sektörde AI uygulamaları hızla büyüyor. Bu yaş grubundaki profesyoneller, yapay zeka ve veri analizi gibi yetkinliklerle iş dünyasında daha fazla fırsat yaratabilir, kariyerlerinde sektörel dönüşümleri yakından takip ederek yükseliş sağlayabilirler. Aynı zamanda, bu teknolojiler sayesinde girişimcilik fırsatlarını da keşfedebilirler.";
    var ai_25_4 = "Uyum ve Esneklik: Yapay zeka ve dijitalleşme hızla gelişiyor. Bu nedenle 25+ yaş grubundaki bireyler, esneklik ve adaptasyon becerilerini güçlendirdiklerinde, iş dünyasında daha sürdürülebilir bir kariyer yoluna sahip olabilirler. AI çağında hızlı değişimlere ayak uydurmak, hem kişisel hem de profesyonel gelişim için büyük bir avantaj sağlar.";

    var ai_25_s3_1_1 = "Dijital Okuryazarlık ";
    var ai_25_s3_1_2 = "Temel Bilgisayar ve Teknoloji Becerileri: Bilgisayar kullanımını, yazılım ve donanım bilgilerini kapsar. Gençler teknolojiyi etkili ve verimli bir şekilde kullanabilmelidir. "
    var ai_25_s3_1_3 = "Yapay Zeka Temelleri: AI'nın ne olduğu, nasıl çalıştığı ve hayatımızı nasıl şekillendirdiği hakkında temel bilgilere sahip olmak giderek önem kazanıyor.";

    var ai_25_s3_2_1 = "Veri Okuryazarlığı";
    var ai_25_s3_2_2 = "Veri Analizi: Verileri toplama, analiz etme ve bu verilerden anlamlı sonuçlar çıkarabilme yeteneği. Günümüz dünyasında kararlar veri odaklı alındığı için bu beceri çok değerlidir.";
    var ai_25_s3_2_3 = "Veri Gizliliği ve Güvenlik: Gençlerin veri güvenliğinin ve gizliliğin önemini anlamaları, kişisel verilerin nasıl korunacağını bilmeleri gereklidir."

    var ai_25_s3_3_1 = "Kodlama ve Programlama";
    var ai_25_s3_3_2 = "Programlama Dilleri: Python, JavaScript gibi temel programlama dillerini öğrenmek, AI geliştirme ve teknolojiyle ilgili işlerde başarılı olmak için önemlidir.";
    var ai_25_s3_3_3 = "Algoritmik Düşünme: Problemleri çözmek için sistematik ve mantıklı yollar geliştirmek, AI çağında temel bir beceridir.";

    var ai_25_s3_4_1 = "Eleştirel Düşünme ve Problem Çözme";
    var ai_25_s3_4_2 = "Analitik Düşünme: Verilerden veya olaylardan anlam çıkarma, çözüm yolları geliştirme yeteneği. AI araçlarını doğru ve etkili bir şekilde kullanabilmek için bu beceri hayati önem taşır. ";
    var ai_25_s3_4_3 = "Yaratıcı Problem Çözme: Yenilikçi ve yaratıcı yollarla çözümler üretebilme, özellikle AI ve teknoloji alanlarında avantaj sağlar.";

    var ai_25_s3_5_1 = "Uyarlanabilirlik ve Sürekli Öğrenme";
    var ai_25_s3_5_2 = "Esneklik: Sürekli değişen teknoloji ve iş dünyasına hızla adapte olabilmek. Yeni AI araçlarını, sistemlerini öğrenme yeteneği önemlidir. ";
    var ai_25_s3_5_3 = "Yaşam Boyu Öğrenme: Teknoloji geliştikçe, yeni beceriler öğrenme ve mevcut becerileri güncelleme yeteneği daha da önem kazanıyor.";

    var ai_25_s3_6_1 = "İletişim ve İşbirliği ";
    var ai_25_s3_6_2 = "Teknik ve İnsan Dili Arasındaki Köprü: AI ve teknoloji alanında çalışırken karmaşık bilgileri sade bir şekilde açıklayabilme yeteneği önemlidir.";
    var ai_25_s3_6_3 = "Takım Çalışması: Özellikle çok disiplinli projelerde işbirliği yapabilmek, AI projelerinde başarıya ulaşmanın anahtarlarından biridir.";

    var ai_25_s3_7_1 = "Etik ve Sosyal Sorumluluk";
    var ai_25_s3_7_2 = "AI Etikleri: Yapay zekanın toplumsal etkileri, karar alma süreçlerindeki rolü ve insanlara olan etkileri konusunda bilinçli olmak.";
    var ai_25_s3_7_3 = "Sosyal Sorumluluk: AI'nın etkilerini anlamak ve bu teknolojiyi sosyal fayda yaratacak şekilde kullanmak, gençlerin sadece teknik anlamda değil, etik anlamda da gelişmiş bireyler olmalarını sağlar.";

    var ai_25_s3_8_1 = "Duygusal Zeka (EQ)";
    var ai_25_s3_8_2 = "Empati ve Duygusal Anlayış: AI ve teknolojik araçlarla yoğun bir şekilde çalışırken, insan ilişkilerini ve duygusal farkındalığı kaybetmemek önemlidir. Liderlik ve yönetim becerileri için duygusal zeka oldukça kıymetlidir.";
    var ai_25_s3_8_3 = "Stres Yönetimi: AI ve dijital dünyada sürekli öğrenme ve adaptasyonun getirdiği stresle başa çıkma becerileri de gelişmelidir.";

    var ai_25_s3_9_1 = "Yenilikçi ve Girişimci Düşünce";
    var ai_25_s3_9_2 = "Girişimcilik: AI çağında yenilikçi iş fikirleri geliştirip bu fikirleri hayata geçirme becerisi.";
    var ai_25_s3_9_3 = "Risk Alma ve Deney Yapma: AI ve teknolojik inovasyonlar genellikle belirsizlik içerir. Bu yüzden gençlerin risk almaya istekli ve deneysel düşünceye açık olmaları gerekir.";

    var ai_25_s4u1_1_1 = "Dijital Okuryazarlık";
    var ai_25_s4u1_1_2 = "Bilgisayar ve teknoloji becerilerinle hangi alanlarda fark yaratabilirsin? Bu becerilerini okul projelerinde ya da gelecekteki kariyerinde nasıl daha etkin kullanabilirsin?";
    var ai_25_s4u1_1_3 = "AI hakkında sahip olduğun temel bilgileri derinleştirip, yapay zekanın gelecekte hangi mesleklerde önemli olacağını ön görebiliyor musun? Bu alanlarda nasıl bir kariyer planlayabilirsin?";

    var ai_25_s4u1_2_1 = "Veri Okuryazarlığı";
    var ai_25_s4u1_2_2 = "Veri Analizi: Verileri toplama, analiz etme ve bu verilerden anlamlı sonuçlar çıkarabilme yeteneği. Günümüz dünyasında kararlar veri odaklı alındığı için bu beceri çok değerlidir. ";
    var ai_25_s4u1_2_3 = "Veri Gizliliği ve Güvenlik: Gençlerin veri güvenliğinin ve gizliliğin önemini anlamaları, kişisel verilerin nasıl korunacağını bilmeleri gereklidir.";

    var ai_25_s4u1_3_1 = "Kodlama ve Programlama";
    var ai_25_s4u1_3_2 = "Programlama Dilleri: Python, JavaScript gibi temel programlama dillerini öğrenmek, AI geliştirme ve teknolojiyle ilgili işlerde başarılı olmak için önemlidir.";
    var ai_25_s4u1_3_3 = "Algoritmik Düşünme: Problemleri çözmek için sistematik ve mantıklı yollar geliştirmek, AI çağında temel bir beceridir.";

    var ai_25_s4u1_4_1 = "Eleştirel Düşünme ve Problem Çözme";
    var ai_25_s4u1_4_2 = "Analitik Düşünme: Verilerden veya olaylardan anlam çıkarma, çözüm yolları geliştirme yeteneği. AI araçlarını doğru ve etkili bir şekilde kullanabilmek için bu beceri hayati önem taşır.";
    var ai_25_s4u1_4_3 = "Yaratıcı Problem Çözme: Yenilikçi ve yaratıcı yollarla çözümler üretebilme, özellikle AI ve teknoloji alanlarında avantaj sağlar.";

    var ai_25_s4u1_5_1 = "Uyarlanabilirlik ve Sürekli Öğrenme";
    var ai_25_s4u1_5_2 = "Esneklik: Sürekli değişen teknoloji ve iş dünyasına hızla adapte olabilmek. Yeni AI araçlarını, sistemlerini öğrenme yeteneği önemlidir. ";
    var ai_25_s4u1_5_3 = "Yaşam Boyu Öğrenme: Teknoloji geliştikçe, yeni beceriler öğrenme ve mevcut becerileri güncelleme yeteneği daha da önem kazanıyor.";

    var ai_25_s4u1_6_1 = "İletişim ve İşbirliği";
    var ai_25_s4u1_6_2 = "Teknik ve İnsan Dili Arasındaki Köprü: AI ve teknoloji alanında çalışırken karmaşık bilgileri sade bir şekilde açıklayabilme yeteneği önemlidir.";
    var ai_25_s4u1_6_3 = "Takım Çalışması: Özellikle çok disiplinli projelerde işbirliği yapabilmek, AI projelerinde başarıya ulaşmanın anahtarlarından biridir.";

    var ai_25_s4u1_7_1 = "Etik ve Sosyal Sorumluluk";
    var ai_25_s4u1_7_2 = "AI Etikleri: Yapay zekanın toplumsal etkileri, karar alma süreçlerindeki rolü ve insanlara olan etkileri konusunda bilinçli olmak. ";
    var ai_25_s4u1_7_3 = "Sosyal Sorumluluk: AI'nın etkilerini anlamak ve bu teknolojiyi sosyal fayda yaratacak şekilde kullanmak, gençlerin sadece teknik anlamda değil, etik anlamda da gelişmiş bireyler olmalarını sağlar.";

    var ai_25_s4u1_8_1 = "Duygusal Zeka (EQ)";
    var ai_25_s4u1_8_2 = "Empati ve Duygusal Anlayış: AI ve teknolojik araçlarla yoğun bir şekilde çalışırken, insan ilişkilerini ve duygusal farkındalığı kaybetmemek önemlidir. Liderlik ve yönetim becerileri için duygusal zeka oldukça kıymetlidir. ";
    var ai_25_s4u1_8_3 = "Stres Yönetimi: AI ve dijital dünyada sürekli öğrenme ve adaptasyonun getirdiği stresle başa çıkma becerileri de gelişmelidir.";

    var ai_25_s4u1_9_1 = "Yenilikçi ve Girişimci Düşünce";
    var ai_25_s4u1_9_2 = "Girişimcilik: AI çağında yenilikçi iş fikirleri geliştirip bu fikirleri hayata geçirme becerisi.";
    var ai_25_s4u1_9_3 = "Risk Alma ve Deney Yapma: AI ve teknolojik inovasyonlar genellikle belirsizlik içerir. Bu yüzden gençlerin risk almaya istekli ve deneysel düşünceye açık olmaları gerekir.";

    var ai_25_s4u2_1_1 = "Dijital Okuryazarlık";
    var ai_25_s4u2_1_2 = "Hangi temel bilgisayar becerilerine sahibim ve bu becerileri daha ileriye taşımak için neler yapabilirim?";
    var ai_25_s4u2_1_3 = "Teknolojiyi günlük yaşantımda nasıl kullanıyorum? Teknolojiyi sadece tüketici olarak mı kullanıyorum, yoksa üretici de olabiliyor muyum?";
    var ai_25_s4u2_1_4 = "Yapay zeka hakkında neler biliyorum? AI'nın hayatımı nasıl etkilediğini anlamaya ne kadar zaman ayırdım?";
    var ai_25_s4u2_1_5 = "Yapay zeka ve onun sunduğu fırsatlar hakkında bilgi edinmek beni heyecanlandırıyor mu? Bu alanda kendimi geliştirmek için hangi adımları atabilirim? ";

    var ai_25_s4u2_2_1 = "Veri Okuryazarlığı";
    var ai_25_s4u2_2_2 = "Bir sorunla karşılaştığımda verilerden nasıl yararlanıyorum? Verilere dayalı kararlar almak işimi nasıl kolaylaştırıyor? ";
    var ai_25_s4u2_2_3 = "Kişisel verilerimi nasıl koruyorum? İnternette gizliliğimi sağlamak için hangi adımları atıyorum?";
    var ai_25_s4u2_2_4 = "Çevrim içi güvenlik ve veri gizliliği konularında ne kadar bilgi sahibiyim? Güvenlik açıkları konusunda farkındalığımı nasıl artırabilirim? ";
    var ai_25_s4u2_2_5 = "Kişisel ve başkalarına ait verileri koruma sorumluluğumun bilincinde miyim? Bu konuda geliştirmem gereken davranışlar neler? ";

    var ai_25_s4u2_3_1 = "Kodlama ve Programlama";
    var ai_25_s4u2_3_2 = "Programlama dilleri öğrenmeye olan ilgim ne düzeyde? Yeni bir dil öğrenmeyi düşündüğümde nereden başlamalıyım? ";
    var ai_25_s4u2_3_3 = "Hangi alanlarda programlama bilgimi daha da geliştirebilirim? Mevcut projelerimde daha etkin olmak için hangi dilleri öğrenmeliyim?";
    var ai_25_s4u2_3_4 = "Problemleri çözmek için hangi adımları izliyorum? Mantıksal düşünme becerilerim ne kadar gelişmiş?";
    var ai_25_s4u2_3_4 = "Algoritmik düşünme yeteneğimi geliştirmek için hangi araçlardan faydalanabilirim? Bu beceriyi iş veya eğitim hayatımda nasıl daha iyi kullanabilirim? ";

    var ai_25_s4u2_4_1 = "Eleştirel Düşünme ve Problem Çözme ";
    var ai_25_s4u2_4_2 = "Karar verirken olaylara nasıl yaklaşırım? Farklı seçenekleri değerlendirme konusunda ne kadar analitik düşünüyorum? ";
    var ai_25_s4u2_4_3 = "Analitik düşünme yeteneğimi geliştirmek için hangi kaynaklardan faydalanıyorum? Zorlu problemlere karşı nasıl bir strateji izliyorum? ";
    var ai_25_s4u2_4_4 = "Yaratıcı düşünceyi nasıl geliştirebilirim? Farklı perspektiflerden bakmayı nasıl öğrenebilirim?";
    var ai_25_s4u2_4_5 = "Teknoloji ve AI kullanarak daha yenilikçi çözümler üretme konusunda ne kadar isteklilik gösteriyorum?";

    var ai_25_s4u2_5_1 = "Uyarlanabilirlik ve Sürekli Öğrenme";
    var ai_25_s4u2_5_2 = "Yeni teknolojilere ve değişen iş dünyasına ne kadar hızlı uyum sağlayabiliyorum? Değişikliklere karşı nasıl tepki veriyorum?";
    var ai_25_s4u2_5_3 = "Yapay zekanın hızlı gelişimi karşısında nasıl esnek olabilirim? İş hayatımda daha uyumlu olmak için hangi adımları atmalıyım?";
    var ai_25_s4u2_5_4 = "Kendimi geliştirmek için ne kadar istekliyim? Teknolojideki yenilikleri takip etme konusunda ne kadar aktifim? ";
    var ai_25_s4u2_5_5 = "Hangi alanlarda kendimi daha fazla geliştirmem gerektiğini düşünüyorum? AI dünyasında öğrenmeye nasıl devam edebilirim? ";

    var ai_25_s4u2_6_1 = "İletişim ve İşbirliği";
    var ai_25_s4u2_6_2 = "Teknik konuları başkalarına açıklarken ne kadar başarılıyım? Kendi bilgimi sade ve anlaşılır hale getirme konusunda ne kadar becerikliyim? ";
    var ai_25_s4u2_6_3 = "Teknik bilgileri ekip arkadaşlarıma veya müşterilere daha net ifade edebilmek için hangi becerileri geliştirmeliyim?";
    var ai_25_s4u2_6_4 = "Takım içinde fikirlerimi paylaşırken ne kadar rahatım? Grup dinamiklerini anlamak ve katkı sağlamak için hangi becerilerimi geliştirmeliyim?";
    var ai_25_s4u2_6_5 = "AI projelerinde ekip üyeleriyle nasıl daha iyi iş birliği yapabilirim? Takım arkadaşlarımın güçlü yanlarını nasıl daha etkili kullanabilirim?";

    var ai_25_s4u2_7_1 = "Etik ve Sosyal Sorumluluk";
    var ai_25_s4u2_7_2 = "AI kullanırken etik sorumluluklarım nelerdir? Bu sorumlulukları daha iyi yönetmek için neler yapmalıyım?";
    var ai_25_s4u2_7_3 = "AI projelerinde etik kararlar alırken, topluma ve çevreme nasıl bir fayda sağlayabilirim? ";
    var ai_25_s4u2_7_4 = "Yapay zeka projelerinde sosyal sorumluluk bilincimi nasıl geliştirebilirim? Toplumun iyiliği için hangi AI projelerine katkı sağlayabilirim? ;
    var ai_25_s4u2_7_5 = "AI teknolojilerinin getirdiği fırsatları toplumsal faydaya nasıl dönüştürebilirim?";

    var ai_25_s4u2_8_1 = "Duygusal Zeka (EQ)";
    var ai_25_s4u2_8_2 = "Yapay zeka ve teknolojiyle çalışırken insan ilişkilerime ne kadar önem veriyorum? Empati yeteneğimi nasıl geliştirebilirim?";
    var ai_25_s4u2_8_3 = "Teknoloji projelerinde duygusal zekamı ne kadar kullanıyorum? İş yerinde daha empatik olabilmek için neler yapabilirim?";
    var ai_25_s4u2_8_4 = "AI ve dijital dünyada sürekli öğrenmenin getirdiği stresle nasıl başa çıkıyorum? Stresle baş etme stratejilerim neler?";
    var ai_25_s4u2_8_5 = "Zorlayıcı projelerde kendimi nasıl rahatlatıyorum? Stres yönetimi konusunda hangi becerilerimi geliştirmeliyim? ";

    var ai_25_s4u2_9_1 = "Yenilikçi ve Girişimci Düşünce";
    var ai_25_s4u2_9_2 = "Yapay zeka ile ilgili yenilikçi iş fikirleri geliştirme konusunda ne kadar istekliyim? Yeni projeler başlatmak için hangi adımları atıyorum? ";
    var ai_25_s4u2_9_3 = "Deneysel düşünce yapısına ne kadar açığım? Yeni fikirleri test etmek için hangi stratejileri uyguluyorum? ";
    var ai_25_s4u2_9_4 = "Belirsizliklerle başa çıkarken nasıl kararlar alıyorum? Risk almanın getirdiği fırsatları nasıl değerlendirebilirim?";
    


    var inputs = {
        p1a4: rawData.find(x => x.name == "kisiselbilgi / isim").string + " " + rawData.find(x => x.name == "kisiselbilgi / soyisim").string,
        p2a3: rawData.find(x => x.name == "kisiselbilgi / isim").string,
        p3a3: hollandData[0].name + " ve " + hollandData[1].name + " kişilik özelliklerinin baskın, " + hollandData[5].name + " özelliğinin daha geri planda olduğu bir yapın var.",
        p3a5: holland.find(x => x.name == hollandData[0].name).nameBig,
        p3a7: holland.find(x => x.name == hollandData[0].name).value.description,
        p3a9: holland.find(x => x.name == hollandData[0].name).value.feature,
        p3a6: holland.find(x => x.name == hollandData[1].name).nameBig,
        p3a8: holland.find(x => x.name == hollandData[1].name).value.description,
        p3a10: holland.find(x => x.name == hollandData[1].name).value.feature,
        p4a2: big5.find(x => x.name == big5Data[0].name).value.karakter + "\n" + big5.find(x => x.name == big5Data[1].name).value.karakter + "\n" + big5.find(x => x.name == big5Data[2].name).value.karakter,//"des",
        p4a3: big5.find(x => x.name == big5Data[0].name).value.arti + "\n" + big5.find(x => x.name == big5Data[1].name).value.arti + "\n" + big5.find(x => x.name == big5Data[2].name).value.arti,//"+",
        p4a4: big5.find(x => x.name == big5Data[0].name).value.eksi + "\n" + big5.find(x => x.name == big5Data[1].name).value.eksi + "\n" + big5.find(x => x.name == big5Data[2].name).value.eksi,//"-"
        p5a2: type.find(x => x.name == api.Properties.Type[0]).value,
        p5b1: rawData.find(x => x.name == "kisiselbilgi / cinsiyet").string == "Erkek" ? type.find(x => x.name == api.Properties.Type[0]).images[1] : type.find(x => x.name == api.Properties.Type[0]).images[0],
        p6a5: definition.find(x => x.name == api.Properties.Definition[0]).title,
        p6a6: definition.find(x => x.name == api.Properties.Definition[0]).value,
        p7a2: profile.find(x => x.name == api.Properties.Profile[0]).value1,
        p7a3: profile.find(x => x.name == api.Properties.Profile[0]).value2,
        p7b1: profile.find(x => x.name == api.Properties.Profile[0]).image,
        p9a4: strategy?.find(x => x.name === api.Properties.Strategy[0])?.value?.find(y => y.name === api.Properties.InnerAuthority[0])?.value ?? api.Properties.Strategy[0] + " " + api.Properties.InnerAuthority[0],
        p8a2: sortedUsageGate[1]?.value ?? "",
        p8b2: sortedUsageGate[1]?.title ?? "",
        p8a3: sortedUsageGate[2]?.value ?? "",
        p8b3: sortedUsageGate[2]?.title ?? "",
        p8a4: sortedUsageGate[4]?.value ?? "",
        p8b4: sortedUsageGate[4]?.title ?? "",
        p8a5: sortedUsageGate[5]?.value ?? "",
        p8b5: sortedUsageGate[5]?.title ?? "",
        p8a10: sortedUsageGate[6]?.value ?? "",
        p8b10: sortedUsageGate[6]?.title ?? "",
        p8a6: sortedUsageGate[0]?.value ?? "",
        p8b6: sortedUsageGate[0]?.title ?? "",
        p8a7: sortedUsageGate[3]?.value ?? "",
        p8b7: sortedUsageGate[3]?.title ?? "",
        p8a8: sortedUsageGate[7]?.value ?? "",
        p8b8: sortedUsageGate[7]?.title ?? "",
        p8a11: sortedUsageGate[8]?.value ?? "",
        p8b11: sortedUsageGate[8]?.title ?? "",
        p8a12: sortedUsageGate[9]?.value ?? "",
        p8b12: sortedUsageGate[9]?.title ?? "",
        p10a3: careerSelectionData.find(x => x.id == careerSelectionLastResult[0].id).value,//"",
        p10a4: careerSelectionData.find(x => x.id == careerSelectionLastResult[1].id).value,//"",
        p10a5: careerSelectionData.find(x => x.id == careerSelectionLastResult[2].id).value,//"",
        p11a3: "Geleneksel",
        p11a4: "Futurist",
        p11a5: careerSelectionData2.find(x => x.id == careerSelectionLastResult[0].id).name,
        p11a6: careerSelectionData2.find(x => x.id == careerSelectionLastResult[1].id).name,
        p11a7: careerSelectionData2.find(x => x.id == careerSelectionLastResult[2].id).name,
        p11a8: careerSelectionData2.find(x => x.id == careerSelectionLastResult[0].id).geleneksel,
        p11a9: careerSelectionData2.find(x => x.id == careerSelectionLastResult[1].id).geleneksel,
        p11a10: careerSelectionData2.find(x => x.id == careerSelectionLastResult[2].id).geleneksel,
        p11a11: careerSelectionData2.find(x => x.id == careerSelectionLastResult[0].id).futurist,
        p11a12: careerSelectionData2.find(x => x.id == careerSelectionLastResult[1].id).futurist,
        p11a13: careerSelectionData2.find(x => x.id == careerSelectionLastResult[2].id).futurist,
        graphbig: bigdataPercent,
        graphholland: hollanddataPercent,
        graphcareer: careerSelectionLastResult
    }
    return res.json(inputs);
};
