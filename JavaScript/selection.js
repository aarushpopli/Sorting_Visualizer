async function selection(){
    console.log('In selection()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        console.log('In ith loop');
        let min_index = i;
        // Giving color to selected element
        ele[i].style.background = "#ff6700";
        for(let j = i+1; j < ele.length; j++){
            console.log('In jth loop');
            // Giving color to current element
            ele[j].style.background = "#ff0000";

            await waitforme(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                console.log('In if condition height comparision');
                if(min_index !== i){
                    // Changing color of previous minimum index to normal
                    ele[min_index].style.background = "#ffffff";
                }
                min_index = j;
            } 
            else{
                // If the current comparision is more than minimum index change color to normal
                ele[j].style.background = '#ffffff';
            }   
        }
        await waitforme(delay);
        swap(ele[min_index], ele[i]);
        // Giving color to unsorted element after swapping 
        ele[min_index].style.background = '#ffffff';
        // Giving color to sorted element after swapping
        ele[i].style.background = 'green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});