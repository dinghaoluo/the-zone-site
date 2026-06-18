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
    relatedTerms: ['v2-a4', '00000', '00001'],
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
    relatedTerms: ['brennschluss', '00000', '00001'],
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
    relatedTerms: ['pirate-prentice', 'orpheus-theatre'],
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
    relatedTerms: ['poisson-distribution', 'jessica-swanlake', 'fuck-the-war', 'thermidor'],
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
    relatedTerms: ['sodium-amytal', 'shit-from-shinola', 'slothrop'],
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
    relatedTerms: ['imipolex-g', 'mittelwerk-dora', 'coal-tar-theology', 'phoebus-cartel', 'united-fruit', 'sandoz-lsd'],
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
    relatedTerms: ['sudwest', 'enzian', '00001', 'operation-black-wing', 'herero-genocide'],
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
    relatedTerms: ['sudwest', 'schwarzkommando', '00001', 'ndjambi-karunga'],
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
    relatedTerms: ['orpheus-theatre', 'schwarzkommando', 'greta-erdmann', 'der-springer'],
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
    relatedTerms: ['slothrop', 'plechazunga'],
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
    relatedTerms: ['pokler', 'persistence-of-vision', 'orpheus-theatre', 'nibelungen-fritz-lang'],
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
    relatedTerms: ['pokler', 'wandervogel', 'peenemunde', 'von-braun'],
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
    relatedTerms: ['v2-a4', 'delta-t', 'brennschluss'],
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
];
