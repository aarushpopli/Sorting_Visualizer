async function insertion(){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // Giving color to first element
    ele[0].style.background = "green";
    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;
        // Giving color to current element
        ele[i].style.background = "#ff6700";

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            console.log('In while loop');
            // Giving color to the element finding its position
            ele[j].style.background = "#ff6700";
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            // Giving color when element is sorted
            for(let k = i; k >= 0; k--){
                ele[k].style.background = "green";
            }
        }
        ele[j + 1].style.height = key;
        // Giving color to sorted element
        ele[i].style.background = "green";
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


