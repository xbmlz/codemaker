const welcomeCode = `
`;

export interface Store {
  initialShowOutput: boolean;
}

export class GlobalStore implements Store {
  initialShowOutput: boolean;
  constructor({ showOutput = false }: { showOutput?: boolean }) {
    this.initialShowOutput = showOutput;
  }
}
