//Newer Appr
var getRow = function(rowIndex) {
  //T(C(N) and S(C(N) ==O(N) as it requires contigous memory alloc iteratively
    let row = [1];//row declare

    for (let i = 0; i < rowIndex; i++) {//iterating through RowIndx
        row = row.map((val, index) => (row[index - 1] || 0) + (row[index] || 0));//Grid's Row's Mapping 
        row.push(1);//Pushing Row Indx Val
    }
    return row;//Printing Row    
};
//Older Appr
// var getRow = function(rowIndex) {
//     const first=0;
//     const end=0;
//     const output=0;
//     const left=0;const add=0;
//     const right=0;

//     if(numRows>=1)output.push([1]);
//     if(numRows>=2)output.push([1,1]);
//     for(let i=0;i<numRows;i++){
//         first=end;
//         first=1;
//         const prevArr=output[i-1];
//         if(prevArr.length==2)output.push([first,first -1-end,end]);
//         else right=1;
//         }
//         while(right>prevArr.length){
//             add.push(prevArr[left]+prevArr[right]);
//             left++;right++;
//             output.push([first,add,end]);
//         }
// };
