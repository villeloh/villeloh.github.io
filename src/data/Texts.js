import React from 'react';

/**
 * All the texts for the page (these should be in a text file, but ehh, this works for such a small 'app').
 */

const Texts = {

  finnishTexts: {

    intro: <div className="intro-text-area">
              <p>Hei,</p>
              <br></br>
              <p>olen <strong>Ville Lohkovuori</strong>, 3. vuoden it-alan opiskelija Metropolia AMK:ssa, Mobile Solutions -linjalla.</p>
              <br></br>
              <p>Etsin tällä hetkellä työpaikkaa harjoittelua varten (toki pidemmäksikin aikaa, 
              mikäli sattuu kunnolla natsaamaan).</p>
              <br></br>
              <p>Yhteydenotot mieluiten LinkedInin kautta. Ideaalinen työpaikkani olisi VR-/AR-painotteinen, 
              mutta huomioin kaikki kiinnostavat tarjoukset.</p>
              <br></br>
              <p>Tässä linkki Github-profiiliini sekä hieman listaa teknologioista, joihin olen tutustunut tähän mennessä:</p>
            </div>,
    body: new Map(
      [
        ['android', ['Android Studio, Kotlin, ARCore -kirjasto', <div className="text-area">
        <p>Katson Android Studion ydinosaamisekseni; ymmärrän useimmat konseptit (Activity, Fragment, Intent, Context, MVP, etc) 
        ja osaan hyödyntää niitä sovellusten rakentamisessa. Kotliniin tuli tutustuttua nyt syyslukukaudella, ja 
        pidän siitä ohjelmointikielenä ehkä eniten tähän mennessä. Teimme kahden miehen tiiminä mobiili-AR-pelin 
        Googlen ARCore -kirjaston avulla.</p>
        <br></br>
        <p>Pelin koululle palautettu versio on testattavissa täällä omassa 
        githubissani ('AR Invaders'); olemme jatkaneet kehitystä ja esittelemme (epävirallisesti) 'upgreidattua' versiota 
        Pre-Slush XR Match Up 2018 -tapahtumassa joulukuun 3. päivänä.</p>
        </div>, false]],
        ['js', ['Javascript, Node.js (+Express.js), React, React Native', <div className="text-area">
        <p>Vaikken vielä ihan tituleeraisikaan itseäni fullstack-devaajaksi, olen tutustunut jo siinä määrin 
        js:ään ja Nodeen, että yksinkertaisten web-sovellusten laatiminen onnistuu jo suht hyvin omatoimisestikin.</p>
        <br></br>
        <p>Fronttipuolella olen käynyt Reactista itsenäisesti parikin kurssia, ja tämä päivitetty 'kotisivu' 
        on sekin rakennettu Reactilla. Olen ehkä kuitenkin loppupeleissä enemmän backend-puolen ihmisiä, sillä visuaaliset 
        taitoni eivät ole aivan loogisen päättelyn tasolla. React Nativea käytämme parhaillaan kouluprojektissa; 
        sehän ei hirveästi eroa normi-Reactista ellei käytä native-juttuja, mutta ajattelin kuitenkin mainita.</p>
        </div>, false]],
        ['java_REST', ['Java (8/9), JavaEE, REST, API:en käyttö / rakentaminen', <div className="text-area">
        <p>Rakensin viime vuonna (2017) JavaEE:llä suht hirviömäisen backendin, ja on sen jälkeen tullut luettua 
        pari kirjaa Java-ohjelmoinnista ('Effective Java', 'Java Concurrency in Practice'). API:en käyttäminenhän on sinänsä suht 
        triviaalia, mutta ymmärrän sen verran REST:in periaatteista, että myös niiden suunnittelu ja 
        rakentaminen onnistuu jo jossain määrin. Akilleen kantapää ovat tällä erää turvallisuusasiat, 
        joihin ei ole vielä ollut aikaa syvemmin tutustua.</p>
        </div>, false]],
        ['sparql', ['SPAQRL / SQL', <div className="text-area">
        <p>Tällä hetkellä työskentelen yritykselle tehtävän kouluprojektin parissa; 
        kyseessä on SPAQRL-tietokantakieltä kuvahaussa hyödyntävä mobiilisovellus. SPARQL eroaa aika lailla 
        perus-SQL:stä, mutta sekin on vielä jonkin verran muistissa aiemmista projekteista.</p>
        </div>, false]],
        ['swift_Python', ['Python & machine learning (Keras); XCode + Swift', <div className="text-area">
        <p>Teimme vuoden 2018 keväällä koulussa iOS-mobiilisovelluksen, jossa hyödynnettiin 
        Huuto.netin julkista API:a, Node.js:ää sekä Python-kirjastoilla tapahtunutta 
        machine learningia. Haimme kuvia myytävistä vaatteista ja pyrimme aineiston perusteella 
        ennustamaan käyttäjän kameralla kuvaaman vaatekappaleen hintaa (projekti löytyy githubistani 
        nimellä 'ClothesPin').</p>
        <br></br>
        <p>Emme lopulta onnistuneet tässä; luultavasti kyse oli kuvien huonosta 
        laadusta ja/tai liian pienestä aineistosta. Kuitenkaan ML-mallinnuksen hyödyntäminen ei 
        tuntunut lainkaan niin vaikealta kuin olin ensi alkuun kuvitellut.</p>
        <br></br>
        <p>XCodesta ja Swiftistä sain projektissa jonkin verran kokemusta, vaikka toiminkin enimmäkseen 
        backend-puolella; sanoisin, että olen kuitenkin enemmän Android-mies, vaikka pidänkin 
        Macista työskentelykoneena.</p>
        </div>, false]],
        ['c_Unity', ['C; C# & Unity', <div className="text-area">
        <p>Siitä on jo aikaa, kun viimeksi käytin C:tä, enkä toki sen 'low level'-tason hienouksia hallitse, 
        mutta perusasiat kuitenkin. C#:ia käytin peliprojektin yhteydessä Unity-pelimoottorin kanssa 
        toilaillessa. Eka vuosi kun oli kyseessä niin koodin laatu oli mitä oli, mutta projekti 
        oli kuitenkin erittäin hauska ja opetti paljon siitä, millaisia temppuja ohjelmoidessa EI kannata käyttää 
        (mikä on oikeastaan se tärkein opinkappale). Unity tuli myös sen verran tutuksi, että uudestaan 
        sen pariin hyppääminen kävisi suht nopsasti ja luontevasti.</p>
        <br></br>
        <p>Peliohjelmoinnissa pidän siitä, miten pystyn yhdistämään luovuuden ja teknisen ongelmanratkaisun, 
        ja miten työn tulokset ovat usein oitis visuaalisesti nähtävissä. Vielä tärkeämpää on projektin 
        synnyttämä palava intohimo, joka saa oikein odottamaan töihin pääsyä. VR-/AR-peliä voikin pitää 
        meikäläisen stereotyyppisenä unelmaprojektina.</p>
        </div>, false]],
        ['otherStrengths', ['Muut vahvuudet: analyyttisyys, kirjoitustaito, englanti, fyysinen kunto', <div className="text-area">
        <p>Kuten tältä sivultakin ilmenee, osaan ilmaista itseäni selkeästi ja loogisesti suomeksi ja englanniksi, 
        ilman kirjoitusvirheitä. Opiskelin Turun yliopistossa englannin kielen kääntämistä kahden vuoden ajan (2010-2012), 
        ja olen harrastanut kirjoittamista (ja lukemista) alakoulusta saakka.</p>
        <br></br>
        <p>Muihin harrastuksiini lukeutuvat voimanosto, melonta ja pitkän matkan pyöräily; pyöräilin Suomen päästä varpaisiin 
        vuonna 2013 ja Travemündesta Tukholmaan vuoden 2018 kesällä.</p>
        </div>, false]],
        ['weakPoints', ['Heikkoudet(?)', <div className="text-area">
        <p>Tiimipelaamista kun aina niin kovasti näissä hauissa painotetaan, niin todetaan nyt ilman sarvia ja hampaita, 
        että teen mieluiten hommia yksin pimeässä kammiossa stereotyyppisen 'old school sankariohjelmoijan' tapaan.</p>
        <br></br>
        <p>Kuitenkin kouluprojektien parissa on käynyt selväksi, että toisen ihmisen tuoreesta näkökulmasta tuleva palaute 
        / ongelmanratkaisu säästää usein uskomattomia määriä aikaa ja vaivaa. Kunhan tiimi on siis vapaa päällepäsmäreistä 
        ja perässähiihtäjistä, ei minulla ole sen osana toimimisessa ongelmaa -- olettaen, että aikaa jää myös rauhalliseen 
        soolotyöskentelyyn aina silloin tällöin.</p>
        <br></br>
        <p>Tämä 'tunnustus' nyt ehkä rajoittaa työllistymistä joihinkin firmoihin, mutta hei: 
        en minä niissä olisi kauaa viihtynytkään. Ja tuleepahan samalla selväksi viimeinen muttei vähäisin vahvuuteni 
        eli usein oman nahan uhallakin toteutuva rehellisyys.</p>
        </div>, false]]
      ] // body array
    ) // body
  }, // finnishTexts

  englishTexts: {

    intro: <div className="intro-text-area">
              <p>Hello,</p>
              <br></br>
              <p>I'm <strong>Ville Lohkovuori</strong>, a 3rd year it-student from Metropolia UAS, on the Mobile Solutions track.</p>
              <br></br>
              <p>I'm currently on the lookout for a position in a company for my work placement 
              (not opposed to a longer period if it is a good match).</p>
              <br></br>
              <p>I prefer LinkedIn as a contact channel. My ideal job would be in the VR/AR space, 
              but any offers that pique my interest will be considered.</p>
              <br></br>
              <p>Without further ado, here is a link to my Github profile, and here are some of the technologies that I've studied so far:</p>
            </div>,
    body: new Map(
      [
        ['android', ['Android Studio, Kotlin, ARCore library', <div className="text-area">
        <p>I consider Android Studio to be my core expertise; I understand most concepts (Activity, Fragment, Intent, Context, MVP, etc) , 
        and can utilize them in building applications. I got my first taste of Kotlin this Fall, and I have to say that it's 
        my favorite programming language so far. We worked as a two-man team to build a mobile AR game with the help of 
        Google's AR Core library.</p> 
        <br></br>
        <p>The version of the game that we returned to Metropolia is downloadable from my github ('AR Invaders'); 
        we've since continued development and will be (informally) demoing the 'upgraded' app at the Pre-Slush XR Match Up 2018 event 
        on December 3rd.</p>
        </div>, false]],
        ['js', ['Javascript, Node.js (+Express.js), React, React Native', <div className="text-area">
        <p>Although I wouldn't be so bold as to title myself 'full stack developer' quite yet, I've gotten familiar enough 
        with Node and js that I can build simple web apps by myself without too many problems.</p>
        <br></br>
        <p>On the frontend front (sorry!), I've taken a few courses in React of my own initiative, and this 'homepage' 
        is built with React as well. In the end though I might be more comfortable on the backend, as my logical skills are stronger 
        than my visual ones. We're currently using React Native in our school project; I thought I'd mention it even though 
        it's quite similar to 'plain' React.</p>
        </div>, false]],
        ['java_REST', ['Java (8/9), JavaEE, REST, API use / creation', <div className="text-area">
        <p>Last year (2017) I built a fairly monstrous backend with JavaEE; I've since read a few books about Java 
        development ('Effective Java', 'Java Concurrency in Practice'). Using API:s is of course fairly trivial as such, but I understand 
        enough about the principles of REST that I can also plan and build them to some extent. My Achilles heel 
        are currently security issues, as I haven't had the time to study them in-depth quite yet.</p>
        </div>, false]],
        ['sparql', ['SPAQRL / SQL', <div className="text-area">
        <p>At the moment I'm working on a school project for a company; it's a mobile app that uses 
        the SPAQRL database-query language for fetching images. Although SPARQL is pretty different from 
        'plain' SQL, I still remember a fair bit about that as well from previous projects.</p>
        </div>, false]],
        ['swift_Python', ['Python & machine learning (Keras); XCode + Swift', <div className="text-area">
        <p>During Spring of 2018, we made an iOS-app at school which utilized Huuto.net's public API, 
        Node.js and machine learning (via Python libraries). We fetched images of clothes that were currently on sale 
        at Huuto.net, and aimed to predict the price of a piece of clothing photographed by the user.</p>
        <br></br>
        <p>In the end we failed to achieve our goal; we suspect it was because of poor image quality and/or small sample size.  
        However, using ML-modeling turned out to be far easier than I would have thought beforehand.</p>
        <br></br>
        <p>I also gained some experience in iOS-development with Swift and XCode; I'd say that I'm more of an Android guy 
        in the end, although I do like a Mac as a development machine.</p>
        </div>, false]],
        ['c_Unity', ['C; C# & Unity', <div className="text-area">
        <p>It's been quite a while since I last used C, and I won't claim to know the 'low-level' stuff that it's 
        really useful for, but I do know the basics. C# I've used in a game project during the first school year; 
        it was a bit of a mess (ok, a big old mess) due to our limited programming knowledge; but it was very fun 
        and thought us a lot about what kind of tricks to AVOID when programming (which is, let's face it, perhaps 
        the most important lesson). I also gained enough familiarity with Unity that I could jump into 
        a new Unity project with only minor hiccups.</p>
        <br></br>
        <p>The things I like about game programming are how it combines creativity with technical problem solving, 
        and how your work often yields immediate visual feedback. Most importantly, the project breeds a burning 
        passion that makes you wait eagerly for the next working day. All said, a VR/AR game project can be considered an ideal 
        fit for me.</p>
        </div>, false]],
        ['otherStrengths', ['Other Strengths: Analytical Skills, Writing, English, Physical Fitness', <div className="text-area">
        <p>As is evident from browsing this page, I can express myself clearly and concisely in both Finnish and English, 
        without typos etc. I studied English translation in Turku University for two years (2010-2012), and I've 
        been writing (and reading) as a hobby ever since grade school.</p>
        <br></br>
        <p>My other hobbies include weight lifting, paddling, and cycling long-distance; I cycled Finland head to toe in 
        2013, and from Travemünde to Stockholm in the Summer of 2018.</p>
        </div>, false]],
        ['weakPoints', ['Weak Points(?)', <div className="text-area">
        <p>People always point out that they're looking for a team player, so I'll just come out and say that I prefer to 
        work in my own dark chamber like the stereotypical 'old school hero programmer'.</p>
        <br></br>
        <p>However, during school projects it's become painfully clear that another person's fresh perspective is often 
        invaluable when it comes to reflection and solving problems in a timely and efficient manner. So, as long as 
        there are no moochers or people who enjoying bossing others around on the team, I can function just fine as 
        a part of it -- provided that I can have some 'chamber time' every now and then.</p>
        <br></br>
        <p>I realize that this 'confession' might turn off some companies, but then those wouldn't have been a good fit 
        for me anyway. And it serves to demonstrate the last but not least of my strong points: raw honesty even in the face of Armageddon.</p>
        </div>, false]]
      ] // body array
    ) // body
  } // englishTexts
} // Texts

export default Texts;