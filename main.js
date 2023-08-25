const input = document.getElementById("input");
const posta = document.getElementById("posta");
const areaTweet = document.getElementById("areaTweet");
const tweets = [];
const cerca = document.getElementById("cerca");
const nomi = [
  "Marcelo Rossi",
  "Gabbo",
  "Carmine",
  "Mcfly",
  "Pippo",
  "Pluto",
  "Luigi",
  "Mario ",
];
const tag = ["PadreMarceloRossi", "Man", "KuiMcfly", "Pippo10"];
const img = [
  "./images/1.jpg",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
  "./images/5.jpg",
  "./images/6.jpg",
];

posta.addEventListener("click", function () {
  tweets.push({
    userAvatar: img[Math.floor(Math.random() * img.length)],
    username: nomi[Math.floor(Math.random() * nomi.length)],
    tag: tag[Math.floor(Math.random() * tag.length)],
    postimg: img[Math.floor(Math.random() * img.length)],
    content: input.value,
    date: new Date(),
    liked: false,
  });
  showTweets();
 
  
});
cerca.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const cercato = cerca.value;
    const tweetsFil = tweets.filter((tweet) => {
      return tweet.content.includes(cercato);
    });
    showTweets(tweetsFil);
  }
});
function showTweets(tweetsList = tweets) {
  areaTweet.innerHTML = "";
  tweetsList.forEach((tweet) => {
    areaTweet.innerHTML += ` <div class="my-2">
        <div>
          <img
          src=${tweet.userAvatar}
          alt="ds icon"
          class="w-[36px] h-[34px] rounded-full"
          />
        </div>
        <div class="flex flex-col"> 
          <div class="flex items-center"> 
            <h2 class="text-white font-bold text-sm">
              ${tweet.username}
            </h2>
            <p class="ml-2 text-gray-500">${
              tweet.tag
            } · ${tweet.date.getDay()}</p> 
          </div>
          <div class="items-center ">          
            <p>${tweet.content}</p>
            <img src=${tweet.postimg} alt="gigachad" class="w-3/5">
          </div>
          <div class="flex w-1/2 justify-between my-4">
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M272 416c17.7 0 32-14.3 32-32s-14.3-32-32-32H160c-17.7 0-32-14.3-32-32V192h32c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-64-64c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8l32 0 0 128c0 53 43 96 96 96H272zM304 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l112 0c17.7 0 32 14.3 32 32l0 128H416c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0V192c0-53-43-96-96-96L304 96z"/></svg>
            <?xml version="1.0" encoding="iso-8859-1"?>
            <svg fill=${tweet.liked ? "#F00" : "#000"}   height="800px" width="800px" version="1.1" id="cuore" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-4 h-4"   
               viewBox="0 0 471.701 471.701" xml:space="preserve">
            <g>
              <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                C444.801,187.101,434.001,213.101,414.401,232.701z"/>
            </g>
            </svg>
           </div>
        </div>
      </div>`;
  });
  const cuori = document.querySelectorAll("#cuore")
  cuori.forEach((cuoreBtn, i )=>{
cuoreBtn.addEventListener("click", function (){
 tweets[i].liked=!tweets [i].liked; 
 showTweets()
}) 

  })
  
}
