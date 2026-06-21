export type PlotlineId =
  | 'P01'
  | 'P02'
  | 'P03'
  | 'P04'
  | 'P05'
  | 'P06'
  | 'P07'
  | 'P08';

export interface GlossaryFocusEntry {
  id: string;
  displayLabel: string;
  railLabel?: string;
  chronology: {
    episodeId: string;
    sort: number;
  };
  colorVar: string;
  context: {
    excerpt: string;
    highlightedTerm: string;
  };
  apparatus: {
    explanation: string;
  };
  externalRefs?: {
    label: string;
    url?: string;
    note?: string;
  }[];
  relatedTerms?: string[];
}

const plotlineColorVars: Record<PlotlineId, string> = {
  P01: '--plotline-slothrop',
  P02: '--plotline-blicero',
  P03: '--plotline-enzian',
  P04: '--plotline-pokler',
  P05: '--plotline-pointsman',
  P06: '--plotline-counterforce',
  P07: '--plotline-tchitcherine',
  P08: '--plotline-film',
};


export const glossaryFocusEntries: GlossaryFocusEntry[] = [
  // part 1 episodes
  {
    id: 'screaming',
    displayLabel: 'A screaming comes across the sky',
    railLabel: 'Screaming',
    chronology: { episodeId: '1.01', sort: 100.1 },
    colorVar: '--color-accent',
    context: {
      excerpt:
        'A screaming comes across the sky. It has happened before, but there is nothing to compare it to now.',
      highlightedTerm: 'screaming',
    },
    apparatus: {
      explanation:
        'The V-2 travels faster than sound, so the novel\'s opening scream arrives after the rocket and its impact; cause has already passed when the warning sound reaches the listener. Weisenburger places \'It has happened before\' inside the hagiographic four-part structure that he traces across the novel, so the sentence also carries a liturgical register from its first breath.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Identifies the hagiographic four-part structure and the liturgical echo of \'It has happened before.\'',
      },
    ],
    relatedTerms: ['v2-a4', 'brennschluss', 'pavlovian'],
  },
  {
    id: 'crystal-palace',
    displayLabel: 'Crystal Palace',
    chronology: { episodeId: '1.01', sort: 101 },
    colorVar: '--color-accent',
    context: {
      excerpt:
        'It will be a spectacle: the fall of a crystal palace. But coming down in total blackout, without one glint of light, only great invisible crashing.',
      highlightedTerm: 'crystal palace',
    },
    apparatus: {
      explanation:
        'Sir Joseph Paxton\'s glass-and-iron hall, built for the Great Exhibition of 1851 and re-erected at Sydenham Hill, burned down in 1936; its surviving towers were demolished in 1940 so that Luftwaffe bomber crews could not use them as landmarks. The image in the novel\'s opening dream carries a Victorian monument to progress that was literally dismantled to deny the enemy a navigational fix, a transparent structure whose visibility had become a liability.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the Crystal Palace image at V3.7; notes the 1940 tower demolition.',
      },
      {
        label: 'Crystal Palace (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/The_Crystal_Palace',
        note: 'History of Paxton\'s structure from 1851 through the 1936 fire.',
      },
    ],
    relatedTerms: ['screaming'],
  },
  {
    id: 'absolute-zero',
    displayLabel: 'Absolute Zero',
    chronology: { episodeId: '1.01', sort: 101.05 },
    colorVar: '--color-accent',
    context: {
      excerpt:
        'developing through those emptying days brilliant and deep, especially at dawn, with blue shadows to seal its passage, to try to bring events to Absolute Zero',
      highlightedTerm: 'Absolute Zero',
    },
    apparatus: {
      explanation:
        'Absolute zero is the lower limit of the thermodynamic temperature scale, -273.15 degrees Celsius, the point at which molecular motion effectively ceases. Pavlov uses the same phrase in his *Lectures on Conditioned Reflexes*: an unreinforced conditioned reflex that decays without repetition returns to \'an absolute zero\' of response. Pirate\'s opening dream keeps both registers in play at once, and Weisenburger reads the phrase across the thermodynamic definition and the Pavlovian one without asking the passage to settle for either.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the dual meaning at V3.34; quotes Pavlov\'s *Lectures* 2:121 on extinction returning to \'an absolute zero.\'',
      },
      {
        label: 'Absolute zero (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Absolute_zero',
        note: 'The thermodynamic definition.',
      },
    ],
    relatedTerms: ['pavlovian', 'conditioned-reflex', 'transmarginal'],
  },
  {
    id: 'progressive-knotting',
    displayLabel: 'progressive knotting into',
    railLabel: 'knotting into',
    chronology: { episodeId: '1.01', sort: 101.07 },
    colorVar: '--color-accent',
    context: {
      excerpt:
        'this is not a disentanglement from, but a progressive knotting into.',
      highlightedTerm: 'progressive knotting into',
    },
    apparatus: {
      explanation:
        'The novel\'s second sentence sets aside \'disentanglement\' in favour of \'a progressive knotting into,\' and its syntax begins by offering escape before drawing the sentence and the novel further inside the knot.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Glosses the second sentence and its refusal of disentanglement.',
      },
    ],
    relatedTerms: ['preterite', 'they-them'],
  },
  {
    id: 'new-star',
    displayLabel: 'A new star',
    chronology: { episodeId: '1.01', sort: 101.1 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'Something has just sparked, very brightly. A new star, nothing less noticeable.',
      highlightedTerm: 'new star',
    },
    apparatus: {
      explanation:
        'Pirate watches the V-2\'s exhaust plume rise in the east, its vapour trail lit by the sun over Holland. Weisenburger follows this \'new star\' through the Advent calendars, the Star of Bethlehem, zodiacal signs, and the pins on Slothrop\'s London map, so the iconographic first light in each case is a V-2 climbing over Holland.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the star chain at V6.21; tracks the image through Advent, zodiac, and Slothrop\'s map.',
      },
    ],
    relatedTerms: ['v2-a4', 'screaming'],
  },
  {
    id: 'soe',
    displayLabel: 'Special Operations Executive',
    railLabel: 'SOE',
    chronology: { episodeId: '1.01', sort: 101.15 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'The Special Operations Executive has trained him to fast responses.',
      highlightedTerm: 'Special Operations Executive',
    },
    apparatus: {
      explanation:
        'Britain created the Special Operations Executive in July 1940 to conduct espionage, sabotage, and support for resistance movements in occupied Europe. David Irving\'s *The Mare\'s Nest* records that eleven SOE commandos parachuted into France and the Netherlands in March 1944 to gather intelligence on German V-weapons, so Pirate\'s employer had a direct operational interest in the rocket he watches climb over the Channel. His trained rooftop reflexes introduce the agency before its offices appear.',
    },
    externalRefs: [
      {
        label: 'David Irving, *The Mare\'s Nest*',
        note: 'Documents the SOE commandos parachuted into occupied Europe in March 1944 to gather V-weapon intelligence (p. 209).',
      },
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Cites Irving at V5.15; identifies SOE as Pirate\'s employer.',
      },
      {
        label: 'Special Operations Executive (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Special_Operations_Executive',
        note: 'The wartime British agency for sabotage and resistance support.',
      },
    ],
    relatedTerms: ['pirate-prentice', 'pisces', 'white-visitation'],
  },
  {
    id: 'pirate-prentice',
    displayLabel: 'Pirate Prentice',
    chronology: { episodeId: '1.01', sort: 101.17 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'His name is Capt. Geoffrey (\'Pirate\') Prentice.',
      highlightedTerm: 'Pirate',
    },
    apparatus: {
      explanation:
        'Pirate grows bananas on a London rooftop and cooks breakfast while a V-2 approaches, working for the Special Operations Executive out of an office in the Chelsea Embankment. His useful intelligence gift is that he receives other people\'s fantasies as though they were his own, an ability that leaves little room for a private inner life. By Part 4 he is organising the Counterforce that the breakfast guests have gradually become.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Traces Pirate\'s arc from banana breakfast to Counterforce organiser.',
      },
    ],
    relatedTerms: ['roger-mexico', 'banana-breakfast'],
  },
  {
    id: 'v-e-day',
    displayLabel: 'V-E Day',
    chronology: { episodeId: '1.01', sort: 101.2 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'Tell Miss Grable you\'re not able, / Not till V-E Day, oh, / Ev\'rything\'ll be grand in Civvie Street',
      highlightedTerm: 'V-E Day',
    },
    apparatus: {
      explanation:
        'Victory in Europe, officially declared 8 May 1945; also Thomas Pynchon\'s eighth birthday, a biographical coincidence that Weisenburger notes. In December 1944, when this scene is set, V-E Day was still a deferred horizon. Osbie Feel\'s dawn song treats it as the threshold where wartime licence gives way to peacetime propriety, \'Civvie Street\' being the service slang for civilian life.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates V-E Day at V9.4; notes the Pynchon birthday coincidence.',
      },
      {
        label: 'Victory in Europe Day (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Victory_in_Europe_Day',
        note: 'The 8 May 1945 declaration and its aftermath.',
      },
    ],
  },
  {
    id: 'cest-magnifique',
    displayLabel: 'C\'est magnifique, mais ce n\'est pas la guerre',
    railLabel: 'C\'est magnifique',
    chronology: { episodeId: '1.01', sort: 101.25 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'to spell out the words C\'est magnifique, mais ce n\'est pas la guerre which Pirate has appropriated as his motto',
      highlightedTerm: 'C\'est magnifique',
    },
    apparatus: {
      explanation:
        'The French general Pierre Bosquet is said to have spoken these words while watching the Charge of the Light Brigade at Balaclava on 25 October 1854: \'It is magnificent, but it is not war.\' Pirate pipes them across a banana blancmange in icing, so a nineteenth-century verdict on military folly arrives at breakfast during another failed campaign.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the Bosquet attribution at V10.28; cross-references Tennyson at V270.14.',
      },
      {
        label: 'Battle of Balaclava (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Balaclava',
        note: 'The 1854 engagement and the Charge of the Light Brigade.',
      },
    ],
    relatedTerms: ['banana-breakfast', 'pirate-prentice'],
  },
  {
    id: 'greenwich',
    displayLabel: 'Greenwich',
    chronology: { episodeId: '1.01', sort: 101.3 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'there\'s a message addressed to him, waiting at Greenwich.',
      highlightedTerm: 'Greenwich',
    },
    apparatus: {
      explanation:
        'The mail-carrying rocket has impacted near the Royal Observatory at Greenwich, the point defined as having zero degrees of longitude and therefore the coordinate origin of British imperial cartography. The impact site coincides with the prime meridian from which longitude is measured, giving the opening pages a spatial zero to sit alongside the earlier Pavlovian one.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the Greenwich impact at V11.10 and the \'zero longitude\' reference at V20.4.',
      },
      {
        label: 'Royal Observatory, Greenwich (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Royal_Observatory,_Greenwich',
        note: 'Home of the prime meridian and Greenwich Mean Time.',
      },
    ],
    relatedTerms: ['v2-a4', 'absolute-zero', 'pirate-prentice'],
  },
  {
    id: 'brennschluss',
    displayLabel: 'Brennschluss',
    chronology: { episodeId: '1.01', sort: 101.4 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'what\'s their word . . . Brennschluss.',
      highlightedTerm: 'Brennschluss',
    },
    apparatus: {
      explanation:
        'Pirate reaches for the novel\'s first German word: \'what\'s their word... Brennschluss.\' Literally \'burning end,\' it names engine cut-off, the moment when thrust stops and the rocket enters unpowered flight along its ballistic arc. Pirate reaches for the term in the original German, so the technical vocabulary of the weapon reaches London before any of its offices in the novel have named it in English.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Provides the rocketry context for Brennschluss and tracks its recurrence.',
      },
    ],
    relatedTerms: ['v2-a4', '00000'],
  },
  {
    id: 'v2-a4',
    displayLabel: 'A4 (V-2)',
    chronology: { episodeId: '1.02', sort: 102.1 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'That V-2 on the way? A4, yes.',
      highlightedTerm: 'V-2',
    },
    apparatus: {
      explanation:
        'A4 is the engineering designation *Aggregat 4*; V-2 is the propaganda name *Vergeltungswaffe 2* (\'retaliation weapon 2\'). Developed at Peenemunde under Wernher von Braun and used against Allied cities from September 1944, the rocket travelled faster than sound, so its warning arrived after the impact. Engineers and intelligence officers tend to say \'A4\' in the novel; the civilians living under the attacks know the weapon as the V-2.',
    },
    externalRefs: [
      {
        label: 'Michael J. Neufeld, *The Rocket and the Reich*',
        note: 'Standard history of V-2 development at Peenemunde; covers the A4/V-2 naming split.',
      },
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Page-by-page annotation of technical terms including rocket nomenclature.',
      },
      {
        label: 'V-2 rocket (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/V-2_rocket',
        note: 'History and technical description of the A4/V-2.',
      },
    ],
    relatedTerms: ['brennschluss', '00000'],
  },
  {
    id: 'banana-breakfast',
    displayLabel: 'Banana breakfast',
    chronology: { episodeId: '1.02', sort: 102.2 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'Pirate has become famous for his Banana Breakfast. Messmates throng here from all over England, even some who are allergic or outright hostile to bananas, just to watch.',
      highlightedTerm: 'Banana Breakfast',
    },
    apparatus: {
      explanation:
        'Pirate serves an inventory of banana dishes on a London roof while a V-2 is incoming, four songs and several routines interrupting the meal. The tropical abundance is absurd under wartime rationing, and it has arrived through the same plantation trade that the novel later follows into other colonial histories.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the breakfast catalogue and identifies each song\'s source.',
      },
    ],
    relatedTerms: ['pirate-prentice', 'fuck-the-war'],
  },
  {
    id: 'the-league-iasi',
    displayLabel: 'The League of the Archangel Michael',
    railLabel: 'Iron Guard',
    chronology: { episodeId: '1.02', sort: 102.5 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'I know they are of Iasi, of Codreanu, his men, men of the League, they . . . they kill for him',
      highlightedTerm: 'the League',
    },
    apparatus: {
      explanation:
        'Corneliu Zelea Codreanu founded the Legion of the Archangel Michael in Iasi in 1927; its fascist political and paramilitary wing became known as the Iron Guard. Members wore green shirts, and some carried small bags of Romanian soil around their necks. Pirate encounters them inside the surrogate fantasy of an exiled Romanian royalist whose interwar political categories have survived into the Second World War.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the League and Iron Guard at V11.35; provides the green-shirt and soil-bag details.',
      },
      {
        label: 'Corneliu Zelea Codreanu (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Corneliu_Zelea_Codreanu',
        note: 'Founder of the Legion of the Archangel Michael and the Iron Guard.',
      },
      {
        label: 'Iron Guard (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Iron_Guard',
        note: 'The Romanian fascist movement, its rituals and violence.',
      },
    ],
    relatedTerms: ['pirate-prentice'],
  },
  {
    id: 'adenoid',
    displayLabel: 'The Adenoid',
    chronology: { episodeId: '1.02', sort: 102.6 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'It was a giant Adenoid. At least as big as St. Paul\'s, and growing hour by hour.',
      highlightedTerm: 'Adenoid',
    },
    apparatus: {
      explanation:
        'In Pirate\'s first surrogate fantasy, Lord Blatherard Osmo\'s lymphatic tissue grows into a monster large enough to consume London. Weisenburger traces the name to Adenoid Hynkel, the Hitler figure in Chaplin\'s *The Great Dictator* (1940); the adenoidal Richard M. Zhlubb at the Orpheus Theatre in Part 4 will later give the image a Nixonian face, so the fantasy at the breakfast table and the fantasy under the falling rocket share a single body-horror figure.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the Adenoid at V14.30; identifies the Chaplin link and the Zhlubb bookend.',
      },
      {
        label: 'The Great Dictator (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/The_Great_Dictator',
        note: 'Chaplin\'s 1940 satire featuring \'Adenoid Hynkel.\'',
      },
    ],
    relatedTerms: ['pirate-prentice'],
  },
  {
    id: 'shaef',
    displayLabel: 'SHAEF',
    chronology: { episodeId: '1.03', sort: 103 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'twin silver hairbrushes each in the shape of the flaming SHAEF sword',
      highlightedTerm: 'SHAEF',
    },
    apparatus: {
      explanation:
        'Supreme Headquarters, Allied Expeditionary Force, the command Eisenhower ran from January 1944 for the invasion and occupation of northwest Europe. SHAEF servicemen wore a shoulder patch depicting a flaming sword with a rainbow arching over it; Bloat has the insignia engraved on hairbrushes by Garrard\'s, the Crown Jewellers on Regent Street. The military rainbow in the SHAEF badge quietly anticipates the novel\'s title, though it appears here on a shoulder patch stitched to a uniform, an emblem of command well before the phenomenon of light.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the SHAEF sword at V17.7; notes the Garrard & Co. detail.',
      },
      {
        label: 'SHAEF (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Supreme_Headquarters_Allied_Expeditionary_Force',
        note: 'History of the Allied command 1944-1945.',
      },
    ],
    relatedTerms: ['achtung', 'white-visitation'],
  },
  {
    id: 'tantivy',
    displayLabel: 'Tantivy Mucker-Maffick',
    chronology: { episodeId: '1.03', sort: 103.1 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'Bloat looks into the office assigned to his old Jesus College friend, Lt. Oliver (\'Tantivy\') Mucker-Maffick.',
      highlightedTerm: 'Tantivy',
    },
    apparatus: {
      explanation:
        '\'Tantivy\' is a galloping gait or headlong rush; \'maffick\' was coined for the public celebrations after the relief of Mafeking in 1900 during the Second Boer War; a \'mucker\' wallows in low pursuits. The three-layer name carries imperial jubilation into the ACHTUNG cubicle that Tantivy shares with Slothrop, and he remains Slothrop\'s closest companion through Part 1 and into the Riviera episodes before he disappears from the narrative.',
    },
    externalRefs: [
      {
        label: 'Terrill Shepard Soules, \'What To Think about *Gravity\'s Rainbow*\'',
        note: 'Glosses the three etymological layers: tantivy (galloping gait), maffick (Mafeking jubilation), mucker (low pursuits).',
      },
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Cites Soules at V17.36; notes the Boer War derivation of \'maffick.\'',
      },
      {
        label: 'Siege of Mafeking (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Siege_of_Mafeking',
        note: 'The Boer War siege (1899-1900) whose relief generated the verb \'maffick.\'',
      },
    ],
    relatedTerms: ['slothrop', 'achtung'],
  },
  {
    id: 'achtung',
    displayLabel: 'ACHTUNG',
    chronology: { episodeId: '1.03', sort: 103.2 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'ACHTUNG is Allied Clearing House, Technical Units, Northern Germany.',
      highlightedTerm: 'ACHTUNG',
    },
    apparatus: {
      explanation:
        'Slothrop works at the fictional Allied Clearing House, Technical Units, Northern Germany, just off Grosvenor Square, and the acronym spells the German command for \'attention\' or \'warning.\' ACHTUNG is \'the poor relative of Allied intelligence,\' sufficiently marginal that the surveillance of Slothrop can pass as ordinary office work.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates ACHTUNG and its Grosvenor Square setting.',
      },
    ],
    relatedTerms: ['slothrop', 'tantivy', 'shaef'],
  },
  {
    id: 'conditioned-reflex',
    displayLabel: 'Conditioned reflex',
    chronology: { episodeId: '1.04', sort: 104 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'a peculiar sensitivity to what is revealed in the sky. (But a hardon?)',
      highlightedTerm: 'sensitivity',
    },
    apparatus: {
      explanation:
        'Slothrop\'s erections precede V-2 strikes on the London map. Pointsman reads this as a conditioned reflex in Pavlov\'s technical sense: infant Slothrop was conditioned by Laszlo Jamf with Imipolex G, and the response has persisted into adulthood. Whether the correlation is true, paranoid, or a statistical artefact the novel never resolves, and the question structures the first two parts before the text abandons it.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Tracks the conditioned-reflex hypothesis across Parts 1-2; provides the Pavlovian framework in detail.',
      },
      {
        label: 'Classical conditioning (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Classical_conditioning',
        note: 'Pavlov\'s experimental framework and its later reception.',
      },
    ],
    relatedTerms: ['pavlovian', 'slothrop', 'imipolex-g', 'gorodki'],
  },
  {
    id: 'slothrop',
    displayLabel: 'Tyrone Slothrop',
    chronology: { episodeId: '1.04', sort: 104 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'There is in his history, and likely, God help him, in his dossier, a peculiar sensitivity to what is revealed in the sky. (But a hardon?)',
      highlightedTerm: 'peculiar sensitivity',
    },
    apparatus: {
      explanation:
        'A Massachusetts Puritan descendant working at ACHTUNG, Slothrop appears to correlate his body with V-2 impacts on the London map, and the novel keeps him at its centre for as long as it can hold him together as a single figure. Institutions fight over him from the White Visitation to the Zone, he chases the Schwarzgerat across occupied Germany in a series of costumes and aliases (Rocketman, Ian Scuffling, Plechazunga), and by Parts 3 and 4 the text can no longer locate him as a single figure. His scattering interests me particularly, since the novel disperses its protagonist without killing him off or sending him home.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Traces the Slothrop arc across the novel; documents the aliases and the dispersal.',
      },
    ],
    relatedTerms: ['conditioned-reflex', 'puritan-paranoia', 'rocketman', 'william-slothrop'],
  },
  {
    id: 'buzzbomb',
    displayLabel: 'Buzzbomb (V-1)',
    chronology: { episodeId: '1.04', sort: 104.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'this last summer they started in with those buzzbombs. You\'d be walking on the street, in bed just dozing off suddenly here comes this farting sound over the rooftops',
      highlightedTerm: 'buzzbombs',
    },
    apparatus: {
      explanation:
        'The V-1, called the doodlebug or buzzbomb by Londoners, was a pilotless flying bomb driven by a pulse-jet engine at roughly 400 miles per hour and used against Britain from June 1944. Its distinctive engine gave a few seconds of warning; when the fuel cut off and the buzzing stopped, the bomb dived and detonated within seconds. The V-2 that replaced the V-1 from September 1944 gave no such warning, since it travelled faster than sound and its engine noise arrived only after the warhead.',
    },
    externalRefs: [
      {
        label: 'David Irving, *The Mare\'s Nest*',
        note: 'Documents V-1 launch statistics and the pulse-jet technology (pp. 123-25).',
      },
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the V-1 at V21.9; cites Irving on launch numbers and the engine cutoff-to-dive interval.',
      },
      {
        label: 'V-1 flying bomb (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/V-1_flying_bomb',
        note: 'History and mechanism of the pulse-jet flying bomb.',
      },
    ],
    relatedTerms: ['v2-a4', 'screaming'],
  },
  {
    id: 'wilde-love',
    displayLabel: 'Wilde love and joy',
    chronology: { episodeId: '1.04', sort: 104.15 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'I know there is wilde love and joy enough in the world, preached Thomas Hooker, as there are wilde Thyme, and other herbes; but we would have garden love, and garden joy, of Gods owne planting.',
      highlightedTerm: 'wilde love',
    },
    apparatus: {
      explanation:
        'The New England Puritan minister Thomas Hooker (1586-1647) contrasts \'wilde love\' with the \'garden love\' of God\'s own planting, in a passage that David Seed identified as coming from Hooker\'s 1637 sermon sequence *The Soules Implantation into the Natural Olive*; there Adam is the old wild olive and Christ the true vine. Pynchon sets this Puritan distinction beside Slothrop\'s map of London lovers, and the spelling \'Wilde\' also recalls Oscar Wilde, whose Chelsea house (16, later 34, Tite Street, just off the Chelsea Embankment) Weisenburger names as an antecedent for Pirate\'s own bohemian address.',
    },
    externalRefs: [
      {
        label: 'David Seed, *The Fictional Labyrinths of Thomas Pynchon*',
        note: 'Identified the Hooker sermon source and analysed the ironic reframing of Puritan \'garden love\' theology.',
      },
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the Hooker passage at V22.24; cites Seed\'s identification of the sermon source.',
      },
      {
        label: 'Thomas Hooker (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Thomas_Hooker',
        note: 'Puritan minister (1586-1647), founder of Connecticut, author of *The Soules Implantation*.',
      },
    ],
    relatedTerms: ['slothrop', 'william-slothrop', 'puritan-paranoia'],
  },
  {
    id: 'ten-generations',
    displayLabel: 'Ten generations',
    chronology: { episodeId: '1.04', sort: 104.2 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'the nine or ten generations tumbling back, branching inward: every one, except for William the very first, lying under fallen leaves',
      highlightedTerm: 'ten generations',
    },
    apparatus: {
      explanation:
        'The Slothrop genealogy passage traces the family from William the fur-trader through nine or ten generations of declining New England Protestantism, and Weisenburger notes the autobiographical parallel: Thomas Ruggles Pynchon Jr. is himself nine or ten generations from the founding Pynchons of Springfield, Massachusetts. The real William Pynchon (1590-1662) was a patentee and treasurer of the Massachusetts Bay Company whose theological work *The Meritorious Price of Our Redemption* (1650) was condemned by the Massachusetts General Court and publicly burned in Boston, just as William Slothrop\'s is inside the novel. The passage also introduces *hysteron proteron*, the trope of backwards motion that Weisenburger follows through the novel.',
    },
    externalRefs: [
      {
        label: 'David Seed, *The Fictional Labyrinths of Thomas Pynchon*',
        note: 'Identified the Thomas Hooker sermon source quoted in the preceding passage and the ironic parallel between Slothrop and Pynchon genealogies.',
      },
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the genealogy at V27.4; identifies William Pynchon and the hysteron proteron trope.',
      },
      {
        label: 'William Pynchon (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/William_Pynchon',
        note: 'Founder of Springfield and author of the condemned *Meritorious Price*.',
      },
    ],
    relatedTerms: ['william-slothrop', 'slothrop', 'puritan-paranoia'],
  },
  {
    id: 'white-visitation',
    displayLabel: 'The White Visitation',
    chronology: { episodeId: '1.05', sort: 105 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'down to \'The White Visitation,\' which houses PISCES',
      highlightedTerm: 'The White Visitation',
    },
    apparatus: {
      explanation:
        'A requisitioned country house on the Sussex coast, near Brighton, holds Pointsman\'s PISCES operation, Psi Section\'s mediums, the ARF experimental dogs, and adjacent intelligence work. \'Visitation\' suggests a spectral appearance, and \'white\' joins that haunting to the institution\'s racial categories; the drawing rooms and bedrooms have become laboratories and offices without losing their country-house form.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Traces the White Visitation\'s staff and operations across the novel.',
      },
    ],
    relatedTerms: ['pointsman', 'pisces', 'pavlovian', 'eventyr'],
  },
  {
    id: 'sensitive-flame',
    displayLabel: 'Sensitive flame',
    chronology: { episodeId: '1.05', sort: 105 },
    colorVar: plotlineColorVars.P02,
    context: {
      excerpt:
        'adjusted to what scientists of the last century called a \'sensitive flame\': invisible at the base, fading upward into smooth blue light that hovers several inches above, a glimmering small cone',
      highlightedTerm: 'sensitive flame',
    },
    apparatus: {
      explanation:
        'A sensitive flame is a gas jet adjusted so that small changes in air pressure alter its visible shape, a nineteenth-century instrument that Victorian spiritualists used to detect physical interference during seances. In the seance room at Snoxall\'s, any human movement in the room would disturb the flame, which meant that a disturbance in its absence became, for the participants, evidence for the presence they had gathered to detect.',
    },
    externalRefs: [
      {
        label: 'Ronald Pearsall, *The Table-Rappers* (1972)',
        note: 'Documents Victorian seance protocols: rules on group size (3-12, ideal 8), opposite-temperament participants, and the use of sensitive flames to detect physical interference (pp. 42-43).',
      },
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the sensitive flame at V29.31; cites Pearsall on Victorian anti-hoax technology.',
      },
    ],
    relatedTerms: ['eventyr', 'peter-sachsa'],
  },
  {
    id: 'invisible-hand',
    displayLabel: 'The Invisible Hand',
    chronology: { episodeId: '1.05', sort: 105.05 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'A market needed no longer be run by the Invisible Hand, but now could create itself—its own logic, momentum, style, from inside. Putting the control inside was ratifying what de facto had happened—that you had dispensed with God.',
      highlightedTerm: 'Invisible Hand',
    },
    apparatus: {
      explanation:
        'In *The Wealth of Nations* (1776), Adam Smith writes that a self-interested merchant may be \'led by an invisible hand to promote an end which was no part of his intention.\' Roland Feldspath\'s spirit says that a market which now generates its own logic from inside has effectively dispensed with Providence; Weisenburger reads the passage alongside the \'hand of God\' on Constant Slothrop\'s headstone and the wartime cartels that erased Smith\'s distinction between domestic and foreign manufacturers.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the Smith allusion at V30.30; connects it to Constant Slothrop\'s headstone and the cartel economy.',
      },
      {
        label: 'Adam Smith, *The Wealth of Nations* (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/The_Wealth_of_Nations',
        note: 'Source of the \'invisible hand\' metaphor (Book IV, ch. 2).',
      },
    ],
    relatedTerms: ['they-them', 'ig-farben', 'puritan-paranoia'],
  },
  {
    id: 'ouspenskian',
    displayLabel: 'Ouspenskian',
    chronology: { episodeId: '1.05', sort: 105.06 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'More Ouspenskian nonsense, whispers a lady brushing by on the arm of a dock worker.',
      highlightedTerm: 'Ouspenskian',
    },
    apparatus: {
      explanation:
        'Petr Demianovich Ouspensky (1878-1947) was a Russian esoteric philosopher who studied with George Gurdjieff, later broke from him, and lectured in London until 1939. *Tertium Organum* (published in Russian in 1912, English 1922) argues for higher dimensions and forms of consciousness beyond ordinary perception, and Pynchon introduces that system into the seance scene through a passing voice that dismisses it as \'nonsense.\'',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the Ouspensky reference at V30.37; provides the Gurdjieff connection and bibliographic details.',
      },
      {
        label: 'P. D. Ouspensky (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/P._D._Ouspensky',
        note: 'Russian esoteric philosopher (1878-1947); disciple of Gurdjieff; author of *Tertium Organum*.',
      },
    ],
    relatedTerms: ['eventyr', 'sensitive-flame'],
  },
  {
    id: 'zipfs-principle',
    displayLabel: 'Zipf\'s Principle of Least Effort',
    railLabel: 'Zipf\'s Principle',
    chronology: { episodeId: '1.05', sort: 105.07 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'Recall Zipf\'s Principle of Least Effort: if we plot the frequency of a word P sub n against its rank-order n on logarithmic axes, we should of course get something like a straight line',
      highlightedTerm: 'Zipf\'s Principle of Least Effort',
    },
    apparatus: {
      explanation:
        'George Kingsley Zipf (1902-1950), a Harvard linguist, observed that word frequency in natural language is approximately inversely proportional to rank, producing a near-straight line when plotted on logarithmic axes. Weisenburger locates Pynchon\'s source in Zipf\'s *The Psycho-Biology of Language* (1935); Milton Gloaming tests seance transcripts against that line, and a pathological \'bow shape\' in the data then recalls the parabolic arc of the rocket.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates Zipf at V32.5; corrects the source to *The Psycho-Biology of Language* (1935) and explains the \'bow shape\' connection to the parabola.',
      },
      {
        label: 'Zipf\'s law (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Zipf%27s_law',
        note: 'The rank-frequency distribution in natural language.',
      },
    ],
    relatedTerms: ['parabola', 'eventyr', 'poisson-distribution'],
  },
  {
    id: 'they-them',
    displayLabel: 'They / Them',
    chronology: { episodeId: '1.05', sort: 105.1 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'he guesses They have euchred Mexico into some such Byzantine exercise',
      highlightedTerm: 'They',
    },
    apparatus: {
      explanation:
        'No single organisation exhausts \'They\' in the novel; the capitalised pronouns gather the offices, laboratories, armies, and cartels that sort people for use or disposal, while withholding the proper name that would confine responsibility to one institution. The construction has since become one of the standard ways critics describe the book\'s diffuse power, whether reading Pynchon through Foucault, corporate cartel history, or Cold War paranoia.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Tracks the They/Them pronoun and its shifting referents through the novel.',
      },
    ],
    relatedTerms: ['preterite', 'ig-farben', 'pisces'],
  },
  {
    id: 'blicero',
    displayLabel: 'Captain Blicero (Weissmann)',
    railLabel: 'Blicero',
    chronology: { episodeId: '1.05', sort: 105.1 },
    colorVar: plotlineColorVars.P02,
    context: {
      excerpt:
        'Once transected into the realm of Dominus Blicero, Roland found that all the signs had turned against him.',
      highlightedTerm: 'Dominus Blicero',
    },
    apparatus: {
      explanation:
        'Weissmann enters the novel through a seance under the name Blicero before he appears in person, and Weisenburger connects the name to German *bleichen* (to bleach) and an Old Low German term for \'white death.\' By 1944 he commands the V-2 battery in Holland, near the Duindigt racecourse outside The Hague, where he casts Katje and Gottfried as Hansel and Gretel and keeps the witch\'s role for himself, and the fairy-tale casting is already inflected by the \'white death\' packed into his adopted name.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Traces the etymology of \'Blicero\' to bleichen and Low German \'white death.\'',
      },
    ],
    relatedTerms: ['00000', 'maerchen', 'enzian', 'sudwest'],
  },
  {
    id: 'pavlovian',
    displayLabel: 'Pavlovian',
    chronology: { episodeId: '1.05', sort: 105.2 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'a Behaviorist here, a Pavlovian there',
      highlightedTerm: 'Pavlovian',
    },
    apparatus: {
      explanation:
        'Conditioning, reflex, extinction, and inhibition enter the intelligence operation from Ivan Pavlov\'s laboratory work on dogs at the Institute of Experimental Medicine in Petrograd, whose findings were compiled in the two volumes of *Lectures on Conditioned Reflexes*, translated by Horsley Gantt and published by International in 1928 and 1941. Pointsman applies the same vocabulary to experimental dogs, traumatised patients, and Slothrop, so the wartime surveillance of a single American body becomes a Pavlovian experiment whose subject has not consented.',
    },
    externalRefs: [
      {
        label: 'Grucic Grmusa, \'Knotting into *Gravity\'s Rainbow*\'',
        url: 'https://www.researchgate.net/publication/341038721',
        note: 'Reads the novel through scientific paradigms including Pavlovian determinism.',
      },
      {
        label: 'Ivan Pavlov (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Ivan_Pavlov',
        note: 'Russian physiologist whose conditioned-reflex work underwrites Pointsman\'s programme.',
      },
    ],
    relatedTerms: ['poisson-distribution', 'pointsman', 'white-visitation', 'gorodki', 'maxwells-demon'],
  },
  {
    id: 'pisces',
    displayLabel: 'PISCES',
    chronology: { episodeId: '1.05', sort: 105.3 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'known as PISCES, Psychological Intelligence Schemes for Expediting Surrender',
      highlightedTerm: 'PISCES',
    },
    apparatus: {
      explanation:
        'Psychological Intelligence Schemes for Expediting Surrender is the bureaucratic cover for Pointsman\'s work at the White Visitation. The purposeful acronym says nothing about the conditioned dogs, the seances, the drugged interrogations, or the experiment Pointsman wants to perform on Slothrop, so the cover holds all the practices its own paperwork will not name.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Identifies the PISCES bureaucracy and its cover for Pavlovian and paranormal work.',
      },
    ],
    relatedTerms: ['pointsman', 'white-visitation', 'pavlovian'],
  },
  {
    id: 'operation-black-wing',
    displayLabel: 'Operation Black Wing',
    chronology: { episodeId: '1.05', sort: 105.4 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'the Firm\'s latest mania, known as Operation Black Wing',
      highlightedTerm: 'Black Wing',
    },
    apparatus: {
      explanation:
        'Myron Grunton\'s BBC broadcasts invent African rocket troops in order to frighten German civilian listeners, calling them Schwarzkommando before British intelligence knows that any Herero rocket unit exists. Enzian\'s group in the Zone then takes up the name that Allied propaganda had already projected onto them, so a word coined inside a PWE broadcast file, never used of any real unit, arrives as the self-designation of Herero survivors of the 1904 killings whom the broadcasters never consulted.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates Operation Black Wing and connects it to the Herero backstory in Part 4.',
      },
    ],
    relatedTerms: ['schwarzkommando', 'white-visitation'],
  },
  {
    id: 'elas-greeks',
    displayLabel: 'ELAS Greeks',
    chronology: { episodeId: '1.06', sort: 106 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'ELAS Greeks stalking royalists, unrepatriable dreamers of all languages hoping through will, fists, prayer to bring back kings, republics, pretenders',
      highlightedTerm: 'ELAS Greeks',
    },
    apparatus: {
      explanation:
        'ELAS, the *Ellinikos Laikos Apeleftherotikos Stratos* (Greek People\'s Liberation Army), was the military arm of the Communist-led EAM resistance during the Axis occupation. In December 1944 ELAS fought British troops and the British-backed Greek government in Athens during the Dekemvriana, and the passage places its exiled fighters in wartime London alongside Free French and Lublin Poles, so rival plans for postwar government arrive in the city before the war is over.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the exile catalogue at V34.28; identifies the Times of London as Pynchon\'s source; notes the Scobie orders.',
      },
      {
        label: 'Greek People\'s Liberation Army (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Greek_People%27s_Liberation_Army',
        note: 'ELAS, its resistance record and the Dekemvriana fighting of December 1944.',
      },
    ],
  },
  {
    id: 'pointsman',
    displayLabel: 'Ned Pointsman',
    chronology: { episodeId: '1.06', sort: 106.1 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'he imagines the cortex of the brain as a mosaic of tiny on/off elements',
      highlightedTerm: 'mosaic',
    },
    apparatus: {
      explanation:
        'Pointsman reduces the cortex to on/off elements and wants Slothrop to prove that every response has a recoverable stimulus, since PISCES gives that Pavlovian certainty an intelligence budget and experimental subjects. His surname is British railway slang for a switchman who sets track points, and Pynchon works the etymology throughout: the man who wants every response reduced to an on-or-off element carries the on-or-off element in his own name. In 3.32, after the surgeons castrate Marvy by mistake instead of Slothrop, he is stripped of his position.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Glosses Pointsman\'s Pavlovian framework throughout; notes the railway-switch etymology of the surname.',
      },
    ],
    relatedTerms: ['pavlovian', 'white-visitation', 'pisces', 'roger-mexico'],
  },
  {
    id: 'jessica-swanlake',
    displayLabel: 'Jessica Swanlake',
    chronology: { episodeId: '1.06', sort: 106.3 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'They are in love. Fuck the war.',
      highlightedTerm: 'love',
    },
    apparatus: {
      explanation:
        'Jessica shares an illicit wartime life with Roger Mexico while her conventional suitor Jeremy waits in the background, and the name Swanlake carries the divided woman of Tchaikovsky\'s ballet (Odette and Odile) into the arrangement. When the war ends she returns to Jeremy, and the temporary rooms that held her life with Roger disappear along with the emergency that authorised them.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates Jessica\'s arc and the Swanlake/Tchaikovsky allusion.',
      },
    ],
    relatedTerms: ['roger-mexico', 'fuck-the-war'],
  },
  {
    id: 'fuck-the-war',
    displayLabel: 'Fuck the war',
    chronology: { episodeId: '1.06', sort: 106.4 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'They are in love. Fuck the war.',
      highlightedTerm: 'Fuck the war',
    },
    apparatus: {
      explanation:
        'Roger and Jessica are in love inside a requisitioned room while the institutions of war decide the shape and duration of their life together. \'Fuck the war\' is the plain refusal available to them in that moment, and the armistice will end up separating them more effectively than the bombing did, since peace returns Jessica to her prewar suitor and closes the improvised rooms in which the affair could happen.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the Roger and Jessica sections and their wartime conditions in Part 1.',
      },
    ],
    relatedTerms: ['roger-mexico', 'jessica-swanlake'],
  },
  {
    id: 'the-book',
    displayLabel: 'The Book',
    chronology: { episodeId: '1.07', sort: 107 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'Spectro is one of the original seven owners of The Book, and if you ask Mr. Pointsman what Book, you\'ll only get smirked at. It rotates, the mysterious Book, among its co-owners on a weekly basis',
      highlightedTerm: 'The Book',
    },
    apparatus: {
      explanation:
        'Volume 2 of Pavlov\'s *Lectures on Conditioned Reflexes*, translated into English by Horsley Gantt in 1941, in which Pavlov extended his physiological work into psychiatric territory. Seven Pavlovians at the White Visitation share a single copy on a weekly rotation, and the fetishistic secrecy gives a medical textbook the aura of scripture; every Pavlovian term Pointsman applies to Slothrop, from conditioned reflex through transmarginal inhibition, comes out of the volume that the seven pass among themselves.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V47.3; identifies the volume as Pavlov\'s *Lectures* vol. 2, trans. Horsley Gantt (1941).',
      },
    ],
    relatedTerms: ['pavlovian', 'pointsman', 'conditioned-reflex', 'transmarginal'],
  },
  {
    id: 'st-veronica',
    displayLabel: 'St. Veronica\'s Hospital',
    railLabel: 'St. Veronica\'s',
    chronology: { episodeId: '1.08', sort: 108 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'Inside St. Veronica\'s hospital they sit together, just off the war-neurosis ward, these habitual evenings.',
      highlightedTerm: 'St. Veronica\'s',
    },
    apparatus: {
      explanation:
        'The fictional Hospital of St Veronica houses a war-neurosis ward, and Pointsman and Spectro meet in its rooms beside a simmering autoclave. In medieval Christian tradition Veronica gives Jesus a cloth on the road to Calvary and receives the imprint of his face; the phrase *vera icon*, \'true image\', later supplied a popular etymology for her name, so that the soldiers on the ward, still marked by involuntary impressions of the blast, sit within a hagiographic frame whose own story is one of imprinting.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V46.40; provides the hagiographic identification and confirms the hospital is fictional.',
      },
    ],
    relatedTerms: ['pointsman', 'abreactions', 'transmarginal'],
  },
  {
    id: 'abreactions',
    displayLabel: 'Abreactions',
    chronology: { episodeId: '1.08', sort: 108.1 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'Abreactions of the Lord of the Night',
      highlightedTerm: 'Abreactions',
    },
    apparatus: {
      explanation:
        'Abreaction is the release of affect through recalling or re-enacting a traumatic experience. C. G. Jung\'s 1928 essay places the therapist inside that re-enactment as a point of transference and asks whether the relation is \'freely negotiated.\' Pudding\'s Great War memories return under Domina Nocturna, and Slothrop is drugged into his own past; in each scene the patient\'s compliance has been secured before the re-enactment begins, so a method Jung wanted freely negotiated is being used to reproduce the trauma on the operator\'s schedule.',
    },
    externalRefs: [
      {
        label: 'C. G. Jung, \'The Therapeutic Value of Abreaction\' (1928)',
        note: '*Collected Works* 16:129-38. Jung\'s account of abreaction as traumatic re-enactment and the ethics of transference.',
      },
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V48.14; cites Jung; identifies the Pudding and Slothrop scenes as coerced abreactions.',
      },
    ],
    relatedTerms: ['transmarginal', 'sodium-amytal', 'st-veronica'],
  },
  {
    id: 'transmarginal',
    displayLabel: 'Transmarginal',
    chronology: { episodeId: '1.08', sort: 108.2 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'send them over into one of the transmarginal phases, past borders of their waking selves, past \'equivalent\' and \'paradoxical\' phases',
      highlightedTerm: 'transmarginal',
    },
    apparatus: {
      explanation:
        'In Pavlov\'s *Lectures*, a conditioned response normally increases with the intensity of the stimulus. Beyond a threshold, the relation passes through equivalent, paradoxical, and ultraparadoxical phases: unequal stimuli first produce equal responses, weak stimuli then exceed strong ones, and excitation finally produces inhibition or the reverse. Pavlov calls stimuli beyond that threshold \'transmarginal.\' Pointsman wants such a reversal to explain how Slothrop responds before the rocket has arrived.',
    },
    externalRefs: [
      {
        label: 'Pavlov, *Lectures on Conditioned Reflexes*, vol. 2',
        note: 'Defines transmarginal inhibition and the three phases (equivalent, paradoxical, ultraparadoxical) at *Lectures* 2:13-14 (trans. Horsley Gantt).',
      },
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the transmarginal concept at V48.38; quotes Gantt\'s translation of the phase definitions.',
      },
    ],
    relatedTerms: ['pavlovian', 'conditioned-reflex', 'the-book', 'janet-letter'],
  },
  {
    id: 'janet-letter',
    displayLabel: 'Pavlov\'s letter to Janet',
    railLabel: 'Janet letter',
    chronology: { episodeId: '1.08', sort: 108.25 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'I think, Pavlov writing to Janet, it is precisely the ultraparadoxical phase which is the base of the weakening of the idea of the opposite in our patients.',
      highlightedTerm: 'Pavlov writing to Janet',
    },
    apparatus: {
      explanation:
        'Chapter 54 of Pavlov\'s *Lectures*, volume 2, is an open letter to the French psychologist Pierre Janet (1859-1947), a pioneer of dissociation theory who had earlier influenced Freud and Jung. Janet wrote about *les sentiments d\'emprise*, feelings of domination; Pavlov reads those confused oppositions through the ultraparadoxical phase and argues at 2:149 that \'chemistry first, and then physics will be nearest these phenomena,\' a claim that anticipates the pharmacological turn in twentieth-century psychiatry. Pointsman inherits the physiological argument and applies it to people who cannot refuse his experiments.',
    },
    externalRefs: [
      {
        label: 'Pavlov, *Lectures on Conditioned Reflexes*, vol. 2',
        note: 'Chapter 54 (\'Les Sentiments D\'Emprise and the Ultraparadoxical Phase\'); quotes at 2:148-49 on chemical remedies for \'ideas of the opposite.\'',
      },
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the Janet letter at V49.1; provides the Pavlov-Janet debate context.',
      },
      {
        label: 'Pierre Janet (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Pierre_Janet',
        note: 'French psychologist (1859-1947), pioneer of dissociation theory.',
      },
    ],
    relatedTerms: ['transmarginal', 'the-book', 'pointsman'],
  },
  {
    id: 'realpolitik',
    displayLabel: 'Realpolitik',
    chronology: { episodeId: '1.08', sort: 108.3 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'his own brown Realpolitik dreams, some psychic prostate ever in aching love promised',
      highlightedTerm: 'Realpolitik',
    },
    apparatus: {
      explanation:
        'August Ludwig von Rochau coined *Realpolitik* in *Grundsätze der Realpolitik* (1853) for politics governed by existing power and material interest. Pointsman\'s \'brown Realpolitik dreams\' turn the children on the ward into resources for an intelligence programme, so that decisions about their treatment follow the institutional calculus of what each subject can yield, and the ward\'s clinical vocabulary ends up doing the paperwork for a programme that is in effect a resource operation against the bodies in its care.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V50.22; cites Rochau (1853) and Bismarck\'s \'blood and iron\' speech.',
      },
      {
        label: 'Realpolitik (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Realpolitik',
        note: 'Term introduced by Rochau in 1853 for politics oriented to material power.',
      },
    ],
    relatedTerms: ['pointsman', 'pwe'],
  },
  {
    id: 'pwe',
    displayLabel: 'Political Warfare Executive',
    railLabel: 'PWE',
    chronology: { episodeId: '1.08', sort: 108.4 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'P.W.E. won\'t fund anything now unless it pays off tactically, immediately',
      highlightedTerm: 'P.W.E.',
    },
    apparatus: {
      explanation:
        'The British government created the Political Warfare Executive in 1941 to coordinate propaganda against the Axis; the body later worked with SHAEF. Pointsman complains that PWE will now fund only projects with an immediate tactical return, and the scene sits inside the German Ardennes offensive that began on 16 December 1944, which is why his octopus scheme, an investment in the long conditioning of a single subject, has lost its budget to the front where the fighting is.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V52.23; identifies PWE as a SHAEF propaganda wing and provides the Rundstedt-Bulge context.',
      },
      {
        label: 'Political Warfare Executive (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Political_Warfare_Executive',
        note: 'British propaganda and psychological warfare body, 1941-45.',
      },
    ],
    relatedTerms: ['shaef', 'pointsman', 'pisces'],
  },
  {
    id: 'poisson-distribution',
    displayLabel: 'Poisson distribution',
    chronology: { episodeId: '1.09', sort: 109 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'The rockets are distributing about London just as Poisson\'s equation in the textbooks predicts',
      highlightedTerm: 'Poisson',
    },
    apparatus: {
      explanation:
        'Roger Mexico divides London into grid squares and finds that V-2 counts follow a Poisson distribution, the discrete law of rare independent events that Siméon Denis Poisson (1781-1840) formulated in the 1830s. Each strike is independent of the earlier strikes; a hit gives its square no memory and changes no later probability. Pointsman, who requires a stimulus for every response, cannot use that kind of explanation. R. D. Clarke\'s 1946 study of V-1 impacts on London supplied the historical evidence Pynchon draws on.',
    },
    externalRefs: [
      {
        label: 'R. D. Clarke, \'An Application of the Poisson Distribution\' (1946)',
        note: 'The historical analysis of V-weapon strikes that Pynchon draws on for Roger Mexico\'s work.',
      },
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the Poisson at V54.25; identifies Siméon Denis Poisson (1781-1840) and notes Whittaker and Watson as Roger\'s textbook.',
      },
      {
        label: 'Siméon Denis Poisson (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Sim%C3%A9on_Denis_Poisson',
        note: 'French mathematician (1781-1840) who formulated the distribution.',
      },
    ],
    relatedTerms: ['pavlovian', 'v2-a4', 'roger-mexico', 'gorodki'],
  },
  {
    id: 'summation-transition-reciprocal',
    displayLabel: 'Summation, transition, reciprocal induction',
    railLabel: 'Pavlovian mechanics',
    chronology: { episodeId: '1.09', sort: 109 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        '\'Summation,\' \'transition,\' \'irradiation,\' \'concentration,\' \'reciprocal induction\'—all Pavlovian brain-mechanics—assumes the presence of these bi-stable points.',
      highlightedTerm: 'Summation',
    },
    apparatus: {
      explanation:
        'Chapter 43 of Pavlov\'s *Lectures*, volume 2, catalogues the laws that govern the conditioned cortex. Summation combines weak stimuli into their mathematical sum; transition takes an unceasing positive stimulus and passes it into inhibition; irradiation and concentration send excitation and inhibition across the cortex and then draw them back together; reciprocal induction has one process intensify another at the same point or at neighbouring points. All five assume the cortex is a mosaic of bi-stable, on-or-off elements, and Mexico\'s probabilities occupy the space between zero and one that Pointsman\'s model excludes.',
    },
    externalRefs: [
      {
        label: 'Pavlov, *Lectures on Conditioned Reflexes*, vol. 2',
        note: 'Chapter 43 (\'A Brief Outline of the Higher Nervous System\'), pp. 48-50: defines summation, transition, irradiation, concentration, and reciprocal induction.',
      },
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V55.29; quotes the *Lectures* page references for each law.',
      },
    ],
    relatedTerms: ['pavlovian', 'the-book', 'roger-mexico', 'pointsman'],
  },
  {
    id: 'roger-mexico',
    displayLabel: 'Roger Mexico',
    chronology: { episodeId: '1.09', sort: 109.1 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'The rockets are distributing about London just as Poisson\'s equation in the textbooks predicts.',
      highlightedTerm: 'Poisson',
    },
    apparatus: {
      explanation:
        'Roger Mexico is the statistician on Pointsman\'s PISCES team who maps V-2 strikes with a Poisson distribution and refuses the search for a hidden causal link behind them. He spends Part 1 moving between those grids and Jessica\'s borrowed rooms. After she returns to Jeremy, Roger joins the Counterforce and directs the anger of the dinner-party assault at the officials who have made war administratively ordinary.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Character annotations across Parts 1, 3, and 4.',
      },
    ],
    relatedTerms: ['poisson-distribution', 'jessica-swanlake', 'fuck-the-war'],
  },
  {
    id: 'monte-carlo-fallacy',
    displayLabel: 'Monte Carlo Fallacy',
    chronology: { episodeId: '1.09', sort: 109.1 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'That\'s the Monte Carlo Fallacy. No matter how many have fallen inside a particular square, the odds remain the same as they always were. Each hit is independent of all the others. Bombs are not dogs. No link. No memory. No conditioning.',
      highlightedTerm: 'Monte Carlo Fallacy',
    },
    apparatus: {
      explanation:
        'The Monte Carlo fallacy treats independent outcomes as though earlier results altered the next probability, and Roger applies the correction to rocket strikes: a square that has already been hit is neither safer nor more likely to be hit again. \'Bombs are not dogs. No link. No memory. No conditioning.\' The line is a direct rebuke to Pointsman, whose reflex model needs conditioned traces that the Poisson distribution has already ruled out at the level of the data.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V56.8; explains the axiom of statistical independence and links it to Mexico\'s \'equal in the eyes of the rocket\' line.',
      },
      {
        label: 'Gambler\'s fallacy (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Gambler%27s_fallacy',
        note: 'The Monte Carlo fallacy as it is now more commonly known.',
      },
    ],
    relatedTerms: ['poisson-distribution', 'roger-mexico', 'pointsman', 'law-of-negative-induction'],
  },
  {
    id: 'law-of-negative-induction',
    displayLabel: 'Law of Negative Induction',
    chronology: { episodeId: '1.09', sort: 109.15 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'If there is nothing to link the rocket strikes—no reflex arc, no Law of Negative Induction . . . then . . .',
      highlightedTerm: 'Law of Negative Induction',
    },
    apparatus: {
      explanation:
        'In Pavlovian physiology, negative induction is the inhibition that develops around, or after, an area of cortical excitation. Pointsman wants some such reflex process to link the apparently independent rocket strikes. His trailing \'then...\' admits what follows if Mexico is right: there is no conditioned arc for him to recover.',
    },
    externalRefs: [
      {
        label: 'Pavlov, *Lectures on Conditioned Reflexes*',
        note: 'Defines the reflex arc at vol. 1, p. 117; describes negative induction as a version of the ultraparadoxical phenomenon at vol. 2, p. 176.',
      },
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V56.14; quotes both *Lectures* volumes and connects the law to the ultraparadoxical phase.',
      },
    ],
    relatedTerms: ['pavlovian', 'monte-carlo-fallacy', 'transmarginal', 'pointsman'],
  },
  {
    id: 'kenosha-kid',
    displayLabel: 'Kenosha Kid',
    chronology: { episodeId: '1.10', sort: 110 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'These changes on the text \'You never did the Kenosha Kid\' are occupying Slothrop\'s awareness as the doctor leans in out of the white overhead.',
      highlightedTerm: 'Kenosha Kid',
    },
    apparatus: {
      explanation:
        'Under sodium amytal, Slothrop runs \'You never did the Kenosha Kid\' through a series of stresses, changing the accusation each time without changing its words, so that the sentence\'s meaning migrates while its letters do not. Forbes Parkhill\'s Kenosha Kid was a poker-playing Robin Hood who appeared in the August 1931 issue of *Western Rangers*, a character who wins by reading other players\' tells; the drugged Slothrop, whose interrogators are similarly reading him for the involuntary sign, sits on the wrong side of that table.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V60.20; identifies Parkhill\'s pulp-fiction Kenosha Kid.',
      },
    ],
    relatedTerms: ['sodium-amytal', 'slothrop'],
  },
  {
    id: 'sodium-amytal',
    displayLabel: 'Sodium Amytal',
    chronology: { episodeId: '1.10', sort: 110.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'The needle slips without pain into the vein just outboard of the hollow in the crook of his elbow: 10% Sodium Amytal, one cc at a time, as needed.',
      highlightedTerm: 'Sodium Amytal',
    },
    apparatus: {
      explanation:
        'Sodium amytal is an intermediate-acting barbiturate that mid-century clinicians used in narco-analytic interviews and the popular press promoted as a \'truth serum.\' Slothrop receives it intravenously before the Kenosha Kid variations begin. Weisenburger notes the sound of amytal in amatol, the explosive mixture used in the V-2 warhead, and Pynchon lets the two words differ by a single vowel while the drugged interview and the falling rocket run through the same paragraph.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V61.17; details the three dosage forms and flags the amytal/amatol pun.',
      },
      {
        label: 'Amobarbital (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Amobarbital',
        note: 'The barbiturate marketed under the trade name Amytal.',
      },
    ],
    relatedTerms: ['kenosha-kid', 'slothrop', 'pointsman'],
  },
  {
    id: 'process',
    displayLabel: 'Process (conk)',
    chronology: { episodeId: '1.10', sort: 110.2 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'gib de wrinkles in mah brain a process!',
      highlightedTerm: 'process',
    },
    apparatus: {
      explanation:
        'In African American slang, a \'process\' or \'conk\' straightens hair with a lye-based preparation called congolene; the recipe (Red Devil Lye, two eggs, two medium potatoes) appears later in the episode. Malcolm X describes the pain of his first conk in *The Autobiography of Malcolm X*, and the Roseland Ballroom scene draws on his accounts of 1940s Boston nightlife. Under sodium amytal, Slothrop asks for the wrinkles in his brain to be given the same chemical treatment; the interview is already forcing his thoughts into another shape.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V62.22; glosses \'a process\' as hair-straightening slang and cites Malcolm X\'s Autobiography (pp. 51-55).',
      },
      {
        label: 'Malcolm X, *The Autobiography of Malcolm X*',
        note: 'Describes the conk procedure and 1940s Boston nightlife; Pynchon draws on the same milieu for Slothrop\'s drugged visions.',
      },
    ],
    relatedTerms: ['kenosha-kid', 'sodium-amytal', 'slothrop'],
  },
  {
    id: 'ig-farben',
    displayLabel: 'IG Farben',
    chronology: { episodeId: '1.11', sort: 111 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'developed by IG Farben as part of a research contract with OKW',
      highlightedTerm: 'IG Farben',
    },
    apparatus: {
      explanation:
        '*Interessengemeinschaft Farbenindustrie* means \'community of interests of the dye industry.\' BASF, Bayer, Hoechst, Agfa, and two smaller firms merged into IG Farben in 1925; the cartel supplied synthetic fuel and rubber to the German war economy, built its Monowitz plant with forced labour from Auschwitz, and held a stake in the company that manufactured Zyklon B. Twenty-three of its executives were tried at Nuremberg, and the Allies afterwards broke the conglomerate into successor companies. Pynchon extends the chemical network into the fictional Imipolex G lining of the Schwarzgerät.',
    },
    externalRefs: [
      {
        label: 'Diarmuid Jeffreys, *Hell\'s Cartel*',
        note: 'History of IG Farben from the dye cartel to the war-crimes tribunal.',
      },
      {
        label: 'Comyn, \'V2 to Bomarc\', *Orbit* 2(2), 2014',
        url: 'https://orbit.openlibhums.org/article/id/387/',
        note: 'Open-access article on GR\'s corporate-military register.',
      },
      {
        label: 'IG Farben (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/IG_Farben',
        note: 'German chemical conglomerate, 1925-45.',
      },
    ],
    relatedTerms: ['imipolex-g', 'mittelwerk-dora', 'coal-tar-theology', 'sandoz-lsd'],
  },
  {
    id: 'kryptosam',
    displayLabel: 'Kryptosam',
    chronology: { episodeId: '1.11', sort: 111.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        '"Kryptosam" is a proprietary form of stabilised tyrosine, developed by IG Farben as part of a research contract with OKW.',
      highlightedTerm: 'Kryptosam',
    },
    apparatus: {
      explanation:
        'Pynchon forms the fictional compound from Greek *kryptos*, hidden, and German *Samen*, semen. Tyrosine is a real amino acid involved in melanin synthesis; the stabilised preparation develops invisible writing when exposed to seminal fluid, and Pirate uses it to read a message carried by a V-2. The IG Farben contract with OKW (*Oberkommando der Wehrmacht*, Armed Forces High Command) reflects the entanglement of German chemical industry and military research that Sasuly and Dubois document at length, an arrangement in which the ostensibly high protocols of military secrecy end up routed through a bodily secretion the same protocols will not name in their own paperwork.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V71.11; explains the Greek/German etymology and the tyrosine/melanin chemistry.',
      },
    ],
    relatedTerms: ['ig-farben', 'pirate-prentice'],
  },
  {
    id: 'wuotan-wutende-heer',
    displayLabel: 'Wuotan and the Wütende Heer',
    railLabel: 'Wuotan',
    chronology: { episodeId: '1.11', sort: 111.2 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'They hunt the sky like Wuotan and his mad army.',
      highlightedTerm: 'Wuotan',
    },
    apparatus: {
      explanation:
        'Jacob Grimm\'s *Teutonic Mythology* (vol. 1, pp. 132-35) describes Wuotan as the god who arranges wars and leads the battle-dead in the *Wütende Heer*, the furious host that hunts across the sky; Grimm traces the Wild Hunt across Germanic, Norse, and broader northern folklore, identifying Wuotan as its leader and the Heer as the souls of the fallen. Pynchon puts this spectral army behind Pirate\'s rocket sortie and later compares the Schwarzkommando and the launch crews to it.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V72.27; identifies Grimm\'s *Teutonic Mythology* as the source.',
      },
      {
        label: 'Grimm, *Teutonic Mythology*',
        note: 'Vol. 1, pp. 132-35: Wuotan as war-god and leader of the Wütende Heer.',
      },
      {
        label: 'Wild Hunt (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Wild_Hunt',
        note: 'The northern European folkloric hunt of the dead across the sky.',
      },
    ],
    relatedTerms: ['schwarzkommando', 'screaming'],
  },
  {
    id: 'was-tust-du',
    displayLabel: 'WAS TUST DU FÜR DIE FRONT',
    railLabel: 'WAS TUST DU',
    chronology: { episodeId: '1.12', sort: 112.1 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'In Germany, as the end draws upon us, the incessant walls read WAS TUST DU FÜR DIE FRONT, FÜR DEN SIEG?',
      highlightedTerm: 'WAS TUST DU FÜR DIE FRONT',
    },
    apparatus: {
      explanation:
        '\'What are you doing for the front, for victory?\' remains painted on German walls as the state collapses. Pynchon sets the command beside the White Visitation\'s walls, where another wartime institution has also written its instructions into a building.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the slogan at V72.32.',
      },
    ],
    relatedTerms: ['white-visitation'],
  },
  {
    id: 'sudwest',
    displayLabel: 'Südwest',
    chronology: { episodeId: '1.12', sort: 112.2 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'Südwest by then was a protectorate administered by the Union of South Africa.',
      highlightedTerm: 'Südwest',
    },
    apparatus: {
      explanation:
        'Südwest is German South-West Africa, present-day Namibia. Germany ruled the territory from 1884 until 1915; between 1904 and 1908 German forces killed an estimated 65,000 to 80,000 Herero and 10,000 Nama in what historians recognise as the first genocide of the twentieth century. Weissmann served there after the killings and took the young Enzian as his lover; the racial and sexual authority he exercised in the colony returns in the rocket battery with Katje and Gottfried.',
    },
    externalRefs: [
      {
        label: 'Jürgen Zimmerer, \'Colonial Genocide and the Holocaust\'',
        note: 'Historicises the connection between Wilhelmine colonial violence and later Nazi programmes.',
      },
      {
        label: 'German South West Africa (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/German_South_West_Africa',
        note: 'German colony, 1884-1915.',
      },
    ],
    relatedTerms: ['enzian', 'schwarzkommando', 'herero-genocide'],
  },
  {
    id: 'schwarzkommando',
    displayLabel: 'Schwarzkommando',
    chronology: { episodeId: '1.12', sort: 112.3 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'No one is sure who suggested the name \'Schwarzkommando.\'',
      highlightedTerm: 'Schwarzkommando',
    },
    apparatus: {
      explanation:
        'Operation Black Wing invents the Schwarzkommando as African rocket troops meant to frighten German listeners, and Enzian\'s Herero community later appears in the Zone, organised around the rocket, and adopts the same name; a name coined inside a PWE propaganda file ends up as the self-designation of a people the file had invented without ever consulting them.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V75.12; discusses the historical Herero soldiers (Offizierburschen und Polizeidiener) who served in German military units in South-West Africa before and after the 1904 genocide.',
      },
    ],
    relatedTerms: ['sudwest', 'enzian', 'operation-black-wing', 'herero-genocide'],
  },
  {
    id: 'ypres-passchendaele',
    displayLabel: 'Ypres and Passchendaele',
    railLabel: 'Ypres',
    chronology: { episodeId: '1.12', sort: 112.4 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'His greatest triumph on the battlefield came in 1917, in the gassy, Armageddonite filth of the Ypres salient.',
      highlightedTerm: 'Ypres',
    },
    apparatus: {
      explanation:
        'Brigadier Pudding remembers the Ypres salient, where three major battles were fought and the 1917 offensive ended around Passchendaele after months of rain, mud, and enormous losses on both sides. His memory returns through the physical matter of the battlefield, the duckboards and corpses and standing water, and this is the register in which his body still operates a generation on, so that the V-2 falling around him in 1944 reaches a nervous system already calibrated to the earlier war\'s particular textures.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V77.10 and V79.41; cites A. J. P. Taylor\'s English History for the casualty figures.',
      },
      {
        label: 'Passchendaele (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Battle_of_Passchendaele',
        note: 'Third Battle of Ypres (1917): 475,000 total casualties for four miles of ground.',
      },
    ],
    relatedTerms: ['white-visitation'],
  },
  {
    id: 'fuhrer-principle',
    displayLabel: 'Führer-principle and charisma',
    railLabel: 'Charisma',
    chronology: { episodeId: '1.12', sort: 112.5 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'one of the dearest Postwar hopes: that there should be no room for a terrible disease like charisma',
      highlightedTerm: 'charisma',
    },
    apparatus: {
      explanation:
        'The *Führerprinzip* locates authority in the leader and demands obedience down the hierarchy. Max Weber distinguishes charismatic authority from traditional and legal-rational forms, then describes how institutions \'routinise\' charisma once the leader is gone. Pynchon follows that routinisation into the postwar cartels and administrative offices, where the operational manners of Reich command outlive the leader and settle into the ordinary procedures of firms that keep their existing personnel and rename themselves.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V81.4 and V81.8-9; cites Weber, *Theory of Social and Economic Organization*, p. 364.',
      },
      {
        label: 'Max Weber (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Max_Weber',
        note: 'German sociologist (1864-1920); his typology of authority (traditional, rational-bureaucratic, charismatic) structures the novel\'s political analysis.',
      },
    ],
    relatedTerms: ['ein-volk', 'ig-farben'],
  },
  {
    id: 'beyond-the-zero',
    displayLabel: 'Beyond the Zero (Pavlov)',
    railLabel: 'Zero',
    chronology: { episodeId: '1.12', sort: 112.6 },
    colorVar: '--color-accent',
    context: {
      excerpt:
        'we must also realise that extinction can proceed beyond the point of reducing a reflex to zero',
      highlightedTerm: 'beyond',
    },
    apparatus: {
      explanation:
        'Part 1 takes its title from the chapter on extinction in Pavlov\'s *Conditioned Reflexes*. An extinguished reflex can recover after a lapse, which means that an unmeasurable response may still persist \'beyond\' zero. Pointsman uses that possibility to keep Slothrop inside Pavlovian causation; Mexico hears the phrase as movement \'past the tongue-stop...and into the other realm.\'',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V84.39-85.3; identifies the verbatim source as Pavlov, *Conditioned Reflexes*, chapter 4, p. 57.',
      },
      {
        label: 'Pavlov, *Conditioned Reflexes* (1927)',
        note: 'Chapter 4, \'Extinction\': the passage Pynchon quotes, with emphasis added by Pointsman.',
      },
    ],
    relatedTerms: ['conditioned-reflex', 'pavlovian', 'pointsman', 'absolute-zero'],
  },
  {
    id: 'dawes-plan',
    displayLabel: 'Dawes Plan',
    chronology: { episodeId: '1.12', sort: 112.7 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'young sleepless Dawes-era flashes, vineyards sunlit very green bearding the south valley-slopes of the Rhine',
      highlightedTerm: 'Dawes-era',
    },
    apparatus: {
      explanation:
        'The Dawes Plan of 1924 rescheduled German reparations and channelled large American loans into the German economy. Pudding\'s \'Dawes-era flashes\' place the sunlit vineyards that he remembers inside the financial settlement between the two wars, before another system of international loans and industrial contracts produces the rocket.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V74.21; cites A. J. P. Taylor, English History, pp. 215-16.',
      },
      {
        label: 'Dawes Plan (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Dawes_Plan',
        note: '1924 reparations agreement restructuring Germany\'s war-debt payments.',
      },
    ],
    relatedTerms: ['ypres-passchendaele', 'rapallo-treaty'],
  },
  {
    id: 'jamf',
    displayLabel: 'Laszlo Jamf',
    chronology: { episodeId: '1.13', sort: 113 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'Better behave yourself or we\'ll send you back to Dr. Jamf!',
      highlightedTerm: 'Jamf',
    },
    apparatus: {
      explanation:
        'Laszlo Jamf teaches Pökler, develops the fictional Imipolex G, and appears in the record of Slothrop\'s infant conditioning. Those traces join IG Farben, Pointsman\'s Pavlovian programme, and the Schwarzgerät, though the novel also allows that Jamf\'s identity may have been assembled after the fact by whoever needed the record. The name derives from jazz slang popularised by Charlie Parker, an acronym for \'jive-ass-motherfucker\'.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Character annotations across Parts 1-3; glosses \'jamf\' as jazz-era slang.',
      },
    ],
    relatedTerms: ['imipolex-g', 'conditioned-reflex', 'pokler', 'ig-farben'],
  },
  {
    id: 'watson-rayner-infant-albert',
    displayLabel: 'Watson, Rayner, and Infant Albert',
    railLabel: 'Little Albert',
    chronology: { episodeId: '1.13', sort: 113.1 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'if Watson and Rayner could successfully condition their "Infant Albert" into a reflex horror of everything furry',
      highlightedTerm: 'Infant Albert',
    },
    apparatus: {
      explanation:
        'In 1920, John B. Watson and his graduate student Rosalie Rayner conditioned an eleven-month-old known as Little Albert to fear a white rat by pairing it with a loud noise; the fear generalised to a rabbit, a dog, a fur coat, and other furry objects. Watson and Rayner published the study as \'Conditioned Emotional Reactions\' the same year. Albert left the hospital before they attempted to remove the conditioned response, and later efforts to identify him have remained disputed; the procedure would not meet present standards for informed consent or protection from harm. Pointsman cites the experiment as proof that infant Slothrop could likewise have been conditioned and that the adult response might still be recoverable.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V84.3; cites Watson and Rayner, The Psychological Care of Infant and Child (1928), p. 54.',
      },
      {
        label: 'Little Albert experiment (Wikipedia)',
        url: 'https://en.wikipedia.org/wiki/Little_Albert_experiment',
        note: 'Watson and Rayner\'s 1920 conditioning of an infant into generalised fear of furry stimuli.',
      },
    ],
    relatedTerms: ['conditioned-reflex', 'beyond-the-zero', 'pointsman', 'slothrop'],
  },
  {
    id: 'theseus-ariadne',
    displayLabel: 'Theseus and Ariadne',
    chronology: { episodeId: '1.13', sort: 113.2 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'thirteen years along the clew, to the Minotaur waiting for him. Venus and Ariadne!',
      highlightedTerm: 'Ariadne',
    },
    apparatus: {
      explanation:
        'Pointsman describes thirteen years of Pavlovian research as a passage through the Cretan labyrinth. His \'clew\' is *Conditioned Reflexes*, received when he was twenty-eight like a call from a \'submontane Venus.\' In the myth, Ariadne gives Theseus the thread that lets him enter, kill the Minotaur, and find his way out; Pointsman expects Pavlov\'s book to lead him through the cortex to the stimulus behind Slothrop\'s response.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V88.12-17; details the Theseus/Ariadne/Venus identification and its connection to Pointsman\'s thirteen-year devotion.',
      },
    ],
    relatedTerms: ['pointsman', 'pavlovian', 'conditioned-reflex'],
  },
  {
    id: 'amanita-muscaria',
    displayLabel: 'Amanita muscaria',
    railLabel: 'Amanita',
    chronology: { episodeId: '1.14', sort: 114 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'this peculiar relative of the poisonous Destroying Angel that claims Osbie\'s attention',
      highlightedTerm: 'Destroying Angel',
    },
    apparatus: {
      explanation:
        '*Amanita muscaria*, the red-capped fly agaric, contains muscimol and ibotenic acid and is related to the lethally poisonous *Amanita phalloides* (the destroying angel). Osbie Feel opens the episode toasting caps in the oven. Robert Graves proposed in *The White Goddess* that Dionysian centaurs and maenads ate the mushroom for \'enormous muscular strength, erotic power, delirious visions, and the gift of prophecy\'; whether or not scholars accept that shamanic reading, Pynchon sets the mushroom beside the industrial compounds of IG Farben.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V93.2; cites Graves, *The White Goddess*, p. 45.',
      },
      {
        label: '*Amanita muscaria*',
        url: 'https://en.wikipedia.org/wiki/Amanita_muscaria',
        note: 'Fly agaric: psychoactive mushroom with a long history in shamanistic and religious practice.',
      },
    ],
    relatedTerms: ['coal-tar-theology'],
  },
  {
    id: 'katje',
    displayLabel: 'Katje Borgesius',
    railLabel: 'Katje',
    chronology: { episodeId: '1.14', sort: 114.01 },
    colorVar: plotlineColorVars.P02,
    context: {
      excerpt:
        'but for Katje it will never close',
      highlightedTerm: 'Katje',
    },
    apparatus: {
      explanation:
        'Katje Borgesius passes from Blicero\'s rocket battery in occupied Holland into Pointsman\'s operation on the Riviera. She recognises that she \'belongs in a way none of them can guess cruelly to the Oven\', meaning that flight has not removed the role Blicero cast her in; the novel keeps her in view as someone who names her own complicity, refuses to treat survival as innocence, and continues acting inside operations she cannot fully step out of.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates Katje\'s role across Parts I-III.',
      },
    ],
    relatedTerms: ['blicero', '00000', 'pointsman'],
  },
  {
    id: 'der-kinderofen',
    displayLabel: 'Der Kinderofen',
    railLabel: 'Kinderofen',
    chronology: { episodeId: '1.14', sort: 114.02 },
    colorVar: plotlineColorVars.P02,
    context: {
      excerpt:
        'she belongs in a way none of them can guess cruelly to the Oven, Der Kinderofen',
      highlightedTerm: 'Der Kinderofen',
    },
    apparatus: {
      explanation:
        'Pynchon coins *Kinderofen* (child-oven) for the witch\'s oven in *Hansel and Gretel*. Grimm calls it *der Backofen* (the baking oven); the substitution stops the oven being incidental to a fairy tale and sizes it for children. Blicero assigns Katje and Gottfried the fattened children\'s parts, then seals Gottfried inside the 00000 as the sacrifice that the tale had allowed to escape.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V94.20; notes the term does not appear in Grimm, where der Backofen is used throughout.',
      },
    ],
    relatedTerms: ['blicero', 'gottfried', 'maerchen', '00000'],
  },
  {
    id: 'gottfried',
    displayLabel: 'Gottfried',
    chronology: { episodeId: '1.14', sort: 114.03 },
    colorVar: plotlineColorVars.P02,
    context: {
      excerpt:
        'The two, boy and Rocket, concurrently designed.',
      highlightedTerm: 'boy and Rocket',
    },
    apparatus: {
      explanation:
        'Gottfried\'s name joins *Gottes* and *Frieden* (God\'s peace). Weisenburger traces the compound back to the god Frey or Freyr, deity of fertility and Yuletide sacrifice, and through him to Priapus, Orpheus, Adonis, and Christ. Blicero seals the yellow-haired boy inside Imipolex G and launches him in the 00000; the text pairs him with Enzian as \'yellow and blue where the African was dark\' and calls boy and rocket \'concurrently designed\'. Inside Blicero\'s *Märchen* Gottfried takes the role of the fattened child whom the fairy tale had allowed to escape, which the 00000 does not.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V94.26; traces the name through Gottes + Frieden to Frey, Priapus, and Christ, citing Branston, *Gods of the North*, and Grimm, *Teutonic Mythology*.',
      },
    ],
    relatedTerms: ['blicero', '00000', 'imipolex-g', 'maerchen', 'der-kinderofen'],
  },
  {
    id: 'rilke-sonnets-orpheus',
    displayLabel: 'Rilke, Sonnets to Orpheus',
    railLabel: 'Sonnets',
    chronology: { episodeId: '1.14', sort: 114.04 },
    colorVar: plotlineColorVars.P02,
    context: {
      excerpt:
        '"Want the Change," Rilke said, "O be inspired by the Flame!"',
      highlightedTerm: 'Flame',
    },
    apparatus: {
      explanation:
        'Sonnet 12 in Part 2 of Rilke\'s *Sonnets to Orpheus* begins \'Wolle die Wandlung. O sei für die Flamme begeistert\' (\'Will transformation. O be inspired for the flame\'). Blicero quotes it in the rocket battery as he prepares the launch that will place Gottfried inside the 00000. Rilke composed the fifty-five sonnets in a single burst in February 1922, alongside completing the *Duino Elegies*; in the novel\'s chronology Weissmann departs for South-West Africa the same year, carrying those Elegies as a gift from his mother. The \'mountains of Primal Pain\' from the Tenth *Duino Elegy* supply the landscape into which he later imagines the rocket climbing.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V97.17-18; identifies the German text and Leishman translation of sonnet 12.',
      },
      {
        label: 'Rilke, *Sonnets to Orpheus*',
        url: 'https://en.wikipedia.org/wiki/Sonnets_to_Orpheus',
        note: 'Cycle of 55 sonnets composed in February 1922; Blicero quotes Sonnet 12.',
      },
    ],
    relatedTerms: ['rilke-tenth-elegy', 'blicero', 'gottfried', 'enzian'],
  },
  {
    id: 'hexeszuechtigung',
    displayLabel: 'Hexeszüchtigung',
    chronology: { episodeId: '1.14', sort: 114.07 },
    colorVar: plotlineColorVars.P02,
    context: {
      excerpt:
        'suffering the Captain\'s own \'Hexeszüchtigung.\'',
      highlightedTerm: 'Hexeszüchtigung',
    },
    apparatus: {
      explanation:
        'Blicero names Gottfried\'s sadomasochistic training *Hexeszüchtigung*, roughly \'witch-discipline\'. The compound joins the witch of *Hansel and Gretel* to military disciplinary vocabulary, so that the oven game reads as a training programme with the fairy tale supplying its script and the rocket battery supplying its rules.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V95.36-37; identifies the coinage (literally \'witch\'s whipping\' or \'chastisement\').',
      },
    ],
    relatedTerms: ['00000', 'maerchen'],
  },
  {
    id: 'maerchen',
    displayLabel: 'Märchen',
    chronology: { episodeId: '1.14', sort: 114.08 },
    colorVar: plotlineColorVars.P02,
    context: {
      excerpt:
        'the strayed children, the wood-wife in the edible house, the captivity, the fattening, the Oven.',
      highlightedTerm: 'Oven',
    },
    apparatus: {
      explanation:
        'Blicero distributes the parts of *Hansel and Gretel* among Katje, Gottfried, and himself: strayed children, wood-wife in the edible house, captivity, fattening, oven. The rocket\'s combustion chamber gives the oven a technical form, and Blicero trusts \'this out of all *Märchen und Sagen*\' to carry the sacrifice past the fairy tale\'s ending, in which the children escape.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V94.20 and V94.41; identifies Grimm\'s Fairy Tales no. 72 and notes that Pynchon\'s Kinderofen does not appear in Grimm.',
      },
    ],
    relatedTerms: ['00000', 'hexeszuechtigung', 'der-kinderofen'],
  },
  {
    id: 'rhenish-missionary-society',
    displayLabel: 'Rhenish Missionary Society',
    railLabel: 'Rhenish',
    chronology: { episodeId: '1.14', sort: 114.09 },
    colorVar: plotlineColorVars.P03,
    context: {
      excerpt:
        'like the Rhenish Missionary Society who corrupted this boy',
      highlightedTerm: 'Rhenish Missionary Society',
    },
    apparatus: {
      explanation:
        'The Rhenish Missionary Society formed in 1828 from Reformed and Lutheran groups in the Wuppertal region. Its missionaries entered South-West Africa from the 1840s, running stations among Nama and Herero communities and becoming intermediaries in trade and local politics before formal German colonisation. Horst Drechsler, cited by Weisenburger, records that the Society flew the Prussian flag, carried weapons, gathered information from chiefs, and distributed tobacco and liquor, so that the mission work was already an instrument of colonial authority whatever the intentions of individual missionaries, and Weissmann\'s later administration in South-West Africa proceeds on the ground the missions had already prepared over the previous half-century, with contacts, station networks, and local intelligence already in place.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V100.7-8; cites Drechsler, *Let Us Die Fighting*, pp. 18-24 and p. 48.',
      },
      {
        label: 'Rhenish Mission Society',
        url: 'https://en.wikipedia.org/wiki/Rhenish_Mission_Society',
        note: 'German Protestant missionary society active in South-West Africa from 1842.',
      },
    ],
    relatedTerms: ['herero-genocide', 'ndjambi-karunga', 'enzian', 'sudwest'],
  },
  {
    id: 'und-nicht-einmal',
    displayLabel: 'Und nicht einmal sein Schritt...',
    railLabel: 'Rilke / Tenth Elegy',
    chronology: { episodeId: '1.14', sort: 114.13 },
    colorVar: plotlineColorVars.P02,
    context: {
      excerpt:
        'Und nicht einmal sein Schritt klingt aus dem tonlosen Los.',
      highlightedTerm: 'Und nicht einmal',
    },
    apparatus: {
      explanation:
        '\'Und nicht einmal sein Schritt klingt aus dem tonlosen Los\' (\'And not even his step sounds from the soundless fate\') closes a passage of Rilke\'s Tenth *Duino Elegy* that follows a newly dead youth through the City of Pain and into the Mountains of Primal Pain. Blicero keeps the German untranslated and has spent twenty years imagining that ascent for himself, and the 00000 supplies the inward climb with a ballistic route through the same landscape, so that Gottfried inside the rocket enters Rilke\'s Mountains of Primal Pain along a bearing that Kooy and Uytenbogaart could survey.',
    },
    externalRefs: [
      {
        label: 'Rilke, *Duino Elegies* (Tenth Elegy)',
        url: 'https://en.wikipedia.org/wiki/Duino_Elegies',
        note: 'The passage follows a youth through the *Leid-Stadt* into the Mountains of Primal Pain.',
      },
    ],
    relatedTerms: ['enzian', '00000'],
  },
  {
    id: 'rilke-tenth-elegy',
    displayLabel: 'Rilke\'s Tenth Elegy',
    railLabel: 'Tenth Elegy',
    chronology: { episodeId: '1.14', sort: 114.14 },
    colorVar: plotlineColorVars.P02,
    context: {
      excerpt:
        'Of all Rilke\'s poetry it\'s this Tenth Elegy he most loves.',
      highlightedTerm: 'Tenth Elegy',
    },
    apparatus: {
      explanation:
        'In Rilke\'s Tenth *Duino Elegy*, a young Lament guides a newly dead youth through a *Leid-Stadt* (City of Pain) and outward towards the Mountains of Primal Pain. Blicero reads the poem as an itinerary for the 00000: Gottfried becomes the dead youth, and the trajectory carries him into Rilke\'s mountains.',
    },
    externalRefs: [
      {
        label: 'Rilke, *Duino Elegies*',
        url: 'https://en.wikipedia.org/wiki/Duino_Elegies',
        note: 'Cycle begun at Duino Castle in 1912 and completed in 1922; the Tenth Elegy structures Blicero\'s plotline.',
      },
    ],
    relatedTerms: ['blicero', 'und-nicht-einmal', 'enzian'],
  },
  {
    id: 'wandervogel',
    displayLabel: 'Wandervogel',
    chronology: { episodeId: '1.14', sort: 114.17 },
    colorVar: plotlineColorVars.P02,
    context: {
      excerpt:
        'A Wandervogel in the mountains of Pain. It\'s been going on for much too long.',
      highlightedTerm: 'Wandervogel',
    },
    apparatus: {
      explanation:
        'The Wandervogel (\'wandering bird\') movement began around 1900 with hiking, folk song, and revolt against urban bourgeois life; the Nazi regime later dissolved or absorbed its associations into the Hitler Youth. Pynchon uses the name first for Blicero climbing Rilke\'s mountains of Pain, then for the spaceflight enthusiasts whom Leni dismisses as *Wandervögel*, so that the same word crosses from prewar hiking clubs into the rocket programme that absorbs many of their members, and the outdoor idealism reappears inside the assembly halls at Peenemünde with the politics stripped out.',
    },
    externalRefs: [
      {
        label: 'Wandervogel',
        url: 'https://en.wikipedia.org/wiki/Wandervogel',
        note: 'German youth movement founded in 1901 by Karl Fischer in Steglitz, Berlin; hiking, folk song, and cultural revolt.',
      },
    ],
    relatedTerms: ['sudwest', 'enzian'],
  },
  {
    id: 'ndjambi-karunga',
    displayLabel: 'Ndjambi Karunga',
    chronology: { episodeId: '1.14', sort: 114.22 },
    colorVar: plotlineColorVars.P03,
    context: {
      excerpt:
        'We make Ndjambi Karunga now, omuhona . . . a whisper, across the burning thorn branches.',
      highlightedTerm: 'Ndjambi Karunga',
    },
    apparatus: {
      explanation:
        'Ndjambi Karunga names the high god in Herero religious traditions, associated with creation, the sky, and death. The name enters as Weissmann remembers the young Enzian in South-West Africa; Herero cosmology remains present inside a relationship that the colonial officer has tried to rename through Rilke.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V100.2-3; cites Luttig, *The Religious System and Social Organization of the Herero*, as principal source.',
      },
    ],
    relatedTerms: ['enzian', 'sudwest', 'preterite', 'ovatjimba'],
  },
  {
    id: 'preterite',
    displayLabel: 'Preterite',
    chronology: { episodeId: '1.14', sort: 114.23 },
    colorVar: '--color-accent',
    context: {
      excerpt:
        'Are they Elect, or are they Preterite, and doomed as dodoes?',
      highlightedTerm: 'Preterite',
    },
    apparatus: {
      explanation:
        'In Calvinist theology God passes over those not elected to salvation; the passed-over are the preterite. Pynchon gives the term to people and matter that institutions count as waste: forced labourers, colonised peoples, bombed civilians, coal tar. William Slothrop\'s tract claims holiness for these \'second Sheep\', including Judas, whose betrayal the salvation story requires in order to reach the Crucifixion at all, and whose condemnation the same story then delivers, so that election and preterition turn out to depend on each other in the theology as they do in the war economy.',
    },
    externalRefs: [
      {
        label: 'Lacey, \'Thomas Pynchon on Totalitarianism\', *AMERICANA*',
        url: 'https://www.americanaejournal.hu/index.php/americanaejournal/article/view/45288/43938',
        note: 'Reads preterition as a paradoxical freedom from totalitarian power. Open access.',
      },
    ],
    relatedTerms: ['schwarzkommando', 'sudwest', 'william-slothrop', 'coal-tar-theology', 'arbella-winthrop'],
  },
  {
    id: 'bodenplatte',
    displayLabel: 'Bodenplatte',
    chronology: { episodeId: '1.14', sort: 114.24 },
    colorVar: plotlineColorVars.P02,
    context: {
      excerpt:
        'The Bodenplatte, concrete plate laid over strips of steel, is set inside a space defined by three trees',
      highlightedTerm: 'Bodenplatte',
    },
    apparatus: {
      explanation:
        'The Bodenplatte is a concrete plate laid over strips of steel, triangulated by three marked trees on a bearing of 260° towards London. Each blaze carries a red circle and thick black cross, described in the novel as an ancient sun wheel from which the swastika was broken. Kooy and Uytenbogaart\'s *Ballistics of the Future* gives the bearing, the tree-blazing method, and the sun-wheel symbol, and records that a German soldier near Duindigt Park at Wassenaar scratched *In hoc signo vinces* below one mark, so that the pagan sun-wheel and the Christian promise of victory end up co-located on a launch site whose firing geometry treats them as interchangeable orienting marks.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V100.34-38; cites Kooy and Uytenbogaart for the bearing, tree-blazing, and sun-wheel symbol.',
      },
    ],
    relatedTerms: ['v2-a4', 'in-hoc-signo-vinces', 'blicero'],
  },
  {
    id: 'enzian',
    displayLabel: 'Enzian',
    chronology: { episodeId: '1.14', sort: 114.25 },
    colorVar: plotlineColorVars.P02,
    context: {
      excerpt:
        'gave his African boy the name \'Enzian,\' after the mountain gentian',
      highlightedTerm: 'Enzian',
    },
    apparatus: {
      explanation:
        'The gentian is a blue Alpine wildflower, and the name Blicero gave his Herero lover after Rilke\'s Ninth Elegy. The naming is a colonial possession, a European poem overwriting an African identity, and yet Enzian makes the name his own. By Part 3 he leads the Schwarzkommando; by Part 4 he directs the 00001 assembly. Whether his agency redeems the name or the colonial imprint persists inside it, the novel does not settle.',
    },
    externalRefs: [
      {
        label: 'Rilke, *Duino Elegies* (Ninth Elegy)',
        url: 'https://en.wikipedia.org/wiki/Duino_Elegies',
        note: 'Source of the name: the wanderer brings back from the mountain rim \'a word he has earned, pure: the yellow and blue gentian.\'',
      },
    ],
    relatedTerms: ['sudwest', 'schwarzkommando', 'ndjambi-karunga'],
  },
  {
    id: 'in-hoc-signo-vinces',
    displayLabel: 'In Hoc Signo Vinces',
    railLabel: 'In Hoc Signo',
    chronology: { episodeId: '1.14', sort: 114.25 },
    colorVar: plotlineColorVars.P02,
    context: {
      excerpt:
        'scratched in the bark with the point of a bayonet the words IN HOC SIGNO VINGES',
      highlightedTerm: 'IN HOC SIGNO',
    },
    apparatus: {
      explanation:
        '\'In this sign you shall conquer.\' Eusebius reports that Constantine saw a sign in the sky before the Battle of the Milvian Bridge in 312; later tradition made it a cross. Kooy and Uytenbogaart record the phrase scratched below a red-circle tree mark at a V-2 launch site near Wassenaar. The soldier \'did not live to see his prophecy fulfilled\', and his Christian promise of victory remains attached to the rocket\'s firing bearing.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V101.1-2; cites Gibbon ch. 20 (Eusebius) and Kooy and Uytenbogaart, p. 467.',
      },
      {
        label: '*In hoc signo vinces*',
        url: 'https://en.wikipedia.org/wiki/In_hoc_signo_vinces',
        note: 'Constantine\'s vision before the Battle of the Milvian Bridge (312 CE).',
      },
    ],
    relatedTerms: ['bodenplatte', 'blicero'],
  },
  {
    id: 'erwartung',
    displayLabel: 'Erwartung',
    chronology: { episodeId: '1.14', sort: 114.26 },
    colorVar: plotlineColorVars.P02,
    context: {
      excerpt:
        'Erwartung. . . . For some reason he finds it harder these days to remember.',
      highlightedTerm: 'Erwartung',
    },
    apparatus: {
      explanation:
        'German *Erwartung* means expectation, or the anxious form of it, foreboding. Arnold Schoenberg composed his monodrama of that name in 1909 (premiered Prague, 1924), following a woman through a dark forest until she finds her lover dead. Adorno, in *Philosophy of New Music* (1949), described its music as polarised between bodily shock and \'a crystalline standstill\'. Pynchon leaves the word alone beside Blicero\'s launch ritual, carrying the opera\'s waiting, darkness, and dead lover into the scene.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V101.9; cites Adorno, *Philosophy of Modern Music*, pp. 42-43.',
      },
      {
        label: '*Erwartung* (Schoenberg)',
        url: 'https://en.wikipedia.org/wiki/Erwartung',
        note: 'Monodrama for soprano and orchestra, composed 1909, premiered 1924.',
      },
    ],
    relatedTerms: ['rilke-tenth-elegy', 'rilke-sonnets-orpheus', 'blicero'],
  },
  {
    id: 'herero-genocide',
    displayLabel: 'Herero genocide',
    chronology: { episodeId: '1.14', sort: 114.4 },
    colorVar: '--color-accent',
    context: {
      excerpt:
        'Are they Elect, or are they Preterite, and doomed as dodoes?',
      highlightedTerm: 'doomed as dodoes',
    },
    apparatus: {
      explanation:
        'German colonial forces killed Herero and Nama people through battle, expulsion into the Omaheke Desert, forced labour, and concentration camps between 1904 and 1908. Von Trotha\'s *Vernichtungsbefehl* of October 1904 ordered the killing of all Herero men and the expulsion of women and children into the desert; camps followed. An estimated 65,000 to 80,000 Herero and 10,000 Nama died. Enzian and the Schwarzkommando descend from the survivors, and Weissmann carries colonial command from South-West Africa into the rocket battery; the genocide sits chronologically earlier than the European war and remains active inside it.',
    },
    externalRefs: [
      {
        label: 'Herero and Nama genocide',
        url: 'https://en.wikipedia.org/wiki/Herero_and_Nama_genocide',
        note: 'German colonial killings in South-West Africa, 1904-1908.',
      },
      {
        label: 'Jürgen Zimmerer, \'Colonial Genocide and the Holocaust\'',
        note: 'Historicises the Herero genocide as a precursor to the Holocaust.',
      },
    ],
    relatedTerms: ['sudwest', 'schwarzkommando', 'enzian', 'preterite'],
  },
  {
    id: 'von-goll',
    displayLabel: 'Gerhardt von Göll / Der Springer',
    railLabel: 'von Göll',
    chronology: { episodeId: '1.14', sort: 114.5 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'Running time of the film is three minutes, 25 seconds and there are twelve shots.',
      highlightedTerm: 'film',
    },
    apparatus: {
      explanation:
        'Von Göll directs propaganda film, trades on the black market, and later moves through the Zone as *Der Springer*, the chess knight. His fabricated Schwarzkommando footage precedes the discovery of an actual Schwarzkommando, and Allied intelligence staff read the invented reels as evidence of a real formation, so that the film has shifted what a viewer counts as documentation and, in time, has given the Herero survivors in the Zone the imagery through which they organise themselves as the Schwarzkommando.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Traces von Göll\'s appearances across the Zone episodes.',
      },
    ],
    relatedTerms: ['schwarzkommando', 'greta-erdmann', 'der-springer'],
  },
  {
    id: 'mrs-quoad-diseases',
    displayLabel: 'Mrs Quoad\'s Antiquated Diseases',
    railLabel: 'Mrs Quoad',
    chronology: { episodeId: '1.15', sort: 115.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'suffering a series of antiquated diseases—greensickness, tetter, kibes, purples, imposthumes and almonds in the ears, most recently a touch of scurvy',
      highlightedTerm: 'antiquated diseases',
    },
    apparatus: {
      explanation:
        'Greensickness is chlorosis, an iron-deficiency anaemia once thought to afflict adolescent girls; tetter names several skin eruptions; kibes are chilblains; purples are livid blotches beneath the skin; imposthumes are abscesses; \'almonds in the ears\' are swollen tonsils; scurvy produces bleeding under the skin. The colours run from green through red to purple, an archaic diseased spectrum that precedes Mrs Quoad\'s succession of lurid sweets. Most of the terms were obsolete by the mid-twentieth century, several deriving from medieval and early-modern medical vocabulary (imposthume from Latin *apostema*, almonds from the almond-shaped tonsils). The old nosology places Mrs Quoad outside modern time, giving her a catalogue of complaints that mid-twentieth-century clinicians had already renamed or discarded, so that Slothrop\'s visit reads like an appointment held in an earlier medical century.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V115.3-4; catalogues all seven diseases and their medical definitions.',
      },
    ],
    relatedTerms: ['slothrop'],
  },
  {
    id: 'old-woman-pig-stile',
    displayLabel: 'Old Woman and the Pig (Cumulative Tale)',
    railLabel: 'Pig / Stile',
    chronology: { episodeId: '1.15', sort: 115.2 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'coercions and vast deals to be made on the order of the old woman\'s arrangement for getting her pig home over the stile',
      highlightedTerm: 'old woman\'s arrangement',
    },
    apparatus: {
      explanation:
        'In the cumulative folktale collected in Clouston\'s *Popular Tales*, an old woman\'s pig balks at a stile, triggering a chain of ten intermediaries (dog, stick, fire, water, ox, butcher, rope, rat, cat, cow) before the pig finally leaps. Weisenburger traces the pattern to a Talmudic hymn and links the ten steps to the launch countdown, the Kabbalistic *Sephiroth*, and the ten sound-holes of Slothrop\'s Hohner harmonica. The bureaucratic chain of coercion Slothrop finds himself inside follows the same logic, since each link in the tale acts only when the next threatens it, and the offices, agents, and informants around him behave the same way once the pattern of pressures is unfolded.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V114.12-13; traces the cumulative tale and its numerological resonances.',
      },
    ],
    relatedTerms: ['slothrop'],
  },
  {
    id: 'ein-volk',
    displayLabel: 'ein Volk ein Führer',
    chronology: { episodeId: '1.16', sort: 116 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'ein Volk ein Führer, it wants a machine of many separate parts',
      highlightedTerm: 'ein Volk ein Führer',
    },
    apparatus: {
      explanation:
        '\'Ein Volk, ein Reich, ein Führer\' is the Nazi slogan joining one people, one state, and one leader; the novel invokes its shorter form. The war machine that Pynchon describes alongside it is distributed across companies, offices, and armies whose work continues after any individual leader disappears.',
    },
    externalRefs: [
      {
        label: 'Ein Volk, ein Reich, ein Führer',
        url: 'https://en.wikipedia.org/wiki/Ein_Volk,_ein_Reich,_ein_F%C3%BChrer',
        note: 'Nazi propaganda slogan promulgated from 1938.',
      },
    ],
    relatedTerms: ['ig-farben'],
  },
  {
    id: 'rundstedt-offensive',
    displayLabel: 'Rundstedt offensive',
    chronology: { episodeId: '1.16', sort: 116.05 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'The Rundstedt offensive has bogged down',
      highlightedTerm: 'Rundstedt offensive',
    },
    apparatus: {
      explanation:
        'The Rundstedt offensive is the German counter-offensive of 16 December 1944 through late January 1945, mounted through the Ardennes forest against thinly held American lines; Allied troops came to call it the Battle of the Bulge. Field Marshal Gerd von Rundstedt, commander of German forces in the west, lent his name to the plan though Hitler and Model directed the operation. The rumour of resumed German advance runs through the Roger and Jessica Christmas scene, and the offensive delayed the Allied push towards the V-2 launch sites in Holland.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V131.11; identifies the Ardennes counter-offensive.',
      },
      {
        label: 'Battle of the Bulge',
        url: 'https://en.wikipedia.org/wiki/Battle_of_the_Bulge',
        note: 'German Ardennes counter-offensive, 16 December 1944 to 25 January 1945.',
      },
    ],
  },
  {
    id: 'in-dulci-jubilo',
    displayLabel: 'In dulci jubilo',
    chronology: { episodeId: '1.16', sort: 116.1 },
    colorVar: '--color-accent',
    context: {
      excerpt:
        'O Jesu parvule, nach dir ist mir so weh',
      highlightedTerm: 'Jesu parvule',
    },
    apparatus: {
      explanation:
        'The macaronic carol \'In dulci jubilo\' mixes German and Latin and has traditionally been linked to a fourteenth-century vision of the Dominican mystic Heinrich Suso. Pynchon drew on a *Times* article on \'Macaronic Carols\' published on 22 December 1944, which discussed the form as demonstrating \'the unity of Christendom even at the very time of the Reformation\'. The carol was performed at London-area carolling on Saturday 23 December, the date of Roger and Jessica\'s church scene; the two languages stay interleaved in the song as war and Christmas occupy the same evening.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V129.8-16; identifies the *Times* source and Greene\'s *Early English Carols* as Pynchon\'s secondary reference.',
      },
      {
        label: 'In dulci jubilo',
        url: 'https://en.wikipedia.org/wiki/In_dulci_jubilo',
        note: 'Fourteenth-century macaronic carol, attributed by tradition to Heinrich Suso.',
      },
    ],
    relatedTerms: ['roger-mexico', 'jessica-swanlake'],
  },
  {
    id: 'paradoxical-phase',
    displayLabel: 'Paradoxical Phase',
    chronology: { episodeId: '1.17', sort: 117.1 },
    colorVar: '--color-accent',
    context: {
      excerpt:
        'Paradoxical phase, when weak stimuli get strong responses',
      highlightedTerm: 'Paradoxical phase',
    },
    apparatus: {
      explanation:
        'Pointsman diagnoses his own exhaustion with Pavlov\'s paradoxical phase, in which a weak stimulus produces a stronger response than a strong one as cortical capacity declines. Weisenburger notes that Pavlov used the same vocabulary to diagnose the progressive effects of his own senility, and Pointsman quotes the phase for himself just as he is designing the experiment that would isolate a reversal in Slothrop, so the diagnostic tool the laboratory was built to apply outward has begun operating inward on the researcher first.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V136.25; notes Pavlov\'s self-diagnosis habit.',
      },
      {
        label: 'Transmarginal inhibition',
        url: 'https://en.wikipedia.org/wiki/Transmarginal_inhibition',
        note: 'Pavlov\'s account of ultraparadoxical and paradoxical phases in nervous system exhaustion.',
      },
    ],
    relatedTerms: ['pointsman', 'pavlovian', 'transmarginal', 'conditioned-reflex'],
  },
  {
    id: 'reichssieger-thanatz-alpdrucken',
    displayLabel: 'Reichssieger von Thanatz Alpdrücken',
    railLabel: 'Reichssieger',
    chronology: { episodeId: '1.17', sort: 117.2 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'stalking Reichssieger von Thanatz Alpdrucken, that most elusive of Nazi hounds, champion Weimaraner for 1941, bearing studbook number 416832 tattooed inside his ear',
      highlightedTerm: 'Reichssieger von Thanatz Alpdrucken',
    },
    apparatus: {
      explanation:
        'Pointsman dreams of a champion Weimaraner named Reichssieger von Thanatz Alpdrücken. *Alpdrücken* (nightmare, literally \'elf-pressing\') later titles von Göll\'s sadomasochistic film; *Thanatz*, from Greek *thanatos*, becomes the name of Miklos Thanatz. The breed name sounds Weimar, and the studbook tattoo inside the dog\'s ear runs on the same identifying procedure that the SS used to mark prisoners at Auschwitz, so that a champion pedigree and a camp inmate are catalogued by machinery that only distinguishes them by which register they end up in.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V142.32-33; traces the fragmentation of the dog\'s name into later characters and films.',
      },
    ],
    relatedTerms: ['pointsman', 'alpdrucken', 'von-goll'],
  },
  {
    id: 'eventyr',
    displayLabel: 'Carroll Eventyr',
    railLabel: 'Eventyr',
    chronology: { episodeId: '1.18', sort: 118 },
    colorVar: '--color-accent',
    context: {
      excerpt:
        'There are problems with levels, and with Judgment, in the Tarot sense. This is part of the storm that sweeps now among them all, both sides of Death.',
      highlightedTerm: 'Tarot',
    },
    apparatus: {
      explanation:
        'Carroll Eventyr works as a medium in the White Visitation\'s Psi Section. *Eventyr* means \'fairy tale\' or \'adventure\' in Danish and Norwegian. Through him, Peter Sachsa and the dead airman Roland Feldspath supply information that the intelligence staff treat alongside Pointsman\'s laboratory evidence.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates Eventyr\'s role in the Psi Section.',
      },
    ],
    relatedTerms: ['peter-sachsa', 'pavlovian'],
  },
  {
    id: 'lubeck-raid',
    displayLabel: 'Lübeck raid (Palm Sunday, 1942)',
    railLabel: 'Lübeck',
    chronology: { episodeId: '1.18', sort: 118.1 },
    colorVar: plotlineColorVars.P04,
    context: {
      excerpt:
        'Basher St. Blaise\'s angel, miles beyond designating, rising over Lübeck that Palm Sunday',
      highlightedTerm: 'Lübeck',
    },
    apparatus: {
      explanation:
        'On 28 March 1942, Palm Sunday, the RAF used incendiaries against Lübeck, a lightly defended Baltic port whose medieval timber centre burned readily; the raid was among the earliest area-bombing operations of the war. Basher St Blaise and his wingman see an angel above the fire. The last V-2 struck England on 27 March 1945, almost three years later; Hitler\'s response to Lübeck had begun the \'Baedeker raids\' on historic English cities while the *Vergeltungswaffen* were still under development. Leni Pökler\'s childhood home, the novel notes elsewhere, stood beside the Trave in Lübeck.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V146.27; notes the Palm Sunday date and the three-year symmetry with the last V-2.',
      },
      {
        label: 'Bombing of Lübeck in World War II',
        url: 'https://en.wikipedia.org/wiki/Bombing_of_L%C3%BCbeck_in_World_War_II',
        note: 'RAF raid of 28 March 1942 that destroyed much of the medieval city centre.',
      },
    ],
    relatedTerms: ['eventyr', 'peter-sachsa'],
  },
  {
    id: 'breaking-of-the-vessels',
    displayLabel: 'Breaking of the Vessels',
    railLabel: 'Vessels',
    chronology: { episodeId: '1.18', sort: 118.2 },
    colorVar: '--color-accent',
    context: {
      excerpt:
        'Fallen sparks. Fragments of vessels broken at the Creation.',
      highlightedTerm: 'vessels broken',
    },
    apparatus: {
      explanation:
        'In the Lurianic Kabbalah of Isaac Luria (1534-72), vessels formed to receive divine light shatter under its force, scattering sparks through creation; the *qlippoth* are the husks that entrap those sparks. Gershom Scholem, in *On the Kabbalah and Its Symbolism* (1960), describes the result: \'Nothing remains in its proper place. Everything is somewhere else.\' *Gravity\'s Rainbow* briefly promises \'a gathering back to home\', then withdraws the promise with \'there is no such message, no such home\'. The Kabbalistic frame gives the novel a vocabulary for scattering and a language for the *tikkun* that might reassemble the pieces, and the question of whether the sparks scattered by this war can still be gathered is one the novel refuses to close.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V148.37-38; cites Scholem, *On the Kabbalah*, pp. 112-13.',
      },
      {
        label: 'Gershom Scholem',
        url: 'https://en.wikipedia.org/wiki/Gershom_Scholem',
        note: 'Scholar of Jewish mysticism (1897-1982) whose works on Kabbalah are Pynchon\'s primary source.',
      },
    ],
    relatedTerms: ['qlippoth', 'preterite'],
  },
  {
    id: 'norden-device',
    displayLabel: 'Norden bombsight',
    railLabel: 'Norden',
    chronology: { episodeId: '1.18', sort: 118.3 },
    colorVar: '--color-accent',
    context: {
      excerpt:
        'the fussy Norden device',
      highlightedTerm: 'Norden',
    },
    apparatus: {
      explanation:
        'Carl L. Norden developed his stabilised optical bombsight for the United States Navy in the interwar period; variants were later used widely in American heavy bombers and coupled to an autopilot during the bombing run. Publicity claimed pickle-barrel accuracy from high altitude, though cloud, wind, mechanical error, and anti-aircraft fire made combat bombing far less precise. Pynchon sets the Norden alongside the RAF\'s incendiary raid on Lübeck, so that the American faith in optical precision and the British commitment to burning a medieval city centre sit in the same episode as two answers, drawn from the same industrial tradition, to the question of how to deliver a bomb.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V151.23; notes Norden\'s \'pickle barrel\' claim and the device\'s fragility.',
      },
      {
        label: 'Norden bombsight',
        url: 'https://en.wikipedia.org/wiki/Norden_bombsight',
        note: 'American precision bombsight used in WWII strategic bombing.',
      },
    ],
    relatedTerms: ['lubeck-raid'],
  },
  {
    id: 'die-frau-im-mond',
    displayLabel: 'Die Frau im Mond',
    chronology: { episodeId: '1.19', sort: 119 },
    colorVar: plotlineColorVars.P04,
    context: {
      excerpt:
        'They saw Die Frau im Mond. Franz was amused, condescending. He picked at technical points.',
      highlightedTerm: 'Die Frau im Mond',
    },
    apparatus: {
      explanation:
        'Hermann Oberth advised Fritz Lang on the rockets in *Die Frau im Mond* (1929), and the studio publicised plans for a real launch at the premiere. Lang used a descending numerical countdown to make the launch legible on screen, and German rocketeers later adopted the convention; claims that the Gestapo confiscated prints because the film gave away rocket secrets are repeated in film histories but remain difficult to verify. Pökler mocks the film\'s technical errors, then leaves the cinema wanting to build rockets, and takes that wish into the *Verein für Raumschiffahrt* and, eventually, into Peenemünde.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V159.33; cites Kracauer, *From Caligari to Hitler*, p. 151.',
      },
      {
        label: 'Frau im Mond',
        url: 'https://en.wikipedia.org/wiki/Frau_im_Mond',
        note: 'Fritz Lang\'s 1929 silent film; Oberth advised on the rocket design.',
      },
    ],
    relatedTerms: ['pokler', 'persistence-of-vision', 'nibelungen-fritz-lang'],
  },
  {
    id: 'coal-tar-theology',
    displayLabel: 'Coal-tar theology',
    chronology: { episodeId: '1.19', sort: 119.1 },
    colorVar: plotlineColorVars.P07,
    context: {
      excerpt:
        'Earth\'s excrement, purged out for the ennoblement of shining steel. Passed over. We passed over the coal-tars. A thousand different molecules waited in the preterite dung.',
      highlightedTerm: 'coal-tars',
    },
    apparatus: {
      explanation:
        'Through Peter Sachsa, Walther Rathenau\'s ghost calls coal tar \'Earth\'s excrement\'. Nineteenth-century chemists had once discarded it as a nuisance by-product of gasworks; aniline dyes, medicines, explosives, and plastics later made it the raw material of the German chemical industry that IG Farben consolidated. The passage calls this waste \'preterite\' and shows the cartel turning what was passed over into profit and weapons.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the Rathenau séance and its chemistry references.',
      },
      {
        label: 'Coal tar',
        url: 'https://en.wikipedia.org/wiki/Coal_tar',
        note: 'By-product of gasworks that became the feedstock for aniline dyes, medicines, and plastics.',
      },
      {
        label: 'IG Farben',
        url: 'https://en.wikipedia.org/wiki/IG_Farben',
        note: 'German chemical cartel (1925-1952) built on coal-tar chemistry.',
      },
    ],
    relatedTerms: ['ig-farben', 'preterite', 'benzene-kekule'],
  },
  {
    id: 'rapallo-treaty',
    displayLabel: 'Treaty of Rapallo',
    railLabel: 'Rapallo',
    chronology: { episodeId: '1.19', sort: 119.1 },
    colorVar: plotlineColorVars.P07,
    context: {
      excerpt:
        'von Maltzen at the Rapallo Treaty',
      highlightedTerm: 'Rapallo Treaty',
    },
    apparatus: {
      explanation:
        'Germany and Soviet Russia restored diplomatic relations at Rapallo in April 1922 and renounced outstanding financial and territorial claims against each other; trade and secret military cooperation followed. Baron Ago von Maltzan, head of the German Foreign Office\'s Eastern Department, helped to negotiate the treaty under Foreign Minister Walther Rathenau, and members of the far-right Organisation Consul assassinated Rathenau two months later, on 24 June 1922. Rathenau\'s ghost recalls that opening while describing the movement of German industrial capital beyond the political divisions left by the First World War.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V166.16-17; details von Maltzan\'s role and the trade implications.',
      },
      {
        label: 'Treaty of Rapallo (1922)',
        url: 'https://en.wikipedia.org/wiki/Treaty_of_Rapallo_(1922)',
        note: 'German-Soviet treaty normalising relations after the First World War.',
      },
    ],
    relatedTerms: ['rathenau', 'ig-farben', 'dawes-plan'],
  },
  {
    id: 'perkin-chemistry-succession',
    displayLabel: 'Perkin and the chemistry succession',
    railLabel: 'Perkin',
    chronology: { episodeId: '1.19', sort: 119.11 },
    colorVar: plotlineColorVars.P04,
    context: {
      excerpt:
        'Liebig to August Wilhelm von Hofmann, to Herbert Canister to Laszlo Jamf, a direct chain, cause-and-effect',
      highlightedTerm: 'direct chain',
    },
    apparatus: {
      explanation:
        'Pökler imagines a \'direct chain, cause-and-effect\' from Justus von Liebig through August Wilhelm von Hofmann, William Henry Perkin, Herbert Ganister, and Laszlo Jamf. Perkin discovered the aniline dye mauveine in 1856 while attempting to synthesise quinine, patented it, and built a dye works at Greenford Green; Queen Victoria wore mauve at the 1862 International Exhibition in South Kensington, helping to establish the fashion. German firms later developed the synthetic dye and pharmaceutical industries that IG Farben would consolidate, and Pökler\'s imagined succession runs through those laboratories to Jamf\'s plastics and the materials of the rocket that will carry his own work.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V166.1-9; cites Sasuly, IG Farben, and Haynes, This Chemical Age.',
      },
      {
        label: 'William Henry Perkin',
        url: 'https://en.wikipedia.org/wiki/William_Henry_Perkin',
        note: 'English chemist (1838-1907) who synthesised mauveine, the first aniline dye.',
      },
    ],
    relatedTerms: ['coal-tar-theology', 'ig-farben', 'jamf', 'benzene-kekule'],
  },
  {
    id: 'vfr',
    displayLabel: 'VfR (Verein für Raumschiffahrt)',
    railLabel: 'VfR',
    chronology: { episodeId: '1.19', sort: 119.2 },
    colorVar: plotlineColorVars.P04,
    context: {
      excerpt:
        'What kind of Wandervögel idiocy is it to run around all night in a marsh calling yourselves the Society for Space Navigation?',
      highlightedTerm: 'Society for Space Navigation',
    },
    apparatus: {
      explanation:
        'The *Verein für Raumschiffahrt* (Society for Space Travel) brought amateur rocketeers together in Berlin from 1927, tested liquid-fuel motors on the Raketenflugplatz, and drew Wernher von Braun in as a student before the army absorbed its most useful members. Pökler enters Pynchon\'s fictional version after seeing *Die Frau im Mond*. Leni calls it \'Wandervögel idiocy\' because its engineers discuss the stars while military money is already deciding what their rockets will become.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the VfR passages and their historical rocketeers.',
      },
      {
        label: 'Verein für Raumschiffahrt',
        url: 'https://en.wikipedia.org/wiki/Verein_f%C3%BCr_Raumschiffahrt',
        note: 'German amateur rocket society (1927-1934).',
      },
    ],
    relatedTerms: ['pokler', 'wandervogel', 'von-braun'],
  },
  {
    id: 'pokler',
    displayLabel: 'Franz Pökler',
    railLabel: 'F. Pökler',
    chronology: { episodeId: '1.19', sort: 119.3 },
    colorVar: plotlineColorVars.P04,
    context: {
      excerpt:
        'Pökler was an extension of the Rocket, long before it was ever built.',
      highlightedTerm: 'Pökler',
    },
    apparatus: {
      explanation:
        'Pökler enters rocketry through *Die Frau im Mond*, works under military control at Peenemünde, and continues while the state uses uncertain annual visits from Ilse to secure his obedience. He keeps treating each accommodation as temporary. At Dora, the prisoners who built the rockets show him what his technical work has required from bodies kept outside the laboratory.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Traces Pökler\'s arc across the novel and its historical sources.',
      },
    ],
    relatedTerms: ['mittelwerk-dora', 'persistence-of-vision', 'gift-of-daedalus', 'zwolfkinder'],
  },
  {
    id: 'rathenau',
    displayLabel: 'Walther Rathenau (ghost)',
    railLabel: 'Rathenau',
    chronology: { episodeId: '1.19', sort: 119.4 },
    colorVar: plotlineColorVars.P07,
    context: {
      excerpt:
        'Earth\'s excrement, purged out for the ennoblement of shining steel.',
      highlightedTerm: 'Earth\'s excrement',
    },
    apparatus: {
      explanation:
        'Walther Rathenau (1867-1922), chairman of AEG and foreign minister of the Weimar Republic, speaks through Peter Sachsa at Leni\'s séance. Members of the far-right Organisation Consul assassinated Rathenau on 24 June 1922, two months after he signed the Treaty of Rapallo, and his double career put the corporate and political histories inside one biography; his ghost speaks from that combined position when it describes coal tar as \'Earth\'s excrement\' and turns the chemistry of dyes and explosives into a theology that runs through the state and the cartels.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the Rathenau séance and provides the historical context for the assassination.',
      },
      {
        label: 'Walther Rathenau',
        url: 'https://en.wikipedia.org/wiki/Walther_Rathenau',
        note: 'German-Jewish industrialist (1867-1922), AEG chairman, Weimar Foreign Minister.',
      },
    ],
    relatedTerms: ['coal-tar-theology', 'ig-farben'],
  },
  {
    id: 'peter-sachsa',
    displayLabel: 'Peter Sachsa',
    railLabel: 'Sachsa',
    chronology: { episodeId: '1.19', sort: 119.5 },
    colorVar: plotlineColorVars.P04,
    context: {
      excerpt:
        'Messages tonight, borne on the lights of Berlin.',
      highlightedTerm: 'Berlin',
    },
    apparatus: {
      explanation:
        'Leni attends Peter Sachsa\'s séances in Weimar Berlin, where Walther Rathenau speaks through him. Eventyr later channels the dead Sachsa at the White Visitation, carrying Rathenau\'s voice from Leni\'s past into wartime intelligence.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Discusses the Sachsa/Eventyr channel and its ties to the séance material.',
      },
    ],
    relatedTerms: ['eventyr', 'rathenau', 'coal-tar-theology'],
  },
  {
    id: 'rosa-luxemburg',
    displayLabel: 'Rosa Luxemburg',
    railLabel: 'Rosa',
    chronology: { episodeId: '1.19', sort: 119.6 },
    colorVar: plotlineColorVars.P04,
    context: {
      excerpt:
        'The Revolution died, though Leni was only a young girl and not political, with Rosa Luxemburg.',
      highlightedTerm: 'Rosa Luxemburg',
    },
    apparatus: {
      explanation:
        'Rosa Luxemburg (1871-1919), the Marxist writer and revolutionary who co-founded the Communist Party of Germany, opposed the war and German social democracy\'s support for it. Freikorps soldiers seized Luxemburg and Karl Liebknecht on 15 January 1919, beat and shot her, then threw her body into Berlin\'s Landwehr Canal, from which it was recovered on 31 May 1919; Leni dates the death of the German Revolution to that January and carries the loss into her arguments with Franz.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V155.7-8; details the murder and its political context.',
      },
      {
        label: 'Rosa Luxemburg',
        url: 'https://en.wikipedia.org/wiki/Rosa_Luxemburg',
        note: 'Polish-German revolutionary (1871-1919), co-founder of the KPD.',
      },
    ],
    relatedTerms: ['pokler', 'army-of-lovers'],
  },
  {
    id: 'army-of-lovers',
    displayLabel: 'An Army of Lovers Can Be Beaten',
    railLabel: 'Army of Lovers',
    chronology: { episodeId: '1.19', sort: 119.7 },
    colorVar: plotlineColorVars.P04,
    context: {
      excerpt:
        'AN ARMY OF LOVERS CAN BE BEATEN.',
      highlightedTerm: 'ARMY OF LOVERS',
    },
    apparatus: {
      explanation:
        'Graffiti in Berlin\'s Red districts reverses Phaedrus\'s proposal in Plato\'s *Symposium* (178d-179a) that an army made of lovers would fight bravely under one another\'s eyes. The Sacred Band of Thebes, an elite force conventionally described as 150 male couples, was destroyed at Chaeronea in 338 BCE. Leni reads the defeated version on walls that carry revolutionary and sexual politics together.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V155.12; identifies the reversal of Plato\'s Symposium.',
      },
      {
        label: 'Sacred Band of Thebes',
        url: 'https://en.wikipedia.org/wiki/Sacred_Band_of_Thebes',
        note: 'Elite Theban unit of 150 male couples; destroyed at Chaeronea (338 BCE).',
      },
    ],
    relatedTerms: ['rosa-luxemburg', 'pokler'],
  },
  {
    id: 'nibelungen-fritz-lang',
    displayLabel: 'Die Nibelungen (Fritz Lang)',
    railLabel: 'Nibelungen',
    chronology: { episodeId: '1.19', sort: 119.8 },
    colorVar: plotlineColorVars.P04,
    context: {
      excerpt:
        'He fell asleep during Nibelungen. He missed Attila the Hun roaring in from the East.',
      highlightedTerm: 'Nibelungen',
    },
    apparatus: {
      explanation:
        'Fritz Lang\'s 1924 silent epic comprises *Siegfried* and *Kriemhild\'s Revenge*. Franz Pökler sleeps through the second film and later remembers Attila \'sweeping in from the East\', an event that he did not see; Siegfried Kracauer describes the destruction in *Kriemhild\'s Revenge* as an ordered chain of causes and effects (*From Caligari to Hitler*, pp. 93-94), which returns in the couple\'s later argument about the *Götterdämmerung* mentality of the rocket engineers.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V159.19; cites Kracauer, *From Caligari to Hitler*, pp. 93-94.',
      },
      {
        label: 'Die Nibelungen (Fritz Lang)',
        url: 'https://en.wikipedia.org/wiki/Die_Nibelungen',
        note: 'Two-part silent epic released in 1924.',
      },
    ],
    relatedTerms: ['die-frau-im-mond', 'gotterdammerung', 'pokler'],
  },
  {
    id: 'gotterdammerung',
    displayLabel: 'Götterdämmerung mentality',
    railLabel: 'Götterdämmerung',
    chronology: { episodeId: '1.19', sort: 119.9 },
    colorVar: plotlineColorVars.P04,
    context: {
      excerpt:
        'The Götterdämmerung mentality',
      highlightedTerm: 'Götterdämmerung',
    },
    apparatus: {
      explanation:
        'Richard Wagner\'s *Götterdämmerung*, the fourth drama of the *Ring* cycle, ends with Valhalla burning and the old order destroyed. Leni uses the term against Franz and his colleagues to accuse them of a fascination with catastrophic endings; she reads the rocket programme, in that argument, as an engineered enactment of the same mythic collapse.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V163.37-38; identifies the Wagner reference.',
      },
    ],
    relatedTerms: ['nibelungen-fritz-lang', 'pisces', 'blicero'],
  },
  {
    id: 'cortex-bark',
    displayLabel: 'Cortex / Bark',
    chronology: { episodeId: '1.20', sort: 120.1 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'the Latin cortex translates into English as "bark," not to mention the well-known and humorous relation between dogs and trees',
      highlightedTerm: 'cortex',
    },
    apparatus: {
      explanation:
        'Latin *cortex* means tree bark and, in anatomy, the brain\'s outer layer; with the dogs\' bark inside a Pavlovian laboratory, Pointsman\'s joke folds three senses into one word and quietly binds the conditioning apparatus to the etymology it borrows from.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Notes the Pavlovian and etymological pun.',
      },
    ],
    relatedTerms: ['pointsman', 'pavlovian', 'paradoxical-phase'],
  },
  {
    id: 'golliwog',
    displayLabel: 'Golliwog',
    chronology: { episodeId: '1.21', sort: 121.1 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'Claire got a golliwog.',
      highlightedTerm: 'golliwog',
    },
    apparatus: {
      explanation:
        'Florence Kate Upton introduced the blackface caricature in *The Adventures of Two Dutch Dolls and a Golliwogg* (1895), drawing on a minstrel doll from her childhood. Claire receives one among the Boxing Day presents; the colonial image has become an ordinary children\'s toy beside the *Hansel and Gretel* pantomime.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V174.19; cites MacGregor, \'The Golliwog\', and the Upton source.',
      },
      {
        label: 'Golliwog',
        url: 'https://en.wikipedia.org/wiki/Golliwog',
        note: 'Blackface doll character created by Florence Kate Upton in 1895.',
      },
    ],
    relatedTerms: ['maerchen', 'herero-genocide'],
  },
  {
    id: 'qlippoth',
    displayLabel: 'Qlippoth, Shells of the Dead',
    railLabel: 'Qlippoth',
    chronology: { episodeId: '1.21', sort: 121.2 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'the demons known to the main sequence of Western magic as the Qlippoth, Shells of the Dead',
      highlightedTerm: 'Qlippoth',
    },
    apparatus: {
      explanation:
        '*Qelippot* means \'shells\' or \'husks\'. In Lurianic Kabbalah, shards from the broken vessels entrap divine sparks in the material world; human observance participates in *tikkun*, their release and repair. Later occult systems organise the qlippoth as demonic powers, and Pynchon calls them \'Shells of the Dead\', bringing that language into the séance material.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V176.14-15 and cross-references V148.37-38n on the breaking of the vessels.',
      },
      {
        label: 'Qliphoth',
        url: 'https://en.wikipedia.org/wiki/Qliphoth',
        note: 'Kabbalistic shells of impurity containing fallen divine sparks.',
      },
    ],
    relatedTerms: ['breaking-of-the-vessels', 'preterite'],
  },
  {
    id: 'quisling-molecules',
    displayLabel: 'Quisling molecules',
    railLabel: 'Quisling',
    chronology: { episodeId: '1.21', sort: 121.3 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'Quisling molecules have shifted in latticelike ways to freeze him',
      highlightedTerm: 'Quisling molecules',
    },
    apparatus: {
      explanation:
        'Vidkun Quisling (1887-1945) headed Norway\'s collaborationist government under German occupation, and his surname became a term for a traitor. Pynchon carries that political sense into chemistry: the \'Quisling molecules\' freeze the body from within by shifting inside its own lattice, so the collaborationist figure names a betrayal that operates at the scale of matter itself.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V176.38-39; identifies Quisling and the political personification of chemistry.',
      },
      {
        label: 'Vidkun Quisling',
        url: 'https://en.wikipedia.org/wiki/Vidkun_Quisling',
        note: 'Norwegian collaborator (1887-1945) whose name became synonymous with treason.',
      },
    ],
    relatedTerms: ['imipolex-g', 'coal-tar-theology'],
  },
  // part 2 episodes
  {
    id: 'puritan-paranoia',
    displayLabel: 'Puritan reflex of paranoia',
    chronology: { episodeId: '2.01', sort: 201 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'a Puritan reflex of seeking other orders behind the visible, also known as paranoia',
      highlightedTerm: 'Puritan reflex',
    },
    apparatus: {
      explanation:
        'Puritan election taught Slothrop\'s ancestors to read visible events for hidden signs of grace or damnation, and to sort every accident into the two categories of the saved and the passed-over. In Slothrop the theology has thinned to a habit of interpretation, so he continues to read rocket strikes, corporate arrangements, and stray encounters as coded messages from an unseen order.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Discusses the Puritan lineage as a source of Slothrop\'s paranoia.',
      },
    ],
    relatedTerms: ['preterite', 'slothrop', 'poisson-distribution'],
  },
  {
    id: 'casino-hermann-goering',
    displayLabel: 'Casino Hermann Goering',
    railLabel: 'Casino H.G.',
    chronology: { episodeId: '2.01', sort: 201.1 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'the Casino Hermann Goering flat white and the palms in black sawtooth, hardly moving',
      highlightedTerm: 'Casino Hermann Goering',
    },
    apparatus: {
      explanation:
        'A Messerschmitt squadron spells Hermann Goering\'s name in seashells on the roof of the fictional casino. The sign survives liberation: Slothrop gambles beneath it while Pointsman arranges the next stage of his experiment.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V181; identifies the casino as setting for Part 2\'s chance/causality tension.',
      },
    ],
    relatedTerms: ['slothrop', 'katje'],
  },
  {
    id: 'octopus-grigori',
    displayLabel: 'Octopus Grigori',
    railLabel: 'Grigori',
    chronology: { episodeId: '2.01', sort: 201.2 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'Holy shit it\'s moving — an octopus? Yes it is the biggest fucking octopus Slothrop has ever seen outside of the movies',
      highlightedTerm: 'octopus',
    },
    apparatus: {
      explanation:
        'Dr Porkyevitch conditions Grigori so that handlers can stage Katje\'s rescue on the Casino beach, giving Slothrop a plausible sequence of chance and heroism to inhabit. Waxwing later tells him, \'This really happened tonight. But that octopus didn\'t\', and the sentence turns the conditioned reflex from Pavlov\'s laboratory into a piece of operational theatre.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V186-188; identifies Porkyevitch and the staged rescue.',
      },
    ],
    relatedTerms: ['katje', 'pointsman', 'pavlovian', 'blodgett-waxwing'],
  },
  {
    id: 'arbella-winthrop',
    displayLabel: 'The Arbella / Governor Winthrop',
    railLabel: 'Arbella',
    chronology: { episodeId: '2.02', sort: 202.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'back to 1630 when Governor Winthrop came over to America on the Arbella, flagship of a great Puritan flotilla that year',
      highlightedTerm: 'Arbella',
    },
    apparatus: {
      explanation:
        'John Winthrop (1588-1649), governor of the Massachusetts Bay Colony, crossed the Atlantic aboard the *Arbella* in 1630 at the head of a fleet of roughly 700 colonists in eleven ships; *A Model of Christian Charity* is traditionally associated with the crossing, though its delivery aboard ship is disputed. William Pynchon travelled with the same fleet, founded Springfield, Massachusetts, in 1636, and had his *The Meritorious Price of Our Redemption* burned by Boston authorities in 1650. The novel adds a first American Slothrop as \'mess cook or something\', then runs the ships backwards across the Atlantic and carries Slothrop\'s genealogy into the Puritan settlement.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V204.1-4; identifies the Winthrop/Pynchon genealogical connection and the hysteron proteron.',
      },
      {
        label: 'John Winthrop',
        url: 'https://en.wikipedia.org/wiki/John_Winthrop',
        note: 'First governor of Massachusetts Bay Colony (1588-1649).',
      },
    ],
    relatedTerms: ['william-slothrop', 'preterite', 'puritan-paranoia'],
  },
  {
    id: 'bukharin-conspiracy',
    displayLabel: 'The Bukharin Conspiracy',
    railLabel: 'Bukharin',
    chronology: { episodeId: '2.02', sort: 202.2 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'the Bukharin conspiracy',
      highlightedTerm: 'Bukharin conspiracy',
    },
    apparatus: {
      explanation:
        'Nikolai Bukharin (1888-1938), Bolshevik theorist and author of *Imperialism and World Economy*, confessed after threats against his family during a show trial whose conspiracy charges were fabricated, and the state executed him on 15 March 1938. The New Turkic Alphabet, a Soviet programme that replaced Arabic scripts with a Latin alphabet for many Turkic languages, first convened its All-Union Central Committee in Baku in 1927, and Tchitcherine\'s brief in Central Asia is embedded in that alphabetic reform. Calling his orders part of \'the Bukharin conspiracy\' rewrites that mundane linguistic work in the paranoid vocabulary of the Great Purge.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V189.25 (Bukharin) and V339.1 (NTA); cites Winner\'s 1952 essay on alphabetic reform.',
      },
      {
        label: 'Nikolai Bukharin',
        url: 'https://en.wikipedia.org/wiki/Nikolai_Bukharin',
        note: 'Bolshevik theorist; executed in 1938 show trial.',
      },
    ],
    relatedTerms: ['tchitcherine'],
  },
  {
    id: 'parabola',
    displayLabel: 'Parabola',
    chronology: { episodeId: '2.03', sort: 203 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'It is the parabola. They must have guessed, once or twice.',
      highlightedTerm: 'parabola',
    },
    apparatus: {
      explanation:
        'After *Brennschluss*, an idealised projectile under constant gravity and without air resistance follows a parabola. Pynchon finds the same curve in the rocket\'s rise and impact, the Nordhausen tunnel mouth, and Slothrop\'s movement through the Zone.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Traces the parabola as structural figure across the novel.',
      },
      {
        label: 'Parabola',
        url: 'https://en.wikipedia.org/wiki/Parabola',
        note: 'Plane curve traced by a projectile under constant gravity, ignoring air resistance.',
      },
      {
        label: 'Projectile motion',
        url: 'https://en.wikipedia.org/wiki/Projectile_motion',
        note: 'The idealised motion whose trajectory is a parabola.',
      },
    ],
    relatedTerms: ['v2-a4', 'brennschluss'],
  },
  {
    id: 'sol-sigil',
    displayLabel: 'Sôl / Sigil Rune',
    railLabel: 'Sôl',
    chronology: { episodeId: '2.03', sort: 203.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'The Old Norse rune for \'S,\' sol, which means \'sun.\' The Old High German name for it is sigil.',
      highlightedTerm: 'sigil',
    },
    apparatus: {
      explanation:
        'Dodson-Truck moves from a solar circle and dot, through the Norse *sól* rune, to the SS double-sig insignia that Walter Heck designed in 1929 from Guido von List\'s Armanen *Sig* rune. He reads the changing mark beside the fragmentation of European tribal forms between 350 and 600 CE; historians of runic writing describe the *Sowilō* rune and its later Armanen adaptation in more cautious terms, so the passage belongs to Dodson-Truck\'s characterisation as much as to any settled philology.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V206.24-25; cites Grimm\'s *Teutonic Mythology* 620.',
      },
      {
        label: 'Sowilō',
        url: 'https://en.wikipedia.org/wiki/Sowil%C5%8D',
        note: 'Elder Futhark rune for \'s\', later Old Norse *sól* and Old High German *sigil*.',
      },
      {
        label: 'Schutzstaffel insignia (SS-Runen)',
        url: 'https://en.wikipedia.org/wiki/Schutzstaffel',
        note: 'Walter Heck\'s 1929 double-sig insignia drew on Guido von List\'s Armanen \'Sig\' rune.',
      },
    ],
    relatedTerms: ['blicero', 'wuotan-wutende-heer'],
  },
  {
    id: 'translatio-studii',
    displayLabel: 'Translatio Studii / Westward Empire',
    railLabel: 'Westward Empire',
    chronology: { episodeId: '2.03', sort: 203.2 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'of course Empire took its way westward, what other way was there but into those virgin sunsets to penetrate and to foul?',
      highlightedTerm: 'Empire took its way westward',
    },
    apparatus: {
      explanation:
        'The medieval *translatio studii et imperii* moves learning and empire west from Greece and Rome into Western Europe, commonly running authority from Troy or Greece through Rome and towards a later western power. Pynchon echoes George Berkeley\'s 1752 line, \'Westward the course of empire takes its way\' (later supplying the title for Emanuel Leutze\'s 1861 mural in the US Capitol), and replaces the progressive frame with penetration and fouling.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V214.35; identifies Berkeley\'s verse and the translatio studii tradition.',
      },
      {
        label: 'Translatio studii',
        url: 'https://en.wikipedia.org/wiki/Translatio_studii',
        note: 'Medieval historiographical figure for the westward transfer of learning.',
      },
      {
        label: 'Translatio imperii',
        url: 'https://en.wikipedia.org/wiki/Translatio_imperii',
        note: 'Companion figure for the westward transfer of political authority.',
      },
    ],
    relatedTerms: ['arbella-winthrop', 'puritan-paranoia'],
  },
  {
    id: 'plasticman',
    displayLabel: 'Plasticman',
    chronology: { episodeId: '2.03', sort: 203.3 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'Four-color Plasticman goes oozing out of a keyhole, around a corner and up through piping',
      highlightedTerm: 'Plasticman',
    },
    apparatus: {
      explanation:
        'Jack Cole introduced Plastic Man in 1941, giving the comic-book hero a rubber body that could flow through a keyhole. Slothrop reads the comic as Sir Stephen Dodson-Truck arrives to teach him about rockets; the cartoon body gives Jamf\'s molecular plasticity an immediate four-colour form.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V206.37; anticipates the Imipolex G theme.',
      },
      {
        label: 'Plastic Man',
        url: 'https://en.wikipedia.org/wiki/Plastic_Man',
        note: 'Comic-book hero created by Jack Cole for Quality Comics in 1941.',
      },
    ],
    relatedTerms: ['imipolex-g', 'sol-sigil'],
  },
  {
    id: 'pfau-zwei',
    displayLabel: 'Pfau Zwei (Peacock Two)',
    railLabel: 'Pfau Zwei',
    chronology: { episodeId: '2.03', sort: 203.4 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'there were Germans, even SS troops, who called the rocket Der Pfau. \'Pfau Zwei.\' Ascending, programmed in a ritual of love . . . at Brennschluss it is done',
      highlightedTerm: 'Pfau Zwei',
    },
    apparatus: {
      explanation:
        'German *Pfau* means \'peacock\'; *Pfau zwei* also plays by sound on *Vau zwei*, V-2. Katje remembers the rainbow-coloured exhaust as a peacock\'s open tail and calls the launch a \'ritual of love\'.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V223.19; explains the Pfau/Fau/V interlingual pun.',
      },
    ],
    relatedTerms: ['v2-a4', 'brennschluss', 'katje'],
  },
  {
    id: 'rain-witch',
    displayLabel: 'Rain-witch (Wetterkatze)',
    railLabel: 'Rain-witch',
    chronology: { episodeId: '2.03', sort: 203.5 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'Her face is as pale as her hair. A rain-witch. Her hat brim makes a chic creamy green halo around her face.',
      highlightedTerm: 'rain-witch',
    },
    apparatus: {
      explanation:
        'Jacob Grimm records *Wetterhexe* and *Wetterkatze*, witches or cats thought to govern storms. Katje\'s pale face and green hat become a \'rain-witch\' and halo; the name also anticipates Pudding\'s invocation of Domina Nocturna.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V221.13; cites Grimm on the *wetterhexe*/*wetterkatze* tradition.',
      },
    ],
    relatedTerms: ['katje', 'domina-nocturna'],
  },
  {
    id: 'gorodki',
    displayLabel: 'Gorodki',
    chronology: { episodeId: '2.04', sort: 204.1 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'an old gorodki stick',
      highlightedTerm: 'gorodki',
    },
    apparatus: {
      explanation:
        '*Gorodki* is a Russian throwing game in which players use a bat, the *bita*, to knock down figures assembled from wooden pins; formal rules were published in 1923, though versions of the game are much older. Ivan Pavlov played it into old age and was his institute\'s champion, as Horsley Gantt records in his introduction to *Lectures on Conditioned Reflexes*, and the *bita* on Pointsman\'s desk carries that domestic detail of Pavlov\'s recreation into the laboratory where his English successors work.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V226.33; identifies Gantt\'s description of Pavlov\'s gorodki prowess and the bita/rocket parallel.',
      },
      {
        label: 'Gorodki',
        url: 'https://en.wikipedia.org/wiki/Gorodki',
        note: 'Russian folk sport of throwing bats at wooden pin figures.',
      },
    ],
    relatedTerms: ['pavlovian', 'poisson-distribution', 'pointsman'],
  },
  {
    id: 'merkabah',
    displayLabel: 'Merkabah / Kabbalistic Ascent',
    railLabel: 'Merkabah',
    chronology: { episodeId: '2.04', sort: 204.2 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'I am blessed Metatron. I am keeper of the Secret. I am guardian of the Throne.',
      highlightedTerm: 'Metatron',
    },
    apparatus: {
      explanation:
        'The *Merkabah*, or divine chariot, gives its name to an early Jewish mystical tradition of ascent through celestial palaces towards God\'s throne, beginning from Ezekiel\'s vision; *Hekhalot* texts describe ascents through seven palaces using names, seals, and passwords, with Metatron placed near the throne. Weisenburger reads Pudding\'s passage through staged antechambers as an inversion of that scheme, so that his movement towards Katje and the scripted humiliation runs downward through the same architecture the mystics climbed.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V231.24-25; details the Scholem source and the satirical inversion.',
      },
      {
        label: 'Merkabah mysticism',
        url: 'https://en.wikipedia.org/wiki/Merkabah_mysticism',
        note: 'Jewish esoteric tradition of visionary ascent to the divine throne.',
      },
    ],
    relatedTerms: ['breaking-of-the-vessels', 'qlippoth', 'pointsman'],
  },
  {
    id: 'domina-nocturna',
    displayLabel: 'Domina Nocturna',
    chronology: { episodeId: '2.04', sort: 204.3 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'Domina Nocturna . . . shining mother and last love . . . your servant Ernest Pudding, reporting as ordered.',
      highlightedTerm: 'Domina Nocturna',
    },
    apparatus: {
      explanation:
        'Jacob Grimm calls the *dominae nocturnae* \'night-women in the service of Dame Holda\' and collects medieval and early modern accounts of nocturnal female spirits under names that include Holda, Diana, and Herodias. Pudding addresses Katje as Domina Nocturna, \'shining mother and last love\', then reports to her as ordered; a military report becomes an invocation, joining Grimm\'s material to the Venusberg beneath Dame Venus.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V232.35; cites Grimm\'s *Teutonic Mythology* 1056.',
      },
    ],
    relatedTerms: ['merkabah', 'katje', 'pointsman'],
  },
  {
    id: 'sacher-masoch',
    displayLabel: 'Sacher-Masoch / Venus in Furs',
    railLabel: 'Sacher-Masoch',
    chronology: { episodeId: '2.04', sort: 204.4 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'brand name is Savarin. He understands that it means to say \'Severin.\'',
      highlightedTerm: 'Severin',
    },
    apparatus: {
      explanation:
        'Severin in Leopold von Sacher-Masoch\'s *Venus in Furs* (1870) asks Wanda to treat him as her slave and stages a portrait beneath her foot. A Savarin coffee tin in Pudding\'s antechamber turns its brand into Severin\'s name; Richard von Krafft-Ebing later coined \'masochism\' from Sacher-Masoch.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V232.6; identifies the Savarin/Severin pun.',
      },
      {
        label: 'Venus in Furs',
        url: 'https://en.wikipedia.org/wiki/Venus_in_Furs',
        note: 'Leopold von Sacher-Masoch\'s 1870 novella, source of the term \'masochism\'.',
      },
    ],
    relatedTerms: ['merkabah', 'domina-nocturna'],
  },
  {
    id: 'great-cusp',
    displayLabel: 'The Great Cusp (Spring Equinox)',
    railLabel: 'Great Cusp',
    chronology: { episodeId: '2.05', sort: 205 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'The great cusp — green equinox and turning, dreaming fishes to young ram, watersleep to firewaking, bears down on us.',
      highlightedTerm: 'great cusp',
    },
    apparatus: {
      explanation:
        'The spring equinox on 20 March 1945 moves the zodiac from Pisces to Aries, the novel\'s \'watersleep to firewaking\'. The first Ohka combat sortie followed on 21 March and Wernher von Braun turned thirty-three on 23 March; Pynchon lays the three dates in sequence, not on one day. Astrologer Marc Edmund Jones associated Aries with \'absolute freedom from social conditioning\', the phrase Pynchon later attaches to Slothrop\'s flight from Pointsman\'s design.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V236.36-37; identifies the Pisces/Aries cusp and its structural significance.',
      },
    ],
    relatedTerms: ['von-braun', 'carmina-burana'],
  },
  {
    id: 'shell-hilary-bounce',
    displayLabel: 'Shell / Hilary Bounce',
    chronology: { episodeId: '2.05', sort: 205.05 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'Shell, with no real country, no side in any war',
      highlightedTerm: 'Shell',
    },
    apparatus: {
      explanation:
        'Hilary Bounce wears Shell\'s gold benzene ring while briefing Slothrop at the Casino Herman Goering. The novel connects the company\'s requisitioned Hague headquarters with a V-2 guidance transmitter, then calls Shell a corporation with \'no real country, no side in any war\'.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the Shell/V-2 connection in Part 2.',
      },
    ],
    relatedTerms: ['ig-farben', 'benzene-kekule'],
  },
  {
    id: 'maxwells-demon',
    displayLabel: 'Maxwell\'s Demon',
    chronology: { episodeId: '2.05', sort: 205.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'Destruction, oh, and demons — yes, including Maxwell\'s — were there, deep in the woods',
      highlightedTerm: 'Maxwell\'s',
    },
    apparatus: {
      explanation:
        'James Clerk Maxwell proposed the sorting demon in an 1867 letter and published it in *Theory of Heat* (1871): by opening a door for selected molecules, it appears to reduce entropy without work. Older explanations charged the demon for the light or measurement that it required; Leo Szilard connected the demon with information in 1929, and Rolf Landauer located the minimum thermodynamic cost in logically irreversible erasure in 1961. Pynchon uses the figure for systems that sort information, and for the paranoia that reads sorting as design.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V239.18-19; cites Mangel\'s essay on Maxwell\'s Demon, entropy, and cybernetics in GR.',
      },
      {
        label: 'Maxwell\'s demon',
        url: 'https://en.wikipedia.org/wiki/Maxwell%27s_demon',
        note: 'Thought experiment in thermodynamics proposed by James Clerk Maxwell (1867).',
      },
    ],
    relatedTerms: ['poisson-distribution', 'pointsman', 'pavlovian'],
  },
  {
    id: 'aggregat',
    displayLabel: 'Aggregat',
    chronology: { episodeId: '2.05', sort: 205.15 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'He knows the number by heart, it\'s the original contract number for the A4 rocket as a whole. What\'s an \'insulation device\' doing with the Aggregat\'s contract number?',
      highlightedTerm: 'Aggregat',
    },
    apparatus: {
      explanation:
        '*Aggregat* means \'assembly\' and names the German Army\'s rocket development series, not a serial number. The A4 became the operational weapon that propaganda renamed V-2. Slothrop finds the A4\'s original contract number attached to an \'insulation device\' inside Shell paperwork, and starts pulling the thread that leads to Imipolex G and the S-Gerät.',
    },
    externalRefs: [
      {
        label: 'Aggregat rocket series',
        url: 'https://en.wikipedia.org/wiki/Aggregat_(rocket_family)',
        note: 'German Army rocket development series, 1933-45.',
      },
    ],
    relatedTerms: ['v2-a4', 'schwarzgeraet'],
  },
  {
    id: 'imipolex-g',
    displayLabel: 'Imipolex G',
    chronology: { episodeId: '2.05', sort: 205.2 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'here\'s \'Imipolex G.\' Oh really.',
      highlightedTerm: 'Imipolex G',
    },
    apparatus: {
      explanation:
        'Imipolex G is IG Farben\'s fictional polymer: an aromatic heterocyclic polyimide, in the novel\'s chemistry, that survives rocket temperatures and responds to physical stimulus. It lines the Schwarzgerät around Gottfried, so the corporate specification becomes an interface with his skin. Pynchon threads real polymer chemistry from the Carothers lineage into the invented compound, which Slothrop chases across the Zone under the assumption that the paperwork will finally name a substance responsible for him.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the real polymer chemistry Pynchon draws on for the fictional Imipolex G.',
      },
    ],
    relatedTerms: ['ig-farben', 'schwarzgeraet', '00000', 'conditioned-reflex', 'carothers-great-synthesist'],
  },
  {
    id: 'von-braun',
    displayLabel: 'Wernher von Braun',
    chronology: { episodeId: '2.05', sort: 205.2 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'Wernher von Braun, lately wrecked arm in a plaster cast, prepares to celebrate his 33rd birthday.',
      highlightedTerm: 'von Braun',
    },
    apparatus: {
      explanation:
        'Wernher von Braun (1912-1977), technical director of the V-2 programme at Peenemünde, turned thirty-three on 23 March 1945 while his arm was in plaster after a car accident. On 2 May he surrendered to US troops near Reutte in Austria, after his team had evacuated south from the rocket works. He had joined the Nazi Party in 1937 and held the SS rank of *Sturmbannführer*; Operation Paperclip brought him to the United States, where he later directed NASA\'s Marshall Space Flight Center and the Saturn V programme.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V237.1-2; identifies the Christ-age parallel and Huzel\'s *Peenemünde to Canaveral* as source.',
      },
      {
        label: 'Wernher von Braun',
        url: 'https://en.wikipedia.org/wiki/Wernher_von_Braun',
        note: 'German-American rocket engineer (1912-1977), architect of the V-2 and Saturn V.',
      },
    ],
    relatedTerms: ['v2-a4', 'vfr'],
  },
  {
    id: 'benzene-kekule',
    displayLabel: 'Benzene ring / Kekulé\'s dream',
    railLabel: 'Kekulé',
    chronology: { episodeId: '2.05', sort: 205.3 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'a gold benzene ring with a formée cross in the center',
      highlightedTerm: 'benzene ring',
    },
    apparatus: {
      explanation:
        'August Kekulé proposed benzene\'s ring structure in 1865. In an 1890 speech he recalled a reverie in which a snake seized its own tail; historians dispute how literally the late anecdote records the discovery. Hilary Bounce wears the six-membered ring as a gold IG Farben award, so the corporation\'s chemistry travels with him into the Casino.',
    },
    externalRefs: [
      {
        label: 'August Kekulé',
        url: 'https://en.wikipedia.org/wiki/August_Kekul%C3%A9',
        note: 'German chemist (1829-1896); ring theory of benzene, 1865.',
      },
    ],
    relatedTerms: ['ig-farben', 'coal-tar-theology', 'imipolex-g'],
  },
  {
    id: 'hypergolic-ignition',
    displayLabel: 'Hypergolic Ignition',
    chronology: { episodeId: '2.05', sort: 205.3 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'fuel waiting hypergolic ignition that will not come unless now as some junior-bureaucratic rag or May uprising of the spirit',
      highlightedTerm: 'hypergolic ignition',
    },
    apparatus: {
      explanation:
        'A hypergolic propellant pair ignites on contact. In the V-2 steam generator, sodium permanganate catalysed the decomposition of high-test hydrogen peroxide to drive the turbopump; the main engine burned ethanol and liquid oxygen with a separate ignition. Pynchon carries the term from oil pipes primed along the Channel coast into Carl Orff\'s lyric *Totus ardeo*, \'I burn entirely\'.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V237.14; explains the hydrogen peroxide / sodium permanganate reaction in the V-2 turbine.',
      },
    ],
    relatedTerms: ['v2-a4', 'brennschluss'],
  },
  {
    id: 'cybernetic-tradition',
    displayLabel: 'The Cybernetic Tradition',
    railLabel: 'Cybernetics',
    chronology: { episodeId: '2.05', sort: 205.3 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'young enthusiasts of the Cybernetic Tradition into Control work',
      highlightedTerm: 'Cybernetic Tradition',
    },
    apparatus: {
      explanation:
        'The \'Paranoid Systems of History\' briefing claims that the German Inflation drove young technicians towards control work in feedback systems and servomechanisms. Norbert Wiener defined cybernetics as the study of communication and control in animals and machines, taking the word from Greek *kybernētēs*, \'steersman\'; he chose the term during work in 1947 and published *Cybernetics* the following year. The 1945 briefing therefore uses a name that did not yet exist, one of the passage\'s small anachronisms.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V238.30; notes the anachronism of the term and cites Wiener, *Cybernetics*, p. 12.',
      },
    ],
    relatedTerms: ['beyond-the-zero'],
  },
  {
    id: 'carmina-burana',
    displayLabel: 'Carmina Burana / Totus Ardeo',
    railLabel: 'Carmina Burana',
    chronology: { episodeId: '2.05', sort: 205.4 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'to Bavarian tunesmith Carl Orff\'s lively\nTo-tus flore-o! lam amore virginali Totus ardeo',
      highlightedTerm: 'Totus ardeo',
    },
    apparatus: {
      explanation:
        'Carl Orff\'s cantata *Carmina Burana* (premiered in Frankfurt, 1937) sets twenty-four poems from the Codex Buranus, a thirteenth-century manuscript of more than two hundred Latin, Middle High German, and Old French verses discovered at Benediktbeuern in 1803. The spring song *Tempus est iocundum* includes the line *Totus ardeo*, \'I burn entirely\'; Pynchon places it at the vernal equinox, beside oil pipes prepared to set the Channel coast alight.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V237.16-20; cites Waddell and identifies the equinox timing.',
      },
      {
        label: '*Carmina Burana*',
        url: 'https://en.wikipedia.org/wiki/Carmina_Burana',
        note: 'Medieval manuscript containing more than two hundred poems; Carl Orff selected twenty-four for his 1935-36 cantata.',
      },
    ],
    relatedTerms: ['hypergolic-ignition'],
  },
  {
    id: 'bataafsche',
    displayLabel: 'Bataafsche Petroleum Maatschappij (Shell)',
    railLabel: 'Bataafsche',
    chronology: { episodeId: '2.05', sort: 205.5 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'That\'s Bataafsche Petroleum Maatschappij, N.V.?',
      highlightedTerm: 'Bataafsche',
    },
    apparatus: {
      explanation:
        'Bataafsche Petroleum Maatschappij was Royal Dutch Shell\'s Dutch operating company, and its Hague headquarters were requisitioned during the German occupation. The briefing links that building with a V-2 radio-guidance transmitter; Duncan Sandys directed British V-weapon intelligence from Shell Mex House in London, and Isaac Lubbock of Shell International had led work on a petrol-oxygen assisted-takeoff rocket for the Ministry of Supply from 1941. Between Sandys in London and the Hague transmitter under German operation, the same corporate paper trail runs through both sides of the rocket war.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V240.35; identifies the Shell/V-2 guidance connection at The Hague.',
      },
    ],
    relatedTerms: ['ig-farben', 'shell-hilary-bounce', 'operation-backfire'],
  },
  {
    id: 'zoot-suit-riots',
    displayLabel: 'Zoot Suit Riots',
    chronology: { episodeId: '2.06', sort: 206.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'wearing a white zoot suit with reet pleats and a long gold keychain',
      highlightedTerm: 'zoot suit',
    },
    apparatus: {
      explanation:
        'In June 1943, servicemen and civilians attacked Mexican American, Black, and Filipino youths in Los Angeles while police frequently arrested the victims. A Los Angeles City Council proposal to criminalise zoot suits was drafted but never enacted. The wide-legged trousers and long coat had come out of Black jazz culture in the late 1930s; wartime rationing turned the suit\'s use of cloth into a public pretext for the attacks. Waxwing later gives Slothrop a zoot suit that belonged to Ricky Gutierrez, carrying that history into the Zone.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V249.4-5; details the 1943 riots and their racial dimensions.',
      },
      {
        label: 'Zoot Suit Riots',
        url: 'https://en.wikipedia.org/wiki/Zoot_Suit_Riots',
        note: 'Series of racially motivated attacks in Los Angeles, June 1943.',
      },
    ],
    relatedTerms: ['slothrop', 'preterite'],
  },
  {
    id: 'blodgett-waxwing',
    displayLabel: 'Blodgett Waxwing',
    chronology: { episodeId: '2.06', sort: 206.2 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        '\'This really happened tonight. But that octopus didn\'t.\'',
      highlightedTerm: 'octopus didn\'t',
    },
    apparatus: {
      explanation:
        'Blodgett Waxwing, a black-market forger who has escaped the Caserne Mortier stockade (misspelled \'Martier\' throughout the novel), tells Slothrop that Grigori\'s attack was staged. His chess-knight card later supplies the name \'Springer\', and his documents let Slothrop move through the Zone under a sequence of paper identities. Weisenburger hears an echo of the slain waxwing in Nabokov\'s *Pale Fire*.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V246.35; identifies the Nabokov echo and the Caserne Martier stockade.',
      },
    ],
    relatedTerms: ['octopus-grigori', 'zoot-suit-riots', 'der-springer', 'ricky-gutierrez'],
  },
  {
    id: 'ricky-gutierrez',
    displayLabel: 'Ricky Gutierrez',
    chronology: { episodeId: '2.06', sort: 206.3 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'young Gutierrez was set upon by a carload of Anglo vigilantes from Whittier, beaten up while the L.A. police watched and called out advice, then arrested for disturbing the peace',
      highlightedTerm: 'Gutierrez',
    },
    apparatus: {
      explanation:
        'Ricky Gutierrez owned the zoot suit that Waxwing gives Slothrop. Vigilantes from Whittier beat him in Los Angeles while police watched and called out advice; a judge then offered him jail or the Army, and he lost an arm on Saipan before returning to Los Angeles without work. Slothrop inherits the suit with no knowledge of Gutierrez, one of the anonymous transfers of clothing through which preterite histories keep circulating into the Zone.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V249.4-5; details Gutierrez\'s story and the Zoot Suit Riots context.',
      },
    ],
    relatedTerms: ['zoot-suit-riots', 'blodgett-waxwing', 'preterite'],
  },
  {
    id: '00000',
    displayLabel: '00000',
    chronology: { episodeId: '2.07', sort: 207 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'S-Gerät, 11/00000.',
      highlightedTerm: '00000',
    },
    apparatus: {
      explanation:
        'Blicero\'s final rocket bears five zeroes and contains the S-Gerät, with Gottfried sealed inside an Imipolex G shroud. The number is a countdown that continues after zero has already arrived; its companion 00001 falls in the closing pages, over a Los Angeles cinema.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the 00000/00001 pairing and its structural function.',
      },
    ],
    relatedTerms: ['v2-a4', 'brennschluss', 'schwarzgeraet'],
  },
  {
    id: 'ian-scuffling',
    displayLabel: 'Ian Scuffling',
    chronology: { episodeId: '2.07', sort: 207 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'He is now an English war correspondent named Ian Scuffling.',
      highlightedTerm: 'Ian Scuffling',
    },
    apparatus: {
      explanation:
        'Slothrop takes the name Ian Scuffling after escaping Monte Carlo. Under it he runs errands for the Argentine anarchists between Zürich and Geneva and buys further documents from Waxwing, and the alias begins the sequence of paper identities through which the Zone eventually distributes him as Rocketman, Plechazunga, and other names less coherent than the previous one.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates Slothrop\'s alias chain through the Zone.',
      },
    ],
    relatedTerms: ['slothrop', 'rocketman', 'blodgett-waxwing'],
  },
  {
    id: 'schwarzgeraet',
    displayLabel: 'Schwarzgerät',
    chronology: { episodeId: '2.07', sort: 207.05 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'S-Gerät, 11/00000.',
      highlightedTerm: 'S-Gerät',
    },
    apparatus: {
      explanation:
        'The S-Gerät (*Schwarzgerät*, \'black device\') is an Imipolex G insulation section built into rocket 00000 around Gottfried. IG Farben makes the polymer, the Wehrmacht carries the contract number, and Blicero designs the installation, so the same paper trail that draws Slothrop through Shell and Farben also encloses Gottfried\'s body inside a plastic shroud at the end of it.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the S-Gerät contract chain.',
      },
    ],
    relatedTerms: ['00000', 'imipolex-g', 'v2-a4'],
  },
  {
    id: 'carothers-great-synthesist',
    displayLabel: 'Carothers, The Great Synthesist',
    railLabel: 'Carothers',
    chronology: { episodeId: '2.07', sort: 207.1 },
    colorVar: '--color-accent',
    context: {
      excerpt:
        'du Pont and their famous employee Carothers, known as The Great Synthesist. His classic study of large molecules spanned the decade of the twenties',
      highlightedTerm: 'Carothers',
    },
    apparatus: {
      explanation:
        'DuPont hired Wallace Hume Carothers (1896-1937) in 1928 to study linear polymers, and Pynchon places him at the historical origin of the fictional polymer lineage that ends in Imipolex G. His group developed neoprene, polyesters, and nylon 66, showing that chemists could design a material towards selected molecular properties; DuPont introduced nylon to the public in 1938, and wartime production put it into parachutes, ropes, and tyre cord. Carothers lived with severe depression and took his own life on 29 April 1937, so the founding chemist of the industrial polymer age is already dead when the war for which his materials are conscripted begins.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V249.29-30; identifies Carothers and the DuPont polymer lineage to Imipolex G.',
      },
      {
        label: 'Wallace Carothers',
        url: 'https://en.wikipedia.org/wiki/Wallace_Carothers',
        note: 'American chemist (1896-1937), inventor of nylon and neoprene.',
      },
    ],
    relatedTerms: ['imipolex-g', 'coal-tar-theology', 'perkin-chemistry-succession'],
  },
  {
    id: 'sandoz-lsd',
    displayLabel: 'Sandoz / LSD Discovery',
    chronology: { episodeId: '2.07', sort: 207.2 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        '\'I\'m from Sandoz.\'\n\'Aha, Sandoz!\' cries Slothrop, and pulls out a chair for the fella.',
      highlightedTerm: 'Sandoz',
    },
    apparatus: {
      explanation:
        'Albert Hofmann synthesised LSD-25 at Sandoz in 1938 and discovered its psychedelic effects through an accidental exposure on 16 April 1943, then a deliberate dose three days later that he recorded in his laboratory notebook, later called \'Bicycle Day\'. Pynchon places the Sandoz representative beside Ciba, Geigy, IG Farben, and the indole compounds in Slothrop\'s chemical document trail.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V250.25-27 and V261.4; traces the LSD/indole/IG Farben chemical lineage.',
      },
      {
        label: 'Albert Hofmann',
        url: 'https://en.wikipedia.org/wiki/Albert_Hofmann',
        note: 'Swiss chemist (1906-2008) who discovered the psychedelic effects of LSD.',
      },
    ],
    relatedTerms: ['ig-farben', 'coal-tar-theology', 'carothers-great-synthesist'],
  },
  {
    id: 'descamisados',
    displayLabel: 'Descamisados',
    chronology: { episodeId: '2.07', sort: 207.3 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'He already has the descamisados, this will give him the Army too you see',
      highlightedTerm: 'descamisados',
    },
    apparatus: {
      explanation:
        '*Descamisados* means \'shirtless ones\'. Opponents used the word against Juan Perón\'s working-class supporters, who took the insult as their own name. Perón (1895-1974) had served as secretary of labour and vice-president before his first presidency in 1946, and urban industrial workers made up much of the movement identified with the *descamisados*. The Argentine anarchist\'s use of the term in the novel\'s spring of 1945 comes before the demonstration of 17 October 1945 that made it famous, which Weisenburger flags as an anachronism.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V263.39; identifies the anachronism and Peronist context.',
      },
      {
        label: 'Descamisados',
        url: 'https://en.wikipedia.org/wiki/Descamisado',
        note: 'Term for Perón\'s working-class supporters in Argentina.',
      },
    ],
    relatedTerms: ['slothrop', 'preterite'],
  },
  {
    id: 'cafe-odeon',
    displayLabel: 'Café Odeon, Zürich',
    chronology: { episodeId: '2.07', sort: 207.4 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'He finds that he has drifted as far as the Odeon, one of the great world cafes, whose specialty is not listed anywhere',
      highlightedTerm: 'Odeon',
    },
    apparatus: {
      explanation:
        'Café Odeon opened at Limmatquai 2 in Zürich in 1911. Its documented and reputed patrons included James Joyce, Vladimir Lenin, Leon Trotsky, Albert Einstein, and Tristan Tzara, all of whom were in wartime Zürich, though later accounts of their overlapping visits are not always reliably documented. Richard Ellmann\'s biography identifies the Odeon as one of Joyce\'s regular cafés, and Pynchon uses that historical clustering to place Slothrop in a room whose earlier occupants he cannot see.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V262.35; identifies the historical patrons and the Stoppard/Ellmann connections.',
      },
    ],
    relatedTerms: ['slothrop'],
  },
  {
    id: 'dulles-oss',
    displayLabel: 'Allen Dulles / OSS',
    chronology: { episodeId: '2.07', sort: 207.5 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'Allen Dulles and his \'intelligence\' network, which operates these days under the title \'Office of Strategic Services.\'',
      highlightedTerm: 'Dulles',
    },
    apparatus: {
      explanation:
        'Allen Welsh Dulles (1893-1969) ran the Office of Strategic Services station in Bern from 1942 to 1945 and ran informants inside Germany, including officers involved in the Sunrise negotiations for the German surrender in northern Italy. The OSS was dissolved in 1945; after the CIA was created in 1947, Dulles directed it from 1953 to 1961. Pynchon reads OSS as *oss*, a late Latin form for \'bone\', so the acronym for Dulles\'s Bern operation turns out to name the ossuary underneath its bureaucratic cover.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V268.2; identifies Dulles and the oss/bone etymology.',
      },
      {
        label: 'Allen Dulles',
        url: 'https://en.wikipedia.org/wiki/Allen_Dulles',
        note: 'American intelligence officer (1893-1969), OSS Bern station chief, later CIA Director.',
      },
    ],
    relatedTerms: ['operation-backfire', 'sol-sigil'],
  },
  {
    id: 'squalidozzi',
    displayLabel: 'Squalidozzi',
    chronology: { episodeId: '2.07', sort: 207.6 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'In ordinary times, the center always wins. Its power grows with time, and that can\'t be reversed, not by ordinary means.',
      highlightedTerm: 'center always wins',
    },
    apparatus: {
      explanation:
        'The Argentine anarchist Squalidozzi tells Slothrop that the war has, \'just for the moment\', wiped away Europe\'s little states. His group reads the open borders as a temporary chance for decentralisation and already expects governments to close them again; Weisenburger connects the circle to Acción Argentina.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V263.18; identifies the Argentine anarchist context and Acción Argentina.',
      },
    ],
    relatedTerms: ['descamisados', 'the-zone', 'preterite'],
  },
  {
    id: 'psychochemie-ag',
    displayLabel: 'Psychochemie AG',
    chronology: { episodeId: '2.07', sort: 207.7 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'Schweitar is very tight indeed with Psychochemie AG, being one of those free-floating trouble-shooters around the Cartel',
      highlightedTerm: 'Psychochemie AG',
    },
    apparatus: {
      explanation:
        'Laszlo Jamf worked for Psychochemie AG during Slothrop\'s infant conditioning, and its records lead Slothrop from that experiment to Imipolex G. The firm, once known as Grossli Chemical Corporation, is Pynchon\'s fictional Swiss addition to the cartel network already populated by Sandoz, Ciba, and Geigy; its papers connect the Slothrop family finances in Berkshire with the chemistry of the rocket in the Zone.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V250.23-24; traces Psychochemie AG through the Sandoz/Ciba/Geigy cartel network.',
      },
    ],
    relatedTerms: ['jamf', 'sandoz-lsd', 'ig-farben', 'imipolex-g'],
  },
  {
    id: 'whitsun',
    displayLabel: 'Whitsun (Pentecost)',
    chronology: { episodeId: '2.08', sort: 208 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'Mr. Pointsman has decided to spend Whitsun by the sea. Feeling a bit megalo these days',
      highlightedTerm: 'Whitsun',
    },
    apparatus: {
      explanation:
        'Whitsun, or Pentecost, fell on 20 May 1945, seven Sundays after Easter and twelve days after VE Day; the name has long been associated with the white garments of baptism. Part 2 closes as Pointsman hears voices at Brighton and feels \'a bit megalo\', which Weisenburger reads as a mock descent of the Holy Spirit on Pavlov\'s would-be disciple.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V269.26; identifies the liturgical calendar structuring Part 2.',
      },
    ],
    relatedTerms: ['pointsman', 'blavatsky-theosophy', 'v-e-day'],
  },
  {
    id: 'blavatsky-theosophy',
    displayLabel: 'Blavatsky / Theosophical Society',
    railLabel: 'Blavatsky',
    chronology: { episodeId: '2.08', sort: 208.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'the Blavatskian wing of Psi Section, who were off on a White Lotos Day pilgrimage to 19 Avenue Road, St. John\'s Wood',
      highlightedTerm: 'Blavatskian',
    },
    apparatus: {
      explanation:
        'Helena Petrovna Blavatsky (1831-1891) co-founded the Theosophical Society in 1875 and died at 19 Avenue Road, St John\'s Wood, on 8 May 1891; her *Isis Unveiled* (1877) and *The Secret Doctrine* (1888) drew Hindu and Buddhist sources into Western esotericism. The Society commemorates her death annually as White Lotus Day. White Visitation staff make their pilgrimage on the same date in 1945, which is also VE Day, Harry Truman\'s birthday, and Thomas Pynchon\'s eighth birthday.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V269.33-35; identifies the VE Day / Blavatsky death / Pynchon birthday triple coincidence.',
      },
      {
        label: 'Helena Blavatsky',
        url: 'https://en.wikipedia.org/wiki/Helena_Blavatsky',
        note: 'Russian occultist (1831-1891), founder of the Theosophical Society.',
      },
    ],
    relatedTerms: ['ouspenskian', 'white-visitation'],
  },
  {
    id: 'godels-theorem',
    displayLabel: 'Gödel\'s Theorem / Murphy\'s Law',
    railLabel: 'Gödel',
    chronology: { episodeId: '2.08', sort: 208.2 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'Murphy\'s Law, that brash Irish proletarian restatement of Godel\'s Theorem',
      highlightedTerm: 'Godel\'s Theorem',
    },
    apparatus: {
      explanation:
        'Kurt Gödel proved in 1931 that any consistent, effectively axiomatised formal system capable of elementary arithmetic contains statements it cannot prove, and cannot prove its own consistency; his paper, *Über formal unentscheidbare Sätze der Principia Mathematica und verwandter Systeme I*, closed Hilbert\'s programme for complete and consistent formal foundations. Pynchon sets that limit beside Murphy\'s Law: after everything has been taken care of, something will still go wrong or supply a surprise. Weisenburger also places 1931 beside Pudding\'s failed catalogue of European political outcomes, drafted in the same year.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V275.25-26; connects Gödel to the novel\'s representations of closed versus open fields.',
      },
      {
        label: 'Gödel\'s incompleteness theorems',
        url: 'https://en.wikipedia.org/wiki/G%C3%B6del%27s_incompleteness_theorems',
        note: 'Kurt Gödel\'s 1931 proof of limits on completeness and consistency in formal systems.',
      },
    ],
    relatedTerms: ['maxwells-demon', 'pointsman'],
  },
  {
    id: 'operation-backfire',
    displayLabel: 'Operation Backfire / SPOG',
    railLabel: 'Backfire',
    chronology: { episodeId: '2.08', sort: 208.3 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'Special Projectiles Operations Group (SPOG), as an adjunct of the British rocket-scavenging effort, Operation Backfire, which is based out of Cuxhaven',
      highlightedTerm: 'Operation Backfire',
    },
    apparatus: {
      explanation:
        'The Combined Chiefs of Staff created the Special Projectiles Operations Group in 1944 to exploit German weapons research. Operation Backfire assembled and launched three captured V-2s at Cuxhaven on 2, 4, and 15 October 1945, and the launches were documented on film; Project Hermes carried captured rockets and parts to White Sands, New Mexico. James McGovern\'s *Crossbow and Overcast* (1964) records the transfer programme.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V272.32-34; identifies SPOG, CIOS, and McGovern\'s Crossbow and Overcast as source.',
      },
      {
        label: 'Operation Backfire',
        url: 'https://en.wikipedia.org/wiki/Operation_Backfire_(WWII)',
        note: 'British effort to reconstruct and launch captured V-2 rockets at Cuxhaven, October 1945.',
      },
    ],
    relatedTerms: ['von-braun', 'v2-a4', 'dulles-oss'],
  },
  {
    id: 'mindless-pleasures',
    displayLabel: 'Mindless Pleasures',
    chronology: { episodeId: '2.08', sort: 208.4 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'the two gumshoes become so infected with the prevailing fondness out here for mindless pleasures',
      highlightedTerm: 'mindless pleasures',
    },
    apparatus: {
      explanation:
        '*Mindless Pleasures* was an early working title for *Gravity\'s Rainbow*, and the phrase survives in the novel when Perdoo and Speed stop tracking Slothrop and drift through Brighton\'s restaurant gardens; they abandon Pointsman\'s programme for the pleasures named by the working title.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V270.23; identifies the phrase as GR\'s original working title.',
      },
    ],
    relatedTerms: ['pointsman', 'the-zone'],
  },
  {
    id: 'gazza-ladra',
    displayLabel: 'La Gazza Ladra (Rossini)',
    railLabel: 'Gazza Ladra',
    chronology: { episodeId: '2.08', sort: 208.5 },
    colorVar: plotlineColorVars.P05,
    context: {
      excerpt:
        'An organ grinder plays Rossini\'s overture to La Gazza Ladra (which, as we shall see later, in Berlin, marks a high point in music which everybody ignored, preferring Beethoven)',
      highlightedTerm: 'La Gazza Ladra',
    },
    apparatus: {
      explanation:
        'An organ grinder plays the overture to Rossini\'s *La gazza ladra* (1817) at Brighton without its snare drums or brass. The narrator promises to return to Rossini in Berlin, where Säure and Gustav will argue him against Beethoven.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V273.37-41; identifies the Beethoven/Rossini opposition seeded here.',
      },
      {
        label: '*La gazza ladra*',
        url: 'https://en.wikipedia.org/wiki/La_gazza_ladra',
        note: 'Rossini\'s 1817 opera semiseria, \'The Thieving Magpie\'.',
      },
    ],
    relatedTerms: ['beethoven-rossini', 'saure-bummer'],
  },
  // part 3 episodes
  {
    id: 'the-zone',
    displayLabel: 'The Zone',
    chronology: { episodeId: '3.01', sort: 300 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'Signs will find him here in the Zone, and ancestors will reassert themselves.',
      highlightedTerm: 'the Zone',
    },
    apparatus: {
      explanation:
        'After the German surrender, jurisdictions overlap and names go unstable across occupied territory; the Zone is Pynchon\'s name for that condition. Part 3 wanders through rocket debris, black markets, and displaced-persons camps before the same ground hardens into Cold War borders, so the Zone is both a historical few months in 1945 and a figure for what a map briefly cannot hold.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the Zone as a historical and structural setting for Part 3.',
      },
    ],
    relatedTerms: ['forget-frontiers', 'slothrop', 'schwarzkommando', 'eis-heiligen'],
  },
  {
    id: 'schwarzknabe',
    displayLabel: 'Schwarzknabe',
    chronology: { episodeId: '3.01', sort: 301.05 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'Across from "Schwarzknabe," now',
      highlightedTerm: 'Schwarzknabe',
    },
    apparatus: {
      explanation:
        'The dossier first sets *Schwarzknabe*, roughly \'black boy\', beside the initials T.S.; it later becomes one of Slothrop\'s Zone identities. The word gathers him into the novel\'s Schwarz-compounds before he has met the Schwarzkommando or heard of the Schwarzgerät.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the Schwarz- compound naming pattern across the novel.',
      },
    ],
    relatedTerms: ['slothrop', 'rocketman', 'schwarzkommando'],
  },
  {
    id: 'eis-heiligen',
    displayLabel: 'Eis-Heiligen (Ice Saints)',
    railLabel: 'Eis-Heiligen',
    chronology: { episodeId: '3.01', sort: 301.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'the days of the Eis-Heiligen — St. Pancratius, St. Servatius, St. Bonifacius, die kalte Sophie',
      highlightedTerm: 'Eis-Heiligen',
    },
    apparatus: {
      explanation:
        'The Ice Saints, Mamertus, Pancras, Servatius, and Boniface, occupy feast days from 11 to 14 May; Cold Sophie follows on 15 May. Central European farmers linked the dates with a last frost and protected orchards with smoky fires; the *Eisheiligen* tradition varies by region and folds saints\' days into a recurrent meteorological risk. Pynchon uses the calendar to place Slothrop\'s arrival in the Zone in mid-May 1945.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V281.1-2; identifies the Ice Saints and their meteorological significance.',
      },
      {
        label: 'Ice Saints',
        url: 'https://en.wikipedia.org/wiki/Ice_Saints',
        note: 'Central European folk tradition of a late-May frost linked to saints\' feast days.',
      },
    ],
    relatedTerms: ['the-zone', 'slothrop'],
  },
  {
    id: 'tchitcherine',
    displayLabel: 'Vaslav Tchitcherine',
    chronology: { episodeId: '3.01', sort: 301.3 },
    colorVar: plotlineColorVars.P07,
    context: {
      excerpt:
        'In and out of all the vibrant flesh moves the mad scavenger Tchitcherine.',
      highlightedTerm: 'Tchitcherine',
    },
    apparatus: {
      explanation:
        'Vaslav Tchitcherine, a Soviet intelligence officer, knows that Enzian is his half-brother and pursues him through the Zone. In 4.11, Geli\'s spell on the Brocken lets the two men pass on a road without recognition, and the pursuit ends without the confrontation Tchitcherine wanted. His name echoes Georgy Chicherin, Soviet Commissar for Foreign Affairs from 1918 to 1930.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates Tchitcherine\'s biography and the Chicherin echo.',
      },
    ],
    relatedTerms: ['enzian', 'geli-tripping', 'kirghiz-light', 'nta-new-turkic-alphabet', 'ajtys-singing-duel'],
  },
  {
    id: 'brocken',
    displayLabel: 'Brocken',
    chronology: { episodeId: '3.01', sort: 301.4 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'Have you been up to the Brocken yet?',
      highlightedTerm: 'Brocken',
    },
    apparatus: {
      explanation:
        'The Brocken is the highest peak in the Harz Mountains and the site of the Walpurgis Night witches\' gathering in Goethe\'s *Faust*; Goethe climbed it in December 1777. A *Life* article of 28 May 1945 described the Walpurgis bonfire on the Brocken and its appropriation by the Hitler Youth from 1933 onwards. Slothrop and Geli reach the summit at dawn in 3.04, and the scene sets his family\'s Salem inheritance beside her Central European witchcraft, which the novel keeps in the same frame without deciding between them.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V293.17; cites the *Life* magazine source for the Brocken details.',
      },
      {
        label: 'Brocken',
        url: 'https://en.wikipedia.org/wiki/Brocken',
        note: 'Highest peak in the Harz Mountains; site of the Walpurgis Night legends.',
      },
    ],
    relatedTerms: ['geli-tripping', 'slothrop'],
  },
  {
    id: 'forget-frontiers',
    displayLabel: 'Forget frontiers now',
    chronology: { episodeId: '3.01', sort: 301.5 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'Forget frontiers now. Forget subdivisions. There aren\'t any.',
      highlightedTerm: 'Forget frontiers',
    },
    apparatus: {
      explanation:
        'Part 3 opens with a shortening sequence: three commands, then two, then one, until only \'Forget frontiers now\' remains. The same collapse of borders that lets Slothrop drift free of PISCES also lets the cartels move across the ruined map without regulation, so the Zone\'s provisional lawlessness works for the runaway and for the corporations pursuing him on more or less equal terms.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the opening rhetorical figure of Part 3.',
      },
    ],
    relatedTerms: ['the-zone', 'slothrop'],
  },
  {
    id: 'raketen-stadt',
    displayLabel: 'Raketen-Stadt',
    chronology: { episodeId: '3.02', sort: 302 },
    colorVar: plotlineColorVars.P03,
    context: {
      excerpt:
        'the barrier-glow of the Raketen-Stadt',
      highlightedTerm: 'Raketen-Stadt',
    },
    apparatus: {
      explanation:
        '*Raketen-Stadt* means \'Rocket City\'. It first appears as a tourist fantasy in the salt mines, then returns in 4.06 with routes that admit some people and exclude others; the postwar city inherits the rocket programme\'s divisions.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the Raketen-Stadt figure across Parts 3 and 4.',
      },
    ],
    relatedTerms: ['preterite', 'v2-a4'],
  },
  {
    id: 'tannhauserism',
    displayLabel: 'Tannhauserism',
    chronology: { episodeId: '3.02', sort: 302.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'There is that not-so-rare personality disorder known as Tannhauserism. Some of us love to be taken under mountains',
      highlightedTerm: 'Tannhauserism',
    },
    apparatus: {
      explanation:
        'Pynchon coins \'Tannhäuserism\' from the medieval singer who leaves Venusberg for absolution in Rome, is refused by the pope, and returns underground. Jacob Grimm records the legend in *Deutsche Mythologie*, Wagner gives it its best-known operatic form in *Tannhäuser* (1845), and Denis de Rougemont reads it through a love-death dialectic in *Love in the Western World* (1939). Slothrop attaches the name to \'the comfort of a closed place, where everyone is in complete agreement about Death\'.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V299.13-14; cites Grimm\'s *Teutonic Mythology* on the Tannhäuser legend.',
      },
      {
        label: 'Tannhäuser legend',
        url: 'https://en.wikipedia.org/wiki/Tannh%C3%A4user',
        note: 'Medieval German minnesinger whose legend fuses erotic transgression with religious pilgrimage.',
      },
    ],
    relatedTerms: ['blicero', 'domina-nocturna', 'alpdrucken'],
  },
  {
    id: 'ovatjimba',
    displayLabel: 'Ovatjimba',
    chronology: { episodeId: '3.03', sort: 303.1 },
    colorVar: plotlineColorVars.P03,
    context: {
      excerpt:
        'Among the Ovatjimba, the poorest of the Hereros',
      highlightedTerm: 'Ovatjimba',
    },
    apparatus: {
      explanation:
        'The Ovatjimba were the poorest of the Herero speakers of south-west Africa, an itinerant population that Pynchon renames the Aardvark People. Their aardvark-hole tradition gives the Schwarzkommando their *Erdschweinhöhle* in the Zone, so the burrows beneath the Mittelwerk tunnels arrive with a much older Herero history attached.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Identifies the Ovatjimba as the impoverished, mobile Herero group Pynchon renames the Aardvark People.',
      },
    ],
    relatedTerms: ['enzian', 'ndjambi-karunga', 'ombindi-empty-ones'],
  },
  {
    id: 'schwarze-besatzung',
    displayLabel: 'Schwarze Besatzung am Rhein',
    railLabel: 'Schwarze Besatzung',
    chronology: { episodeId: '3.03', sort: 303.1 },
    colorVar: plotlineColorVars.P03,
    context: {
      excerpt:
        'Germans still remember the occupation of the Rhineland 20 years ago by French colonial units, and the posters screaming SCHWARZE BESATZUNG AM RHEIN!',
      highlightedTerm: 'SCHWARZE BESATZUNG AM RHEIN',
    },
    apparatus: {
      explanation:
        '*Schwarze Besatzung am Rhein*, \'Black Occupation on the Rhine\', was the racist German name for the French colonial troops stationed among occupation forces in the Rhineland after 1918. France drew those units from North and West Africa; a pamphlet and film campaign, including *Die Schwarze Schmach* (1921), circulated fabricated claims of sexual violence against German women and turned the presence of Black soldiers on German soil into a national panic. In the Zone, the same racial anxiety returns as rumour, this time about the Schwarzkommando, and the earlier campaign is the frame the German characters carry into the encounter.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V327.34; identifies the Rhineland occupation and racist propaganda context.',
      },
      {
        label: 'Rhineland occupation (Black Horror)',
        url: 'https://en.wikipedia.org/wiki/Occupation_of_the_Rhineland#%22Black_Horror_on_the_Rhine%22',
        note: 'Racist propaganda campaign against French colonial troops stationed in the Rhineland after WWI.',
      },
    ],
    relatedTerms: ['schwarzkommando', 'herero-genocide', 'enzian'],
  },
  {
    id: 'ombindi-empty-ones',
    displayLabel: 'Ombindi / Empty Ones',
    railLabel: 'Empty Ones',
    chronology: { episodeId: '3.03', sort: 303.2 },
    colorVar: plotlineColorVars.P03,
    context: {
      excerpt:
        'in the Erdschweinhöhle, the Empty Ones each carry one knotless strip of leather',
      highlightedTerm: 'Empty Ones',
    },
    apparatus: {
      explanation:
        'Ombindi\'s Empty Ones treat voluntary extinction as the completion of Germany\'s Herero genocide. They carry knotless leather strips and refuse to reproduce; Enzian rejects the programme and builds the counter-rocket as a wager on Herero survival in the Zone.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Identifies Ombindi and the tribal-suicide faction inside the Schwarzkommando.',
      },
    ],
    relatedTerms: ['enzian', 'schwarzkommando'],
  },
  {
    id: 'pervitin',
    displayLabel: 'Pervitin',
    chronology: { episodeId: '3.03', sort: 303.2 },
    colorVar: plotlineColorVars.P03,
    context: {
      excerpt:
        'Enzian grabs his kit, swallows two Pervitins for the road',
      highlightedTerm: 'Pervitins',
    },
    apparatus: {
      explanation:
        'Pervitin was Temmler Pharmaceuticals\' trade name for methamphetamine hydrochloride, introduced in 1938 and issued to Wehrmacht troops as a fatigue-suppressant during the 1940 campaign. It was sold without prescription until German authorities restricted it in 1941, though military distribution continued through the war. Enzian swallows two Pervitins on the road, taking a German military drug into the Zone he now crosses as a Herero commander.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V328.25; identifies Pervitin as Temmler\'s methamphetamine.',
      },
      {
        label: 'Pervitin',
        url: 'https://en.wikipedia.org/wiki/Methamphetamine#History',
        note: 'Methamphetamine trade name used by the Wehrmacht as a fatigue-suppressor.',
      },
    ],
    relatedTerms: ['enzian', 'ig-farben'],
  },
  {
    id: 'erdschweinhohle',
    displayLabel: 'Erdschweinhöhle',
    chronology: { episodeId: '3.03', sort: 303.3 },
    colorVar: plotlineColorVars.P03,
    context: {
      excerpt:
        'Around here they are known collectively as the Erdschweinhöhle.',
      highlightedTerm: 'Erdschweinhöhle',
    },
    apparatus: {
      explanation:
        '*Erdschweinhöhle* means \'aardvark hole\'. The Schwarzkommando name their underground network after the Ovatjimba aardvark tradition, and the burrow repeats the concealed layout of the Mittelwerk; German rocketry and its African counter-programme occupy the same kind of tunnel.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Glosses the Erdschweinhöhle name via the Ovatjimba aardvark tradition.',
      },
    ],
    relatedTerms: ['schwarzkommando', 'enzian', 'mittelwerk-dora'],
  },
  {
    id: 'geli-tripping',
    displayLabel: 'Geli Tripping',
    chronology: { episodeId: '3.04', sort: 304 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'the apprentice witch Geli Tripping',
      highlightedTerm: 'Geli Tripping',
    },
    apparatus: {
      explanation:
        'Geli is a young witch descended from Amy Sprue. She meets Slothrop on the Brocken, and in 4.11 casts the spell that prevents Tchitcherine from recognising Enzian as his half-brother. Her witchcraft is a kind of knowledge that Pointsman will not enter in a laboratory record and Tchitcherine will not enter in a dossier.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Introduces Geli and her Brocken witchcraft.',
      },
    ],
    relatedTerms: ['tchitcherine', 'brocken'],
  },
  {
    id: 'sus-per-coll',
    displayLabel: 'Sus. per Coll.',
    chronology: { episodeId: '3.04', sort: 304.3 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'one of the last to join the sus. per coll. crowd',
      highlightedTerm: 'sus. per coll.',
    },
    apparatus: {
      explanation:
        'The legal abbreviation *sus. per coll.* expands to Latin *suspendatur per collum*, \'let him or her be hanged by the neck\'; English and colonial court records used it for a sentence of hanging. Pynchon puts the phrase beside Amy Sprue, a fictional \'genuine Salem Witch\' in Slothrop\'s family tree. The gloss does not establish a family link between Amy and the historical William Pynchon or the accused women Margaret Jones and Mary Parsons.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V329.23; identifies the legal abbreviation and the Salem-trial reference.',
      },
    ],
    relatedTerms: ['brocken', 'preterite'],
  },
  {
    id: 'kirghiz-light',
    displayLabel: 'Kirghiz Light',
    chronology: { episodeId: '3.05', sort: 305 },
    colorVar: plotlineColorVars.P07,
    context: {
      excerpt:
        'After seeing the Kirghiz Light',
      highlightedTerm: 'Kirghiz Light',
    },
    apparatus: {
      explanation:
        'Tchitcherine encounters the Kirghiz Light after his New Turkic Alphabet posting in Central Asia, and the revelation passes through him without recognition. The file records that he saw it; his later pursuit of a remembered transcendence suggests he did not know what he had seen.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Glosses the Kirghiz Light passage and Tchitcherine\'s Central Asian episode.',
      },
    ],
    relatedTerms: ['tchitcherine'],
  },
  {
    id: 'apparatchik',
    displayLabel: 'Apparatchik',
    chronology: { episodeId: '3.05', sort: 305.1 },
    colorVar: plotlineColorVars.P07,
    context: {
      excerpt:
        'was reproduced by some eager apparatchik and stashed in Tchitcherine\'s own dossier.',
      highlightedTerm: 'apparatchik',
    },
    apparatus: {
      explanation:
        'An *apparatchik* is a functionary of a party or administrative apparatus, from Russian *apparat*. In Tchitcherine\'s case one eager official copies a report into his own dossier, and Pynchon lets the reader watch a nameless clerk hand him the paperwork that will follow him for the rest of the novel.',
    },
    externalRefs: [
      {
        label: 'Apparatchik',
        url: 'https://en.wikipedia.org/wiki/Apparatchik',
        note: 'Soviet party functionary; a member of the administrative apparatus.',
      },
    ],
    relatedTerms: ['tchitcherine', 'enzian', 'sudwest'],
  },
  {
    id: 'nta-new-turkic-alphabet',
    displayLabel: 'New Turkic Alphabet (NTA)',
    railLabel: 'NTA',
    chronology: { episodeId: '3.05', sort: 305.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'all agents — though none thought of it this way — representing the NTA (New Turkic Alphabet) in uncommonly alien country',
      highlightedTerm: 'NTA',
    },
    apparatus: {
      explanation:
        'The New Turkic Alphabet, or *Yañalif*, used a Latin alphabet of thirty-three letters (later thirty-four) to replace Arabic scripts for many Soviet Turkic languages. Local reformers and Soviet planners supported Latinisation for different combinations of literacy, secularisation, and political integration; Thomas G. Winner\'s *The Oral Art and Literature of the Kazakhs of Russian Central Asia* (1958) is Weisenburger\'s identified source. Soviet policy replaced the Latin alphabets with Cyrillic between 1938 and 1940, separating another generation from the preceding written system. Tchitcherine is posted with the commission that carries the new Latin letters into Kazakh villages, where the same evening the agents also encounter the *ajtys*.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V339.1; cites Winner\'s study of Kazakh oral literature.',
      },
    ],
    relatedTerms: ['tchitcherine', 'kirghiz-light', 'ajtys-singing-duel'],
  },
  {
    id: 'ajtys-singing-duel',
    displayLabel: 'Ajtys (Singing-Duel)',
    railLabel: 'Ajtys',
    chronology: { episodeId: '3.05', sort: 305.2 },
    colorVar: plotlineColorVars.P07,
    context: {
      excerpt:
        'It is an ajtys — a singing-duel. The boy and girl stand in the eye of the village',
      highlightedTerm: 'ajtys',
    },
    apparatus: {
      explanation:
        'An *ajtys* is a Kazakh improvised verse contest between *aqyns*, commonly accompanied by the dombra, a long-necked lute, or the shamanic bowed qobyz. Pynchon makes this one a courtship exchange between a boy and a girl in the eye of the village, and stages it beside the alphabet commission so the reader can hear how much of the sung reply the new Latin letters would fail to capture.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V356.10; cites Winner on the ajtys and aqyn traditions.',
      },
    ],
    relatedTerms: ['nta-new-turkic-alphabet', 'tchitcherine', 'kirghiz-light'],
  },
  {
    id: 'heisenberg-uncertainty',
    displayLabel: 'Heisenberg Uncertainty Principle',
    railLabel: 'Heisenberg',
    chronology: { episodeId: '3.05', sort: 305.3 },
    colorVar: plotlineColorVars.P07,
    context: {
      excerpt:
        'We seem up against a dilemma built into Nature, much like the Heisenberg situation',
      highlightedTerm: 'Heisenberg',
    },
    apparatus: {
      explanation:
        'Werner Heisenberg\'s uncertainty relation places an intrinsic lower bound on the joint spreads of position and momentum, ΔxΔp ≥ ℏ/2. The relation does not arise simply because a measurement disturbs the particle; the modern formulation follows from the non-commuting operators for position and momentum. Heisenberg published the paper in 1927 and received the 1932 Nobel Prize in Physics. Pynchon uses the physical limit as an analogy for opiate addiction, where a doctor cannot lower pain without also lowering the patient\'s tolerance for pain, so relief and desire behave like conjugate variables.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V348.21; follows the analogy between the uncertainty relation and the inability to vary drug relief independently of desire.',
      },
      {
        label: 'Uncertainty principle',
        url: 'https://en.wikipedia.org/wiki/Uncertainty_principle',
        note: 'Heisenberg\'s 1927 principle of quantum mechanics.',
      },
    ],
    relatedTerms: ['maxwells-demon', 'godels-theorem', 'pointsman'],
  },
  {
    id: 'rocketman',
    displayLabel: 'Rocketman',
    chronology: { episodeId: '3.06', sort: 306.01 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'given up for good on Rocketman here',
      highlightedTerm: 'Rocketman',
    },
    apparatus: {
      explanation:
        'Slothrop becomes Rocketman in a horned Wagnerian helmet and green velvet cape during the Potsdam hashish raid, cutting a comic-book American through German military rubble. He gives the name up after the raid and continues under other disguises, though the persona keeps returning as a rumour in the Zone.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Glosses the Potsdam raid and the Rocketman costume.',
      },
    ],
    relatedTerms: ['slothrop', 'schwarzknabe'],
  },
  {
    id: 'saure-bummer',
    displayLabel: 'Säure Bummer',
    railLabel: 'Säure',
    chronology: { episodeId: '3.06', sort: 306.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'Säure Bummer gazing around',
      highlightedTerm: 'Säure',
    },
    apparatus: {
      explanation:
        'Säure Bummer is a Berlin hashish dealer and Rossini partisan; *Säure* means \'acid\'. He hires Slothrop for the Potsdam raid, then argues with Gustav over Rossini and Beethoven while the drugs move through the city.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Introduces Säure Bummer and the Beethoven/Rossini debate.',
      },
    ],
    relatedTerms: ['pirate-prentice', 'bodine'],
  },
  {
    id: 'william-slothrop',
    displayLabel: 'William Slothrop',
    chronology: { episodeId: '3.06', sort: 306.15 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'maybe not the same thing William Slothrop . . . meant when he said \'sin.\'',
      highlightedTerm: 'William Slothrop',
    },
    apparatus: {
      explanation:
        'William Slothrop, Tyrone\'s ancestor, writes *On Preterition*, arguing that those passed over by grace possess a holiness of their own. Massachusetts authorities burn the tract and the family\'s standing declines; Tyrone inherits the history of the rejected argument as his own name begins to scatter across the Zone.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Traces William Slothrop\'s fictional Puritan tract on preterition.',
      },
    ],
    relatedTerms: ['preterite', 'slothrop', 'arbella-winthrop'],
  },
  {
    id: 'bodine',
    displayLabel: 'Seaman Bodine',
    railLabel: 'Bodine',
    chronology: { episodeId: '3.06', sort: 306.4 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'The singer is Seaman Bodine',
      highlightedTerm: 'Seaman Bodine',
    },
    apparatus: {
      explanation:
        'Seaman Bodine, whose name recurs across Pynchon\'s fiction from *V.* onwards, is Säure\'s contact and later joins the Counterforce. Here he sings \'My Doper\'s Cadenza\' while Slothrop prepares for the Potsdam raid.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Bodine\'s appearance and his recurrence across Pynchon\'s fiction.',
      },
    ],
    relatedTerms: ['saure-bummer', 'slothrop'],
  },
  {
    id: 'der-springer',
    displayLabel: 'Der Springer (The Chess Knight)',
    railLabel: 'Springer',
    chronology: { episodeId: '3.07', sort: 307.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'He is the knight who leaps perpetually — across the chessboard of the Zone',
      highlightedTerm: 'knight',
    },
    apparatus: {
      explanation:
        '*Springer* is German for the chess knight, the piece that crosses the board by an angled leap and passes over intervening pieces. Gerhardt von Göll adopts the name as his own movements cut across the Zone. Weisenburger also hears Ludwig der Springer (c. 1042-1123), Count of Thuringia, who according to legend escaped Giebichenstein castle by leaping into the Saale and earned the epithet \'the Leaper\'.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V376.26; identifies the chess and historical Springer references.',
      },
    ],
    relatedTerms: ['von-goll', 'the-zone', 'rocketman'],
  },
  {
    id: 'caligari-gloves',
    displayLabel: 'Caligari\'s Gloves',
    railLabel: 'Caligari',
    chronology: { episodeId: '3.08', sort: 308.1 },
    colorVar: plotlineColorVars.P06,
    context: {
      excerpt:
        'sporting the Caligari gloves which now enjoy a summer vogue in the Zone: bone white, except for the four lines in deep violet fanning up each gloveback',
      highlightedTerm: 'Caligari gloves',
    },
    apparatus: {
      explanation:
        'The bone-white gloves with four violet lines fanning up each back reproduce the painted visual world of Robert Wiene\'s *The Cabinet of Dr. Caligari* (1920). Siegfried Kracauer, writing in American exile in *From Caligari to Hitler* (1947), read Caligari\'s command over the somnambulist Cesare as a Weimar image of obedience to authority; his psychological history of Weimar cinema remains contested. Pynchon brings the image back as a summer fashion in the postwar Zone.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V385.1; cites Kracauer on the Caligari/authority dynamic.',
      },
      {
        label: '*The Cabinet of Dr. Caligari*',
        url: 'https://en.wikipedia.org/wiki/The_Cabinet_of_Dr._Caligari',
        note: 'Robert Wiene\'s 1920 German expressionist film.',
      },
    ],
    relatedTerms: ['die-frau-im-mond', 'nibelungen-fritz-lang', 'persistence-of-vision'],
  },
  {
    id: 'black-words',
    displayLabel: 'Black-words (Schwarz-Compounds)',
    railLabel: 'Black-words',
    chronology: { episodeId: '3.09', sort: 309.1 },
    colorVar: plotlineColorVars.P07,
    context: {
      excerpt:
        'he did talk about the Schwarzgerät. And he also coupled "schwarz-" with some strange nouns, in the German fragments that came through. Blackwoman, Blackrocket, Blackdream',
      highlightedTerm: 'Blackwoman, Blackrocket, Blackdream',
    },
    apparatus: {
      explanation:
        'Tchitcherine finds *schwarz-* joined to Blackwoman, Blackrocket, and Blackdream in Slothrop\'s sodium amytal transcript. German compound formation permits nouns to be strung together into long *Komposita*; the transcript turns that capacity into \'the insanely, endlessly diddling play of a chemist whose molecules are words\'. Tchitcherine cannot decide whether the *schwarz-* words share \'a single root\' or come from ordinary German name-making, and either reading connects Slothrop to the Schwarzgerät and Schwarzkommando before he knows them.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates the Sodium Amytal transcript and the recurring \'Black\' motif.',
      },
    ],
    relatedTerms: ['schwarzgeraet', 'schwarzkommando', 'enzian', 'sodium-amytal'],
  },
  {
    id: 'tsagi-assignment',
    displayLabel: 'TsAGI Assignment',
    railLabel: 'TsAGI',
    chronology: { episodeId: '3.09', sort: 309.2 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'reporting, if and when, direct to Malenkov\'s special committee under the Council of People\'s Commissars (the TsAGI assignment being more or less a cover)',
      highlightedTerm: 'TsAGI',
    },
    apparatus: {
      explanation:
        'TsAGI, the Central Aerohydrodynamic Institute, was founded in Moscow in 1918 for aerodynamics research, wind-tunnel testing, and aircraft design. Pynchon makes it Tchitcherine\'s nominal employer in the Zone: the posting covers a direct line to Georgy Malenkov\'s special committee on captured German technology, and leaves him outside the Allied technical-intelligence groups that share the territory.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates Tchitcherine\'s intelligence affiliations in the Zone.',
      },
    ],
    relatedTerms: ['tchitcherine', 'slothrop'],
  },
  {
    id: 'bianca',
    displayLabel: 'Bianca',
    chronology: { episodeId: '3.10', sort: 310 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'Looking for her daughter, Bianca',
      highlightedTerm: 'Bianca',
    },
    apparatus: {
      explanation:
        'Bianca is Greta Erdmann\'s young daughter aboard the *Anubis*. Slothrop sexually abuses her below deck and then leaves her; she disappears, and her fate remains unresolved. Part 4 opens with Greta searching for her.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Tracks Bianca\'s appearances and the *Anubis* episodes.',
      },
    ],
    relatedTerms: ['greta-erdmann', 'anubis'],
  },
  {
    id: 'greta-erdmann',
    displayLabel: 'Margherita Erdmann (Greta)',
    railLabel: 'Greta',
    chronology: { episodeId: '3.10', sort: 310.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'he comes to meet Margherita Erdmann',
      highlightedTerm: 'Margherita Erdmann',
    },
    apparatus: {
      explanation:
        'Margherita \'Greta\' Erdmann is an actor whose remembered life mixes expressionist horror, propaganda, and pornography with films that may never have existed. On the *Anubis*, those screen accounts enter her testimony about her own body and her search for Bianca.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Introduces Greta Erdmann and her filmography.',
      },
    ],
    relatedTerms: ['von-goll', 'bianca', 'alpdrucken'],
  },
  {
    id: 'zwolfkinder',
    displayLabel: 'Zwölfkinder',
    chronology: { episodeId: '3.11', sort: 311.01 },
    colorVar: plotlineColorVars.P04,
    context: {
      excerpt:
        'love something like the persistence of vision, for They have used it to create for him the moving image of a daughter.',
      highlightedTerm: 'daughter',
    },
    apparatus: {
      explanation:
        'At this fictional Baltic children\'s resort, Pökler is permitted one summer visit each year with a girl presented as his daughter Ilse. The uncertainty over whether the child is the same one from year to year keeps him building rockets at Peenemünde, and the annual visits are the discrete stills from which the State assembles his \'moving image of a daughter\'.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Glosses Zwölfkinder as the invented Baltic resort of Pökler\'s annual visits.',
      },
    ],
    relatedTerms: ['pokler', 'persistence-of-vision', 'alpdrucken'],
  },
  {
    id: 'alpdrucken',
    displayLabel: 'Alpdrücken',
    chronology: { episodeId: '3.11', sort: 311.05 },
    colorVar: plotlineColorVars.P08,
    context: {
      excerpt:
        'stalking Reichssieger von Thanatz Alpdrücken, that most elusive of Nazi hounds.',
      highlightedTerm: 'Alpdrücken',
    },
    apparatus: {
      explanation:
        '*Alpdrücken* means the pressure of a nightmare, the weight of an incubus on a sleeper\'s chest. The name joins the Weimaraner in 1.17, \'Reichssieger von Thanatz *Alpdrücken*\', to von Göll\'s fictional horror film in 3.11; Pökler leaves the cinema aroused by Greta Erdmann\'s on-screen rape, goes home to Leni, and Ilse is conceived that night, which is how the nightmare enters the family\'s paternity.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Traces *Alpdrücken* across its dog, film, and paternity references.',
      },
    ],
    relatedTerms: ['pokler', 'persistence-of-vision', 'zwolfkinder'],
  },
  {
    id: 'kadavergehorsamkeit',
    displayLabel: 'Kadavergehorsamkeit (Corpse Obedience)',
    railLabel: 'Kadavergehorsamkeit',
    chronology: { episodeId: '3.11', sort: 311.1 },
    colorVar: plotlineColorVars.P04,
    context: {
      excerpt:
        'Kadavergehorsamkeit, a beautiful word he can no longer imagine in any voice but hers',
      highlightedTerm: 'Kadavergehorsamkeit',
    },
    apparatus: {
      explanation:
        '*Kadavergehorsamkeit* means \'corpse obedience\', submission as complete as a dead body\'s. The phrase follows the Jesuit comparison of obedience with a corpse, *perinde ac cadaver*; later German polemic, in Bismarckian Prussia and after, applied it to unthinking military and bureaucratic submission. Leni gives Pökler the word for his compliance, and he continues to hear its beauty in her voice while he works for Peenemünde.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V400.25; attributes the term proverbially to Prussian troops under Bismarck during the wars of 1864, 1866, and 1870-71.',
      },
    ],
    relatedTerms: ['pokler', 'fuhrer-principle'],
  },
  {
    id: 'persistence-of-vision',
    displayLabel: 'persistence of vision',
    chronology: { episodeId: '3.11', sort: 311.3 },
    colorVar: plotlineColorVars.P04,
    context: {
      excerpt:
        'love something like the persistence of vision, for They have used it to create for him the moving image of a daughter.',
      highlightedTerm: 'persistence of vision',
    },
    apparatus: {
      explanation:
        'Pynchon uses the older phrase \'persistence of vision\' for Pökler\'s annual meetings with Ilse: the separate summer visits become \'the moving image of a daughter\'. The phrase names retinal afterimages, which do not by themselves explain cinema; apparent motion depends on later perceptual processing that joins successive stills. The metaphor is precise for Pökler\'s situation, since he is asked to accept a sequence of stills as continuous fatherhood.',
    },
    externalRefs: [
      {
        label: 'Persistence of vision',
        url: 'https://en.wikipedia.org/wiki/Persistence_of_vision',
        note: 'Older, partly discredited account of the visual mechanism behind motion pictures.',
      },
    ],
    relatedTerms: ['pokler', 'die-frau-im-mond', 'zwolfkinder', 'caligari-gloves'],
  },
  {
    id: 'gift-of-daedalus',
    displayLabel: 'gift of Daedalus',
    chronology: { episodeId: '3.11', sort: 311.4 },
    colorVar: plotlineColorVars.P02,
    context: {
      excerpt:
        'the gift of Daedalus that allowed him to put as much labyrinth as required between himself and the inconveniences of caring.',
      highlightedTerm: 'gift of Daedalus',
    },
    apparatus: {
      explanation:
        'Daedalus built both the Minotaur\'s labyrinth and the wings that carried him and Icarus out of it. Pökler\'s \'gift of Daedalus\' lets him place as much technical labyrinth as necessary between his work and \'the inconveniences of caring\', and Pynchon has him use his engineering training to build the interior partitions with the same care he brings to the rocket.',
    },
    externalRefs: [
      {
        label: 'Daedalus',
        url: 'https://en.wikipedia.org/wiki/Daedalus',
        note: 'Greek craftsman who built the Cretan labyrinth and the wings for himself and Icarus.',
      },
    ],
    relatedTerms: ['pokler', 'mittelwerk-dora'],
  },
  {
    id: 'mittelwerk-dora',
    displayLabel: 'Mittelwerk / Dora',
    chronology: { episodeId: '3.11', sort: 311.5 },
    colorVar: plotlineColorVars.P02,
    context: {
      excerpt:
        'Back at the Mittelwerke he tried, and kept trying, to get into the Dora camp',
      highlightedTerm: 'Mittelwerke',
    },
    apparatus: {
      explanation:
        'Mittelwerk was the underground armaments factory in the Kohnstein tunnels near Nordhausen; the nearby Dora camp, later the centre of the Mittelbau camp system, supplied its forced labour. From 1943 to 1945 the plant produced V-1s and V-2s in former storage tunnels, and about 20,000 prisoners died across the Mittelbau system through executions, starvation, disease, brutal labour, and evacuation marches. Pökler enters the tunnels after liberation and finds the bodies of the workers who built the rockets he designed, so his labyrinth and the camp are shown to be the same set of galleries.',
    },
    externalRefs: [
      {
        label: 'KZ Mittelbau-Dora Memorial',
        url: 'https://www.dora.de/en/',
        note: 'Official memorial site.',
      },
    ],
    relatedTerms: ['ig-farben', 'pokler', 'parabola'],
  },
  {
    id: 'nordhausen',
    displayLabel: 'Nordhausen',
    chronology: { episodeId: '3.11', sort: 311.6 },
    colorVar: plotlineColorVars.P02,
    context: {
      excerpt:
        'All his vacuums, his labyrinths, had been the other side of this.',
      highlightedTerm: 'this',
    },
    apparatus: {
      explanation:
        'Nordhausen is the town beside the Kohnstein tunnels and the Mittelbau-Dora camp system, and the name Allied observers used for the underground works they entered in April 1945. Pökler arrives among the prisoners\' bodies and understands that all his \'vacuums\' and \'labyrinths\' had been \'the other side of this\'.',
    },
    externalRefs: [
      {
        label: 'Mittelbau-Dora concentration camp',
        url: 'https://en.wikipedia.org/wiki/Mittelbau-Dora_concentration_camp',
        note: 'The Nordhausen camp complex that supplied labour for V-weapon production.',
      },
    ],
    relatedTerms: ['mittelwerk-dora', 'pokler', 'gift-of-daedalus'],
  },
  {
    id: 'beethoven-rossini',
    displayLabel: 'Beethoven vs. Rossini',
    railLabel: 'Beethoven / Rossini',
    chronology: { episodeId: '3.12', sort: 312.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'Gustav is a composer. For months he has been carrying on a raging debate with Saure over who is better, Beethoven or Rossini.',
      highlightedTerm: 'Beethoven or Rossini',
    },
    apparatus: {
      explanation:
        'Gustav gives Beethoven the \'German dialectic\', whose expanding scale terminates in dodecaphonic democracy; Säure defends Rossini as a musician of pleasure and the body. Weisenburger reads the argument through Stendhal\'s *Life of Rossini* (1823) and Norman O. Brown\'s *Life Against Death* (1959), where disciplined sublimation is opposed to unrepressed play, and the two hashish-cellar antagonists divide along that axis.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V440.4; cites Stendhal and Norman O. Brown on the Beethoven/Rossini opposition.',
      },
    ],
    relatedTerms: ['saure-bummer', 'carmina-burana'],
  },
  {
    id: 'horst-wessel-lied',
    displayLabel: 'Horst-Wessel-Lied',
    railLabel: 'Horst Wessel',
    chronology: { episodeId: '3.12', sort: 312.2 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'they are his country\'s versions of the Horst Wessel Song',
      highlightedTerm: 'Horst Wessel Song',
    },
    apparatus: {
      explanation:
        'Joseph Goebbels turned the Berlin SA member Horst Wessel (1907-1930) into a Nazi martyr after the Communist Party member Albrecht Höhler shot him on 14 January 1930; Wessel died on 23 February, and the motives behind the shooting remain contested. His lyrics became the *Horst-Wessel-Lied*, played after 1933 with the *Deutschlandlied* at state occasions; competing accounts derive the melody from an older folk tune, a Salvation Army hymn, or a Communist workers\' song. When Slothrop hears American patriotic songs in this passage, Pynchon marks them as the American counterparts to the *Lied*, which unsettles the neat wartime opposition.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V443.2; gives one account of the melody\'s origin and notes the America/Germany parallel.',
      },
      {
        label: '*Horst-Wessel-Lied*',
        url: 'https://en.wikipedia.org/wiki/Horst-Wessel-Lied',
        note: 'Nazi anthem whose melody has several disputed antecedents.',
      },
    ],
    relatedTerms: ['slothrop', 'the-zone'],
  },
  {
    id: 'wannsee-conference',
    displayLabel: 'Wannsee',
    chronology: { episodeId: '3.12', sort: 312.3 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'One Sunday out at Wannsee, an armada of sails all bent the same way, patiently, dreamlike into the wind',
      highlightedTerm: 'Wannsee',
    },
    apparatus: {
      explanation:
        'On 20 January 1942, fifteen officials met at the villa at Am Grossen Wannsee 56-58 to coordinate deportation and mass murder under the \'Final Solution\'; Reinhard Heydrich chaired the meeting, and Adolf Eichmann took the minutes that survived in a copy recovered in 1947. Pynchon later puts Slothrop in the same lakeside suburb among sailboats, children in soldier hats, and Sunday visitors, and the reader who knows the postcode notices that the leisure scene occupies the ground where the administrative meeting took place.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V446.16-17; identifies the Wannsee Conference connection to the leisure scene.',
      },
      {
        label: 'Wannsee Conference',
        url: 'https://en.wikipedia.org/wiki/Wannsee_Conference',
        note: 'January 1942 meeting that coordinated the administrative apparatus of the Holocaust.',
      },
    ],
    relatedTerms: ['the-zone', 'slothrop'],
  },
  {
    id: 'prandtl-boundary-layer',
    displayLabel: 'Prandtl Boundary Layer',
    railLabel: 'Prandtl',
    chronology: { episodeId: '3.13', sort: 313.1 },
    colorVar: plotlineColorVars.P03,
    context: {
      excerpt:
        'it was the year Ludwig Prandtl proposed the boundary layer, which really got aerodynamics into business',
      highlightedTerm: 'boundary layer',
    },
    apparatus: {
      explanation:
        'Ludwig Prandtl (1875-1953) presented his boundary-layer paper at the Third International Congress of Mathematicians in Heidelberg in 1904. The theory isolated the thin region beside a surface where viscosity dominates: under the no-slip condition, fluid velocity matches the surface at the wall and approaches the outer flow across the boundary layer, reconciling low-viscosity flow equations with the drag observed on real bodies. The method made practical lift and drag calculations possible at Peenemünde. Pynchon pairs 1904 with cocaine\'s removal from Coca-Cola, though commercial histories usually date that change to 1903.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V452.8; identifies Prandtl\'s 1904 paper and its significance for rocket aerodynamics.',
      },
      {
        label: 'Ludwig Prandtl',
        url: 'https://en.wikipedia.org/wiki/Ludwig_Prandtl',
        note: 'German physicist (1875-1953), founder of modern aerodynamics.',
      },
    ],
    relatedTerms: ['v2-a4'],
  },
  {
    id: 'anubis',
    displayLabel: 'Anubis (ship)',
    chronology: { episodeId: '3.14', sort: 314.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'owner of the Anubis here',
      highlightedTerm: 'Anubis',
    },
    apparatus: {
      explanation:
        'The ship takes its name from the Egyptian jackal-headed god of embalming and the dead. Between 3.14 and 3.18 it carries Greta, Bianca, Slothrop, and Thanatz across the Baltic and up the Oder, and its cabins host the orgy sequences alongside Thanatz\'s testimony about the 00000 launch on the Lüneburg Heath.',
    },
    externalRefs: [
      {
        label: 'Anubis',
        url: 'https://en.wikipedia.org/wiki/Anubis',
        note: 'Egyptian god of embalming and guide of souls to the afterlife.',
      },
    ],
    relatedTerms: ['greta-erdmann', 'bianca'],
  },
  {
    id: 'wozzeck',
    displayLabel: 'Wozzeck (Alban Berg)',
    railLabel: 'Wozzeck',
    chronology: { episodeId: '3.14', sort: 314.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'He\'d begun to talk the way the captain in Wozzeck sings, his voice breaking suddenly up into the higher registers of hysteria.',
      highlightedTerm: 'Wozzeck',
    },
    apparatus: {
      explanation:
        'Alban Berg\'s *Wozzeck*, based on Georg Büchner\'s unfinished play *Woyzeck*, follows a common soldier subjected to medical experiments who murders his lover Marie and then drowns. Berg composed the opera from 1914 to 1922, and it premiered in Berlin on 14 December 1925; Büchner (1813-1837) took the play from Johann Christian Woyzeck, executed in Leipzig in 1824 after a prolonged argument over his sanity. Blicero\'s voice breaking suddenly into a higher register recalls the Captain\'s *Sprechstimme*, and Gottfried occupies the experimental body in Pynchon\'s version.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V465.18; identifies the *Wozzeck*/Gottfried structural parallel.',
      },
      {
        label: '*Wozzeck* (opera)',
        url: 'https://en.wikipedia.org/wiki/Wozzeck',
        note: 'Alban Berg\'s 1925 atonal opera based on Büchner\'s play about a soldier\'s destruction.',
      },
    ],
    relatedTerms: ['blicero', 'gottfried', 'erwartung'],
  },
  {
    id: 'thanatz',
    displayLabel: 'Miklos Thanatz',
    railLabel: 'Thanatz',
    chronology: { episodeId: '3.14', sort: 314.2 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'Slothrop meets Miklos Thanatz, full beard, eyebrows feathering out like trailing edges',
      highlightedTerm: 'Thanatz',
    },
    apparatus: {
      explanation:
        'Miklós Thanatz carries the name of Thanatos, the Greek personification of death. It first appears in 1.17 inside the imaginary Weimaraner\'s pedigree, \'Reichssieger von Thanatz *Alpdrücken*\', and then attaches to the man who survives to describe the 00000 launch on the Lüneburg Heath.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V461.32; cites Grimm, *Teutonic Mythology*, 840-41 on Thanatos and the Valkyries.',
      },
    ],
    relatedTerms: ['00000', 'reichssieger-thanatz-alpdrucken', 'anubis'],
  },
  {
    id: 'eurydice-obsession',
    displayLabel: 'Eurydice-obsession',
    chronology: { episodeId: '3.15', sort: 315.1 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'there is this Eurydice-obsession, this bringing back out of . . . though how much easier just to leave her there',
      highlightedTerm: 'Eurydice-obsession',
    },
    apparatus: {
      explanation:
        'Aboard the *Anubis*, Slothrop names the wish to bring Bianca back from darkness a \'Eurydice-obsession\', after Orpheus\'s failed recovery of his wife from Hades on the condition that he not look back. Slothrop also feels the counter-temptation to leave her there and accept a \'reasonable facsimile\', so Pynchon uses the myth to stage a very Pynchonian problem about substitute bodies and copies of the beloved.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V472.20-21; notes that Orpheus was allowed to bring Eurydice from Hades provided he did not look back.',
      },
    ],
    relatedTerms: ['bianca', 'alpdrucken', 'greta-erdmann'],
  },
  {
    id: 'shekinah',
    displayLabel: 'Shekinah',
    chronology: { episodeId: '3.16', sort: 316.1 },
    colorVar: '--color-accent',
    context: {
      excerpt:
        'I am the Shekhinah, queen, daughter, bride, and mother of God. And I will take you back, you fragment of smashed vessel',
      highlightedTerm: 'Shekhinah',
    },
    apparatus: {
      explanation:
        'The Shekinah (Hebrew *Shekhinah*, \'dwelling\') is the feminine, immanent presence of God in Kabbalistic theology, identified with Malkhut, the last and lowest of the ten *Sephiroth*, and exiled among Israel after the Temple\'s destruction. In Lurianic Kabbalah, Isaac Luria (1534-1572) taught in Safed that the divine feminine was scattered among the *qlippoth*, husks, and could be restored only through *tikkun*, repair. Greta Erdmann speaks in her voice: \'I will take you back, you fragment of smashed vessel.\' The fragment belongs to *shevirat ha-kelim*, the breaking of the vessels whose scattered divine light awaits gathering.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V478.14-17; draws on Scholem\'s Kabbalistic sources for the Shekinah and exile theology.',
      },
      {
        label: 'Shekhinah',
        url: 'https://en.wikipedia.org/wiki/Shekhinah',
        note: 'The dwelling or settling of the divine presence in Jewish theology.',
      },
    ],
    relatedTerms: ['breaking-of-the-vessels', 'qlippoth', 'greta-erdmann'],
  },
  {
    id: 'ensign-morituri',
    displayLabel: 'Ensign Morituri',
    railLabel: 'Morituri',
    chronology: { episodeId: '3.16', sort: 316.3 },
    colorVar: plotlineColorVars.P01,
    context: {
      excerpt:
        'a bright set of teeth, beaming out of a dark hatchway . . . Ensign Morituri',
      highlightedTerm: 'Morituri',
    },
    apparatus: {
      explanation:
        'Ensign Morituri, an ex-kamikaze trainee, carries the Roman gladiatorial greeting *morituri te salutant*, \'those who are about to die salute thee\', recorded by Suetonius in his account of Claudius\'s mock naval battle on Lake Fucinus in 52 CE; Conrad\'s Marlow quotes the phrase in *Heart of Darkness* on visiting the Company offices. Morituri appears aboard the *Anubis* to attend Greta Erdmann, and his thoughts on \'radioactivity\' carry an irony that only the reader in 1973 can supply, since the scene takes place a few weeks before the atomic bombing of Hiroshima on 6 August 1945.',
    },
    externalRefs: [
      {
        label: 'Weisenburger, *A Gravity\'s Rainbow Companion*',
        url: 'https://www.ugapress.org/9780820328072/a-gravitys-rainbow-companion/',
        note: 'Annotates at V473.3-4; identifies the gladiatorial and Conradian sources.',
      },
    ],
    relatedTerms: ['anubis', 'greta-erdmann'],
  },
];
