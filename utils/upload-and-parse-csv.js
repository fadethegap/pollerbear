/*------ Method for read uploded csv file ------*/
function uploadDealcsv() {}

useEffect(() => {
  /*------ Method for read uploded csv file ------*/
  uploadDealcsv.prototype.getCsv = function (e) {
    let input = document.getElementById("dealCsv");
    input.addEventListener("change", function () {
      if (this.files && this.files[0]) {
        var myFile = this.files[0];
        var reader = new FileReader();

        reader.addEventListener("load", function (e) {
          let csvdata = e.target.result;
          parseCsv.getParsecsvdata(csvdata); // calling function for parse csv data
        });

        reader.readAsBinaryString(myFile);
      }
    });
  };

  /*------- Method for parse csv data and display --------------*/
  uploadDealcsv.prototype.getParsecsvdata = function (data) {
    let parsedata = [];
    let newLinebrk = data.split("\n");
    for (let i = 0; i < newLinebrk.length; i++) {
      parsedata.push(newLinebrk[i].split(","));
    }

    const objArr = parsedata.map((row, i) => {
      let person = {};
      person.name = row[0];
      person.phone = row[1];
      return person;
    });

    return objArr;
  };

  var parseCsv = new uploadDealcsv();
  parseCsv.getCsv();
});
