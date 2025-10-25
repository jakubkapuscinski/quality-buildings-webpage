import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import RealizationDetail from './components/RealizationDetail';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';

const projects = [
  {
    id: 1,
    title: 'Rezydencja w Stylu Angielskim',
    category: 'residential',
    image: '/realizacje/mieszkalne/klasyczny-angielski/salon-biblioteka/IMG_4008.jpg',
    description: 'Luksusowy apartament w klasycznym stylu',
    details: 'Kompleksowy remont apartamentu w kamienicy z zachowaniem klasycznego charakteru. Elegancka kuchnia z czarno-białą szachownicą marmuru, biblioteka z regałami na całą ścianę, marmurowe łazienki oraz designerskie schody spiralne z drewna dębowego.',
    year: '2024',
    area: '180 m²',
    duration: '8 miesięcy',
    scope: [
      'Wykończenie kompleksowe wszystkich pomieszczeń',
      'Montaż marmurowych podłóg i okładzin ściennych',
      'Zabudowa mebli na wymiar - biblioteka, szafy, kuchnia',
      'Montaż designerskich schodów spiralnych z drewna dębowego',
      'Instalacje elektryczne i oświetlenie LED',
      'Instalacje wodno-kanalizacyjne i c.o.',
      'Malowanie ścian farbami premium',
      'Montaż drzwi wewnętrznych i listew przypodłogowych'
    ],
    gallery: {
      kuchnia: [
        '/realizacje/mieszkalne/klasyczny-angielski/kuchnia/IMG_3966.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/kuchnia/IMG_3978.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/kuchnia/IMG_3983.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/kuchnia/IMG_3985.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/kuchnia/IMG_3986.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/kuchnia/IMG_4256.jpg'
      ],
      salonBiblioteka: [
        '/realizacje/mieszkalne/klasyczny-angielski/salon-biblioteka/IMG_4008.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/salon-biblioteka/IMG_4011.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/salon-biblioteka/IMG_4017.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/salon-biblioteka/IMG_4024.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/salon-biblioteka/IMG_4031.jpg'
      ],
      lazienki: [
        '/realizacje/mieszkalne/klasyczny-angielski/lazienki/IMG_4044.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/lazienki/IMG_4052.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/lazienki/IMG_4053.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/lazienki/IMG_4152.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/lazienki/IMG_4156.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/lazienki/IMG_4157.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/lazienki/IMG_4158.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/lazienki/IMG_4278.jpg'
      ],
      schody: [
        '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4182.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4202.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4210.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4226.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4228.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4229.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4237.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4239.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4243.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/schody/IMG_4244.jpg'
      ],
      holKorytarze: [
        '/realizacje/mieszkalne/klasyczny-angielski/hol-korytarze/IMG_4166.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/hol-korytarze/IMG_4197.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/hol-korytarze/IMG_4248.jpg'
      ],
      sypialnia: [
        '/realizacje/mieszkalne/klasyczny-angielski/sypialnia/IMG_4104.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/sypialnia/IMG_4111.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/sypialnia/IMG_4147.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/sypialnia/IMG_4149.jpg'
      ],
      detale: [
        '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_3971.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_4022.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_4023.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_4082.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_4086.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_4100.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_4174.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_4176.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_4289.jpg',
        '/realizacje/mieszkalne/klasyczny-angielski/detale/IMG_4293.jpg'
      ]
    }
  }
];

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="App bg-gradient-to-b from-black via-gray-950 to-black min-h-screen">
        <ScrollProgress />
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage projects={projects} />} />
          <Route path="/realizacja/:id" element={<RealizationDetail projects={projects} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;