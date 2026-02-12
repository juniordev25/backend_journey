const express = require("express");
const app = express();

app.use(express.json());

function maskPassword(password) {
  return "*".repeat(password.length);
}

function logEvent(eventName, data) {
  console.log(JSON.stringify({ event: eventName, ...data }));
}

app.post("/mask-password", (req, res) => {
  const { password } = req.body;

  if (typeof password !== "string") {
    return res.status(400).json({ error: "password must be a string" });
  }

  // optional rule: disallow empty passwords
  if (password.length === 0) {
    return res.status(400).json({ error: "password cannot be empty" });
  }

  const masked = maskPassword(password);

  // log masked only (never raw)
  logEvent("mask_password_request", { maskedPassword: masked });

  return res.status(200).json({ maskedPassword: masked });
});
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
