var data = require("../data/things.json");
const d = JSON.parse(JSON.stringify(data));

const EmojoAPI = {
  getSomeThing: function() {
    return "🇨🇳";
    // return "A";
  },
  getEmojoByWords: function(words) {
    return d[words]
      ? d[words][Math.floor(Math.random() * d[words].length)]
      : "😒";
  },
  getEmojoNameBySearch: function(words) {
    var ks = Object.keys(d);
    for (var index in ks) {
      if (words.includes(ks[index])) {
        console.log(index, ks[index], words);
        return ks[index];
      }
    }
  },
  exists: function(words) {
    return d[words] ? true : false;
  }
};
// fetch("./data/things.json")
//   .then(res => res.json())
//   .then(data => {
//     console.log("data:", data);
//   });
export default EmojoAPI;
