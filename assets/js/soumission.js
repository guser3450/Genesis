// var Commercial = document.getElementById("commercialQ").innerHTML;

// var Hybrid = document.getElementById("hybridQ").innerHTML;

// var Corporate = document.getElementById("corporateQ").innerHTML;

// var Residential = document.getElementById("residentialQ").innerHTML; 

// document.getElementById("Type").innerHTML;



//selection 

function selection(){
    console.log("sa marche")

    var type = document.getElementById("type").value
    console.log("sa_commence_residentiel")
    if (type=="ResidentialS")
      {
        console.log("RESIDENTIAL")
        document.getElementById("residentialQ").style.display="block"
        document.getElementById("commercialQ").style.display="none"
        document.getElementById("hybridQ").style.display="none"
        document.getElementById("corporateQ").style.display="none"
    }
    if (type=="CommercialS")
    {
        console.log("COMMERCIAL")
        document.getElementById("residentialQ").style.display="none"
        document.getElementById("commercialQ").style.display="block"
        document.getElementById("hybridQ").style.display="none"
        document.getElementById("corporateQ").style.display="none"
    }
    if (type=="CorporateS")
    {
        console.log("CORPORATE")
        document.getElementById("residentialQ").style.display="none"
        document.getElementById("commercialQ").style.display="none"
        document.getElementById("hybridQ").style.display="none"
        document.getElementById("corporateQ").style.display="block"
    }
    if (type=="HybridS")
    {
        console.log("HYBRID")
        document.getElementById("residentialQ").style.display="none"
        document.getElementById("commercialQ").style.display="none"
        document.getElementById("hybridQ").style.display="block"
        document.getElementById("corporateQ").style.display="none"
    }
    if (type=="Select")
    {
        console.log("SELECT")
        document.getElementById("residentialQ").style.display="none"
        document.getElementById("commercialQ").style.display="none"
        document.getElementById("hybridQ").style.display="none"
        document.getElementById("corporateQ").style.display="none"
    }


}

var standard = 0.1;
var premium = 0.13;
var excelium = 0.16; 



// calcule residentiel



function residential(){
    var standardP = document.getElementById("standard").value;
    var premiumP = document.getElementById("premium").value;
    var exceliumP = document.getElementById("excelium").value;
    var maxappart = document.getElementById("residentialQ1").value;
    var maxfloor = document.getElementById("residentialQ2").value;
    var moyenne = maxappart / maxfloor;
    var cages = moyenne / 6;
    console.log("next")
    if(document.getElementById("standard").checked)
    {
            var cagearrondit = Math.ceil(cages); // nombre de cage arrondit
            var ec = cagearrondit * standardP; //elevator cost
            var ic = ec * standard; //install cost
            var tc = ec + ic; //big total
            console.log("calcule residentiel1")
            document.getElementById("install").value = ic
            document.getElementById("bigtotal").value = tc
            document.getElementById("cage").value = ec
    }
    if(document.getElementById("premium").checked)
    {
            var cagearrondit = Math.ceil(cages); // nombre de cage arrondit
            var ec = cagearrondit * premiumP; //elevator cost
            var ic = ec * premium; //install cost
            var tc = ec + ic; //big total
            console.log("calcule residentiel2")
            document.getElementById("install").value = ic
            document.getElementById("bigtotal").value = tc
            document.getElementById("cage").value = ec
    }
    if(document.getElementById("excelium").checked)
    {
            var cagearrondit = Math.ceil(cages); // nombre de cage arrondit
            var ec = cagearrondit * exceliumP; //elevator cost
            var ic = ec * excelium; //install cost
            var tc = ec + ic; //big total
            console.log("calcule residentiel3")
            document.getElementById("install").value = ic
            document.getElementById("bigtotal").value = tc
            document.getElementById("cage").value = ec
    }
}



// calcule commercial
function commercial(){

    var standardP = document.getElementById("standard").value;//7565
    var premiumP = document.getElementById("premium").value;//12345
    var exceliumP = document.getElementById("excelium").value;//15400
        //QUESTION IMPORTER RADIO BUTTON ANSWER IS execute
        if(document.getElementById("standard").checked){
            console.log("!!!!!standard!!!!")
            var ec = document.getElementById("commercialQ5").value * standardP; //elevator cost
            var ic = ec * standard; //install cost
            var tc = ec + ic; //total cost
            console.log(document.getElementById("commercialQ5").value)
            console.log("a")
            document.getElementById("install").value = ic
            document.getElementById("bigtotal").value = tc
            document.getElementById("cage").value = ec
        }

        if(document.getElementById("premium").checked)
        {
            console.log("!!!!!premium!!!!")
            var ec = document.getElementById("commercialQ5").value * premiumP; //elevator cost
            var ic = ec * premium; //install cost
            var tc = ec + ic; //total cost
            console.log(document.getElementById("commercialQ5").value)
            console.log("b")
            document.getElementById("install").value = ic
            document.getElementById("bigtotal").value = tc
            document.getElementById("cage").value = ec
        }

        if(document.getElementById("excelium").checked)
        {
            console.log("!!!!!excelium!!!!")
            var ec = document.getElementById("commercialQ5").value * exceliumP; //elevator cost
            var ic = ec * excelium; //install cost
            var tc = ec + ic; //total cost
            console.log(document.getElementById("commercialQ5").value)
            console.log("c")
            document.getElementById("install").value = ic
            document.getElementById("bigtotal").value = tc
            document.getElementById("cage").value = ec
        }
}   

// calcule hybrid
function hybrid(){

    var standardP = document.getElementById("standard").value; //7565
    var premiumP = document.getElementById("premium").value; //12345
    var exceliumP = document.getElementById("excelium").value; //15400
    var etage = document.getElementById("hybridQ2").value; 
    var basement = document.getElementById("hybridQ3").value;
    var floorpeople = document.getElementById("hybridQ5").value;

  



        if (document.getElementById("hybridQ3", 'hybridQ2', 'hybridQ5').value != null) {
            console.log("CORPORATE12345678")
            console.log(floorpeople)    


            // 1e etape de calcule
    
            var maxetage = Math.ceil(Number(etage) + Number(basement));
            console.log('max floor', maxetage)

            var maxpeople = Math.ceil(Number(floorpeople) * Number(maxetage));
            console.log(maxpeople)

            var asparcol = Math.ceil(maxpeople / 1000); // mon 23
            console.log('asparcol', asparcol)

            var colonne = Math.ceil(maxetage / 20); // mon 5
            console.log('colonne', colonne)

            var cage = Math.ceil(Number(asparcol) / Number(colonne) ); // 2e 5
            console.log("cage", cage)
           
            var totalas = Math.round(Number(colonne) * Number(cage)); //total elevator
            console.log('total', totalas)


            //2e etape de calcule
            if(document.getElementById("standard").checked){
                console.log("calcule standard")
                var p = Math.ceil(totalas * standardP);
                console.log("elevator cost", p)
                var ic = p * standard; //install cost
                var bt = ic + p; //big total
                document.getElementById("install").value = ic
                document.getElementById("cage").value = p
                document.getElementById("bigtotal").value = bt
                console.log("YES!!")
            }

            else if(document.getElementById("premium").checked){
                console.log("calcule standard")
                var p = Math.ceil(totalas * premiumP);
                console.log("elevator cost", p)
                var ic = p * premium; //install cost
                var bt = ic + p; //big total
                document.getElementById("install").value = ic
                document.getElementById("cage").value = p
                document.getElementById("bigtotal").value = bt
                console.log("YES!!")
            }

            else if(document.getElementById("excelium").checked){
                console.log("calcule standard")
                var p = Math.ceil(totalas * exceliumP);
                console.log("elevator cost", p)
                var ic = p * excelium; //install cost
                var bt = ic + p; //big total
                document.getElementById("install").value = ic
                document.getElementById("cage").value = p
                document.getElementById("bigtotal").value = bt
                console.log("YES!!")
            }
        }    
}
// calcule corporate
function corporate(){

    var standardP = document.getElementById("standard").value; //7565
    var premiumP = document.getElementById("premium").value; //12345
    var exceliumP = document.getElementById("excelium").value; //15400
    var etage = document.getElementById("corporateQ2").value; 
    var basement = document.getElementById("corporateQ3").value;
    var floorpeople = document.getElementById("corporateQ5").value;

  



        if (document.getElementById("corporateQ3", 'corporateQ2', 'corporateQ5').value != null) {
            console.log("CORPORATE12345678")
            console.log(floorpeople)    


            // 1e etape de calcule
    
            var maxetage = Math.ceil(Number(etage) + Number(basement));
            console.log('max floor', maxetage)

            var maxpeople = Math.ceil(Number(floorpeople) * Number(maxetage));
            console.log(maxpeople)

            var asparcol = Math.ceil(maxpeople / 1000); // mon 23
            console.log('asparcol', asparcol)

            var colonne = Math.ceil(maxetage / 20); // mon 5
            console.log('colonne', colonne)

            var cage = Math.ceil(Number(asparcol) / Number(colonne) ); // 2e 5
            console.log("cage", cage)
           
            var totalas = Math.round(Number(colonne) * Number(cage)); //total elevator
            console.log('total', totalas)


            //2e etape de calcule
            if(document.getElementById("standard").checked){
                console.log("calcule standard")
                var p = Math.ceil(totalas * standardP);
                console.log("elevator cost", p)
                var ic = p * standard; //install cost
                var bt = ic + p; //big total
                document.getElementById("install").value = ic
                document.getElementById("cage").value = p
                document.getElementById("bigtotal").value = bt
                console.log("YES!!")
            }

            else if(document.getElementById("premium").checked){
                console.log("calcule standard")
                var p = Math.ceil(totalas * premiumP);
                console.log("elevator cost", p)
                var ic = p * premium; //install cost
                var bt = ic + p; //big total
                document.getElementById("install").value = ic
                document.getElementById("cage").value = p
                document.getElementById("bigtotal").value = bt
                console.log("YES!!")
            }

            else if(document.getElementById("excelium").checked){
                console.log("calcule excelium")
                var p = Math.ceil(totalas * exceliumP);
                console.log("elevator cost", p)
                var ic = p * excelium; //install cost
                var bt = ic + p; //big total
                document.getElementById("install").value = ic
                document.getElementById("cage").value = p
                document.getElementById("bigtotal").value = bt
                console.log("YES!!")
            }
        }    
}
