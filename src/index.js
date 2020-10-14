module.exports = function toReadable (number) {
    var mem=[];
  var arr=number.toString().split("");
  if (arr.length===1&&arr[0]==="0") {return "zero"}
  if (arr.length>=4) {throw new RangeError}
  if (arr.length===3) {
    switch (arr[0]) {
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
  if (arr.length==2) {
    switch (arr[0]+arr[1]) {
      case "10":
        mem.push("ten")
        arr.splice(0, 2)
        break;
       case "11":
        mem.push("eleven")
        arr.splice(0, 2)
        break;
      case "12":
        mem.push("twelve")
        arr.splice(0, 2)
        break;
      case "13":
        mem.push("thirteen")
        arr.splice(0, 2)
        break;
      case "14":
        mem.push("fourteen")
        arr.splice(0, 2)
        break;
       case "15":
        mem.push("fifteen")
        arr.splice(0, 2)
        break;
      case "16":
        mem.push("sixteen")
        arr.splice(0, 2)
        break;
      case "17":
        mem.push("seventeen")
        arr.splice(0, 2)
        break;
      case "18":
        mem.push("eighteen")
        arr.splice(0, 2)
        break;
      case "19":
        mem.push("nineteen")
        arr.splice(0, 2)
        break;
      default:
        break;
    }
    switch (arr[0]) {
        case "0":
          arr.splice(0, 1);
          break;
        case "2":
          mem.push("twenty");
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
  if (arr.length===1) {
    switch (arr[0]) {
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
  if (arr.length===0) {return (mem.join(" "))}
}
