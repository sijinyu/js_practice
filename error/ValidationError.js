class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = " ValidationError";
  }
}

function readUser(json) {
  let user = JSON.parse(json);

  if (!user.age) {
    throw new ValidationError("No field: age");
  }
  if (!user.name) {
    throw new ValidationError("No field: name");
  }
  return user;
}

try {
  let user = readUser('{ "age" : 24 }');
} catch (err) {
  if (err instanceof ValidationError) {
    alert("Invalid data: " + err.message);
  } else if (err instanceof SyntaxError) {
    alert("JSON Syntax Error: " + err.message);
  } else {
    throw err;
  }
}
