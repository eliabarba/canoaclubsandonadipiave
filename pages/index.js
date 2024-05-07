import Image from "next/image";
import styled from "./page.module.css";
import Present from "@/components/Present";
import Carousel from "@/components/Carousel";
import News from "@/components/SwiperNews";

export default function Home({data}) {
  return (
    <main className={styled.main}>
      <Carousel slides={slides} />
      <News title='La Nostra Galleria' data={data} limit={4} />
      <SwiperNews title='News' data={data} limit={6} defaultTag='scuola' />
    </main>
  );
}

let slides = [
  {
    titolo: 'Fatti un bel giro',
    descrizione:
      'Scopri tutti i nostri servizi sulle canoe',
    immagine:
      'https://scontent.fvce2-2.fna.fbcdn.net/v/t39.30808-6/436425853_894806662449376_4412565734253717012_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lDfEw0Qq70sQ7kNvgECP5xO&_nc_ht=scontent.fvce2-2.fna&oh=00_AfAH677cbt582birArtAV5L1-LTT0SKfK7QFSLCwsblPOQ&oe=663FD9B4',
    colore: 'white',
    colore2: 'rgba(0,0,0,0)',
    opacity: 0.8,
    buttonText: 'Scopri di più!',
    buttonUrl: 'https:...',
  },
  {
    titolo: 'Fatti un bel giro',
    descrizione:
      'Scopri tutti i nostri servizi sulle canoe',
    immagine:
      'https://scontent.fvce2-2.fna.fbcdn.net/v/t39.30808-6/439927456_902653774997998_4160712827694940556_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EApF6qSCFkkQ7kNvgGxqmEk&_nc_ht=scontent.fvce2-2.fna&oh=00_AfBpMyVVLQOe1MXS_TT1JrQ_Uhh2L14kOfJPFg8EWvBqqg&oe=663FD5BA',
    colore: '#white',
    colore2: 'rgba(0,0,0,0)',
    opacity: 0.8,
    buttonText: 'Scopri di più!',
    buttonUrl: 'https:...',
  },
  {
    titolo: 'Fatti un bel giro',
    descrizione:
      'Scopri tutti i nostri servizi sulle canoe',
    immagine:
      'https://scontent.fvce2-1.fna.fbcdn.net/v/t39.30808-6/439901537_902653468331362_1446077057644207733_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=TFAqxzPF1pgQ7kNvgHHOnyI&_nc_ht=scontent.fvce2-1.fna&oh=00_AfB2jWde3vIHTqENMlEQ7OoBVXCpvvTvwm4gHqUciaSb2g&oe=663FCF48',
    colore: 'white',
    colore2: 'rgba(0,0,0,0)',
    opacity: 0.8,
    buttonText: 'Scopri di più!',
    buttonUrl: 'https:...',
  },

]



  const data = [
    {
    "id": 106,
    "titolo": "Gli ammortizzatori",
    "abstract": "Maria è stata maestra in quella virtù che viene chiamata “purezza”. Nei rapporti con le ragazze e negli scherzi con gli amici impara a tenere la giusta distanza, sia con le\r\nparole che con i gesti...",
    "link": "",
    "tag": "scuola",
    "in_evidenza": false,
    "created_at": "2024-05-05T18:51:23.473+02:00",
    "updated_at": "2024-05-05T18:51:23.482+02:00",
    "pubblicazione": "domenica  5 maggio 2024",
    "immagine": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBY0k9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e91f1f54cb9e47c76a045199e092427aea62fd06/Copia%20di%2033.jpg",
    "articolo": false
    },
    {
    "id": 105,
    "titolo": "W don Simone!!!",
    "abstract": "Grande festa oggi per la Citta di San Donà, per la Congregazione Salesiana e per tutta la Chiesa: il nostro don Simone è diventato sacerdote! Congratulazioni e tantissimi auguri per la tua missione!",
    "link": "",
    "tag": "",
    "in_evidenza": true,
    "created_at": "2024-05-04T21:29:34.080+02:00",
    "updated_at": "2024-05-04T21:33:43.869+02:00",
    "pubblicazione": "sabato  4 maggio 2024",
    "immagine": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBY0E9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6dac5ea2244b337894599cf9d363d7e32954bfac/IMG-20240504-WA0012.jpg",
    "immagine_mobile": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBY0U9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a61ddb6587d0dc58b91332344f204fcbbbebd264/20240504_213316.jpg",
    "articolo": false
    },
    {
    "id": 103,
    "titolo": "Carlo si lasciava \"canzonare\"",
    "abstract": "I pasti comunitari erano una delle occasioni più favorevoli e allegre. Gli si poteva dire tutto e lui aveva sempre pronto un proverbio in ogni occasione. Leggi l'omelia preparata da don Enrico Gaetan per il funerale di Carlo....",
    "link": "",
    "tag": "",
    "in_evidenza": true,
    "created_at": "2024-05-03T09:11:10.887+02:00",
    "updated_at": "2024-05-03T09:45:09.815+02:00",
    "pubblicazione": "venerdì  3 maggio 2024",
    "immagine": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYnM9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6848a2ae32e7a8658a45e7f1b7b7edf121ed08ae/IMG-20240429-WA0004.jpg",
    "articolo": true
    },
    {
    "id": 104,
    "titolo": "“Ti ringrazio o Padre, perché hai nascosto queste cose ai dotti e ai sapienti e le hai rivelate ai piccoli”",
    "abstract": "Leggi l'omelia preparata da don Silvio Zanchetta per il funerale di Bepi....",
    "link": "",
    "tag": "",
    "in_evidenza": true,
    "created_at": "2024-05-03T10:26:09.267+02:00",
    "updated_at": "2024-05-03T10:32:54.572+02:00",
    "pubblicazione": "venerdì  3 maggio 2024",
    "immagine": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYjg9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--de0839da5d9515963f9bf4b6647a6973485fe383/IMG-20240503-WA0006.jpg",
    "articolo": true
    },
    {
    "id": 102,
    "titolo": "Pezzi di storia che se ne vanno",
    "abstract": "In questi giorni sono venuti a mancare tre salesiani che in modo diverso hanno segnato il nostro cammino: Bepi Arvotti, don Pierino Trentin e Carlo Bussinello. Ne recuperiamo, riconoscenti, il ricordo…",
    "link": "",
    "tag": "",
    "in_evidenza": true,
    "created_at": "2024-05-02T13:54:02.196+02:00",
    "updated_at": "2024-05-02T14:16:26.610+02:00",
    "pubblicazione": "giovedì  2 maggio 2024",
    "immagine": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYms9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--07b4ae318fe63270540d886e762304af598d5865/2015.JPG",
    "articolo": true
    },
    {
    "id": 96,
    "titolo": "Garfield - una missione gustosa",
    "abstract": "Dopo un inaspettato ricongiungimento con il padre, il trasandato gatto di strada Vic, Garfield e il suo amico Odie sono costretti ad abbandonare la loro vita domestica per unirsi a Vic in una esilarante rapina ad alto rischio.",
    "link": "https://cinema.donboscosandona.it",
    "tag": "cinema",
    "in_evidenza": false,
    "created_at": "2024-04-27T21:34:23.840+02:00",
    "updated_at": "2024-04-30T07:24:17.884+02:00",
    "pubblicazione": "martedì 30 aprile 2024",
    "immagine": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYW89IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--ff89214cbc4f4254607d522d4ebf27d2c4ef92bc/Garfield.jpeg",
    "articolo": false
    },
    {
    "id": 95,
    "titolo": "Festa dell'Oratorio",
    "abstract": "Il mese di Maggio culminerà nella festa dell'Oratorio, dal 23 al 26 maggio...",
    "link": "",
    "tag": "",
    "in_evidenza": false,
    "created_at": "2024-04-27T16:28:38.181+02:00",
    "updated_at": "2024-04-30T07:24:48.133+02:00",
    "pubblicazione": "martedì 30 aprile 2024",
    "immagine": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYWM9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--cc38028dc072ebdde9d40d69381f41137974b7f5/Screenshot%202024-04-27%20alle%2016.22.54.png",
    "immagine_schermo": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYWc9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--6163b5924c30929b06094b46dc49a7fb09d581ce/1920x1080%20Festa%20Oratorio%202024.jpg",
    "allegato": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYWs9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--366ea23862f9ffced2ff2264bf4151803b7ad88c/1920x1080%20Festa%20Oratorio%202024.jpg",
    "articolo": false
    },
    {
    "id": 101,
    "titolo": "Ave Donna Santissima",
    "abstract": "Fin dai primi secoli il popolo cristiano si è rivolto a Maria: Madre, Rifugio, Consolazione, Speranza, Conforto e lo ha fatto in maniera sublime grazie anche a tanti Santi, conosciuti e sconosciuti...",
    "link": "",
    "tag": "",
    "in_evidenza": false,
    "created_at": "2024-04-29T20:46:29.567+02:00",
    "updated_at": "2024-04-29T20:46:29.600+02:00",
    "pubblicazione": "lunedì 29 aprile 2024",
    "immagine": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYkk9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2d1b62914ef25ceeb289087ffd874b577630014b/Screenshot%202024-04-29%20alle%2020.43.17.png",
    "immagine_mobile": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYk09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--072d65079236bbeb98234ce34ac35656c96210b4/lunga.jpeg",
    "immagine_schermo": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYlE9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--74216f7bb94461d6baa8afc6db683a59886f2e82/landscape.jpeg",
    "articolo": true
    },
    {
    "id": 100,
    "titolo": "Grazie nonno Bussy!",
    "abstract": "Ti piaceva fingere di essere burbero ma noi che ti conosciamo sappiamo che avevi un cuore d'oro ed eri di una simpatia infinita... e questa foto ne è la prova!",
    "link": "",
    "tag": "",
    "in_evidenza": false,
    "created_at": "2024-04-29T20:27:38.105+02:00",
    "updated_at": "2024-05-05T18:48:10.289+02:00",
    "pubblicazione": "lunedì 29 aprile 2024",
    "immagine": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYlk9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bf83506a57d96639e902188795d90482d53014c9/Screenshot%202024-04-29%20alle%2021.06.24.png",
    "immagine_mobile": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYmM9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9a05cd5712b2d69629367a51112e89742f52d301/f603f05e-81d9-4f25-82e7-4483b954dc84.jpeg",
    "articolo": false
    },
    {
    "id": 99,
    "titolo": "\"Benvenuto in Paradiso\"",
    "abstract": "Neanche il tempo di disfare le valigie in Paradiso, e Bepi si è subito dato da fare come al suo solito per accogliere Carlo, dopo una vita a San Donà. Le due colonne dell'Oratorio, sempre insieme!",
    "link": "",
    "tag": "",
    "in_evidenza": false,
    "created_at": "2024-04-29T12:26:25.963+02:00",
    "updated_at": "2024-05-05T18:48:04.030+02:00",
    "pubblicazione": "lunedì 29 aprile 2024",
    "immagine": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYTQ9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--673c616967759dd554e5cdd1ac1127925e8e68bf/WhatsApp%20Image%202024-04-29%20at%2011.31.54.jpeg",
    "articolo": false
    },
    {
    "id": 89,
    "titolo": "Grazie Bepi!",
    "abstract": "Ti dedichiamo questa foto: tu felice alla guida dei ragazzi su un sentiero di montagna. Per tutto il bene che hai fatto si è scomodata perfino Maria Ausiliatrice per venirti ad accompagnare in Cielo nel giorno dedicato a Lei.",
    "link": "",
    "tag": "scuola",
    "in_evidenza": false,
    "created_at": "2024-04-25T10:25:04.390+02:00",
    "updated_at": "2024-05-05T18:47:41.698+02:00",
    "pubblicazione": "giovedì 25 aprile 2024",
    "immagine": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWXc9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--a33217de074f9597f8371cbec8545bb4165b9a59/1920x1080.png",
    "immagine_mobile": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWlU9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e5375fde228b70c668c2baae9148f4a2ff567526/Screenshot%202024-04-26%20alle%2018.35.43.png",
    "articolo": false
    },
    {
    "id": 107,
    "titolo": "Gita a Torino classi prime",
    "abstract": "Salutiamo Valdocco dopo aver ringraziato don Bosco per l’esperienza vissuta insieme e per il dono di essere in una Scuola della Formazione Professionale salesiana! ",
    "link": "",
    "tag": "scuola",
    "in_evidenza": true,
    "created_at": "2024-05-05T19:00:28.266+02:00",
    "updated_at": "2024-05-05T19:00:28.276+02:00",
    "pubblicazione": "mercoledì 24 aprile 2024",
    "immagine": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBY009IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--137738ed30b97a68fa42eb2d71da9b1790bed208/439075618_18387510538072361_2359114219219896309_n.jpg",
    "articolo": false
    },
    {
    "id": 86,
    "titolo": "Ordinazione sacerdotale di don Simone Del Negro",
    "abstract": "I salesiani dell'Ispettoria Salesiana San Marco vi invitano all'ordinazione presbiterale di don Simone Del Negro...",
    "link": "",
    "tag": "",
    "in_evidenza": false,
    "created_at": "2024-04-24T10:29:18.076+02:00",
    "updated_at": "2024-04-27T10:40:48.953+02:00",
    "pubblicazione": "mercoledì 24 aprile 2024",
    "immagine": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYUk9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9d7a7c8588371097de499aa41acb27bf40cb0016/Screenshot%202024-04-26%20alle%2018.45.24.png",
    "immagine_mobile": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYU09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--588865b25e6aff3cd38ecaa0c9e8395ff9d05cb8/Screenshot%202024-04-26%20alle%2018.36.51.png",
    "immagine_schermo": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBYVk9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--d86ded1070bb19c411bf5af9dad332a91ac39a61/Ordinazione2_Schermi%20Oratorio-100.png",
    "articolo": true
    },
    {
    "id": 83,
    "titolo": "Inizia il conto alla rovescia",
    "abstract": "Inizia il conto alla rovescia per le preiscrizioni alla #per24: dalle 8.30 del 29 aprile per gli iscritti ai gruppi / dalle 8.30 del 1° maggio per tutti.\r\nPreparati studiando attentamente la procedura di preiscrizione e iscrizione.",
    "link": "https://per.donboscosandona.it",
    "tag": "per",
    "in_evidenza": false,
    "created_at": "2024-04-23T18:25:19.389+02:00",
    "updated_at": "2024-04-27T21:35:57.368+02:00",
    "pubblicazione": "martedì 23 aprile 2024",
    "immagine": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWVU9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--df20f1ee4f4a313f0a255cf431ba7909b5921165/iscrizioni.png",
    "articolo": false
    },
    {
    "id": 92,
    "titolo": "Il Cinema don Bosco omaggia Fellini",
    "abstract": "Francesca Fabbri Fellini ospite d’onore al Teatro Don Bosco per celebrare i 90 anni del Cinema don Bosco...",
    "link": "",
    "tag": "cinema",
    "in_evidenza": false,
    "created_at": "2024-04-26T09:15:33.544+02:00",
    "updated_at": "2024-04-26T09:15:33.567+02:00",
    "pubblicazione": "sabato 20 aprile 2024",
    "immagine": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWTg9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e9a03c816cbf81f3b4cff4608d80f5eaa5d55e53/9c9a48a73ffb183a78ad8af655bedca2eefbe69a.jpg",
    "articolo": true
    },
    {
    "id": 91,
    "titolo": "Il Clan alla comunità di Marango",
    "abstract": "Quest'anno il Clan ha partecipato al Triduo Pasquale con la comunità di Marango, passando tre giorni intrisi di spiritualità e testimonianze...",
    "link": "",
    "tag": "scout",
    "in_evidenza": false,
    "created_at": "2024-04-26T09:11:49.257+02:00",
    "updated_at": "2024-04-26T09:15:47.469+02:00",
    "pubblicazione": "venerdì 19 aprile 2024",
    "immagine": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWTQ9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3c1903f236317365f21e56c818d728f75e98da2f/184383ae708b9ca9cea497d5d59a008586a10e97.jpg",
    "articolo": true
    },
    {
    "id": 79,
    "titolo": "Benvenuti nel sito della #per24",
    "abstract": "È online il nuovo sito della #per24: scopri tutti i laboratori, il calendario... e soprattutto preparati leggendo tutto quello che c'è da sapere per fare l'iscrizione!!!",
    "link": "https://per.donboscosandona.it",
    "tag": "per",
    "in_evidenza": false,
    "created_at": "2024-04-07T12:31:55.428+02:00",
    "updated_at": "2024-04-27T11:32:09.018+02:00",
    "pubblicazione": "domenica  7 aprile 2024",
    "immagine": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWUE9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e21557d1cd84ed6a6d516f7a6734f8de3204d6bb/under_construction.png",
    "articolo": false
    },
    {
    "id": 78,
    "titolo": "Versione di iPad da acquistare",
    "abstract": "Versione minima di iPad da acquistare per gli allievi che frequenteranno il primo anno a partire da settembre.",
    "link": "",
    "tag": "scuola",
    "in_evidenza": false,
    "created_at": "2024-04-04T16:28:53.676+02:00",
    "updated_at": "2024-04-27T12:18:20.879+02:00",
    "pubblicazione": "giovedì  4 aprile 2024",
    "immagine": "https://channels.donboscosandona.it/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWDg9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--8cfc014467eb1a8ff74ce5de168cf02e47fd8ff8/0_uvdReRYq8VmxmR2d.jpg",
    "articolo": true
    }
    ]