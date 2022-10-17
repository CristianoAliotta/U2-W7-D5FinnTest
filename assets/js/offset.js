let page = 0;
async function displayDrivers() {
  let apiDrivers = await fetch("http://ergast.com/api/f1/drivers.json?offset=" + page);
  let driversObject = await apiDrivers.json();
  let arrayDrivers = driversObject.MRData.DriverTable.Drivers;
  for (const driverLicense of arrayDrivers) {
    document.getElementById("container").innerHTML += `<tr>
      <th scope="row"><img class="dIcon" src="./assets/images/driver.png" alt="driver" /></i></th>
      <td>${driverLicense.givenName}</td>
      <td>${driverLicense.familyName}</td>
      <td>${driverLicense.nationality}</td>
      <td><a class="text-danger" target="_blank" href="${driverLicense.url}"><img class="dIcon" src="./assets/images/book.png" alt=""></a></td>
    </tr>`;
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
window.onscroll = function (ev) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    newLoad();
  }
};
function newLoad() {
  page += 30;
  displayDrivers();
}
window.onload = async () => {
  await displayDrivers();
};
