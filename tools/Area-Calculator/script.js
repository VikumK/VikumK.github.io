// Define the event listener function
function handleShapeChange() {
    var shape = this.value;
    var formulaDiv = document.getElementById('formula');
    var inputsDiv = document.getElementById('inputs');

    // Hide all input fields
    var allInputs = inputsDiv.querySelectorAll('.row');
    allInputs.forEach(function(input) {
        input.style.display = 'none';
    });

    // Show input fields relevant to the selected shape
    switch(shape) {
        case 'square':
            document.getElementById('squareInputs').style.display = 'flex';
            formulaDiv.innerHTML = '<h4>A = s<sup>2</sup></h4>';
            break;
        case 'rectangle':
            document.getElementById('rectangleInputs').style.display = 'flex';
            formulaDiv.innerHTML = '<h4>A = l × w</h4>';
            break;
        case 'circle':
            document.getElementById('circleInputs').style.display = 'flex';
            formulaDiv.innerHTML = '<h4>A = π × r<sup>2</sup></h4>';
            break;
        case 'triangle':
            document.getElementById('triangleInputs').style.display = 'flex';
            formulaDiv.innerHTML = '<h4>A = 0.5 × b × h</h4>';
            break;
        default:
            formulaDiv.innerHTML = '';
    }
}

// Attach the event listener to the shape select element
document.getElementById('shape').addEventListener('change', handleShapeChange);

// Trigger the event listener manually to show relevant fields when the page loads
handleShapeChange.call(document.getElementById('shape'));
