import React, { useState } from 'react';
import Card from '../components/Cparts/Cards';

const Calmwaves = () => {
  const playlistArray = [
    {
      index: 1,
      img: 'https://t4.ftcdn.net/jpg/00/27/63/39/240_F_27633956_r7BwvqM2fT0Yr3OL1qlPEfjs5QZchNWO.jpg',
      audio: require('../assets/alpha.mp3').default,
      title: 'Title 1',
    },
    {
      index: 2,
      img: 'https://t3.ftcdn.net/jpg/06/25/31/76/240_F_625317679_rEjrSZlq6arUS50MTaQnBPYuTZPLWyqh.jpg',
      audio: '',
      title: 'Title 2',
    },
    // Include other tracks similarly
  ];

  const [currentAudio, setCurrentAudio] = useState<string | null>(null);

  const handleCardClick = (audioSrc: string) => {
    setCurrentAudio(audioSrc);
  };

  return (
    <div style={{ display: "flex", flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
      {playlistArray.map((item) => (
        <div key={item.index} className="col-sm-6 col-md-4 col-lg-2 mb-4">
          <Card imgSrc={item.img} onClick={() => handleCardClick(item.audio)} />
          {currentAudio === item.audio && (
            <audio controls>
              <source src={item.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          )}
        </div>
      ))}
    </div>
  );
};

export default Calmwaves;
