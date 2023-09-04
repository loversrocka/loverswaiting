function currentTime() {
    const dateNow = new Date();
    const dateFinal = new Date("September 5, 2023 16:18:00");
    const diffTime = new Date(Math.abs(dateNow - dateFinal));

    const dateHours = diffTime.getHours();
    const dateMins = diffTime.getMinutes();
    const dateSecs = diffTime.getSeconds();

    var result = dateHours < 10 ? "0" + dateHours : dateHours;
    result += ":" + (dateMins < 10 ? "0" + dateMins : dateMins);
    result += ":" + (dateSecs < 10 ? "0" + dateSecs : dateSecs);
    document.getElementById("clock").innerText =
      result; /* adding time to the div */
    var t = setTimeout(function () {
      currentTime();
    }, 1000); /* setting timer */
  }

  currentTime();