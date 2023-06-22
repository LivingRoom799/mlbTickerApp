let request = new XMLHttpRequest();
request.open("GET", "http://statsapi.mlb.com/api/v1/schedule/games/?sportId=1");
request.responseType = "json";
request.send();
request.onload = () => {
  if (request.status === 200) {
    console.log(request.response);
  } else {
    console.log(`error ${request.status} ${request.statusText}`);
  }
};
