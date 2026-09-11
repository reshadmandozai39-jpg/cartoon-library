// Alle Cartoon-Daten. Farben sind Platzhalter statt echter Poster-Bilder.
// Ersetze "img" später mit einem echten Bildpfad (z.B. "img: 'bilder/pokemon.jpg'")
// und passe app.js Zeile mit card-thumb an, um <img> statt Farbfläche zu zeigen.

const CARTOONS = [
	// ---------------- KLASSIKER ----------------
	{
		id: 'tomjerry',
		cat: 'klassiker',
		title: 'Tom und Jerry',
		color: '#D96B6B',
		short:
			'Die ewige Jagd zwischen Kater Tom und Maus Jerry – slapstickreich und dialogfrei.',
		long: 'Tom und Jerry ist eine der bekanntesten Zeichentrickserien der Welt. Die stumme Rivalität zwischen dem Kater Tom und der cleveren Maus Jerry begeistert seit den 1940er Jahren Generationen von Zuschauern mit körperbetontem Slapstick-Humor.',
		year: 'seit 1940',
		genre: 'Slapstick-Komödie',
	},
	{
		id: 'tweety',
		cat: 'klassiker',
		title: 'Sylvester &amp; Tweety',
		color: '#F2A93B',
		short:
			'Kater Sylvester versucht ständig, den kleinen Kanarienvogel Tweety zu fangen – erfolglos.',
		long: 'In dieser Looney-Tunes-Reihe jagt der tollpatschige Kater Sylvester unermüdlich den kleinen, aber gerissenen Kanarienvogel Tweety. Jede Episode ist ein Wettlauf aus Fallen, Missgeschicken und komischer Situationskomik.',
		year: 'seit 1942',
		genre: 'Slapstick-Komödie',
	},
	{
		id: 'luckyluke',
		cat: 'klassiker',
		title: 'Lucky Luke',
		color: '#3FA796',
		short:
			'Der Cowboy, der schneller schießt als sein Schatten, reist durch den Wilden Westen.',
		long: 'Lucky Luke ist ein einsamer Cowboy im Wilden Westen, der Gesetzlose zur Strecke bringt und dabei stets sein treues Pferd Jolly Jumper und seinen tollpatschigen Hund Rantanplan an seiner Seite hat. Bekannt für Wortwitz und liebevolle Western-Parodie.',
		year: 'seit 1946 (Comic), TV seit 1983',
		genre: 'Western-Comedy',
	},
	{
		id: 'looneytunesshow',
		cat: 'klassiker',
		title: 'The Looney Tunes Show',
		color: '#C8862A',
		short: 'Bugs Bunny und Daffy Duck als WG-Partner im modernen Alltag.',
		long: 'Eine moderne Neuinterpretation der Looney-Tunes-Figuren: Bugs Bunny und Daffy Duck leben als Nachbarn in einer Vorstadt und erleben Alltagssituationen mit dem gewohnten Cartoon-Wahnsinn.',
		year: '2011–2014',
		genre: 'Sitcom-Cartoon',
	},
	{
		id: 'scoobydoo',
		cat: 'klassiker',
		title: 'Scooby-Doo! Mystery Incorporated',
		color: '#5C7AAB',
		short:
			'Eine Gruppe Freunde und ihr feiger Hund lösen gruselige Geheimnisse.',
		long: 'Scooby-Doo und die Detektive Mystery Inc. reisen durch die Stadt Crystal Cove und decken vermeintlich übernatürliche Vorfälle als Betrügereien auf – natürlich immer mit ein paar Snacks für Scooby und Shaggy.',
		year: '2010–2013',
		genre: 'Mystery-Comedy',
	},
	{
		id: 'heidi',
		cat: 'klassiker',
		title: 'Heidi',
		color: '#7FBF7F',
		short:
			'Das Waisenmädchen Heidi wächst bei ihrem Großvater in den Schweizer Alpen auf.',
		long: 'Heidi lebt fröhlich bei ihrem Großvater in den Bergen, bis sie nach Frankfurt geschickt wird, um der gelähmten Klara Gesellschaft zu leisten. Eine warmherzige Geschichte über Freundschaft und Heimweh.',
		year: '1974',
		genre: 'Familienserie',
	},

	// ---------------- CARTOON NETWORK ----------------
	{
		id: 'powerpuff',
		cat: 'cartoonnetwork',
		title: 'Die Powerpuff Girls',
		color: '#E86FA0',
		short:
			'Blossom, Bubbles und Buttercup – drei Superheldinnen-Schwestern retten Townsville.',
		long: 'Von Professor Utonium aus Zucker, Gewürz und einer geheimnisvollen Chemikalie X erschaffen, kämpfen die drei Schwestern Blossom, Bubbles und Buttercup gegen Superschurken und retten täglich die Stadt Townsville.',
		year: '1998–2005',
		genre: 'Superhelden-Comedy',
	},
	{
		id: 'courage',
		cat: 'cartoonnetwork',
		title: 'Courage the Cowardly Dog',
		color: '#9B7FD1',
		short:
			'Ein ängstlicher Hund beschützt seine Familie vor gruseligen Kreaturen.',
		long: 'Courage lebt mit Muriel und Eustace mitten im Nirgendwo. Ständig tauchen unheimliche Wesen auf, und obwohl Courage sich vor allem fürchtet, überwindet er seine Angst, um seine Familie zu retten.',
		year: '1999–2002',
		genre: 'Horror-Comedy',
	},
	{
		id: 'stevenuniverse',
		cat: 'cartoonnetwork',
		title: 'Steven Universe',
		color: '#6FB6E8',
		short:
			'Ein Junge mit magischen Kräften wächst zwischen den Crystal Gems auf.',
		long: 'Steven ist der Sohn einer außerirdischen Kriegerin und wächst bei den Crystal Gems auf, die die Erde beschützen. Die Serie verbindet Abenteuer mit Themen wie Familie, Identität und Gefühlen.',
		year: '2013–2019',
		genre: 'Abenteuer-Fantasy',
	},
	{
		id: 'johnnybravo',
		cat: 'cartoonnetwork',
		title: 'Johnny Bravo',
		color: '#F2A93B',
		short: 'Ein eitler, muskelbepackter Charmeur scheitert ständig bei Frauen.',
		long: 'Johnny Bravo hält sich für unwiderstehlich, doch seine Anmachversuche gehen fast immer schief. Eine schräge Sitcom-Parodie mit viel Situationskomik.',
		year: '1997–2004',
		genre: 'Sitcom-Comedy',
	},
	{
		id: 'ededdeddy',
		cat: 'cartoonnetwork',
		title: 'Ed, Edd n Eddy',
		color: '#D9A441',
		short:
			'Drei Freunde namens Ed heißen alle unterschiedlich und hecken Geldpläne aus.',
		long: 'Ed, Edd (Doppel-D) und Eddy versuchen in ihrer Nachbarschaft ständig, mit dubiosen Tricks an Geld für Jawbreaker-Süßigkeiten zu kommen – meist mit chaotischem Ausgang.',
		year: '1999–2009',
		genre: 'Slapstick-Comedy',
	},
	{
		id: 'teentitans',
		cat: 'cartoonnetwork',
		title: 'Teen Titans',
		color: '#8B5FBF',
		short:
			'Robin, Starfire, Cyborg, Raven und Beast Boy kämpfen als junges Heldenteam.',
		long: 'Fünf jugendliche Superhelden schließen sich zu den Teen Titans zusammen, um Verbrecher zu bekämpfen und gleichzeitig mit den Herausforderungen des Erwachsenwerdens klarzukommen.',
		year: '2003–2006',
		genre: 'Superhelden-Action',
	},
	{
		id: 'teentitansgo',
		cat: 'cartoonnetwork',
		title: 'Teen Titans Go!',
		color: '#B26FD1',
		short: 'Die humorvolle Sitcom-Version der Teen Titans im WG-Alltag.',
		long: 'Eine albernere, komödiantischere Version der Teen Titans, die sich mehr auf den Alltag im gemeinsamen Turm konzentriert als auf epische Kämpfe.',
		year: '2013–heute',
		genre: 'Sitcom-Comedy',
	},
	{
		id: 'grimadventures',
		cat: 'cartoonnetwork',
		title: 'The Grim Adventures of Billy and Mandy',
		color: '#6B6B6B',
		short: 'Der Sensenmann muss widerwillig bester Freund zweier Kinder sein.',
		long: 'Nachdem sie den Sensenmann in einem Limbo-Wettkampf besiegen, zwingen Billy und Mandy ihn, ihr ewiger bester Freund zu sein. Skurriler, morbider Humor mit viel Herz.',
		year: '2001–2007',
		genre: 'Dark-Comedy',
	},
	{
		id: 'kndkids',
		cat: 'cartoonnetwork',
		title: 'Codename: Kids Next Door',
		color: '#7FBF7F',
		short: 'Eine Geheimorganisation von Kindern kämpft gegen fiese Erwachsene.',
		long: 'Fünf Kinder bilden Sektor V der Kids Next Door, einer weltweiten Organisation, die Kinder vor tyrannischen Erwachsenen und ihren verrückten Erfindungen beschützt.',
		year: '2002–2008',
		genre: 'Abenteuer-Comedy',
	},
	{
		id: 'dexterslab',
		cat: 'cartoonnetwork',
		title: "Dexter's Laboratory",
		color: '#3FA796',
		short:
			'Ein Kindergenie mit geheimem Labor kämpft gegen seine nervige Schwester Dee Dee.',
		long: 'Dexter betreibt heimlich ein High-Tech-Labor in seinem Kinderzimmer, doch seine Schwester Dee Dee findet immer wieder einen Weg hinein und bringt seine Erfindungen durcheinander.',
		year: '1996–2003',
		genre: 'Sci-Fi-Comedy',
	},
	{
		id: 'ben10',
		cat: 'cartoonnetwork',
		title: 'Ben 10',
		color: '#1DAA5C',
		short:
			'Ein Junge findet eine Uhr, mit der er sich in Aliens verwandeln kann.',
		long: 'Ben Tennyson entdeckt den Omnitrix, ein außerirdisches Gerät, das ihm erlaubt, sich in zehn verschiedene Alien-Formen zu verwandeln, um Bösewichte zu bekämpfen.',
		year: '2005–2008',
		genre: 'Sci-Fi-Action',
	},
	{
		id: 'megasxlr',
		cat: 'cartoonnetwork',
		title: 'Megas XLR',
		color: '#D96B6B',
		short:
			'Ein Riesenroboter aus der Zukunft landet bei einem Gamer aus New Jersey.',
		long: 'Coop findet einen gigantischen Kampfroboter aus der Zukunft und muss lernen, damit die Erde vor Invasoren zu verteidigen – natürlich ohne dabei sein Autogeschäft zu vernachlässigen.',
		year: '2004–2005',
		genre: 'Sci-Fi-Action-Comedy',
	},
	{
		id: 'chowder',
		cat: 'cartoonnetwork',
		title: 'Chowder',
		color: '#F2A93B',
		short:
			'Ein Lehrling in einer skurrilen Kochschule erlebt chaotische Kochabenteuer.',
		long: 'Chowder ist Auszubildender bei Meisterkoch Mung Daal und erlebt in jeder Episode absurde kulinarische Missgeschicke in einer bunten, comichaften Welt.',
		year: '2007–2010',
		genre: 'Comedy',
	},
	{
		id: 'justiceleague',
		cat: 'cartoonnetwork',
		title: 'Justice League',
		color: '#4472C4',
		short:
			'Superman, Batman, Wonder Woman und weitere Helden vereinen sich gegen große Bedrohungen.',
		long: 'Die größten Superhelden der DC-Welt schließen sich zur Justice League zusammen, um Bedrohungen zu bekämpfen, die zu groß für einen einzelnen Helden sind.',
		year: '2001–2006',
		genre: 'Superhelden-Action',
	},

	// ---------------- ANIME & POKÉMON ----------------
	{
		id: 'pokemon',
		cat: 'anime',
		title: 'Pokémon',
		color: '#F2C230',
		short:
			'Ash Ketchum reist mit Pikachu durch die Welt, um Pokémon-Meister zu werden.',
		long: 'Pokémon begleitet den jungen Trainer Ash Ketchum und sein Partner-Pokémon Pikachu auf ihrer Reise durch verschiedene Regionen, in der sie Pokémon fangen, trainieren und in Arenakämpfen antreten.',
		year: 'seit 1997',
		genre: 'Abenteuer-Anime',
	},
	{
		id: 'doraemon',
		cat: 'anime',
		title: 'Doraemon',
		color: '#5AA9E6',
		short:
			'Ein Roboterkater aus der Zukunft hilft dem Jungen Nobita mit magischen Gadgets.',
		long: 'Doraemon ist ein Roboterkater, der aus der Zukunft geschickt wird, um dem tollpatschigen Nobita mit erstaunlichen Gadgets aus seiner Vierdimensionalen Tasche zu helfen.',
		year: 'seit 1979',
		genre: 'Familien-Anime',
	},
	{
		id: 'avatar',
		cat: 'anime',
		title: 'Avatar: Der Herr der Elemente',
		color: '#4FAE9A',
		short:
			'Aang, der letzte Airbender, muss die vier Elemente meistern, um die Welt zu retten.',
		long: 'Aang erwacht nach 100 Jahren und erfährt, dass er der Avatar ist – der Einzige, der alle vier Elemente beherrschen kann. Mit seinen Freunden reist er durch die Welt, um Frieden zu bringen.',
		year: '2005–2008',
		genre: 'Fantasy-Abenteuer',
	},
	{
		id: 'dragonbox',
		cat: 'anime',
		title: 'Dragon Box Z',
		color: '#E8794F',
		short:
			'Kämpfer mit gewaltigen Kräften schützen die Erde vor mächtigen Gegnern.',
		long: 'Eine actiongeladene Anime-Reihe im Dragon-Ball-Universum, in der Krieger mit übermenschlichen Kräften Turniere bestreiten und die Erde vor kosmischen Bedrohungen verteidigen.',
		year: 'Anime-Klassiker',
		genre: 'Action-Anime',
	},

	// ---------------- FILME ----------------
	{
		id: 'shrek',
		cat: 'filme',
		title: 'Shrek',
		color: '#6BAF4F',
		short:
			'Ein mürrischer Oger muss eine Prinzessin retten, um sein Sumpfland zurückzubekommen.',
		long: 'Shrek lebt zurückgezogen in seinem Sumpf, bis Märchenfiguren dort Zuflucht suchen. Um sein Land zurückzubekommen, muss er Prinzessin Fiona aus einem Turm retten – Seite an Seite mit dem redseligen Esel.',
		year: '2001',
		genre: 'Fantasy-Komödie',
	},
	{
		id: 'toystory',
		cat: 'filme',
		title: 'Toy Story',
		color: '#4472C4',
		short:
			'Spielzeuge erwachen zum Leben, sobald ihr Besitzer den Raum verlässt.',
		long: 'Cowboy Woody und Astronaut Buzz Lightyear müssen ihre Rivalität überwinden, um gemeinsam zu ihrem Besitzer Andy zurückzufinden. Der erste vollständig computeranimierte Spielfilm der Geschichte.',
		year: '1995',
		genre: 'Animationsfilm',
	},
	{
		id: 'incredibles',
		cat: 'filme',
		title: 'Die Unglaublichen',
		color: '#D94F4F',
		short:
			'Eine Superhelden-Familie muss im Verborgenen leben – bis sie wieder gebraucht wird.',
		long: 'Die Familie Parr lebt als ganz normale Familie im Verborgenen, da Superhelden per Gesetz verboten wurden. Als eine neue Bedrohung auftaucht, müssen sie ihre Kräfte wieder einsetzen.',
		year: '2004',
		genre: 'Superhelden-Animationsfilm',
	},
	{
		id: 'spirit',
		cat: 'filme',
		title: 'Spirit – Der wilde Mustang',
		color: '#C8862A',
		short: 'Ein wildes Pferd kämpft für seine Freiheit im Wilden Westen.',
		long: 'Spirit, ein junger Mustang-Hengst, wird gefangen genommen und kämpft darum, zu seiner Herde und seiner Freiheit in den Weiten des Westens zurückzukehren.',
		year: '2002',
		genre: 'Abenteuer-Animationsfilm',
	},
	{
		id: 'kungfupanda',
		cat: 'filme',
		title: 'Kung Fu Panda',
		color: '#2E2E2E',
		short:
			'Ein tollpatschiger Panda wird unerwartet zum auserwählten Kung-Fu-Krieger.',
		long: 'Po, ein nudelliebender Panda, wird gegen alle Erwartungen zum legendären Drachenkrieger ernannt und muss lernen, sein inneres Potenzial zu entfalten, um sein Tal zu beschützen.',
		year: '2008',
		genre: 'Action-Komödie',
	},
];

const CATEGORIES = [
	{ id: 'klassiker', label: 'Klassiker' },
	{ id: 'cartoonnetwork', label: 'Cartoon Network' },
	{ id: 'anime', label: 'Anime &amp; Pokémon' },
	{ id: 'filme', label: 'Filme' },
];
