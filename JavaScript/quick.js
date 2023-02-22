async function partitionLomuto(ele, l, r){
    console.log('In partitionLomuto()');
    let i = l - 1;
    // Giving color to pivot element
    ele[r].style.background = "#ff0000";
    for(let j = l; j <= r - 1; j++){
        console.log('In partition Lomuto for j');
        // Giving color to current element
        ele[j].style.background = "#3944bc";
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            console.log('In partition Lomuto for j if');
            i++;
            swap(ele[i], ele[j]);
            // Giving color to swapped elements
            ele[i].style.background = "#ff6700";
            if(i != j) ele[j].style.background = "#ff6700";
            await waitforme(delay);
        }
        else{
            // Giving color if traversed element is not less than pivot
            ele[j].style.background = "#fda4ba";
        }
    }
    i++;
    await waitforme(delay);
    swap(ele[i], ele[r]); // 
    console.log(`i = ${i}`, typeof(i));

    ele[r].style.background = "#fda4ba";
    ele[i].style.background = 'green'; // Giving color to pivot in sorted position
    await waitforme(delay);
    
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'green')
            ele[k].style.background = "#ffffff";
    }

    return i;
}

async function quickSort(ele, l, r){
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l < ele.length && r < ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await quickSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});