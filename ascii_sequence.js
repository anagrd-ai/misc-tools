var RandomSequenceGenerator = /** @class */ (function () {
    function RandomSequenceGenerator(seed) {
        this.seed = seed || Date.now();
    }
    // Function to generate a random sequence of printable characters
    RandomSequenceGenerator.prototype.generateSequence = function (length) {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}:<>?';
        var sequence = '';
        for (var i = 0; i < length; i++) {
            var randomIndex = this.getRandomNumber(chars.length);
            sequence += chars[randomIndex];
        }
        return sequence;
    };
    // Function to generate a new random seed for the generator
    RandomSequenceGenerator.prototype.generateNewSeed = function () {
        this.seed = Date.now() + Math.floor(Math.random() * 1000000);
    };
    // Helper function to get a random number using the current seed
    RandomSequenceGenerator.prototype.getRandomNumber = function (max) {
        var x = Math.sin(this.seed++) * 10000;
        return Math.floor((x - Math.floor(x)) * max);
    };
    return RandomSequenceGenerator;
}());
// Example usage:
var generator = new RandomSequenceGenerator();
generator.generateNewSeed(); // Generate a new seed
console.log(generator.generateSequence(55)); // Generate another sequence with the new seed
