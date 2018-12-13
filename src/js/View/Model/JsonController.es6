//jsonを取得する

export default class JsonController{
  constructor(url){
    this.url = url;
  }

  getJson(){
    return new Promise((resolve, reject)=> {
      fetch(this.url)
      .then(res=>{
        return res.json();
      })
      .then(json=>{
        const j = JSON.stringify(json);
        resolve(j);
      })
      .catch(err => {
        reject(err);
      })
    });
  }
}
