var config = {
    style: 'mapbox://styles/mapbox/dark-v11',
    accessToken: 'pk.eyJ1IjoicGFibG9wcmV6MjgiLCJhIjoiY21rZXJtdDV1MDRsdzNpczk3NXhseDh0MiJ9.OI840-OM1OwJaul2PJ-PKw',
    showMarkers: true,
    markerColor: '#b69d37',
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false,
    auto: false,
    title: 'CAMPOS DE CONCENTRACIÓN',
    subtitle: 'Provincia de Córdoba (1938-1939)',
    byline: 'Pablo Pérez Espino',
    footer: 'Fuentes: Desaparición Forzada en Andalucía (https://andalucia.desaparicionforzada.com/cartografias/descarga-de-geodatos/cordoba/) y Los Campos de Concentración de Franco (https://www.loscamposdeconcentraciondefranco.es/campos/10)',
    chapters: [
        {
            id: 'Córdoba',
            alignment: 'center',
            hidden: false,
            title: 'Una red provincial de represión',
            description: `
Tras el estallido de la guerra civil, el franquismo puso en marcha cincuenta y dos campos de concentración en Andalucía. De las ocho provincias, Córdoba fue la que mayor número albergó durante los últimos dos años de conflicto bélico, con un total de doce.

Este mapa reconstruye su alcance territorial y humano.
            `,
            location: {
                center: [-4.8, 37.9],
                zoom: 8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'First graphic-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Vista general Andalucía (1936-1939)',
            description: `
        <iframe
            src="https://public.flourish.studio/visualisation/27321946/embed"
            width="100%"
            height="500"
            frameborder="0"
            scrolling="no"
            style="border: none;">
        </iframe>
    `,
            location: {
                center: [-4.8, 37.9],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Aguilar de la Frontera',
            image: 'images/Aguilar.bmp',
            description: 'Situado en un colegio de nueva construcción en la calle Pozuelo. Operó, al menos, entre junio de 1938 y junio de 1939. No congregó a más de 300 prisioneros.',
            location: {
                center: [-4.655494, 37.518815],
                zoom: 13,
                pitch: 60,
                bearing: 73.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Cabra',
            image: 'images/Cabra.webp',
            description: 'En un edificio situado en la Plaza Calvo Sotelo (actual Plaza Vieja). Operó, al menos, entre agosto de 1938 y abril de 1939. Albergó un máximo de 300 prisioneros.',
            location: {
                center: [-4.445623, 37.472092],
                zoom: 13.5,
                pitch: 0.7,
                bearing: -73.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Fuente Obejuna',
            image: 'images/Fuenteobejuna.jpg',
            description: 'En ubicación desconocida. Operó, al menos, entre julio de 1938 y marzo de 1939. En su punto álgido acumuló cerca de 2.000 prisioneros.',
            location: {
                center: [-5.433091, 38.272161],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tenth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Montilla',
            image: 'images/Montilla_aerea.jpg',
            description: 'Situado en los colegios femeninos Rebaño de María y La Aurora. Operó, al menos, entre agosto de 1938 y julio de 1939. Su máxima ocupación osciló entre los 500 y los 1.000 prisioneros.',
            location: {
                center: [-4.636551, 37.589755],
                zoom: 13,
                pitch: 80,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'graphic-chapter-marimekko',
            alignment: 'fully',
            hidden: false,
            title: 'Distribución de prisioneros por campos',
            description: `
        <iframe
            src="https://public.flourish.studio/visualisation/27329786/embed"
            width="100%"
            height="450"
            frameborder="0"
            scrolling="no"
            style="border:none;">
        </iframe>
    `,
            location: {
                center: [-4.8, 37.9],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
