const heroName1 = document.querySelector('.hero1');
const heroStats1 = document.querySelector('.stats1');
const heroName2 = document.querySelector('.hero2');
const heroStats2 = document.querySelector('.stats2');
const input = document.querySelector('.searchValue');
const searchButton = document.querySelector('.searchBtn');
const multi = document.querySelector('.multiOptions');
const results = document.getElementById("results");

const apiKey = '6444932778877033';

let isHero1 = false;
let isHero2 = false;

const characterNames = [
  "A-Bomb", "Abe Sapien", "Abin Sur", "Abomination", "Abraxas", "Absorbing Man", "Adam Monroe", "Adam Strange", "Agent 13", "Agent Bob",
  "Agent Zero", "Air-Walker", "Ajax", "Alan Scott", "Alex Mercer", "Alex Woolsly", "Alfred Pennyworth", "Alien", "Allan Quatermain", "Amazo",
  "Ammo", "Ando Masahashi", "Angel", "Angel", "Angel Dust", "Angel Salvadore", "Angela", "Animal Man", "Annihilus", "Ant-Man", "Ant-Man II",
  "Anti-Monitor", "Anti-Spawn", "Anti-Venom", "Apocalypse", "Aquababy", "Aqualad", "Aquaman", "Arachne", "Archangel", "Arclight", "Ardina",
  "Ares", "Ariel", "Armor", "Arsenal", "Astro Boy", "Atlas", "Atlas", "Atom", "Atom", "Atom Girl", "Atom II", "Atom III", "Atom IV", "Aurora",
  "Azazel", "Azrael", "Aztar", "Bane", "Banshee", "Bantam", "Batgirl", "Batgirl", "Batgirl III", "Batgirl IV", "Batgirl V", "Batgirl VI",
  "Batman", "Batman", "Batman II", "Battlestar", "Batwoman V", "Beak", "Beast", "Beast Boy", "Beetle", "Ben 10", "Beta Ray Bill", "Beyonder",
  "Big Barda", "Big Daddy", "Big Man", "Bill Harken", "Billy Kincaid", "Binary", "Bionic Woman", "Bird-Brain", "Bird-Man", "Bird-Man II", "Birdman",
  "Bishop", "Bizarro", "Black Abbott", "Black Adam", "Black Bolt", "Black Canary", "Black Canary", "Black Cat", "Black Flash", "Black Goliath",
  "Black Knight III", "Black Lightning", "Black Mamba", "Black Manta", "Black Panther", "Black Widow", "Black Widow II", "Blackout", "Blackwing",
  "Blackwulf", "Blade", "Blaquesmith", "Bling!", "Blink", "Blizzard", "Blizzard", "Blizzard II", "Blob", "Bloodaxe", "Bloodhawk", "Bloodwraith",
  "Blue Beetle", "Blue Beetle", "Blue Beetle II", "Blue Beetle III", "Boba Fett", "Bolt", "Bomb Queen", "Boom-Boom", "Boomer", "Booster Gold",
  "Box", "Box III", "Box IV", "Brainiac", "Brainiac 5", "Brother Voodoo", "Brundlefly", "Buffy", "Bullseye", "Bumblebee", "Bumbleboy", "Bushido",
  "Cable", "Callisto", "Cameron Hicks", "Cannonball", "Captain America", "Captain Atom", "Captain Britain", "Captain Cold", "Captain Epic",
  "Captain Hindsight", "Captain Mar-vell", "Captain Marvel", "Captain Marvel", "Captain Marvel II", "Captain Midnight", "Captain Planet",
  "Captain Universe", "Carnage", "Cat", "Cat II", "Catwoman", "Cecilia Reyes", "Century", "Cerebra", "Chamber", "Chameleon", "Changeling",
  "Cheetah", "Cheetah II", "Cheetah III", "Chromos", "Chuck Norris", "Citizen Steel", "Claire Bennet", "Clea", "Cloak", "Clock King",
  "Cogliostro", "Colin Wagner", "Colossal Boy", "Colossus", "Copycat", "Corsair", "Cottonmouth", "Crimson Crusader", "Crimson Dynamo", "Crystal",
  "Curse", "Cy-Gor", "Cyborg", "Cyborg Superman", "Cyclops", "Cypher", "Dagger", "Danny Cooper", "Daphne Powell", "Daredevil", "Darkhawk",
  "Darkman", "Darkseid", "Darkside", "Darkstar", "Darth Maul", "Darth Vader", "Dash", "Data", "Dazzler", "Deadman", "Deadpool", "Deadshot",
  "Deathlok", "Deathstroke", "Demogoblin", "Destroyer", "Diamondback", "DL Hawkins", "Doc Samson", "Doctor Doom", "Doctor Doom II", "Doctor Fate",
  "Doctor Octopus", "Doctor Strange", "Domino", "Donatello", "Donna Troy", "Doomsday", "Doppelganger", "Dormammu", "Dr Manhattan", "Drax the Destroyer",
  "Ego", "Elastigirl", "Electro", "Elektra", "Elle Bishop", "Elongated Man", "Emma Frost", "Enchantress", "Energy", "ERG-1", "Ethan Hunt", "Etrigan",
  "Evil Deadpool", "Evilhawk", "Exodus", "Fabian Cortez", "Falcon", "Fallen One II", "Faora", "Feral", "Fighting Spirit", "Fin Fang Foom", "Firebird",
  "Firelord", "Firestar", "Firestorm", "Firestorm", "Fixer", "Flash", "Flash Gordon", "Flash II", "Flash III", "Flash IV", "Forge", "Franklin Richards",
  "Franklin Storm", "Frenzy", "Frigga", "Galactus", "Gambit", "Gamora", "Garbage Man", "Gary Bell", "General Zod", "Genesis", "Ghost Rider",
  "Ghost Rider II", "Giant-Man", "Giant-Man II", "Giganta", "Gladiator", "Goblin Queen", "Godzilla", "Gog", "Goku", "Goliath", "Goliath", "Goliath",
  "Goliath IV", "Gorilla Grodd", "Granny Goodness", "Gravity", "Greedo", "Green Arrow", "Green Goblin", "Green Goblin II", "Green Goblin III",
  "Green Goblin IV", "Groot", "Guardian", "Guy Gardner", "Hal Jordan", "Han Solo", "Hancock", "Harley Quinn", "Harry Potter", "Havok", "Hawk",
  "Hawkeye", "Hawkeye II", "Hawkgirl", "Hawkman", "Hawkwoman", "Hawkwoman II", "Hawkwoman III", "Heat Wave", "Hela", "Hellboy", "Hellcat",
  "Hellstorm", "Hercules", "Hiro Nakamura", "Hit-Girl", "Hobgoblin", "Hollow", "Hope Summers", "Howard the Duck", "Hulk", "Human Torch", "Huntress", "Husk", "Hybrid",
  "Hydro-Man", "Hyperion", "Iceman", "Impulse", "Indiana Jones", "Indigo", "Ink", "Invisible Woman", "Iron Fist", "Iron Man", "Iron Monger",
  "Isis", "Jack Bauer", "Jack of Hearts", "Jack-Jack", "James Bond", "James T. Kirk", "Jar Jar Binks", "Jason Bourne", "Jean Grey", "Jean-Luc Picard",
  "Jennifer Kale", "Jesse Quick", "Jessica Cruz", "Jessica Jones", "Jessica Sanders", "Jigsaw", "Jim Powell", "JJ Powell", "Johann Krauss", "John Constantine",
  "John Stewart", "John Wraith", "Joker", "Jolt", "Jubilee", "Judge Dredd", "Juggernaut", "Junkpile", "Justice", "Jyn Erso", "K-2SO", "Kang", "Kathryn Janeway",
  "Katniss Everdeen", "Kevin 11", "Kick-Ass", "Kid Flash", "Kid Flash II", "Killer Croc", "Killer Frost", "Kilowog", "King Kong", "King Shark", "Kingpin",
  "Klaw", "Kool-Aid Man", "Kraven II", "Kraven the Hunter", "Krypto", "Kyle Rayner", "Kylo Ren", "Lady Bullseye", "Lady Deathstrike", "Leader", "Leech",
  "Legion", "Leonardo", "Lex Luthor", "Light Lass", "Lightning Lad", "Lightning Lord", "Living Brain", "Living Tribunal", "Liz Sherman", "Lizard", "Lobo",
  "Loki", "Longshot", "Luke Cage", "Luke Campbell", "Luke Skywalker", "Luna", "Lyja", "Mach-IV", "Machine Man", "Magneto", "Magog", "Magus", "Man of Miracles",
  "Man-Bat", "Man-Thing", "Man-Wolf", "Mandarin", "Mantis", "Martian Manhunter", "Marvel Girl", "Master Brood", "Master Chief", "Match", "Matt Parkman",
  "Maverick", "Maxima", "Maya Herrera", "Medusa", "Meltdown", "Mephisto", "Mera", "Metallo", "Metamorpho", "Meteorite", "Metron", "Micah Sanders",
  "Michelangelo", "Micro Lad", "Mimic", "Minna Murray", "Misfit", "Miss Martian", "Mister Fantastic", "Mister Freeze", "Mister Knife", "Mister Mxyzptlk",
  "Mister Sinister", "Mister Zsasz", "Mockingbird", "MODOK", "Mogo", "Mohinder Suresh", "Moloch", "Molten Man", "Monarch", "Monica Dawson", "Moon Knight",
  "Moonstone", "Morlun", "Morph", "Moses Magnum", "Mr Immortal", "Mr Incredible", "Ms Marvel II", "Multiple Man", "Mysterio", "Mystique", "Namor",
  "Namor", "Namora", "Namorita", "Naruto Uzumaki", "Nathan Petrelli", "Nebula", "Negasonic Teenage Warhead", "Nick Fury", "Nightcrawler", "Nightwing",
  "Niki Sanders", "Nina Theroux", "Nite Owl II", "Northstar", "Nova", "Nova", "Odin", "Offspring", "Omega Red", "Omniscient", "One Punch Man", "One-Above-All",
  "Onslaught", "Oracle", "Osiris", "Overtkill", "Ozymandias", "Parademon", "Paul Blart", "Penance", "Penance I", "Penance II", "Penguin", "Phantom", "Phantom Girl",
  "Phoenix", "Plantman", "Plastic Lad", "Plastic Man", "Plastique", "Poison Ivy", "Polaris", "Power Girl", "Power Man", "Predator", "Professor X", "Professor Zoom",
  "Psylocke", "Punisher", "Purple Man", "Pyro", "Q", "Quantum", "Question", "Quicksilver", "Quill", "Ra's Al Ghul", "Rachel Pirzad", "Rambo", "Raphael", "Raven",
  "Ray", "Razor-Fist II", "Red Arrow", "Red Hood", "Red Hulk", "Red Mist", "Red Robin", "Red Skull", "Red Tornado", "Redeemer II", "Redeemer III", "Renata Soliz",
  "Rey", "Rhino", "Rick Flag", "Riddler", "Rip Hunter", "Ripcord", "Robin", "Robin II", "Robin III", "Robin V", "Robin VI", "Rocket Raccoon", "Rogue", "Ronin",
  "Rorschach", "Sabretooth", "Sage", "Sandman", "Sasquatch", "Sauron", "Savage Dragon", "Scarecrow", "Scarlet Spider", "Scarlet Spider II", "Scarlet Witch",
  "Scorpia", "Scorpion", "Sebastian Shaw", "Sentry", "Shadow King", "Shadow Lass", "Shadowcat", "Shang-Chi", "Shatterstar", "She-Hulk", "She-Thing", "Shocker",
  "Shriek", "Shrinking Violet", "Sif", "Silk", "Silk Spectre", "Silk Spectre II", "Silver Surfer", "Silverclaw", "Simon Baz", "Sinestro", "Siren", "Siren II",
  "Siryn", "Skaar", "Snake-Eyes", "Snowbird", "Sobek", "Solomon Grundy", "Songbird", "Space Ghost", "Spawn", "Spectre", "Speedball", "Speedy", "Speedy", "Spider-Carnage",
  "Spider-Girl", "Spider-Gwen", "Spider-Man", "Spider-Man", "Spider-Man", "Spider-Woman", "Spider-Woman II", "Spider-Woman III", "Spider-Woman IV", "Spock",
  "Spyke", "Stacy X", "Star-Lord", "Stardust", "Starfire", "Stargirl", "Static", "Steel", "Stephanie Powell", "Steppenwolf", "Storm", "Stormtrooper", "Sunspot",
  "Superboy", "Superboy-Prime", "Supergirl",   "Superboy", "Superboy-Prime", "Supergirl", "Superman", "Swamp Thing", "Swarm", "Sylar", "Synch", "T-1000", "T-800", "T-850", "T-X", "Taskmaster",
  "Tempest", "Thanos", "The Cape", "The Comedian", "Thing", "Thor", "Thor Girl", "Thunderbird", "Thunderbird II", "Thunderbird III", "Thunderstrike",
  "Thundra", "Tiger Shark", "Tigra", "Tinkerer", "Titan", "Toad", "Toxin", "Toxin", "Tracy Strauss", "Trickster", "Trigon", "Triplicate Girl", "Triton",
  "Two-Face", "Ultragirl", "Ultron", "Utgard-Loki", "Vagabond", "Valerie Hart", "Valkyrie", "Vanisher", "Vegeta", "Venom", "Venom II", "Venom III",
  "Venompool", "Vertigo II", "Vibe", "Vindicator", "Vindicator", "Violator", "Violet Parr", "Vision", "Vision II", "Vixen", "Vulcan", "Vulture",
  "Walrus", "War Machine", "Warbird", "Warlock", "Warp", "Warpath", "Wasp", "Watcher", "Weapon XI", "White Canary", "White Queen", "Wildfire",
  "Winter Soldier", "Wiz Kid", "Wolfsbane", "Wolverine", "Wonder Girl", "Wonder Man", "Wonder Woman", "Wondra", "Wyatt Wingfoot", "X-23", "X-Man",
  "Yellow Claw", "Yellowjacket", "Yellowjacket II", "Ymir", "Yoda", "Zatanna", "Zoom"
];

input.addEventListener('keyup', function(){
  characterList.innerHTML = '';
  let searched = input.value.toLowerCase();
  if(searched.length > 1){
  const matchingNames = characterNames.filter(name => name.toLowerCase().startsWith(searched));
  const matchingNames2 = characterNames.filter(name => name.toLowerCase().includes(searched));

  matchingNames.forEach(name => {
    console.log('stop')
    const option = document.createElement('option');
    return axios.get(`https://superheroapi.com/api/${apiKey}/search/${name}`)
    .then(hero => {
      let heroInfo = hero.data.results
      let heroObj = heroInfo.find(hname => hname.name === option.value)
      console.log("heroInfo", heroInfo)

      if(hero.data.results.length > 1){
        let i = 0;
        do{
          console.log("heroFullName 1", hero.data.results[i].biography['full-name'])
          let fullName = hero.data.results[i].biography['full-name'];
          option.value = `${name} -1 ${fullName}`;
          characterList.appendChild(option);
          i++;
        }
        while(i<hero.data.results.length)
      }
      else{
        console.log("heroFullName 2", hero.data.results[0].biography['full-name'])
        let fullName = hero.data.results[0].biography['full-name'];
        option.value = `${name} -2 ${fullName}`;
        characterList.appendChild(option);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });

  // matchingNames2.forEach(name => {
  //   if(matchingNames.includes(name)){
  //   }
  //   else{
  //     const option = document.createElement('option');
  //     option.value = name;
  //     characterList.appendChild(option);
  //   }
  // });
  }
  else{
    characterList.innerHTML = '';
  }
})

searchButton.addEventListener('click', async function(){
    const name = input.value.replace(' ', '');
    console.log(`https://superheroapi.com/api/${apiKey}/search/${name}`)
    return await axios.get(`https://superheroapi.com/api/${apiKey}/search/${name}`)
      .then(hero => {
        let superHero = hero.data.results;
        let heroSearch = input.value;
        if(isHero1 == false){
          if(hero.data.results.length > 1){
            let i = 0;
            multi.insertAdjacentHTML('beforeend', `<li class = "pickPlease">Please Pick an Option Below:</li>`)
            searchButton.disabled = true;
            input.disabled = true;
            do{
              multi.insertAdjacentHTML('beforeend', `<li class = "option${i+1}">${hero.data.results[i].biography['full-name']}</li>`)
              console.log(hero.data.results[i].biography['full-name'])
              i++;
            }
            while(i<hero.data.results.length);

            let option1 = document.querySelector('.option1');
            let option2 = document.querySelector('.option2');
            let option3 = document.querySelector('.option3');
            let option4 = document.querySelector('.option4');
            let option5 = document.querySelector('.option5');
            let option6 = document.querySelector('.option6');
            let option7 = document.querySelector('.option7');
            let option8 = document.querySelector('.option8');
            let option9 = document.querySelector('.option9');
            let option10 = document.querySelector('.option10');

            option1.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[0].biography;
              superHero = hero.data.results[0].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })
            option2.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[1].biography;
              superHero = hero.data.results[1].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })
            option3.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[2].biography;
              superHero = hero.data.results[2].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })
            option4.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[3].biography;
              superHero = hero.data.results[3].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })
            option5.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[4].biography;
              superHero = hero.data.results[4].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })
            option6.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[5].biography;
              superHero = hero.data.results[5].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })
            option7.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[6].biography;
              superHero = hero.data.results[6].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })
            option8.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[7].biography;
              superHero = hero.data.results[7].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })
            option9.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[8].biography;
              superHero = hero.data.results[8].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })
            option10.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[9].biography;
              superHero = hero.data.results[9].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })

          }
          else{
            superHeroBio = hero.data.results[0].biography;
            superHero = hero.data.results[0].powerstats;
            heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
            heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
            heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
            heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
            heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
            heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
            heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
          }
        heroName1.innerText = heroSearch;
        isHero1 = true;
        console.log('Data:', superHero);
        input.value = "";
      }
      else{
        if(hero.data.results.length > 1){
          let i = 0;
          multi.insertAdjacentHTML('beforeend', `<li class = "pickPlease">Please Pick an Option Below:</li>`)
          searchButton.disabled = true;
          input.disabled = true;
          do{
            multi.insertAdjacentHTML('beforeend', `<li class = "option${i+1}">${hero.data.results[i].biography['full-name']}</li>`)
            console.log(hero.data.results[i].biography['full-name'])
            i++;
          }
          while(i<hero.data.results.length);

          let option1 = document.querySelector('.option1');
            let option2 = document.querySelector('.option2');
            let option3 = document.querySelector('.option3');
            let option4 = document.querySelector('.option4');
            let option5 = document.querySelector('.option5');
            let option6 = document.querySelector('.option6');
            let option7 = document.querySelector('.option7');
            let option8 = document.querySelector('.option8');
            let option9 = document.querySelector('.option9');
            let option10 = document.querySelector('.option10');

            option1.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[0].biography;
              superHero = hero.data.results[0].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })
            option2.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[1].biography;
              superHero = hero.data.results[1].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })
            option3.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[2].biography;
              superHero = hero.data.results[2].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })
            option4.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[3].biography;
              superHero = hero.data.results[3].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })
            option5.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[4].biography;
              superHero = hero.data.results[4].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })
            option6.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[5].biography;
              superHero = hero.data.results[5].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })
            option7.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[6].biography;
              superHero = hero.data.results[6].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })
            option8.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[7].biography;
              superHero = hero.data.results[7].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })
            option9.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[8].biography;
              superHero = hero.data.results[8].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })
            option10.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[9].biography;
              superHero = hero.data.results[9].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })

        }
        else{
          superHeroBio = hero.data.results[0].biography;
          superHero = hero.data.results[0].powerstats;
          heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
          heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
          heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
          heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
          heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
          heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
          heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
        }
          heroName2.innerText = heroSearch;
          isHero2 = true;
        if(isHero2 == true){
          searchButton.disabled = true;
          input.disabled = true;
        }
        if(isHero1 == false && isHero2 == false){
          alert("Invalid Hero!");
        }
        console.log('Data:', superHero);
        input.value = "";
      }
      })
      .catch(error => {
        console.error('Error:', error);
      });

})

input.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
  const name = input.value.replace(' ', '');
  console.log(`https://superheroapi.com/api/${apiKey}/search/${name}`)
  return await axios.get(`https://superheroapi.com/api/${apiKey}/search/${name}`)
    .then(hero => {
      let superHero;
      let heroSearch = input.value;
      if(isHero1 == false){
        if(hero.data.results.length > 1){
          let i = 0;
          multi.insertAdjacentHTML('beforeend', `<li class = "pickPlease">Please Pick an Option Below:</li>`)
          searchButton.disabled = true;
          input.disabled = true;
          do{
            multi.insertAdjacentHTML('beforeend', `<li class = "option${i+1}">${hero.data.results[i].biography['full-name']}</li>`)
            console.log(hero.data.results[i].biography['full-name'])
            i++;
          }
          while(i<hero.data.results.length);

          let option1 = document.querySelector('.option1');
            let option2 = document.querySelector('.option2');
            let option3 = document.querySelector('.option3');
            let option4 = document.querySelector('.option4');
            let option5 = document.querySelector('.option5');
            let option6 = document.querySelector('.option6');
            let option7 = document.querySelector('.option7');
            let option8 = document.querySelector('.option8');
            let option9 = document.querySelector('.option9');
            let option10 = document.querySelector('.option10');

            option1.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[0].biography;
              superHero = hero.data.results[0].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })
            option2.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[1].biography;
              superHero = hero.data.results[1].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })
            option3.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[2].biography;
              superHero = hero.data.results[2].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })
            option4.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[3].biography;
              superHero = hero.data.results[3].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })
            option5.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[4].biography;
              superHero = hero.data.results[4].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })
            option6.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[5].biography;
              superHero = hero.data.results[5].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })
            option7.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[6].biography;
              superHero = hero.data.results[6].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })
            option8.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[7].biography;
              superHero = hero.data.results[7].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })
            option9.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[8].biography;
              superHero = hero.data.results[8].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })
            option10.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[9].biography;
              superHero = hero.data.results[9].powerstats;
              heroStats1.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName1.innerText = heroSearch;
                input.value = "";
                isHero1 = true;
            })

        }
        else{
          superHeroBio = hero.data.results[0].biography;
          superHero = hero.data.results[0].powerstats;
          heroStats1.insertAdjacentHTML('beforeend',`<li class="listName2">${superHeroBio['full-name']}</li>`)
          heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
          heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
          heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
          heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
          heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
          heroStats1.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
        }
          heroName1.innerText = heroSearch;
          isHero1 = true;
        console.log('Data:', superHero);
        input.value = "";
      }
      else{
        if(hero.data.results.length > 1){
          let i = 0;
          multi.insertAdjacentHTML('beforeend', `<li class = "pickPlease">Please Pick an Option Below:</li>`)
          searchButton.disabled = true;
          input.disabled = true;
          do{
            multi.insertAdjacentHTML('beforeend', `<li class = "option${i+1}">${hero.data.results[i].biography['full-name']}</li>`)
            console.log(hero.data.results[i].biography['full-name'])
            i++;
          }
          while(i<hero.data.results.length);

          let option1 = document.querySelector('.option1');
            let option2 = document.querySelector('.option2');
            let option3 = document.querySelector('.option3');
            let option4 = document.querySelector('.option4');
            let option5 = document.querySelector('.option5');
            let option6 = document.querySelector('.option6');
            let option7 = document.querySelector('.option7');
            let option8 = document.querySelector('.option8');
            let option9 = document.querySelector('.option9');
            let option10 = document.querySelector('.option10');

            option1.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[0].biography;
              superHero = hero.data.results[0].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })
            option2.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[1].biography;
              superHero = hero.data.results[1].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })
            option3.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[2].biography;
              superHero = hero.data.results[2].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })
            option4.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[3].biography;
              superHero = hero.data.results[3].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })
            option5.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[4].biography;
              superHero = hero.data.results[4].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })
            option6.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[5].biography;
              superHero = hero.data.results[5].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })
            option7.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[6].biography;
              superHero = hero.data.results[6].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })
            option8.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[7].biography;
              superHero = hero.data.results[7].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })
            option9.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[8].biography;
              superHero = hero.data.results[8].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })
            option10.addEventListener('click', async function(event){
              superHeroBio = hero.data.results[9].biography;
              superHero = hero.data.results[9].powerstats;
              heroStats2.insertAdjacentHTML('beforeend',`<li class="listName1">${superHeroBio['full-name']}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
              heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
              searchButton.disabled = false;
              input.disabled = false;
              while (multi.firstChild) {
                multi.removeChild(multi.firstChild);
                }
                heroName2.innerText = heroSearch;
                input.value = "";
                isHero2 = true;
            })

        }
        else{
          superHeroBio = hero.data.results[0].biography;
          superHero = hero.data.results[0].powerstats;
          heroStats2.insertAdjacentHTML('beforeend',`<li class="listName">${superHeroBio['full-name']}</li>`)
          heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
          heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
          heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
          heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
          heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
          heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
        }
          heroName2.innerText = heroSearch;
          isHero2 = true;
        if(isHero2 == true){
          searchButton.disabled = true;
          input.disabled = true;
        }
        if(isHero1 == false && isHero2 == false){
          alert("Invalid Hero!");
        }
        console.log('Data:', superHero);
        input.value = "";
      }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
})