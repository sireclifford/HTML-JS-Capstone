const speakersData = [
  {
    id: 1,
    name: "Lupita Nyong'o",
    profession: 'Actor',
    image: './assets/images/speaker_01.png',
    bio: 'Lupita is an Academy Award winning actress, producer, and New York Times best-selling author. She is a shareholder in Nairobi-based media and tech startup Kukua, and serves as executive producer of Kukua’s Super Sema African children’s franchise.',
  },
  {
    id: 2,
    name: 'Ryan Petersen',
    profession: 'CEO, Flexport',
    image: './assets/images/speaker_02.png',
    bio: 'Ryan is the founder and CEO of Flexport. Before starting Flexport in a bid to fix the global trade user experience, Ryan was co-founder and CEO of ImportGenius.com, a data-as-a-service business for global shipping. ',
  },
  {
    id: 3,
    name: 'Alicia Garza',
    profession: 'Principal, Black Futures Lab',
    image: './assets/images/speaker_03.png',
    bio: 'Alicia is an author, political strategist and organizer. Alicia founded (and is principal of) Black Futures Lab to make Black communities powerful in politics. She is the co-creator of #BlackLivesMatter and the Black Lives Matter Global Network. ',
  },
  {
    id: 4,
    name: 'Tope Awotona',
    profession: 'Founder & CEO, Calendly',
    image: './assets/images/speaker_04.png',
    bio: 'Tope is the founder and CEO of Calendly, a scheduling automation company bringing individuals, teams and enterprises together across the meeting lifecycle. Tope is also on the board of directors at Salesloft. ',
  },
  {
    id: 5,
    name: 'Carmelo Anthony',
    profession: 'NBA All-Star & Entrepreneur ',
    image: './assets/images/speaker_05.png',
    bio: 'Carmelo is a 10-time NBA All-Star, and an entrepreneur, philanthropist and producer. A leader and pioneer on the basketball court, his incredible career has paved the way for many brands, business ventures and philanthropic efforts on a global platform.',
  },
  {
    id: 6,
    name: 'Maëlle Gavet',
    profession: 'CEO, Techstars',
    image: './assets/images/speaker_06.png',
    bio: "Maëlle has been named as one of Fortune's 40 under 40, as a Young Global Leader by the World Economic Forum, and as one of the Most Creative People in Business by Fast Company. She was also on Time magazine's list of the 25 top female 'techpreneurs'.",
  },
];

const loadSpeakers = () => {
  const speakersContainer = document.querySelector('.speaker-list');

  const speakers = speakersData.map((speaker) => `
  <div class="speaker-card">
  <div class="speaker-image">
    <img src="${speaker.image}" />
  </div>
  <div class="speaker-info">
    <div class="speaker-name">
      <h3>${speaker.name}</h3>
    </div>
    <div class="organize">
      <p>${speaker.profession}</p>
    </div>
    <div class="speaker-description">
      <p>
       ${speaker.bio}
      </p>
    </div>
  </div>
</div>
`).join('');

  const range = document.createRange();

  range.selectNode(speakersContainer);
  const fragment = range.createContextualFragment(speakers);
  speakersContainer.appendChild(fragment);
};

loadSpeakers();