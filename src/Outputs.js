/**
 * Helpers for output through STDOUT or console.log
 * @class Outputs
 * @classdesc Helpers for output through STDOUT or console.log
 */
class Outputs {

    /* global process:true */

    /**
     * Alias for message()
     * @param  {String} output The string to output.
     * @return {Object}        Returns class.
     */
    static m(output) {
        return this.message(output);
    }

    /**
     * Uses STDOUT if using a Node.js environment,
     * otherwise uses console.log()
     * @param  {string} output The tring to output.
     * @return {Object}        Returns class.
     */
    static message(output) {
        if(process.argv) {
            process.stdout.write(output);
        } else {
            let find = ['\t', '\n'],
                out = output;

            for(let i = 0; i < find.length; i++) {
                out = out.replace(find[i], '');
            }

            console.log(out);
        }

        return this;
    }

    /**
     * Alias for clearLine()
     * @return {Object}     Returns class.
     */
    static cl() {
        return this.clearLine();
    }

    /**
     * Clears the current line and places cursor at
     * position:0
     * @return {Object}     Returns class.
     */
    static clearLine() {
        // Remove previous output line.
        process.stdout.clearLine();
        process.stdout.cursorTo(0);

        return this;
    }

    /**
     * Alias for newLine()
     * @return {Object}     Returns class.
     */
    static nl() {
        return this.newLine();
    }

    /**
     * Sends a new (\n) to message()
     * @return {Object}     Returns class.
     */
    static newLine() {
        return this.message('\n');
    }
}

export default Outputs;
