import {
   SERVERURL,
   APIKEY,
   searchArea,
   searchBtn,
   temperature,
   weatherImg,
   currentCity,
} from "./view.js";

let data;

async function fetchData(city) {
   if (data === undefined || data.name.toLowerCase() !== searchArea.value.toLowerCase()) {
      const url = `${SERVERURL}?q=${city}&appid=${APIKEY}&units=metric`;
      data = await fetch(url)
         .then((res) => {
            if (res.ok) return res.json();
            else if (res.status === 404) throw new Error(`city not found`);
            else if (res.status === 401) throw new Error(`incorrect url`);
         })
         .catch((error) => alert(error));
      searchArea.value = "";
   }
}
function tabNowFill() {
   if (data !== undefined) {
      temperature.textContent = Math.round(data.main.temp);
      weatherImg.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
      currentCity.textContent = data.name;
   }
}
searchArea.addEventListener("keydown", async (event) => {
   if (event.key === "Enter") {
      await fetchData(searchArea.value);
      tabNowFill();
   }
});
searchBtn.addEventListener("click", async () => {
   await fetchData(searchArea.value);
   tabNowFill();
});
