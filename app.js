//HTML Elements//
const heroName1 = document.querySelector('.hero1');
const heroStats1 = document.querySelector('.stats1');
const heroName2 = document.querySelector('.hero2');
const heroStats2 = document.querySelector('.stats2');
const input = document.querySelector('.searchValue');
const searchButton = document.querySelector('.searchBtn');
const multi = document.querySelector('.multiOptions');

//Boolean to know which hero slot to fill
let isHero1 = false; //Hero slot 1 not full on startup
let isHero2 = false; //Hero slot 2 not full on startup

//Defining superHero for later user
let superHero;
let superHeroBio;

//Superhero API key
const apiKey = '6444932778877033';




//////////////////////////////////////////////////////////////////////////////////////////////////
//If multiple options for a hero appear, this helps decide which to show, hero slot 1
function optionsListener1(option, index, hero){
  superHeroBio = hero.data.results[index].biography;
  superHero = hero.data.results[index].powerstats;

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

  heroName1.innerText = hero.data.results[index].name;
  input.value = "";
  isHero1 = true;
}

//If multiple options for a hero appear, this helps decide which to show, hero slot 2
function optionsListener2(option, index, hero){
  superHeroBio = hero.data.results[index].biography;
  superHero = hero.data.results[index].powerstats;

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

  heroName2.innerText = hero.data.results[index].name;
  input.value = "";
  isHero2 = true;
  if(isHero2 == true){
    searchButton.disabled = true;
    input.disabled = true;
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////

function titleCase(string) {
  var sentence = string.toLowerCase().split(" ");
  for(var i = 0; i< sentence.length; i++){
     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
document.write(sentence.join(" "));
return sentence;
}

//Event listener for search button click
searchButton.addEventListener('click', async function(){

    const name = input.value.replace(' ', ''); //Closes gaps on search term to format for URL search

    ////FOR DEBUGGING////
    console.log(`https://superheroapi.com/api/${apiKey}/search/${name}`)
    ////FOR DEBUGGING////

    //Getting from Superhero API with API key and search input(name)
    return await axios.get(`https://superheroapi.com/api/${apiKey}/search/${name}`)
      .then(hero => {
        let heroSearch = input.value;

        //Input hero into hero spot 1!
        if(isHero1 == false){

          //If multiple options
          if(hero.data.results.length > 1){
            let i = 0;
            multi.insertAdjacentHTML('beforeend', `<li class = "pickPlease">Please Pick an Option Below:</li>`)
            searchButton.disabled = true;
            input.disabled = true;
            do{
              multi.insertAdjacentHTML('beforeend', `<li id = "options" class = "option${i+1}">${hero.data.results[i].biography['full-name']}</li>`)
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

            try{
            option1.addEventListener('click', async function(event){optionsListener1(option1, 0, hero)})
            option2.addEventListener('click', async function(event){optionsListener1(option2, 1, hero)})
            option3.addEventListener('click', async function(event){optionsListener1(option3, 2, hero)})
            option4.addEventListener('click', async function(event){optionsListener1(option4, 3, hero)})
            option5.addEventListener('click', async function(event){optionsListener1(option5, 4, hero)})
            option6.addEventListener('click', async function(event){optionsListener1(option6, 5, hero)})
            option7.addEventListener('click', async function(event){optionsListener1(option7, 6, hero)})
            option8.addEventListener('click', async function(event){optionsListener1(option8, 7, hero)})
            option9.addEventListener('click', async function(event){optionsListener1(option9, 8, hero)})
            option10.addEventListener('click', async function(event){optionsListener1(option10, 9, hero)})
            }
            catch(err){
              console.log('')
            }
          }

          //If not multiple options
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
        isHero1 = true;
        console.log('Data:', superHero);
        input.value = "";
        heroName1.innerText = hero.data.results[0].name;
      }

      //Input hero into hero spot 2!
      else{

        //If multiple options
        if(hero.data.results.length > 1){
          let i = 0;
          multi.insertAdjacentHTML('beforeend', `<li class = "pickPlease">Please Pick an Option Below:</li>`)
          searchButton.disabled = true;
          input.disabled = true;
          do{
            multi.insertAdjacentHTML('beforeend', `<li id = "options" class = "option${i+1}">${hero.data.results[i].biography['full-name']}</li>`)
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

            try{
            option1.addEventListener('click', async function(event){optionsListener2(option1, 0, hero)})
            option2.addEventListener('click', async function(event){optionsListener2(option2, 1, hero)})
            option3.addEventListener('click', async function(event){optionsListener2(option3, 2, hero)})
            option4.addEventListener('click', async function(event){optionsListener2(option4, 3, hero)})
            option5.addEventListener('click', async function(event){optionsListener2(option5, 4, hero)})
            option6.addEventListener('click', async function(event){optionsListener2(option6, 5, hero)})
            option7.addEventListener('click', async function(event){optionsListener2(option7, 6, hero)})
            option8.addEventListener('click', async function(event){optionsListener2(option8, 7, hero)})
            option9.addEventListener('click', async function(event){optionsListener2(option9, 8, hero)})
            option10.addEventListener('click', async function(event){optionsListener2(option10, 9, hero)})
            }
            catch(err){
              console.log('')
            }
        }

        //If not multiple options
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
        isHero2 = true;
        console.log('Data:', superHero);
        input.value = "";
        heroName2.innerText = hero.data.results[0].name;

        if(isHero2 == true){
          searchButton.disabled = true;
          input.disabled = true;
        }

      }
      })
      .catch(error => {
        console.error('Error:', error);
      });

})

input.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){

    const name = input.value.replace(' ', ''); //Closes gaps on search term to format for URL search

    ////FOR DEBUGGING////
    console.log(`https://superheroapi.com/api/${apiKey}/search/${name}`)
    ////FOR DEBUGGING////

    //Getting from Superhero API with API key and search input(name)
    return await axios.get(`https://superheroapi.com/api/${apiKey}/search/${name}`)
      .then(hero => {
        let heroSearch = input.value;

        //Input hero into hero spot 1!
        if(isHero1 == false){

          //If multiple options
        if(hero.data.results.length > 1){
          let i = 0;
          multi.insertAdjacentHTML('beforeend', `<li class = "pickPlease">Please Pick an Option Below:</li>`)
          searchButton.disabled = true;
          input.disabled = true;
          do{
            multi.insertAdjacentHTML('beforeend', `<li id = "options" class = "option${i+1}">${hero.data.results[i].biography['full-name']}</li>`)
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

          try{
            option1.addEventListener('click', async function(event){optionsListener1(option1, 0, hero)})
            option2.addEventListener('click', async function(event){optionsListener1(option2, 1, hero)})
            option3.addEventListener('click', async function(event){optionsListener1(option3, 2, hero)})
            option4.addEventListener('click', async function(event){optionsListener1(option4, 3, hero)})
            option5.addEventListener('click', async function(event){optionsListener1(option5, 4, hero)})
            option6.addEventListener('click', async function(event){optionsListener1(option6, 5, hero)})
            option7.addEventListener('click', async function(event){optionsListener1(option7, 6, hero)})
            option8.addEventListener('click', async function(event){optionsListener1(option8, 7, hero)})
            option9.addEventListener('click', async function(event){optionsListener1(option9, 8, hero)})
            option10.addEventListener('click', async function(event){optionsListener1(option10, 9, hero)})
          }
          catch(err){
            console.log('')
          }
        }

        //If not multiple options
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
        isHero1 = true;
        console.log('Data:', superHero);
        input.value = "";
        heroName1.innerText = hero.data.results[0].name;
      }

      //Input hero into hero spot 2!
      else{

        //If multiple options
        if(hero.data.results.length > 1){
          let i = 0;
          multi.insertAdjacentHTML('beforeend', `<li id = "options" class = "pickPlease">Please Pick an Option Below:</li>`)
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

            try{
            option1.addEventListener('click', async function(event){optionsListener2(option1, 0, hero)})
            option2.addEventListener('click', async function(event){optionsListener2(option2, 1, hero)})
            option3.addEventListener('click', async function(event){optionsListener2(option3, 2, hero)})
            option4.addEventListener('click', async function(event){optionsListener2(option4, 3, hero)})
            option5.addEventListener('click', async function(event){optionsListener2(option5, 4, hero)})
            option6.addEventListener('click', async function(event){optionsListener2(option6, 5, hero)})
            option7.addEventListener('click', async function(event){optionsListener2(option7, 6, hero)})
            option8.addEventListener('click', async function(event){optionsListener2(option8, 7, hero)})
            option9.addEventListener('click', async function(event){optionsListener2(option9, 8, hero)})
            option10.addEventListener('click', async function(event){optionsListener2(option10, 9, hero)})
            }
            catch(err){
              console.log('')
            }
        }

        //If not multiple options
        else{
          superHeroBio = hero.data.results[0].biography;
          superHero = hero.data.results[0].powerstats;
          heroStats2.insertAdjacentHTML('beforeend',`<li class="listName2">${superHeroBio['full-name']}</li>`)
          heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.combat}</li>`)
          heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.durability}</li>`)
          heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.intelligence}</li>`)
          heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.power}</li>`)
          heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.speed}</li>`)
          heroStats2.insertAdjacentHTML('beforeend',`<li>${superHero.strength}</li>`)
        }
        isHero2 = true;
        console.log('Data:', superHero);
        input.value = "";
        heroName2.innerText = hero.data.results[0].name;

        if(isHero2 == true){
          searchButton.disabled = true;
          input.disabled = true;
        }

      }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
})