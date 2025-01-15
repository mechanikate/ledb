const ANY = "*";
const endings = {
    "n": [
        null,
        {
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
                    "nom": "N/A",
                    "voc": "N/A",
                    "gen": "N/A",
                    "dat": "N/A",
                    "acc": "N/A",
                    "abl": "N/A"
                }, 
                "pl": {
                    "nom": "N/A",
                    "voc": "N/A",
                    "gen": "N/A",
                    "dat": "N/A",
                    "acc": "N/A",
                    "abl": "N/A"
                }
            }
        },
        {
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
        {
            "m": {
                "sg": {
                    "nom": ANY,
                    "voc": ANY,
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
                    "voc": ANY,
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
                    "voc": ANY,
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
        }
    ],
    "v": [
        null,
        {
            "sg": {
                "imp": "bam",
                "prs": "\u014D",
                "prf": "i"
            },
            "pl": {
                "imp": "bamus",
                "prs": "mus",
                "prf": "imus"
            }
        },
        {
            "sg": {
                "imp": "bas",
                "prs": "s",
                "prf": "isti"
            },
            "pl": {
                "imp": "batis",
                "prs": "tis",
                "prf": "istis"
            }
        },
        {
            "sg": {
                "imp": "t",
                "prs": "bat",
                "prf": "it"
            },
            "pl": {
                "imp": "bant",
                "prs": "nt",
                "prf": "erunt"
            }
        }
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
        "nom": {
            "sg": {
                "m": "qu\u012B",
                "f": "quae",
                "n": "quod"
            },
            "pl": {
                "m": "quem",
                "f": "quam",
                "n": "quod"
            }
            
        },
        "acc": {
            "sg": {
                "m": "qu\u012B",
                "f": "quae",
                "n": "quae"
            },
            "pl": {
                "m": "qu\u014Ds",
                "f": "qu\u0101s",
                "n": "quae"
            }
        }
    }
};
const LEDB = {
	"endings": endings,
	"any": ANY
}
