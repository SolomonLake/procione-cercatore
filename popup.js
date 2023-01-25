let imageUrl = "";

function findRaccoon() {
  const offset = Math.floor(Math.random() * 400);
  fetch(
    "https://api.bing.microsoft.com/v7.0/custom/images/search?q=raccoon&offset=" +
      offset +
      "&customconfig=f620a618-d7cc-46be-9309-ece6b5293814&mkt=" +
      ["ko-KR", "en-US", "ru-RU"][Math.floor(Math.random() * 3)] +
      "&count=1",
    {
      headers: {
        "Ocp-Apim-Subscription-Key": "017877589259411093af6ef3b0b554d5",
        "cache-control": "no-cache",
      },
    }
  )
    .then(function (imageResourceResponse) {
      imageResourceResponse.json().then(function (imageResource) {
        imageUrl = imageResource.value[0].contentUrl;
        document.getElementById("raccoonImage").src = imageUrl;
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

function copyLink() {
  navigator.clipboard.writeText(imageUrl);
}

document.getElementById("copyLinkButton").onclick = copyLink;
document.getElementById("findRaccoonButton").onclick = findRaccoon;

findRaccoon();
