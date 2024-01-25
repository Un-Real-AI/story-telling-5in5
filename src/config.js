var config = {
    style: 'mapbox://styles/dianiscaro99/clrpa879i00a601pn32lggvac',
    accessToken: 'pk.eyJ1IjoiZGlhbmlzY2Fybzk5IiwiYSI6ImNsMWNmNmNmbTA3MDQzanA2N3dlYmU5OG4ifQ.UNMmYZx21SXwk0tbrXFw2w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'ÖV42: Das Cockpit für KI-gestützte',
    subtitle: 'Mobilitätsanalyse',
    footer: 'ÖV42 by 42Hacks',
    chapters: [
        {
            id: 'introduction-id',
            alignment: 'fully',
            hidden: false,
            description: 'Das ÖV42 Cockpit wurde im Rahmen von 5-in-5 entwickelt, um Entscheidungsträgern eine datengestützte Grundlage für die Verkehrsanalyse und Planung zu bieten. Die Plattform analysiert Verkehrsströme und berechnet mögliche Massnahmen für einen Modal Split Shift vom MIV zu ÖV und LV auf Micro-, Meso- und Macroebene.<br/>Micro - Betriebsebene (schwerpunkt 5-in-5 Bericht)<br/>Meso - Cluster Ebene (lokaler Verkehr, Staus)<br/>Macro - Entscheidungshilfen für nationale Verkehrsplanung (Autobahnausbau, integrale Mobilitätsplanung)',
            image: './images/platform.png',
            location: {
                center: [8.40073, 47.02967],
                zoom: 7.5,
                pitch: 0.001,
                bearing: 0.0001
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '1-tiles',
                    opacity: 0,
                },
                {
                    layer: 'outline-1-tiles',
                    opacity: 0,
                },
                {
                    layer: '100-tiles',
                    opacity: 0,
                },
                {
                    layer: 'outline-100-tiles',
                    opacity: 0,
                },
                {
                    layer: '1000-tiles',
                    opacity: 0,
                },
                {
                    layer: 'outline-1000-tiles',
                    opacity: 0,
                },
                {
                    layer: '42000-tiles',
                    opacity: 0,
                },
                {
                    layer: 'outline-42000-tiles',
                    opacity: 0,
                },
                {
                    layer: 'line-buhler-trips',
                    opacity: 0,
                },
                {
                    layer: 'line-buhler-trips-dashed',
                    opacity: 0,
                },
                {
                    layer: 'b2b-sq-buhler',
                    opacity: 0,
                },
                {
                    layer: 'outline-b2b-sq-buhler',
                    opacity: 0,
                },
                {
                    layer: 'b2b-measures-buhler',
                    opacity: 0,
                },
                {
                    layer: 'outline-b2b-measures-buhler',
                    opacity: 0,
                },
                {
                    layer: 'outline-line-green-train',
                    opacity: 0,
                },
                {
                    layer: 'outline-line-green-car',
                    opacity: 0,
                },
                {
                    layer: 'background-line-red-trains',
                    opacity: 0,
                },
                {
                    layer: 'background-line-red-car',
                    opacity: 0,
                },
                {
                    layer: 'background-line-green-train',
                    opacity: 0,
                },
                {
                    layer: 'background-line-green-car',
                    opacity: 0,
                },
                {
                    layer: 'outline-line-red-train',
                    opacity: 0,
                },
                {
                    layer: 'outline-line-red-car',
                    opacity: 0,
                },
                {
                    layer: 'companies-heat',
                    opacity: 0,
                },
                {
                    layer: 'line-background-trips-hotspots',
                    opacity: 0,
                },
                {
                    layer: 'line-dashed-trips-hotspots',
                    opacity: 0,
                },
                {
                    layer: 'potentials-3d',
                    opacity: 0,
                },
                {
                    layer: 'b2b-mid1-buhler',
                    opacity: 0,
                },
                {
                    layer: 'outline-b2b-mid1-buhler',
                    opacity: 0,
                },
                {
                    layer: 'b2b-mid2-buhler',
                    opacity: 0,
                },
                {
                    layer: 'outline-b2b-mid2-buhler',
                    opacity: 0,
                }
                , {
                    layer: 'b2b-mid3-buhler',
                    opacity: 0,
                },
                {
                    layer: 'outline-b2b-mid3-buhler',
                    opacity: 0,
                }
            ],
            onChapterExit: [
                {
                    layer: 'line-background',
                    opacity: 1,
                },
                {
                    layer: 'line-dashed',
                    opacity: 1,
                },
                {
                    layer: '1-tiles',
                    opacity: 0,
                },
                {
                    layer: 'outline-1-tiles',
                    opacity: 0,
                },
                {
                    layer: '100-tiles',
                    opacity: 0,
                },
                {
                    layer: 'outline-100-tiles',
                    opacity: 0,
                },
                {
                    layer: '1000-tiles',
                    opacity: 0,
                },
                {
                    layer: 'outline-1000-tiles',
                    opacity: 0,
                },
                {
                    layer: '42000-tiles',
                    opacity: 0,
                },
                {
                    layer: 'outline-42000-tiles',
                    opacity: 0,
                },
                {
                    layer: 'line-buhler-trips',
                    opacity: 0,
                },
                {
                    layer: 'line-buhler-trips-dashed',
                    opacity: 0,
                },
                {
                    layer: 'b2b-sq-buhler',
                    opacity: 0,
                },
                {
                    layer: 'outline-b2b-sq-buhler',
                    opacity: 0,
                },
                {
                    layer: 'b2b-measures-buhler',
                    opacity: 0,
                },
                {
                    layer: 'outline-b2b-measures-buhler',
                    opacity: 0,
                },
                {
                    layer: 'outline-line-green-train',
                    opacity: 0,
                },
                {
                    layer: 'outline-line-green-car',
                    opacity: 0,
                },
                {
                    layer: 'background-line-red-trains',
                    opacity: 0,
                },
                {
                    layer: 'background-line-red-car',
                    opacity: 0,
                },
                {
                    layer: 'background-line-green-train',
                    opacity: 0,
                },
                {
                    layer: 'background-line-green-car',
                    opacity: 0,
                },
                {
                    layer: 'outline-line-red-train',
                    opacity: 0,
                },
                {
                    layer: 'outline-line-red-car',
                    opacity: 0,
                },
                {
                    layer: 'companies-heat',
                    opacity: 0,
                },
                {
                    layer: 'line-background-trips-hotspots',
                    opacity: 0,
                },
                {
                    layer: 'line-dashed-trips-hotspots',
                    opacity: 0,
                },
                {
                    layer: 'potentials-3d',
                    opacity: 0,
                },
                {
                    layer: 'b2b-mid1-buhler',
                    opacity: 0,
                },
                {
                    layer: 'outline-b2b-mid1-buhler',
                    opacity: 0,
                },
                {
                    layer: 'b2b-mid2-buhler',
                    opacity: 0,
                },
                {
                    layer: 'outline-b2b-mid2-buhler',
                    opacity: 0,
                }
                , {
                    layer: 'b2b-mid3-buhler',
                    opacity: 0,
                },
                {
                    layer: 'outline-b2b-mid3-buhler',
                    opacity: 0,
                }
            ],
        },
        {
            id: '1-id',
            alignment: 'left',
            hidden: false,
            title: 'KI-gestützte Verkehrsstromanalyse',
            description: 'Das ÖV42 Cockpit nutz Swisscom Mobilitätsdaten, um historische und aktuelle Verkehrsströme in der Schweiz zu analysieren.',
            location: {
                center: [7.20273, 47.00095],
                zoom: 7.5,
                pitch: 0.001,
                bearing: 0.0001
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                
            ],
            onChapterExit: [
                {
                    layer: 'line-background',
                    opacity: 0,
                },
                {
                    layer: 'line-dashed',
                    opacity: 0,
                }
            ]
        },
        {
            id: '2-id',
            alignment: 'left',
            hidden: false,
            title: 'Akkurate Modal Split Berechnung',
            image: './images/ms_switzerland.png',
            description:'Die KI-gestützte Datenanalyse erlaubt es, den Modal Split für alle Verbindungen der Schweiz zu etablieren.<br/><table style="margin:auto; table-layout:fixed; padding:0px; text-align:center; vertical-align:middle;"><tr><td>Niedrigerer Modal Split</td><td><div style="background:linear-gradient(0.25turn, #fa772a,#FF8F4F,#3fd044, #5b8472); float:left; padding: 10px; width: 70px; "></td><td>Höherer Modal Split</td></tr></table>',
            location: {
                center: [7.20273, 47.00095],
                zoom: 7.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'line-background-trips-hotspots',
                    opacity: 1,
                },
                {
                    layer: 'line-dashed-trips-hotspots',
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: 'line-background-trips-hotspots',
                    opacity: 0,
                },
                {
                    layer: 'line-dashed-trips-hotspots',
                    opacity: 0,
                }
            ]
        },
        {
            id: '3-id',
            alignment: 'left',
            hidden: false,
            title: 'Verkehrs-Hotspots erkennen',
            description: 'Das Cockpit analysiert Verkehrsströme und identifiziert Verkehrs-Hotspots auf einem schweizweitem Raster (42\'000 1km<sup>2</sup> Kacheln).',
            location: {
                center: [7.20273, 47.00095],
                zoom: 7.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '42000-tiles',
                    opacity: 0.4,
                },
                {
                    layer: 'outline-42000-tiles',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: '42000-tiles',
                    opacity: 0,
                },
                {
                    layer: 'outline-42000-tiles',
                    opacity: 0,
                }
            ]
        },
        {
            id: '3-a-id',
            alignment: 'right',
            hidden: false,
            title: 'Kleine Fläche - Grosser Impact',
            description: '<b>Nummer 1 Verkehrs-Hotspot (Bern, 3011).</b><br/>Anteil am Schweizer Gesamtverkehr: 0.85%<br/>Anteil am Schweizer MIV: 0.3%',
            location: {
                center: [7.45915, 46.94816],
                zoom: 14.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '1-tiles',
                    opacity: 0.4,
                },
                {
                    layer: 'outline-1-tiles',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: '1-tiles',
                    opacity: 0,
                },
                {
                    layer: 'outline-1-tiles',
                    opacity: 0,
                }
            ]
        },
        {
            id: '3-b-id',
            alignment: 'right',
            hidden: false,
            title: 'Top 100 Verkehrs-Hotspots',
            description: 'Anteil am Schweizer Gesamtverkehr: 27.5%<br/> Anteil am Schweizer MIV: 11.7%',
            location: {
                center: [9.71192, 46.92954],
                zoom: 7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '100-tiles',
                    opacity: 0.4,
                },
                {
                    layer: 'outline-100-tiles',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: '100-tiles',
                    opacity: 0,
                },
                {
                    layer: 'outline-100-tiles',
                    opacity: 0,
                }
            ]
        },
        {
            id: '3-c-id',
            alignment: 'right',
            hidden: false,
            title: 'Top 1\'000 Verkehrs-Hotspots',
            description: 'Anteil am Schweizer Gesamtverkehr: 66.5%<br/>Anteil am Schweizer MIV: 36%',
            location: {
                center: [9.71192, 46.92954],
                zoom: 7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: '1000-tiles',
                    opacity: 0.4,
                },
                {
                    layer: 'outline-1000-tiles',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: '1000-tiles',
                    opacity: 0,
                },
                {
                    layer: 'outline-1000-tiles',
                    opacity: 0,
                }
            ]
        },
        {
            id: '4-id',
            alignment: 'right',
            hidden: false,
            title: 'Primäre Verkehrsquellen erkennen',
            description: 'Für jeden Verkehrs-Hotspot kann das Cockpit die Hauptverkehrsquellen errechnen, und kategorisieren, und so, zum Beispiel die Top 1\'000 Arbeitgeber Verkehrs-Hotspots identifizieren.',
            image: './images/pareto.png',
            location: {
                center: [9.71192, 46.92954],
                zoom: 7,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'companies-heat',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'companies-heat',
                    opacity: 0,
                }
            ]
        },
        {
            id: '5-id',
            alignment: 'left',
            hidden: false,
            title: 'Zooming in: Hauptverkehrsquellen',
            description: 'Das ÖV42 Cockpit analysiert Verkehrsströme mit hoher räumlicher Genauigkeit und kann auf signifikante Verkehrsquellen heranzoomen. Hier am Beispiel der Bühler AG illustriert.',
            location: {
                center: [9.13579, 47.44005],
                zoom: 16.50,
                pitch: 83,
                bearing: -52.82
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: '6-id',
            alignment: 'left',
            hidden: false,
            title: 'Pendlerverkehr in Bild bringen: Bühler AG',
            description:'Routing-Algorithmen erlauben es, den Pendlerverkehr einzelner Verkehrsverursacher detailliert zu erfassen, inklusive Anzahl der Trips, Ursprungsorte und Verkehrsmittelwahl.<hr/>Anzahl Trips pro Jahr: 21\'984<br/>ÖV-Modal Split: 20%',
            location: {
                center: [8.63724, 47.48068],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'line-buhler-trips',
                    opacity: 0.2,
                },
                {
                    layer: 'line-buhler-trips-dashed',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'line-buhler-trips',
                    opacity: 0,
                },
                {
                    layer: 'line-buhler-trips-dashed',
                    opacity: 0,
                }
            ]
        },
        {
            id: '7-a-id',
            alignment: 'left',
            hidden: false,
            title: 'ÖV und LV Qualität: Grün',
            description:'Ein Trip wird als "grün" eingestuft, wenn die Reisezeit mit ÖV und LV nicht mehr als 30% langsamer als die Autoreisezeit ist und nicht mehr einen Umstieg erfordert.<table style="margin:auto; table-layout:fixed; padding:0px; text-align:center; vertical-align:middle;"><tr><td>Fahrstrecke</td><td><div style="background:#395b8c; float:left; padding: 10px; width: 70px; "></td><td>ÖV-Strecke</td><td><div style="background:#037302; float:left; padding: 10px; width: 70px; "></td></tr></table>',
            location: {
                center: [8.78956, 47.49491],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'outline-line-green-train',
                    opacity: 1,
                },
                {
                    layer: 'outline-line-green-car',
                    opacity: 1,
                },
                {
                    layer: 'background-line-green-train',
                    opacity: 1,
                },
                {
                    layer: 'background-line-green-car',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'outline-line-green-train',
                    opacity: 0,
                },
                {
                    layer: 'outline-line-green-car',
                    opacity: 0,
                },
                {
                    layer: 'background-line-green-train',
                    opacity: 0,
                },
                {
                    layer: 'background-line-green-car',
                    opacity: 0,
                }
            ]
        },
        {
            id: '7-b-id',
            alignment: 'left',
            hidden: false,
            title: 'ÖV und LV Qualität: Gelb und Rot',
            description:'Ein Trip wird als "gelb" eingestuft, wenn die öffentlichen Verkehrsmittel die Reisezeit des Autos mit 100% überschreiten und/oder mehr als zwei Umstiege erfordern.<hr/>Ein Trip wird als "rot" eingestuft, wenn die öffentlichen Verkehrsmittel die Reisezeit des Autos deutlich überschreiten und zahlreiche Umstiege erfordern.<table style="margin:auto; table-layout:fixed; padding:0px; text-align:center; vertical-align:middle;"><tr><td>Fahrstrecke</td><td><div style="background:#395b8c; float:left; padding: 10px; width: 70px; "></td><td>ÖV-Strecke</td><td><div style="background:#b01922; float:left; padding: 10px; width: 70px; "></td></tr></table>',
            location: {
                center: [8.63724, 47.48068],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'outline-line-red-train',
                    opacity: 1,
                },
                {
                    layer: 'outline-line-red-car',
                    opacity: 1,
                },
                {
                    layer: 'background-line-red-trains',
                    opacity: 1,
                },
                {
                    layer: 'background-line-red-car',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'outline-line-red-train',
                    opacity: 0,
                },
                {
                    layer: 'outline-line-red-car',
                    opacity: 0,
                },
                {
                    layer: 'background-line-red-trains',
                    opacity: 0,
                },
                {
                    layer: 'background-line-red-car',
                    opacity: 0,
                }
            ]
        },
        {
            id: '7-id',
            alignment: 'left',
            hidden: false,
            title: 'ÖV und LV Qualität erfassen',
            description:'Die KI berechnet für jeden Arbeitsweg die Qualität der ÖV und LV Alternativen im Vergleich zum Auto und schlägt Massnahmen zur Verbesserung der Qualität vor.<br/><b>Status Quo (Bühler AG)<b/><br/><table style="margin:auto; table-layout:fixed; padding:0px; text-align:center; vertical-align:middle;"><tr><th>Qualität</th><th>% der Verbindungen</th></tr><tr><td>Grün, gute ÖV/LV Alternative</td><td>29%</td></tr><tr><td>Gelb, mässige ÖV/LV Alternative</td><td>11%</td></tr><tr><td>Rot, schlechte ÖV/LV Alternative</td><td>60%</td></tr></table>',
            location: {
                center: [8.63724, 47.48068],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'b2b-sq-buhler',
                    opacity: 0.5,
                },
                {
                    layer: 'outline-b2b-sq-buhler',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'b2b-sq-buhler',
                    opacity: 0,
                },
                {
                    layer: 'outline-b2b-sq-buhler',
                    opacity: 0,
                }
            ]
        },
        {
            id: '7-mid1-id',
            alignment: 'left',
            hidden: false,
            title: 'Massnahmen: Last Mile',
            description:'<b>Last Mile:</b> Mobilitätsangebote, die Strecken zwischen dem nächstgelegenen ÖV-Halt und dem Zielort überbrücken.<br/><hr/><b>MIV Reduzierungspotenzial</b> (Bühler AG): 1%',
            location: {
                center: [8.63724, 47.48068],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'b2b-mid1-buhler',
                    opacity: 0.5,
                },
                {
                    layer: 'outline-b2b-mid1-buhler',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'b2b-mid1-buhler',
                    opacity: 0,
                },
                {
                    layer: 'outline-b2b-mid1-buhler',
                    opacity: 0,
                }
            ]
        },
        {
            id: '7-mid2-id',
            alignment: 'left',
            hidden: false,
            title: 'Massnahmen: Arbeitszeitregelungen',
            description:'<b>Arbeitszeitregelungen:</b> Anerkennung von längeren ÖV-Reisezeiten auf dem Arbeitsweg als Arbeitszeit.<br/><hr/><b>MIV Reduzierungspotenzial</b> (Bühler AG): 1%',
            location: {
                center: [8.63724, 47.48068],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'b2b-mid2-buhler',
                    opacity: 0.5,
                },
                {
                    layer: 'outline-b2b-mid2-buhler',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'b2b-mid2-buhler',
                    opacity: 0,
                },
                {
                    layer: 'outline-b2b-mid2-buhler',
                    opacity: 0,
                }
            ]
        },
        {
            id: '7-mid3-id',
            alignment: 'left',
            hidden: false,
            title: 'Massnahmen: Fahrrad',
            description:'<b>Fahrrad:</b> Verbesserung von Fahrradinfrastrukturen und Angeboten.<br/><hr/><b>MIV Reduzierungspotenzial</b> (Bühler AG): 2%',
            location: {
                center: [8.63724, 47.48068],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'b2b-mid3-buhler',
                    opacity: 0.5,
                },
                {
                    layer: 'outline-b2b-mid3-buhler',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'b2b-mid3-buhler',
                    opacity: 0,
                },
                {
                    layer: 'outline-b2b-mid3-buhler',
                    opacity: 0,
                }
            ]
        },
        {
            id: '7-c-id',
            alignment: 'left',
            hidden: false,
            title: 'MIV Reduzierungspotenzial: Vorher/Nachher',
            description:'Die KI berechnet das MIV Reduzierungspotenzial vor und nach Umsetzung der vorgeschlagenen Massnahmen.<br/><hr/>MIV Reduzierungspotenzial (Status Quo): 2%<br/>MIV Reduzierungspotenzial (Nach Umsetzung der Massnahmen, einschliesslich Verhalten und Fahrgemeinschaften): 7%',
            image: './images/ms_prediction_buhler.png',
            location: {
                center: [8.63724, 47.48068],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'b2b-measures-buhler',
                    opacity: 0.5,
                },
                {
                    layer: 'outline-b2b-measures-buhler',
                    opacity: 1,
                }
            ],
            onChapterExit: [
                {
                    layer: 'b2b-measures-buhler',
                    opacity: 0,
                },
                {
                    layer: 'outline-b2b-measures-buhler',
                    opacity: 0,
                }
            ]
        },
        {
            id: '8-id',
            alignment: 'right',
            hidden: false,
            title: 'Massnahmen Potenziale errechnen: Top 100 Arbeitgeber',
            description:'Die KI berechnet das Modal Split Shift Potenzial schweizweit für alle signifikanten Verkehrsquellen. Dies ermöglicht es auf grosse Verkehrserzeuger wie Arbeitgeber, und Arbeitgeber Cluster gezielt zuzugehen, und nachzuvollziehen, welche Verkehrsquellen zu Staus beitragen.',
            location: {
                center: [8.35488, 46.97980],
                zoom: 7.5,
                pitch: 57.8,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'potentials-3d',
                    opacity: 0.8,
                }
            ],
            onChapterExit: [
                {
                    layer: 'potentials-3d',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'conclusion-id',
            alignment: 'center',
            hidden: false,
            title: 'MIV-Reduzierungspotenzial: Top 1000 Arbeitgebercluster',
            description:'Die Top 1000 Arbeitsgebercluster tragen 66.53% zum Schweizer MIV bei.<br/><hr/><b>MIV Reduzierungspotenziale<b/><br/>Total: 6.91%<br/> Last Mile: 0.66%<br/>Arbeitszeitregelungen: 1.14%<br/>Fahrrad: 1.38%<br/>Fahrgemeinschaften: 0.55%',
        image: './images/5in5.png',
            location: {
                center: [8.40073, 47.02967],
                zoom: 7.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
                {
                    layer: 'line-background',
                    opacity: 0,
                },
                {
                    layer: 'line-dashed',
                    opacity: 0,
                }
            ]
        }
    ]
};
