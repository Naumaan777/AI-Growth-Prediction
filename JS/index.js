function updateMap() {
   fetch("/data.json")
   .then(response => response.json())  
   .then(rsp => { 
        console.log(rsp.data)
        rsp.data.forEach(element => {
           latitude = element.latitude;
           longitude= element.longitude;
         
           cases = element.growthai;
           if (cases > 55){
               color = "rgb(366,0,0)";
	   }
 
           else{
		color = "rgb(${cases},0,0)";
		}




           //mark on the map
           new World map.Marker({
               draggable: false,
               color: color
           })
        
              .setLngLat([longitude,latitude])
              .addTo(map);
         });
    }) 

}


updateMap();