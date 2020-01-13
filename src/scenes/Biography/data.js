export const text = [
  'Following a BA in Drama from Manchester University and an MA in Film and Television from Bristol University, Michael began his career making a wide range of critically acclaimed documentaries and drama-documentaries for the BBC, ITV and Channel 4 (including seven films with producer Beryl Vertue at Hartswood), as well as dramatised adventure films for Discovery Channel.',
  "Michael was selected for the BFI London Film Festival's course for 'emerging feature film directors', won a place on the <i>Directing Actors</i> course at the NFTS, and made the shortlist (of 25 out of 1000) for the prestigious <i>BBC TV Drama Writers Programme 2017</i>. Michael also directed fourteen episodes of the hit BBC children’s drama <i>Tracy Beaker Returns</i>, winning a BAFTA and two RTS awards."
]

export const films = [
  {
    key: 'beaker',
    sections: [
      {
        awards: [
          {
            award: 'Best Drama',
            festival: "BAFTA Children's Award",
            result: 'winner'
          },
          {
            award: 'Best Direction',
            festival: 'Chicago International Film Festival',
            result: 'winner'
          },
          {
            award: 'Best Female Performer',
            festival: "BAFTA Children's Award",
            result: 'nominated'
          },
          {
            award: 'Best Writer',
            festival: "BAFTA Children's Award",
            result: 'nominated'
          },
          {
            award: 'Audience Award',
            festival: "BAFTA Children's Award",
            result: 'nominated'
          },
          {
            award: "Best Children's Drama",
            festival: 'Royal Television Society Award',
            result: 'nominated'
          },
          {
            award: "Best Children's Drama",
            festival: 'BANFF Television Awards',
            result: 'nominated'
          }
        ],
        company: 'BBC',
        description:
          "Reboot of the popular children's series <i>Tracy Beaker</i>.",
        production: '5 x 30 mins',
        title: 'Tracy Beaker Returns, Series 1',
        vimeoId: '384411284'
      },
      {
        awards: [
          {
            award: 'Best Drama Production',
            festival: 'Royal Television Society Award',
            result: 'winner'
          },
          {
            award: "Best Children's Drama",
            festival: 'Royal Television Society Programme Award',
            result: 'winner'
          },
          {
            award: 'Best Direction',
            festival: 'Chicago International Film Festival,',
            result: 'winner'
          },
          {
            award: 'Audience Award',
            festival: "BAFTA Children's Award",
            result: 'nominated'
          }
        ],
        company: 'BBC',
        production: '5 x 30 mins',
        title: 'Tracy Beaker Returns, Series 2',
        vimeoId: '384411808'
      },
      {
        awards: [
          {
            award: 'Best Drama',
            festival: "BAFTA Children's Award",
            result: 'nominated'
          },
          {
            award: 'Audience Award',
            festival: "BAFTA Children's Award",
            result: 'nominated'
          }
        ],
        company: 'BBC',
        production: '4 x 30 mins',
        title: 'Tracy Beaker Returns, Series 3',
        vimeoId: '384412835'
      }
    ],
    title: 'Tracy Beaker Returns',
    type: 'Drama'
  },
  {
    company: 'Impossible Pictures',
    description: 'A biopic of Tyrannosaurus Rex. Lots of CGI.',
    key: 'dinosaur',
    production: '60 min BBC1 / Discovery',
    reviews: [
      {
        review: 'Highly entertaining',
        source: 'The Times'
      },
      {
        review: 'More mockumentary than documentary',
        source: 'The Daily Mail'
      },
      {
        review: 'Comedy with genuine flair ',
        source: 'The Daily Telegraph'
      },
      {
        review: 'A cheeky biopic',
        source: 'The Guardian'
      },
      {
        review: 'An entertaining, fun romp',
        source: 'The Daily Express'
      },
      {
        review: 'Quirky and irreverent, a real oddity',
        source: 'The Sunday Times'
      }
    ],
    title: 'A Dinosaur In Hollywood',
    type: 'Drama Documentary',
    vimeoId: '167772506'
  },
  {
    company: 'Hartswood Films',
    description: 'The largest escape by German POWs during WW2.',
    key: 'escape',
    production: '60 min Channel 4',
    reviews: [
      {
        review: 'A fascinating dramatisation',
        source: 'The Daily Mirror'
      },
      {
        review: 'Compelling storytelling',
        source: 'The Daily Telegraph'
      },
      {
        review: 'Hilarious, a fantastically entertaining film',
        source: 'The Sunday Times'
      },
      {
        review: 'Watch this, an amazing tale',
        source: 'The Guardian'
      },
      {
        review: 'Jaunty and exciting',
        source: 'The Times'
      },
      {
        review: 'An extraordinary story',
        source: 'The Sunday Telegraph'
      },
      {
        review: 'Absolutely fascinating',
        source: 'The Daily Mail'
      }
    ],
    title: 'The Welsh Great Escape',
    type: 'Drama Documentary',
    vimeoId: '167788873'
  },
  {
    awards: [
      {
        award: 'Best Direction (Series)',
        festival: 'Canadian Gemini Awards',
        result: 'winner'
      }
    ],
    company: 'Tigress Productions',
    description:
      "The bravest man in television tackles the world's deadliest snakes. Filmed on location in Borneo, Peru, Egypt, Sudan and South Africa.",
    key: 'snakemaster',
    production: '4 x 60 and 1 x 90 min Discovery / Five',
    reviews: [
      {
        review: 'Hellishly effective',
        source: 'The Times'
      },
      {
        review: 'Informative, impressive, terrifying',
        source: 'The Daily Telegraph'
      },
      {
        review: 'A wildlife comedy adventure',
        source: 'The Sunday Times'
      },
      {
        review: 'Hilariously tongue in cheek',
        source: 'The Daily Mail'
      },
      {
        review: 'Five star entertainment',
        source: 'The Mail On Sunday'
      }
    ],
    title: 'Snakemaster',
    type: 'Dramatised Adventure',
    vimeoId: '167788869'
  },
  {
    awards: [
      {
        award: 'Best Factul Programme',
        festival: 'Royal Television Society Award',
        result: 'winner'
      },
      {
        award: 'Best TV Arts / Documentary Programme',
        festival: 'TRIC Award',
        result: 'winner'
      }
    ],
    company: 'RDF',
    description:
      "Oz Clarke and James May's alcohol-fuelled road trip bromance deepens in the last and most successful of the series. Average audience 3.5 million.",
    key: 'drink',
    production: '8 x 30 min BBC2',
    subtitle: 'Series Producer & Director',
    title: 'Oz & James Drink To Britain',
    type: 'Factual Entertainment',
    vimeoId: '167894000'
  },
  {
    awards: [
      {
        award: 'Certificate of Merit',
        festival: 'Maritime Foundation Media Award',
        result: 'winner'
      }
    ],
    company: 'Modern Television',
    description:
      'A haystack on a Thames barge, with the irrepressible GRJ at the helm.',
    key: 'routes',
    production: '1 x 60 min BBC1',
    title: "Britain's Lost Routes with Griff Rhys Jones",
    type: 'Factual Entertainment',
    vimeoId: '384417881'
  },
  {
    awards: [
      {
        award: 'Best Original Television Music',
        festival: 'BAFTA Television Award',
        result: 'nominated'
      }
    ],
    company: 'Hartswood Films',
    description:
      'Extraordinary stories of captivity and escape from German and Italian prison camps during WW2, told by the men who took part. Audience 4 million.',
    key: 'war',
    production: '2 x 60 min BBC2',
    reviews: [
      {
        review: 'Fresh, new, thrilling, tragic, compelling',
        source: 'The Independent'
      },
      {
        review: 'Ultra-gripping. This tale has everything. An unmissable film',
        source: 'The Daily Mail'
      },
      {
        review: 'A compelling piece of storytelling',
        source: 'The Daily Telegraph'
      },
      {
        review: 'Outstanding',
        source: 'The Financial Times'
      },
      {
        review: 'A remarkable documentary series',
        source: 'Evening Standard'
      },
      {
        review: 'Even more stunning than the classic feature film',
        source: 'The Sun'
      },
      {
        review: 'Absorbing and moving',
        source: 'The Sunday Times'
      }
    ],
    title: 'The War Behind The Wire',
    type: 'Documentary Series',
    vimeoId: '167788870'
  },
  {
    company: 'Lion Television',
    description:
      'The life, loves, and mysterious death of pioneer aviatrix Amy Johnson.',
    key: 'johnson',
    production: '60 min Channel 4',
    reviews: [
      {
        review: 'A wonderful piece of television',
        source: 'The Guardian'
      },
      {
        review: 'Enthralling',
        source: 'The Daily Mail'
      },
      {
        review: 'Intimate and engaging',
        source: 'The Daily Telegraph'
      },
      {
        review: 'A vivid dramatised documentary',
        source: 'The Sunday Times'
      }
    ],
    title: 'Jason, Jim & Me',
    type: 'Drama Documentary',
    vimeoId: '167788865'
  },
  {
    company: 'Hartswood Films',
    description:
      'The life and death of the notorious WW1 fighter pilot, told by members of his family and descendants of those he shot down.',
    key: 'baron',
    production: '50 min BBC2',
    reviews: [
      {
        review: 'Subtle and unbearably touching',
        source: 'AA Gill - The Sunday Times'
      },
      {
        review: 'Fascinating and well researched',
        source: 'The Daily Mail'
      },
      {
        review: 'A wonderful, poignant film',
        source: 'The Times'
      },
      {
        review: 'Intelligent and instructive',
        source: 'The Sunday Telegraph'
      },
      {
        review: 'A fascinating portrait of a legend',
        source: 'The Daily Telegraph'
      }
    ],
    title: 'The Red Baron',
    type: 'Documentary',
    vimeoId: '167788868'
  },
  {
    company: 'Hartswood Films',
    description:
      'The remarkable stories of nine Chelsea Pensioners who took part in battles that changed history. Made for Remembrance Day.',
    key: 'officers',
    production: '60 min BBC1',
    reviews: [
      {
        review: 'An elegiacally beautiful documentary',
        source: 'The Daily Telegraph'
      },
      {
        review: 'Sensitive, respectful, deeply moving',
        source: 'The Guardian'
      },
      {
        review: 'Hauntingly beautiful',
        source: 'The Sunday Times'
      },
      {
        review: 'A remarkable documentary',
        source: 'Evening Standard'
      },
      {
        review: 'A beautiful and affecting film',
        source: 'The Daily Mail'
      },
      {
        review: 'Immensely touching',
        source: 'The Sunday Telegraph'
      },
      {
        review: 'A wonderful documentary',
        source: 'The Daily Mirror'
      },
      {
        review: 'Respectful, moving, and affectionate',
        source: 'The Mail On Sunday'
      }
    ],
    title: 'Officers & Gentlemen',
    type: 'Documentary',
    vimeoId: '167788866'
  },
  {
    description: 'Site-specific stories with unusually high production values.',
    key: 'trust',
    title: 'The National Trust',
    type: 'Drama',
    vimeoId: '167788867'
  },
  {
    company: 'RDF',
    description:
      'Effervescent former nurse, Roisin Isaacs, gives it all away in Dundee.',
    key: 'millionaire',
    production: '50 min Channel 4',
    reviews: [
      {
        review:
          'This is great! An exemplary example of how to execute a Secret Millionaire. Who is the Director please?',
        source: 'Commissioning Editor, Channel 4'
      }
    ],
    title: 'The Secret Millionaire',
    type: 'Documentary',
    vimeoId: '384420711'
  }
]
