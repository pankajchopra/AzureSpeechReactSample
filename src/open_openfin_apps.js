import * as fin from 'react-openfin';

export async function openChart(ticker) {
    fin.me.interop.fireIntent({
    "name": "ViewChart",
    "context": {
      "type": "fdc3.instrument",
      "id": {
        "ticker": ticker
      }
    }
  })
}

export async function openTradeTicket(ticker) {
    fin.me.interop.fireIntent({
"name": "TradeInSingleOrderEntry",
"context": {
    "Account": {
        "id": {
            "account": "52820932"
        },
        "type": "wf.account"
    },
    "Instrument": {
        "id": {
            "ticker": ticker
        },
        "type": "fdc3.instrument"
    }
}
})
}

export async function openNews(ticker) {
  fin.me.interop.fireIntent({
    "name": "ViewNews",
    "context": {
      "type": "fdc3.instrument",
      "id": {
        "ticker": ticker
      }
    },
    "metadata": {
      "target": "factset---news"
    }
  })
}

export async function openApp(hhid,hhName) {
  fin.me.interop.fireIntent({
"name": "ViewAccount",
"context": [
    {
        "name": hhName,
        "type": "wf.household",
        "id": {
            "householdId": hhid
        },
        "accounts": [
            {
                "type": "wf.account",
                "name": "FAE96787634",
                "isSelected": false,
                "id": {
                    "accountId": "18120043"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96787644",
                "isSelected": false,
                "id": {
                    "accountId": "13883837"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96787690",
                "isSelected": false,
                "id": {
                    "accountId": "64491188"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96787704",
                "isSelected": false,
                "id": {
                    "accountId": "16876839"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96787727",
                "isSelected": false,
                "id": {
                    "accountId": "34048129"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96793644",
                "isSelected": false,
                "id": {
                    "accountId": "49795727"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96793664",
                "isSelected": false,
                "id": {
                    "accountId": "52820932"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96793731",
                "isSelected": false,
                "id": {
                    "accountId": "62551871"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96793802",
                "isSelected": false,
                "id": {
                    "accountId": "75281460"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96793808",
                "isSelected": false,
                "id": {
                    "accountId": "75809415"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96799301",
                "isSelected": false,
                "id": {
                    "accountId": "85295631"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96799314",
                "isSelected": false,
                "id": {
                    "accountId": "88647259"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96799361",
                "isSelected": false,
                "id": {
                    "accountId": "13883837"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96799362",
                "isSelected": false,
                "id": {
                    "accountId": ""
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96799373",
                "isSelected": false,
                "id": {
                    "accountId": "18120043"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96799374",
                "isSelected": false,
                "id": {
                    "accountId": ""
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96799398",
                "isSelected": false,
                "id": {
                    "accountId": "64491188"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96799399",
                "isSelected": false,
                "id": {
                    "accountId": "64491188"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96809222",
                "isSelected": false,
                "id": {
                    "accountId": "34048129"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96809223",
                "isSelected": false,
                "id": {
                    "accountId": "34048129"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96809229",
                "isSelected": false,
                "id": {
                    "accountId": "16876839"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96809230",
                "isSelected": false,
                "id": {
                    "accountId": "16876839"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96809270",
                "isSelected": false,
                "id": {
                    "accountId": "43090048"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96809304",
                "isSelected": false,
                "id": {
                    "accountId": "52820932"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96809305",
                "isSelected": false,
                "id": {
                    "accountId": ""
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96809323",
                "isSelected": false,
                "id": {
                    "accountId": "49795727"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96809381",
                "isSelected": false,
                "id": {
                    "accountId": "62551871"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96813653",
                "isSelected": false,
                "id": {
                    "accountId": "75281460"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96813654",
                "isSelected": false,
                "id": {
                    "accountId": "75281460"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96813669",
                "isSelected": false,
                "id": {
                    "accountId": "88647259"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96813670",
                "isSelected": false,
                "id": {
                    "accountId": ""
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96813671",
                "isSelected": false,
                "id": {
                    "accountId": "75809415"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96813672",
                "isSelected": false,
                "id": {
                    "accountId": "75809415"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96813700",
                "isSelected": false,
                "id": {
                    "accountId": "85295631"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96813701",
                "isSelected": false,
                "id": {
                    "accountId": ""
                }
            }
        ],
        "contacts": [
            {
                "type": "fdc3.contact",
                "name": "Porter Family PORTER FAMILY GW&K",
                "isSelected": false,
                "id": {
                    "ECN": null
                }
            },
            {
                "type": "fdc3.contact",
                "name": "RANDALL PORTER",
                "isSelected": false,
                "id": {
                    "ECN": "500451811845516"
                }
            },
            {
                "type": "fdc3.contact",
                "name": "DEREK A PORTER",
                "isSelected": false,
                "id": {
                    "ECN": "585539992209265"
                }
            }
        ]
    }
]
})
}

export async function openCRM() {
  fin.me.interop.fireIntent({
"name": "ManageClients",
"context": {
"name": "PORTER FAMILY GW&K",
"type": "wf.household",
"id": {
    "householdId": "47721469"
},
"accounts": [
    {
        "type": "wf.account",
        "name": "FAE96787634",
        "isSelected": false,
        "id": {
            "accountId": "18120043"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96787644",
        "isSelected": false,
        "id": {
            "accountId": "13883837"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96787690",
        "isSelected": false,
        "id": {
            "accountId": "64491188"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96787704",
        "isSelected": false,
        "id": {
            "accountId": "16876839"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96787727",
        "isSelected": false,
        "id": {
            "accountId": "34048129"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96793644",
        "isSelected": false,
        "id": {
            "accountId": "49795727"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96793664",
        "isSelected": false,
        "id": {
            "accountId": "52820932"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96793731",
        "isSelected": false,
        "id": {
            "accountId": "62551871"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96793802",
        "isSelected": false,
        "id": {
            "accountId": "75281460"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96793808",
        "isSelected": false,
        "id": {
            "accountId": "75809415"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96799301",
        "isSelected": false,
        "id": {
            "accountId": "85295631"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96799314",
        "isSelected": false,
        "id": {
            "accountId": "88647259"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96799361",
        "isSelected": false,
        "id": {
            "accountId": "13883837"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96799362",
        "isSelected": false,
        "id": {
            "accountId": ""
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96799373",
        "isSelected": false,
        "id": {
            "accountId": "18120043"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96799374",
        "isSelected": false,
        "id": {
            "accountId": ""
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96799398",
        "isSelected": false,
        "id": {
            "accountId": "64491188"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96799399",
        "isSelected": false,
        "id": {
            "accountId": "64491188"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96809222",
        "isSelected": false,
        "id": {
            "accountId": "34048129"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96809223",
        "isSelected": false,
        "id": {
            "accountId": "34048129"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96809229",
        "isSelected": false,
        "id": {
            "accountId": "16876839"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96809230",
        "isSelected": false,
        "id": {
            "accountId": "16876839"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96809270",
        "isSelected": false,
        "id": {
            "accountId": "43090048"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96809304",
        "isSelected": false,
        "id": {
            "accountId": "52820932"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96809305",
        "isSelected": false,
        "id": {
            "accountId": ""
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96809323",
        "isSelected": false,
        "id": {
            "accountId": "49795727"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96809381",
        "isSelected": false,
        "id": {
            "accountId": "62551871"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96813653",
        "isSelected": false,
        "id": {
            "accountId": "75281460"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96813654",
        "isSelected": false,
        "id": {
            "accountId": "75281460"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96813669",
        "isSelected": false,
        "id": {
            "accountId": "88647259"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96813670",
        "isSelected": false,
        "id": {
            "accountId": ""
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96813671",
        "isSelected": false,
        "id": {
            "accountId": "75809415"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96813672",
        "isSelected": false,
        "id": {
            "accountId": "75809415"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96813700",
        "isSelected": false,
        "id": {
            "accountId": "85295631"
        }
    },
    {
        "type": "wf.account",
        "name": "FAE96813701",
        "isSelected": false,
        "id": {
            "accountId": ""
        }
    }
],
"contacts": [
    {
        "type": "fdc3.contact",
        "name": "Porter Family PORTER FAMILY GW&K",
        "isSelected": false,
        "id": {
            "ECN": null
        }
    },
    {
        "type": "fdc3.contact",
        "name": "RANDALL PORTER",
        "isSelected": false,
        "id": {
            "ECN": "500451811845516"
        }
    },
    {
        "type": "fdc3.contact",
        "name": "DEREK A PORTER",
        "isSelected": false,
        "id": {
            "ECN": "585539992209265"
        }
    }
]
}})
}

export async function openCopilot(){
    fin.me.interop.fireIntent({
"name": "OpenCopilot",
"context": {
      "type": ""
    }
})
    }

export async function openPage(){
    fin.me.interop.fireIntent({
"name": "ViewPage",
"context": [
    {
        "id": {
            "ticker": "AAPL"
        },
        "type": "fdc3.instrument"
    },
    {
        "name": "PORTER FAMILY GW&K",
        "type": "wf.household",
        "id": {
            "householdId": "47721469"
        },
        "accounts": [
            {
                "type": "wf.account",
                "name": "FAE96787634",
                "isSelected": false,
                "id": {
                    "accountId": "18120043"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96787644",
                "isSelected": false,
                "id": {
                    "accountId": "13883837"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96787690",
                "isSelected": false,
                "id": {
                    "accountId": "64491188"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96787704",
                "isSelected": false,
                "id": {
                    "accountId": "16876839"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96787727",
                "isSelected": false,
                "id": {
                    "accountId": "34048129"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96793644",
                "isSelected": false,
                "id": {
                    "accountId": "49795727"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96793664",
                "isSelected": false,
                "id": {
                    "accountId": "52820932"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96793731",
                "isSelected": false,
                "id": {
                    "accountId": "62551871"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96793802",
                "isSelected": false,
                "id": {
                    "accountId": "75281460"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96793808",
                "isSelected": false,
                "id": {
                    "accountId": "75809415"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96799301",
                "isSelected": false,
                "id": {
                    "accountId": "85295631"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96799314",
                "isSelected": false,
                "id": {
                    "accountId": "88647259"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96799361",
                "isSelected": false,
                "id": {
                    "accountId": "13883837"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96799362",
                "isSelected": false,
                "id": {
                    "accountId": ""
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96799373",
                "isSelected": false,
                "id": {
                    "accountId": "18120043"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96799374",
                "isSelected": false,
                "id": {
                    "accountId": ""
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96799398",
                "isSelected": false,
                "id": {
                    "accountId": "64491188"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96799399",
                "isSelected": false,
                "id": {
                    "accountId": "64491188"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96809222",
                "isSelected": false,
                "id": {
                    "accountId": "34048129"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96809223",
                "isSelected": false,
                "id": {
                    "accountId": "34048129"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96809229",
                "isSelected": false,
                "id": {
                    "accountId": "16876839"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96809230",
                "isSelected": false,
                "id": {
                    "accountId": "16876839"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96809270",
                "isSelected": false,
                "id": {
                    "accountId": "43090048"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96809304",
                "isSelected": false,
                "id": {
                    "accountId": "52820932"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96809305",
                "isSelected": false,
                "id": {
                    "accountId": ""
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96809323",
                "isSelected": false,
                "id": {
                    "accountId": "49795727"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96809381",
                "isSelected": false,
                "id": {
                    "accountId": "62551871"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96813653",
                "isSelected": false,
                "id": {
                    "accountId": "75281460"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96813654",
                "isSelected": false,
                "id": {
                    "accountId": "75281460"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96813669",
                "isSelected": false,
                "id": {
                    "accountId": "88647259"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96813670",
                "isSelected": false,
                "id": {
                    "accountId": ""
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96813671",
                "isSelected": false,
                "id": {
                    "accountId": "75809415"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96813672",
                "isSelected": false,
                "id": {
                    "accountId": "75809415"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96813700",
                "isSelected": false,
                "id": {
                    "accountId": "85295631"
                }
            },
            {
                "type": "wf.account",
                "name": "FAE96813701",
                "isSelected": false,
                "id": {
                    "accountId": ""
                }
            }
        ],
        "contacts": [
            {
                "type": "fdc3.contact",
                "name": "Porter Family PORTER FAMILY GW&K",
                "isSelected": false,
                "id": {
                    "ECN": null
                }
            },
            {
                "type": "fdc3.contact",
                "name": "RANDALL PORTER",
                "isSelected": false,
                "id": {
                    "ECN": "500451811845516"
                }
            },
            {
                "type": "fdc3.contact",
                "name": "DEREK A PORTER",
                "isSelected": false,
                "id": {
                    "ECN": "585539992209265"
                }
            }
        ]
    }
]
})
}
