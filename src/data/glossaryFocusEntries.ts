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
];
