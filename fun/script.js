function a()
{
    var inp=document.getElementById("name").value;
    
    if(inp==="auro" || inp==="Auro")
    {
    document.getElementById("disp").textContent="Apun iss page ka maalik hai";
    }

    if(inp==="bikram" || inp==="Bikram")
    {
     document.getElementById("disp").textContent="aau "+inp+" partner, kenta!";
    }
    
    if(inp==="ayush" || inp==="Ayush"){

    document.getElementById("disp").textContent=inp+" gaddi, tume kain!";}

    
    if(inp==="sidhant"  || inp==="Sidhant" )
    {document.getElementById("disp").textContent="Hey Macyapp,what's up buddy! ";
    }

     if(inp==="dadarnath" || inp="Dadarnath")
    {document.getElementById("disp").textContent="Dada,mauke kain hega je bahar kari dela";
     }
    
}
