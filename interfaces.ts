interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `
    Name: ${this.name}
    Year: ${this.year}
    Broken: ${this.broken}
    `;
  },
};

const drink = {
  color: 'red',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printItemSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printItemSummary(oldCivic);
printItemSummary(drink);
