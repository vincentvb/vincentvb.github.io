var config = {
    style: 'mapbox://styles/vincentvanbuskirk/cl18rxvh3000n15tfs17yp9fl',
    accessToken: 'pk.eyJ1IjoidmluY2VudHZhbmJ1c2tpcmsiLCJhIjoiY2wxOHFjajk2MjFiMjNqbjF1bWxsaWt4YiJ9.RX0gnSYBbgZYKkfiXZ0h2g',
    markerColor: '#3FB1CE',
    theme: 'dark',
    // use3dTerrain: false, //set true for enabling 3D maps.
    title: "How Russia's invasion of Ukraine has played out",
    subtitle: "A week into Russia's offensive, where does the conflict stand?",
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'February 2014: Crimea is annexed and Russian insurgency begins',
            image: 'assets/ukraine_2014.jpeg',
            image_description: "Russian troops occupying Crimea",
            description: "Following Ukraine's Euromaiden movement in 2014 that brought into power a pro-western regime, Putin orders the annexation of Crimea. Pro-Russian insurgents in eastern Ukraine are funded and armed by Russia, leading to 8 years of intermittent violence.",
            location: {
                center: [32.76502, 48.72574],
                zoom: 5.31,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ukraine-total',
                    opacity: 0.3,
                },
                {
                    layer: 'russia',
                    opacity: 0.3,
                }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'February 21, 2022: Putin declares Eastern Ukrainian regions independent, sends in troops',
            image: 'assets/putin_speech.jpeg',
            image_description: "Vladimir Putin giving live televised address to the world",
            description: "In a televised speech, Putin pronounces the eastern Ukrainian provinces of Donetsk and Luhansk as independent. In the speech Putin questioned Ukraine's legitimacy as a nation, stating that Ukraine has \"never had stable traditions of real statehood.\" He orders troops to occupy the breakaway regions, claiming it necessary for \"peacekeeping operations.\"",
            location: {
                center: [38.56543, 48.27011],
                zoom: 6.0,
                pitch: 45.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            // rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'ukraine',
                    opacity: 0.8,
                },
            ],
            onChapterExit: [
                {
                    layer: 'ukraine',
                    opacity: 0.0
                }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'February 24, 2022: Putin launches full-scale invasion of Ukraine',
            image: 'assets/kyiv.jpeg',
            image_description: "Aerial view of Kyiv before the war",
            description: "Three days later, Putin announces a \"special military operation\". Explosions are reported throughout the country as Russian troops move into Ukraine on multiple fronts. The capital, Kyiv, is targeted to the north-west as Russian troops are granted free access through Belarus to launch the attack.",
            location: {
                center: [30.74184, 49.46828],
                zoom: 7.0,
                pitch: 45.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            // rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kyiv',
                    opacity: 0.8,
                },
                {
                    layer: 'kyiv-lines',
                    opacity: 1,
                },
                {
                    layer: 'kyiv-points',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'kyiv',
                    opacity: 0.0
                },
                {
                    layer: 'kyiv-lines',
                    opacity: 0.0
                },
                {
                    layer: 'kyiv-points',
                    opacity: 0.0
                }
            ]
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'February 24, 2022: Putin launches full-scale invasion of Ukraine',
            image: 'assets/kharkav.jpeg',
            image_description: "Rubble in Kharkhav following Russian bombardment",
            description: "From the east, Russia strikes at Kharkiv province. The city of Kharkiv itself is heavily shelled, and a massive fire breaks out at the Kharkiv Tractor Plant.",
            location: {
                center: [36.04093, 49.23503],
                zoom: 7.0,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            // rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kharkiv',
                    opacity: 0.8,
                },
                {
                    layer: 'kharkiv-lines',
                    opacity: 1,
                },
                {
                    layer: 'kharkiv-points',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'kharkiv',
                    opacity: 0.0
                },
                {
                    layer: 'kharkiv-lines',
                    opacity: 0.0
                },
                {
                    layer: 'kharkiv-points',
                    opacity: 0.0
                }
            ]
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'February 24, 2022: Putin launches full-scale invasion of Ukraine',
            image: 'assets/kherson.jpeg',
            image_description: "A blown up and burned out car among rubble in Kherson",
            description: "Russia uses Crimea as a launching point for a southern offensive into the Kherson province. Within a week, the city of Kherson was surrounded, with parts of the city under full Russian control.",
            location: {
                center: [33.10341, 46.39235],
                zoom: 7.0,
                pitch: 45.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            // rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'kherson',
                    opacity: 0.8,
                },
                {
                    layer: 'kherson-lines',
                    opacity: 1,
                },
                {
                    layer: 'kherson-points',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'kherson',
                    opacity: 0.0
                },
                {
                    layer: 'kherson-lines',
                    opacity: 0.0
                },
                {
                    layer: 'kherson-points',
                    opacity: 0.0
                }
            ]
        },
        {
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: "February 28, 2022: Russia's initial advance slows and battle lines are drawn",
            image: 'assets/tank.jpeg',
            image_description: "A Ukrainian tank with Ukrainian soldiers splayed on top of it",
            description: "A week into the invasion, Russia has a military presence in 9 out of Ukraine's 24 provinces. Major cities in the east and south have fallen or are on the cusp of doing so, but Kyiv still stands.",
            location: {
                center: [33.25827, 48.18265],
                zoom: 6.0,
                pitch: 45.00,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            // rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'occupied-provinces',
                    opacity: 0.8,
                },
            ],
            onChapterExit: [
                {
                    layer: 'occupied-provinces',
                    opacity: 0.0
                },
            ]
        },  
    ]
};
