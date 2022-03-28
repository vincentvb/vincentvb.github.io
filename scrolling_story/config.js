var config = {
    style: 'mapbox://styles/vincentvanbuskirk/cl18rxvh3000n15tfs17yp9fl',
    accessToken: 'pk.eyJ1IjoidmluY2VudHZhbmJ1c2tpcmsiLCJhIjoiY2wxOHFjajk2MjFiMjNqbjF1bWxsaWt4YiJ9.RX0gnSYBbgZYKkfiXZ0h2g',
    markerColor: '#3FB1CE',
    theme: 'dark',
    // use3dTerrain: false, //set true for enabling 3D maps.
    title: "How Russia's invasion of Ukraine has played out",
    subtitle: "After a month into Russia's offensive invasion, how did we get here?",
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'February 2014: Crimea is annexed and Russian insurgency begins',
            image: 'assets/ukraine_2014.jpeg',
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
    ]
};
