export type DreamSnippet = {
  text: string;
  gender: "M" | "F";
};

export type DreamSnippedWithTheme = DreamSnippet & {
  theme: string;
};

export type DreamTheme = {
  theme: string;
  intro: string;
  dreams: DreamSnippet[];
};

export const dummyData: DreamTheme[] = [
  {
    theme: `Fear of catching the disease`,
    intro: `This includes worries about being tested, social distancing, isolation, and infecting others:`,
    dreams: [
      {
        text: `Contracting and dying alone. This thing never ending. `,
        gender: "F",
      },
      {
        text: `i had a dream i got it and had to isolate myself from everyone. `,
        gender: "F",
      },
      {
        text: `I dreamt that someone came closer than 6 feet to me without my permission and I freaked out at them. `,
        gender: "F",
      },
    ],
  },
  {
    theme: `Fear of family and friends catching it`,
    intro: `Many expressions of the frustration and sadness of being separated from loved ones:`,
    dreams: [
      {
        text: `That a loved one had it and we had to see them through a window; they died and I was alone. `,
        gender: "F",
      },

      {
        text: `Scared, looking for family members who were lost. `,
        gender: "F",
      },

      {
        text: `Hearing that family has it and can't get treatment or that they didn't survive it. Like I can't even wave from outside a window to their room or anything. `,
        gender: "F",
      },
    ],
  },
  {
    theme: `Difficulty breathing`,
    intro: `This one of the most frightening symptoms of the virus. Difficulties in breathing are commonly found in night terrors and sleep paralysis:`,
    dreams: [
      {
        text: `That I woke up and couldn't breathe. Felt like my lungs were filling up. `,
        gender: "F",
      },

      {
        text: `I was in a hospital bed, empty white room, I was coughing and stopped breathing. Knew that it wasn't real whenever I couldn't feel the bed I was on. Woke myself up. `,
        gender: "M",
      },

      { text: `I was dreaming I could not get enough air `, gender: "M" },
    ],
  },
  {
    theme: `Threats to work`,
    intro: `The financial anxieties caused by the pandemic come through clearly in people's dreams:`,
    dreams: [
      {
        text: `Losing my job. `,
        gender: "M",
      },

      { text: `Because of job loss I cannot afford to live. `, gender: "M" },

      {
        text: `I dreamed about coworkers and the virtual meetings we have had and their difficulty with caring for their kids in the meetings. I felt sad and overwhelmed. `,
        gender: "F",
      },
    ],
  },
  {
    theme: `Apocalypse`,
    intro: `The end of the world is a recurrent theme in many religious traditions (e.g. the Book of Revelation in the Bible). Dreams are very sensitive to feelings that the world is fragmenting, falling apart, lapsing into chaos:`,
    dreams: [
      {
        text: `About the world crumbling. Things got tough. People suffered. Economy of some nation's crumble...and lots more. `,
        gender: "M",
      },

      {
        text: `The virus spread uncontrolled, bodies piled up. Company's closed down. People becoming desperate and violence increasing. `,
        gender: "F",
      },

      { text: `Lara Croft: Tomb Raider, the Cradle of Life. `, gender: "F" },

      {
        text: `animals start contracting the virus and then it goes back to humans in which it turns far worse and kills 90% of the worlds population and becomes kind of an apocalypse. `,
        gender: "M",
      },

      {
        text: `I have dreams of the world ending, people going crazy and in all the turmoil im trying to get my older children home safely and they can't get home. `,
        gender: "F",
      },

      {
        text: `I was homeless, hungry and scared. Everyone in the world was sick, it was coronavirus mutated and turned everyone into zombies. They were trying to kill me by touching me. I had no way to survive even if I avoided being touched. Woke up just before I died of hunger sickness. Been having very weird dreams lately. `,
        gender: "M",
      },
    ],
  },
  {
    theme: `Normal life?`,
    intro: `It seems hard to imagine that life will ever again feel calm and normal. Some dreams are peering through the darkness of the present to envision better possibilities in the future:`,
    dreams: [
      {
        text: `A normal day in the life, social distancing, no negative emotions. `,
        gender: "F",
      },

      {
        text: `I had a dream that we were attending a party for a friend's baby. Instead of all of us going in person, we all had computers set up with some kind of FaceTime app. We celebrated the birthday this way online instead of in person because of the outbreak. `,
        gender: "F",
      },

      {
        text: ` I dreamed I opened a drawer and found a bunch of masks. I was very happy. `,
        gender: "F",
      },
    ],
  },
];
