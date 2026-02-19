// data
const inputs = [2, 3, 4, 5, 6, 7,];
const outputs = [60, 65, 70, 75, 80, 85];
// parameters for model
let weight = Math.random();
let bias = Math.random();
// learning rate
const learningRate = 0.01;
// function predict
function predict(x){
    return weight * x + bias;
}
// lost function
function calculateLoss(){
    let totalError = 0;

    for (let i = 0; i < inputs.length; i++){
        const prediction = predict(inputs[i]);
        const error = prediction - outputs[i];
        totalError += error * error;
    }
    return totalError / inputs.length;
}
function train(epochs = 2000){
    const n = inputs.length;

    for (let epoch = 0; epoch < epochs; epoch++){
        let dW = 0;
        let dB = 0;;

        for (let i = 0; i < n; i++){
            const x = inputs[i];
            const y = outputs[i];

            const yHat = predict(x)
            const error = yHat - y;

            dW += 2 * error * x;
            dB += 2 * error;
        }

        dW /=n;
        dB /= n;

        weight -= learningRate * dW;
        bias -= learningRate * dB;
   }
}
const lossDisplay = document.getElementById("lossDisplay");
const paramsDisplay = document.getElementById("paramsDisplay");
const predictionDisplay = document.getElementById("predictionDisplay");
const inputValue = document.getElementById("inputValue");

function updateDisplays(){
    const loss = calculateLoss();
    lossDisplay.innerText = "Loss: " + loss.toFixed(6);
    paramsDisplay.innerText = `w: ${weight.toFixed(4)} b: ${bias.toFixed(4)}`;
}
document.getElementById("trainBtn").addEventListener("click", () => {
  const before = calculateLoss();
  train(2000);
  const after = calculateLoss();

  lossDisplay.innerText = `Loss: ${after.toFixed(6)} (was ${before.toFixed(6)})`;
  paramsDisplay.innerText = `w: ${weight.toFixed(4)} b: ${bias.toFixed(4)}`;
});
document.getElementById("predictBtn").addEventListener("click", () =>{
    const x = parseFloat(document.getElementById("inputValue").value);
    if(Number.isNaN(x)){
        document.getElementById("predictionDisplay").innerText = 
    "Enter a valid number. ";
    return;
    }

    const result = predict(x);
    document.getElementById("predictionDisplay").innerText = "Predicted Score: " + result.toFixed(2);
    
});

updateDisplays();
/// pair it with index2.html
