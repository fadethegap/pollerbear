import React, { useState, useEffect, useRef } from "react";
import { useCampaign } from "../context/campaign";
import Person from "../components/Person";

export default function FileLoader() {
  const { list, setList } = useCampaign();
  /*------ Method for read uploded csv file ------*/
  function uploadDealcsv() {}

  // useEffect(() => {
  //   const people = async () => {
  //     const data = await getList(6);
  //     console.log(data);
  //   };
  //   people();
  // }, []);

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
      // const cleanedArr = parsedata.map((item) => {
      //   item[1].replace(/(\r\n|\n|\r)/gm, "");
      //   return item;
      // });

      // const str = JSON.stringify(dbJson);
      const objArr = parsedata.map((row, i) => {
        let person = {};
        person.name = row[0];
        person.phone = row[1].replace(/(\r\n|\n|\r)/gm, "");
        return person;
      });
      const newArr = objArr.slice(1);
      const dbJson = { metadata: newArr };

      setList(objArr);
      console.log(JSON.stringify(dbJson));
      //   console.table(parsedata);
    };

    var parseCsv = new uploadDealcsv();
    parseCsv.getCsv();
  });
  return (
    <div>
      <div className="w-96 mb-3">
        <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Upload a List
        </div>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="dealCsv"
        ></label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="dealCsv"
          type="file"
        />
      </div>
      {list && list.map((item, i) => <div key={i}>{i > 0 && item.name}</div>)}
    </div>
  );
}
