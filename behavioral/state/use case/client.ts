// State interface
interface VendingMachineState {
  insertCoin(): void;
  selectProduct(): void;
  dispenseProduct(): void;
}

// Concrete States
class WaitingForCoinState implements VendingMachineState {
  private machine: VendingMachine;

  constructor(machine: VendingMachine) {
    this.machine = machine;
  }

  insertCoin(): void {
    console.log("Coin inserted.");
    this.machine.setState(this.machine.getWaitingForSelectionState());
  }

  selectProduct(): void {
    console.log("Insert coin first.");
  }

  dispenseProduct(): void {
    console.log("Insert coin first.");
  }
}

class WaitingForSelectionState implements VendingMachineState {
  private machine: VendingMachine;

  constructor(machine: VendingMachine) {
    this.machine = machine;
  }

  insertCoin(): void {
    console.log("Coin already inserted.");
  }

  selectProduct(): void {
    console.log("Product selected.");
    this.machine.setState(this.machine.getDispensingState());
  }

  dispenseProduct(): void {
    console.log("Select product first.");
  }
}

class DispensingState implements VendingMachineState {
  private machine: VendingMachine;

  constructor(machine: VendingMachine) {
    this.machine = machine;
  }

  insertCoin(): void {
    console.log("Wait, dispensing product.");
  }

  selectProduct(): void {
    console.log("Wait, dispensing product.");
  }

  dispenseProduct(): void {
    console.log("Dispensing product...");
    this.machine.setState(this.machine.getWaitingForCoinState());
  }
}

// Context class
class VendingMachine {
  private waitingForCoinState: VendingMachineState;
  private waitingForSelectionState: VendingMachineState;
  private dispensingState: VendingMachineState;
  private currentState: VendingMachineState;

  constructor() {
    this.waitingForCoinState = new WaitingForCoinState(this);
    this.waitingForSelectionState = new WaitingForSelectionState(this);
    this.dispensingState = new DispensingState(this);

    this.currentState = this.waitingForCoinState; // Initial state
  }

  setState(state: VendingMachineState): void {
    this.currentState = state;
  }

  getWaitingForCoinState(): VendingMachineState {
    return this.waitingForCoinState;
  }

  getWaitingForSelectionState(): VendingMachineState {
    return this.waitingForSelectionState;
  }

  getDispensingState(): VendingMachineState {
    return this.dispensingState;
  }

  insertCoin(): void {
    this.currentState.insertCoin();
  }

  selectProduct(): void {
    this.currentState.selectProduct();
  }

  dispenseProduct(): void {
    this.currentState.dispenseProduct();
  }
}

const machine = new VendingMachine();

machine.insertCoin(); // Output: Coin inserted.
machine.selectProduct(); // Output: Product selected.
machine.dispenseProduct(); // Output: Dispensing product...

machine.selectProduct(); // Output: Insert coin first.
