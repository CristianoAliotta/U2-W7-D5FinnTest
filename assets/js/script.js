async function displayDrivers() {
  let apiDrivers = await fetch("http://ergast.com/api/f1/drivers.json?limit=150");
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

window.onload = async () => {
  await displayDrivers();
};
