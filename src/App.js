import React, { useState } from 'react';
import Typed from 'react-typed';
import './App.css';

import PolyCrusader from './assets/PolyCrusader.png';
import AUTT from './assets/AUTT.gif';
import Onyx from './assets/Onyx.png';

import manu from './assets/tete3D/manu.gif';
import clem from './assets/tete3D/clem.gif';
import guigui from './assets/tete3D/guigui.gif';
import claq from './assets/tete3D/claq.gif';
import nichihachi from './assets/tete3D/nichihachi.gif';
import lilas from './assets/tete3D/lilas.gif';
import eymeric from './assets/tete3D/eymeric.gif';
import alexandre from './assets/tete3D/alexandre.gif';


import photoBefore1 from './assets/souvenir/photo1.jpg';
import photoBefore2 from './assets/souvenir/photo2.jpg';
import photoBefore3 from './assets/souvenir/photo3.jpg';
import photoBefore4 from './assets/souvenir/photo4.jpg';
import photoBefore5 from './assets/souvenir/photo5.jpg';
import photoBefore6 from './assets/souvenir/photo6.jpg';
import photoBefore7 from './assets/souvenir/photo7.jpg';
import photoAfter1 from './assets/souvenir/photo8.jpg';
import photoAfter2 from './assets/souvenir/photo9.jpg';
import photoAfter3 from './assets/souvenir/photo10.jpg';
import photoAfter4 from './assets/souvenir/photo11.jpg';

function App() {
  return (
    <div>
      <Titre />
      <Equipes />
      {photoSouvenir()}
    </div>
  );
}

function Titre() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    { name: 'PolyCrusaders', image: PolyCrusader },
    { name: 'AUTT', image: AUTT },
    { name: 'Onyx', image: Onyx },
  ];

  return (
    <div>
      <div className='title'>
        <h1>Nous sommes<br />
          <Typed
            strings={items.map(item => item.name)}
            typeSpeed={40}
            backSpeed={50}
            backDelay={5000}
            loop
            onStringTyped={(count) => setCurrentIndex(count % items.length)}
          />
        </h1>
        <p>Une équipe Polytech Lyon.<br />
          Principalement composée de fraude.</p>
      </div>
      <div className="circle"></div>
      <img className="imageTitle" src={items[currentIndex].image} alt={items[currentIndex].name} />
      <div className="rounded-line"></div>
    </div>
  )
}

function Equipes() {
  const listeEquipes = [
    { name: 'Backbone', title: "La tribu Backbone", description: "Footer / Header. Chargée des styles et la charte graphique. Axée contenu des pages. Réfléchir au positionnement des components." },
    { name: 'Grindset', title: "La tribu du Grindset", description: "Axée support tech Sur React. Mon frère en Christ, nous devons être grindsets." },
    { name: 'IKEA', title: "La tribu IKEA", description: "Axée components UI (boutons, cards, styles globaux). Travaille sur les .jsx et les .scss." },
    { name: 'Mixeur', title: "La tribu Mixeur ft. manu", description: "Infographie (icônes, images). Landing page. Three Js." },
    { name: 'DANA', title: "La tribu de DANA", description: "BACKEND en full trytry." },
    { name: 'Emo', title: "Emotional Support", description: "Met de la techno dans le projet. Merci à eux d'être venu !" },
  ];

  const participants = [
    { name: 'Kévin', equipe: "Grindset", discord: "nichihachi", github: "https://github.com/NichiHachi", image: nichihachi },
    { name: 'Mathieu', equipe: "Grindset", discord: "claquettes", github: "https://github.com/Claquettes", image: claq },
    { name: 'Alexandre', equipe: "IKEA", discord: "eclairsombre", github: "https://github.com/Eclairsombre", image: alexandre },
    { name: 'Clément', equipe: "IKEA", discord: "viris_", github: "https://github.com/VirisOnGithub", image: clem },
    { name: 'Thibaut', equipe: "Mixeur", discord: "undermirrors", github: "https://github.com/undermirrors", image: PolyCrusader },
    { name: 'Lilas', equipe: "Mixeur", discord: "janet_doe", github: "https://github.com/Janet-Doe", image: lilas },
    { name: 'Lilas', equipe: "Backbone", discord: "janet_doe", github: "https://github.com/Janet-Doe", image: lilas },
    { name: 'Maël', equipe: "Mixeur", discord: "xeon0x", github: "https://github.com/Xeon0X", image: PolyCrusader },
    { name: 'Emmanuel', equipe: "Mixeur", discord: "sckelenox", github: "https://github.com/Sckelenox", image: manu },
    { name: 'Emmanuel', equipe: "Emo", discord: "sckelenox", github: "https://github.com/Sckelenox", image: manu },
    { name: 'Guillaume', equipe: "DANA", discord: "flashonfire", github: "https://github.com/FlashOnFire", image: guigui },
    { name: 'Eymeric', equipe: "DANA", discord: "eymdech", github: "https://github.com/hatch01", image: eymeric },
    { name: "Yousif", equipe: "Backbone", discord: "you6f", github: "https://github.com/You6f", image: PolyCrusader },
    { name: "Thibaut", equipe: "Backbone", discord: "morph_0", github: "", image: PolyCrusader },
    { name: "Tom", equipe: "IKEA", discord: "koledon", github: "https://github.com/TomBllt", image: PolyCrusader },
    { name: "Timothé", equipe: "DANA", discord: "titi_69", github: "https://github.com/Titi-lg", image: PolyCrusader },
    { name: "Valentin", equipe: "Emo", discord: "imvalll", github: "", image: PolyCrusader },
    { name: "Dorian", equipe: "Emo", discord: "_dorian_t_", github: "", image: PolyCrusader },
  ];

  const [more, setMore] = useState(null);

  return (
    <div>
      {listeEquipes.map((equipe) => (
        <div className="squad" key={equipe.name}>
          <div className="squadBackGround" style={{ height: 500 + (more === equipe.title ? 75 : 0) }}>
            <div className="nameSquad">
              <h2>{equipe.title}</h2>
              {more === equipe.title && <p>{equipe.description}</p>}
              <button className="button" onClick={() => setMore(equipe.title)}>V</button>
            </div>
            <div className="participants">
              {participants.filter(participant => participant.equipe === equipe.name).map((participant) => (
                <div className="elementParticipant" key={participant.name}>
                  <img className="imageParticipant" src={participant.image} style={{ float: 'center' }} alt={participant.name} />
                  <h3>{participant.name}</h3>
                  <div className="logo-text">
                    <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/4/4f/Discord_Logo_sans_texte.svg/1818px-Discord_Logo_sans_texte.svg.png" alt="Discord" />
                    <h4> {participant.discord}</h4>
                  </div>
                  {participant.github && (
                    <div className="logo-text">
                      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
                      <a href={participant.github}>GitHub page</a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function photoSouvenir() {
  return (
    <div className='PhotoSouvenir'>
      <div className='before'>
        <h1>Pendant le projet</h1>
        <div className='Photos'>
          <div className='columnPhotos'>
            <img src={photoBefore1} alt="Yeay :D" />
            <img src={photoBefore2} alt="Yeepy" />
            <img src={photoBefore3} alt="WHAT THE HELL" />
          </div>
            <img src={photoBefore4} alt="WHAT THE HELL" />
            <img src={photoBefore5} alt="WHAT THE HELL" />
            <img src={photoBefore6} alt="WHAT THE HELL" />
            <img src={photoBefore7} alt="WHAT THE HELL" />
        </div>
      </div>
      <div className='after'>
        <h1>Après le project</h1>
        <div className='Photos'>
          <div className='columnPhotos'>

          </div>
            <img src={photoAfter1} alt="WHAT THE HELL" />
            <img src={photoAfter2} alt="WHAT THE HELL" />
            <img src={photoAfter3} alt="WHAT THE HELL" />
            <img src={photoAfter4} alt="WHAT THE HELL" />
        </div>
      </div>
    </div>
  );
}

export default App;