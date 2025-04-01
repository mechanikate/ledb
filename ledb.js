const ANY = "*";
const UNKNOWN = "?";
const IMPOSSIBLE = "\u2612"; // ☒
const SOURCES_USED = [ // * indicates wildcard/all of the above 
    {
        "where": [
            "n.*"
        ],
        "urls": [
            "https://dcc.dickinson.edu/grammar/latin/case-endings-five-declensions",
			"https://www.nationalarchives.gov.uk/latin/stage-1-latin/resources/stage-1-latin-grammar-resource/nouns/"
        ]
    },
	{
		"where": [
			"n.3.*"
		],
		"urls": [
			"https://www.usu.edu/markdamen/latin1000/Chapters/07ch.htm"
		]
	},
    {
        "where": [
            "v.*"
        ],
        "urls": [
            "https://classicalliberalarts.com/classical-trivium/latin-verb-conjugation-chart/"
        ]
        
    },
    {
        "where": [
            "rp.*"
        ],
        "urls": [
            "https://dcc.dickinson.edu/grammar/latin/relative-interrogative-and-indefinite-pronouns"
        ]
    },
	{
		"where": [
			"a.1.*",
			"a.2.*"
		],
		"urls": [
			"https://dcc.dickinson.edu/grammar/latin/1st-and-2nd-declension-adjectives-%C4%81-o-stems",
			"https://www.nationalarchives.gov.uk/latin/stage-1-latin/lessons/lesson-5-first-and-second-declension-adjectives-ego-and-nos/",
			"https://www.usu.edu/markdamen/Latin1000/Vocsheet/adject12.PDF"
		]
	},
	{
		"where": [
			"a.3.*"
		],
		"urls": [
			"https://dcc.dickinson.edu/grammar/latin/3rd-declension-adjectives-classification-and-paradigms",
			"https://www.nationalarchives.gov.uk/latin/stage-1-latin/lessons/lesson-7-third-declension-nouns-and-adjectives/",
			"https://www.usu.edu/markdamen/Latin1000/Vocsheet/adject3.PDF"
		]
	},
	{
		"where": [
			"dp.*"
		],
		"urls": [
			"https://www.thelatinlibrary.com/101/DemonstrativePronouns.pdf"
		]
	}
];
const endings = {
    "n": [
        null, // 0th declension (nonexistent)
        { // 1st declension
            "m": {
                "sg": {
                    "nom": "a",
                    "voc": "a",
                    "gen": "ae",
                    "dat": "ae",
                    "acc": "am",
                    "abl": "\u0101"
                }, 
                "pl": {
                    "nom": "ae",
                    "voc": "ae",
                    "gen": "\u0101rum",
                    "dat": "\u012Bs",
                    "acc": "\u0101s",
                    "abl": "\u012Bs"
                }
            },
            "f": {
                "sg": {
                    "nom": "a",
                    "voc": "a",
                    "gen": "ae",
                    "dat": "ae",
                    "acc": "am",
                    "abl": "\u0101"
                }, 
                "pl": {
                    "nom": "ae",
                    "voc": "ae",
                    "gen": "\u0101rum",
                    "dat": "\u012Bs",
                    "acc": "\u0101s",
                    "abl": "\u012Bs"
                }
            },
            "n": {
                "sg": {
                    "nom": IMPOSSIBLE,
                    "voc": IMPOSSIBLE,
                    "gen": IMPOSSIBLE,
                    "dat": IMPOSSIBLE,
                    "acc": IMPOSSIBLE,
                    "abl": IMPOSSIBLE
                }, 
                "pl": {
                    "nom": IMPOSSIBLE,
                    "voc": IMPOSSIBLE,
                    "gen": IMPOSSIBLE,
                    "dat": IMPOSSIBLE,
                    "acc": IMPOSSIBLE,
                    "abl": IMPOSSIBLE
                }
            }
        },
        { // 2nd declension
            "m": {
                "sg": {
                    "nom": "us",
                    "voc": "e",
                    "gen": "\u012B",
                    "dat": "o",
                    "acc": "um",
                    "abl": "\u014D"
                }, 
                "pl": {
                    "nom": "\u012B",
                    "voc": "\u012B",
                    "gen": "\u014Drum",
                    "dat": "\u012Bs",
                    "acc": "\u014Ds",
                    "abl": "\u012Bs"
                }
            },
            "f": {
                "sg": {
                    "nom": "us",
                    "voc": "e",
                    "gen": "\u012B",
                    "dat": "o",
                    "acc": "um",
                    "abl": "\u014D"
                }, 
                "pl": {
                    "nom": "\u012B",
                    "voc": "\u012B",
                    "gen": "\u014Drum",
                    "dat": "\u012Bs",
                    "acc": "\u014Ds",
                    "abl": "\u012Bs"
                }
            },
            "n": {
                "sg": {
                    "nom": "um",
                    "voc": "e",
                    "gen": "\u012B",
                    "dat": "o",
                    "acc": "um",
                    "abl": "\u014D"
                }, 
                "pl": {
                    "nom": "a",
                    "voc": "\u012B",
                    "gen": "\u014Drum",
                    "dat": "\u012Bs",
                    "acc": "a",
                    "abl": "\u012Bs"
                }
            }
        },
        { // 3rd declension
            "m": {
                "sg": {
                    "nom": ANY,
                    "voc": UNKNOWN,
                    "gen": "is",
                    "dat": "\u012B",
                    "acc": "em",
                    "abl": "e"
                }, 
                "pl": {
                    "nom": "\u0113s",
                    "voc": "\u012B",
                    "gen": "um",
                    "dat": "ibus",
                    "acc": "a",
                    "abl": "ibus"
                }
            },
            "f": {
                "sg": {
                    "nom": ANY,
                    "voc": UNKNOWN,
                    "gen": "is",
                    "dat": "\u012B",
                    "acc": "em",
                    "abl": "e"
                }, 
                "pl": {
                    "nom": "\u0113s",
                    "voc": "\u012B",
                    "gen": "um",
                    "dat": "ibus",
                    "acc": "a",
                    "abl": "ibus"
                }
            },
            "n": {
                "sg": {
                    "nom": ANY,
                    "voc": UNKNOWN,
					"gen": "is",
                    "dat": "\u012B",
                    "acc": ANY,
                    "abl": "e"
                }, 
                "pl": {
                    "nom": "a",
                    "voc": "\u012B",
                    "gen": "um",
                    "dat": "ibus",
                    "acc": "a",
                    "abl": "ibus"
                }
            }
        },
        /**
         * NOTE:
         * Vocative endings for 4th/5th sourced from one source:
         * https://dcc.dickinson.edu/sites/default/files/Case_endings_5_decl_2.pdf
         * Any additional sources are welcome!
         */
	    { // 4th declension
		    "m": {
				"sg": {
					"nom": "us",
                    "voc": "\u016Bs",
					"loc": UNKNOWN,
                    "gen": "\u016Bs",
                    "dat": "u\u012B",
                    "acc": "um",
                    "abl": "\u016B"
				}, 
				"pl": {
					"nom": "\u016Bs",
                    "voc": "\u016Bs",
					"loc": UNKNOWN,
                    "gen": "uum",
                    "dat": "ibus",
                    "acc": "\u016Bs",
                    "abl": "ibus"
				}
			},
			"f": {
				"sg": {
					"nom": "us",
                    "voc": "\u016Bs",
					"loc": UNKNOWN,
                    "gen": "\u016Bs",
                    "dat": "u\u012B",
                    "acc": "um",
                    "abl": "\u016B"
				}, 
				"pl": {
					"nom": "\u016Bs",
                    "voc": "\u016Bs",
					"loc": UNKNOWN,
                    "gen": "uum",
                    "dat": "ibus",
                    "acc": "\u016Bs",
                    "abl": "ibus"
				}
			},
			"n": {
				"sg": {
					"nom": "\u016B",
					"voc": "\u016B",
					"loc": UNKNOWN,
					"gen": "\u016Bs",
					"dat": "\u016B",
					"acc": "\u016B",
					"abl": "\u016B",
				},
				"pl": {
					"nom": "ua",
					"voc": "\u016Ba",
					"loc": UNKNOWN,
					"gen": "uum",
					"dat": "ibus",
					"acc": "ua",
					"abl": "ibus"
				}
			}
		},
		{ // 5th declension
			"m": {
				"sg": {
					"nom": "\u0113s",
					"voc": "\u0113s",
					"loc": UNKNOWN,
					"gen": "\u0113\u012B",
					"dat": "\u0113\u012B",
					"acc": "em",
					"abl": "\u0113"
				},
				"pl": {
					"nom": "\u0113s",
					"voc": "\u0113s",
					"loc": UNKNOWN,
					"gen": "\u0113rum",
					"dat": "\u0113bus",
					"acc": "\u0113s",
					"abl": "\u0113bus"
				}
			},
			"f": {
				"sg": {
					"nom": "\u0113s",
					"voc": "\u0113s",
					"loc": UNKNOWN,
					"gen": "\u0113\u012B",
					"dat": "\u0113\u012B",
					"acc": "em",
					"abl": "\u0113"
				},
				"pl": {
					"nom": "\u0113s",
					"voc": "\u0113s",
					"loc": UNKNOWN,
					"gen": "\u0113rum",
					"dat": "\u0113bus",
					"acc": "\u0113s",
					"abl": "\u0113bus"
				}
			},
			"n": {
				"sg": {
					"nom": "\u0113s",
					"voc": "\u0113s",
					"loc": UNKNOWN,
					"gen": "\u0113\u012B",
					"dat": "\u0113\u012B",
					"acc": "em",
					"abl": "\u0113"
				},
				"pl": {
					"nom": "\u0113s",
					"voc": "\u0113s",
					"loc": UNKNOWN,
					"gen": "\u0113rum",
					"dat": "\u0113bus",
					"acc": "\u0113s",
					"abl": "\u0113bus"
				}
			}
		}
    ],
    /**
     * NOTE:
     * The following section for verb endings
     * is primarily cited from one source:
     * https://classicalliberalarts.com/classical-trivium/latin-verb-conjugation-chart/
     * Feel free to include evidence going against/for these endings, it would really help!
     */
    "v": [
        null, // 0th conj. (nonexistent)
        [ // 1st conj.
            null,
            { // 1st person
                "sg": {
                    "prs": "\u014D", // o-line
                    "imp": "abam",
                    "ftr": "abo",
                    "prf": "avi"
                },
                "pl": {
                    "prs": "amus",
                    "imp": "abamus",
                    "ftr": "abimus",
                    "prf": "avimus"
                }
            },
            { // 2nd person
                "sg": {
                    "prs": "as", // o-line
                    "imp": "abas",
                    "ftr": "abis",
                    "prf": "avisti"
                },
                "pl": {
                    "prs": "atis",
                    "imp": "abatis",
                    "ftr": "abitis",
                    "prf": "avistis"
                }
            },
            { // 3rd person
                "sg": {
                    "prs": "at", // o-line
                    "imp": "abat",
                    "ftr": "abit",
                    "prf": "avit"
                },
                "pl": {
                    "prs": "ant",
                    "imp": "abant",
                    "ftr": "abunt",
                    "prf": "erunt"
                }
            }
        ],
        [ // 2nd conj.
            null,
            { // 1st person
                "sg": {
                    "prs": "e\u014D",
                    "imp": "ebam",
                    "ftr": "ebo",
                    "prf": "ui"
                },
                "pl": {
                    "prs": "emus",
                    "imp": "ebamus",
                    "ftr": "ebimus",
                    "prf": "uimus"
                }
            },
            { // 2nd person
                "sg": {
                    "prs": "es", // o-line
                    "imp": "ebas",
                    "ftr": "ebis",
                    "prf": "uisti"
                },
                "pl": {
                    "prs": "et",
                    "imp": "ebatis",
                    "ftr": "ebitis",
                    "prf": "uistis"
                }
            },
            { // 3rd person
                "sg": {
                    "prs": "et",
                    "imp": "ebat",
                    "ftr": "ebit",
                    "prf": "uit"
                },
                "pl": {
                    "prs": "ent",
                    "imp": "ebant",
                    "ftr": "ebunt",
                    "prf": "erunt"
                }
            }
        ],
        [ // 3rd conj.
            null,
            { // 1st person
                "sg": {
                    "prs": "\u014D", // o-line
                    "imp": "ebam",
                    "ftr": "am",
                    "prf": "i"
                },
                "pl": {
                    "prs": "imus",
                    "imp": "ebamus",
                    "ftr": "emus",
                    "prf": "imus"
                }
            },
            { // 2nd person
                "sg": {
                    "prs": "is",
                    "imp": "ebas",
                    "ftr": "es",
                    "prf": "is"
                },
                "pl": {
                    "prs": "itis",
                    "imp": "ebatis",
                    "ftr": "etis",
                    "prf": "istis"
                }
            },
            { // 3rd person
                "sg": {
                    "prs": "it", 
                    "imp": "ebat",
                    "ftr": "et",
                    "prf": "it"
                },
                "pl": {
                    "prs": "unt",
                    "imp": "bant",
                    "ftr": "ent",
                    "prf": "erunt"
                }
            }
        ],
        [ // 4th conj.
            null,
            { // 1st person
                "sg": {
                    "prs": "\u014D", // o-line
                    "imp": "ebam",
                    "ftr": "am",
                    "prf": "vi"
                },
                "pl": {
                    "prs": "mus",
                    "imp": "ebamus",
                    "ftr": "emus",
                    "prf": "vimus"
                }
            },
            { // 2nd person
                "sg": {
                    "prs": "s",
                    "imp": "ebas",
                    "ftr": "es",
                    "prf": "vis"
                },
                "pl": {
                    "prs": "tis",
                    "imp": "ebatis",
                    "ftr": "etis",
                    "prf": "stis"
                }
            },
            { // 3rd person
                "sg": {
                    "prs": "t", 
                    "imp": "ebat",
                    "ftr": "et",
                    "prf": "vit"
                },
                "pl": {
                    "prs": "unt",
                    "imp": "ebant",
                    "ftr": "ent",
                    "prf": "verunt"
                }
            }
        ]
    ],
    "a": [
        null,
        {
            "m": {
                "sg": {
                    "nom": "us",
                    "gen": "\u012B",
                    "dat": "\u014D",
                    "acc": "um",
                    "abl": "\u014D"
                },
                "pl": {
                    "nom": "\u012B",
                    "gen": "\u014Drum",
                    "dat": "\u012Bs",
                    "acc": "\u014Ds",
                    "abl": "\u012Bs"
                }
            },
            "f": {
                "sg": {
                    "nom": "a",
                    "gen": "ae",
                    "dat": "ae",
                    "acc": "am",
                    "abl": "\u0101"
                },
                "pl": {
                    "nom": "ae",
                    "gen": "\u0101rum",
                    "dat": "\u012Bs",
                    "acc": "\u0101s",
                    "abl": "\u012Bs"
                }
            },
            "n": {
                "sg": {
                    "nom": "um",
                    "gen": "\u012B",
                    "dat": "\u014D",
                    "acc": "um",
                    "abl": "\u014D"
                },
                "pl": {
                    "nom": "a",
                    "gen": "\u014Drum",
                    "dat": "\u012Bs",
                    "acc": "a",
                    "abl": "\u012Bs"
                }
            }
        },
        {
            "m": {
                "sg": {
                    "nom": "us",
                    "gen": "\u012B",
                    "dat": "\u014D",
                    "acc": "um",
                    "abl": "\u014D"
                },
                "pl": {
                    "nom": "\u012B",
                    "gen": "\u014Drum",
                    "dat": "\u012Bs",
                    "acc": "\u014Ds",
                    "abl": "\u012Bs"
                }
            },
            "f": {
                "sg": {
                    "nom": "a",
                    "gen": "ae",
                    "dat": "ae",
                    "acc": "am",
                    "abl": "\u0101"
                },
                "pl": {
                    "nom": "ae",
                    "gen": "\u0101rum",
                    "dat": "\u012Bs",
                    "acc": "\u0101s",
                    "abl": "\u012Bs"
                }
            },
            "n": {
                "sg": {
                    "nom": "um",
                    "gen": "\u012B",
                    "dat": "\u014D",
                    "acc": "um",
                    "abl": "\u014D"
                },
                "pl": {
                    "nom": "a",
                    "gen": "\u014Drum",
                    "dat": "\u012Bs",
                    "acc": "a",
                    "abl": "\u012Bs"
                }
            }
        },
        {
            "m": {
                "sg": {
                    "nom": ANY,
                    "gen": "\u012Bs",
                    "dat": "\u012B",
                    "acc": "em",
                    "abl": "i"
                },
                "pl": {
                    "nom": "\u0113s",
                    "gen": "ium",
                    "dat": "ibus",
                    "acc": "\u0113s",
                    "abl": "ibus"
                }
            },
            "f": {
                "sg": {
                    "nom": ANY,
                    "gen": "\u012Bs",
                    "dat": "\u012B",
                    "acc": "em",
                    "abl": "i"
                },
                "pl": {
                    "nom": "\u0113s",
                    "gen": "ium",
                    "dat": "ibus",
                    "acc": "\u0113s",
                    "abl": "ibus"
                }
            },
            "n": {
                "sg": {
                    "nom": ANY,
                    "gen": "\u012Bs",
                    "dat": "\u012B",
                    "acc": ANY,
                    "abl": "i"
                },
                "pl": {
                    "nom": "ia",
                    "gen": "ium",
                    "dat": "ibus",
                    "acc": "ia",
                    "abl": "ibus"
                }
            }
        }
    ],
    "rp": {
        "m": {
            "sg": {
                "nom": "qu\u012B",
                "gen": "c\u00FBius",
                "dat": "cui",
                "acc": "quem",
                "abl": "qu\u014D"
            },
            "pl": {
                "nom": "qu\u012B",
                "gen": "qu\u014Drum",
                "dat": "quibus",
                "acc": "qu\u014Ds",
                "abl": "quibus"
            }
        },
        "f": {
            "sg": {
                "nom": "quae",
                "gen": "c\u00FBius",
                "dat": "cui",
                "acc": "quam",
                "abl": "qu\u0101"
            },
            "pl": {
                "nom": "quae",
                "gen": "qu\u0101rum",
                "dat": "quibus",
                "acc": "qu\u0101s",
                "abl": "quibus"
            }
        },
        "n": {
            "sg": {
                "nom": "quod",
                "gen": "c\u00FBius",
                "dat": "cui",
                "acc": "quod",
                "abl": "qu\u014D"
            },
            "pl": {
                "nom": "quae",
                "gen": "qu\u014Drum",
                "dat": "quibus",
                "acc": "quae",
                "abl": "quibus"
            }
        }
    },
	"dp": { // demonstrative pronouns
		"hic": { // hic, haec, hoc
			"m": {
				"sg": {
					"nom": "hic",
					"gen": "huius",
					"dat": "huic",
					"acc": "hunc",
					"abl": "h\u014Dc"
				},
				"pl": {
					"nom": "h\u012B",
					"gen": "h\u014Drum",
					"dat": "h\u012Bs",
					"acc": "h\u014Ds",
					"abl": "h\u012Bs"
				}
			},
			"f": {
				"sg": {
					"nom": "haec",
					"gen": "huius",
					"dat": "huic",
					"acc": "hanc",
					"abl": "h\u0101c"
				},
				"pl": {
					"nom": "hae",
					"gen": "h\u0101rum",
					"dat": "h\u012Bs",
					"acc": "h\u0101s",
					"abl": "h\u012Bs"
				}
			},
			"n": {
				"sg": {
					"nom": "hoc",
					"gen": "huius",
					"dat": "huic",
					"acc": "hoc",
					"abl": "h\u014Dc"
				},
				"pl": {
					"nom": "haec",
					"gen": "h\u014Drum",
					"dat": "h\u012Bs",
					"acc": "haec",
					"abl": "h\u012Bs"
				}
			}
		},
		"ille": { // ille, illa, illud
			"m": {
				"sg": {
					"nom": "ille",
					"gen": "ill\u012Bus",
					"dat": "ill\u012B",
					"acc": "illum",
					"abl": "ill\u014D"
				},
				"pl": {
					"nom": "ill\u012B",
					"gen": "ill\u014Drum",
					"dat": "ill\u012Bs",
					"acc": "ill\u014Ds",
					"abl": "ill\u012Bs"
				}
			},
			"f": {
				"sg": {
					"nom": "illa",
					"gen": "ill\u012Bus",
					"dat": "ill\u012B",
					"acc": "illam",
					"abl": "ill\u0101"
				},
				"pl": {
					"nom": "illae",
					"gen": "ill\u0101rum",
					"dat": "ill\u012Bs",
					"acc": "ill\u0101s",
					"abl": "il\u012Bs"
				}
			},
			"n": {
				"sg": {
					"nom": "illud",
					"gen": "ill\u012Bus",
					"dat": "ill\u012B",
					"acc": "illud",
					"abl": "ill\u014D"
				},
				"pl": {
					"nom": "illa",
					"gen": "ill\u014Drum",
					"dat": "ill\u012Bs",
					"acc": "illa",
					"abl": "ill\u012Bs"
				}
			}
		}
	}
};

const normalized = s => s.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // remove diacritics (e.g. long marks or hats)
const compacted = { // compacts all the endings into a single layer object
    "n": Object.assign({}, ...([1,2,3,4,5].map(d => 
        ["m","f","n"].map(g => // gender (g)
            ["sg", "pl"].map(n => // number (n)
                ["nom", "voc", "gen", "dat", "acc", "abl"].map(c => { // case (c)
                    let obj = {}; 
                    obj[`n,${d}:${g}.${n}.${c}`] = normalized(endings.n[d][g][n][c]); // n,<declension>:<gender>.<number>.<case>
                    return obj;
                })
            )
        )
    ).flat(Infinity))),
    "v": Object.assign({}, ...([1,2,3,4].map(d => // conjugations
        [1,2,3].map(p => // person (p)
            ["sg", "pl"].map(n => // number (n)
                ["prs", "imp", "ftr", "prf"].map(c => { // case (or in this case, tense) (c)
                    let obj = {};
                    obj[`v,${d}:${p}.${n}.${c}`] = normalized(endings.v[d][p][n][c]); // v,<declension>:<person>.<number>.<tense>
                    return obj;
                })
            )
        )
    ).flat(Infinity))),
    "a": Object.assign({}, ...([1,2,3].map(d => // declension (d)
        ["m","f","n"].map(g => // gender (g)
            ["sg", "pl"].map(n => // number (n)
                ["nom", "gen", "dat", "acc", "abl"].map(c => { // case (c)
                    let obj = {};
                    obj[`a,${d}:${g}.${n}.${c}`] = normalized(endings.a[d][g][n][c]); // a,<declension>:<gender>.<number>.<case>
                    return obj;
                })
            )
        )
    ).flat(Infinity))),
    "rp": Object.assign({}, ...(["m","f","n"].map(g => ( // gender (g)
        ["sg", "pl"].map(n => // number (n)
            ["nom", "gen", "dat", "acc", "abl"].map(c => { // case (c)
                let obj = {};
                obj[`rp,${g}:${n}.${c}`] = normalized(endings.rp[g][n][c]); // rp,<gender>:<number>.<case>
                return obj;
            })
        )
    )).flat(Infinity))),
	"dp": Object.assign({}, ...(["hic","ille"].map(d => // type of dp (d)
        ["m","f","n"].map(g => // gender (g)
            ["sg", "pl"].map(n => // number (n)
                ["nom", "gen", "dat", "acc", "abl"].map(c => { // case (c)
                    let obj = {};
                    obj[`dp,${d}:${g}.${n}.${c}`] = normalized(endings.dp[d][g][n][c]); // a,<declension>:<gender>.<number>.<case>
                    return obj;
                })
            )
        )
    ).flat(Infinity))),
};
/* General method to flatten all of the endings to make searching easier, scrapped because it doesn't work and unnecessary
const removeDiacritics = e => e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const allAreOfType = (li, typeClass) => {
    return removeNulls(li)[0] instanceof typeClass;
};
const anyAreOfType = (li, typeClass) => {
    if(li instanceof Array) return li.filter(e => e instanceof typeClass).length != 0; 
    if(li.constructor == Object) return Object.keys(li).filter(e => li[e] instanceof typeClass).length != 0; 
};
const removeNulls = (li) => { 
    if(li instanceof Array) return li.filter(e => e != null);
    if(li.constructor == Object) return Object.keys(li).filter(e => li[e] != null && li[e] != undefined).map(e => li[e]);
};
const flattenAllArrays = v => {
    if(v instanceof Array) return v.map(e => e instanceof Array ? e.flat(Infinity) : e).flat(Infinity);
    if(v.constructor == Object) return Object.keys(v).map(e => v[e] instanceof Array ? v[e].flat(Infinity) : v[e]);
};
function _flatten(data,labelToAdd,f=removeDiacritics) {
    data=removeNulls(data);
    console.log(data, data.constructor == Object);
    if(data.constructor == Object) {
        if(!(allAreOfType(data, Array) || allAreOfType(data,Object))) return Object.assign(
            {}, 
            ...(
                Object.keys(data).map(e => {
                    let obj = {};
                    obj[`${labelToAdd==undefined ? "" : labelToAdd}${labelToAdd==undefined ? "" : "."}${e}`] = f(data[e]);
                    return obj;
                })
            )
        );
        return Object.keys(data).map(e => _flatten(data[e],e,f));
    }
    if(data instanceof Array) {
        if(!(allAreOfType(data, Array) || allAreOfType(data,Object))) return Object.assign(
            {}, 
            ...(
                data.map((e,i) => {
                    let obj = {};
                    obj[`${labelToAdd==undefined ? "" : labelToAdd}${labelToAdd==undefined ? "" : "."}${i}`] = f(e);
                    return obj;
                })
            )
        );
        return data.map((e,i) => _flatten(e,i,f));
    }
    
    return {[labelToAdd]: data};
}
const flatten = (data,labelToAdd,f=removeDiacritics) => (Object.assign({}, ..._flatten(data,labelToAdd,f)));
try {
    console.log(JSON.stringify(flatten(endings)));
} catch(e) {
    console.log(e);
}*/
const LEDB = { // publically-accessible spot to do all things LEDB
	"endings": endings, // ALL of the endings
	"flattened": compacted, // single-layer object with all the endings mapped to a path,
	"sources": SOURCES_USED, // references used to get all the endings
	"any": ANY, // the marker for a wildcard ending, one that doesn't have a common pattern or it has multiple options. Defaults to * (asterisk)
	"unknown": UNKNOWN, // not stored in the database and devs couldn't find any reputable source that says a discernable ending. Defaults to ? (question mark)
	"impossible": IMPOSSIBLE // never happens in Latin, e.g. noun 1st declension neuter (n,1:f.*). Defaults to ☒ (U+2612, ballot box with x)
};
function findEnding(ending, type="n") { // find an ending via LEDB.flattened, input an ending and the category (noun="n", adjective="a", etc.) and it will find all of the endings that match without diacritics
    return (Object.entries(compacted[type]).filter(([, val]) => val === ending)).map(e => e[0]);
}
