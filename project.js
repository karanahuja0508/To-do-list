var tasks=[]
function addTask(){
   var input=document.getElementById('input')
   var maindivi=document.getElementById('maindiv')
   if(input.value==""){
    return
   }
   var main=document.createElement("div")
   var cross=document.createElement("button")
   var up=document.createElement("button");
   var down=document.createElement("button")
   var content=document.createElement("span")
   main.style.backgroundColor="rgb(122,227,202)"
   main.style.width="340px"
   main.style.height="39px"
   main.style.borderRadius="7px"
   cross.style.height="32px"
   cross.style.borderRadius="5px"
   down.style.height="32px"
   down.style.borderRadius="5px"
   up.style.height="32px"
   up.style.borderRadius="5px"
   
   main.setAttribute("class","mx-auto")
 main.style.marginTop="15px"
//  main.style.marginBottom="5px"
 main.style.marginLeft="580px"
 content.setAttribute("class","span")
   
   cross.innerHTML="X"
   cross.style.backgroundColor="rgb(235,80,109)"
   up.innerHTML="↑"
   up.style.backgroundColor="rgb(67,179,230)"
   down.innerHTML="↓"
   down.style.backgroundColor="rgb(244,154,57)"
   cross.setAttribute("class","buttons")
   up.setAttribute("class","buttons")
   down.setAttribute("class","buttons")
  content.style.fontWeight="bold"
   content.innerHTML=`  ${input.value}`
   main.appendChild(cross)
   main.appendChild(up)
   main.appendChild(down)
   main.appendChild(content)
   
   input.focus()
   tasks.push(main);
   for(let a of tasks)
   maindivi.appendChild(a);
   cross.addEventListener("click",()=>{
      var cont=main;
      var temp=[];
      for(var i=0;i<tasks.length;i++){
         if(tasks[i]!=cont){
            temp.push(tasks[i])
         }
      }
      tasks=[]
      for(var i=0;i<temp.length;i++){
         tasks.push(temp[i])
      }
      
     maindivi.removeChild(cont);

   })
   up.addEventListener("click",()=>{
      var div=main;
         let toswap;
         for(let i=0;i<tasks.length;i++){
             if(tasks[i]==div){
               toswap=i;
                 break;
             }
         }

         if(toswap!=0){
               var divswap=tasks[toswap];
               tasks[toswap]=tasks[toswap-1];
               tasks[toswap-1]=divswap;
         }
        
          

         for(var i=0;i<tasks.length;i++){
             maindivi.appendChild(tasks[i]);
         }
   })
   down.addEventListener("click",()=>{
      var div=main;
         let toswap;
         for(let i=0;i<tasks.length;i++){
             if(tasks[i]==div){
               toswap=i;
                 break;
             }
         }
            //  console.log(tasks.length)
         if(toswap!=tasks.length-1){
               var divswap=tasks[toswap];
               tasks[toswap]=tasks[toswap+1];
               tasks[toswap+1]=divswap;
         }

         for(var i=0;i<tasks.length;i++){
         maindivi.appendChild(tasks[i]);
         }
   })
  input.value=""
}