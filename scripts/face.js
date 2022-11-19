const faceButton =document.getElementById('face__button-search');
const faceInput = document.getElementById('face__input');
const faceImage = document.getElementById('face__image');
const faceOverlay = document.getElementById('face__bounding-box');


let imageUrl = "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY2V8ZW58MHx8MHx8&w=1000&q=80";
let dataArray = [];



    const USER_ID = '6ugp3gntm0ry';
    const PAT = '3c0872d0e71c4ad0ac7f8aac5a8ecfc9';
    const APP_ID = 'my-first-application';
    const MODEL_ID = 'face-detection';
    const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';    


    function calculateFaceLocation(data){
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('face__image');
        const width = Number(image.width);
        const height = Number(image.height);
    
        return {
          leftCol: clarifaiFace.left_col * width,
          topRow: clarifaiFace.top_row * height,
          rightCol: width - (clarifaiFace.right_col * width),
          bottomRow: height - (clarifaiFace.bottom_row * height)
        }
      }

  

    faceButton.addEventListener("click",() =>{


        if(faceInput.value.length !== 0){
 

    const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": imageUrl
                    }
                }
            }
        ]
    });


    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    faceImage.src = imageUrl;

    async function getData(){
        try{
            const response = await fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions);
            dataArray = await response.json();
            if(dataArray=== undefined){}
            let boundingBox = calculateFaceLocation(dataArray);

            faceOverlay.style.left = boundingBox.leftCol;
            faceOverlay.style.right = boundingBox.rightCol;
            faceOverlay.style.top = boundingBox.topRow;
            faceOverlay.style.bottom = boundingBox.bottomRow;

            


        }catch(e){
            alert("Falsche Eingabe!\nVorraussetzung: http Kennung/request\nBildformat: .jpg oder .png")
            faceImage.src = "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY2V8ZW58MHx8MHx8&w=1000&q=80";

        }

    }






    getData();

}else{
    faceImage.src = "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZhY2V8ZW58MHx8MHx8&w=1000&q=80";
    console.log("ERRRRRRROR");
}

   

  
  });


















faceInput.addEventListener("change",(input)=>{

        imageUrl = input.target.value;
  
        
    
    
    });
    

