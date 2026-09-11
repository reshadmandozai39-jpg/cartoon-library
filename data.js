const CARTOONS = [
	{
		id: 'tomjerry',
		cat: 'klassiker',
		title: 'Tom und Jerry',
		color: '#D96B6B',
		img: 'src/thom/thom6.jpg',
		short:
			'Die ewige Jagd zwischen Kater Tom und Maus Jerry slapstickreich und dialogfrei.',
		genre: 'Slapstick-Komödie',
	},

	{
		id: 'tweety',
		cat: 'klassiker',
		title: 'Sylvester & Tweety',
		color: '#F2A93B',
		img: 'src/thom/thom6.jpg',
		short: 'Kater Sylvester versucht ständig, Tweety zu fangen  erfolglos.',
		genre: 'Comedy',
	},

	{
		id: 'luckyluke',
		cat: 'klassiker',
		title: 'Lucky Luke',
		color: '#3FA796',
		img: 'src/thom/thom6.jpg',
		short: 'Der Cowboy, der schneller schießt als sein Schatten.',
		genre: 'Western-Comedy',
	},

	{
		id: 'scoobydoo',
		cat: 'klassiker',
		title: 'Scooby-Doo',
		color: '#5C7AAB',
		img: 'src/thom/thom6.jpg',
		short: 'Eine Gruppe Freunde löst gruselige Geheimnisse.',
		genre: 'Mystery-Comedy',
	},

	{
		id: 'heidi',
		cat: 'familie',
		title: 'Heidi',
		color: '#7FBF7F',
		img: 'src/thom/thom6.jpg',
		short: 'Heidi lebt bei ihrem Großvater in den Alpen.',
		genre: 'Familienserie',
	},

	{
		id: 'powerpuff',
		cat: 'superhelden',
		title: 'Die Powerpuff Girls',
		color: '#E86FA0',
		img: 'src/thom/thom6.jpg',
		short: 'Drei Superheldinnen retten täglich Townsville.',
		genre: 'Superhelden-Comedy',
	},

	{
		id: 'courage',
		cat: 'retro',
		title: 'Courage the Cowardly Dog',
		color: '#9B7FD1',
		img: 'src/thom/thom6.jpg',
		short: 'Ein ängstlicher Hund schützt seine Familie.',
		genre: 'Horror-Comedy',
	},

	{
		id: 'stevenuniverse',
		cat: 'fantasy',
		title: 'Steven Universe',
		color: '#6FB6E8',
		img: 'src/thom/thom6.jpg',
		short: 'Steven wächst zwischen magischen Kriegerinnen auf.',
		genre: 'Fantasy-Abenteuer',
	},

	{
		id: 'johnnybravo',
		cat: 'cartoonnetwork',
		title: 'Johnny Bravo',
		color: '#F2A93B',
		img: 'src/thom/thom6.jpg',
		short: 'Ein eitler Muskelprotz scheitert ständig bei Frauen.',
		genre: 'Comedy',
	},

	{
		id: 'ededdeddy',
		cat: 'retro',
		title: 'Ed, Edd n Eddy',
		color: '#D9A441',
		img: 'src/thom/thom6.jpg',
		short: 'Drei Freunde planen verrückte Geldideen.',
		genre: 'Slapstick-Comedy',
	},

	{
		id: 'teentitans',
		cat: 'superhelden',
		title: 'Teen Titans',
		color: '#8B5FBF',
		img: 'src/thom/thom6.jpg',
		short: 'Junge Superhelden kämpfen gegen Verbrecher.',
		genre: 'Superhelden-Action',
	},

	{
		id: 'teentitansgo',
		cat: 'superhelden',
		title: 'Teen Titans Go!',
		color: '#B26FD1',
		img: 'src/thom/thom6.jpg',
		short: 'Die lustige WG-Version der Teen Titans.',
		genre: 'Comedy',
	},

	{
		id: 'dexterslab',
		cat: 'scifi',
		title: "Dexter's Laboratory",
		color: '#3FA796',
		img: 'src/thom/thom6.jpg',
		short: 'Ein Genie versteckt ein Labor in seinem Zimmer.',
		genre: 'Sci‑Fi-Comedy',
	},

	{
		id: 'ben10',
		cat: 'action',
		title: 'Ben 10',
		color: '#1DAA5C',
		img: 'src/thom/thom6.jpg',
		short: 'Ein Junge verwandelt sich in verschiedene Aliens.',
		genre: 'Sci‑Fi-Action',
	},

	{
		id: 'justiceleague',
		cat: 'superhelden',
		title: 'Justice League',
		color: '#4472C4',
		img: 'src/thom/thom6.jpg',
		short: 'Die größten DC-Helden kämpfen gemeinsam.',
		genre: 'Superhelden-Action',
	},

	{
		id: 'pokemon',
		cat: 'anime',
		title: 'Pokémon',
		color: '#F2C230',
		img: 'src/pokemon/pikachu.jpg',
		short: 'Ash und Pikachu reisen durch die Pokémon-Welt.',
		genre: 'Abenteuer-Anime',
	},

	{
		id: 'doraemon',
		cat: 'anime',
		title: 'Doraemon',
		color: '#5AA9E6',
		img: 'src/thom/thom6.jpg',
		short: 'Ein Roboterkater hilft Nobita mit futuristischen Gadgets.',
		genre: 'Familien-Anime',
	},

	{
		id: 'avatar',
		cat: 'fantasy',
		title: 'Avatar: Der Herr der Elemente',
		color: '#4FAE9A',
		img: 'src/thom/thom6.jpg',
		short: 'Aang muss die vier Elemente meistern.',
		genre: 'Fantasy-Abenteuer',
	},

	{
		id: 'dragonballz',
		cat: 'anime',
		title: 'Dragon Ball Z',
		color: '#E8794F',
		img: 'src/thom/thom6.jpg',
		short: 'Legendäre Kämpfer beschützen die Erde.',
		genre: 'Action-Anime',
	},

	{
		id: 'shrek',
		cat: 'familie',
		title: 'Shrek',
		color: '#6BAF4F',
		img: 'src/thom/thom6.jpg',
		short: 'Ein Oger rettet eine Prinzessin.',
		genre: 'Fantasy-Komödie',
	},

	{
		id: 'toystory',
		cat: 'familie',
		title: 'Toy Story',
		color: '#4472C4',
		img: 'src/thom/thom6.jpg',
		short: 'Spielzeuge werden lebendig.',
		genre: 'Animationsfilm',
	},

	{
		id: 'incredibles',
		cat: 'superhelden',
		title: 'Die Unglaublichen',
		color: '#D94F4F',
		img: 'src/thom/thom6.jpg',
		short: 'Eine Familie mit Superkräften kämpft gegen Bösewichte.',
		genre: 'Superhelden-Film',
	},

	{
		id: 'spirit',
		cat: 'familie',
		title: 'Spirit',
		color: '#C8862A',
		img: 'src/thom/thom6.jpg',
		short: 'Ein Mustang kämpft für seine Freiheit.',
		genre: 'Abenteuerfilm',
	},

	{
		id: 'kungfupanda',
		cat: 'action',
		title: 'Kung Fu Panda',
		color: '#2E2E2E',
		img: 'src/thom/thom6.jpg',
		short: 'Ein Panda wird zum Kung Fu Helden.',
		genre: 'Action-Komödie',
	},

	{
		id: 'samuraijack',
		cat: 'action',
		title: 'Samurai Jack',
		color: '#3C3C3C',
		img: 'src/thom/thom6.jpg',
		short: 'Ein Samurai kämpft gegen den Dämon Aku.',
		genre: 'Action-Fantasy',
	},

	{
		id: 'adventuretime',
		cat: 'fantasy',
		title: 'Adventure Time',
		color: '#7BC8F6',
		img: 'src/thom/thom6.jpg',
		short: 'Finn und Jake erleben verrückte Abenteuer im Land Ooo.',
		genre: 'Fantasy-Comedy',
	},

	{
		id: 'regularshow',
		cat: 'cartoonnetwork',
		title: 'Regular Show',
		color: '#6D83F2',
		img: 'src/thom/thom6.jpg',
		short: 'Zwei Freunde geraten ständig in chaotische Situationen.',
		genre: 'Comedy',
	},

	{
		id: 'gumball',
		cat: 'cartoonnetwork',
		title: 'Die fantastische Welt von Gumball',
		color: '#58B7E0',
		img: 'src/thom/thom6.jpg',
		short: 'Gumball und Darwin erleben verrückte Schulabenteuer.',
		genre: 'Comedy',
	},

	{
		id: 'flapjack',
		cat: 'retro',
		title: 'The Marvelous Misadventures of Flapjack',
		color: '#C98A4A',
		img: 'src/thom/thom6.jpg',
		short: 'Flapjack träumt von der legendären Süßigkeiteninsel.',
		genre: 'Abenteuer-Comedy',
	},

	{
		id: 'fostershome',
		cat: 'retro',
		title: "Foster's Home for Imaginary Friends",
		color: '#FF8AAE',
		img: 'src/thom/thom6.jpg',
		short: 'Ein Heim voller imaginärer Freunde.',
		genre: 'Fantasy-Comedy',
	},

	{
		id: 'xiaolin',
		cat: 'action',
		title: 'Xiaolin Showdown',
		color: '#D94F4F',
		img: 'src/thom/thom6.jpg',
		short: 'Junge Krieger suchen mächtige Shen-Gong-Wu.',
		genre: 'Action-Abenteuer',
	},

	{
		id: 'naruto',
		cat: 'anime',
		title: 'Naruto',
		color: '#F28C28',
		img: 'src/thom/thom6.jpg',
		short: 'Ein junger Ninja träumt davon, Hokage zu werden.',
		genre: 'Action-Anime',
	},

	{
		id: 'onepiece',
		cat: 'anime',
		title: 'One Piece',
		color: '#4F8FD9',
		img: 'src/thom/thom6.jpg',
		short: 'Piraten suchen den legendären Schatz One Piece.',
		genre: 'Abenteuer-Anime',
	},

	{
		id: 'yugioh',
		cat: 'anime',
		title: 'Yu-Gi-Oh!',
		color: '#7A4FBF',
		img: 'src/thom/thom6.jpg',
		short: 'Kartenduelle entscheiden über das Schicksal der Welt.',
		genre: 'Fantasy-Anime',
	},

	{
		id: 'digimon',
		cat: 'anime',
		title: 'Digimon',
		color: '#4FBF9F',
		img: 'src/thom/thom6.jpg',
		short: 'Kinder reisen in die Digiwelt und kämpfen mit Digimon.',
		genre: 'Abenteuer-Anime',
	},

	{
		id: 'spongebob',
		cat: 'klassiker',
		title: 'SpongeBob Schwammkopf',
		color: '#F2D230',
		img: 'src/thom/thom6.jpg',
		short: 'Der fröhliche Schwamm lebt in Bikini Bottom.',
		genre: 'Comedy',
	},

	{
		id: 'fairlyoddparents',
		cat: 'klassiker',
		title: 'Cosmo & Wanda',
		color: '#F28CCB',
		img: 'src/thom/thom6.jpg',
		short: 'Ein Junge hat zwei chaotische Zauberpaten.',
		genre: 'Fantasy-Comedy',
	},

	{
		id: 'jimmyneutron',
		cat: 'scifi',
		title: 'Jimmy Neutron',
		color: '#7BA7FF',
		img: 'src/thom/thom6.jpg',
		short: 'Ein Kindergenie baut verrückte Erfindungen.',
		genre: 'Sci‑Fi-Comedy',
	},

	{
		id: 'phineasferb',
		cat: 'familie',
		title: 'Phineas und Ferb',
		color: '#F29E38',
		img: 'src/thom/thom6.jpg',
		short: 'Zwei Brüder erleben jeden Sommer riesige Abenteuer.',
		genre: 'Comedy-Abenteuer',
	},

	{
		id: 'gravityfalls',
		cat: 'fantasy',
		title: 'Gravity Falls',
		color: '#4A7B52',
		img: 'src/thom/thom6.jpg',
		short: 'Zwillinge entdecken mysteriöse Geheimnisse.',
		genre: 'Mystery-Fantasy',
	},

	{
		id: 'starwarsclonewars',
		cat: 'action',
		title: 'Star Wars: The Clone Wars',
		color: '#4060A8',
		img: 'src/thom/thom6.jpg',
		short: 'Die Jedi kämpfen in den Klonkriegen.',
		genre: 'Sci‑Fi-Action',
	},

	{
		id: 'batmananimated',
		cat: 'superhelden',
		title: 'Batman: The Animated Series',
		color: '#2C2C2C',
		img: 'src/thom/thom6.jpg',
		short: 'Batman beschützt Gotham City.',
		genre: 'Superhelden-Action',
	},

	{
		id: 'spiderman',
		cat: 'superhelden',
		title: 'Spider-Man',
		color: '#D93232',
		img: 'src/thom/thom6.jpg',
		short: 'Peter Parker kämpft als Spider-Man gegen Verbrechen.',
		genre: 'Superhelden-Action',
	},

	{
		id: 'tmnt',
		cat: 'action',
		title: 'Teenage Mutant Ninja Turtles',
		color: '#4FAF5A',
		img: 'src/thom/thom6.jpg',
		short: 'Vier Ninja-Schildkröten beschützen New York.',
		genre: 'Action-Comedy',
	},
	{
		id: 'samuraijack',
		cat: 'action',
		title: 'Samurai Jack',
		color: '#3C3C3C',
		img: 'src/thom/thom6.jpg',
		short: 'Ein Samurai kämpft gegen den Dämon Aku.',
		genre: 'Action-Fantasy',
	},

	{
		id: 'adventuretime',
		cat: 'fantasy',
		title: 'Adventure Time',
		color: '#7BC8F6',
		img: 'src/thom/thom6.jpg',
		short: 'Finn und Jake erleben verrückte Abenteuer im Land Ooo.',
		genre: 'Fantasy-Comedy',
	},

	{
		id: 'regularshow',
		cat: 'cartoonnetwork',
		title: 'Regular Show',
		color: '#6D83F2',
		img: 'src/thom/thom6.jpg',
		short: 'Zwei Freunde geraten ständig in chaotische Situationen.',
		genre: 'Comedy',
	},

	{
		id: 'gumball',
		cat: 'cartoonnetwork',
		title: 'Die fantastische Welt von Gumball',
		color: '#58B7E0',
		img: 'src/thom/thom6.jpg',
		short: 'Gumball und Darwin erleben verrückte Schulabenteuer.',
		genre: 'Comedy',
	},

	{
		id: 'flapjack',
		cat: 'retro',
		title: 'The Marvelous Misadventures of Flapjack',
		color: '#C98A4A',
		img: 'src/thom/thom6.jpg',
		short: 'Flapjack träumt von der legendären Süßigkeiteninsel.',
		genre: 'Abenteuer-Comedy',
	},

	{
		id: 'fostershome',
		cat: 'retro',
		title: "Foster's Home for Imaginary Friends",
		color: '#FF8AAE',
		img: 'src/thom/thom6.jpg',
		short: 'Ein Heim voller imaginärer Freunde.',
		genre: 'Fantasy-Comedy',
	},

	{
		id: 'xiaolin',
		cat: 'action',
		title: 'Xiaolin Showdown',
		color: '#D94F4F',
		img: 'src/thom/thom6.jpg',
		short: 'Junge Krieger suchen mächtige Shen-Gong-Wu.',
		genre: 'Action-Abenteuer',
	},

	{
		id: 'naruto',
		cat: 'anime',
		title: 'Naruto',
		color: '#F28C28',
		img: 'src/thom/thom6.jpg',
		short: 'Ein junger Ninja träumt davon, Hokage zu werden.',
		genre: 'Action-Anime',
	},

	{
		id: 'onepiece',
		cat: 'anime',
		title: 'One Piece',
		color: '#4F8FD9',
		img: 'src/thom/thom6.jpg',
		short: 'Piraten suchen den legendären Schatz One Piece.',
		genre: 'Abenteuer-Anime',
	},

	{
		id: 'yugioh',
		cat: 'anime',
		title: 'Yu-Gi-Oh!',
		color: '#7A4FBF',
		img: 'src/thom/thom6.jpg',
		short: 'Kartenduelle entscheiden über das Schicksal der Welt.',
		genre: 'Fantasy-Anime',
	},

	{
		id: 'digimon',
		cat: 'anime',
		title: 'Digimon',
		color: '#4FBF9F',
		img: 'src/thom/thom6.jpg',
		short: 'Kinder reisen in die Digiwelt und kämpfen mit Digimon.',
		genre: 'Abenteuer-Anime',
	},

	{
		id: 'spongebob',
		cat: 'klassiker',
		title: 'SpongeBob Schwammkopf',
		color: '#F2D230',
		img: 'src/thom/thom6.jpg',
		short: 'Der fröhliche Schwamm lebt in Bikini Bottom.',
		genre: 'Comedy',
	},

	{
		id: 'fairlyoddparents',
		cat: 'klassiker',
		title: 'Cosmo & Wanda',
		color: '#F28CCB',
		img: 'src/thom/thom6.jpg',
		short: 'Ein Junge hat zwei chaotische Zauberpaten.',
		genre: 'Fantasy-Comedy',
	},

	{
		id: 'jimmyneutron',
		cat: 'scifi',
		title: 'Jimmy Neutron',
		color: '#7BA7FF',
		img: 'src/thom/thom6.jpg',
		short: 'Ein Kindergenie baut verrückte Erfindungen.',
		genre: 'Sci‑Fi-Comedy',
	},

	{
		id: 'phineasferb',
		cat: 'familie',
		title: 'Phineas und Ferb',
		color: '#F29E38',
		img: 'src/thom/thom6.jpg',
		short: 'Zwei Brüder erleben jeden Sommer riesige Abenteuer.',
		genre: 'Comedy-Abenteuer',
	},

	{
		id: 'gravityfalls',
		cat: 'fantasy',
		title: 'Gravity Falls',
		color: '#4A7B52',
		img: 'src/thom/thom6.jpg',
		short: 'Zwillinge entdecken mysteriöse Geheimnisse.',
		genre: 'Mystery-Fantasy',
	},

	{
		id: 'starwarsclonewars',
		cat: 'action',
		title: 'Star Wars: The Clone Wars',
		color: '#4060A8',
		img: 'src/thom/thom6.jpg',
		short: 'Die Jedi kämpfen in den Klonkriegen.',
		genre: 'Sci Fi-Action',
	},

	{
		id: 'batmananimated',
		cat: 'superhelden',
		title: 'Batman: The Animated Series',
		color: '#2C2C2C',
		img: 'src/thom/thom6.jpg',
		short: 'Batman beschützt Gotham City.',
		genre: 'Superhelden-Action',
	},

	{
		id: 'spiderman',
		cat: 'superhelden',
		title: 'Spider-Man',
		color: '#D93232',
		img: 'src/thom/thom6.jpg',
		short: 'Peter Parker kämpft als Spider-Man gegen Verbrechen.',
		genre: 'Superhelden-Action',
	},

	{
		id: 'tmnt',
		cat: 'action',
		title: 'Teenage Mutant Ninja Turtles',
		color: '#4FAF5A',
		img: 'src/thom/thom6.jpg',
		short: 'Vier Ninja-Schildkröten beschützen New York.',
		genre: 'Action-Comedy',
	},
	{
		id: 'samuraijack',
		cat: 'action',
		title: 'Samurai Jack',
		color: '#3C3C3C',
		img: 'src/thom/thom6.jpg',
		short: 'Ein Samurai kämpft gegen den Dämon Aku.',
		genre: 'Action-Fantasy',
	},

	{
		id: 'adventuretime',
		cat: 'fantasy',
		title: 'Adventure Time',
		color: '#7BC8F6',
		img: 'src/thom/thom6.jpg',
		short: 'Finn und Jake erleben verrückte Abenteuer im Land Ooo.',
		genre: 'Fantasy-Comedy',
	},

	{
		id: 'regularshow',
		cat: 'cartoonnetwork',
		title: 'Regular Show',
		color: '#6D83F2',
		img: 'src/thom/thom6.jpg',
		short: 'Zwei Freunde geraten ständig in chaotische Situationen.',
		genre: 'Comedy',
	},

	{
		id: 'gumball',
		cat: 'cartoonnetwork',
		title: 'Die fantastische Welt von Gumball',
		color: '#58B7E0',
		img: 'src/thom/thom6.jpg',
		short: 'Gumball und Darwin erleben verrückte Schulabenteuer.',
		genre: 'Comedy',
	},

	{
		id: 'flapjack',
		cat: 'retro',
		title: 'The Marvelous Misadventures of Flapjack',
		color: '#C98A4A',
		img: 'src/thom/thom6.jpg',
		short: 'Flapjack träumt von der legendären Süßigkeiteninsel.',
		genre: 'Abenteuer-Comedy',
	},

	{
		id: 'fostershome',
		cat: 'retro',
		title: "Foster's Home for Imaginary Friends",
		color: '#FF8AAE',
		img: 'src/thom/thom6.jpg',
		short: 'Ein Heim voller imaginärer Freunde.',
		genre: 'Fantasy-Comedy',
	},

	{
		id: 'xiaolin',
		cat: 'action',
		title: 'Xiaolin Showdown',
		color: '#D94F4F',
		img: 'src/thom/thom6.jpg',
		short: 'Junge Krieger suchen mächtige Shen-Gong-Wu.',
		genre: 'Action-Abenteuer',
	},

	{
		id: 'naruto',
		cat: 'anime',
		title: 'Naruto',
		color: '#F28C28',
		img: 'src/thom/thom6.jpg',
		short: 'Ein junger Ninja träumt davon, Hokage zu werden.',
		genre: 'Action-Anime',
	},

	{
		id: 'onepiece',
		cat: 'anime',
		title: 'One Piece',
		color: '#4F8FD9',
		img: 'src/thom/thom6.jpg',
		short: 'Piraten suchen den legendären Schatz One Piece.',
		genre: 'Abenteuer-Anime',
	},

	{
		id: 'yugioh',
		cat: 'anime',
		title: 'Yu-Gi-Oh!',
		color: '#7A4FBF',
		img: 'src/thom/thom6.jpg',
		short: 'Kartenduelle entscheiden über das Schicksal der Welt.',
		genre: 'Fantasy-Anime',
	},

	{
		id: 'digimon',
		cat: 'anime',
		title: 'Digimon',
		color: '#4FBF9F',
		img: 'src/thom/thom6.jpg',
		short: 'Kinder reisen in die Digiwelt und kämpfen mit Digimon.',
		genre: 'Abenteuer-Anime',
	},

	{
		id: 'spongebob',
		cat: 'klassiker',
		title: 'SpongeBob Schwammkopf',
		color: '#F2D230',
		img: 'src/thom/thom6.jpg',
		short: 'Der fröhliche Schwamm lebt in Bikini Bottom.',
		genre: 'Comedy',
	},

	{
		id: 'fairlyoddparents',
		cat: 'klassiker',
		title: 'Cosmo & Wanda',
		color: '#F28CCB',
		img: 'src/thom/thom6.jpg',
		short: 'Ein Junge hat zwei chaotische Zauberpaten.',
		genre: 'Fantasy-Comedy',
	},

	{
		id: 'jimmyneutron',
		cat: 'scifi',
		title: 'Jimmy Neutron',
		color: '#7BA7FF',
		img: 'src/thom/thom6.jpg',
		short: 'Ein Kindergenie baut verrückte Erfindungen.',
		genre: 'Sci Fi-Comedy',
	},

	{
		id: 'phineasferb',
		cat: 'familie',
		title: 'Phineas und Ferb',
		color: '#F29E38',
		img: 'src/thom/thom6.jpg',
		short: 'Zwei Brüder erleben jeden Sommer riesige Abenteuer.',
		genre: 'Comedy-Abenteuer',
	},

	{
		id: 'gravityfalls',
		cat: 'fantasy',
		title: 'Gravity Falls',
		color: '#4A7B52',
		img: 'src/thom/thom6.jpg',
		short: 'Zwillinge entdecken mysteriöse Geheimnisse.',
		genre: 'Mystery-Fantasy',
	},

	{
		id: 'starwarsclonewars',
		cat: 'action',
		title: 'Star Wars: The Clone Wars',
		color: '#4060A8',
		img: 'src/thom/thom6.jpg',
		short: 'Die Jedi kämpfen in den Klonkriegen.',
		genre: 'SciFi-Action',
	},

	{
		id: 'batmananimated',
		cat: 'superhelden',
		title: 'Batman: The Animated Series',
		color: '#2C2C2C',
		img: 'src/thom/thom6.jpg',
		short: 'Batman beschützt Gotham City.',
		genre: 'Superhelden-Action',
	},

	{
		id: 'spiderman',
		cat: 'superhelden',
		title: 'Spider-Man',
		color: '#D93232',
		img: 'src/thom/thom6.jpg',
		short: 'Peter Parker kämpft als Spider-Man gegen Verbrechen.',
		genre: 'Superhelden-Action',
	},

	{
		id: 'tmnt',
		cat: 'action',
		title: 'Teenage Mutant Ninja Turtles',
		color: '#4FAF5A',
		img: 'src/thom/thom6.jpg',
		short: 'Vier Ninja-Schildkröten beschützen New York.',
		genre: 'Action-Comedy',
	},
];

const CATEGORIES = [
	{ id: 'klassiker', label: 'Klassiker' },
	{ id: 'cartoonnetwork', label: 'Cartoon Network' },
	{ id: 'anime', label: 'Anime & Pokémon' },
	{ id: 'action', label: 'Action & Abenteuer' },
	{ id: 'retro', label: 'Retro Cartoons' },
	{ id: 'familie', label: 'Familienserien' },
	{ id: 'superhelden', label: 'Superhelden' },
	{ id: 'fantasy', label: 'Fantasy & Sci Fi' },
];
