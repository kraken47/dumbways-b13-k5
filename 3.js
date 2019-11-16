function cetakPola(jum){
    let i= 0;
    while(i<jum){
        let temp ='';
        if(i%2==1){

               for(let j = 0; j < jum; j++){
                    if (j%2== 1){
                        temp +='= ';
                    }else if (j%2==0){
                        temp +='* ';
                    }
                }

        }else if (i%2==0){
            for(let j = 0; j < jum; j++){
                    if (j%2== 1){
                        temp +='* ';
                    }else if (j%2==0){
                        temp +='= ';
                    }
                }

        
    }
    console.log(temp);
    i++
}
}
cetakPola(5)