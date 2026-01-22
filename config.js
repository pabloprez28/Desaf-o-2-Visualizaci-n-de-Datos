var config = {
    style: 'mapbox://styles/mapbox/dark-v11',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoicGFibG9wcmV6MjgiLCJhIjoiY21rb2VtdDV1MDRsdzNpczk3NXhseDh0MiJ9.OI840-OM1OwJaul2PJ-PKw',
    showMarkers: true,
    markerColor: '#b69d37',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
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
            image: 'https://www.aguilardigital.es/wp-content/uploads/2012/10/nbnm.bmp',
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
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Cabra',
            image: 'https://static.eldiario.es/clip/3e7eea8c-499e-4e84-a8e3-b8455fff3288_16-9-discover-aspect-ratio_default_0.webp',
            description: 'En un edificio situado en la Plaza Calvo Sotelo (actual Plaza Vieja). Operó, al menos, entre agosto de 1938 y abril de 1939. Albergó un máximo de 300 prisioneros.',
            location: {
                center: [-4.445623, 37.472092],
                zoom: 13.5,
                pitch: 0.7,
                bearing: -73.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Cerro Muriano',
            image: 'https://www.loscamposdeconcentraciondefranco.es/img/campos/10.jpg',
            description: 'En las instalaciones militares del mismo nombre. Operó, al menos, entre octubre de 1938 y junio de 1939. En los documentos oficiales no consta que superara los 500 prisioneros. Hoy el recinto forma parte de la Base Militar del Ejército de Tierra.',
            location: {
                center: [-4.781601, 38.017602],
                zoom: 16,
                pitch: 74.01,
                bearing: 10.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Córdoba capital',
            image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhZIF6XJGW2_ixM4BG7k1sRLTscusD3HnJYvJWr2McZr5aQBqaF-MJRWiX0Ai-Xj3b_fGUxvEXNpjsaWpbQJ61c3TrNfCaVI1NMZBpeosLKqDWGb4n7_92AKGCxQR8qRbP7SZPaKL5y2aTV/s1600/prisioneros-haciendo-saludo-fascista-campo-concentracion-irun-guipuzcoa-1552333713898.jpg',
            description: 'En la Iglesia del Buen Pastor y en el Convento de San Cayetano. Operó, al menos, entre marzo de 1938 y agosto de 1939. Superó el millar de prisioneros.',
            location: {
                center: [-4.774806, 37.893094],
                zoom: 13,
                pitch: 52,
                bearing: 0.01
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'La Granjuela',
            image: 'https://static.eldiario.es/clip/af1d7a6b-b2b8-4de4-a216-fa814746c38a_16-9-discover-aspect-ratio_default_0.webp',
            description: 'El pueblo entero fue rodeado con una alambrada y utilizado como campo. Operó entre el 28 de marzo de 1939 y el 11 de octubre de ese año. Albergó más de 8.000 prisioneros.',
            location: {
                center: [-5.351375, 38.371330],
                zoom: 13,
                pitch: 0,
                bearing: 99
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Fuente Obejuna',
            image: 'http://www.ateneodecordoba.com/images/thumb/e/e7/Fuenteobejuna_aerea.jpg/600px-Fuenteobejuna_aerea.jpg',
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
},
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Córdoba la Vieja',
            image: 'https://www.loscamposdeconcentraciondefranco.es/img/campos/12.jpg',
            description: 'Ubicado dentro de la finca Córdoba La Vieja, junto a las ruinas de Medina Azahara. Operó desde, al menos, enero de 1939 hasta finales de noviembre de 1939. Llegó a congregar a unos 4.000 prisioneros.',
            location: {
                center: [-4.870947, 37.891371],
                zoom: 15,
                pitch: 60,
                bearing: -190
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },    
        {
            id: 'Eighth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Los Blázquez',
            image: 'https://www.loscamposdeconcentraciondefranco.es/img/campos/campo_anonimo.jpg',
            description: 'El pueblo entero fue rodeado con una alambrada y utilizado como campo. Operó entre el 28 de marzo de 1939 y, al menos, mayo de ese año. Albergó más de 4.000 prisioneros.',
            location: {
                center: [-5.438411, 38.406800],
                zoom: 16,
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
            id: 'ninth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Lucena',
            image: 'https://arcangelbedmar.com/wp-content/uploads/2016/05/img_20160527_0001-copia.jpg',
            description: 'Situado en las escuelas del convento de los Padres Franciscanos. Operó entre el 12 de julio de 1938 y el 8 de julio de 1939. Superó los 1500 prisioneros, aunque su capacidad era de solo 300.',
            location: {
                center: [-4.486291, 37.411873],
                zoom: 13,
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
            image: 'http://www.ateneodecordoba.com/images/5/57/Montilla_aerea.jpg',
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
            id: 'eleventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Peñarroya-Pueblonuevo',
            image: 'https://scontent.fmad18-1.fna.fbcdn.net/v/t39.30808-6/607065823_26083690837905191_6434991905040127393_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=vmilesFDtSsQ7kNvwEC0ccF&_nc_oc=AdkoTBqQniO2vamnNf9eficsTOG_LtPP4hkJv7wSrB7vi_8zVEkZtenAYQpND0xs-3U&_nc_zt=23&_nc_ht=scontent.fmad18-1.fna&_nc_gid=Q8xC_MUxhxmYZ2TNIGR1ww&oh=00_AfrAYQJEHsNW4fejKBeWsBlH1pNOwfMoNRjtrmhAiahIOA&oe=697727DA',
            description: 'Ubicación desconocida. Operó, al menos, entre mayo y noviembre de 1939.',
            location: {
                center: [-5.268482, 38.299997],
                zoom: 13,
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
            id: 'twelfth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Valsequillo',
            image: 'https://www.loscamposdeconcentraciondefranco.es/img/campos/287.jpg',
            description: 'El pueblo entero fue rodeado con una alambrada y utilizado como campo. Operó entre el 28 de marzo de 1939 y, al menos, junio de ese año.',
            location: {
                center: [-5.351402, 38.405248],
                zoom: 14,
                pitch: 70,
                bearing: -150
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
    id: 'closing',
    alignment: 'center',
    hidden: false,
    title: 'Una historia desconocida',
    description: `
Por los doce campos de concentración que estuvieron operativos en la provincia de Córdoba entre 1938 y 1939
pasaron miles de personas. 
A día de hoy, la mayoría de la población desconoce que en sus pueblos o ciudades existieron centros organizados de represión que se cobraron infinidad de vidas. 
    `,
    location: {
        center: [-4.8, 37.9],
        zoom: 7,
        pitch: 0,
        bearing: 0
    },
    mapAnimation: 'flyTo',
    rotateAnimation: false,
    onChapterEnter: [],
    onChapterExit: []
},
    ]
};
