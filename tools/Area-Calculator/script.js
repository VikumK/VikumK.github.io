// Function to handle shape change
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

// Function to calculate the area based on the selected shape and input values
function calculateArea() {
    var shape = document.getElementById('shape').value;
    var resultContainer = document.getElementById('result');
    var area;

    switch(shape) {
        case 'square':
            var side = parseFloat(document.getElementById('side').value);
            area = side * side;
            break;
        case 'rectangle':
            var length = parseFloat(document.getElementById('length').value);
            var width = parseFloat(document.getElementById('width').value);
            area = length * width;
            break;
        case 'circle':
            var radius = parseFloat(document.getElementById('radius').value);
            var piValue = parseFloat(eval(document.querySelector('input[name="pi"]:checked').value)); // Evaluate π value
            area = piValue * radius * radius;
            break;
        case 'triangle':
            var base = parseFloat(document.getElementById('base').value);
            var height = parseFloat(document.getElementById('height').value);
            area = 0.5 * base * height;
            break;
        default:
            area = NaN; // Invalid shape selected
    }

    // Display the result
    if (!isNaN(area)) {
        resultContainer.innerHTML = '<p>The area is: <b><u>' + area.toFixed(2) + '</u></b></p>';
    } else {
        resultContainer.innerHTML = '<p>Please select a valid shape and provide valid dimensions.</p>';
    }
}

// Function to reset the form
function resetForm() {
    // Clear all input fields
    var inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(function(input) {
        input.value = '';
    });

    // Clear the result container
    document.getElementById('result').innerHTML = '';
}

// Attach event listeners
document.getElementById('shape').addEventListener('change', handleShapeChange);
document.getElementById('calculateButton').addEventListener('click', calculateArea);
document.getElementById('resetButton').addEventListener('click', resetForm);

// Call the function to show relevant fields when the page loads
window.onload = function() {
    handleShapeChange.call(document.getElementById('shape'));
};
