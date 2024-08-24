import { create, all } from 'mathjs';

const math = create(all);

function decimalToSurd(decimal) {
  // Convert decimal to a fraction
  const fraction = math.fraction(decimal);
  const numerator = fraction.n;
  const denominator = fraction.d;

  // Express numerator and denominator in surd form
  const surdNumerator = math.sqrt(math.square(numerator));
  const surdDenominator = math.sqrt(math.square(denominator));

  // Simplify the surd expression
  const simplifiedSurd = math.simplify(
    math.divide(surdNumerator, surdDenominator),
  );

  return simplifiedSurd.toString();
}

// Example usage
const decimalNumber = 0.75;
const surdRepresentation = decimalToSurd(decimalNumber);
console.log(
  `The surd representation of ${decimalNumber} is ${surdRepresentation}`,
);
