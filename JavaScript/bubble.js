async function bubble() {
    console.log('In bubble()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            // Giving colors to the two elements being compared
            ele[j].style.background = "#ff6700";
            ele[j+1].style.background = "#ff6700";
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = '#ebebeb';
            ele[j+1].style.background = '#ebebeb';
        }
        ele[ele.length-1-i].style.background = "green"; // Color for sorted element
    }
    ele[0].style.background = "green"; // Color for first element after sorting
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});