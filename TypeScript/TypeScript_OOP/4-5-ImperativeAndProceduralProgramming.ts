// Procedural Programming
{
    type RamenBowl= {
        portion: number;
        hasEgg: boolean;
    }

    const CHASHU_SLICE_PER_BOWL= 2;
    let preparedChashuSlices: number = 0;

    function makeRamen(portion: number):RamenBowl {

        if(preparedChashuSlices < portion * CHASHU_SLICE_PER_BOWL){
            throw new Error("Not enough chashu!")
        } // once an error is thrown, lines below won't be executed

        preparedChashuSlices -=  portion * CHASHU_SLICE_PER_BOWL;
        console.log(portion + "ramen is ordered!")
        return{
            portion:portion,
            hasEgg:false,
        }
    }
    // add chashu
    preparedChashuSlices += 6;

    // ORDER RAMEN HERE
    const orderRamen = makeRamen(2);
    console.log(orderRamen)
}
