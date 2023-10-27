

export  function getRoadMapCard(){
    console.log(category)
    return request({
       
       url:baseUrl+"/v1/post/recommend/subject",
       method:'get',
       body: JSON.stringify({
         
       }) 
    })
  }