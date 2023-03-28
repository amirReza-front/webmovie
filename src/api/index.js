import axios from "axios"
  
  function createFormData(obj) {

    let formData = new FormData();
    Object.keys(obj).forEach(
        (propName) => {
            formData.append(propName, obj[propName]);
        }
    )
    return formData
  }


  export default  function Axios(url,method = "get",body){
    let instance =  axios.create({
        baseURL:"https://cdn-a.cloudcast.dev/" //data API
    })
    try{
        const res =  instance[method](url,createFormData(body))
        return res
    }catch(ex){
        // throw Error(ex)
        console.log("err")
    }
  }
