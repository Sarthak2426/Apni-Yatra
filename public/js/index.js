var i = 0,
  images = [
    "https://www.touropia.com/gfx/b/2018/07/delhi.jpg",
    "https://i.ytimg.com/vi/9ZKzuD9hhWI/maxresdefault.jpg",
    "https://cdn1.tripoto.com/media/filter/tst/img/1524784/Image/1585048644_3.jpg",
    "https://i0.wp.com/onedayitinerary.com/wp-content/uploads/2020/02/One-day-in-Mumbai-Itinerary.jpg?fit=800%2C600&ssl=1",
    "https://1.bp.blogspot.com/-qzPWu1xn0Kc/YJCxpw2oDOI/AAAAAAAAGL4/2zk5zHwR6uwNmLFEMdTk3Bzb223Uv6-EwCLcBGAsYHQ/s1228/Dehradun%2B-%2Bthe%2Bcity%2Bof%2Blove.jpg",
  ];
function mySlide(param) {
  if (param === "next") {
    i++;
    if (i === images.length) {
      i = images.length - 1;
    }
  } else {
    i--;
    if (i < 0) {
      i = 0;
    }
  }
  document.getElementById("slide").src = images[i];
}

async function getFile() {
  let myPromise = new Promise(function (resolve) {
    let req = new XMLHttpRequest();
    req.open("GET", "index.ejs");
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        resolve("File not Found");
      }
    };
    req.send();
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

getFile();
