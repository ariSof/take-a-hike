let url = "";
let hike_id = 1;

var myWidget = cloudinary.createUploadWidget({
    
  cloudName: 'dwjrsllb0', 
  uploadPreset: 'hike_img'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      url = result.info.url;
      console.log(url);
      console.log('Done! Here is the image info: ', result.info); 

      const addImage = async() => {

        const response = await fetch('/api/hiking/image', {
          method: 'POST',
          body: JSON.stringify({ url, hike_id}),
          headers: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
          // If successful, redirect the browser to the profile page
          //document.location.replace('/home');
        } else {
          alert(response.statusText);
        }
      }
       
      addImage();

    } else {
        console.log('Attempting cloud widget');
        console.error(error);
    }
  }
)

document.getElementById("upload_widget").addEventListener("click", function(){
    myWidget.open();
  }, false);