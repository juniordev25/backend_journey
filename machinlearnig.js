// data
const inputs = [2, 3, 4, 5, 6, 7,];
const outputs = [60, 65, 70, 75, 80, 85];
// parameters for the model
let weight = Math.random();
let bias = Math.random();
// how fast the machine learns
const learningRate = 0.001;
/// prediction function
function predict(x){
    return weight * x + bias;
}
// loss function
function calculateLoss(){
    let totalError = 0;

    for (let i = 0; i < inputs.length; i++){
        const prediction = predict(inputs[i]);
        const error = prediction - outputs[i];
        totalError += error * error;
    }
    return totalError / inputs.length;
}
// now we want to awake said ai
function train(){
    for (let epoch = 0; epoch < 1000; epoch++){
        let weightGradient = 0;
        let biasGradient = 0;

        for (let i = 0; i < inputs.length; i++){
            const x = inputs[i];
            const y = outputs[i];

            const prediction = predict(x);
            const error = prediction - y;

            weightGradient += error * x;
            biasGradient += error;
        }

        weight -= learningRate * weightGradient;
        bias -= learningRate * biasGradient;
    }
}
document.getElementById("trainBtn").addEventListener("click", () => {
    train();
    const loss = calculateLoss();
    document.getElementById("lossDisplay").innerText = "Loss: " + loss.toFixed(2);
});
document.getElementById("predictBtn").addEventListener("click", () =>{
    const input = parseFloat(document.getElementById("inputValue").value);
    const result = predict(input);
    document.getElementById("predictionDisplay").innerText = 
    "Predicted Score: " + result.toFixed(2);
})