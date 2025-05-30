document.addEventListener('DOMContentLoaded', function() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const calculateBtn = document.getElementById('calculate');
    const bmiValue = document.getElementById('bmi-value');
    const bmiCategory = document.getElementById('bmi-category');

    calculateBtn.addEventListener('click', calculateBMI);

    function calculateBMI() {
        const height = parseFloat(heightInput.value) / 100; // convert cm to m
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert('Please enter valid height and weight values');
            return;
        }

        const bmi = weight / (height * height);
        const roundedBMI = bmi.toFixed(1);

        bmiValue.textContent = roundedBMI;
        bmiValue.style.color = getBMIColor(bmi);
        bmiCategory.textContent = getBMICategory(bmi);
    }

    function getBMIColor(bmi) {
        if (bmi < 18.5) return '#17a2b8'; // underweight
        if (bmi >= 18.5 && bmi < 25) return '#28a745'; // normal
        if (bmi >= 25 && bmi < 30) return '#ffc107'; // overweight
        return '#dc3545'; // obese
    }

    function getBMICategory(bmi) {
        if (bmi < 18.5) return 'Underweight';
        if (bmi >= 18.5 && bmi < 25) return 'Normal weight';
        if (bmi >= 25 && bmi < 30) return 'Overweight';
        return 'Obese';
    }

    // Add animation to the calculate button
    calculateBtn.addEventListener('mousedown', function() {
        this.style.transform = 'translateY(0)';
    });

    calculateBtn.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-2px)';
    });

    calculateBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});