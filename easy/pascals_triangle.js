var generateRow = function(rows) {
    let newRow = [Number(1)];

    for (let i = 1; i < rows.length; i++) {
        newRow.push(Number(Number(rows[rows.length-1][i-1]) + Number(rows[rows.length-1][i])))
    }
    newRow.push(Number(1)),    
    rows.push(newRow);
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    if (numRows <= 0) return [];
    let rows = [[Number(1)]];
    if (numRows === 1) return rows;
    rows.push([Number(1),Number(1)]);
    if (numRows === 2) return [numRows];

    for (let i = 0; i < numRows-2; i++){
        generateRow(rows)
    };
    return rows;
};
