import("./index.css")


document.getElementById('btn').addEventListener('click', takingnote)
var box=document.getElementById('saveditems')
box.classList.add('bluebox')
  function takingnote(){
    
    var mynotes=document.getElementById('notes').value;
     
      console.log('hellow')
    console.log(mynotes,'i am notes')
  let h1=document.createElement('h1')
  h1.innerText= mynotes
  box.append(h1)

    

  }


    
    
    let note=document.createElement('h1')
    note.innerText="my first note"
    box.append(note)
   


















  //  npm install --save-dev @babel/core @babel/node @babel/preset-env @babel/preset-react babel-loader

//  {
//   "presets": ["@babel/env", "@babel/preset-react"]
// }

