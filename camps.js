const camps = [
    {
        day: 1,
        description: "Grense Jakobselv",
        lat: 69.79161850631041,
        lng: 30.795464330785393
    },
    {
        day: 1,
        description: "Første skarvatn",
        lat: 69.7240242,
        lng: 30.8267857
    },
    {
        day: 2,
        description: "",
        lat: 69.71642945116132,
        lng: 30.514250354080694
    },
    {
        day: "3 og 4",
        description: "Rundvatnet",
        lat: 69.68317495716636,
        lng: 30.091022756909457
    },
    {
        day: 5,
        description: "Stongarholmvannet",
        lat: 69.68259,
        lng: 29.70797
    },
    {
        day: 6,
        description: "Rasteplass ved Neidenelva",
        lat: 69.69320246746315,
        lng: 29.36820707577495
    },
    {
        day: 7,
        description: "Ved vann der jeg fikk en ørret",
        lat: 69.72434,
        lng: 29.07869
    },
    {
        day: 8,
        description: "Usikker",
        lat: 69.78679,
        lng: 28.81145
    },
    {
        day: 9,
        description: "Usikker",
        lat: 69.86604,
        lng: 28.65193
    },
    {
        day: 10,
        description: "Usikker",
        lat: 69.98404,
        lng: 28.35585
    },
    {
        day: 11,
        description: "",
        lat: 70.0297,
        lng: 28.20085
    },
    {
        day: "12, 13, 14, 15 og 16",
        description: "Tana bru Hotell og Camping",
        lat: 70.19929013020341,
        lng: 28.190828653445408
    },
    {
        day: 17,
        description: "Usikker",
        lat: 70.09155438587871,
        lng: 27.924499511718754
    },
    {
        day: 18,
        description: "Usikker - Nede ved Tanaelva",
        lat: 70.01964882165592,
        lng: 27.40402221679688
    },
    {
        day: 19,
        description: "Usikker",
        lat: 69.93666125577428,
        lng: 27.139663696289062
    },
    {
        day: 20,
        description: "Usikker",
        lat: 69.9609342484455,
        lng: 26.822871195209377
    },
    {
        day: 21,
        description: "Mihkkaljávri - Vannet rett ved Levajok fjellstue der jeg fikk 2 røyer",
        lat: 69.90718110606214,
        lng: 26.416257439615
    },
    {
        day: 22,
        description: "Usikker",
        lat: 69.76397992890178,
        lng: 26.168371706046404
    },
    {
        day: 23,
        description: "Usikker",
        lat: 69.67155,
        lng: 25.86648
    },
    {
        day: 24,
        description: "Usikker - Vann jeg fikk 6 abbor i",
        lat: 69.58581,
        lng: 25.75308
    },
    {
        day: "25, 26 og 27",
        description: "Karasjok",
        lat: 69.46847,
        lng: 25.54025
    },
    {
        day: 28,
        description: "Usikker",
        lat: 69.42111012302173,
        lng: 24.747167684613217
    },
    {
        day: 29,
        description: "Vuottašjávri",
        lat: 69.37986091352091,
        lng: 24.057463193702027
    },
    {
        day: 30,
        description: "Langs veien der Queen spiste fisk til frokost",
        lat: 69.20646141263522,
        lng: 23.691906998203702
    },
    {
        day: 31,
        description: "Čábardasjohka kraftverk - der Queen bæsjet ut teltet",
        lat: 69.0776123946213,
        lng: 23.194308382080703
    },
    {
        day: 32,
        description: "Rett der stien startet fra asfaltveien etter Kauto",
        lat: 69.07146,
        lng: 22.80641
    },
    {
        day: 33,
        description: "Rett før det store vannet der jeg traff Jildau",
        lat: 69.18124,
        lng: 22.49709
    },
    {
        day: 34,
        description: "Nedrefosshytta",
        lat: 69.32021,
        lng: 21.96634
    },
    {
        day: 35,
        description: "Mollisfossen",
        lat: 69.35571,
        lng: 21.82941
    },
    {
        day: 36,
        description: "Saraelv",
        lat: 69.4484,
        lng: 21.54303
    },
    {
        day: 37,
        description: "Čárajávri - Vannet etter reisadalen I tåka",
        lat: 69.39835,
        lng: 21.51746
    },
    {
        day: 38,
        description: "Pihtsusjärvi - Hytta rett ved Haldi",
        lat: 69.23072,
        lng: 21.28856
    },
    {
        day: 39,
        description: "En hytte mellom forrige og Kilpisjarvi",
        lat: 69.1023,
        lng: 21.20744
    },
    {
        day: 40,
        description: "Kilspisjarvi",
        lat: 69.01573,
        lng: 20.89588
    },
    {
        day: 41,
        description: "Goldahytta",
        lat: 69.07416,
        lng: 20.50376
    },
    {
        day: 42,
        description: "Isdalen",
        lat: 68.97076,
        lng: 20.09105
    },
    {
        day: 43,
        description: "Dærtahytta",
        lat: 68.8196,
        lng: 20.10838
    },
    {
        day: 44,
        description: "Dividalshytta",
        lat: 68.6757,
        lng: 19.82106
    },
    {
        day: 45,
        description: "Voulimus",
        lat: 68.66824,
        lng: 19.41844
    },
    {
        day: 46,
        description: "Salvaskardet - Elv som forsvant i et hull",
        lat: 68.63386,
        lng: 18.87196
    },
    {
        day: 47,
        description: "Pålnostugan",
        lat: 68.49356,
        lng: 18.61376
    },
    {
        day: "48 og 49",
        description: "Abisko",
        lat: 68.35874,
        lng: 18.78405
    },
    {
        day: 50,
        description: "Alesjaure",
        lat: 68.13671,
        lng: 18.41327
    },
    {
        day: 51,
        description: "Litt innpå stien jeg tok av fra Kungsleden",
        lat: 67.94314,
        lng: 18.03967
    },
    {
        day: 52,
        description: "Autajaure - Vann",
        lat: 67.79406,
        lng: 17.60629
    },
    {
        day: 53.5,
        description: "Mellomstopp for å vente på natten",
        lat: 67.60673,
        lng: 17.09936
    },
    {
        day: 53,
        description: "Voujatädno - der jeg lager mat på bål og venter på natten",
        lat: 67.52261,
        lng: 16.8803
    },
    {
        day: 54,
        description: "Stáloluokta - Rett etter samelandsby",
        lat: 67.30479,
        lng: 16.70302
    },
    {
        day: 55,
        description: "Sorjushytta",
        lat: 67.20692,
        lng: 16.25821
    },
    {
        day: 56,
        description: "Midt i Sulitjelma bak Coopen",
        lat: 67.133596,
        lng: 16.071925
    },
    {
        day: 57,
        description: "Tjoarvihytta",
        lat: 66.99482,
        lng: 15.96771
    },
    {
        day: 58,
        description: "Argaladhytta",
        lat: 66.84823,
        lng: 15.78753
    },
    {
        day: 59,
        description: "Lønsstua",
        lat: 66.73618,
        lng: 15.46799
    },
    {
        day: 60,
        description: "Bolnastua",
        lat: 66.4932,
        lng: 15.23935
    },
    {
        day: 61,
        description: "Virvasshytta",
        lat: 66.30823,
        lng: 15.36365
    },
    {
        day: 62,
        description: "Kvitsteindalstunet",
        lat: 66.18438,
        lng: 15.05208
    },
    {
        day: 63,
        description: "Umbukta fjellstue",
        lat: 66.16456,
        lng: 14.58633
    },
    {
        day: 64,
        description: "Gressvasshytta",
        lat: 66.04497,
        lng: 14.4236
    },
    {
        day: 65,
        description: "Sivertgården",
        lat: 65.81417,
        lng: 14.38352
    },
    {
        day: 66,
        description: "Kruttvannshytta",
        lat: 65.70068,
        lng: 14.44404
    },
    {
        day: 67,
        description: "4-5km etter Hattfjelldal",
        lat: 65.59538936982378,
        lng: 13.91648194852612
    },
    {
        day: 68,
        description: "Et jorde ca 25 km etter forrige - Usikker",
        lat: 65.51847072025302,
        lng: 13.626902938558583
    },
    {
        day: 69,
        description: "Usikker",
        lat: 65.15865814439724,
        lng: 13.362080364559697
    },
    {
        day: 70,
        description: "Usikker, men etter Nordlandsporten",
        lat: 64.99580002076782,
        lng: 13.244414913711271
    },
    {
        day: 71,
        description: "Det skuret ved jernbanen",
        lat: 64.768296,
        lng: 12.872002
    },
    {
        day: 72,
        description: "Usikker",
        lat: 64.58156732917978,
        lng: 12.553868801244407
    },
    {
        day: 73,
        description: "30-35km etter forrige",
        lat: 64.40441618061385,
        lng: 12.326109399574415
    },
    {
        day: 74,
        description: "Noen km utenfor Snåsa Coopen",
        lat: 64.23474994796113,
        lng: 12.3283774407893
    },
    {
        day: 75,
        description: "Utenfor en statskoghytte før stien til Setertjønnhytta",
        lat: 64.109685,
        lng: 12.32702
    },
    {
        day: 76,
        description: "Setertjønnhytta",
        lat: 63.99563,
        lng: 12.31311
    },
    {
        day: 77,
        description: "Ca midt mellom Setertjønnhytta og Innstua",
        lat: 63.84139,
        lng: 12.32072
    },
    {
        day: 78,
        description: "Innstua - 3km sør for Bellingstua. Ved Varghiet camping",
        lat: 63.657996909994786,
        lng: 12.250899347264273
    },
    {
        day: 79,
        description: "Ferslia hytte",
        lat: 63.54256,
        lng: 11.9418
    },
    {
        day: 80,
        description: "Et sted etter Meråker",
        lat: 63.30474,
        lng: 11.84136
    },
    {
        day: 81,
        description: "Par km før Schulzhytta",
        lat: 63.22108,
        lng: 11.5534
    },
    {
        day: 82,
        description: "Græsslihytta",
        lat: 63.0701353,
        lng: 11.4720801
    },
    {
        day: 83,
        description: "",
        lat: 62.926085,
        lng: 11.192982
    },
    {
        day: 84,
        description: "",
        lat: 62.798064,
        lng: 11.326878
    },
    {
        day: 85,
        description: "Kvitsanden",
        lat: 62.5822296,
        lng: 11.3670897
    },
    {
        day: 86,
        description: "Gammelbrua",
        lat: 62.415271,
        lng: 11.018349
    },
    {
        day: 87,
        description: "Usikker",
        lat: 62.22940560926101,
        lng: 10.66495656967163
    },
    {
        day: 88,
        description: "",
        lat: 62.0882,
        lng: 10.42892
    },
    {
        day: 89,
        description: "Strømbu",
        lat: 61.921605,
        lng: 10.052866
    },
    {
        day: 90,
        description: "Eldåbu",
        lat: 61.7561940199299,
        lng: 9.97938052118057
    },
    {
        day: 91,
        description: "Harpefoss",
        lat: 61.57703261333219,
        lng: 9.872061832309742
    },
    {
        day: 92,
        description: "Litt etter Vinstra",
        lat: 61.55264415004901,
        lng: 9.698103105639726
    },
    {
        day: 93,
        description: "Usikker",
        lat: 61.373486057726325,
        lng: 9.730594208207457
    },
    {
        day: 94,
        description: "Usikker",
        lat: 61.22767,
        lng: 9.57283
    },
    {
        day: 95,
        description: "Usikker",
        lat: 61.15165,
        lng: 9.46731
    },
    {
        day: 96,
        description: "Fagernes",
        lat: 60.967,
        lng: 9.29006
    },
    {
        day: 97,
        description: "Usikker",
        lat: 60.744178,
        lng: 8.987696
    },
    {
        day: 98,
        description: "Usikker",
        lat: 60.655298726766716,
        lng: 8.79463876255634
    },
    {
        day: 99,
        description: "Usikker",
        lat: 60.576939140212474,
        lng: 8.342924477811977
    },
    {
        day: 100,
        description: "",
        lat: 60.465644,
        lng: 8.165953
    },
    {
        day: 101,
        description: "Usikker",
        lat: 60.29561,
        lng: 7.90878
    },
    {
        day: 102,
        description: "Sandhaug",
        lat: 60.18419,
        lng: 7.48168
    },
    {
        day: 103,
        description: "Litlos",
        lat: 60.0933,
        lng: 7.13777
    },
    {
        day: 104,
        description: "Hellevassbu",
        lat: 59.98324,
        lng: 7.21521
    },
    {
        day: 105,
        description: "Haukeliseter Fjellstue",
        lat: 59.82406,
        lng: 7.19391
    },
    {
        day: 106,
        description: "Utedo på Statkrafthytte",
        lat: 59.72098339732412,
        lng: 7.315092098338796
    },
    {
        day: 107,
        description: "Fiskeplassen i Hovden",
        lat: 59.5353,
        lng: 7.35887
    },
    {
        day: 108,
        description: "Starten av stien til Bossbu",
        lat: 59.314219273392204,
        lng: 7.326290801103231
    },
    {
        day: 109,
        description: "Bossbu",
        lat: 59.18342,
        lng: 7.29405
    },
    {
        day: 110,
        description: "Øyuvsbu",
        lat: 59.02466,
        lng: 7.23676
    },
    {
        day: 111,
        description: "Gaukhei",
        lat: 58.91621,
        lng: 7.30523
    },
    {
        day: 112,
        description: "Utenfor en hytte ved vannet Tjønnæ",
        lat: 58.79689,
        lng: 7.36405
    },
    {
        day: 113,
        description: "",
        lat: 58.54579274104423,
        lng: 7.4030093454562484
    },
    {
        day: 114,
        description: "Trelageret til Hamran kjøkken",
        lat: 58.36127207313218,
        lng: 7.221089925250845
    },
    {
        day: 115,
        description: "",
        lat: 58.11310741935842,
        lng: 7.083646276947883
    },
    {
        day: 116,
        description: "Lindesnes Fyr",
        lat: 57.98243122279565,
        lng: 7.046683925520247
    }
];