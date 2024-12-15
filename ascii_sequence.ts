
class RandomSequenceGenerator {
  private seed: number;
  constructor(seed?: number) {
    this.seed = seed || Date.now();
  }
  // Function to generate a random sequence of printable characters
  public generateSequence(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}:<>?';
    let sequence = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = this.getRandomNumber(chars.length);
      sequence += chars[randomIndex];
    }
    return sequence;
  }
  // Function to generate a new random seed for the generator
  public generateNewSeed(): void {
    this.seed = Date.now() + Math.floor(Math.random() * 1000000);
  }
  // Helper function to get a random number using the current seed
  private getRandomNumber(max: number): number {
    const x = Math.sin(this.seed++) * 10000;
    return Math.floor((x - Math.floor(x)) * max);
  }
}
// Example usage:
const generator = new RandomSequenceGenerator();
generator.generateNewSeed(); // Generate a new seed
console.log(generator.generateSequence(55)); // Generate another sequence with the new seed
