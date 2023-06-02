import React from "react";
import Image from "next/image";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className="box-border flex flex-col">
      <h3 className="flex items-center justify-center mt-24 mb-6 text-3xl font-bold">
        O nas
      </h3>
      <div className="flex flex-col items-center justify-around md:flex-row mt-36">
        <Image
          src={"/Image6.jpg"}
          alt="zdjęcie-pomoc-drogowa"
          width="600"
          height="420"
          className="rounded shadow-2xl"
        />

        <div className="max-w-lg mt-20 mb-10 ml-10">
          <p>
            Nasza firma to ceniony lider w branży pomocy drogowej, którego
            priorytetem jest zapewnienie pełnego wsparcia kierowcom na drodze.
            Od lat dostarczamy szybką, skuteczną i profesjonalną pomoc w
            sytuacjach awaryjnych i wypadkach. Nasz niezawodny zespół
            doświadczonych techników drogowych jest gotowy, by sprostać każdemu
            wyzwaniu i zapewnić naszym klientom spokój umysłu w trudnych
            momentach.
          </p>
          <p className="mt-5">
            Kiedy Twój samochód nagle odmawia posłuszeństwa na drodze, nie
            musisz się martwić o to, co zrobić dalej. Nasze kompleksowe usługi
            holowania samochodów zostały stworzone specjalnie po to, aby
            zapewnić Ci pełną ochronę i wygodę w razie awarii. Niezależnie od
            tego, czy jesteś na trasie daleko od domu, czy na lokalnej ulicy,
            nasi wykwalifikowani operatorzy i specjalistyczny sprzęt dotrą
            szybko na miejsce, aby zapewnić Ci profesjonalne holowanie do
            wybranego warsztatu lub innego miejsca docelowego. Dzięki temu
            możesz skupić się na rozwiązywaniu problemu, a my zajmiemy się
            resztą.
          </p>

          <p className="mt-5">
            Jesteśmy również dumni z naszej usługi transportu samochodów
            ciężarowych i dostawczych, która zapewnia niezawodne i terminowe
            dostarczenie Twojego pojazdu w dowolne miejsce.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-around md:flex-row mt-36">
        <div className="max-w-lg mb-20 ml-10">
          <p>
            Dysponujemy specjalistycznymi naczepami oraz doświadczonymi
            kierowcami, którzy dbają o bezpieczeństwo i stan Twojego cennego
            ładunku. Niezależnie od rozmiaru i wagi pojazdu, możesz mieć
            pewność, że zostanie on przetransportowany z najwyższą starannością
            i precyzją. Nasze usługi transportowe są idealne dla firm
            logistycznych, przewoźników, a także klientów indywidualnych
            poszukujących zaufanego partnera do bezpiecznego przemieszczania
            flotowych samochodów lub dostaw.
          </p>
          <p className="mt-5">
            Ponadto, specjalizujemy się w pomocy w transporcie traktorów i
            maszyn rolniczych. Rozumiemy, jak kluczowe jest sprawne działanie
            tych urządzeń w rolniczych operacjach. Dlatego oferujemy kompleksowe
            usługi pomocy drogowej, które obejmują przewóz, podnoszenie i
            przenoszenie maszyn rolniczych na nowe pola lub do warsztatów
            naprawczych. Nasze specjalistyczne pojazdy i wykwalifikowana ekipa
            posiadają wiedzę i doświadczenie niezbędne do profesjonalnego i
            bezpiecznego transportu traktorów, kombajnów i innych maszyn
            rolniczych
          </p>
        </div>
        <Image
          src={"/Image2.jpg"}
          alt="zdjęcie-pomoc-drogowa"
          width="400"
          height="420"
          className="rounded shadow-2xl"
        />
      </div>
      <div className="flex flex-col items-center justify-around md:flex-row mt-36">
        <Image
          src={"/Image3.jpg"}
          alt="zdjęcie-pomoc-drogowa"
          width="500"
          height="360"
          className="rounded shadow-2xl"
        />
        <Image
          src={"/Image4.jpg"}
          alt="zdjęcie-pomoc-drogowa"
          width="500"
          height="360"
          className="mt-12 rounded shadow-2xl md:mt-0"
        />
      </div>
      <div className="flex flex-col items-center justify-around mt-12 md:flex-row">
        <Image
          src={"/Image5.jpg"}
          alt="zdjęcie-pomoc-drogowa"
          width="500"
          height="360"
          className="rounded shadow-2xl"
        />
        <Image
          src={"/Image1.jpg"}
          alt="zdjęcie-pomoc-drogowa"
          width="500"
          height="300"
          className="mt-12 rounded shadow-2xl md:mt-0"
        />
      </div>
      <div className="flex flex-row items-center justify-around w-full p-6 text-center mt-14 bg-primary-yellow ">
        <h3 className="text-4xl font-extrabold">
          Całodobowa pomoc drogowa - Auto Pomoc Kraków
        </h3>
      </div>
      <div className="flex flex-col items-center justify-around mt-12 md:flex-row">
        <Image
          src={"/Image7.jpg"}
          alt="zdjęcie-pomoc-drogowa"
          width="1280"
          height="720"
          className="shadow-2xl "
        />
      </div>
    </div>
  );
};

export default AboutUs;
