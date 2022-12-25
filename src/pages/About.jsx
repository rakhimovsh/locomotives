import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container.jsx';

import img1 from '../assets/images/about1.jpg';
import img2 from '../assets/images/about2.jpg';
import img3 from '../assets/images/about3.jpg';

const Title = styled.h1`
  text-align: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 30px;
`;

const About = () => {
  return (
    <Container>
      <Title>Kafedra tarixi</Title>
      <Description>
        “Lokomotivlar va lokomotiv xo’jaligi” kafedrasiga 1931 yilda institut bilan bir vaqtda tashkil etilgan
        “Paravozlar” va “Ta’mirlash zavodlari” kafedralari negizida asos solingan.

        “Paravozlar” kafedrasining birinchi mudiri t.f.n. A.A. Filippov bo‘lgan, 1934 yildan kafedraga V.I. Kolosovskiy,
        1936 yildan 1966 yilgacha esa dots. M.G. Beskrovniy rahbarlik qilgan.
        <img src={img1} />
        “Ta’mirlash zavodlari” kafedrasining birinchi mudiri professor A.F. Troitskiy tayinlangan, 1949 yildan 1972
        yilgacha dots. D.Ya. Perelman faoliyat yuritgan.

        1957 yildan “Paravozlar” kafedrasi “Harakat tarkibi”, “Ta’mirlash zavodlari” kafedrasi esa “Lokomotivlardan
        foydalanish va ta’mirlash” deb nomlangan.

        “Harakat tarkibi” kafedrasiga dotsentlar M.G. Beskrovniy, V.I. Nikitin, G.N. Strokov, 1970 yildan 1984 yilgacha
        t.f.d., professor A.D. Glushenko, 1984-1994 yillarda dotsent V.I. Kiselyovlar rahbarlik qilishgan.
        “Lokomotivlardan foydalanish va ta’mirlash” kafedrasini esa professor P.K. Kryuger, dotsentlar A.V. Tolkachyov,
        V.I. Nikitin, D.Ya. Perelman, N.K. Babaev, A.I. Rempel, A.D. Belenkiy, X.I. Nurxodjaev, B.Sh. Axmedovlar
        boshqarishgan.

        1995 yilda “Harakat tarkibi” va “Lokomotivlardan foydalanish va ta’mirlash” kafedralari birlashtirilib,
        “Lokomotivlar va elektr transporti” kafedrasiga aylantirilgan, kafedra mudiri lavozimida 1998 yilgacha dots.
        B.Sh. Axmedov faoliyat olib borgan.
        <img src={img2} />
        1999 yildan kafedra “Lokomotivlar” deb nomlangan. Kafedrani 2009 yilgacha dots. B.T. Fayziev, 2009 yildan 2011
        yilgacha t.f.n. A.T. Djanikulov, prof. Sh.S. Fayzibaevlar, 2011 yildan 2014 yilgacha t.f.n. N.S. Zayniddinovlar
        boshqarishgan.
        <img src={img3} />
        2014 yildan 2021 yilgacha kafedra mudiri lavozimida I.S.Kamalov faoliyat yuritgan. 2013 yildan kafedra
        “Lokomotivlar va lokomotiv xo’jaligi” deb nomlanadi. 2021-yil avgust oyidan Xamidov O.R faoliyat yuritmoqda.
        Kafedrada turli yillarda quyidagi olimlar va mutaxassislar faoliyat olib borishgan: M.A. Strusevich, A.M.
        Suxanov, L.M. Doroxin, G.N. Strokov, A.V. Tolkachev, D.V. Pistsov, B.I. Vilkevich, G.I. Markovin, S.D. Kuchuk,
        G.N. Muxitdinov, A.D. Glushenko, V.I. Kiselev, A.I. Rempel, A.D. Belenkiy, G.N. Xabibi, I.P. Gordeev, V.F.
        Buxteev, R.X. Alimbaev, E.N.Rijov, P.A. Fedotov, L.M. Drabkin, Ya.A. Norkin, Yu.I. Dyakov, L.F. Karpuxina, B.Sh.
        Axmedov, V.A. Arestov, M.M. Maxmudov, N.G. Maxbubov, E.K. Rashidov, Ya.K. Kurbanov, K.T. Tursunov, Sh.S.
        Fayzibaev, T. Abdusattarov, V.P. Sviyazev, X.I. Nurxodjaev, S.A. Arustamyan, E.S. Ushakov, B.T. Fayziev, Yu.D.
        Tadjiev, O.S. Ablyalimov, N.V. Julenyov va boshqalar.

        Hozirgi kunda kafedrada quyidagi professor-o‘qituvchilar faoliyat olib borishmoqda: kafedra mudiri, t.f.d.,
        dotsent O.R Xamidov, professor v.b. Ablyalimov O.S., dotsent v.b Djanikulov A.T., katta o‘qituvchilar Julenev
        N.V., Qosimov O.T., Qosimov X.R., assistentlar Azimov S.M., Jamilov Sh.F., Safarov O`.I., Xodjiyev J.D.,
        Shoimqulov A.A., Yakubov J.K,Yusufov A.М.

        Kafedrada 5310600–Yer usti transport tizimlari va ularning ekspluatatsiyasi (lokomotivlar) va 5111000–Kasb
        ta’limi (5310600–Yer usti transport tizimlari va ularning ekspluatatsiyasi (lokomotivlar) ta’lim yo’nalishlari
        bo‘yicha bakalavrlar, 5A310603-“Temir yo`l transporti (Lokomotivlar)” mutaxassisligi bo‘yicha magistrlar
        tayyorlanadi.

        Kafedrada bakalavriat ta’lim yo‘nalishlaridan 14 ta, magistratura mutaxassisliklari bo‘yicha esa 8 ta fanlardan
        darslar olib boriladi.

        “Lokomotivlar va lokomotiv xo’jaligi” kafedrasida 2021-yildan boshlab yangi yo’nalish “Texnologik mashinalar va
        jihozlar (temir yo’l transporti)” bo’yicha talabalarni tayyorlash yo’lga qo’yildi.Bu yo’nalishda ta’lim olgan
        talabalar temir yo’l qurilishi,elektrlashtirish va ekspluatatsiyasi jarayonida qo’llaniladigan texnologik
        mashinalar va jihozlardan (drezinalar,avtomatrisalar, ixtisoslashgan transportlar va boshqalar) foydalanish va
        ularga texnik xizmat ko’rsatish bo’yicha faoliyat olib boradi.

        Kafedrada talabalar uchun quyidagi to‘garakda ish olib borilmoqda:
        – Ablyalimov O.S. raxbarligida «Yosh ilmiy tadqiqotchi» to‘garagida izlanuvchan talabalar bilan ishlar olib
        borilmoqda. Ushbu to‘garakda 21 nafar bakalavriat va magistratura talabalari mavjud bo‘lib o‘z bilimini oshirib
        kelmoqdalar va izlanishlar natijalariga ko‘ra konferensiyalarda ishtirok etib, 3 ta maqola nashr etilgan.
        “Lokomotivlar va lokomotiv xo`jaligi” kafedrasining Toshkent temir yo‘l transporti kasb-hunar kolleji, Toshkent
        shahridagi Yashnobod temir yo‘l kasb-hunar kolleji, Samarqand temir yo‘l kasb-hunar kolleji va Qo‘qon temir yo‘l
        kasb-hunar kolleji bilan hamkorlik shartnomalari mavjud.

        Kafedra professor-o‘qituvchilari tomonidan lokomotivlardan foydalanish, ularning dinamikasi va ta’miri,
        ishonchliligi va diagnostikasi, ishlab chiqarish jarayonlarini avtomatlashtirish, sanoat issiqlik energetikasi
        va issiqlik texnikasi, tortuv hisoblari bo‘yicha ilmiy tadqiqotlar amalga oshirilmoqda. Ilmiy tadqiqotlar
        natijalari asosida so‘nggi yillarda 100 dan ortiq ilmiy maqolalar, ilmiy-uslubiy ishlar chop etilgan. So‘nggi
        uch yilda kafedrada o‘qitilayotgan fanlardan 3 ta darslik va 5 ta o‘quv qo‘llanmalari o‘zbek tilida tayyorlanib,
        nashrga topshirildi.

        Kafedra o‘qituvchilari o‘quv jarayoni bilan bir davrda “O‘zbekiston temir yo‘llari” AJ, uning tarkibiy
        bo‘linmalari va O‘zbekiston Respublikasining boshqa korxonalari ehtiyojlaridan kelib chiqqan xolda xo’jalik
        shartnomalari asosida turli ilmiy tadqiqotlarni amalga oshirib kelishmoqda. Bu yo‘nalishda quyidagi tadqiqotlar
        amalga oshirilgan: 10D100 dizellari va ularni yig‘ish birliklarini foydalanishdagi ishonchliligini oshirish,
        TE10 turidagi teplovozlar tortuv elektr motorlarini ishonchliligini oshirish, teplovoz dizellarini texnik
        diagnostika qilishning qismlarga ajratmasdan amalga oshirish usullari va vositalarini ishlab chiqish, xarakat
        tarkibi asinxron tortuv elektr dvigatellarini kompleks diagnostika qilish metodikasini ishlab chiqish,
        teplovozlar yoqilg‘i sarfi me’yorlarini ishlab chiqish, Uz-EL elektrovozlarini joriy ta’mirlash texnologik
        jarayonini ishlab chiqish, TGM turidagi mаnovr teplovozlarini xizmat muddatini uzaytirish bilan ta’mirlash
        texnologiyasini ishlab chiqish va boshqalar.

        Kafedrada 7 ta fandan (6 ta bakalavriat va 1 ta magistratura) laboratoriya mashg‘ulotlari olib boriladi.
        Laboratoriya ishlari kafedrada hamda kafedraning “O‘ztemiryo‘lmashta’mir” UK dagi filialida olib boriladi.

        O‘quv-laboratoriya majumasi
        “Ermak” elektr harakatlanuvchi tarkibni boshqarish simulyatori
        VL80S elektrovozi trenajyer-simulyatori;
        “TEP 70BS” teplovozini boshqarish simulyatori;
        81-717 metropoezdi trenajyer-simulyatori.
      </Description>
    </Container>
  );
};

export default About;