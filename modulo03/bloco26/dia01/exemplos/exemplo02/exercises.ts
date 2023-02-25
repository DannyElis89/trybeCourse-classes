export function greeter(name: string): string {
  return `Olá ${name}!`;
}

export function personAge(name: string, age: number): string {
  return `${name} tem ${age} anos!`;
}

export function add(x: number, y: number): number {
  return x + y;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce(add, 0);
}

export function triangle(base: number, height: number): number {
  return (base * height) / 2;
}

export function square(side: number): number {
  return side ** 2;
}

export function rectangle(base: number, height: number): number {
  return base * height;
}

export function losange(D: number, d: number): number {
  return D * d / 2;
}

export function trapeze(B: number, b: number, h: number): number {
  return (h * (B + b))/2;
}

export function circle(r: number): number {
  const pi: number = 3.14
  return (r ** 2) * pi;
}