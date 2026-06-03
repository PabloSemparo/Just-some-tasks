function normalizeUnits(manifest) {
  const copy = { ...manifest };

  if (copy.unit === "lb") {
    copy.weight = Number((copy.weight * 0.45).toFixed(2));
    copy.unit = "kg";
  }

  return copy;
}

function validateManifest(manifest) {
  const requiredFields = ["containerId", "destination", "weight", "unit", "hazmat"];
  const result = {};

  let isValid = true;

  for (let field of requiredFields) {
    if (!(field in manifest)) {
      result[field] = "Missing";
      isValid = false;
      continue;
    }

    const value = manifest[field];

    switch (field) {
      case "containerId":
        if (typeof value !== "number" || !Number.isInteger(value) || value <= 0) {
          result[field] = "Invalid";
          isValid = false;
        }
        break;

      case "destination":
        if (typeof value !== "string" || value.trim() === "") {
          result[field] = "Invalid";
          isValid = false;
        }
        break;

      case "weight":
        if (typeof value !== "number" || Number.isNaN(value) || value <= 0) {
          result[field] = "Invalid";
          isValid = false;
        }
        break;

      case "unit":
        if (value !== "kg" && value !== "lb") {
          result[field] = "Invalid";
          isValid = false;
        }
        break;

      case "hazmat":
        if (typeof value !== "boolean") {
          result[field] = "Invalid";
          isValid = false;
        }
        break;
    }
  }

  return isValid ? {} : result;
}

function processManifest(manifest) {
  const validationResult = validateManifest(manifest);
  const containerId = manifest.containerId;

  const isValid = Object.keys(validationResult).length === 0;

  if (isValid) {
    const normalized = normalizeUnits(manifest);

    console.log(`Validation success: ${containerId}`);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {
    console.log(`Validation error: ${containerId}`);
    console.log(validationResult);
  }
}
