module.exports = function toReadable (number) {
    var mem=[];
    function hundreds(elem) {
      switch (elem) {
        case "0":
          arr.splice(0, 1);
          break;
        case "1":
          mem.push("one hundred");
          arr.splice(0, 1);
          break;
        case "2":
          mem.push("two hundred");
          arr.splice(0, 1);
          break;
        case "3":
          mem.push("three hundred");
          arr.splice(0, 1);
          break;
        case "4":
          mem.push("four hundred");
          arr.splice(0, 1);
          break;
        case "5":
          mem.push("five hundred");
          arr.splice(0, 1);
          break;
        case "6":
          mem.push("six hundred");
          arr.splice(0, 1);
          break;
        case "7":
          mem.push("seven hundred");
          arr.splice(0, 1);
          break;
        case "8":
          mem.push("eight hundred");
          arr.splice(0, 1);
          break;
        case "9":
          mem.push("nine hundred");
          arr.splice(0, 1);
          break;
        default:
          break;
      }
    }

    function tens(elem, elem1, extent) {
      switch (elem+elem1) {
        case "10":
          mem.push("ten")
          if (extent!== null){
            mem.push(extent)}
          arr.splice(0, 2)
          break;
         case "11":
          mem.push("eleven")
          if (extent!== null){
            mem.push(extent)}
          arr.splice(0, 2)
          break;
        case "12":
          mem.push("twelve")
          if (extent!== null){
            mem.push(extent)}
          arr.splice(0, 2)
          break;
        case "13":
          mem.push("thirteen")
          if (extent!== null){
            mem.push(extent)}
          arr.splice(0, 2)
          break;
        case "14":
          mem.push("fourteen")
          if (extent!== null){
            mem.push(extent)}
          arr.splice(0, 2)
          break;
         case "15":
          mem.push("fifteen")
          if (extent!== null){
            mem.push(extent)}
          arr.splice(0, 2)
          break;
        case "16":
          mem.push("sixteen")
          if (extent!== null){
            mem.push(extent)}
          arr.splice(0, 2)
          break;
        case "17":
          mem.push("seventeen")
          if (extent!== null){
            mem.push(extent)}
          arr.splice(0, 2)
          break;
        case "18":
          mem.push("eighteen")
          if (extent!== null){
            mem.push(extent)}
          arr.splice(0, 2)
          break;
        case "19":
          mem.push("nineteen")
          if (extent!== null){
          mem.push(extent)}
          arr.splice(0, 2)
          break;
        default:
          break;
      }
      switch (elem) {
          case "0":
            arr.splice(0, 1);
            break;
          case "2":
            mem.push("twenty");
            mem.push
            arr.splice(0, 1);
            break;
          case "3":
            mem.push("thirty");
            arr.splice(0, 1);
            break;
          case "4":
            mem.push("forty");
            arr.splice(0, 1);
            break;
          case "5":
            mem.push("fifty");
            arr.splice(0, 1);
            break;
          case "6":
            mem.push("sixty");
            arr.splice(0, 1);
            break;
          case "7":
            mem.push("seventy");
            arr.splice(0, 1);
            break;
          case "8":
            mem.push("eighty");
            arr.splice(0, 1);
            break;
          case "9":
            mem.push("ninety");
            arr.splice(0, 1);
            break;
          default:
            break;
        }
    }

    function ones(elem) {
        switch (elem) {
            case "0":
              arr.splice(0, 1);
              break;
            case "1":
              mem.push("one");
              arr.splice(0, 1);
              break;
            case "2":
              mem.push("two");
              arr.splice(0, 1);
              break;
            case "3":
              mem.push("three");
              arr.splice(0, 1);
              break;
            case "4":
              mem.push("four");
              arr.splice(0, 1);
              break;
            case "5":
              mem.push("five");
              arr.splice(0, 1);
              break;
            case "6":
              mem.push("six");
              arr.splice(0, 1);
              break;
            case "7":
              mem.push("seven");
              arr.splice(0, 1);
              break;
            case "8":
              mem.push("eight");
              arr.splice(0, 1);
              break;
            case "9":
              mem.push("nine");
              arr.splice(0, 1);
              break;
            default:
              break;
          }
    }

/*function check(elem) {
    switch (elem) {
        case "one":
        case "two":
        case "three":
        case "four":
        case "five":
        case "six":
        case "seven":
        case "eight":
        case "nine":
        case "ten":
        case "eleven":
        case "twelve":
    }
}*/
  var arr=number.toString().split("");
  if (arr.length===1&&arr[0]==="0") {return "zero"}
  if (arr.length>=8) {throw new RangeError}
  if (arr.length===7) {
    ones(arr[0]);
    mem.push("million");
  }
  if (arr.length===6) {
    hundreds(arr[0]);
  }
  if (arr.length==5) {
    tens(arr[0], arr[1], "thousand")
    }
  if (arr.length===4) {
    ones(arr[0]);
    if (mem[mem.length-1]!=="million"){
    mem.push("thousand")};
  }
  if (arr.length===3) {
    hundreds(arr[0]);
  }
  if (arr.length==2) {
    tens(arr[0], arr[1], null)
    }
  if (arr.length===1) {
    ones(arr[0]);
  }
  if (arr.length===0) {return (mem.join(" "))}
}
