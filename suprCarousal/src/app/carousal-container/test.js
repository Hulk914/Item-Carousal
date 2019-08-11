var a = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
k = a.length - 1;
for (var i = 0; i <= k; i++) {
    l = a[i].length - 1;
    for (var j = 0; j <= l; j++) {
        swap(i,j,k-j,i);
    }
}

function swap(origR, origC, newR, newC) {
    console.log(origR, origC, newR, newC)
    temp = a[origR][origC];
    a[origR][origC] = a[newR][newC];
    a[newR][newC] = temp;
}