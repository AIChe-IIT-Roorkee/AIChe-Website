import axios from "axios";

const convertToText = (desc) => {
  var elem = document.createElement("div");
  elem.innerHTML = desc;
  desc = elem.innerText;
  return desc.slice(0, 100) + "...";
};

const convertToDate = (d) => {
  var requiredDate = d.slice(0, 10);
  return requiredDate.split("-").reverse().join("-");
};

const BlogsDataFun = new Promise((resolve, reject) => {
  axios({
    method: "GET",
    url: "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/aiche-iitr",
  }).then((res) => {
    var blogs = res.data.items;
    blogs.map((b) => {
      //    console.log("keys : ", Object.keys(b))
      Object.keys(b).map((k) => {
        //    console.log(`${k} ==> ${b[k]}`);
      });
      b.description = convertToText(b.description);
      b.pubDate = convertToDate(b.pubDate);
    });
    resolve(blogs);
  });
});

export default BlogsDataFun;
