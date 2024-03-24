        // Function to calculate the roots of the quadratic equation
        function calculateRoots() {
            // Get the values of coefficients a, b, and c from the input fields
            var a = parseFloat(document.getElementById('a').value);
            var b = parseFloat(document.getElementById('b').value);
            var c = parseFloat(document.getElementById('c').value);

            // Calculate the discriminant
            var discriminant = b * b - 4 * a * c;

            // Initialize variables to store the roots
            var x1, x2;

            // Check the value of the discriminant to determine the nature of roots
            if (discriminant > 0) {
                // Real and distinct roots
                x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                // Update the solution HTML with the calculated roots
                document.getElementById('result').innerHTML = '<p>Root 1 (x<sub>1</sub>): ' + x1 + '</p><p>Root 2 (x<sub>2</sub>): ' + x2 + '</p>';
            } else if (discriminant === 0) {
                // Real and equal roots
                x1 = x2 = -b / (2 * a);
                // Update the solution HTML with the calculated roots
                document.getElementById('result').innerHTML = '<p>Root 1 (x<sub>1</sub>): ' + x1 + '</p><p>Root 2 (x<sub>2</sub>): ' + x2 + '</p>';
            } else {
                // Complex roots
                var realPart = -b / (2 * a);
                var imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
                // Update the solution HTML with the calculated roots
                document.getElementById('result').innerHTML = '<p>Root 1 (x<sub>1</sub>): ' + realPart + ' + ' + imaginaryPart + 'i</p><p>Root 2 (x<sub>2</sub>): ' + realPart + ' - ' + imaginaryPart + 'i</p>';
            }
        }

        // Add event listeners to the input fields to trigger calculation on change
        document.getElementById('a').addEventListener('input', calculateRoots);
        document.getElementById('b').addEventListener('input', calculateRoots);
        document.getElementById('c').addEventListener('input', calculateRoots);

        // Initial calculation on page load
        calculateRoots();

        // Reset button functionality
        document.getElementById('resetButton').addEventListener('click', function () {
            document.getElementById('a').value = '';
            document.getElementById('b').value = '';
            document.getElementById('c').value = '';
            document.getElementById('result').innerHTML = '';
        });